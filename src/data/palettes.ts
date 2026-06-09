// Single source of truth for all palette data.

export interface PaletteColor {
  hex: string;
  name: string;
}

export interface Palette {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  tags: string[];
  mood: string;
  bestFor: string[];
  colors: PaletteColor[];
}

export const paletteSets: Palette[] = [
  {
    id: "sunset",
    name: "Sunset",
    description: "Warm, glowing hues of dusk — from amber gold to deep rose.",
    longDescription:
      "The Sunset palette captures the fleeting magic of twilight — that brief window when the sky transforms into a canvas of molten amber, blazing orange, and soft dusty rose. Use it to evoke warmth, nostalgia, and emotional resonance in interfaces, illustrations, or brand identities that want to feel alive.",
    tags: ["warm", "vibrant"],
    mood: "Warm & Nostalgic",
    bestFor: [
      "Brand Identity",
      "Landing Pages",
      "Illustrations",
      "Social Media",
    ],
    colors: [
      { hex: "#f59e0b", name: "Amber" },
      { hex: "#f97316", name: "Orange" },
      { hex: "#ef4444", name: "Red" },
      { hex: "#ec4899", name: "Pink" },
      { hex: "#d946ef", name: "Fuchsia" },
    ],
  },
  {
    id: "ocean",
    name: "Ocean Depths",
    description: "From shallow tropical waters to the deep abyssal blue.",
    longDescription:
      "Ocean Depths dives from the sparkling turquoise of shallow reef water all the way down into the crushing midnight blue of the abyss. This palette is ideal for conveying trust, depth, and calm authority — perfect for fintech, healthcare, or any project that needs the quiet confidence of open water.",
    tags: ["cool", "serene"],
    mood: "Calm & Trustworthy",
    bestFor: ["Fintech", "Healthcare", "SaaS Dashboards", "Tech Products"],
    colors: [
      { hex: "#67e8f9", name: "Cyan" },
      { hex: "#22d3ee", name: "Sky Cyan" },
      { hex: "#0ea5e9", name: "Sky Blue" },
      { hex: "#3b82f6", name: "Blue" },
      { hex: "#1e3a8a", name: "Navy" },
    ],
  },
  {
    id: "forest",
    name: "Forest Floor",
    description: "Earthy greens and mossy tones from the woodland palette.",
    longDescription:
      "Forest Floor brings the layered richness of old-growth woodland into your design. Bright lime canopy gives way to sage mid-tones and deep hunter greens that feel both grounding and alive. Use it for anything connected to sustainability, wellness, the outdoors, or brands that want to feel genuinely rooted.",
    tags: ["natural", "earthy"],
    mood: "Grounded & Natural",
    bestFor: ["Eco Brands", "Wellness Apps", "Food & Organic", "Outdoor Gear"],
    colors: [
      { hex: "#84cc16", name: "Lime" },
      { hex: "#22c55e", name: "Green" },
      { hex: "#10b981", name: "Emerald" },
      { hex: "#14b8a6", name: "Teal" },
      { hex: "#228b22", name: "Forest" },
    ],
  },
  {
    id: "candy",
    name: "Candy Pop",
    description: "Playful, sugar-bright tones for bold and joyful designs.",
    longDescription:
      "Candy Pop is unabashedly cheerful — a riot of rose, pink, purple, and violet that channels childhood joy, pop art energy, and Gen-Z aesthetic unapologetically. It's built for brands that refuse to take themselves too seriously and want to leave a vivid, memorable impression.",
    tags: ["vivid", "playful"],
    mood: "Playful & Bold",
    bestFor: ["Consumer Apps", "Youth Brands", "Entertainment", "E-Commerce"],
    colors: [
      { hex: "#f43f5e", name: "Rose" },
      { hex: "#ec4899", name: "Pink" },
      { hex: "#d946ef", name: "Fuchsia" },
      { hex: "#a855f7", name: "Purple" },
      { hex: "#8b5cf6", name: "Violet" },
    ],
  },
  {
    id: "earth",
    name: "Earth & Clay",
    description: "Terracotta, sand, and warm neutrals inspired by the desert.",
    longDescription:
      "Earth & Clay draws from the rich, sun-baked palette of the American Southwest — terracotta vessels, red canyon walls, and bleached driftwood. This palette pairs beautifully with natural textures and organic shapes, making it ideal for artisan brands, interior design, or any aesthetic rooted in handmade authenticity.",
    tags: ["earthy", "warm"],
    mood: "Artisan & Earthy",
    bestFor: [
      "Interior Design",
      "Ceramics & Craft",
      "Food & Hospitality",
      "Lifestyle Brands",
    ],
    colors: [
      { hex: "#d2b48c", name: "Tan" },
      { hex: "#c68642", name: "Caramel" },
      { hex: "#cd7f32", name: "Bronze" },
      { hex: "#b7410e", name: "Rust" },
      { hex: "#78716c", name: "Stone" },
    ],
  },
  {
    id: "midnight",
    name: "Midnight Run",
    description: "Deep, moody tones for dramatic, high-impact interfaces.",
    longDescription:
      "Midnight Run plunges into the deep end of the spectrum — layered indigos and violets that feel simultaneously sophisticated and mysterious. It's the palette of late-night productivity tools, premium dark-mode interfaces, and brands that position themselves as the serious, focused alternative.",
    tags: ["deep", "cool"],
    mood: "Dramatic & Sophisticated",
    bestFor: [
      "Dark Mode UI",
      "Dev Tools",
      "Premium SaaS",
      "Creative Portfolios",
    ],
    colors: [
      { hex: "#312e81", name: "Deep Indigo" },
      { hex: "#4338ca", name: "Indigo" },
      { hex: "#6366f1", name: "Mid Indigo" },
      { hex: "#818cf8", name: "Light Indigo" },
      { hex: "#c7d2fe", name: "Pale Indigo" },
    ],
  },
  {
    id: "spring",
    name: "Spring Bloom",
    description: "Fresh pastels and blossoming tones from nature's renewal.",
    longDescription:
      "Spring Bloom captures the brief, joyful explosion of color that follows winter — cherry blossom pinks, soft lavenders, and bright garden greens that feel hopeful, fresh, and tender. Perfect for wellness, beauty, and lifestyle brands that want to convey growth, optimism, and renewal.",
    tags: ["pastel", "fresh"],
    mood: "Hopeful & Fresh",
    bestFor: [
      "Beauty & Wellness",
      "Wedding & Events",
      "Baby & Kids",
      "Lifestyle",
    ],
    colors: [
      { hex: "#fce7f3", name: "Pale Pink" },
      { hex: "#fbcfe8", name: "Light Pink" },
      { hex: "#f9a8d4", name: "Pink" },
      { hex: "#c084fc", name: "Lilac" },
      { hex: "#86efac", name: "Mint" },
    ],
  },
  {
    id: "monochrome",
    name: "Monochrome",
    description: "The full tonal range of a single hue — versatile and clean.",
    longDescription:
      "Monochrome strips everything back to essentials — pure tonal contrast, no distractions. From near-white to near-black, this palette works everywhere: editorial layouts, minimal product photography, or any system where color takes a back seat to typography and form.",
    tags: ["neutral", "minimal"],
    mood: "Clean & Minimal",
    bestFor: [
      "Editorial Design",
      "Photography",
      "Minimal UI",
      "Typography-Led Design",
    ],
    colors: [
      { hex: "#f5f5f5", name: "Near White" },
      { hex: "#d4d4d4", name: "Light Gray" },
      { hex: "#737373", name: "Mid Gray" },
      { hex: "#404040", name: "Dark Gray" },
      { hex: "#0a0a0a", name: "Near Black" },
    ],
  },
  {
    id: "luxury",
    name: "Luxury",
    description: "Gold, burgundy, and deep tones that speak of premium craft.",
    longDescription:
      "The Luxury palette is built to communicate exclusivity, heritage, and exceptional quality. Deep burgundy and maroon anchor the palette with gravitas, while burnished gold adds the unmistakable glint of premium craftsmanship. Use it for high-end brands, boutique services, or any design that needs to feel genuinely expensive.",
    tags: ["luxury", "premium"],
    mood: "Premium & Exclusive",
    bestFor: [
      "Luxury Brands",
      "Hospitality",
      "Jewellery & Fashion",
      "Premium Services",
    ],
    colors: [
      { hex: "#d4af37", name: "Gold" },
      { hex: "#b87333", name: "Copper" },
      { hex: "#800020", name: "Burgundy" },
      { hex: "#4c1d95", name: "Deep Violet" },
      { hex: "#1c1917", name: "Charcoal" },
    ],
  },
  {
    id: "neon",
    name: "Neon Nights",
    description:
      "Electric, high-contrast colors straight from a neon-lit city.",
    longDescription:
      "Neon Nights channels the electric energy of rain-slicked city streets after dark — vivid chartreuse, cyan, hot pink, and orange against near-black darkness. This palette is built for brands that want to feel cutting-edge, countercultural, or simply impossible to ignore.",
    tags: ["vivid", "electric"],
    mood: "Electric & Edgy",
    bestFor: ["Gaming", "Streetwear", "Music & Events", "Cyberpunk Aesthetic"],
    colors: [
      { hex: "#39ff14", name: "Neon Green" },
      { hex: "#7df9ff", name: "Electric Blue" },
      { hex: "#ff6ec7", name: "Neon Pink" },
      { hex: "#ff6700", name: "Neon Orange" },
      { hex: "#ffff00", name: "Neon Yellow" },
    ],
  },
  {
    id: "coastal",
    name: "Coastal",
    description: "Salt-washed tones of seafoam, driftwood, and open sky.",
    longDescription:
      "Coastal brings the unhurried calm of a seaside morning — pale seafoam greens, bleached sand, washed-out sky blue, and warm driftwood tones that feel effortlessly relaxed. It's the palette of beach houses, coastal lifestyle brands, and any design that wants to slow the pace and breathe.",
    tags: ["fresh", "pastel"],
    mood: "Relaxed & Coastal",
    bestFor: [
      "Travel & Hospitality",
      "Wellness Retreats",
      "Coastal Lifestyle",
      "Summer Campaigns",
    ],
    colors: [
      { hex: "#f0fdfa", name: "Pale Mint" },
      { hex: "#99f6e4", name: "Seafoam" },
      { hex: "#38bdf8", name: "Sky" },
      { hex: "#9fe2bf", name: "Sea Green" },
      { hex: "#d2b48c", name: "Driftwood" },
    ],
  },
  {
    id: "autumn",
    name: "Autumn Harvest",
    description: "Burnished reds, ambers, and deep ochres of the fall season.",
    longDescription:
      "Autumn Harvest captures that bittersweet richness of the turning season — the blaze of amber maples, the deep ochre of fallen leaves, the rust of old iron. It's a palette full of warmth and melancholy in equal measure, perfect for seasonal campaigns, cosy brands, or anything that wants to feel richly textured and alive.",
    tags: ["warm", "earthy"],
    mood: "Warm & Cosy",
    bestFor: [
      "Seasonal Campaigns",
      "Food & Drink",
      "Cosy Lifestyle Brands",
      "Autumn Marketing",
    ],
    colors: [
      { hex: "#eab308", name: "Yellow" },
      { hex: "#f97316", name: "Orange" },
      { hex: "#ef4444", name: "Red" },
      { hex: "#b7410e", name: "Rust" },
      { hex: "#78350f", name: "Deep Brown" },
    ],
  },
];

// Derived helpers used by both pages
export const allPaletteTags = [
  "all",
  ...new Set(paletteSets.flatMap((p) => p.tags)),
];
