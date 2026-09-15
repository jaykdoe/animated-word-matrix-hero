'use client'

import { useState, useEffect } from "react"
import { WordMatrixBackground } from "@/components/word-matrix-background"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { MulticolorSelect } from "@/components/ui/multicolor-toggle"
import { addToLocalStorage, getFromLocalStorage, isItemInLocalStorage } from "@/lib/local-storage"

interface effectProps {
  effect:  "multicolor" | "monocolor" | string | null
}
interface multiColorSelectProps {
  userSelectedEffect:  "multicolor" | "monocolor" | string | null
  onChange: (value: string) => void
}

export default function Page() {
  const [mounted, setMounted] = useState(false)
  const [mountedEffect, setMountedEffect] = useState<"multicolor" | "monocolor">("multicolor")
  const effect = isItemInLocalStorage("colorEffect") === true ? getFromLocalStorage("colorEffect") : null
  const [selectedEffect, setSelectedEffect] = useState({ effect: "multicolor" })
   const handleChange = (value: multiColorSelectProps["userSelectedEffect"]) => {
    setSelectedEffect({ effect: value })
  }

  useEffect(() => {
    setMounted(true)
    setMountedEffect(effect as "multicolor" | "monocolor")
  }, [])
 
  return (
    <main className={`relative flex min-h-screen items-center justify-center overflow-hidden bg-background text-foreground`}>
      <WordMatrixBackground effect={selectedEffect.effect} />

      {/* Vignette so the centered content stays legible over the matrix. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 50%, var(--background) 12%, transparent 78%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
          Word Matrix
        </span>
        <h1 className="text-balance font-mono text-4xl font-semibold tracking-tight md:text-6xl">
          Every line, filled to the edge
        </h1>
        <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
          A living field of text that measures itself, packs each row exactly
          full, and endlessly rotates words in place.
        </p>
              <div><ThemeToggle/></div>
               <div><MulticolorSelect userSelectedEffect={selectedEffect.effect} onChange={handleChange}/></div>
               <div className="mt-6 z-999 text-rose-500 text-pretty text-xl leading-relaxe md:text-base">multicolor: {selectedEffect.effect}</div>
               <div className="text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">{selectedEffect.effect}</div>
      </div>
    </main>
  )
}
