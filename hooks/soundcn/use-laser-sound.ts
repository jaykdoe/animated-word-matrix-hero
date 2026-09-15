import { laserSmall001Sound } from "@/lib/soundcn/laser-small-001"

import { useSound } from "./use-sound"

export function useLaserSound() {
  return useSound(laserSmall001Sound, { volume: 0.3 })
}