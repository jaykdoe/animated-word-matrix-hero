// Core logic for the word matrix: bucket words by length, then pack each
// line so that words + single-char separators + trailing fill occupy EXACTLY
// `columns` character cells. Because animation only ever swaps a word for
// another word of the SAME length, a packed line stays perfectly filled
// forever without needing to re-pack.

export type WordCell = {
  id: number
  text: string
  len: number
}

export type WordsByLength = {
  byLen: Map<number, string[]>
  lengths: number[] // sorted ascending, only lengths that have >= 1 word
  minLen: number
  maxLen: number
}

export function groupByLength(words: string[]): WordsByLength {
  const byLen = new Map<number, string[]>()
  for (const w of words) {
    const len = w.length
    if (len < 1) continue
    const bucket = byLen.get(len)
    if (bucket) bucket.push(w)
    else byLen.set(len, [w])
  }
  const lengths = Array.from(byLen.keys()).sort((a, b) => a - b)
  return {
    byLen,
    lengths,
    minLen: lengths[0] ?? 1,
    maxLen: lengths[lengths.length - 1] ?? 1,
  }
}

// Small mulberry32 PRNG so packing is deterministic per line if desired.
export function makeRng(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function weightedPickLength(
  candidates: number[],
  rng: () => number,
): number {
  // Bias toward longer words so lines stay dense (fewer separators),
  // which reads more like a solid matrix of text.
  let total = 0
  for (const l of candidates) total += l
  let r = rng() * total
  for (const l of candidates) {
    r -= l
    if (r <= 0) return l
  }
  return candidates[candidates.length - 1]
}

function chooseLength(
  maxLen: number,
  wl: WordsByLength,
  rng: () => number,
): number | null {
  if (maxLen < wl.minLen) return null
  // A word of exactly `maxLen` closes the remaining space with zero waste.
  if (wl.byLen.has(maxLen)) {
    const p = maxLen <= 6 ? 0.85 : 0.4
    if (rng() < p) return maxLen
  }
  const candidates = wl.lengths.filter((l) => l <= maxLen)
  if (candidates.length === 0) return null
  return weightedPickLength(candidates, rng)
}

let cellIdCounter = 0

// Packs a single line of `columns` cells with words.
// Returns the ordered words; separators and trailing fill are derived at
// render time from the word count and total word length.
export function packLine(
  columns: number,
  wl: WordsByLength,
  rng: () => number,
): WordCell[] {
  const words: WordCell[] = []
  let used = 0 // cells consumed by words + separators placed so far

  // Safety guard against pathological loops.
  let guard = 0
  while (guard++ < 1000) {
    const needSep = words.length > 0 ? 1 : 0
    const maxLen = columns - used - needSep
    if (maxLen < wl.minLen) break

    const len = chooseLength(maxLen, wl, rng)
    if (len == null) break

    const bucket = wl.byLen.get(len)!
    const text = bucket[Math.floor(rng() * bucket.length)]
    words.push({ id: cellIdCounter++, text, len })
    used += needSep + len

    if (used >= columns) break
  }

  return words
}

// Cells occupied by words + the single-char separators between them.
export function wordsFootprint(words: WordCell[]): number {
  if (words.length === 0) return 0
  let sum = 0
  for (const w of words) sum += w.len
  return sum + (words.length - 1)
}

// How many trailing fill characters a line needs to reach full width.
export function trailingFill(words: WordCell[], columns: number): number {
  return Math.max(0, columns - wordsFootprint(words))
}

// Pick a different word of the same length as `current` for a swap.
export function pickSameLength(
  len: number,
  current: string,
  wl: WordsByLength,
  rng: () => number,
): string | null {
  const bucket = wl.byLen.get(len)
  if (!bucket || bucket.length < 2) return null
  // Try a few times to avoid picking the same word back.
  for (let i = 0; i < 5; i++) {
    const next = bucket[Math.floor(rng() * bucket.length)]
    if (next !== current) return next
  }
  return null
}
