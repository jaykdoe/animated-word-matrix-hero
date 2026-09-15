'use client'

import { useState, useEffect } from "react"
import { useTheme } from "@wrksz/themes/client"
import { WordMatrixBackground } from "@/components/word-matrix-background"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { MulticolorSelect } from "@/components/ui/multicolor-toggle"
import { addToLocalStorage, getFromLocalStorage, isItemInLocalStorage } from "@/lib/local-storage"
import StickerPage from "./sticker/page"

export default function Page() {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [selectedEffect, setSelectedEffect] = useState<"multicolor" | "monocolor">("multicolor")

  useEffect(() => {
    setMounted(true)
    if (isItemInLocalStorage("colorEffect")) {
      const stored = getFromLocalStorage("colorEffect")
      if (stored === "multicolor" || stored === "monocolor") {
        setSelectedEffect(stored)
      }
    }
  }, [])

  const handleEffectChange = (value: string) => {
    const nextEffect = (value === "monocolor" ? "monocolor" : "multicolor") as "multicolor" | "monocolor"
    setSelectedEffect(nextEffect)
    addToLocalStorage("colorEffect", nextEffect)
  }

  const currentTheme = (resolvedTheme || theme || "dark") as "light" | "dark"

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background text-foreground">
      <WordMatrixBackground effect={selectedEffect} theme={currentTheme} />

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
        <div>
          <ThemeToggle userSelectedEffect={selectedEffect} onChange={handleEffectChange} />
        </div>
        <div>
          <MulticolorSelect userSelectedEffect={selectedEffect} onChange={handleEffectChange} />
        </div>
        <div>
          <StickerPage
            theme={currentTheme}
            onChangeTheme={setTheme}
            userSelectedEffect={selectedEffect}
            onChange={handleEffectChange}
          />
        </div>
      </div>
    </main>
  )
}
