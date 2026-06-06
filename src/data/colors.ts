// src/data/colors.ts
// Complete color data with all shades for each color family

export interface ColorShade {
  name: string;
  hex: string;
  weight: number;
}

export interface ColorFamily {
  id: string;
  name: string;
  slug: string;
  description: string;
  tags: string[];
  baseHex: string;
  shades: ColorShade[];
}

export const colorFamilies: ColorFamily[] = [
  {
    id: "red",
    name: "Red",
    slug: "red",
    description:
      "Passion, energy, and urgency — red commands attention like no other.",
    tags: ["warm", "primary", "bold"],
    baseHex: "#ef4444",
    shades: [
      { name: "Red 50", hex: "#fef2f2", weight: 50 },
      { name: "Red 100", hex: "#fee2e2", weight: 100 },
      { name: "Red 200", hex: "#fecaca", weight: 200 },
      { name: "Red 300", hex: "#fca5a5", weight: 300 },
      { name: "Red 400", hex: "#f87171", weight: 400 },
      { name: "Red 500", hex: "#ef4444", weight: 500 },
      { name: "Red 600", hex: "#dc2626", weight: 600 },
      { name: "Red 700", hex: "#b91c1c", weight: 700 },
      { name: "Red 800", hex: "#991b1b", weight: 800 },
      { name: "Red 900", hex: "#7f1d1d", weight: 900 },
      { name: "Red 950", hex: "#450a0a", weight: 950 },
    ],
  },
  {
    id: "orange",
    name: "Orange",
    slug: "orange",
    description:
      "Warmth, creativity, and enthusiasm — orange energizes every design.",
    tags: ["warm", "vibrant", "creative"],
    baseHex: "#f97316",
    shades: [
      { name: "Orange 50", hex: "#fff7ed", weight: 50 },
      { name: "Orange 100", hex: "#ffedd5", weight: 100 },
      { name: "Orange 200", hex: "#fed7aa", weight: 200 },
      { name: "Orange 300", hex: "#fdba74", weight: 300 },
      { name: "Orange 400", hex: "#fb923c", weight: 400 },
      { name: "Orange 500", hex: "#f97316", weight: 500 },
      { name: "Orange 600", hex: "#ea580c", weight: 600 },
      { name: "Orange 700", hex: "#c2410c", weight: 700 },
      { name: "Orange 800", hex: "#9a3412", weight: 800 },
      { name: "Orange 900", hex: "#7c2d12", weight: 900 },
      { name: "Orange 950", hex: "#431407", weight: 950 },
    ],
  },
  {
    id: "amber",
    name: "Amber",
    slug: "amber",
    description:
      "Golden warmth and richness — amber glows with timeless elegance.",
    tags: ["warm", "golden", "rich"],
    baseHex: "#f59e0b",
    shades: [
      { name: "Amber 50", hex: "#fffbeb", weight: 50 },
      { name: "Amber 100", hex: "#fef3c7", weight: 100 },
      { name: "Amber 200", hex: "#fde68a", weight: 200 },
      { name: "Amber 300", hex: "#fcd34d", weight: 300 },
      { name: "Amber 400", hex: "#fbbf24", weight: 400 },
      { name: "Amber 500", hex: "#f59e0b", weight: 500 },
      { name: "Amber 600", hex: "#d97706", weight: 600 },
      { name: "Amber 700", hex: "#b45309", weight: 700 },
      { name: "Amber 800", hex: "#92400e", weight: 800 },
      { name: "Amber 900", hex: "#78350f", weight: 900 },
      { name: "Amber 950", hex: "#451a03", weight: 950 },
    ],
  },
  {
    id: "yellow",
    name: "Yellow",
    slug: "yellow",
    description: "Joy, optimism, and clarity — yellow illuminates any palette.",
    tags: ["warm", "bright", "cheerful"],
    baseHex: "#eab308",
    shades: [
      { name: "Yellow 50", hex: "#fefce8", weight: 50 },
      { name: "Yellow 100", hex: "#fef9c3", weight: 100 },
      { name: "Yellow 200", hex: "#fef08a", weight: 200 },
      { name: "Yellow 300", hex: "#fde047", weight: 300 },
      { name: "Yellow 400", hex: "#facc15", weight: 400 },
      { name: "Yellow 500", hex: "#eab308", weight: 500 },
      { name: "Yellow 600", hex: "#ca8a04", weight: 600 },
      { name: "Yellow 700", hex: "#a16207", weight: 700 },
      { name: "Yellow 800", hex: "#854d0e", weight: 800 },
      { name: "Yellow 900", hex: "#713f12", weight: 900 },
      { name: "Yellow 950", hex: "#422006", weight: 950 },
    ],
  },
  {
    id: "gold",
    name: "Gold",
    slug: "gold",
    description:
      "Prestige, success, and luxury — gold instantly elevates a visual identity.",
    tags: ["luxury", "premium", "metallic"],
    baseHex: "#d4af37",
    shades: [
      { name: "Gold 50", hex: "#fffdf5", weight: 50 },
      { name: "Gold 100", hex: "#fff7d6", weight: 100 },
      { name: "Gold 200", hex: "#ffefad", weight: 200 },
      { name: "Gold 300", hex: "#ffe27a", weight: 300 },
      { name: "Gold 400", hex: "#f9cf45", weight: 400 },
      { name: "Gold 500", hex: "#d4af37", weight: 500 },
      { name: "Gold 600", hex: "#b89122", weight: 600 },
      { name: "Gold 700", hex: "#8e6f1a", weight: 700 },
      { name: "Gold 800", hex: "#6f5615", weight: 800 },
      { name: "Gold 900", hex: "#4d3b0c", weight: 900 },
      { name: "Gold 950", hex: "#261d04", weight: 950 },
    ],
  },
  {
    id: "bronze",
    name: "Bronze",
    slug: "bronze",
    description:
      "Historic richness and craftsmanship — bronze adds warmth and heritage.",
    tags: ["metallic", "earthy", "classic"],
    baseHex: "#cd7f32",
    shades: [
      { name: "Bronze 50", hex: "#fff7ef", weight: 50 },
      { name: "Bronze 100", hex: "#ffe8d1", weight: 100 },
      { name: "Bronze 200", hex: "#ffd0a3", weight: 200 },
      { name: "Bronze 300", hex: "#f8b26d", weight: 300 },
      { name: "Bronze 400", hex: "#e69548", weight: 400 },
      { name: "Bronze 500", hex: "#cd7f32", weight: 500 },
      { name: "Bronze 600", hex: "#ad6724", weight: 600 },
      { name: "Bronze 700", hex: "#874f1a", weight: 700 },
      { name: "Bronze 800", hex: "#643913", weight: 800 },
      { name: "Bronze 900", hex: "#42250c", weight: 900 },
      { name: "Bronze 950", hex: "#211205", weight: 950 },
    ],
  },
  {
    id: "lime",
    name: "Lime",
    slug: "lime",
    description:
      "Fresh, electric, and alive — lime brings nature's most vivid energy.",
    tags: ["cool", "fresh", "vibrant"],
    baseHex: "#84cc16",
    shades: [
      { name: "Lime 50", hex: "#f7fee7", weight: 50 },
      { name: "Lime 100", hex: "#ecfccb", weight: 100 },
      { name: "Lime 200", hex: "#d9f99d", weight: 200 },
      { name: "Lime 300", hex: "#bef264", weight: 300 },
      { name: "Lime 400", hex: "#a3e635", weight: 400 },
      { name: "Lime 500", hex: "#84cc16", weight: 500 },
      { name: "Lime 600", hex: "#65a30d", weight: 600 },
      { name: "Lime 700", hex: "#4d7c0f", weight: 700 },
      { name: "Lime 800", hex: "#3f6212", weight: 800 },
      { name: "Lime 900", hex: "#365314", weight: 900 },
      { name: "Lime 950", hex: "#1a2e05", weight: 950 },
    ],
  },
  {
    id: "green",
    name: "Green",
    slug: "green",
    description: "Growth, harmony, and balance — green grounds and refreshes.",
    tags: ["cool", "natural", "calm"],
    baseHex: "#22c55e",
    shades: [
      { name: "Green 50", hex: "#f0fdf4", weight: 50 },
      { name: "Green 100", hex: "#dcfce7", weight: 100 },
      { name: "Green 200", hex: "#bbf7d0", weight: 200 },
      { name: "Green 300", hex: "#86efac", weight: 300 },
      { name: "Green 400", hex: "#4ade80", weight: 400 },
      { name: "Green 500", hex: "#22c55e", weight: 500 },
      { name: "Green 600", hex: "#16a34a", weight: 600 },
      { name: "Green 700", hex: "#15803d", weight: 700 },
      { name: "Green 800", hex: "#166534", weight: 800 },
      { name: "Green 900", hex: "#14532d", weight: 900 },
      { name: "Green 950", hex: "#052e16", weight: 950 },
    ],
  },
  {
    id: "emerald",
    name: "Emerald",
    slug: "emerald",
    description: "Lush, gemstone richness — emerald radiates luxury and depth.",
    tags: ["cool", "rich", "luxurious"],
    baseHex: "#10b981",
    shades: [
      { name: "Emerald 50", hex: "#ecfdf5", weight: 50 },
      { name: "Emerald 100", hex: "#d1fae5", weight: 100 },
      { name: "Emerald 200", hex: "#a7f3d0", weight: 200 },
      { name: "Emerald 300", hex: "#6ee7b7", weight: 300 },
      { name: "Emerald 400", hex: "#34d399", weight: 400 },
      { name: "Emerald 500", hex: "#10b981", weight: 500 },
      { name: "Emerald 600", hex: "#059669", weight: 600 },
      { name: "Emerald 700", hex: "#047857", weight: 700 },
      { name: "Emerald 800", hex: "#065f46", weight: 800 },
      { name: "Emerald 900", hex: "#064e3b", weight: 900 },
      { name: "Emerald 950", hex: "#022c22", weight: 950 },
    ],
  },
  {
    id: "teal",
    name: "Teal",
    slug: "teal",
    description: "Serenity and sophistication — teal bridges ocean and forest.",
    tags: ["cool", "serene", "balanced"],
    baseHex: "#14b8a6",
    shades: [
      { name: "Teal 50", hex: "#f0fdfa", weight: 50 },
      { name: "Teal 100", hex: "#ccfbf1", weight: 100 },
      { name: "Teal 200", hex: "#99f6e4", weight: 200 },
      { name: "Teal 300", hex: "#5eead4", weight: 300 },
      { name: "Teal 400", hex: "#2dd4bf", weight: 400 },
      { name: "Teal 500", hex: "#14b8a6", weight: 500 },
      { name: "Teal 600", hex: "#0d9488", weight: 600 },
      { name: "Teal 700", hex: "#0f766e", weight: 700 },
      { name: "Teal 800", hex: "#115e59", weight: 800 },
      { name: "Teal 900", hex: "#134e4a", weight: 900 },
      { name: "Teal 950", hex: "#042f2e", weight: 950 },
    ],
  },
  {
    id: "turquoise",
    name: "Turquoise",
    slug: "turquoise",
    description:
      "Tropical vibrance and clarity — turquoise feels fresh, energetic, and modern.",
    tags: ["tropical", "fresh", "vibrant"],
    baseHex: "#40e0d0",
    shades: [
      { name: "Turquoise 50", hex: "#f0fffd", weight: 50 },
      { name: "Turquoise 100", hex: "#d7fffb", weight: 100 },
      { name: "Turquoise 200", hex: "#affff7", weight: 200 },
      { name: "Turquoise 300", hex: "#7ff7ee", weight: 300 },
      { name: "Turquoise 400", hex: "#5aece1", weight: 400 },
      { name: "Turquoise 500", hex: "#40e0d0", weight: 500 },
      { name: "Turquoise 600", hex: "#26c4b5", weight: 600 },
      { name: "Turquoise 700", hex: "#1c9a8e", weight: 700 },
      { name: "Turquoise 800", hex: "#146f66", weight: 800 },
      { name: "Turquoise 900", hex: "#0c4742", weight: 900 },
      { name: "Turquoise 950", hex: "#062422", weight: 950 },
    ],
  },
  {
    id: "cyan",
    name: "Cyan",
    slug: "cyan",
    description:
      "Cool clarity and digital precision — cyan is the color of innovation.",
    tags: ["cool", "digital", "modern"],
    baseHex: "#06b6d4",
    shades: [
      { name: "Cyan 50", hex: "#ecfeff", weight: 50 },
      { name: "Cyan 100", hex: "#cffafe", weight: 100 },
      { name: "Cyan 200", hex: "#a5f3fc", weight: 200 },
      { name: "Cyan 300", hex: "#67e8f9", weight: 300 },
      { name: "Cyan 400", hex: "#22d3ee", weight: 400 },
      { name: "Cyan 500", hex: "#06b6d4", weight: 500 },
      { name: "Cyan 600", hex: "#0891b2", weight: 600 },
      { name: "Cyan 700", hex: "#0e7490", weight: 700 },
      { name: "Cyan 800", hex: "#155e75", weight: 800 },
      { name: "Cyan 900", hex: "#164e63", weight: 900 },
      { name: "Cyan 950", hex: "#083344", weight: 950 },
    ],
  },
  {
    id: "sky",
    name: "Sky",
    slug: "sky",
    description:
      "Open horizons and limitless potential — sky blue lifts every design.",
    tags: ["cool", "airy", "expansive"],
    baseHex: "#0ea5e9",
    shades: [
      { name: "Sky 50", hex: "#f0f9ff", weight: 50 },
      { name: "Sky 100", hex: "#e0f2fe", weight: 100 },
      { name: "Sky 200", hex: "#bae6fd", weight: 200 },
      { name: "Sky 300", hex: "#7dd3fc", weight: 300 },
      { name: "Sky 400", hex: "#38bdf8", weight: 400 },
      { name: "Sky 500", hex: "#0ea5e9", weight: 500 },
      { name: "Sky 600", hex: "#0284c7", weight: 600 },
      { name: "Sky 700", hex: "#0369a1", weight: 700 },
      { name: "Sky 800", hex: "#075985", weight: 800 },
      { name: "Sky 900", hex: "#0c4a6e", weight: 900 },
      { name: "Sky 950", hex: "#082f49", weight: 950 },
    ],
  },
  {
    id: "blue",
    name: "Blue",
    slug: "blue",
    description:
      "Trust, depth, and calm authority — blue is the cornerstone of design.",
    tags: ["cool", "primary", "trustworthy"],
    baseHex: "#3b82f6",
    shades: [
      { name: "Blue 50", hex: "#eff6ff", weight: 50 },
      { name: "Blue 100", hex: "#dbeafe", weight: 100 },
      { name: "Blue 200", hex: "#bfdbfe", weight: 200 },
      { name: "Blue 300", hex: "#93c5fd", weight: 300 },
      { name: "Blue 400", hex: "#60a5fa", weight: 400 },
      { name: "Blue 500", hex: "#3b82f6", weight: 500 },
      { name: "Blue 600", hex: "#2563eb", weight: 600 },
      { name: "Blue 700", hex: "#1d4ed8", weight: 700 },
      { name: "Blue 800", hex: "#1e40af", weight: 800 },
      { name: "Blue 900", hex: "#1e3a8a", weight: 900 },
      { name: "Blue 950", hex: "#172554", weight: 950 },
    ],
  },
  {
    id: "indigo",
    name: "Indigo",
    slug: "indigo",
    description:
      "Deep intuition and wisdom — indigo bridges the rational and mystical.",
    tags: ["cool", "deep", "intuitive"],
    baseHex: "#6366f1",
    shades: [
      { name: "Indigo 50", hex: "#eef2ff", weight: 50 },
      { name: "Indigo 100", hex: "#e0e7ff", weight: 100 },
      { name: "Indigo 200", hex: "#c7d2fe", weight: 200 },
      { name: "Indigo 300", hex: "#a5b4fc", weight: 300 },
      { name: "Indigo 400", hex: "#818cf8", weight: 400 },
      { name: "Indigo 500", hex: "#6366f1", weight: 500 },
      { name: "Indigo 600", hex: "#4f46e5", weight: 600 },
      { name: "Indigo 700", hex: "#4338ca", weight: 700 },
      { name: "Indigo 800", hex: "#3730a3", weight: 800 },
      { name: "Indigo 900", hex: "#312e81", weight: 900 },
      { name: "Indigo 950", hex: "#1e1b4b", weight: 950 },
    ],
  },
  {
    id: "navy",
    name: "Navy",
    slug: "navy",
    description:
      "Authority and confidence — navy remains a timeless professional favorite.",
    tags: ["deep", "professional", "classic"],
    baseHex: "#1e3a8a",
    shades: [
      { name: "Navy 50", hex: "#f4f7ff", weight: 50 },
      { name: "Navy 100", hex: "#e5ecff", weight: 100 },
      { name: "Navy 200", hex: "#c8d8ff", weight: 200 },
      { name: "Navy 300", hex: "#9fb8ff", weight: 300 },
      { name: "Navy 400", hex: "#6f90ff", weight: 400 },
      { name: "Navy 500", hex: "#1e3a8a", weight: 500 },
      { name: "Navy 600", hex: "#182f6e", weight: 600 },
      { name: "Navy 700", hex: "#122553", weight: 700 },
      { name: "Navy 800", hex: "#0d1b3d", weight: 800 },
      { name: "Navy 900", hex: "#081125", weight: 900 },
      { name: "Navy 950", hex: "#040912", weight: 950 },
    ],
  },
  {
    id: "violet",
    name: "Violet",
    slug: "violet",
    description: "Imagination and magic — violet sparks creativity and wonder.",
    tags: ["cool", "creative", "magical"],
    baseHex: "#8b5cf6",
    shades: [
      { name: "Violet 50", hex: "#f5f3ff", weight: 50 },
      { name: "Violet 100", hex: "#ede9fe", weight: 100 },
      { name: "Violet 200", hex: "#ddd6fe", weight: 200 },
      { name: "Violet 300", hex: "#c4b5fd", weight: 300 },
      { name: "Violet 400", hex: "#a78bfa", weight: 400 },
      { name: "Violet 500", hex: "#8b5cf6", weight: 500 },
      { name: "Violet 600", hex: "#7c3aed", weight: 600 },
      { name: "Violet 700", hex: "#6d28d9", weight: 700 },
      { name: "Violet 800", hex: "#5b21b6", weight: 800 },
      { name: "Violet 900", hex: "#4c1d95", weight: 900 },
      { name: "Violet 950", hex: "#2e1065", weight: 950 },
    ],
  },
  {
    id: "purple",
    name: "Purple",
    slug: "purple",
    description: "Royalty, mystery, and ambition — purple commands prestige.",
    tags: ["cool", "royal", "mysterious"],
    baseHex: "#a855f7",
    shades: [
      { name: "Purple 50", hex: "#faf5ff", weight: 50 },
      { name: "Purple 100", hex: "#f3e8ff", weight: 100 },
      { name: "Purple 200", hex: "#e9d5ff", weight: 200 },
      { name: "Purple 300", hex: "#d8b4fe", weight: 300 },
      { name: "Purple 400", hex: "#c084fc", weight: 400 },
      { name: "Purple 500", hex: "#a855f7", weight: 500 },
      { name: "Purple 600", hex: "#9333ea", weight: 600 },
      { name: "Purple 700", hex: "#7e22ce", weight: 700 },
      { name: "Purple 800", hex: "#6b21a8", weight: 800 },
      { name: "Purple 900", hex: "#581c87", weight: 900 },
      { name: "Purple 950", hex: "#3b0764", weight: 950 },
    ],
  },
  {
    id: "fuchsia",
    name: "Fuchsia",
    slug: "fuchsia",
    description:
      "Bold, playful, and irresistible — fuchsia is unapologetically vibrant.",
    tags: ["warm", "bold", "playful"],
    baseHex: "#d946ef",
    shades: [
      { name: "Fuchsia 50", hex: "#fdf4ff", weight: 50 },
      { name: "Fuchsia 100", hex: "#fae8ff", weight: 100 },
      { name: "Fuchsia 200", hex: "#f5d0fe", weight: 200 },
      { name: "Fuchsia 300", hex: "#f0abfc", weight: 300 },
      { name: "Fuchsia 400", hex: "#e879f9", weight: 400 },
      { name: "Fuchsia 500", hex: "#d946ef", weight: 500 },
      { name: "Fuchsia 600", hex: "#c026d3", weight: 600 },
      { name: "Fuchsia 700", hex: "#a21caf", weight: 700 },
      { name: "Fuchsia 800", hex: "#86198f", weight: 800 },
      { name: "Fuchsia 900", hex: "#701a75", weight: 900 },
      { name: "Fuchsia 950", hex: "#4a044e", weight: 950 },
    ],
  },
  {
    id: "pink",
    name: "Pink",
    slug: "pink",
    description:
      "Warmth, romance, and playfulness — pink adds a tender pulse to any design.",
    tags: ["warm", "romantic", "gentle"],
    baseHex: "#ec4899",
    shades: [
      { name: "Pink 50", hex: "#fdf2f8", weight: 50 },
      { name: "Pink 100", hex: "#fce7f3", weight: 100 },
      { name: "Pink 200", hex: "#fbcfe8", weight: 200 },
      { name: "Pink 300", hex: "#f9a8d4", weight: 300 },
      { name: "Pink 400", hex: "#f472b6", weight: 400 },
      { name: "Pink 500", hex: "#ec4899", weight: 500 },
      { name: "Pink 600", hex: "#db2777", weight: 600 },
      { name: "Pink 700", hex: "#be185d", weight: 700 },
      { name: "Pink 800", hex: "#9d174d", weight: 800 },
      { name: "Pink 900", hex: "#831843", weight: 900 },
      { name: "Pink 950", hex: "#500724", weight: 950 },
    ],
  },
  {
    id: "rose",
    name: "Rose",
    slug: "rose",
    description:
      "Delicate beauty and passion — rose embodies love in every shade.",
    tags: ["warm", "romantic", "elegant"],
    baseHex: "#f43f5e",
    shades: [
      { name: "Rose 50", hex: "#fff1f2", weight: 50 },
      { name: "Rose 100", hex: "#ffe4e6", weight: 100 },
      { name: "Rose 200", hex: "#fecdd3", weight: 200 },
      { name: "Rose 300", hex: "#fda4af", weight: 300 },
      { name: "Rose 400", hex: "#fb7185", weight: 400 },
      { name: "Rose 500", hex: "#f43f5e", weight: 500 },
      { name: "Rose 600", hex: "#e11d48", weight: 600 },
      { name: "Rose 700", hex: "#be123c", weight: 700 },
      { name: "Rose 800", hex: "#9f1239", weight: 800 },
      { name: "Rose 900", hex: "#881337", weight: 900 },
      { name: "Rose 950", hex: "#4c0519", weight: 950 },
    ],
  },
  {
    id: "white",
    name: "White",
    slug: "white",
    description:
      "Purity, clarity, and simplicity — white creates space for everything else.",
    tags: ["neutral", "clean", "minimal"],
    baseHex: "#ffffff",
    shades: [
      { name: "White 50", hex: "#ffffff", weight: 50 },
      { name: "White 100", hex: "#fcfcfc", weight: 100 },
      { name: "White 200", hex: "#fafafa", weight: 200 },
      { name: "White 300", hex: "#f8f8f8", weight: 300 },
      { name: "White 400", hex: "#f5f5f5", weight: 400 },
      { name: "White 500", hex: "#f2f2f2", weight: 500 },
      { name: "White 600", hex: "#ededed", weight: 600 },
      { name: "White 700", hex: "#e5e5e5", weight: 700 },
      { name: "White 800", hex: "#dddddd", weight: 800 },
      { name: "White 900", hex: "#d4d4d4", weight: 900 },
      { name: "White 950", hex: "#cccccc", weight: 950 },
    ],
  },
  {
    id: "silver",
    name: "Silver",
    slug: "silver",
    description:
      "Technology and refinement — silver blends sophistication with innovation.",
    tags: ["metallic", "modern", "premium"],
    baseHex: "#c0c0c0",
    shades: [
      { name: "Silver 50", hex: "#fcfcfc", weight: 50 },
      { name: "Silver 100", hex: "#f5f5f5", weight: 100 },
      { name: "Silver 200", hex: "#ebebeb", weight: 200 },
      { name: "Silver 300", hex: "#dddddd", weight: 300 },
      { name: "Silver 400", hex: "#d0d0d0", weight: 400 },
      { name: "Silver 500", hex: "#c0c0c0", weight: 500 },
      { name: "Silver 600", hex: "#a8a8a8", weight: 600 },
      { name: "Silver 700", hex: "#888888", weight: 700 },
      { name: "Silver 800", hex: "#666666", weight: 800 },
      { name: "Silver 900", hex: "#444444", weight: 900 },
      { name: "Silver 950", hex: "#222222", weight: 950 },
    ],
  },
  {
    id: "slate",
    name: "Slate",
    slug: "slate",
    description:
      "Cool-toned neutrals with a hint of blue — slate is the designer's foundation.",
    tags: ["neutral", "cool", "sophisticated"],
    baseHex: "#64748b",
    shades: [
      { name: "Slate 50", hex: "#f8fafc", weight: 50 },
      { name: "Slate 100", hex: "#f1f5f9", weight: 100 },
      { name: "Slate 200", hex: "#e2e8f0", weight: 200 },
      { name: "Slate 300", hex: "#cbd5e1", weight: 300 },
      { name: "Slate 400", hex: "#94a3b8", weight: 400 },
      { name: "Slate 500", hex: "#64748b", weight: 500 },
      { name: "Slate 600", hex: "#475569", weight: 600 },
      { name: "Slate 700", hex: "#334155", weight: 700 },
      { name: "Slate 800", hex: "#1e293b", weight: 800 },
      { name: "Slate 900", hex: "#0f172a", weight: 900 },
      { name: "Slate 950", hex: "#020617", weight: 950 },
    ],
  },
  {
    id: "stone",
    name: "Stone",
    slug: "stone",
    description:
      "Earthy, grounded, and timeless — stone anchors designs with natural warmth.",
    tags: ["neutral", "warm", "earthy"],
    baseHex: "#78716c",
    shades: [
      { name: "Stone 50", hex: "#fafaf9", weight: 50 },
      { name: "Stone 100", hex: "#f5f5f4", weight: 100 },
      { name: "Stone 200", hex: "#e7e5e4", weight: 200 },
      { name: "Stone 300", hex: "#d6d3d1", weight: 300 },
      { name: "Stone 400", hex: "#a8a29e", weight: 400 },
      { name: "Stone 500", hex: "#78716c", weight: 500 },
      { name: "Stone 600", hex: "#57534e", weight: 600 },
      { name: "Stone 700", hex: "#44403c", weight: 700 },
      { name: "Stone 800", hex: "#292524", weight: 800 },
      { name: "Stone 900", hex: "#1c1917", weight: 900 },
      { name: "Stone 950", hex: "#0c0a09", weight: 950 },
    ],
  },
  {
    id: "neutral",
    name: "Neutral",
    slug: "neutral",
    description:
      "Pure balance and versatility — neutral adapts effortlessly to every design system.",
    tags: ["neutral", "minimal", "versatile"],
    baseHex: "#737373",
    shades: [
      { name: "Neutral 50", hex: "#fafafa", weight: 50 },
      { name: "Neutral 100", hex: "#f5f5f5", weight: 100 },
      { name: "Neutral 200", hex: "#e5e5e5", weight: 200 },
      { name: "Neutral 300", hex: "#d4d4d4", weight: 300 },
      { name: "Neutral 400", hex: "#a3a3a3", weight: 400 },
      { name: "Neutral 500", hex: "#737373", weight: 500 },
      { name: "Neutral 600", hex: "#525252", weight: 600 },
      { name: "Neutral 700", hex: "#404040", weight: 700 },
      { name: "Neutral 800", hex: "#262626", weight: 800 },
      { name: "Neutral 900", hex: "#171717", weight: 900 },
      { name: "Neutral 950", hex: "#0a0a0a", weight: 950 },
    ],
  },
  {
    id: "zinc",
    name: "Zinc",
    slug: "zinc",
    description:
      "Industrial precision and modernity — zinc offers clean contemporary depth.",
    tags: ["neutral", "modern", "industrial"],
    baseHex: "#71717a",
    shades: [
      { name: "Zinc 50", hex: "#fafafa", weight: 50 },
      { name: "Zinc 100", hex: "#f4f4f5", weight: 100 },
      { name: "Zinc 200", hex: "#e4e4e7", weight: 200 },
      { name: "Zinc 300", hex: "#d4d4d8", weight: 300 },
      { name: "Zinc 400", hex: "#a1a1aa", weight: 400 },
      { name: "Zinc 500", hex: "#71717a", weight: 500 },
      { name: "Zinc 600", hex: "#52525b", weight: 600 },
      { name: "Zinc 700", hex: "#3f3f46", weight: 700 },
      { name: "Zinc 800", hex: "#27272a", weight: 800 },
      { name: "Zinc 900", hex: "#18181b", weight: 900 },
      { name: "Zinc 950", hex: "#09090b", weight: 950 },
    ],
  },
  {
    id: "gray",
    name: "Gray",
    slug: "gray",
    description:
      "Professional and timeless — gray provides structure without distraction.",
    tags: ["neutral", "professional", "balanced"],
    baseHex: "#6b7280",
    shades: [
      { name: "Gray 50", hex: "#f9fafb", weight: 50 },
      { name: "Gray 100", hex: "#f3f4f6", weight: 100 },
      { name: "Gray 200", hex: "#e5e7eb", weight: 200 },
      { name: "Gray 300", hex: "#d1d5db", weight: 300 },
      { name: "Gray 400", hex: "#9ca3af", weight: 400 },
      { name: "Gray 500", hex: "#6b7280", weight: 500 },
      { name: "Gray 600", hex: "#4b5563", weight: 600 },
      { name: "Gray 700", hex: "#374151", weight: 700 },
      { name: "Gray 800", hex: "#1f2937", weight: 800 },
      { name: "Gray 900", hex: "#111827", weight: 900 },
      { name: "Gray 950", hex: "#030712", weight: 950 },
    ],
  },
  {
    id: "black",
    name: "Black",
    slug: "black",
    description:
      "Power, elegance, and authority — black remains the ultimate statement.",
    tags: ["neutral", "luxury", "bold"],
    baseHex: "#000000",
    shades: [
      { name: "Black 50", hex: "#f5f5f5", weight: 50 },
      { name: "Black 100", hex: "#e5e5e5", weight: 100 },
      { name: "Black 200", hex: "#cccccc", weight: 200 },
      { name: "Black 300", hex: "#999999", weight: 300 },
      { name: "Black 400", hex: "#666666", weight: 400 },
      { name: "Black 500", hex: "#333333", weight: 500 },
      { name: "Black 600", hex: "#262626", weight: 600 },
      { name: "Black 700", hex: "#1a1a1a", weight: 700 },
      { name: "Black 800", hex: "#111111", weight: 800 },
      { name: "Black 900", hex: "#080808", weight: 900 },
      { name: "Black 950", hex: "#000000", weight: 950 },
    ],
  },
];

// Helper: get luminance to determine text color
export function getTextColor(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 0.45 ? "#1c1917" : "#ffffff";
}

export function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

export function hexToHsl(hex: string): string {
  let r = parseInt(hex.slice(1, 3), 16) / 255;
  let g = parseInt(hex.slice(3, 5), 16) / 255;
  let b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }
  return `${Math.round(h * 360)}°, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%`;
}
