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
  // ── Warm & Fiery ─────────────────────────────────────────────────────────
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
  {
    id: "ember",
    name: "Ember Glow",
    description: "Smouldering reds and charcoal tones of dying embers.",
    longDescription:
      "Ember Glow draws from the last light of a fire — deep crimson cooling to burgundy, with ashy charcoal and burnt sienna anchoring the palette. It's brooding and warm at once, ideal for whiskey brands, artisan food, or any project that wants to feel crafted with heat.",
    tags: ["warm", "deep"],
    mood: "Brooding & Warm",
    bestFor: [
      "Spirits & Beverages",
      "Restaurant Branding",
      "Artisan Products",
      "Dark Themes",
    ],
    colors: [
      { hex: "#fbbf24", name: "Flame Yellow" },
      { hex: "#f97316", name: "Ember Orange" },
      { hex: "#dc2626", name: "Crimson" },
      { hex: "#7f1d1d", name: "Deep Red" },
      { hex: "#292524", name: "Charcoal" },
    ],
  },
  {
    id: "desert-rose",
    name: "Desert Rose",
    description: "Sun-bleached pinks and warm sands of the arid landscape.",
    longDescription:
      "Desert Rose blends the blush of a blooming cactus flower against terracotta earth and sun-bleached sand. This palette radiates dry heat and resilience — perfect for beauty brands, boho aesthetics, or anything that wants to feel sun-kissed and naturally beautiful.",
    tags: ["warm", "earthy"],
    mood: "Sun-Kissed & Natural",
    bestFor: [
      "Beauty Brands",
      "Boho Aesthetics",
      "Wedding Design",
      "Lifestyle",
    ],
    colors: [
      { hex: "#fde68a", name: "Sand" },
      { hex: "#fca5a5", name: "Blush" },
      { hex: "#f472b6", name: "Desert Rose" },
      { hex: "#cd7f32", name: "Terracotta" },
      { hex: "#92400e", name: "Burnt Sienna" },
    ],
  },
  {
    id: "spice-market",
    name: "Spice Market",
    description: "Turmeric, saffron, and paprika from a bustling bazaar.",
    longDescription:
      "Spice Market pulls from the vivid, saturated hues of an open-air market — the deep orange of turmeric powder, blazing saffron yellow, rich paprika red, and warm cumin brown. It's a palette that smells as good as it looks, ideal for food brands, travel, and cultural projects with heat and character.",
    tags: ["warm", "vibrant"],
    mood: "Vivid & Aromatic",
    bestFor: [
      "Food Brands",
      "Travel",
      "Cultural Projects",
      "Restaurant Design",
    ],
    colors: [
      { hex: "#fbbf24", name: "Saffron" },
      { hex: "#f97316", name: "Turmeric" },
      { hex: "#dc2626", name: "Paprika" },
      { hex: "#92400e", name: "Cumin" },
      { hex: "#78350f", name: "Cinnamon" },
    ],
  },
  {
    id: "volcano",
    name: "Volcano",
    description: "Molten lava oranges and ashen greys of an active crater.",
    longDescription:
      "Volcano draws from the raw, elemental drama of an eruption — rivers of glowing magma, smouldering orange against near-black basalt rock, and the ashen grey of cooling lava fields. It's a palette of unstoppable energy and geological power, ideal for energy companies, sports brands, or any project that wants to feel like a force of nature.",
    tags: ["warm", "bold"],
    mood: "Raw & Powerful",
    bestFor: ["Energy Brands", "Sports", "Gaming", "Heavy Industry"],
    colors: [
      { hex: "#fde047", name: "Magma Core" },
      { hex: "#f97316", name: "Lava" },
      { hex: "#dc2626", name: "Molten" },
      { hex: "#44403c", name: "Basalt" },
      { hex: "#0c0a09", name: "Obsidian" },
    ],
  },

  // ── Earth & Nature ───────────────────────────────────────────────────────
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
    id: "moss",
    name: "Moss & Stone",
    description: "Muted greens and grey stones of an ancient woodland path.",
    longDescription:
      "Moss & Stone captures the quiet beauty of an old forest trail — the grey of lichen-covered rock, the deep olive of ground cover, the soft sage of filtered light. This palette is understated and organic, perfect for slow-living brands, sustainable fashion, or editorial design that values restraint.",
    tags: ["natural", "earthy"],
    mood: "Quiet & Organic",
    bestFor: [
      "Sustainable Fashion",
      "Slow Living Brands",
      "Editorial",
      "Packaging",
    ],
    colors: [
      { hex: "#d9f99d", name: "Pale Lime" },
      { hex: "#86efac", name: "Sage" },
      { hex: "#4d7c0f", name: "Moss" },
      { hex: "#78716c", name: "Stone" },
      { hex: "#44403c", name: "Dark Stone" },
    ],
  },
  {
    id: "botanical",
    name: "Botanical",
    description: "Rich greens and botanical tones from a lush greenhouse.",
    longDescription:
      "Botanical evokes the dense, humid richness of a Victorian glasshouse — deep jungle greens, warm botanical gold, and the rich brown of fertile soil. It's a palette that feels both lush and sophisticated, ideal for wellness brands, high-end food packaging, or editorial work with a natural luxury feel.",
    tags: ["natural", "rich"],
    mood: "Lush & Sophisticated",
    bestFor: [
      "Wellness Brands",
      "Premium Food",
      "Luxury Packaging",
      "Editorial",
    ],
    colors: [
      { hex: "#fde68a", name: "Botanical Gold" },
      { hex: "#86efac", name: "Light Green" },
      { hex: "#16a34a", name: "Garden Green" },
      { hex: "#14532d", name: "Deep Jungle" },
      { hex: "#78350f", name: "Rich Soil" },
    ],
  },
  {
    id: "jungle",
    name: "Jungle",
    description: "Dense, humid greens of a tropical rainforest canopy.",
    longDescription:
      "Jungle plunges deep into the tropical canopy — electric lime filtering through dense foliage, bright emerald mid-tones, and the near-black of the forest floor where little light reaches. It's the palette of adventure travel, outdoor apparel, and any brand that wants to feel genuinely wild.",
    tags: ["natural", "vibrant"],
    mood: "Wild & Adventurous",
    bestFor: [
      "Adventure Travel",
      "Outdoor Apparel",
      "Sports Nutrition",
      "Gaming",
    ],
    colors: [
      { hex: "#bef264", name: "Canopy" },
      { hex: "#4ade80", name: "Tropical" },
      { hex: "#16a34a", name: "Jungle Green" },
      { hex: "#14532d", name: "Deep Canopy" },
      { hex: "#052e16", name: "Forest Floor" },
    ],
  },
  {
    id: "meadow",
    name: "Summer Meadow",
    description: "Wildflower yellows and soft greens of an open countryside.",
    longDescription:
      "Summer Meadow captures a warm afternoon in open countryside — butter yellow wildflowers, soft sage grass, lavender in the distance, and the warm tan of a dusty path. It's a palette of uncomplicated joy and natural beauty, perfect for artisan food, countryside hospitality, or brands that want to feel genuinely wholesome.",
    tags: ["natural", "warm"],
    mood: "Wholesome & Joyful",
    bestFor: [
      "Artisan Food",
      "Countryside Hospitality",
      "Garden Brands",
      "Family Products",
    ],
    colors: [
      { hex: "#fde047", name: "Buttercup" },
      { hex: "#86efac", name: "Meadow" },
      { hex: "#4ade80", name: "Grass" },
      { hex: "#c084fc", name: "Wildflower" },
      { hex: "#d2b48c", name: "Dusty Path" },
    ],
  },

  // ── Ocean & Water ────────────────────────────────────────────────────────
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
    id: "arctic",
    name: "Arctic",
    description: "Icy blues and pale whites of a frozen northern landscape.",
    longDescription:
      "Arctic channels the breathtaking clarity of polar wilderness — ice-white skies, the pale blue of glacial meltwater, and the deep steel of open Arctic sea. It's a palette of extreme purity and quiet power, ideal for technology brands, premium skincare, or any design that needs to feel clean, cold, and precise.",
    tags: ["cool", "minimal"],
    mood: "Pure & Precise",
    bestFor: ["Tech Brands", "Premium Skincare", "Medical", "Minimal UI"],
    colors: [
      { hex: "#f0f9ff", name: "Ice White" },
      { hex: "#bae6fd", name: "Glacier" },
      { hex: "#38bdf8", name: "Arctic Blue" },
      { hex: "#0369a1", name: "Deep Ice" },
      { hex: "#0c4a6e", name: "Polar Night" },
    ],
  },
  {
    id: "lagoon",
    name: "Lagoon",
    description: "Tropical turquoise and coral of a hidden island lagoon.",
    longDescription:
      "Lagoon captures the vivid, almost unreal colors of a tropical atoll — electric turquoise water, bright coral, warm sandy white, and the deep teal of the reef below. It's joyful and vibrant without being garish, perfect for travel brands, summer campaigns, or any project that wants to feel genuinely sun-drenched.",
    tags: ["tropical", "vibrant"],
    mood: "Tropical & Joyful",
    bestFor: [
      "Travel Brands",
      "Summer Campaigns",
      "Resort & Hotel",
      "Lifestyle",
    ],
    colors: [
      { hex: "#fde68a", name: "Sand" },
      { hex: "#6ee7b7", name: "Seafoam" },
      { hex: "#22d3ee", name: "Lagoon" },
      { hex: "#0891b2", name: "Reef" },
      { hex: "#ff7f50", name: "Coral" },
    ],
  },
  {
    id: "reef",
    name: "Coral Reef",
    description:
      "Vivid corals and electric blues of a thriving reef ecosystem.",
    longDescription:
      "Coral Reef captures the extraordinary biodiversity of colour found underwater — vivid coral orange, hot pink sea anemone, electric turquoise water, and the deep cobalt of open reef. It's one of nature's most generous palettes, perfect for marine conservation brands, tropical hospitality, or any design that wants to feel teeming with life.",
    tags: ["tropical", "vibrant"],
    mood: "Vibrant & Alive",
    bestFor: [
      "Marine Brands",
      "Tropical Hospitality",
      "Conservation",
      "Summer Events",
    ],
    colors: [
      { hex: "#ff7f50", name: "Coral" },
      { hex: "#f472b6", name: "Sea Anemone" },
      { hex: "#22d3ee", name: "Reef Water" },
      { hex: "#0ea5e9", name: "Deep Reef" },
      { hex: "#fde68a", name: "Sea Urchin" },
    ],
  },
  {
    id: "monsoon",
    name: "Monsoon",
    description: "Stormy grey-blues and electric teal of a tropical downpour.",
    longDescription:
      "Monsoon captures the dramatic, charged atmosphere of a tropical storm — dark steel-grey clouds, electric teal lightning, the deep navy of driving rain, and the vivid green that everything turns immediately after. It's a palette of drama, renewal, and raw atmospheric power.",
    tags: ["cool", "deep"],
    mood: "Dramatic & Charged",
    bestFor: [
      "Weather Apps",
      "Environmental Brands",
      "Dramatic Editorial",
      "Tech",
    ],
    colors: [
      { hex: "#a5f3fc", name: "Lightning" },
      { hex: "#0891b2", name: "Storm Teal" },
      { hex: "#334155", name: "Storm Cloud" },
      { hex: "#0f172a", name: "Deep Storm" },
      { hex: "#4ade80", name: "After Rain" },
    ],
  },

  // ── Cool & Night ─────────────────────────────────────────────────────────
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
    id: "galaxy",
    name: "Galaxy",
    description: "Deep space purples and cosmic blues of the night sky.",
    longDescription:
      "Galaxy pulls color from the furthest reaches of the observable universe — the deep violet of a nebula, the midnight blue of open space, and the occasional spark of stellar gold. It's a palette of boundless ambition and wonder, perfect for tech startups, creative agencies, or anyone who wants to think at cosmic scale.",
    tags: ["deep", "cool"],
    mood: "Cosmic & Ambitious",
    bestFor: [
      "Tech Startups",
      "Creative Agencies",
      "Games",
      "Sci-Fi Aesthetic",
    ],
    colors: [
      { hex: "#fbbf24", name: "Starlight" },
      { hex: "#818cf8", name: "Nebula" },
      { hex: "#6d28d9", name: "Deep Violet" },
      { hex: "#1e1b4b", name: "Space" },
      { hex: "#0f172a", name: "Void" },
    ],
  },
  {
    id: "aurora",
    name: "Aurora",
    description: "Dancing greens and purples of the northern lights.",
    longDescription:
      "Aurora captures the ethereal, shifting beauty of the borealis — electric green rippling into teal, deepening through violet to the dark indigo of an Arctic night sky. It's otherworldly and alive, perfect for creative technology brands, music platforms, or any project that wants to feel genuinely magical.",
    tags: ["cool", "vibrant"],
    mood: "Ethereal & Magical",
    bestFor: [
      "Creative Tech",
      "Music Platforms",
      "Art Installations",
      "Digital Experiences",
    ],
    colors: [
      { hex: "#a7f3d0", name: "Aurora Green" },
      { hex: "#34d399", name: "Electric Teal" },
      { hex: "#818cf8", name: "Violet Shift" },
      { hex: "#7c3aed", name: "Deep Aurora" },
      { hex: "#0f172a", name: "Arctic Night" },
    ],
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk",
    description: "Hot pink and acid yellow against brutal dark concrete.",
    longDescription:
      "Cyberpunk tears its palette directly from a dystopian megacity — screaming magenta neon, acid yellow, electric violet, all blazing against near-black urban darkness. It's aggressive, confrontational, and impossible to ignore — perfect for gaming, streetwear, and any brand operating in the space between technology and counterculture.",
    tags: ["vivid", "electric"],
    mood: "Aggressive & Futuristic",
    bestFor: ["Gaming", "Streetwear", "Music", "Cyberpunk & Sci-Fi"],
    colors: [
      { hex: "#f0abfc", name: "Hot Magenta" },
      { hex: "#facc15", name: "Acid Yellow" },
      { hex: "#818cf8", name: "Electric Violet" },
      { hex: "#06b6d4", name: "Neon Cyan" },
      { hex: "#09090b", name: "Urban Dark" },
    ],
  },
  {
    id: "deep-sea",
    name: "Deep Sea",
    description: "Bioluminescent blues of the unexplored ocean floor.",
    longDescription:
      "Deep Sea descends into the hadal zone where sunlight never reaches — the deep navy and near-black of abyssal water punctuated by the eerie bioluminescent blues and teals of deep-sea creatures. It's a palette of mystery, discovery, and the unknown, ideal for science brands, exploratory tech, or anything that thrives in depth.",
    tags: ["deep", "cool"],
    mood: "Mysterious & Deep",
    bestFor: ["Science Brands", "Exploratory Tech", "Documentaries", "Gaming"],
    colors: [
      { hex: "#a5f3fc", name: "Bioluminescent" },
      { hex: "#0891b2", name: "Deep Teal" },
      { hex: "#1e3a8a", name: "Abyssal Blue" },
      { hex: "#0f172a", name: "Deep Navy" },
      { hex: "#020617", name: "Abyss" },
    ],
  },

  // ── Pastel & Soft ────────────────────────────────────────────────────────
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
    id: "cotton-candy",
    name: "Cotton Candy",
    description:
      "Dreamy pastels that feel light, sweet, and effortlessly soft.",
    longDescription:
      "Cotton Candy floats between baby blue, blush pink, soft lavender, and pale mint — a palette so light it barely touches the page. It's the aesthetic of dreamlike editorial photography, Gen-Z beauty brands, and anything that wants to feel tender, airy, and utterly unbothered.",
    tags: ["pastel", "soft"],
    mood: "Dreamy & Tender",
    bestFor: ["Beauty Editorial", "Baby Brands", "Soft UI", "Social Media"],
    colors: [
      { hex: "#fce7f3", name: "Blush" },
      { hex: "#e0e7ff", name: "Periwinkle" },
      { hex: "#d1fae5", name: "Pale Mint" },
      { hex: "#fef9c3", name: "Butter" },
      { hex: "#f3e8ff", name: "Lavender Mist" },
    ],
  },
  {
    id: "sorbet",
    name: "Sorbet",
    description: "Fruity, bright pastels inspired by summer frozen desserts.",
    longDescription:
      "Sorbet takes the playfulness of candy and dials up the saturation just enough — raspberry pink, mango orange, lemon yellow, and lime green that feel fresh and appetizing without tipping into garish. It's the palette of food brands, summer packaging, and consumer apps that want to feel delicious.",
    tags: ["pastel", "vibrant"],
    mood: "Fresh & Appetising",
    bestFor: [
      "Food Brands",
      "Summer Packaging",
      "Consumer Apps",
      "Kids Products",
    ],
    colors: [
      { hex: "#fda4af", name: "Raspberry" },
      { hex: "#fdba74", name: "Mango" },
      { hex: "#fde047", name: "Lemon" },
      { hex: "#86efac", name: "Lime" },
      { hex: "#a5f3fc", name: "Blue Raspberry" },
    ],
  },
  {
    id: "cloud",
    name: "Cloud",
    description: "Soft whites and pale blues of a bright, overcast sky.",
    longDescription:
      "Cloud strips color back to the gentlest possible range — near-white, pale grey-blue, soft periwinkle, and cool lavender that feel open, airy, and completely unthreatening. It's the perfect palette for meditation apps, mental health platforms, or any product that needs to feel immediately calming.",
    tags: ["pastel", "minimal"],
    mood: "Airy & Calming",
    bestFor: ["Meditation Apps", "Mental Health", "Minimal UI", "Healthcare"],
    colors: [
      { hex: "#f8fafc", name: "Cloud White" },
      { hex: "#e2e8f0", name: "Mist" },
      { hex: "#bfdbfe", name: "Pale Blue" },
      { hex: "#a5b4fc", name: "Periwinkle" },
      { hex: "#ddd6fe", name: "Soft Violet" },
    ],
  },
  {
    id: "macaron",
    name: "Macaron",
    description: "Delicate French pastry hues — pistachio, rose, and violet.",
    longDescription:
      "Macaron draws from the precise, jewel-like colors of a Parisian patisserie window — pale pistachio, dusty rose, soft lavender, lemon cream, and sky blue. It's a palette of refined delicacy, perfect for luxury food brands, upscale beauty, or editorial work that wants to feel like a display case on the Rue du Bac.",
    tags: ["pastel", "soft"],
    mood: "Delicate & Refined",
    bestFor: [
      "Luxury Food",
      "Beauty Brands",
      "Wedding Design",
      "Luxury Editorial",
    ],
    colors: [
      { hex: "#d1fae5", name: "Pistachio" },
      { hex: "#fce7f3", name: "Rose" },
      { hex: "#ede9fe", name: "Lavender" },
      { hex: "#fef9c3", name: "Lemon Cream" },
      { hex: "#dbeafe", name: "Ciel" },
    ],
  },
  {
    id: "blossom",
    name: "Cherry Blossom",
    description: "Fleeting pinks and soft whites of hanami season.",
    longDescription:
      "Cherry Blossom captures the brief, heartbreaking beauty of sakura season — the palest pink blossoms against white sky, deepening through rose to the warm grey of ancient bark. It's a palette about impermanence and beauty, deeply associated with Japanese aesthetics and perfect for anything that wants to feel both delicate and meaningful.",
    tags: ["pastel", "fresh"],
    mood: "Fleeting & Beautiful",
    bestFor: ["Japanese Aesthetics", "Beauty", "Spring Campaigns", "Wellness"],
    colors: [
      { hex: "#fff1f2", name: "White Blossom" },
      { hex: "#fecdd3", name: "Pale Sakura" },
      { hex: "#fda4af", name: "Sakura Pink" },
      { hex: "#fb7185", name: "Deep Blossom" },
      { hex: "#9d174d", name: "Bark" },
    ],
  },

  // ── Vivid & Bold ─────────────────────────────────────────────────────────
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
    id: "carnival",
    name: "Carnival",
    description: "Loud, festive, and irresistibly fun primary brights.",
    longDescription:
      "Carnival throws the whole color wheel at you at once — screaming yellow, electric blue, vivid red, neon green, and hot orange, all at maximum confidence. It's the palette of fairground rides, festival branding, and brands that have absolutely no interest in blending in.",
    tags: ["vivid", "playful"],
    mood: "Festive & Fearless",
    bestFor: [
      "Events & Festivals",
      "Children's Brands",
      "Entertainment",
      "Sports",
    ],
    colors: [
      { hex: "#facc15", name: "Carnival Yellow" },
      { hex: "#f97316", name: "Fairground Orange" },
      { hex: "#ef4444", name: "Ride Red" },
      { hex: "#3b82f6", name: "Sky Blue" },
      { hex: "#22c55e", name: "Grass Green" },
    ],
  },
  {
    id: "pop-art",
    name: "Pop Art",
    description: "Bold primaries and stark contrasts inspired by Warhol.",
    longDescription:
      "Pop Art channels the flat, graphic energy of 1960s commercial art — pure cyan, magenta, yellow, and black arranged with maximum visual tension. It's confrontational, democratic, and impossible to ignore, ideal for cultural institutions, fashion brands, or any project that wants to feel like a statement.",
    tags: ["vivid", "bold"],
    mood: "Graphic & Confrontational",
    bestFor: [
      "Cultural Institutions",
      "Fashion",
      "Poster Design",
      "Art Brands",
    ],
    colors: [
      { hex: "#facc15", name: "Yellow" },
      { hex: "#ec4899", name: "Magenta" },
      { hex: "#06b6d4", name: "Cyan" },
      { hex: "#ef4444", name: "Red" },
      { hex: "#18181b", name: "Black" },
    ],
  },
  {
    id: "retro",
    name: "Retro Funk",
    description:
      "Groovy 70s tones — avocado, mustard, burnt orange, and brown.",
    longDescription:
      "Retro Funk reaches back to the warm, slightly weird color universe of the 1970s — avocado green appliances, harvest gold kitchens, burnt orange shag carpet, and rich walnut brown. It's nostalgic and knowing, perfect for vintage brands, record shops, or any project leaning into analogue warmth.",
    tags: ["warm", "retro"],
    mood: "Nostalgic & Groovy",
    bestFor: ["Vintage Brands", "Record Shops", "Retro UI", "Food & Drink"],
    colors: [
      { hex: "#ca8a04", name: "Mustard" },
      { hex: "#ea580c", name: "Burnt Orange" },
      { hex: "#4d7c0f", name: "Avocado" },
      { hex: "#92400e", name: "Saddle Brown" },
      { hex: "#44403c", name: "Walnut" },
    ],
  },
  {
    id: "memphis",
    name: "Memphis",
    description:
      "Geometric 80s brights inspired by the Memphis design movement.",
    longDescription:
      "Memphis takes the bold, anti-functionalist energy of the 1980s design movement and packs it into a palette — primary yellow, cobalt, vivid pink, and black arranged in deliberate visual noise. It's postmodern and playful, perfect for design-forward brands, creative studios, or anyone who wants to signal that they know their design history.",
    tags: ["vivid", "retro"],
    mood: "Postmodern & Playful",
    bestFor: ["Design Studios", "Creative Agencies", "Branding", "Editorial"],
    colors: [
      { hex: "#facc15", name: "Memphis Yellow" },
      { hex: "#3b82f6", name: "Cobalt" },
      { hex: "#ec4899", name: "Vivid Pink" },
      { hex: "#22c55e", name: "Acid Green" },
      { hex: "#18181b", name: "Graphic Black" },
    ],
  },
  {
    id: "vaporwave",
    name: "Vaporwave",
    description: "Pastel pink and cyan of nostalgic digital aesthetics.",
    longDescription:
      "Vaporwave distills an entire internet subculture into color — hazy pink fading to lavender, electric cyan, soft purple, and the pale teal of Windows 95 screensavers. It's ironic and sincere at the same time, perfect for music, digital art, or any brand that wants to feel like a memory of the future.",
    tags: ["vivid", "retro"],
    mood: "Nostalgic & Ironic",
    bestFor: ["Music Brands", "Digital Art", "Internet Culture", "Gaming"],
    colors: [
      { hex: "#f0abfc", name: "Pink Haze" },
      { hex: "#a78bfa", name: "Lavender" },
      { hex: "#818cf8", name: "Soft Indigo" },
      { hex: "#22d3ee", name: "Cyan Dream" },
      { hex: "#0d9488", name: "Teal Glow" },
    ],
  },

  // ── Luxury & Premium ─────────────────────────────────────────────────────
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
    id: "obsidian",
    name: "Obsidian",
    description: "Jet black and silver tones of polished volcanic glass.",
    longDescription:
      "Obsidian is built from the most elemental contrast — pure black, cool silver, and the occasional flash of platinum or white. It communicates absolute confidence and restraint, the kind of palette that belongs on a supercar brochure, a flagship store, or any brand that lets the product speak entirely for itself.",
    tags: ["luxury", "minimal"],
    mood: "Absolute & Confident",
    bestFor: [
      "Automotive",
      "Flagship Retail",
      "Luxury Tech",
      "Premium Packaging",
    ],
    colors: [
      { hex: "#f4f4f5", name: "Platinum" },
      { hex: "#a1a1aa", name: "Silver" },
      { hex: "#52525b", name: "Graphite" },
      { hex: "#18181b", name: "Obsidian" },
      { hex: "#09090b", name: "Void Black" },
    ],
  },
  {
    id: "royal",
    name: "Royal",
    description: "Regal purples and rich golds of sovereign authority.",
    longDescription:
      "Royal draws from the historical iconography of monarchy — deep purple velvet, burnished gold leaf, and ivory parchment. It's a palette that immediately signals heritage, authority, and exceptional status, perfect for established institutions, luxury hospitality, or premium products that want to wear their prestige openly.",
    tags: ["luxury", "deep"],
    mood: "Regal & Authoritative",
    bestFor: [
      "Heritage Brands",
      "Luxury Hospitality",
      "Premium Spirits",
      "Institutions",
    ],
    colors: [
      { hex: "#fde68a", name: "Gold Leaf" },
      { hex: "#c084fc", name: "Amethyst" },
      { hex: "#7e22ce", name: "Royal Purple" },
      { hex: "#4c1d95", name: "Deep Violet" },
      { hex: "#1c1917", name: "Ebony" },
    ],
  },
  {
    id: "champagne",
    name: "Champagne",
    description: "Effervescent golds and creams of a celebratory moment.",
    longDescription:
      "Champagne captures the warm sparkle of a celebration — the pale gold of fine wine, warm cream, soft blush, and the faintest hint of rose. It's sophisticated without being cold, festive without being loud, and ideal for weddings, luxury events, beauty brands, or any occasion that deserves to feel special.",
    tags: ["luxury", "warm"],
    mood: "Celebratory & Refined",
    bestFor: [
      "Weddings & Events",
      "Beauty Brands",
      "Luxury Packaging",
      "Fine Dining",
    ],
    colors: [
      { hex: "#fef9c3", name: "Cream" },
      { hex: "#fde68a", name: "Champagne" },
      { hex: "#fbbf24", name: "Gold" },
      { hex: "#fca5a5", name: "Blush Rose" },
      { hex: "#d97706", name: "Amber" },
    ],
  },
  {
    id: "noir",
    name: "Film Noir",
    description:
      "High-contrast black, white, and muted greys of classic cinema.",
    longDescription:
      "Film Noir strips the world to its most dramatic essentials — pure black shadow, harsh white light, and the endless grey scale in between. Occasionally a single accent of blood red or amber cuts through the darkness. It's a palette of moral ambiguity, tension, and cinematic storytelling.",
    tags: ["luxury", "minimal"],
    mood: "Cinematic & Tense",
    bestFor: ["Film & Media", "Premium Publishing", "Photography", "Fashion"],
    colors: [
      { hex: "#fafafa", name: "Harsh Light" },
      { hex: "#a1a1aa", name: "Fog" },
      { hex: "#52525b", name: "Shadow" },
      { hex: "#18181b", name: "Noir Black" },
      { hex: "#dc2626", name: "Blood Red" },
    ],
  },
  {
    id: "jade",
    name: "Jade & Gold",
    description:
      "Imperial jade greens and burnished gold of East Asian heritage.",
    longDescription:
      "Jade & Gold draws from the iconic visual language of East Asian imperial culture — the deep, saturated green of carved jade, the warm lustre of burnished gold, and the rich lacquer red of ceremonial objects. It's a palette of heritage, craftsmanship, and cultural prestige.",
    tags: ["luxury", "rich"],
    mood: "Imperial & Prestigious",
    bestFor: [
      "Heritage Luxury",
      "Cultural Brands",
      "Fine Dining",
      "Premium Retail",
    ],
    colors: [
      { hex: "#fde68a", name: "Gold" },
      { hex: "#d97706", name: "Burnished Gold" },
      { hex: "#065f46", name: "Jade" },
      { hex: "#14532d", name: "Deep Jade" },
      { hex: "#dc2626", name: "Lacquer Red" },
    ],
  },

  // ── Neutral & Minimal ────────────────────────────────────────────────────
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
    id: "warm-neutral",
    name: "Warm Neutral",
    description: "Creamy whites and toasty taupes for timeless backgrounds.",
    longDescription:
      "Warm Neutral occupies the space between white and beige with quiet authority — linen, ivory, warm greige, and soft taupe that feel simultaneously clean and human. It's the palette of considered interior design, premium editorial, and any brand that wants to feel expensive without showing off.",
    tags: ["neutral", "warm"],
    mood: "Quiet & Considered",
    bestFor: [
      "Interior Design",
      "Premium Editorial",
      "Architecture",
      "Minimal Branding",
    ],
    colors: [
      { hex: "#fafaf9", name: "Ivory" },
      { hex: "#f5f5f4", name: "Linen" },
      { hex: "#e7e5e4", name: "Warm White" },
      { hex: "#a8a29e", name: "Greige" },
      { hex: "#78716c", name: "Taupe" },
    ],
  },
  {
    id: "slate",
    name: "Cool Slate",
    description: "Blue-grey tones of overcast skies and modern architecture.",
    longDescription:
      "Cool Slate draws from the building materials of modernist architecture — poured concrete, brushed steel, frosted glass, and the blue-grey of an overcast northern sky. It's the palette of serious tech products, financial services, and brands that want to project quiet competence rather than personality.",
    tags: ["neutral", "cool"],
    mood: "Serious & Competent",
    bestFor: [
      "Financial Services",
      "B2B SaaS",
      "Architecture",
      "Tech Products",
    ],
    colors: [
      { hex: "#f8fafc", name: "Light Slate" },
      { hex: "#cbd5e1", name: "Slate 200" },
      { hex: "#64748b", name: "Slate 500" },
      { hex: "#334155", name: "Slate 700" },
      { hex: "#0f172a", name: "Slate 900" },
    ],
  },
  {
    id: "ink",
    name: "Ink",
    description: "Rich blacks and deep navy of fine writing instruments.",
    longDescription:
      "Ink is built from the palette of the written word — deep navy, midnight black, warm charcoal, and the faintest ivory of fine paper. It's the palette of publishing houses, law firms, and any brand that communicates through authority, precision, and the weight of the written word.",
    tags: ["neutral", "deep"],
    mood: "Authoritative & Precise",
    bestFor: [
      "Publishing",
      "Legal & Finance",
      "Academic",
      "Premium Stationery",
    ],
    colors: [
      { hex: "#f8fafc", name: "Paper" },
      { hex: "#94a3b8", name: "Faded Ink" },
      { hex: "#1e3a8a", name: "Navy Ink" },
      { hex: "#111827", name: "Midnight" },
      { hex: "#030712", name: "Pure Ink" },
    ],
  },
  {
    id: "concrete",
    name: "Concrete",
    description: "Raw brutalist greys of exposed concrete architecture.",
    longDescription:
      "Concrete embraces the raw, unfinished beauty of brutalist architecture — the cold grey of poured concrete, weathered aggregate, and the stark white of high-contrast lighting. It's a palette that refuses ornamentation, perfect for architecture firms, industrial brands, or any project that wants to feel structurally honest.",
    tags: ["neutral", "cool"],
    mood: "Raw & Structural",
    bestFor: [
      "Architecture Firms",
      "Industrial Design",
      "Art Galleries",
      "Minimal Brands",
    ],
    colors: [
      { hex: "#f9fafb", name: "White Concrete" },
      { hex: "#d1d5db", name: "Light Concrete" },
      { hex: "#9ca3af", name: "Mid Concrete" },
      { hex: "#4b5563", name: "Dark Concrete" },
      { hex: "#111827", name: "Raw Aggregate" },
    ],
  },
  {
    id: "parchment",
    name: "Parchment",
    description: "Aged paper tones and warm sepia of historical documents.",
    longDescription:
      "Parchment draws from the warm, aged palette of manuscripts and historical documents — yellowed ivory, warm sepia, aged leather brown, and the faded rust of old iron gall ink. It's the palette of heritage, storytelling, and craft, ideal for publishing, cultural institutions, or any brand that wants to feel like it has a genuine history.",
    tags: ["neutral", "warm"],
    mood: "Historical & Warm",
    bestFor: [
      "Publishing",
      "Cultural Institutions",
      "Heritage Brands",
      "Craft Brands",
    ],
    colors: [
      { hex: "#fef9c3", name: "Aged Paper" },
      { hex: "#fde68a", name: "Parchment" },
      { hex: "#d97706", name: "Sepia" },
      { hex: "#92400e", name: "Old Leather" },
      { hex: "#44403c", name: "Iron Gall" },
    ],
  },
];

// Derived helpers used by both pages
export const allPaletteTags = [
  "all",
  ...new Set(paletteSets.flatMap((p) => p.tags)),
];
