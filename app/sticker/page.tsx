'use client'

import { useState } from "react"
// import { getTheme } from "@wrksz/themes/next";
import type { Viewport } from 'next'
// import StickerDemo from "@/components/stickers/demos/demo"
// import StickerDemos from "@/components/stickers/demos/demo"
// import MonoStickerDemo from "@/components/stickers/demos/monoDemo"
// import MonoStickerDemos from "@/components/stickers/demos/monoDemos"
import GhostStickerEffectLight from "@/components/stickers/components/ghost-sticker-effect-light"
import GhostStickerEffectDark from "@/components/stickers/components/ghost-sticker-effect-dark"
import Notch from "@/components/ui/notch"
import { useClickSound } from "@/hooks/soundcn/use-click-sound"
import { useMetalClickSound } from "@/hooks/soundcn/use-metal-click-sound"
import { useLaserSound } from "@/hooks/soundcn/use-laser-sound"


interface StickerPageProps {
  userSelectedEffect:  "multicolor" | "monocolor" | string | null
  onChange: (value: string) => void
  theme: 'dark' | 'light' |string | null | undefined
  onChangeTheme: (value: string) => void
}

// export const instant = false;
export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}


export default function StickerPage({ userSelectedEffect, onChange, theme, onChangeTheme}: StickerPageProps) {
    const [currentTheme, setCurrentTheme] = useState(theme)
    const [click] = useClickSound()
    const [hover] = useMetalClickSound()
    const [drag] = useLaserSound()
    const [selectedEffect, setSelectedEffect] = useState(userSelectedEffect)
      const handleChange = {onChange}
      const handleThemeChange = {onChangeTheme}
    // const handleChange = (value: StickerPageProps["userSelectedEffect"]) => {
    // setSelectedEffect({ effect: value })
    // }

  return (
    <div className={currentTheme} suppressHydrationWarning>
      <div className="antialiased">
        {currentTheme === 'dark' && selectedEffect === "multicolor" ? <GhostStickerEffectLight />
        : currentTheme === 'dark' && selectedEffect === "monocolor" ? <GhostStickerEffectLight />
        : currentTheme === 'light' && selectedEffect === "multicolor" ? <GhostStickerEffectDark />
        : currentTheme === 'light' && selectedEffect === "monocolor" ? <GhostStickerEffectDark />
        : null}
      </div>
    </div>
  )
}
