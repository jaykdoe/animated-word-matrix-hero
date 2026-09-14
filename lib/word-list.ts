// A broad vocabulary with heavy coverage across word lengths.
// Short words (1-3 chars) are essential: they let the line packer
// close any remaining gap exactly, so every character cell gets filled.
import wordsData from "@/lib/words/words.json"
import ProfanityData from "@/lib/words/offensive-words.json"

interface WordData {
  id: string
  type: string
  word: string
}

function isWordData(data: any): data is WordData {
  return data && typeof data === "object" && "type" in data && "word" in data
}

// Profanity filter: set of blocked substrings and complete words
// This helps filter out obvious inappropriate terms from the word list
const PROFANITY_BLOCKLIST = new Set<string>(ProfanityData.map((word) => word.profanity.toLowerCase()))

/**
 * Check if a word contains profanity or is on the blocklist
 * @param word - The word to check
 * @returns true if the word should be filtered out
 */
function containsProfanity(word: string): boolean {
  const lowerWord = word.toLowerCase()

  // Check if the word is in the blocklist
  if (PROFANITY_BLOCKLIST.has(lowerWord)) {
    // console.log("containsProfanity: ", lowerWord)
    return true
  }

  // Check if any blocklisted substring is contained in the word
  // for (const blocked of PROFANITY_BLOCKLIST) {
  //   if (lowerWord.includes(blocked)) {
  //     return true
  //   }
  // }

  return false
}

  // Check if wordsData is already in the correct format
  let wordsArray: WordData[] = []

  if (Array.isArray(wordsData)) {
    // If it's an array, use it directly
    wordsArray = wordsData.filter(isWordData)
  } else if (typeof wordsData === "object" && wordsData !== null) {
    // If it's an object, try to extract an array from it
    const possibleArrays = Object.values(wordsData).filter(Array.isArray)
    if (possibleArrays.length > 0) {
      // Flatten all arrays and filter for valid WordData
      wordsArray = possibleArrays.flat().filter(isWordData)
    }
  }

  function extractWordsByLength(length: number): string[] {
    return wordsArray
      .filter((word) => word.word.length === length)
      .filter((word) => !containsProfanity(word.word))
      .map((word) => word.word)
  }

  const TwoCharWords = extractWordsByLength(2)
  const ThreeCharWords = extractWordsByLength(3)
  const FourCharWords = extractWordsByLength(4)
  const FiveCharWords = extractWordsByLength(5)
  const SixCharWords = extractWordsByLength(6)
  const SevenCharWords = extractWordsByLength(7)
  const EightCharWords = extractWordsByLength(8)
  const NineCharWords = extractWordsByLength(9)
  const TenCharWords = extractWordsByLength(10)
  const ElevenCharWords = extractWordsByLength(11)
  const TwelveCharWords = extractWordsByLength(12)

export const WORDS: string[] = [
  // 1 char
  "a", "i", "o",
  // 2 chars
  ...TwoCharWords,
  // 3 chars
  ...ThreeCharWords,
  // 4 chars
  ...FourCharWords,
  // 5 chars
  ...FiveCharWords,
  // 6 chars
  ...SixCharWords,
  // 7 chars
  ...SevenCharWords,
  // 8 chars
  ...EightCharWords,
  // 9 chars
  ...NineCharWords,
  // 10 chars
  ...TenCharWords,
  // 11 chars
  ...ElevenCharWords,
  // 12 chars
  ...TwelveCharWords
]

// export const WORDS: string[] = [
//   // 1 char
//   "a", "i", "o",
//   // 2 chars
//   "an", "as", "at", "be", "by", "do", "go", "in", "is", "it", "of", "on",
//   "or", "so", "to", "up", "we", "us", "if", "my", "no", "ok", "ah", "ex",
//   // 3 chars
//   "and", "arc", "ash", "bit", "bot", "day", "dot", "dry", "ear", "eye",
//   "fog", "gem", "hum", "ice", "ion", "jet", "key", "log", "map", "net",
//   "orb", "pin", "ray", "sky", "sun", "the", "tin", "vow", "wax", "yes",
//   "zen", "air", "run", "hex", "lab", "raw", "sum", "web", "dew", "fly",
//   // 4 chars
//   "atom", "beam", "byte", "calm", "code", "core", "data", "dawn", "dusk",
//   "echo", "edge", "flux", "form", "gate", "glow", "grid", "haze", "idea",
//   "iris", "leaf", "lens", "loop", "mesh", "mind", "moon", "node", "peak",
//   "rain", "root", "salt", "seed", "sign", "song", "spin", "aura", "cell",
//   "star", "tide", "veil", "wave", "wind", "wire", "zone", "fern", "mist",
//   // 5 chars
//   "amber", "array", "aster", "azure", "blaze", "bloom", "brine", "cloud",
//   "coral", "crest", "delta", "drift", "ember", "field", "flame", "frost",
//   "ghost", "glass", "grain", "haven", "helix", "index", "layer", "light",
//   "lunar", "maple", "orbit", "pixel", "prism", "pulse", "raven", "river",
//   "shard", "shore", "slate", "solar", "stone", "storm", "swarm", "tempo",
//   "token", "vapor", "vivid", "whorl", "quart",
//   // 6 chars
//   "beacon", "binary", "canyon", "cipher", "cosmos", "cinder", "circle",
//   "clover", "column", "copper", "cortex", "crater", "cursor", "dapple",
//   "fabric", "falcon", "figure", "filter", "garden", "harbor", "kernel",
//   "linear", "matrix", "meadow", "mirror", "neuron", "oxygen", "pillar",
//   "planet", "plasma", "quiver", "ripple", "shadow", "signal", "spiral",
//   "stream", "syntax", "tunnel", "vector", "vertex", "willow", "aurora",
//   // 7 chars
//   "cascade", "channel", "circuit", "compass", "console", "crimson", "crystal",
//   "diamond", "eclipse", "element", "estuary", "horizon", "lattice", "network",
//   "nucleus", "octagon", "orchard", "pattern", "pigment", "quantum", "radiant",
//   "rainbow", "reactor", "silicon", "tangent", "texture", "torrent", "voltage",
//   "glacier", "lantern", "fragmnt", "spectra",
//   // 8 chars
//   "abstract", "particle", "boundary", "constant", "corridor", "crescent",
//   "dendrite", "envelope", "equation", "filament", "fountain", "gradient",
//   "harmonic", "infinity", "lavender", "luminous", "monolith", "movement",
//   "nebulous", "operator", "pinnacle", "resonate", "sequence", "snowfall",
//   "spectrum", "sunburst", "tapestry", "terminal", "traverse", "universe",
//   "waveform", "aperture",
//   // 9 chars
//   "algorithm", "amplitude", "cathedral", "chromatic", "coastline", "component",
//   "coriander", "crossfade", "dashboard", "developer", "harmonics", "interface",
//   "invention", "landscape", "magnitude", "microcosm", "migration", "monospace",
//   "orchestra", "panoramic", "processor", "reservoir", "satellite", "sculpture",
//   "signature", "structure", "telemetry", "threshold", "translate", "waterfall",
//   // 10 chars
//   "background", "brainstorm", "chromosome", "coordinate", "expedition",
//   "generation", "geothermal", "harmonious", "illuminate", "incidental",
//   "luminosity", "nightshade", "occurrence", "peripheral", "phenomenon",
//   "reflection", "resolution", "silhouette", "transcribe", "wavelength",
//   "wilderness",
//   // 11 chars
//   "cartography", "constraints", "cornerstone", "development", "equilibrium",
//   "fluorescent", "harmonizing", "measurement", "opalescence", "penetration",
//   "provisional", "reservation", "temperature", "translation", "watercolors",
//   // 12 chars
//   "architecture", "aspirational", "cartographer", "cryptography", "illumination",
//   "intersection", "mathematical", "photographer", "transmission", "transparency",
// ]

// Dedupe while preserving order.
export const UNIQUE_WORDS: string[] = Array.from(new Set(WORDS))
