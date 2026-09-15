'use client'

import { useTheme } from "@wrksz/themes/client"
import GhostStickerEffectLight from "@/components/stickers/components/ghost-sticker-effect-light"
import GhostStickerEffectDark from "@/components/stickers/components/ghost-sticker-effect-dark"
import { useClickSound } from "@/hooks/soundcn/use-click-sound"
import { useMetalClickSound } from "@/hooks/soundcn/use-metal-click-sound"
import { useLaserSound } from "@/hooks/soundcn/use-laser-sound"

interface StickerPageProps {
  userSelectedEffect?: "multicolor" | "monocolor" | string | null
  onChange?: (value: string) => void
  theme?: 'dark' | 'light' | string | null
  onChangeTheme?: (value: string) => void
}

export default function StickerPage({
  userSelectedEffect = "multicolor",
  onChange,
  theme: propTheme,
  onChangeTheme
}: StickerPageProps) {
  const { theme: hookTheme, resolvedTheme } = useTheme()
  const activeTheme = propTheme || resolvedTheme || hookTheme || 'dark'
  const activeEffect = userSelectedEffect || 'multicolor'
  const [click] = useClickSound()
  const [hover] = useMetalClickSound()
  const [drag] = useLaserSound()

  return (
    <div className={activeTheme} suppressHydrationWarning>
      <div className="antialiased">
        {activeTheme === 'dark' ? (
          <GhostStickerEffectLight
            userSelectedEffect={activeEffect}
            onChange={onChange}
            theme={activeTheme}
          />
        ) : (
          <GhostStickerEffectDark
            userSelectedEffect={activeEffect}
            onChange={onChange}
            theme={activeTheme}
          />
        )}
      </div>
    </div>
  )
}
