"use client"

import {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import {
  groupByLength,
  makeRng,
  packLine,
  pickSameLength,
  trailingFill,
  type WordCell,
  type WordsByLength,
} from "@/lib/word-matrix"
import { UNIQUE_WORDS } from "@/lib/word-list"

type WordMatrixBackgroundProps = {
  /** Words to rotate through. Needs short words to fill lines exactly. */
  words?: string[]
  /** Font size in px for the monospace grid. */
  fontSize?: number
  /** Ratio applied to fontSize to get line height. */
  lineHeightRatio?: number
  /** Character rendered in the gaps between and after words. */
  separator?: string
  /** ms between each batch of word swaps. */
  swapIntervalMs?: number
  /** how many words are swapped on each tick. */
  swapsPerTick?: number
  className?: string
}

type Line = WordCell[]

// Pick a bright, saturated hue. High saturation + mid-high lightness keeps
// every hue vivid, which rules out grays (need low saturation) and browns
// (muddy orange/yellow that need low saturation and/or low lightness).
function randomFlashColor() {
  const hue = Math.floor(Math.random() * 360)
  const saturation = 85 + Math.random() * 15 // 85-100%
  const lightness = 55 + Math.random() * 15 // 55-70%
  return `hsl(${hue} ${saturation}% ${lightness}%)`
}

// ---- Cell: a single word that flashes a random bright color when its text changes ----
const Cell = memo(function Cell({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const mounted = useRef(false)

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    const el = ref.current
    if (!el) return
    el.style.setProperty("--wm-flash-color", randomFlashColor())
    el.classList.remove("wm-flash")
    // Force reflow so the animation restarts on every change.
    void el.offsetWidth
    el.classList.add("wm-flash")
  }, [text])

  return (
    <span ref={ref} className="wm-word">
      {text}
    </span>
  )
})

// ---- Row: words interleaved with separators + trailing fill ----
const Row = memo(function Row({
  words,
  columns,
  separator,
}: {
  words: Line
  columns: number
  separator: string
}) {
  const fill = trailingFill(words, columns)
  return (
    <div className="wm-row">
      {words.map((cell, i) => (
        <span key={cell.id}>
          {i > 0 ? <span className="wm-sep">{separator}</span> : null}
          <Cell text={cell.text} />
        </span>
      ))}
      {fill > 0 ? (
        <span className="wm-sep">{separator.repeat(fill)}</span>
      ) : null}
    </div>
  )
})

export function WordMatrixBackground({
  words = UNIQUE_WORDS,
  fontSize = 14,
  lineHeightRatio = 1.5,
  separator = "·",
  swapIntervalMs = 110,
  swapsPerTick = 3,
  className,
}: WordMatrixBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const measureRef = useRef<HTMLSpanElement>(null)

  const [grid, setGrid] = useState<Line[]>([])
  const [columns, setColumns] = useState(0)

  const wl: WordsByLength = useMemo(() => groupByLength(words), [words])
  const lineHeight = Math.round(fontSize * lineHeightRatio)

  // Keep the latest grid in a ref so the swap loop doesn't re-subscribe.
  const gridRef = useRef<Line[]>([])
  const columnsRef = useRef(0)
  gridRef.current = grid
  columnsRef.current = columns

  // Build the whole matrix for a given size.
  const build = useCallback(
    (cols: number, rows: number) => {
      const rng = makeRng(0x9e3779b9 ^ (cols * 73856093) ^ (rows * 19349663))
      const next: Line[] = []
      for (let r = 0; r < rows; r++) next.push(packLine(cols, wl, rng))
      setColumns(cols)
      setGrid(next)
    },
    [wl],
  )

  // Measure the container + a monospace character, then compute the grid size.
  useLayoutEffect(() => {
    const container = containerRef.current
    const measure = measureRef.current
    if (!container || !measure) return

    const SAMPLE = 100
    let raf = 0

    const recompute = () => {
      const rect = container.getBoundingClientRect()
      const charWidth = measure.getBoundingClientRect().width / SAMPLE
      if (charWidth <= 0 || rect.width <= 0 || rect.height <= 0) return
      const cols = Math.max(1, Math.floor(rect.width / charWidth))
      const rows = Math.max(1, Math.floor(rect.height / lineHeight))
      if (cols !== columnsRef.current || rows !== gridRef.current.length) {
        build(cols, rows)
      }
    }

    const schedule = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(recompute)
    }

    schedule()
    const ro = new ResizeObserver(schedule)
    ro.observe(container)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [build, lineHeight])

  // Animation: periodically swap words for same-length words.
  useEffect(() => {
    if (grid.length === 0) return
    if (typeof window === "undefined") return
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches
    if (reduce) return

    const rng = makeRng(Date.now() >>> 0)

    const id = window.setInterval(() => {
      const current = gridRef.current
      if (current.length === 0) return

      // Collect the rows we touch so we only clone those.
      const touched = new Map<number, Line>()

      for (let s = 0; s < swapsPerTick; s++) {
        const r = Math.floor(rng() * current.length)
        const sourceRow = touched.get(r) ?? current[r]
        if (sourceRow.length === 0) continue
        const c = Math.floor(rng() * sourceRow.length)
        const cell = sourceRow[c]
        const nextText = pickSameLength(cell.len, cell.text, wl, rng)
        if (!nextText) continue

        const cloned = touched.get(r) ?? sourceRow.slice()
        cloned[c] = { ...cell, text: nextText }
        touched.set(r, cloned)
      }

      if (touched.size === 0) return
      setGrid((prev) => {
        const next = prev.slice()
        for (const [r, row] of touched) next[r] = row
        return next
      })
    }, swapIntervalMs)

    return () => window.clearInterval(id)
  }, [grid.length, swapIntervalMs, swapsPerTick, wl])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        userSelect: "none",
        fontSize: `${fontSize}px`,
        lineHeight: `${lineHeight}px`,
        fontFamily:
          'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
        // Color tokens for the three states.
        // Words are translucent; a freshly-swapped word flashes to full
        // strength and eases back down.
        ["--wm-word" as string]:
          "color-mix(in oklch, var(--foreground) 40%, transparent)",
        ["--wm-sep" as string]:
          "color-mix(in oklch, var(--foreground) 10%, transparent)",
        ["--wm-flash" as string]: "var(--foreground)",
      }}
    >
      {/* Offscreen sample used to measure exact monospace character width. */}
      <span
        ref={measureRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          visibility: "hidden",
          whiteSpace: "pre",
          pointerEvents: "none",
          left: -9999,
          top: -9999,
        }}
      >
        {"M".repeat(100)}
      </span>

      <style>{`
        .wm-row {
          white-space: pre;
          overflow: hidden;
          height: ${lineHeight}px;
        }
        .wm-word { color: var(--wm-word); }
        .wm-sep { color: var(--wm-sep); }
        .wm-flash { animation: wmFlash 1000ms ease-out; }
        @keyframes wmFlash {
          0% { color: var(--wm-flash-color, var(--wm-flash)); }
          100% { color: var(--wm-word); }
        }
        @media (prefers-reduced-motion: reduce) {
          .wm-flash { animation: none; }
        }
      `}</style>

      {grid.map((words, r) => (
        <Row key={r} words={words} columns={columns} separator={separator} />
      ))}
    </div>
  )
}

export default WordMatrixBackground
