const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../client/src/data/realPortfolioData.js');

// 31 new items from campaign, advertising, packaging, royal enfield, levis, sagar ratna, tag heuer, wwf, logos
const NEW_ITEMS = [
  // 1. boAt
  {
    id: "boat-rockerz-luxury-of-sound-poster",
    title: "boAt Rockerz: The Luxury of Sound Advertising Poster",
    category: "branding-design",
    categoryLabel: "Advertising Campaign & Print",
    year: "2024",
    image: "/portfolio/advertising/boat-rockerz-luxury-of-sound-poster.webp",
    medium: "Digital Painting & Conceptual Advertising Art Direction",
    dimensions: "A1 Exhibition & Print Layout (594mm × 841mm)",
    description: "High-impact advertising print campaign for boAt Rockerz headphones featuring a drummer merged into a premium headset with liquid gold and cosmic audio shockwaves.",
    alt: "boAt Rockerz advertising poster featuring dynamic drummer playing on headphones in deep space with golden shockwaves",
    tag: "Print Advertising",
    best: true
  },
  // 2. Green Mountain Coffee
  {
    id: "green-mountain-coffee-vibes-poster",
    title: "Green Mountain Coffee: Great Coffee Good Vibes Poster",
    category: "branding-design",
    categoryLabel: "Illustrated Advertising Art",
    year: "2024",
    image: "/portfolio/advertising/green-mountain-coffee-vibes-poster.webp",
    medium: "Digital Illustration & Typographic Layout",
    dimensions: "Print Poster Layout (18in × 24in)",
    description: "Vibrant hand-illustrated advertising poster for Green Mountain Coffee celebrating fair-trade roasting, organic highland mountains, and artisan espresso culture.",
    alt: "Green Mountain Coffee illustrated advertising poster with coffee beans, mountains, steaming mug, and retro typography",
    tag: "Illustrated Campaign",
    best: true
  },
  // 3. Surf Excel
  {
    id: "surf-excel-daag-achhe-hain-ganesha-ad",
    title: "Surf Excel: Daag Agar Achhe Hain Festive Ganesha Campaign",
    category: "branding-design",
    categoryLabel: "Cultural Advertising Campaign",
    year: "2024",
    image: "/portfolio/advertising/surf-excel-daag-achhe-hain-ganesha-ad.webp",
    medium: "Fine art digital painting with authentic mud textures",
    dimensions: "Double Spread Magazine Print (420mm × 297mm)",
    description: "Emotional festive print campaign celebrating Ganesh Chaturthi — capturing young children crafting eco-friendly clay Ganesha idols with dirt-stained clothes under the iconic slogan \"Daag Achhe Hain\".",
    alt: "Surf Excel print ad showing children making clay Ganesha idol in courtyard with mud stains on traditional clothes",
    tag: "Print Ad",
    best: true
  },
  // 4. Covaxin
  {
    id: "bharat-biotech-covaxin-pos-tag",
    title: "Bharat Biotech: Covaxin Point-of-Sale Vaccine Tag & Visual Kit",
    category: "branding-design",
    categoryLabel: "Packaging & POS Collateral",
    year: "2023",
    image: "/portfolio/advertising/bharat-biotech-covaxin-pos-tag.webp",
    medium: "Die-cut graphic collateral & precision medical branding",
    dimensions: "Die-cut Bottle Neck Tag & Counter Stand",
    description: "National health communication visual collateral and die-cut vaccine information tags conveying clinical safety, indigenous biotechnology, and dosage tracking.",
    alt: "Bharat Biotech Covaxin die-cut bottle tag and medical branding visual collateral in clinical blue and white",
    tag: "Healthcare Branding",
    best: false
  },
  // 5. Maharashtra Election Commission
  {
    id: "maharashtra-ceo-voter-awareness-poster",
    title: "Election Commission of Maharashtra: Youth Voter Awareness Poster",
    category: "branding-design",
    categoryLabel: "Public Interest Advertising",
    year: "2024",
    image: "/portfolio/advertising/maharashtra-ceo-voter-awareness-poster.webp",
    medium: "Devanagari typography and digital editorial illustration",
    dimensions: "Civic Metro Poster (24in × 36in)",
    description: "Civic engagement campaign in Marathi featuring monumental Devanagari lettering \"Pahile Kara Yogya Vote\" encouraging informed youth participation in democracy.",
    alt: "Maharashtra Election Commission civic voter awareness poster with Marathi typography and voting finger ink mark",
    tag: "Public Service Ad",
    best: false
  },
  // 6. Urban Transit
  {
    id: "sustainable-urban-transit-editorial-ad",
    title: "Future Mobility: Urban Green Transit Campaign Poster",
    category: "branding-design",
    categoryLabel: "Environmental Campaign",
    year: "2024",
    image: "/portfolio/advertising/sustainable-urban-transit-editorial-ad.webp",
    medium: "Vector editorial illustration & data visual storytelling",
    dimensions: "Editorial Transit Billboard (30in × 40in)",
    description: "Futuristic urban mobility visual campaign showcasing electric mass transit, pedal infrastructure, and low-emission urban landscapes.",
    alt: "Futuristic city editorial poster illustrating green mass transit, bicycle lanes, and clean energy skyline",
    tag: "Editorial Poster",
    best: false
  },
  // 7. Levi's Polar Bear
  {
    id: "levis-desert-heat-polar-bear",
    title: "Levi's: Desert Heat in Winter — Polar Bear Knitwear Campaign",
    category: "branding-design",
    categoryLabel: "National Fashion Campaign",
    year: "2024",
    image: "/portfolio/brand-identity/levis/levis-desert-heat-polar-bear.webp",
    medium: "Concept art direction, photo manipulation, and print layout",
    dimensions: "Outdoor Hoarding & Magazine Spread (60in × 30in)",
    description: "Hyperbolic winter collection campaign for Levi's featuring an arctic polar bear sunbathing on icy cliffs wrapped in thermal Levi's denim and knitwear under the tagline \"Feel the Desert Heat in Winter\".",
    alt: "Levi's winter campaign ad featuring a polar bear wearing denim jacket relaxing on ice under warm sunlight",
    tag: "Fashion Advertising",
    best: true
  },
  // 8. Levi's Penguin
  {
    id: "levis-desert-heat-arctic-penguin",
    title: "Levi's: Desert Heat in Winter — Arctic Penguin Collection",
    category: "branding-design",
    categoryLabel: "National Fashion Campaign",
    year: "2024",
    image: "/portfolio/brand-identity/levis/levis-desert-heat-arctic-penguin.webp",
    medium: "Digital concept art direction and editorial layout",
    dimensions: "Outdoor Billboard & In-Store POS (48in × 36in)",
    description: "Whimsical yet razor-sharp winter apparel campaign showing arctic penguins basking in warm sunglasses and Levi's denim fleece jackets atop glacier peaks.",
    alt: "Levi's advertising billboard showing emperor penguins wearing denim jackets and sunglasses on an iceberg",
    tag: "Fashion Advertising",
    best: true
  },
  // 9. Brambles Die-Line
  {
    id: "brambles-swan-duck-food-packaging-flat",
    title: "Brambles Swan & Duck Food: Primary Carton Die-Line Design",
    category: "branding-design",
    categoryLabel: "Eco Packaging & Carton Die-Line",
    year: "2024",
    image: "/portfolio/brand-identity/packaging/brambles-swan-duck-food-packaging-flat.webp",
    medium: "Vector packaging die-line with botanical illustration",
    dimensions: "Custom 500g Die-Cut Folding Carton",
    description: "Complete unrolled structural die-cut carton packaging for Brambles waterfowl food featuring eco-friendly uncoated kraft textures, nutritional guidelines, and botanical swan illustrations.",
    alt: "Flat packaging die-line design for Brambles Swan and Duck food box with swan graphics and nutritional facts",
    tag: "Structural Packaging",
    best: true
  },
  // 10. Brambles 3D Feeder Box
  {
    id: "brambles-swan-duck-feeder-box-3d",
    title: "Brambles: 3D Fabricated Feeder Box & Floating Dispenser",
    category: "branding-design",
    categoryLabel: "3D Product Prototype & Packaging",
    year: "2024",
    image: "/portfolio/brand-identity/packaging/brambles-swan-duck-feeder-box-3d.webp",
    medium: "Fabricated cardboard prototype and photographic staging",
    dimensions: "3D Functional Feeder Box Prototype (15cm × 10cm × 22cm)",
    description: "Physical handcrafted packaging prototype featuring an integrated easy-pour spout and bird feeder silhouette engineered for lakeshore conservationists.",
    alt: "Three-dimensional prototype mockup of Brambles duck food packaging with pour spout on wooden table",
    tag: "3D Prototyping",
    best: false
  },
  // 11. Brambles Retail Display
  {
    id: "brambles-wildlife-treats-lifestyle-display",
    title: "Brambles: Retail Shelf Display & Multi-SKU Presentation",
    category: "branding-design",
    categoryLabel: "Retail Shelf Display & POS",
    year: "2024",
    image: "/portfolio/brand-identity/packaging/brambles-wildlife-treats-lifestyle-display.webp",
    medium: "Studio product photography & retail mockups",
    dimensions: "Retail Shelf POS Unit Display",
    description: "Curated retail shelf presentation showing the Brambles wildlife nutrition lineup with tamper-evident seal, biodegradable substrates, and cohesive earth-tone palette.",
    alt: "Brambles wildlife food cartons lined up on store shelf display with natural lighting",
    tag: "Retail Presentation",
    best: false
  },
  // 12. Brambles Detail
  {
    id: "brambles-packaging-detail-typography",
    title: "Brambles: Packaging Detail & Typographic Hierarchy",
    category: "branding-design",
    categoryLabel: "Label Typography & Nutritional System",
    year: "2024",
    image: "/portfolio/brand-identity/packaging/brambles-packaging-detail-typography.webp",
    medium: "High-resolution typographic layout and iconography",
    dimensions: "Side Panel Nutritional Layout (8cm × 18cm)",
    description: "Detailed inspection of the side panel micro-typography, certified wildlife icons, allergen disclosures, and recyclable material stamps.",
    alt: "Close-up of packaging typography, recycling badges, and ingredients list on Brambles box side panel",
    tag: "Typography",
    best: false
  },
  // 13. Royal Enfield Master
  {
    id: "royal-enfield-live-royal-ride-royal-cover",
    title: "Royal Enfield: Live Royal, Ride Royal — Campaign Master Vision",
    category: "branding-design",
    categoryLabel: "Cultural Campaign & Art Direction",
    year: "2024",
    image: "/portfolio/brand-identity/royal-enfield/royal-enfield-live-royal-ride-royal-cover.webp",
    medium: "Conceptual photography, digital composite, and campaign typography",
    dimensions: "Master Campaign Key Visual (40in × 25in)",
    description: "Flagship brand campaign positioning Royal Enfield helmets alongside traditional Indian turbans, expressing the core message that honoring royal Indian heritage starts with protecting the crown.",
    alt: "Royal Enfield Live Royal Ride Royal campaign headline with traditional Indian pagadi and Royal Enfield helmet",
    tag: "Master Campaign",
    best: true
  },
  // 14. Royal Enfield Punjab Dastar
  {
    id: "royal-enfield-punjabi-turban-dastar-helmet",
    title: "Royal Enfield: The Dastar of Punjab — Pride & Protection",
    category: "branding-design",
    categoryLabel: "Print Advertising Campaign",
    year: "2024",
    image: "/portfolio/brand-identity/royal-enfield/royal-enfield-punjabi-turban-dastar-helmet.webp",
    medium: "High-contrast studio portraiture & digital retouching",
    dimensions: "Magazine Spread & Billboard (36in × 24in)",
    description: "Campaign execution celebrating the valorous Sikh Dastar of Punjab, paired symmetrically with the matte-black Royal Enfield cruising helmet.",
    alt: "Royal Enfield print ad comparing a regal Punjabi saffron turban with a matte black motorcycle helmet",
    tag: "Print Campaign",
    best: true
  },
  // 15. Royal Enfield Mysore Peta
  {
    id: "royal-enfield-mysore-peta-royal-heritage",
    title: "Royal Enfield: Mysore Peta — The Regal Crown of Karnataka",
    category: "branding-design",
    categoryLabel: "Print Advertising Campaign",
    year: "2024",
    image: "/portfolio/brand-identity/royal-enfield/royal-enfield-mysore-peta-royal-heritage.webp",
    medium: "Studio fine art photography and heritage lighting",
    dimensions: "Magazine Spread & Showroom Standee (36in × 24in)",
    description: "Visual study connecting the silk and zari Mysore Peta worn by Wadeyar royalty with the handcrafted leather-lined Royal Enfield helmet.",
    alt: "Royal Enfield campaign visual pairing an ornate gold Mysore Peta turban with a handcrafted vintage leather rider helmet",
    tag: "Print Campaign",
    best: false
  },
  // 16. Royal Enfield Puneri Pagadi
  {
    id: "royal-enfield-puneri-pagadi-maharashtra",
    title: "Royal Enfield: Puneri Pagadi — Intellect & Maratha Valour",
    category: "branding-design",
    categoryLabel: "Print Advertising Campaign",
    year: "2024",
    image: "/portfolio/brand-identity/royal-enfield/royal-enfield-puneri-pagadi-maharashtra.webp",
    medium: "Conceptual lighting, textile texture study, and typography",
    dimensions: "Print Ad & Dealership Wall Poster (36in × 24in)",
    description: "Maratha heritage visual tribute linking the iconic pleated crimson Puneri Pagadi with the high-impact aerodynamic Royal Enfield safety helmet.",
    alt: "Royal Enfield advertisement featuring traditional red Puneri Pagadi turban alongside modern motorcycle helmet",
    tag: "Print Campaign",
    best: false
  },
  // 17. Royal Enfield Rajasthani Safa
  {
    id: "royal-enfield-rajasthani-safa-desert-riders",
    title: "Royal Enfield: Rajasthani Safa — Colors of the Thar Desert",
    category: "branding-design",
    categoryLabel: "Print Advertising Campaign",
    year: "2024",
    image: "/portfolio/brand-identity/royal-enfield/royal-enfield-rajasthani-safa-desert-riders.webp",
    medium: "High-definition digital photo art direction",
    dimensions: "Print Ad & Highway Billboard (48in × 24in)",
    description: "Brilliant tie-dye Leheriya Rajasthani Safa paired with the rugged sand-beige Royal Enfield adventure touring helmet built for Leh Ladakh trails.",
    alt: "Royal Enfield ad showing bright multi-color Rajasthani turban alongside desert-tan adventure motorcycle helmet",
    tag: "Print Campaign",
    best: false
  },
  // 18. Royal Enfield Lookbook
  {
    id: "royal-enfield-campaign-merchandise-booklet",
    title: "Royal Enfield: Live Royal Campaign Lookbook & Collateral",
    category: "branding-design",
    categoryLabel: "Editorial Lookbook & Collateral",
    year: "2024",
    image: "/portfolio/brand-identity/royal-enfield/royal-enfield-campaign-merchandise-booklet.webp",
    medium: "Editorial publication design and dealership display",
    dimensions: "Limited Edition Hardcover Lookbook (280mm × 280mm)",
    description: "Collector's brand lookbook documenting the cultural history of Indian headgear and the engineering precision of Royal Enfield safety apparel.",
    alt: "Royal Enfield Live Royal Ride Royal campaign lookbook and merchandise booklet open on oak desk",
    tag: "Lookbook Design",
    best: false
  },
  // 19. Sagar Ratna Cover
  {
    id: "sagar-ratna-brand-identity-concept-cover",
    title: "Sagar Ratna: Comprehensive Brand Identity & Visual System",
    category: "branding-design",
    categoryLabel: "Restaurant Brand Identity & Rebrand",
    year: "2024",
    image: "/portfolio/brand-identity/saga-ratna/sagar-ratna-brand-identity-concept-cover.webp",
    medium: "Corporate brandmark architecture, vector guidelines, and color theory",
    dimensions: "Complete Brand Identity Manual (A4 Landscape, 48 Pages)",
    description: "Complete brand overhaul for premier Indian vegetarian dining chain Sagar Ratna, introducing a modern heritage identity rooted in sacred culinary hospitality.",
    alt: "Sagar Ratna brand identity presentation cover featuring new logo icon, green and gold brand colors",
    tag: "Brand Identity",
    best: true
  },
  // 20. Sagar Ratna Anatomy
  {
    id: "sagar-ratna-brandmark-anatomy-vaman-cloche",
    title: "Sagar Ratna: Brandmark Anatomy — Vaman Umbrella & Dining Cloche",
    category: "branding-design",
    categoryLabel: "Logo Symbol Anatomy & Geometry",
    year: "2024",
    image: "/portfolio/brand-identity/saga-ratna/sagar-ratna-brandmark-anatomy-vaman-cloche.webp",
    medium: "Geometric vector construction grid & cultural iconography",
    dimensions: "Logomark Mathematical Construction Grid",
    description: "In-depth breakdown of the new Sagar Ratna symbol combining Lord Vamana's auspicious parasol (Chhatri), the gourmet dining cloche, and the steaming idli silhouette.",
    alt: "Geometric vector diagram showing the construction of Sagar Ratna logo symbol combining dining cloche and royal umbrella",
    tag: "Logo Design",
    best: true
  },
  // 21. Sagar Ratna Color Palette
  {
    id: "sagar-ratna-color-palette-typography-system",
    title: "Sagar Ratna: Color Hierarchy & Devanagari-Latin Type System",
    category: "branding-design",
    categoryLabel: "Color Palette & Typography Manual",
    year: "2024",
    image: "/portfolio/brand-identity/saga-ratna/sagar-ratna-color-palette-typography-system.webp",
    medium: "Pantone specification sheet and bilingual typographic pairings",
    dimensions: "Color & Typography Standard Specification Sheet",
    description: "Standardized brand palette comprising Forest Banana-Leaf Green (#0E4D13), Golden Turmeric Marigold (#F3AB1B), and Warm Dosa Cream (#FFDCA6) with bilingual type hierarchy.",
    alt: "Sagar Ratna brand color swatch cards in deep green, golden yellow, cream, and typography specimens",
    tag: "Brand Standards",
    best: false
  },
  // 22. Sagar Ratna Stationery
  {
    id: "sagar-ratna-restaurant-stationery-business-cards",
    title: "Sagar Ratna: Corporate Stationery & Fine Dining Touchpoints",
    category: "branding-design",
    categoryLabel: "Corporate Stationery & Print Collateral",
    year: "2024",
    image: "/portfolio/brand-identity/saga-ratna/sagar-ratna-restaurant-stationery-business-cards.webp",
    medium: "Hot-foil stamping and premium cotton paper collateral",
    dimensions: "Business Card Suite, Letterheads & Envelopes",
    description: "Refined executive stationery suite featuring gold-embossed brandmark on textured forest-green cotton paper with brass edge guilding.",
    alt: "Sagar Ratna corporate stationery suite with embossed green business cards and gold foil letterheads",
    tag: "Stationery Suite",
    best: false
  },
  // 23. Sagar Ratna Packaging
  {
    id: "sagar-ratna-takeaway-packaging-butter-paper",
    title: "Sagar Ratna: Eco Takeaway Packaging & Custom Butter Paper Wraps",
    category: "branding-design",
    categoryLabel: "Food Packaging & Delivery Collateral",
    year: "2024",
    image: "/portfolio/brand-identity/saga-ratna/sagar-ratna-takeaway-packaging-butter-paper.webp",
    medium: "Food-grade soy ink on greaseproof unbleached craft paper",
    dimensions: "Takeaway Carry Bags, Chutney Pods & Dosa Wraps",
    description: "Sustainable restaurant packaging suite featuring custom illustrated patterns of curry leaves, mustard seeds, and tiffin boxes printed with food-safe botanical ink.",
    alt: "Sagar Ratna eco delivery packaging boxes, kraft paper bags, and patterned food wrapping paper",
    tag: "Food Packaging",
    best: true
  },
  // 24. TAG Heuer Wordmark
  {
    id: "tag-heuer-devanagari-wordmark-presentation",
    title: "TAG Heuer: Devanagari Luxury Wordmark System",
    category: "branding-design",
    categoryLabel: "Multilingual Brand Localization & Typography",
    year: "2024",
    image: "/portfolio/brand-identity/tag-heuer/tag-heuer-devanagari-wordmark-presentation.webp",
    medium: "Custom precision Devanagari type design and brand architecture",
    dimensions: "Corporate Identity Monograph (A3 Presentation)",
    description: "Pioneering typographic adaptation of the iconic Swiss avant-garde horology brand TAG Heuer into Devanagari script ('टॅग ह्यूअर'), matching the exact angle, stroke weight, and industrial geometry of the original mark.",
    alt: "TAG Heuer luxury brandmark re-imagined in bold Devanagari script with iconic green and red shield",
    tag: "Typography & Localization",
    best: true
  },
  // 25. TAG Heuer Grid
  {
    id: "tag-heuer-devanagari-grid-anatomy-shirorekha",
    title: "TAG Heuer: Typographic Grid Anatomy — Shirorekha & Padrekha",
    category: "branding-design",
    categoryLabel: "Typographic Engineering & Grid System",
    year: "2024",
    image: "/portfolio/brand-identity/tag-heuer/tag-heuer-devanagari-grid-anatomy-shirorekha.webp",
    medium: "Mathematical glyph drafting and baseline vector construction",
    dimensions: "Typographic Vector Grid Layout",
    description: "Exact geometric construction of the Devanagari glyphs along Shirorekha (headline), Padrekha (baseline), and Talrekha, preserving the signature diagonal cuts of the Swiss Heuer chevron.",
    alt: "Typographic blueprint grid showing exact geometric lines constructing the Devanagari letters for TAG Heuer",
    tag: "Glyph Drafting",
    best: true
  },
  // 26. TAG Heuer Shield
  {
    id: "tag-heuer-shield-devanagari-heuer-crest",
    title: "TAG Heuer: Devanagari Heuer Shield Crest & Optical Balance",
    category: "branding-design",
    categoryLabel: "Emblem Localization & Shield Geometry",
    year: "2024",
    image: "/portfolio/brand-identity/tag-heuer/tag-heuer-shield-devanagari-heuer-crest.webp",
    medium: "Vector crest design and chromatic balance testing",
    dimensions: "Emblem Proportions Guide (50cm × 50cm)",
    description: "Adaptation of the iconic lower five-sided Heuer shield containing the Devanagari 'ह्यूअर' character string, engineered to maintain optical balance alongside the upper TAG rectangle.",
    alt: "TAG Heuer shield logo featuring Devanagari lettering inside the bottom half with red and green heritage colors",
    tag: "Emblem Design",
    best: false
  },
  // 27. TAG Heuer Dial
  {
    id: "tag-heuer-luxury-dial-application-render",
    title: "TAG Heuer: Carrera Chronograph Dial Application Render",
    category: "branding-design",
    categoryLabel: "Product Application & Luxury Mockup",
    year: "2024",
    image: "/portfolio/brand-identity/tag-heuer/tag-heuer-luxury-dial-application-render.webp",
    medium: "3D luxury product rendering and dial typography mockup",
    dimensions: "Watch Dial Macro Render (44mm Chronograph Spec)",
    description: "Macro render of the Carrera Calibre chronograph watch dial showcasing the Devanagari TAG Heuer insignia precision-printed on sunburst anthracite brushed steel dial.",
    alt: "Luxury TAG Heuer chronograph watch face with Devanagari logo on brushed steel dial",
    tag: "Luxury Render",
    best: true
  },
  // 28. WWF Rhino
  {
    id: "wwf-rhino-horn-poaching-child-print-ad",
    title: "WWF Anti-Poaching: The Torn Horn — Our Children's Future",
    category: "branding-design",
    categoryLabel: "Global Advocacy & Conservation Campaign",
    year: "2024",
    image: "/portfolio/campaigns/wwf/wwf-rhino-horn-poaching-child-print-ad.webp",
    medium: "Studio conceptual photography and hard-hitting headline copy",
    dimensions: "Double Page Print & Poster (594mm × 420mm)",
    description: "Emotional print advocacy campaign showing an innocent young girl clutching a mutilated plush rhinoceros whose horn has been violently torn off, with the message: \"Our children's future matters. What about theirs?\".",
    alt: "WWF anti-poaching print ad showing little girl crying while holding a stuffed rhino toy with its horn ripped off",
    tag: "Conservation Campaign",
    best: true
  },
  // 29. WWF Elephant
  {
    id: "wwf-elephant-tusk-ivory-boy-print-ad",
    title: "WWF Anti-Poaching: Severed Ivory — The Bleeding Toy",
    category: "branding-design",
    categoryLabel: "Global Advocacy & Conservation Campaign",
    year: "2024",
    image: "/portfolio/campaigns/wwf/wwf-elephant-tusk-ivory-boy-print-ad.webp",
    medium: "Fine art photographic composition and narrative lighting",
    dimensions: "Double Page Print & Billboard (594mm × 420mm)",
    description: "Hard-hitting anti-ivory print advertisement capturing a young boy cradling a plush elephant toy with jagged red seams where its tusks once were.",
    alt: "WWF conservation ad featuring young boy holding plush elephant with torn tusks highlighting illegal ivory trade",
    tag: "Conservation Campaign",
    best: true
  },
  // 30. WWF Tiger
  {
    id: "wwf-tiger-skin-stripes-advocacy-poster",
    title: "WWF Anti-Poaching: Stolen Stripes — Vanishing Royal Bengal Tiger",
    category: "branding-design",
    categoryLabel: "Global Advocacy & Conservation Campaign",
    year: "2024",
    image: "/portfolio/campaigns/wwf/wwf-tiger-skin-stripes-advocacy-poster.webp",
    medium: "Photographic storytelling and environmental typography",
    dimensions: "Double Page Print & Transit Shelter (594mm × 420mm)",
    description: "Final installment of the anti-poaching trilogy depicting a child hugging a toy tiger that has been partially unstitched and skinned, driving urgent action against wildlife trafficking.",
    alt: "WWF print ad depicting a child with a stuffed tiger toy missing patches of fur to highlight tiger poaching",
    tag: "Conservation Campaign",
    best: true
  },
  // 31. Master Identity Trilogy
  {
    id: "master-identity-trilogy-typodday-tukaram-alumni",
    title: "Master Brandmark Trilogy: TYPODAY 2025, Sant Tukaram & JJ Alumni",
    category: "branding-design",
    categoryLabel: "Cultural Logo Systems & Typographic Monograms",
    year: "2024",
    image: "/portfolio/logo-designs/master-identity-trilogy-typodday-tukaram-alumni.webp",
    medium: "Precision vector geometry and narrative typographic iconography",
    dimensions: "Identity Systems Showcase Panel (36in × 24in)",
    description: "Trilogy of celebrated logo marks: TYPODAY 2025 integrating cinema film strips with Hindi script; the Sant Tukaram Sansthan spiritual Veena monogram; and the Sir J.J. Applied Art Alumni cactus emblem.",
    alt: "Three distinct studio logo designs displayed together including TypoDay cinema logo and spiritual monogram",
    tag: "Brandmark System",
    best: true
  }
];

// Load existing items
const existingModule = require(targetPath);
const existingItems = existingModule.REAL_PORTFOLIO_ITEMS || [];

// Filter out any duplicates if run multiple times
const existingIds = new Set(existingItems.map(i => i.id));
const itemsToAdd = NEW_ITEMS.filter(item => !existingIds.has(item.id));

const combinedItems = [...existingItems, ...itemsToAdd];

const fileContent = `/**
 * Real HUNAR Studio Portfolio Data
 * Auto-generated from optimized client reference assets.
 * 100% genuine studio commissions, fine art studies, and architectural projects.
 * Featured items (best: true) are prioritized first for peak visual impact.
 * Total authentic studio works: ${combinedItems.length}
 */

export const REAL_PORTFOLIO_ITEMS = ${JSON.stringify(combinedItems, null, 2)};
`;

fs.writeFileSync(targetPath, fileContent, 'utf-8');
console.log(`Successfully updated ${targetPath} with ${combinedItems.length} portfolio items (${itemsToAdd.length} added).`);

