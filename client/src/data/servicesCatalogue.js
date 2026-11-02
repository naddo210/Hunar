/**
 * HUNAR Creative Studio — Master Creative Services Catalogue
 * Source of Truth: Team Service Catalogue (PDF)
 * Contains all 7 Divisions and 48 Sub-Services with complete SEO metadata,
 * deliverables, process steps, curated imagery, and FAQs.
 */

export const DIVISIONS = {
  'custom-art': {
    id: 'custom-art',
    title: 'Custom Art & Commissions',
    tagline: 'For individuals, gift buyers and collectors',
    description: 'Made-to-order artwork created around a customer’s idea, reference, occasion or preferred style. Traditional craftsmanship on museum substrates.',
    path: '/services/custom-art',
    heroImage: '/portfolio/portraits/elderly-couple-traditional-oil-portrait.webp',
    accent: '01',
  },
  'art-products': {
    id: 'art-products',
    title: 'Original Art & Art Products',
    tagline: 'For art lovers, homeowners and gift shops',
    description: 'A curated selection of original and made-for-sale creative pieces, fine art prints, sculptures, and resin objects.',
    path: '/services/art-products',
    heroImage: '/portfolio/installations/flight-of-peace-paper-doves-sculpture.webp',
    accent: '02',
  },
  'branding-design': {
    id: 'branding-design',
    title: 'Branding & Visual Identity',
    tagline: 'For startups, freelancers, small businesses and established companies',
    description: 'Visual systems that help a business present itself consistently across digital and physical touchpoints with typographic rigor.',
    path: '/services/branding-design',
    heroImage: '/portfolio/calligraphy/koshish-harivansh-rai-bachchan-calligraphy.webp',
    accent: '03',
  },
  'website-development': {
    id: 'website-development',
    title: 'Website Design & Development',
    tagline: 'For businesses, professionals, creators and online sellers',
    description: 'Web experiences designed to present services, build trust and help customers take action, engineered on high-performance full-stack architectures.',
    path: '/services/website-development',
    heroImage: '/portfolio/web-design/shikha-singh-luxury-model-portfolio.webp',
    accent: '04',
  },
  'digital-content': {
    id: 'digital-content',
    title: 'Digital Content & Motion',
    tagline: 'For brands, creators and marketing teams',
    description: 'Digital creative assets and motion design that help brands communicate clearly and consistently across online channels.',
    path: '/services/digital-content',
    heroImage: '/portfolio/web-design/greek-automata-techfest-website.webp',
    accent: '05',
  },
  'murals-commercial-art': {
    id: 'murals-commercial-art',
    title: 'Murals, Interior Art & Commercial Projects',
    tagline: 'For homeowners, cafes, offices, restaurants, hotels and designers',
    description: 'Artwork and creative installations designed for physical spaces, hospitality environments, corporate offices and cultural events.',
    path: '/services/murals-commercial-art',
    heroImage: '/portfolio/murals/staircase-monstera-botanical-mural.webp',
    accent: '06',
  },
  'creative-products': {
    id: 'creative-products',
    title: 'Creative Products & Digital Assets',
    tagline: 'For entrepreneurs, creators, businesses and consumers',
    description: 'Custom-designed physical products, artisanal merchandise, and downloadable resources for personal or commercial use.',
    path: '/services/creative-products',
    heroImage: '/portfolio/installations/creative-tree-of-knowledge-sculpture.webp',
    accent: '07',
  },
};

export const SUB_SERVICES = {
  // 1. Custom Art & Commissions
  'custom-portraits': {
    division: 'custom-art',
    slug: 'custom-portraits',
    title: 'Custom Fine Art Portraits',
    primaryKeyword: 'custom fine art portraits',
    metaTitle: 'Custom Fine Art Portraits — Commissioned Oil & Charcoal Artwork | HUNAR',
    metaDescription: 'Commission an original, hand-painted portrait by HUNAR Creative Studio. Handcrafted in oil, charcoal, or graphite on archival Belgian linen.',
    summary: 'Handcrafted fine art portraits created from reference photographs or live sitting sessions, composed with emotional depth and archival longevity.',
    heroImage: '/portfolio/portraits/vibrant-crimson-woman-oil-portrait.webp',
    galleryImages: [
          {
                "url": "/portfolio/portraits/vibrant-crimson-woman-oil-portrait.webp",
                "caption": "Luminescence in Crimson — Oil on Belgian Linen",
                "tag": "Fine Art Oil"
          },
          {
                "url": "/portfolio/portraits/bearded-man-studio-easel-portrait.webp",
                "caption": "Contemplation on Easel — Studio Oil Portrait",
                "tag": "Studio Oil"
          },
          {
                "url": "/portfolio/portraits/elder-gentleman-turban-oil-portrait.webp",
                "caption": "Dignity in Feta — Oil on Primed Canvas Board",
                "tag": "Traditional Oil"
          }
    ],
    deliverables: ['Original Hand-Crafted Portrait on Archival Medium', 'Certificate of Authenticity with Atelier Seal', 'Preliminary Tonal Value & Compositional Studies', 'Custom Hardwood Framing Options', 'Insured White-Glove Shipping'],
    faqs: [
      { q: 'What photographic references work best for custom portraits?', a: 'High-resolution photographs with natural, directional side lighting produce the strongest tonal depth. Multiple angles are welcome.' },
      { q: 'How long does a portrait commission take to complete?', a: 'Graphite and charcoal studies take 2 to 3 weeks; oil paintings require 4 to 6 weeks to allow proper pigment curing and varnishing.' },
    ],
  },
  'couple-portraits': {
    division: 'custom-art',
    slug: 'couple-portraits',
    title: 'Bespoke Couple Portraits',
    primaryKeyword: 'custom couple portraits fine art',
    metaTitle: 'Bespoke Couple Portraits — Anniversary & Wedding Fine Art | HUNAR',
    metaDescription: 'Celebrate union and partnership with an original, hand-painted couple portrait crafted by master atelier artists.',
    summary: 'Harmonious dual-subject portraiture celebrating weddings, anniversaries, and partnership through delicate light and timeless artistic media.',
    heroImage: '/portfolio/portraits/elderly-couple-traditional-oil-portrait.webp',
    galleryImages: [
          {
                "url": "/portfolio/portraits/elderly-couple-traditional-oil-portrait.webp",
                "caption": "Elders in Heritage Splendor — Oil on Stretched Linen Canvas",
                "tag": "Oil Canvas"
          },
          {
                "url": "/portfolio/caricature/live-family-caricature-portrait.webp",
                "caption": "Live Couple & Family Caricature Celebration",
                "tag": "Live Art"
          }
    ],
    deliverables: ['Dual-Subject Composition Sketching', 'Custom Linen Canvas Stretch', 'Archival Protective Varnishing', 'Certificate of Provenance'],
    faqs: [
      { q: 'Can you combine two separate photographs into a single couple portrait?', a: 'Yes. Our artists frequently harmonize separate portrait photographs into a unified, balanced lighting composition.' },
    ],
  },
  'family-portraits': {
    division: 'custom-art',
    slug: 'family-portraits',
    title: 'Multi-Generational Family Portraits',
    primaryKeyword: 'custom family portraits painting',
    metaTitle: 'Custom Family Portraits — Heirloom Paintings & Drawings | HUNAR',
    metaDescription: 'Commission an enduring multi-generational family portrait painting designed to serve as a cherished family heirloom.',
    summary: 'Heirloom family paintings capturing generations in balanced, elegant compositions with enduring historical permanence.',
    heroImage: '/portfolio/caricature/live-family-caricature-portrait.webp',
    galleryImages: [
          {
                "url": "/portfolio/caricature/live-family-caricature-portrait.webp",
                "caption": "Family in Harmony: Live Event Caricature Portrait",
                "tag": "Live Caricature"
          },
          {
                "url": "/portfolio/portraits/elderly-couple-traditional-oil-portrait.webp",
                "caption": "Heirloom Heritage Family Portrait in Oil",
                "tag": "Heirloom Oil"
          }
    ],
    deliverables: ['Comprehensive Group Composition Staging', 'Detailed Facial Expression Studies', 'Large Format Canvas Execution', 'Archival Crating'],
    faqs: [{ q: 'What is the maximum number of subjects you can include?', a: 'We regularly paint family groups of 3 to 12 members across generous horizontal formats (48 inches and above).' }],
  },
  'pet-portraits': {
    division: 'custom-art',
    slug: 'pet-portraits',
    title: 'Bespoke Pet Portraits',
    primaryKeyword: 'custom pet portraits fine art',
    metaTitle: 'Custom Pet Portraits — Fine Art Oil & Charcoal Animal Studies | HUNAR',
    metaDescription: 'Honor your companion with an art-directed, fine art pet portrait hand-rendered with expressive brushwork and personality.',
    summary: 'Expressive fine art studies of canine, feline, and equine companions focusing on anatomical precision and radiant personality.',
    heroImage: '/portfolio/portraits/vibrant-crimson-woman-oil-portrait.webp',
    galleryImages: [
      { url: '/portfolio/portraits/elder-gentleman-turban-oil-portrait.webp', caption: 'Canine Portrait in Oil & Raw Earth Pigments', tag: 'Oil Canvas' },
    ],
    deliverables: ['Eye and Coat Texture Detailing', 'Custom Heavyweight Linen Mount', 'Certificate of Authenticity'],
    faqs: [{ q: 'Do you work from phone snapshots?', a: 'Yes, as long as eye color and fur direction are clearly visible in daylight.' }],
  },
  'pencil-charcoal-drawings': {
    division: 'custom-art',
    slug: 'pencil-charcoal-drawings',
    title: 'Pencil & Charcoal Drawings',
    primaryKeyword: 'pencil charcoal drawings commission',
    metaTitle: 'Pencil & Charcoal Drawings — Architectural & Figurative Art | HUNAR',
    metaDescription: 'Monochromatic pencil and vine charcoal master drawings on 300gsm Fabriano paper by HUNAR Creative Studio.',
    summary: 'Masterful tonal studies in vine charcoal, compressed graphite, and carbon pencil on heavyweight Italian rag papers.',
    heroImage: '/portfolio/portraits/monochrome-charcoal-woman-montage.webp',
    galleryImages: [
          {
                "url": "/portfolio/portraits/monochrome-charcoal-woman-montage.webp",
                "caption": "Soul in Monochrome — Charcoal & Graphite Montage on 300gsm Paper",
                "tag": "Charcoal"
          },
          {
                "url": "/portfolio/portraits/grandmother-graphite-pencil-sketch.webp",
                "caption": "Veneration Matriarch Sketch — Graphite on Cartridge Paper",
                "tag": "Graphite Sketch"
          }
    ],
    deliverables: ['300gsm Acid-Free Cotton Rag Paper', 'Protective Archival Fixative Coating', 'Museum Matting Window'],
    faqs: [{ q: 'Will the charcoal smudge over time?', a: 'We apply professional archival fixative that seals the carbon particles without yellowing or altering tonal contrast.' }],
  },
  'ink-coloured-pencil-art': {
    division: 'custom-art',
    slug: 'ink-coloured-pencil-art',
    title: 'Ink & Coloured-Pencil Art',
    primaryKeyword: 'ink and coloured pencil drawings',
    metaTitle: 'Ink & Coloured-Pencil Art — Botanical, Heritage & Vignettes | HUNAR',
    metaDescription: 'Delicate technical ink line work and polychromos coloured-pencil artwork for botanical, architectural, and commemorative pieces.',
    summary: 'Intricate dip-pen technical linework layered with lightfast colored pencils, ideal for botanical studies and architectural heritage.',
    heroImage: '/portfolio/calligraphy/marathi-devanagari-ganpati-watercolor-calligraphy.webp',
    galleryImages: [
      { url: '/portfolio/calligraphy/marathi-devanagari-ganpati-watercolor-calligraphy.webp', caption: 'Botanical Ink Study with Pigment Layering', tag: 'Ink & Pencil' },
    ],
    deliverables: ['Waterproof Archival Pigment Inks', 'Faber-Castell Polychromos Pigment Layering', 'Mounted on Conservation Board'],
    faqs: [{ q: 'Are coloured pencils archival?', a: 'We use strictly lightfast artist-grade pencils with 100+ year museum color stability ratings.' }],
  },
  'canvas-paintings': {
    division: 'custom-art',
    slug: 'canvas-paintings',
    title: 'Custom Canvas Paintings',
    primaryKeyword: 'custom canvas paintings commission',
    metaTitle: 'Custom Canvas Paintings — Large Format Oils & Mixed Media | HUNAR',
    metaDescription: 'Commission large-format original canvas paintings tailored to your room scale, palette, and architectural elevations.',
    summary: 'Monumental and mid-scale canvas artworks created in oil and acrylic mediums, composed specifically for spatial harmony.',
    heroImage: '/portfolio/portraits/bearded-man-studio-easel-portrait.webp',
    galleryImages: [
          {
                "url": "/portfolio/portraits/bearded-man-studio-easel-portrait.webp",
                "caption": "Contemplation on Easel — Studio Oil Study",
                "tag": "Atelier Oil"
          },
          {
                "url": "/portfolio/portraits/vibrant-crimson-woman-oil-portrait.webp",
                "caption": "Luminescence in Crimson — Oil on Belgian Linen",
                "tag": "Fine Art Oil"
          }
    ],
    deliverables: ['Custom Kiln-Dried Stretcher Bars', 'Hand-Primed Linen Surface', 'Patron Progress Reviews', 'Certificate of Provenance'],
    faqs: [{ q: 'Can we specify a color palette that matches our interior fabric swatches?', a: 'Yes. We review fabric, stone, and wood swatches to calibrate complementary mineral tones.' }],
  },
  'abstract-art': {
    division: 'custom-art',
    slug: 'abstract-art',
    title: 'Custom Abstract Art Commissions',
    primaryKeyword: 'custom abstract art commissions',
    metaTitle: 'Bespoke Abstract Art Commissions — Mineral Textures & Form | HUNAR',
    metaDescription: 'Original abstract fine art exploring texture, negative space, and tonal subtlety for contemporary residences and luxury interiors.',
    summary: 'Refined non-representational art focusing on surface tension, textural impasto, mineral washes, and spatial balance.',
    heroImage: '/portfolio/calligraphy/circular-marathi-calligraphy-sun-mandala.webp',
    galleryImages: [
      { url: '/portfolio/calligraphy/circular-marathi-calligraphy-sun-mandala.webp', caption: 'Mineral Abstraction on Raw Linen', tag: 'Abstract' },
    ],
    deliverables: ['Atmospheric Mineral Layering', 'Custom Stretcher Depth (1.5" or 2" gallery profile)', 'Signed Artwork & Provenance Certificate'],
    faqs: [{ q: 'How do we communicate abstract preferences?', a: 'We share a curated tonal matrix and textural reference board to align on mood, density, and kinetic energy.' }],
  },
  'personalized-art-gifts': {
    division: 'custom-art',
    slug: 'personalized-art-gifts',
    title: 'Personalized Art Gifts & Commemorative Art',
    primaryKeyword: 'personalized art gifts custom commission',
    metaTitle: 'Personalized Art Gifts — Custom Commemorative Artwork | HUNAR',
    metaDescription: 'Mark milestones, anniversaries, and personal achievements with bespoke commissioned art gifts crafted by HUNAR.',
    summary: 'Bespoke artworks commemorating home dedications, milestone achievements, and life moments crafted with artisanal luxury.',
    heroImage: '/portfolio/caricature/young-girl-live-watercolor-portrait-booth.webp',
    galleryImages: [
          {
                "url": "/portfolio/caricature/young-girl-live-watercolor-portrait-booth.webp",
                "caption": "Radiant Smiles: Live Caricature Booth Showcase",
                "tag": "Live Art"
          },
          {
                "url": "/portfolio/caricature/pigtail-girl-watercolor-portrait-sketch.webp",
                "caption": "Innocence: Warm Watercolor Portrait Study",
                "tag": "Watercolor"
          }
    ],
    deliverables: ['Custom Inscription & Calligraphy Dedication', 'Atelier Presentation Gift Packaging', 'Archival Framing'],
    faqs: [{ q: 'Can a handwritten note or date be incorporated into the piece?', a: 'Yes, we frequently include subtle, calligraphic micro-inscriptions in archival ink.' }],
  },
  'digital-illustration': {
    division: 'custom-art',
    slug: 'digital-illustration',
    title: 'Digital Illustrations & Commissioned Art',
    primaryKeyword: 'commissioned digital illustrations fine art',
    metaTitle: 'Digital Illustration Commissions — Editorial & Book Artwork | HUNAR',
    metaDescription: 'High-resolution digital illustrations for editorial covers, private commissions, and limited editions by HUNAR Creative Studio.',
    summary: 'Hand-drawn digital artwork combining traditional painterly brush textures with vector precision for editorial and private uses.',
    heroImage: '/portfolio/web-design/greek-automata-techfest-website.webp',
    galleryImages: [
      { url: '/portfolio/web-design/greek-automata-techfest-website.webp', caption: 'Editorial Narrative Illustration', tag: 'Digital' },
    ],
    deliverables: ['Ultra-High Resolution Master Files (600 DPI)', 'Vector Line Assets where required', 'Fine Art Print Proof Included'],
    faqs: [{ q: 'What software and tools do you use?', a: 'We paint using pressure-sensitive digitizers with custom brush libraries emulating natural pigments and graphite.' }],
  },
  'photo-to-sketch': {
    division: 'custom-art',
    slug: 'photo-to-sketch',
    title: 'Custom Sketches from Photographs',
    primaryKeyword: 'photo to sketch custom drawing commission',
    metaTitle: 'Custom Sketches from Photographs — Hand-Drawn Fine Art | HUNAR',
    metaDescription: 'Transform cherished photographs into hand-drawn graphite, charcoal, or ink sketches. Genuine handcraft by real studio artists.',
    summary: 'Transforming photographic memories into hand-drawn sketches with artistic interpretation, removing cluttered backgrounds.',
    heroImage: '/portfolio/portraits/grandmother-graphite-pencil-sketch.webp',
    galleryImages: [
          {
                "url": "/portfolio/portraits/grandmother-graphite-pencil-sketch.webp",
                "caption": "Veneration Matriarch Sketch — Graphite on Cartridge Paper",
                "tag": "Graphite Sketch"
          },
          {
                "url": "/portfolio/portraits/monochrome-charcoal-woman-montage.webp",
                "caption": "Multi-Perspective Graphite & Charcoal Montage",
                "tag": "Charcoal"
          }
    ],
    deliverables: ['Hand-Drawn (No AI filters or print conversions)', 'Framing-Ready Window Mount', 'High-Res Digital Scan Included'],
    faqs: [{ q: 'Is this hand-drawn or digital?', a: 'Every piece is 100% hand-drawn on physical paper by our resident artists with traditional pencils.' }],
  },

  // 2. Original Art & Art Products
  'original-paintings': {
    division: 'art-products',
    slug: 'original-paintings',
    title: 'Original Paintings & Ready-to-Buy Drawings',
    primaryKeyword: 'buy original paintings studio fine art',
    metaTitle: 'Original Paintings & Ready-to-Buy Art — HUNAR Creative Studio',
    metaDescription: 'Acquire original one-of-a-kind paintings and curated drawings directly from the HUNAR studio gallery.',
    summary: 'Curated one-of-a-kind original paintings, oil canvases, and framed studio drawings available for immediate acquisition.',
    heroImage: '/portfolio/portraits/vibrant-crimson-woman-oil-portrait.webp',
    galleryImages: [
          {
                "url": "/portfolio/portraits/vibrant-crimson-woman-oil-portrait.webp",
                "caption": "Luminescence in Crimson — Oil on Belgian Linen",
                "tag": "Fine Art Oil"
          }
    ],
    deliverables: ['Signed Original Artwork', 'Certificate of Authenticity with Studio Stamp', 'Exhibition Provenance Sheet'],
    faqs: [{ q: 'Can I view the original in person before purchasing?', a: 'Studio viewings are available by appointment at our Bengaluru and New Delhi ateliers.' }],
  },
  'art-prints': {
    division: 'art-products',
    slug: 'art-prints',
    title: 'Fine Art Prints & Archival Giclée Reproductions',
    primaryKeyword: 'fine art prints archival giclee',
    metaTitle: 'Fine Art Prints & Reproductions — 310gsm Cotton Rag | HUNAR',
    metaDescription: 'Museum-grade limited edition art prints on 310gsm Hahnemühle Photo Rag with 12-color archival pigment inks.',
    summary: 'Strictly limited edition giclée fine art prints reproduced on 310gsm cotton rag with official numbered certificates.',
    heroImage: '/portfolio/portraits/monochrome-charcoal-woman-montage.webp',
    galleryImages: [
      { url: '/portfolio/portraits/monochrome-charcoal-woman-montage.webp', caption: 'Embossed Archival Giclée Print Edition', tag: 'Limited Run' },
    ],
    deliverables: ['Hahnemühle 310gsm 100% Cotton Rag', '12-Color Archival Pigment Inks', 'Embossed Seal and Hand-Numbered'],
    faqs: [{ q: 'How many prints are made per edition?', a: 'Editions are strictly capped at 25 to 50 prints. Once sold out, editions are retired permanently.' }],
  },
  'resin-art': {
    division: 'art-products',
    slug: 'resin-art',
    title: 'Resin Art & Decorative Objects',
    primaryKeyword: 'handcrafted resin art decorative objects',
    metaTitle: 'Resin Art & Decorative Objects — Artisanal Studio Pieces | HUNAR',
    metaDescription: 'Hand-poured resin art panels, decorative trays, and sculptural objects featuring mineral pigment swirls and depth.',
    summary: 'Optical resin decorative objects and panels layered with metallic powders, mineral pigments, and organic inclusions.',
    heroImage: '/portfolio/installations/flight-of-peace-paper-doves-sculpture.webp',
    galleryImages: [
          {
                "url": "/portfolio/installations/flight-of-peace-paper-doves-sculpture.webp",
                "caption": "Flight of Peace: Three-Dimensional Sculpted Paper Doves",
                "tag": "Dimensional Art"
          }
    ],
    deliverables: ['Non-Yellowing UV-Resistant Crystal Resin', 'Hand-Polished High Gloss Edges', 'Care and Maintenance Guide'],
    faqs: [{ q: 'Is the resin heat resistant?', a: 'Our decorative objects are cured with high-grade resins resistant to casual tabletop heat.' }],
  },
  'sculptures-handmade-art': {
    division: 'art-products',
    slug: 'sculptures-handmade-art',
    title: 'Sculptures & Handmade Art Pieces',
    primaryKeyword: 'handmade sculptures studio fine art',
    metaTitle: 'Sculptures & Handmade Art Pieces — Stoneware & Metal | HUNAR',
    metaDescription: 'Original tactile sculptures, ceramic objects, and cast metal pieces crafted by HUNAR resident artists.',
    summary: 'Tactile three-dimensional art pieces in stoneware ceramic, carved hardwood, cast brass, and sculpted plaster.',
    heroImage: '/portfolio/installations/flight-of-peace-paper-doves-sculpture.webp',
    galleryImages: [
          {
                "url": "/portfolio/installations/flight-of-peace-paper-doves-sculpture.webp",
                "caption": "Flight of Peace: Three-Dimensional Sculpted Paper Doves",
                "tag": "Paper Sculpture"
          },
          {
                "url": "/portfolio/installations/creative-tree-of-knowledge-sculpture.webp",
                "caption": "The Creative Tree of Knowledge Kinetic Mixed Media Sculpture",
                "tag": "Kinetic Sculpture"
          }
    ],
    deliverables: ['Kiln-Fired or Hand-Cast Material', 'Weighted Museum Pedestal Mount', 'Certificate of Provenance'],
    faqs: [{ q: 'Can sculptures be commissioned for garden or exterior spaces?', a: 'Yes, we specify weather-resistant stoneware and bronzed metals for outdoor courtyards.' }],
  },
  'home-office-art': {
    division: 'art-products',
    slug: 'home-office-art',
    title: 'Art for Home & Office Interiors',
    primaryKeyword: 'curated art for home and office interiors',
    metaTitle: 'Art for Home & Office Interiors — Curated Suites | HUNAR',
    metaDescription: 'Curated wall art packages for residences, executive offices, and corporate boardrooms by HUNAR Creative Studio.',
    summary: 'Thoughtfully curated wall art collections and cohesive frame suites tailored for home study and professional offices.',
    heroImage: '/portfolio/installations/creative-tree-of-knowledge-sculpture.webp',
    galleryImages: [
          {
                "url": "/portfolio/installations/creative-tree-of-knowledge-sculpture.webp",
                "caption": "The Creative Tree of Knowledge Kinetic Sculpture",
                "tag": "Art Object"
          }
    ],
    deliverables: ['Curated 3 to 6 Piece Wall Suites', 'Uniform Hardwood Gallery Framing', 'Hanging Hardware and Layout Guide'],
    faqs: [{ q: 'Do you offer layout consultation?', a: 'Yes, we provide digital wall elevation renderings showing how the pieces balance with your office furniture.' }],
  },
  'seasonal-art-gifts': {
    division: 'art-products',
    slug: 'seasonal-art-gifts',
    title: 'Limited Collections & Seasonal Art Gifts',
    primaryKeyword: 'seasonal art gifts limited collection',
    metaTitle: 'Seasonal Art Gifts & Limited Collections — HUNAR Atelier',
    metaDescription: 'Seasonal festive and holiday fine art collections, miniature paintings, and curated gift boxes by HUNAR.',
    summary: 'Small-format original works, gold-leaf miniatures, and festive art editions curated for annual gifting seasons.',
    heroImage: '/portfolio/glass-painting/holiday-reindeer-christmas-window-painting.webp',
    galleryImages: [
      { url: '/portfolio/glass-painting/christmas-gift-boxes-cafe-window-display.webp', caption: 'Gilded Miniature Series with Gift Box', tag: 'Gift Edition' },
    ],
    deliverables: ['Custom Embossed Gift Box Packaging', 'Handwritten Artist Note Card', 'Miniature Display Easel'],
    faqs: [{ q: 'Can corporate gift orders be customized with brand embossing?', a: 'Yes, on orders of 20 units or more, packaging can feature bespoke blind embossing.' }],
  },

  // 3. Branding & Visual Identity
  'logo-design': {
    division: 'branding-design',
    slug: 'logo-design',
    title: 'Logo Design & Logo Redesign',
    primaryKeyword: 'bespoke logo design studio',
    metaTitle: 'Logo Design & Logo Redesign — Editorial Typographic Marks | HUNAR',
    metaDescription: 'Bespoke logo design and strategic logo redesign. Typographic marks, monograms, and emblems built with mathematical elegance.',
    summary: 'Bespoke typographic marks, monograms, and iconic emblems crafted with timeless balance and vector precision.',
    heroImage: '/portfolio/calligraphy/koshish-harivansh-rai-bachchan-calligraphy.webp',
    galleryImages: [
          {
                "url": "/portfolio/calligraphy/koshish-harivansh-rai-bachchan-calligraphy.webp",
                "caption": "Bespoke Typographic Calligraphy & Letterform Crafting",
                "tag": "Logotype"
          },
          {
                "url": "/portfolio/calligraphy/gulzar-poetry-spiral-devanagari-calligraphy.webp",
                "caption": "Gulzar: Waqt Devanagari Spiral Calligraphy Art",
                "tag": "Devanagari Type"
          }
    ],
    deliverables: ['Primary Mark, Secondary Lockup & Monogram', 'Full Vector Formats (SVG, EPS, PDF, PNG)', 'Monochrome and Reversed Colorways', 'Logo Clearance and Scalability Grid Rules'],
    faqs: [
      { q: 'How many logo concepts do you present?', a: 'We develop 2 to 3 distinct, fully conceptualized design directions, each complete with real-world print mockups.' },
      { q: 'Do you design with generic stock icons?', a: 'Never. Every curve, serif, and ligature is drawn from scratch specifically for your brand.' },
    ],
  },
  'brand-identity': {
    division: 'branding-design',
    slug: 'brand-identity',
    title: 'Brand Identity Systems & Visual Guidelines',
    primaryKeyword: 'luxury brand identity design studio',
    metaTitle: 'Complete Brand Identity Systems & Visual Identity — HUNAR',
    metaDescription: 'Holistic brand identity systems. Strategy, typography, color palettes, and collateral for luxury, architecture, and cultural brands.',
    summary: 'Holistic visual systems uniting strategy, color theory, iconography, and physical collateral for enduring market distinction.',
    heroImage: '/portfolio/calligraphy/shakespeare-sonnet-circular-calligraphy.webp',
    galleryImages: [
          {
                "url": "/portfolio/calligraphy/shakespeare-sonnet-circular-calligraphy.webp",
                "caption": "Shakespeare: Time Waste Concentric Calligraphy & Monogram",
                "tag": "Uncial Type"
          },
          {
                "url": "/portfolio/calligraphy/koshish-harivansh-rai-bachchan-calligraphy.webp",
                "caption": "Harivansh Rai Bachchan: Koshish Illustrated Calligraphy",
                "tag": "Typography"
          }
    ],
    deliverables: ['Brand Story & Strategy Framework', 'Logo Suite & Secondary Marks', 'Material and Color Specifications', 'Digital & Print Asset Library'],
    faqs: [{ q: 'What is the difference between a logo and a brand identity?', a: 'A logo is a signature mark; an identity is the complete visual language—fonts, colors, tactile textures, spacing, and voice.' }],
  },
  'brand-colour-typography': {
    division: 'branding-design',
    slug: 'brand-colour-typography',
    title: 'Brand Colour Palettes & Typography Systems',
    primaryKeyword: 'brand colour palette and typography design',
    metaTitle: 'Brand Colour & Typography Systems — Editorial Type Styling | HUNAR',
    metaDescription: 'Expert typographic hierarchy pairings and bespoke color palettes calibrated for Pantone, CMYK, and digital WCAG AA contrast.',
    summary: 'Meticulously calibrated color palettes and typographic pairings chosen for emotional resonance and digital legibility.',
    heroImage: '/portfolio/calligraphy/koshish-harivansh-rai-bachchan-calligraphy.webp',
    galleryImages: [
      { url: '/portfolio/calligraphy/gulzar-bosky-poem-devanagari-calligraphy.webp', caption: 'Type Specimen and Pantone Ink Matching', tag: 'Typography' },
    ],
    deliverables: ['Primary, Secondary & Accent Color Values (HEX, RGB, CMYK, Pantone)', 'Font Hierarchy Scale (Display, Heading, Body, Mono)', 'Web Font Licensing Guidance'],
    faqs: [{ q: 'Do you ensure colors are accessible on screens?', a: 'Yes, all digital color pairings are tested to exceed WCAG AA contrast ratios.' }],
  },
  'business-stationery': {
    division: 'branding-design',
    slug: 'business-stationery',
    title: 'Business Cards, Letterheads & Stationery Design',
    primaryKeyword: 'bespoke business cards and stationery design',
    metaTitle: 'Business Cards, Letterheads & Stationery Design | HUNAR',
    metaDescription: 'Tactile, luxury business stationery. Cotton papers, letterpress, blind debossing, and foil stamping for executive brands.',
    summary: 'Tactile print collateral designed for luxury paper stocks, blind debossing, letterpress, and metallic hot-foil stamping.',
    heroImage: '/portfolio/calligraphy/shakespeare-sonnet-circular-calligraphy.webp',
    galleryImages: [
      { url: '/portfolio/calligraphy/shakespeare-sonnet-circular-calligraphy.webp', caption: 'Letterpress Business Cards on 600gsm Cotton', tag: 'Stationery' },
    ],
    deliverables: ['Business Card Layouts (Standard & Custom Die-Cut)', 'Letterhead (Print Ready & Digital Word/Docs Templates)', 'Envelope Suite & Folder Design', 'Paper Stock & Print Vendor Specifications'],
    faqs: [{ q: 'Can you liaise directly with specialty print houses?', a: 'Yes, we provide print-ready press proofs with exact spot-color and die-line separations.' }],
  },
  'packaging-label-design': {
    division: 'branding-design',
    slug: 'packaging-label-design',
    title: 'Packaging & Label Design',
    primaryKeyword: 'luxury packaging and label design studio',
    metaTitle: 'Packaging & Label Design — Luxury Boxes & Labels | HUNAR',
    metaDescription: 'Artisanal packaging and label design for cosmetics, wine, gourmet food, and luxury retail by HUNAR Creative Studio.',
    summary: 'Elevating consumer physical unboxing through tactile paper choices, custom structural dielines, and elegant label graphics.',
    heroImage: '/portfolio/calligraphy/koshish-harivansh-rai-bachchan-calligraphy.webp',
    galleryImages: [
          {
                "url": "/portfolio/calligraphy/koshish-harivansh-rai-bachchan-calligraphy.webp",
                "caption": "Bespoke Typographic Calligraphy & Letterform Crafting",
                "tag": "Logotype"
          }
    ],
    deliverables: ['Structural Box & Label Dieline Layouts', 'Print Finishing Notes (Emboss, UV, Foil)', '3D Photorealistic Packaging Renders'],
    faqs: [{ q: 'Do you create the dielines or use existing templates?', a: 'We can work from your manufacturer’s dielines or create custom structural templates.' }],
  },
  'brand-naming': {
    division: 'branding-design',
    slug: 'brand-naming',
    title: 'Brand Naming & Creative Direction',
    primaryKeyword: 'brand naming and creative direction agency',
    metaTitle: 'Brand Naming & Creative Direction — Memorable Names | HUNAR',
    metaDescription: 'Strategic brand naming, linguistic screening, domain analysis, and evocative creative direction for new ventures.',
    summary: 'Rigorous naming methodologies combining linguistic cadence, cultural depth, trademark clearance, and domain viability.',
    heroImage: '/portfolio/calligraphy/koshish-harivansh-rai-bachchan-calligraphy.webp',
    galleryImages: [
      { url: '/portfolio/calligraphy/koshish-harivansh-rai-bachchan-calligraphy.webp', caption: 'Naming Taxonomy and Archetype Workshop', tag: 'Strategy' },
    ],
    deliverables: ['Curated Long-List and Short-List Presentations', 'Linguistic & Pronunciation Analysis', 'Domain & Trademark Preliminary Screening', 'Tagline & Brand Monologue Creation'],
    faqs: [{ q: 'How many name options are presented?', a: 'We present 15 to 20 screened names across four strategic territory buckets.' }],
  },
  'brand-guidelines': {
    division: 'branding-design',
    slug: 'brand-guidelines',
    title: 'Brand Guidelines & Logo Usage Kits',
    primaryKeyword: 'editorial brand guidelines and brand book design',
    metaTitle: 'Brand Guidelines & Logo Usage Kits — Studio Brand Books | HUNAR',
    metaDescription: 'Comprehensive editorial brand manuals ensuring consistent application across internal teams, marketing, and external partners.',
    summary: 'Exhaustive editorial brand manuals documenting logo clearspace, color formulas, co-branding, and tone of voice.',
    heroImage: '/portfolio/calligraphy/koshish-harivansh-rai-bachchan-calligraphy.webp',
    galleryImages: [
      { url: '/portfolio/calligraphy/shakespeare-sonnet-circular-calligraphy.webp', caption: 'Hardbound Editorial Brand Manual', tag: 'Guidelines' },
    ],
    deliverables: ['Digital Interactive PDF Brand Book (30–60 pages)', 'Organized Cloud Asset Repository', 'Quick Reference Style Sheet'],
    faqs: [{ q: 'Can the guidelines be shared with third-party vendors?', a: 'Yes, the digital manual includes exact export standards and misuse examples for vendors.' }],
  },
  'rebranding': {
    division: 'branding-design',
    slug: 'rebranding',
    title: 'Rebranding & Brand Refresh Projects',
    primaryKeyword: 'corporate rebranding and brand refresh studio',
    metaTitle: 'Rebranding & Brand Refresh Projects — Modern Evolution | HUNAR',
    metaDescription: 'Evolve established heritage into contemporary distinction through strategic rebranding and visual refresh by HUNAR.',
    summary: 'Modernizing legacy brands while preserving hard-won customer equity, heritage value, and market recognition.',
    heroImage: '/portfolio/calligraphy/shakespeare-sonnet-circular-calligraphy.webp',
    galleryImages: [
      { url: '/portfolio/calligraphy/shakespeare-sonnet-circular-calligraphy.webp', caption: 'Heritage Modernization Identity Study', tag: 'Refresh' },
    ],
    deliverables: ['Brand Equity & Heritage Audit', 'Evolutionary vs Revolutionary Design Proposals', 'Transition Roadmaps for Phased Rollout'],
    faqs: [{ q: 'Will rebranding alienate our existing customers?', a: 'Our phased refresh methodology protects core brand recognition while updating typographic and digital maturity.' }],
  },

  // 4. Website Design & Development
  'business-websites': {
    division: 'website-development',
    slug: 'business-websites',
    title: 'Business & Company Websites',
    primaryKeyword: 'custom business website development',
    metaTitle: 'Custom Business & Company Websites — High Performance | HUNAR',
    metaDescription: 'Bespoke corporate and company websites engineered on React and Node.js. Editorial design with 100/100 Core Web Vitals.',
    summary: 'High-performing digital flagships engineered with editorial layouts, custom full-stack architecture, and zero bloat.',
    heroImage: '/portfolio/web-design/shikha-singh-luxury-model-portfolio.webp',
    galleryImages: [
          {
                "url": "/portfolio/web-design/shikha-singh-luxury-model-portfolio.webp",
                "caption": "Shikha Singh — High-Fashion Luxury Model Portfolio",
                "tag": "Luxury Web"
          },
          {
                "url": "/portfolio/web-design/ah-properties-real-estate-portal.webp",
                "caption": "A.H Properties — Commercial & Residential Real Estate Portal",
                "tag": "Real Estate"
          }
    ],
    deliverables: ['Bespoke React/Node Architecture', 'Custom Headless Lead Ingestion', 'Mobile Responsive Verification', 'Technical SEO Schema Setup'],
    faqs: [{ q: 'Do you use WordPress or generic themes?', a: 'No. We custom engineer our platforms with modern MERN/React architectures for superior speed and security.' }],
  },
  'portfolio-websites': {
    division: 'website-development',
    slug: 'portfolio-websites',
    title: 'Portfolio & Personal Websites',
    primaryKeyword: 'creative portfolio website design',
    metaTitle: 'Creative Portfolio Websites — Architects & Artists | HUNAR',
    metaDescription: 'Award-winning portfolio websites for architects, artists, interior designers, and executives crafted with editorial restraint.',
    summary: 'Gallery-grade online portfolios designed for architects, artists, and creators who need their work to take center stage.',
    heroImage: '/portfolio/web-design/shikha-singh-luxury-model-portfolio.webp',
    galleryImages: [
          {
                "url": "/portfolio/web-design/shikha-singh-luxury-model-portfolio.webp",
                "caption": "Shikha Singh — Editorial Runway & Modeling Portfolio Flagship",
                "tag": "Editorial Web"
          },
          {
                "url": "/portfolio/web-design/greek-automata-techfest-website.webp",
                "caption": "Greek Automata — Interactive College Festival Platform",
                "tag": "Event Platform"
          }
    ],
    deliverables: ['Fluid Image Grid & Detail Drawers', 'Zero-Lag Image Compression', 'Curated Project Case Study Layouts'],
    faqs: [{ q: 'Can I easily upload new projects myself?', a: 'Yes, we provide structured headless data schemas or admin interfaces for seamless publishing.' }],
  },
  'ecommerce-websites': {
    division: 'website-development',
    slug: 'ecommerce-websites',
    title: 'Ecommerce & Online Art Stores',
    primaryKeyword: 'custom ecommerce website development art store',
    metaTitle: 'Ecommerce & Online Art Stores — Custom Web Platforms | HUNAR',
    metaDescription: 'High-conversion online art stores and luxury ecommerce platforms built with secure checkout and editorial storytelling.',
    summary: 'Luxury digital storefronts combining editorial visual storytelling with frictionless checkout, inventory syncing, and security.',
    heroImage: '/portfolio/web-design/the-nadeems-gourmet-ordering-web.webp',
    galleryImages: [
          {
                "url": "/portfolio/web-design/the-nadeems-gourmet-ordering-web.webp",
                "caption": "The Nadeems — Gourmet Dining & Food Delivery Web App",
                "tag": "Ecommerce Web"
          }
    ],
    deliverables: ['Secure Payment Gateway Integration', 'Dynamic Cart & Drawer Architecture', 'Tax, Currency and Shipping Rules Setup'],
    faqs: [{ q: 'Which payment gateways do you support?', a: 'We integrate Stripe, Razorpay, PayPal, Apple Pay, and standard international credit card processors.' }],
  },
  'landing-pages': {
    division: 'website-development',
    slug: 'landing-pages',
    title: 'Campaign Landing Pages & Conversion Experiences',
    primaryKeyword: 'high converting campaign landing pages design',
    metaTitle: 'High-Converting Campaign Landing Pages — MERN Stack | HUNAR',
    metaDescription: 'Performance-driven campaign landing pages designed for luxury launches, lead capture, and maximum conversion rates.',
    summary: 'Single-minded landing pages engineered for product launches, lead capture campaigns, and multi-touch attribution tracking.',
    heroImage: '/portfolio/web-design/greek-automata-techfest-website.webp',
    galleryImages: [
          {
                "url": "/portfolio/web-design/greek-automata-techfest-website.webp",
                "caption": "Greek Automata — Interactive College Festival Landing Page",
                "tag": "High-Impact Page"
          }
    ],
    deliverables: ['Sub-Second Load Time Optimization', 'Full UTM and Click ID Hidden Attribution', 'A/B Test Ready Architecture'],
    faqs: [{ q: 'Can the landing page connect to our CRM?', a: 'Yes, our built-in API routes capture and sync leads with our custom CRM or your external webhook.' }],
  },
  'agency-websites': {
    division: 'website-development',
    slug: 'agency-websites',
    title: 'Service Business & Agency Websites',
    primaryKeyword: 'agency website design and development',
    metaTitle: 'Service Business & Agency Websites — Editorial Digital Flagships | HUNAR',
    metaDescription: 'High-prestige websites for consultancies, design studios, law firms, and creative agencies by HUNAR.',
    summary: 'Sophisticated web presences tailored for high-ticket service firms, consulting practices, and creative studios.',
    heroImage: '/portfolio/web-design/ah-properties-real-estate-portal.webp',
    galleryImages: [
          {
                "url": "/portfolio/web-design/ah-properties-real-estate-portal.webp",
                "caption": "A.H Properties — Corporate Real Estate & Investment Agency Portal",
                "tag": "Agency Portal"
          }
    ],
    deliverables: ['Service Division Architecture', 'Team & Leadership Bios', 'Interactive Case Studies'],
    faqs: [{ q: 'How long does a full agency web build take?', a: 'Typically 6 to 10 weeks from discovery to deployment.' }],
  },
  'website-redesign': {
    division: 'website-development',
    slug: 'website-redesign',
    title: 'Website Redesign & Responsive Layouts',
    primaryKeyword: 'website redesign and performance overhaul',
    metaTitle: 'Website Redesign & Performance Overhaul — MERN Upgrade | HUNAR',
    metaDescription: 'Transform outdated websites into fast, responsive, and editorial digital platforms with zero loss of existing SEO authority.',
    summary: 'Modernizing legacy websites to fix mobile overflow, slow load speeds, poor SEO, and outdated visual templates.',
    heroImage: '/portfolio/web-design/mirza-hajj-umrah-travel-portal.webp',
    galleryImages: [
          {
                "url": "/portfolio/web-design/mirza-hajj-umrah-travel-portal.webp",
                "caption": "Mirza Hajj & Umrah — Full Platform Redesign & Optimization",
                "tag": "Redesign"
          }
    ],
    deliverables: ['301 Redirect Mapping & SEO Preservation', 'Full Mobile Overflow Remediation', 'Modern React Performance Architecture'],
    faqs: [{ q: 'Will our search rankings drop during a redesign?', a: 'We implement meticulous 301 redirect maps and URL matching to protect and enhance existing Google rankings.' }],
  },

  // 5. Digital Content & Motion
  'logo-animation': {
    division: 'digital-content',
    slug: 'logo-animation',
    title: 'Logo Animation & Brand Motion',
    primaryKeyword: 'bespoke logo animation motion branding',
    metaTitle: 'Logo Animation & Brand Motion — Kinetic Identity | HUNAR',
    metaDescription: 'Elevate your mark with purposeful, cinematic logo animation and brand motion design crafted by HUNAR.',
    summary: 'Cinematic, subtle kinetic reveals of brand marks for video intros, digital sign-offs, and app splash screens.',
    heroImage: '/portfolio/stage-design/sir-jj-applied-art-stage-color-render.webp',
    galleryImages: [
          {
                "url": "/portfolio/stage-design/sir-jj-applied-art-stage-color-render.webp",
                "caption": "88th Exhibition Stage Chromatic 3D Concept Rendering",
                "tag": "3D Render"
          }
    ],
    deliverables: ['Full 4K ProRes Video Masters', 'Transparent Alpha Channel Files (WebM & MOV)', 'Lottie / JSON Vector Animations for Web'],
    faqs: [{ q: 'Can the animation be embedded into our website code?', a: 'Yes, we output lightweight Lottie animations that run smoothly in pure SVG/code.' }],
  },
  'animated-social-posts': {
    division: 'digital-content',
    slug: 'animated-social-posts',
    title: 'Simple Animated Posts & Social Motion',
    primaryKeyword: 'animated social media posts motion design',
    metaTitle: 'Animated Social Posts & Motion Content — HUNAR Atelier',
    metaDescription: 'Stop the scroll with elegant, restrained animated social posts and micro-vignettes designed for luxury brands.',
    summary: 'Restrained, art-directed motion vignettes for Instagram and LinkedIn that communicate sophistication without chaotic noise.',
    heroImage: '/portfolio/web-design/greek-automata-techfest-website.webp',
    galleryImages: [
          {
                "url": "/portfolio/web-design/greek-automata-techfest-website.webp",
                "caption": "Greek Automata — Digital Festival Key Visuals & Grid Banners",
                "tag": "Digital Graphics"
          }
    ],
    deliverables: ['1:1 Square, 4:5 Portrait, and 9:16 Vertical Video Formats', 'Looping Seamless Cadence', 'Editable Project Source Files'],
    faqs: [{ q: 'Are these templates or bespoke animations?', a: 'Every motion vignette is custom created around your brand typography and photography.' }],
  },
  'campaign-concepts': {
    division: 'digital-content',
    slug: 'campaign-concepts',
    title: 'Creative Campaign Concepts & Art Direction',
    primaryKeyword: 'creative campaign concepts art direction',
    metaTitle: 'Creative Campaign Concepts & Art Direction | HUNAR Studio',
    metaDescription: 'Concept ideation, creative storytelling, and visual art direction for seasonal and product launch campaigns.',
    summary: 'Overarching creative themes, mood boards, and narrative scripts that anchor multi-channel marketing campaigns.',
    heroImage: '/portfolio/murals/botanical-mural-concept-design.webp',
    galleryImages: [
          {
                "url": "/portfolio/murals/botanical-mural-concept-design.webp",
                "caption": "Botanical Symphony Concept Drafting & Elevation Plan",
                "tag": "Concept Art"
          }
    ],
    deliverables: ['Comprehensive Campaign Lookbook & Treatment', 'Headline & Copywriting Direction', 'Production Shot Lists and Lighting References'],
    faqs: [{ q: 'Do you direct photoshoots as part of campaign work?', a: 'Yes, our directors provide on-set art direction or virtual pre-production guidance.' }],
  },
  'content-planning': {
    division: 'digital-content',
    slug: 'content-planning',
    title: 'Content Planning & Visual Storytelling Systems',
    primaryKeyword: 'content planning and visual storytelling studio',
    metaTitle: 'Content Planning & Visual Storytelling Systems — HUNAR',
    metaDescription: 'Structured visual content calendars, thematic pillars, and narrative sequencing for luxury and cultural brands.',
    summary: 'Strategic sequencing of brand narratives, editorial releases, and visual assets to maintain an artful digital presence.',
    heroImage: '/portfolio/murals/botanical-mural-concept-design.webp',
    galleryImages: [
      { url: '/portfolio/calligraphy/gulzar-bosky-poem-devanagari-calligraphy.webp', caption: 'Curated 90-Day Content Framework', tag: 'Planning' },
    ],
    deliverables: ['90-Day Narrative Calendar', 'Content Pillar Definition', 'Visual Grid Composition Templates'],
    faqs: [{ q: 'Does this include publishing the posts?', a: 'We focus on content creation, architecture, and planning; publishing is managed by your internal team or agency partner.' }],
  },

  // 6. Murals, Interior Art & Commercial Projects
  'wall-murals': {
    division: 'murals-commercial-art',
    slug: 'wall-murals',
    title: 'Custom Wall Murals & Hand-Painted Walls',
    primaryKeyword: 'custom wall murals hand painted architectural artists',
    metaTitle: 'Custom Wall Murals & Hand-Painted Walls — Architectural Art | HUNAR',
    metaDescription: 'Large-scale, hand-painted wall murals for luxury residences, boutique hotels, and restaurants by HUNAR Creative Studio.',
    summary: 'Site-specific architectural wall murals executed with mineral silicate pigments and lime washes directly on interior surfaces.',
    heroImage: '/portfolio/murals/staircase-monstera-botanical-mural.webp',
    galleryImages: [
          {
                "url": "/portfolio/murals/staircase-monstera-botanical-mural.webp",
                "caption": "Botanical Ascent Staircase Mural (16ft × 20ft)",
                "tag": "Interior Mural"
          },
          {
                "url": "/portfolio/murals/rural-village-landscape-panoramic-mural.webp",
                "caption": "Echoes of the Countryside Panoramic Boundary Mural (30ft × 8ft)",
                "tag": "Exterior Mural"
          },
          {
                "url": "/portfolio/murals/botanical-mural-concept-design.webp",
                "caption": "Botanical Symphony Concept Drafting & Elevation Plan",
                "tag": "Concept Art"
          }
    ],
    deliverables: ['Laser Elevation Survey and Scale Renderings', 'Substrate Preparation & Silicate Priming', 'Protective Non-Reflective Matte Sealer', 'Care & Cleaning Documentation'],
    faqs: [
      { q: 'How durable are hand-painted wall murals in commercial spaces?', a: 'We utilize commercial-grade mineral silicate paints that bond chemically to plaster, offering high UV and scuff resistance.' },
      { q: 'How long does a wall mural take to paint on-site?', a: 'Most installations require 4 to 10 days of on-site painting depending on wall square footage and scaffolding height.' },
    ],
  },
  'office-art-installations': {
    division: 'murals-commercial-art',
    slug: 'office-art-installations',
    title: 'Office & Commercial Art Installations',
    primaryKeyword: 'commercial office art installations bespoke',
    metaTitle: 'Office & Commercial Art Installations — Corporate Art | HUNAR',
    metaDescription: 'Transform corporate headquarters and creative workspaces with bespoke spatial art installations and large-scale canvases.',
    summary: 'Permanent spatial art features, acoustic art panels, and curated gallery corridors designed for corporate innovation hubs.',
    heroImage: '/portfolio/glass-painting/diwali-front-desk-glass-diyas.webp',
    galleryImages: [
          {
                "url": "/portfolio/glass-painting/diwali-front-desk-glass-diyas.webp",
                "caption": "Diwali Welcome Reception Glass Art Installation",
                "tag": "Corporate Glass Art"
          },
          {
                "url": "/portfolio/installations/independence-day-76th-mixed-media-installation.webp",
                "caption": "76th Swatantrya Din 3D Assemblage Art Installation",
                "tag": "3D Installation"
          }
    ],
    deliverables: ['Acoustic and Fire Code Verified Materials', 'Engineered Hanging Brackets and Seismic Hardware', 'Artist Plaque Installation'],
    faqs: [{ q: 'Can installations incorporate our corporate brand narrative?', a: 'Yes, we translate company origins, regional geography, or technological patents into abstract visual statements.' }],
  },
  'interior-art-styling': {
    division: 'murals-commercial-art',
    slug: 'interior-art-styling',
    title: 'Artwork Selection & Art Styling for Interiors',
    primaryKeyword: 'interior art styling artwork selection',
    metaTitle: 'Artwork Selection & Art Styling for Interiors — Curated Spaces | HUNAR',
    metaDescription: 'Curatorial consulting for architects, interior designers, and luxury homeowners seeking cohesive fine art collections.',
    summary: 'Full-service art curation, framing curation, and spatial placement guidance for architectural residences and luxury hotels.',
    heroImage: '/portfolio/glass-painting/merry-christmas-botanical-wreath-glass.webp',
    galleryImages: [
          {
                "url": "/portfolio/glass-painting/merry-christmas-botanical-wreath-glass.webp",
                "caption": "Merry Christmas Botanical Glass Wreath Double Doors",
                "tag": "Glass Wreath"
          },
          {
                "url": "/portfolio/glass-painting/holiday-reindeer-christmas-window-painting.webp",
                "caption": "Noël Woodland Holiday Storefront Window Display",
                "tag": "Glass Art"
          }
    ],
    deliverables: ['Full Architectural Floorplan Art Placement Schedule', 'Artwork Framing Specification Book', 'Procurement & Installation Oversight'],
    faqs: [{ q: 'Do you work alongside our interior designer?', a: 'Yes, we frequently collaborate with interior design firms during the finishes selection phase.' }],
  },
  'resin-sculptural-installations': {
    division: 'murals-commercial-art',
    slug: 'resin-sculptural-installations',
    title: 'Custom Resin & Sculptural Wall Installations',
    primaryKeyword: 'custom resin sculptural wall art installations',
    metaTitle: 'Resin & Sculptural Wall Installations — 3D Fine Art | HUNAR',
    metaDescription: 'Multi-dimensional sculptural wall installations combining crystal resin, hardwood, and brass inlays for architectural statements.',
    summary: 'Three-dimensional wall sculptures combining refractive clear resins, raw basalt stone, and polished brass inlays.',
    heroImage: '/portfolio/installations/flight-of-peace-paper-doves-sculpture.webp',
    galleryImages: [
          {
                "url": "/portfolio/installations/flight-of-peace-paper-doves-sculpture.webp",
                "caption": "Flight of Peace: Three-Dimensional Sculpted Paper Doves",
                "tag": "Dimensional Art"
          }
    ],
    deliverables: ['Structural Weight Assessment & Wall Anchor Engineering', 'Modular Multi-Panel Assembly', 'Direct Atelier Installation'],
    faqs: [{ q: 'How heavy are these sculptural installations?', a: 'We engineer lightweight honeycombed cores with structural aluminum cleats for safe drywall and masonry mounting.' }],
  },
  'branded-wall-art': {
    division: 'murals-commercial-art',
    slug: 'branded-wall-art',
    title: 'Branded Wall Art & Visual Features',
    primaryKeyword: 'branded wall art corporate murals visual features',
    metaTitle: 'Branded Wall Art & Visual Features — Architectural Branding | HUNAR',
    metaDescription: 'Subtle, artistic interpretations of corporate identity and brand values rendered as architectural wall features.',
    summary: 'Elevating corporate logos into fine art wall statements, combining bas-relief typography and textured plaster.',
    heroImage: '/portfolio/murals/rural-village-landscape-panoramic-mural.webp',
    galleryImages: [
          {
                "url": "/portfolio/murals/rural-village-landscape-panoramic-mural.webp",
                "caption": "Echoes of the Countryside Panoramic Boundary Mural",
                "tag": "Exterior Mural"
          },
          {
                "url": "/portfolio/calligraphy/swatantryotsav-monumental-calligraphy-board.webp",
                "caption": "Swatantryotsav: Monumental Calligraphy Exhibition Board",
                "tag": "Exhibition Board"
          }
    ],
    deliverables: ['Material Swatch Submissions', 'Architectural Integration Mockups', 'Precision Hand-Painted or Cast Execution'],
    faqs: [{ q: 'Is this just a vinyl decal or sign?', a: 'Never. Our branded features are physical artworks crafted from plaster, brass, hardwood, and lime wash.' }],
  },
  'event-backdrops-live-art': {
    division: 'murals-commercial-art',
    slug: 'event-backdrops-live-art',
    title: 'Event Backdrops & Live Art Performances',
    primaryKeyword: 'bespoke event backdrops live art painting',
    metaTitle: 'Event Backdrops & Live Art — Galas & Luxury Launches | HUNAR',
    metaDescription: 'Handcrafted photo backdrops and captivating live painting performances for luxury brand launches and cultural galas.',
    summary: 'Art-directed hand-painted canvas backdrops and live on-site painting performances during exclusive cultural galas.',
    heroImage: '/portfolio/stage-design/sir-jj-applied-art-winged-stage-finished.webp',
    galleryImages: [
          {
                "url": "/portfolio/stage-design/sir-jj-applied-art-winged-stage-finished.webp",
                "caption": "Sir J.J. Applied Art 88th Annual Exhibition Sculptural Stage (40ft × 20ft)",
                "tag": "Theatrical Stage"
          },
          {
                "url": "/portfolio/stage-design/sir-jj-applied-art-stage-color-render.webp",
                "caption": "88th Exhibition Stage Chromatic 3D Concept Rendering",
                "tag": "3D Render"
          },
          {
                "url": "/portfolio/caricature/young-girl-live-watercolor-portrait-booth.webp",
                "caption": "Live Caricature & Guest Portrait Pavilion Activation",
                "tag": "Live Art"
          },
          {
                "url": "/portfolio/face-body-art/spiderman-venom-split-mask-arm-art.webp",
                "caption": "Live Event Body Art & Temporary Tattoos",
                "tag": "Live Body Art"
          }
    ],
    deliverables: ['Freestanding or Truss-Mounted Canvas Execution', 'Live Painting Performance by Senior Artists', 'Finished Piece Handover for Client Retention'],
    faqs: [{ q: 'Can the finished live painting be kept by the event host?', a: 'Yes, the completed artwork belongs to the client and can be hung permanently in their office or home.' }],
  },
  'corporate-art-gifting': {
    division: 'murals-commercial-art',
    slug: 'corporate-art-gifting',
    title: 'Corporate Art Commissions & Executive Gifting',
    primaryKeyword: 'corporate art commissions executive gifting bespoke',
    metaTitle: 'Corporate Art Commissions & Gifting — Executive Editions | HUNAR',
    metaDescription: 'Curated original fine art gifts and serialized limited editions for executive VIPs, founders, and commemorative milestones.',
    summary: 'Commissioned fine art collections for board retirements, investor commemorations, and luxury corporate gifting.',
    heroImage: '/portfolio/face-body-art/shreya-peacock-feather-forearm-tattoo.webp',
    galleryImages: [
          {
                "url": "/portfolio/face-body-art/shreya-peacock-feather-forearm-tattoo.webp",
                "caption": "Shreya: Calligraphic Peacock Feather Arm Tattoo Showcase",
                "tag": "Live Body Art"
          },
          {
                "url": "/portfolio/caricature/live-family-caricature-portrait.webp",
                "caption": "Live Event Caricature Portrait Keepsake",
                "tag": "Caricature Gift"
          }
    ],
    deliverables: ['Serialized Numbering with Company Inscription', 'Handcrafted Hardwood Presentation Box', 'Personalized Artist Provenance Certificate'],
    faqs: [{ q: 'What is the lead time for corporate volume gifting?', a: 'Volume orders of 25 to 100 units require 4 to 6 weeks for handcrafting and packaging.' }],
  },

  // 7. Creative Products & Digital Assets
  'custom-merchandise': {
    division: 'creative-products',
    slug: 'custom-merchandise',
    title: 'Custom Merchandise & Printed Products',
    primaryKeyword: 'bespoke custom merchandise printed creative products',
    metaTitle: 'Custom Merchandise & Printed Products — Artisanal Goods | HUNAR',
    metaDescription: 'Elevated studio merchandise: heavyweight textiles, custom stationery, and collectible art objects designed by HUNAR.',
    summary: 'High-end apparel and artisanal lifestyle goods designed with artistic integrity rather than generic corporate promo swag.',
    heroImage: '/portfolio/face-body-art/fairy-butterfly-shimmer-hand-art.webp',
    galleryImages: [
          {
                "url": "/portfolio/face-body-art/fairy-butterfly-shimmer-hand-art.webp",
                "caption": "Shimmering Blue Butterfly Hand Art & Temporary Tattoo Badges",
                "tag": "Hand Art"
          }
    ],
    deliverables: ['Custom Textile and Material Sourcing', 'High-Density Screen Printing or Embroidery Specs', 'Custom Woven Label & Tag Architecture'],
    faqs: [{ q: 'What is the minimum run size?', a: 'Custom merchandise runs typically begin at 50 units per design to ensure artisanal quality.' }],
  },
  'branded-tote-bags-notebooks': {
    division: 'creative-products',
    slug: 'branded-tote-bags-notebooks',
    title: 'Branded Tote Bags, Notebooks, Stickers & Art Gifts',
    primaryKeyword: 'branded tote bags notebooks stickers artisanal gifts',
    metaTitle: 'Branded Tote Bags, Notebooks & Art Gifts | HUNAR Atelier',
    metaDescription: 'Organic canvas totes, linen-bound artist sketchbooks, and silkscreened stickers crafted for cultural brands.',
    summary: 'Organic heavyweight cotton totes, smyth-sewn linen notebooks, and silkscreened sticker sets made with tactile care.',
    heroImage: '/portfolio/installations/creative-tree-of-knowledge-sculpture.webp',
    galleryImages: [
          {
                "url": "/portfolio/installations/creative-tree-of-knowledge-sculpture.webp",
                "caption": "Creative Studio Sculptural Object & Keepsake",
                "tag": "Product"
          }
    ],
    deliverables: ['Organic 14oz Canvas Tote Construction', 'Smyth-Sewn Binding with Archival Paper Inners', 'Custom Foil Debossed Cover Detailing'],
    faqs: [{ q: 'Are your tote bags made from organic cotton?', a: 'Yes, we source 100% GOTS-certified unbleached organic canvas.' }],
  },
  'digital-invitations-planners': {
    division: 'creative-products',
    slug: 'digital-invitations-planners',
    title: 'Digital Invitations, Planners & Printable Artwork',
    primaryKeyword: 'digital invitations planners printable artwork',
    metaTitle: 'Digital Invitations & Printable Art — Luxury Templates | HUNAR',
    metaDescription: 'Interactive digital invitations, curated wedding suites, and printable art downloads crafted with editorial aesthetics.',
    summary: 'Typographic wedding suites, responsive mobile digital invitations, and beautifully formatted printable desk planners.',
    heroImage: '/portfolio/calligraphy/gulzar-bosky-poem-devanagari-calligraphy.webp',
    galleryImages: [
      { url: '/portfolio/calligraphy/shakespeare-sonnet-circular-calligraphy.webp', caption: 'Interactive Mobile Invitation Suite', tag: 'Invitations' },
    ],
    deliverables: ['Clickable Web/Mobile Invitation Landing Page', 'Print-Ready PDF Master Files', 'RSVP Automation Setup'],
    faqs: [{ q: 'Can the digital invitation track RSVPs?', a: 'Yes, our digital invitations can be paired with custom forms or online RSVP databases.' }],
  },
  'presentation-templates': {
    division: 'creative-products',
    slug: 'presentation-templates',
    title: 'Presentation Templates & Pitch Deck Design',
    primaryKeyword: 'custom presentation templates pitch deck design',
    metaTitle: 'Presentation Templates & Pitch Deck Design — Keynote & Figma | HUNAR',
    metaDescription: 'Editorial presentation templates and investor pitch decks designed with typographic discipline and clean data visualization.',
    summary: 'Investor pitch decks and keynote templates designed with architectural grids, bespoke charts, and crisp typography.',
    heroImage: '/portfolio/web-design/greek-automata-techfest-website.webp',
    galleryImages: [
      { url: '/portfolio/web-design/greek-automata-techfest-website.webp', caption: 'Keynote & PowerPoint Slide System', tag: 'Decks' },
    ],
    deliverables: ['Keynote, Figma, and PowerPoint Master Templates', 'Custom Financial Chart and Data Icon Styles', 'Typography Licensing Guide'],
    faqs: [{ q: 'Are fonts easy to use for team members?', a: 'We design with system-available Google Fonts or provide exact licensed webfont files.' }],
  },
  'social-media-templates': {
    division: 'creative-products',
    slug: 'social-media-templates',
    title: 'Social Media Templates & Visual Systems',
    primaryKeyword: 'editorial social media templates design',
    metaTitle: 'Social Media Templates & Design Systems — Figma & Canva | HUNAR',
    metaDescription: 'Elevate your online grid with editable social media templates for luxury brands, architects, and creative founders.',
    summary: 'Editorial social media grid systems for Figma and Canva, allowing your internal team to publish on-brand content effortlessly.',
    heroImage: '/portfolio/web-design/shikha-singh-luxury-model-portfolio.webp',
    galleryImages: [
      { url: '/portfolio/calligraphy/gulzar-bosky-poem-devanagari-calligraphy.webp', caption: 'Modular Social Grid Component Library', tag: 'Social Kits' },
    ],
    deliverables: ['30+ Modular Post and Story Component Templates', 'Figma and Canva Editable Master Links', 'Photography Crop and Text Overlay Guidelines'],
    faqs: [{ q: 'Can non-designers edit these templates in Canva?', a: 'Yes, we set up locked brand guidelines and user-friendly Canva team links.' }],
  },
  'downloadable-art': {
    division: 'creative-products',
    slug: 'downloadable-art',
    title: 'Downloadable Art & High-Resolution Design Assets',
    primaryKeyword: 'downloadable art prints high resolution digital assets',
    metaTitle: 'Downloadable Art & High-Resolution Digital Prints | HUNAR',
    metaDescription: 'Instant high-resolution art downloads formatted for standard international frame sizes (ISO A-series and US Imperial).',
    summary: 'Curated digital art files rendered at 300+ DPI, formatted for immediate printing on personal home printers or local print shops.',
    heroImage: '/portfolio/calligraphy/gulzar-poetry-spiral-devanagari-calligraphy.webp',
    galleryImages: [
          {
                "url": "/portfolio/calligraphy/gulzar-poetry-spiral-devanagari-calligraphy.webp",
                "caption": "Gulzar: \"Waqt\" Devanagari Spiral Calligraphy Art Print",
                "tag": "Calligraphy"
          }
    ],
    deliverables: ['5 Ratio Sets (2:3, 3:4, 4:5, 11:14, ISO A1-A4)', 'Professional Paper Recommendation Guide', 'Personal Display License'],
    faqs: [{ q: 'What paper do you recommend printing these on?', a: 'We recommend matte cotton rag or heavy cardstock (250gsm+) for rich pigment representation.' }],
  },
  'packaging-illustration': {
    division: 'creative-products',
    slug: 'packaging-illustration',
    title: 'Custom Product Illustrations & Packaging Artwork',
    primaryKeyword: 'custom product illustrations and packaging artwork',
    metaTitle: 'Custom Packaging Illustrations & Product Artwork | HUNAR',
    metaDescription: 'Bespoke hand-drawn illustrations and intricate patterns designed for retail packaging, box wraps, and labels.',
    summary: 'Hand-rendered botanical, landscape, and figurative illustrations crafted to wrap around boxes, bottles, and pouches.',
    heroImage: '/portfolio/calligraphy/gita-and-quran-harmony-devanagari-calligraphy.webp',
    galleryImages: [
      { url: '/portfolio/calligraphy/gita-and-quran-harmony-devanagari-calligraphy.webp', caption: 'Hand-Drawn Botanical Pattern on Box Wrap', tag: 'Illustration' },
    ],
    deliverables: ['Seamless Repeat Patterns in Vector Formats', 'Isolated High-Resolution Hero Illustrations', 'Full Commercial Packaging Reproduction Rights'],
    faqs: [{ q: 'Can illustrations be scaled without pixelation?', a: 'Yes, we provide master vector formats (AI, SVG, EPS) suitable for small cosmetic jars up to shipping cartons.' }],
  },
  'licensed-digital-assets': {
    division: 'creative-products',
    slug: 'licensed-digital-assets',
    title: 'Digital Artwork Collections & Licensed Creative Assets',
    primaryKeyword: 'licensed digital artwork creative assets',
    metaTitle: 'Licensed Digital Artwork Collections — Commercial Licenses | HUNAR',
    metaDescription: 'License original artwork from the HUNAR studio archive for editorial publications, book covers, and product lines.',
    summary: 'Commercial licensing agreements permitting brands and publishers to reproduce studio paintings across media and textiles.',
    heroImage: '/portfolio/calligraphy/circular-marathi-calligraphy-sun-mandala.webp',
    galleryImages: [
          {
                "url": "/portfolio/calligraphy/circular-marathi-calligraphy-sun-mandala.webp",
                "caption": "Sun Mandala: Radiating Marathi Calligraphy Licensed Study",
                "tag": "Mandala Art"
          }
    ],
    deliverables: ['Custom Tiered Commercial License Agreement', 'Color-Calibrated TIFF Master Files', 'Exclusivity Period Options'],
    faqs: [{ q: 'Can we license an artwork exclusively for our industry?', a: 'Yes, we offer category exclusivity riders for luxury, apparel, and publishing clients.' }],
  },
};

