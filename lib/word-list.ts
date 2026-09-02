// A broad vocabulary with heavy coverage across word lengths.
// Short words (1-3 chars) are essential: they let the line packer
// close any remaining gap exactly, so every character cell gets filled.

export const WORDS: string[] = [
  // 1 char
  "a", "i", "o",
  // 2 chars
  "an", "as", "at", "be", "by", "do", "go", "in", "is", "it", "of", "on",
  "or", "so", "to", "up", "we", "us", "if", "my", "no", "ok", "ah", "ex",
  // 3 chars
  "and", "arc", "ash", "bit", "bot", "day", "dot", "dry", "ear", "eye",
  "fog", "gem", "hum", "ice", "ion", "jet", "key", "log", "map", "net",
  "orb", "pin", "ray", "sky", "sun", "the", "tin", "vow", "wax", "yes",
  "zen", "air", "run", "hex", "lab", "raw", "sum", "web", "dew", "fly",
  // 4 chars
  "atom", "beam", "byte", "calm", "code", "core", "data", "dawn", "dusk",
  "echo", "edge", "flux", "form", "gate", "glow", "grid", "haze", "idea",
  "iris", "leaf", "lens", "loop", "mesh", "mind", "moon", "node", "peak",
  "rain", "root", "salt", "seed", "sign", "song", "spin", "aura", "cell",
  "star", "tide", "veil", "wave", "wind", "wire", "zone", "fern", "mist",
  // 5 chars
  "amber", "array", "aster", "azure", "blaze", "bloom", "brine", "cloud",
  "coral", "crest", "delta", "drift", "ember", "field", "flame", "frost",
  "ghost", "glass", "grain", "haven", "helix", "index", "layer", "light",
  "lunar", "maple", "orbit", "pixel", "prism", "pulse", "raven", "river",
  "shard", "shore", "slate", "solar", "stone", "storm", "swarm", "tempo",
  "token", "vapor", "vivid", "whorl", "quart",
  // 6 chars
  "beacon", "binary", "canyon", "cipher", "cosmos", "cinder", "circle",
  "clover", "column", "copper", "cortex", "crater", "cursor", "dapple",
  "fabric", "falcon", "figure", "filter", "garden", "harbor", "kernel",
  "linear", "matrix", "meadow", "mirror", "neuron", "oxygen", "pillar",
  "planet", "plasma", "quiver", "ripple", "shadow", "signal", "spiral",
  "stream", "syntax", "tunnel", "vector", "vertex", "willow", "aurora",
  // 7 chars
  "cascade", "channel", "circuit", "compass", "console", "crimson", "crystal",
  "diamond", "eclipse", "element", "estuary", "horizon", "lattice", "network",
  "nucleus", "octagon", "orchard", "pattern", "pigment", "quantum", "radiant",
  "rainbow", "reactor", "silicon", "tangent", "texture", "torrent", "voltage",
  "glacier", "lantern", "fragmnt", "spectra",
  // 8 chars
  "abstract", "particle", "boundary", "constant", "corridor", "crescent",
  "dendrite", "envelope", "equation", "filament", "fountain", "gradient",
  "harmonic", "infinity", "lavender", "luminous", "monolith", "movement",
  "nebulous", "operator", "pinnacle", "resonate", "sequence", "snowfall",
  "spectrum", "sunburst", "tapestry", "terminal", "traverse", "universe",
  "waveform", "aperture",
  // 9 chars
  "algorithm", "amplitude", "cathedral", "chromatic", "coastline", "component",
  "coriander", "crossfade", "dashboard", "developer", "harmonics", "interface",
  "invention", "landscape", "magnitude", "microcosm", "migration", "monospace",
  "orchestra", "panoramic", "processor", "reservoir", "satellite", "sculpture",
  "signature", "structure", "telemetry", "threshold", "translate", "waterfall",
  // 10 chars
  "background", "brainstorm", "chromosome", "coordinate", "expedition",
  "generation", "geothermal", "harmonious", "illuminate", "incidental",
  "luminosity", "nightshade", "occurrence", "peripheral", "phenomenon",
  "reflection", "resolution", "silhouette", "transcribe", "wavelength",
  "wilderness",
  // 11 chars
  "cartography", "constraints", "cornerstone", "development", "equilibrium",
  "fluorescent", "harmonizing", "measurement", "opalescence", "penetration",
  "provisional", "reservation", "temperature", "translation", "watercolors",
  // 12 chars
  "architecture", "aspirational", "cartographer", "cryptography", "illumination",
  "intersection", "mathematical", "photographer", "transmission", "transparency",
]

// Dedupe while preserving order.
export const UNIQUE_WORDS: string[] = Array.from(new Set(WORDS))
