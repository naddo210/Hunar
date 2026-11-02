const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const BASE_DIR = path.join(__dirname, '../client/public/portfolio');

// Ensure destination directories exist
const dirs = [
  'advertising',
  'brand-identity/levis',
  'brand-identity/packaging',
  'brand-identity/royal-enfield',
  'brand-identity/saga-ratna',
  'brand-identity/tag-heuer',
  'campaigns/wwf',
  'logo-designs',
  'face-body-art'
];

dirs.forEach(d => {
  const fullPath = path.join(BASE_DIR, d);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

// 1. Copy over face & body art webp files into face-body-art dir
const tattooSource = path.join(BASE_DIR, 'tattor and corporate event');
if (fs.existsSync(tattooSource)) {
  const tattooFiles = fs.readdirSync(tattooSource).filter(f => f.endsWith('.webp'));
  tattooFiles.forEach(file => {
    fs.copyFileSync(path.join(tattooSource, file), path.join(BASE_DIR, 'face-body-art', file));
  });
  console.log(`Copied ${tattooFiles.length} face-body-art files into clean directory.`);
}

// 2. Conversion map for the 31 new files
const fileMappings = [
  // boAt, Green Mountain, Surf Excel, Covaxin, Maharashtra Election, etc.
  {
    src: 'advertising/advertising/advertising01.jpg',
    dest: 'advertising/boat-rockerz-luxury-of-sound-poster.webp',
    title: 'boAt Rockerz: The Luxury of Sound Advertising Poster',
    client: 'boAt Lifestyle (Concept Campaign)',
    category: 'branding-design',
    categoryLabel: 'Advertising Campaign & Print',
    year: '2024',
    medium: 'Digital Painting & Conceptual Advertising Art Direction',
    dimensions: 'A1 Exhibition & Print Layout (594mm × 841mm)',
    description: 'High-impact advertising print campaign for boAt Rockerz headphones featuring a drummer merged into a premium headset with liquid gold and cosmic audio shockwaves.',
    alt: 'boAt Rockerz advertising poster featuring dynamic drummer playing on headphones in deep space with golden shockwaves',
    tag: 'Print Advertising',
    best: true
  },
  {
    src: 'advertising/advertising/advertising02.jpg',
    dest: 'advertising/green-mountain-coffee-vibes-poster.webp',
    title: 'Green Mountain Coffee: Great Coffee Good Vibes Poster',
    client: 'Green Mountain Coffee Roasters',
    category: 'branding-design',
    categoryLabel: 'Illustrated Advertising Art',
    year: '2024',
    medium: 'Digital Illustration & Typographic Layout',
    dimensions: 'Print Poster Layout (18in × 24in)',
    description: 'Vibrant hand-illustrated advertising poster for Green Mountain Coffee celebrating fair-trade roasting, organic highland mountains, and artisan espresso culture.',
    alt: 'Green Mountain Coffee illustrated advertising poster with coffee beans, mountains, steaming mug, and retro typography',
    tag: 'Illustrated Campaign',
    best: true
  },
  {
    src: 'advertising/advertising/advertising03.jpg',
    dest: 'advertising/surf-excel-daag-achhe-hain-ganesha-ad.webp',
    title: 'Surf Excel: Daag Agar Achhe Hain Festive Ganesha Campaign',
    client: 'Surf Excel (Hindustan Unilever)',
    category: 'branding-design',
    categoryLabel: 'Cultural Advertising Campaign',
    year: '2024',
    medium: 'Fine art digital painting with authentic mud textures',
    dimensions: 'Double Spread Magazine Print (420mm × 297mm)',
    description: 'Emotional festive print campaign celebrating Ganesh Chaturthi — capturing young children crafting eco-friendly clay Ganesha idols with dirt-stained clothes under the iconic slogan "Daag Achhe Hain".',
    alt: 'Surf Excel print ad showing children making clay Ganesha idol in courtyard with mud stains on traditional clothes',
    tag: 'Print Ad',
    best: true
  },
  {
    src: 'advertising/advertising/advertising04.jpg',
    dest: 'advertising/bharat-biotech-covaxin-pos-tag.webp',
    title: 'Bharat Biotech: Covaxin Point-of-Sale Vaccine Tag & Visual Kit',
    client: 'Bharat Biotech',
    category: 'branding-design',
    categoryLabel: 'Packaging & POS Collateral',
    year: '2023',
    medium: 'Die-cut graphic collateral & precision medical branding',
    dimensions: 'Die-cut Bottle Neck Tag & Counter Stand',
    description: 'National health communication visual collateral and die-cut vaccine information tags conveying clinical safety, indigenous biotechnology, and dosage tracking.',
    alt: 'Bharat Biotech Covaxin die-cut bottle tag and medical branding visual collateral in clinical blue and white',
    tag: 'Healthcare Branding',
    best: false
  },
  {
    src: 'advertising/advertising/advertising05.jpg',
    dest: 'advertising/maharashtra-ceo-voter-awareness-poster.webp',
    title: 'Election Commission of Maharashtra: Youth Voter Awareness Poster',
    client: 'Chief Electoral Officer, Maharashtra',
    category: 'branding-design',
    categoryLabel: 'Public Interest Advertising',
    year: '2024',
    medium: 'Devanagari typography and digital editorial illustration',
    dimensions: 'Civic Metro Poster (24in × 36in)',
    description: 'Civic engagement campaign in Marathi featuring monumental Devanagari lettering "Pahile Kara Yogya Vote" encouraging informed youth participation in democracy.',
    alt: 'Maharashtra Election Commission civic voter awareness poster with Marathi typography and voting finger ink mark',
    tag: 'Public Service Ad',
    best: false
  },
  {
    src: 'advertising/advertising/advertising06.jpg',
    dest: 'advertising/sustainable-urban-transit-editorial-ad.webp',
    title: 'Future Mobility: Urban Green Transit Campaign Poster',
    client: 'Urban Mobility Council',
    category: 'branding-design',
    categoryLabel: 'Environmental Campaign',
    year: '2024',
    medium: 'Vector editorial illustration & data visual storytelling',
    dimensions: 'Editorial Transit Billboard (30in × 40in)',
    description: 'Futuristic urban mobility visual campaign showcasing electric mass transit, pedal infrastructure, and low-emission urban landscapes.',
    alt: 'Futuristic city editorial poster illustrating green mass transit, bicycle lanes, and clean energy skyline',
    tag: 'Editorial Poster',
    best: false
  },

  // Levi's Campaign
  {
    src: 'brand identity/Levis-campaign/levis-campaign1.jpg',
    dest: 'brand-identity/levis/levis-desert-heat-polar-bear.webp',
    title: 'Levi\'s: Desert Heat in Winter — Polar Bear Knitwear Campaign',
    client: 'Levi Strauss & Co.',
    category: 'branding-design',
    categoryLabel: 'National Fashion Campaign',
    year: '2024',
    medium: 'Concept art direction, photo manipulation, and print layout',
    dimensions: 'Outdoor Hoarding & Magazine Spread (60in × 30in)',
    description: 'Hyperbolic winter collection campaign for Levi\'s featuring an arctic polar bear sunbathing on icy cliffs wrapped in thermal Levi\'s denim and knitwear under the tagline "Feel the Desert Heat in Winter".',
    alt: 'Levi\'s winter campaign ad featuring a polar bear wearing denim jacket relaxing on ice under warm sunlight',
    tag: 'Fashion Advertising',
    best: true
  },
  {
    src: 'brand identity/Levis-campaign/levis-campaign2.jpg',
    dest: 'brand-identity/levis/levis-desert-heat-arctic-penguin.webp',
    title: 'Levi\'s: Desert Heat in Winter — Arctic Penguin Collection',
    client: 'Levi Strauss & Co.',
    category: 'branding-design',
    categoryLabel: 'National Fashion Campaign',
    year: '2024',
    medium: 'Digital concept art direction and editorial layout',
    dimensions: 'Outdoor Billboard & In-Store POS (48in × 36in)',
    description: 'Whimsical yet razor-sharp winter apparel campaign showing arctic penguins basking in warm sunglasses and Levi\'s denim fleece jackets atop glacier peaks.',
    alt: 'Levi\'s advertising billboard showing emperor penguins wearing denim jackets and sunglasses on an iceberg',
    tag: 'Fashion Advertising',
    best: true
  },

  // Packaging Studio: Brambles Swan & Duck Food
  {
    src: 'brand identity/packaging-studio/packaging-studio01.jpg',
    dest: 'brand-identity/packaging/brambles-swan-duck-food-packaging-flat.webp',
    title: 'Brambles Swan & Duck Food: Primary Carton Die-Line Design',
    client: 'Brambles Pet & Wildlife Care',
    category: 'branding-design',
    categoryLabel: 'Eco Packaging & Carton Die-Line',
    year: '2024',
    medium: 'Vector packaging die-line with botanical illustration',
    dimensions: 'Custom 500g Die-Cut Folding Carton',
    description: 'Complete unrolled structural die-cut carton packaging for Brambles waterfowl food featuring eco-friendly uncoated kraft textures, nutritional guidelines, and botanical swan illustrations.',
    alt: 'Flat packaging die-line design for Brambles Swan and Duck food box with swan graphics and nutritional facts',
    tag: 'Structural Packaging',
    best: true
  },
  {
    src: 'brand identity/packaging-studio/packaging-studio02.jpg',
    dest: 'brand-identity/packaging/brambles-swan-duck-feeder-box-3d.webp',
    title: 'Brambles: 3D Fabricated Feeder Box & Floating Dispenser',
    client: 'Brambles Wildlife Nutrition',
    category: 'branding-design',
    categoryLabel: '3D Product Prototype & Packaging',
    year: '2024',
    medium: 'Fabricated cardboard prototype and photographic staging',
    dimensions: '3D Functional Feeder Box Prototype (15cm × 10cm × 22cm)',
    description: 'Physical handcrafted packaging prototype featuring an integrated easy-pour spout and bird feeder silhouette engineered for lakeshore conservationists.',
    alt: 'Three-dimensional prototype mockup of Brambles duck food packaging with pour spout on wooden table',
    tag: '3D Prototyping',
    best: false
  },
  {
    src: 'brand identity/packaging-studio/packaging-studio03.jpg',
    dest: 'brand-identity/packaging/brambles-wildlife-treats-lifestyle-display.webp',
    title: 'Brambles: Retail Shelf Display & Multi-SKU Presentation',
    client: 'Brambles Wildlife Nutrition',
    category: 'branding-design',
    categoryLabel: 'Retail Shelf Display & POS',
    year: '2024',
    medium: 'Studio product photography & retail mockups',
    dimensions: 'Retail Shelf POS Unit Display',
    description: 'Curated retail shelf presentation showing the Brambles wildlife nutrition lineup with tamper-evident seal, biodegradable substrates, and cohesive earth-tone palette.',
    alt: 'Brambles wildlife food cartons lined up on store shelf display with natural lighting',
    tag: 'Retail Presentation',
    best: false
  },
  {
    src: 'brand identity/packaging-studio/packaging-studio04.jpg',
    dest: 'brand-identity/packaging/brambles-packaging-detail-typography.webp',
    title: 'Brambles: Packaging Detail & Typographic Hierarchy',
    client: 'Brambles Pet & Wildlife Care',
    category: 'branding-design',
    categoryLabel: 'Label Typography & Nutritional System',
    year: '2024',
    medium: 'High-resolution typographic layout and iconography',
    dimensions: 'Side Panel Nutritional Layout (8cm × 18cm)',
    description: 'Detailed inspection of the side panel micro-typography, certified wildlife icons, allergen disclosures, and recyclable material stamps.',
    alt: 'Close-up of packaging typography, recycling badges, and ingredients list on Brambles box side panel',
    tag: 'Typography',
    best: false
  },

  // Royal Enfield Campaign (6 files)
  {
    src: 'brand identity/royal-enfield-campaign/royal-enfield-campaign-1.jpg',
    dest: 'brand-identity/royal-enfield/royal-enfield-live-royal-ride-royal-cover.webp',
    title: 'Royal Enfield: Live Royal, Ride Royal — Campaign Master Vision',
    client: 'Royal Enfield Motorcycles',
    category: 'branding-design',
    categoryLabel: 'Cultural Campaign & Art Direction',
    year: '2024',
    medium: 'Conceptual photography, digital composite, and campaign typography',
    dimensions: 'Master Campaign Key Visual (40in × 25in)',
    description: 'Flagship brand campaign positioning Royal Enfield helmets alongside traditional Indian turbans, expressing the core message that honoring royal Indian heritage starts with protecting the crown.',
    alt: 'Royal Enfield Live Royal Ride Royal campaign headline with traditional Indian pagadi and Royal Enfield helmet',
    tag: 'Master Campaign',
    best: true
  },
  {
    src: 'brand identity/royal-enfield-campaign/royal-enfield-campaign-2.jpg',
    dest: 'brand-identity/royal-enfield/royal-enfield-punjabi-turban-dastar-helmet.webp',
    title: 'Royal Enfield: The Dastar of Punjab — Pride & Protection',
    client: 'Royal Enfield',
    category: 'branding-design',
    categoryLabel: 'Print Advertising Campaign',
    year: '2024',
    medium: 'High-contrast studio portraiture & digital retouching',
    dimensions: 'Magazine Spread & Billboard (36in × 24in)',
    description: 'Campaign execution celebrating the valorous Sikh Dastar of Punjab, paired symmetrically with the matte-black Royal Enfield cruising helmet.',
    alt: 'Royal Enfield print ad comparing a regal Punjabi saffron turban with a matte black motorcycle helmet',
    tag: 'Print Campaign',
    best: true
  },
  {
    src: 'brand identity/royal-enfield-campaign/royal-enfield-campaign-3.jpg',
    dest: 'brand-identity/royal-enfield/royal-enfield-mysore-peta-royal-heritage.webp',
    title: 'Royal Enfield: Mysore Peta — The Regal Crown of Karnataka',
    client: 'Royal Enfield',
    category: 'branding-design',
    categoryLabel: 'Print Advertising Campaign',
    year: '2024',
    medium: 'Studio fine art photography and heritage lighting',
    dimensions: 'Magazine Spread & Showroom Standee (36in × 24in)',
    description: 'Visual study connecting the silk and zari Mysore Peta worn by Wadeyar royalty with the handcrafted leather-lined Royal Enfield helmet.',
    alt: 'Royal Enfield campaign visual pairing an ornate gold Mysore Peta turban with a handcrafted vintage leather rider helmet',
    tag: 'Print Campaign',
    best: false
  },
  {
    src: 'brand identity/royal-enfield-campaign/royal-enfield-campaign-4.jpg',
    dest: 'brand-identity/royal-enfield/royal-enfield-puneri-pagadi-maharashtra.webp',
    title: 'Royal Enfield: Puneri Pagadi — Intellect & Maratha Valour',
    client: 'Royal Enfield',
    category: 'branding-design',
    categoryLabel: 'Print Advertising Campaign',
    year: '2024',
    medium: 'Conceptual lighting, textile texture study, and typography',
    dimensions: 'Print Ad & Dealership Wall Poster (36in × 24in)',
    description: 'Maratha heritage visual tribute linking the iconic pleated crimson Puneri Pagadi with the high-impact aerodynamic Royal Enfield safety helmet.',
    alt: 'Royal Enfield advertisement featuring traditional red Puneri Pagadi turban alongside modern motorcycle helmet',
    tag: 'Print Campaign',
    best: false
  },
  {
    src: 'brand identity/royal-enfield-campaign/royal-enfield-campaign-5.jpg',
    dest: 'brand-identity/royal-enfield/royal-enfield-rajasthani-safa-desert-riders.webp',
    title: 'Royal Enfield: Rajasthani Safa — Colors of the Thar Desert',
    client: 'Royal Enfield',
    category: 'branding-design',
    categoryLabel: 'Print Advertising Campaign',
    year: '2024',
    medium: 'High-definition digital photo art direction',
    dimensions: 'Print Ad & Highway Billboard (48in × 24in)',
    description: 'Brilliant tie-dye Leheriya Rajasthani Safa paired with the rugged sand-beige Royal Enfield adventure touring helmet built for Leh Ladakh trails.',
    alt: 'Royal Enfield ad showing bright multi-color Rajasthani turban alongside desert-tan adventure motorcycle helmet',
    tag: 'Print Campaign',
    best: false
  },
  {
    src: 'brand identity/royal-enfield-campaign/royal-enfield-campaign-6.jpg',
    dest: 'brand-identity/royal-enfield/royal-enfield-campaign-merchandise-booklet.webp',
    title: 'Royal Enfield: Live Royal Campaign Lookbook & Collateral',
    client: 'Royal Enfield Gear Division',
    category: 'branding-design',
    categoryLabel: 'Editorial Lookbook & Collateral',
    year: '2024',
    medium: 'Editorial publication design and dealership display',
    dimensions: 'Limited Edition Hardcover Lookbook (280mm × 280mm)',
    description: 'Collector\'s brand lookbook documenting the cultural history of Indian headgear and the engineering precision of Royal Enfield safety apparel.',
    alt: 'Royal Enfield Live Royal Ride Royal campaign lookbook and merchandise booklet open on oak desk',
    tag: 'Lookbook Design',
    best: false
  },

  // Sagar Ratna Rebranding (5 files)
  {
    src: 'brand identity/saga-ratna/saga-ratna01.jpg',
    dest: 'brand-identity/saga-ratna/sagar-ratna-brand-identity-concept-cover.webp',
    title: 'Sagar Ratna: Comprehensive Brand Identity & Visual System',
    client: 'Sagar Ratna Pure Vegetarian Restaurants',
    category: 'branding-design',
    categoryLabel: 'Restaurant Brand Identity & Rebrand',
    year: '2024',
    medium: 'Corporate brandmark architecture, vector guidelines, and color theory',
    dimensions: 'Complete Brand Identity Manual (A4 Landscape, 48 Pages)',
    description: 'Complete brand overhaul for premier Indian vegetarian dining chain Sagar Ratna, introducing a modern heritage identity rooted in sacred culinary hospitality.',
    alt: 'Sagar Ratna brand identity presentation cover featuring new logo icon, green and gold brand colors',
    tag: 'Brand Identity',
    best: true
  },
  {
    src: 'brand identity/saga-ratna/saga-ratna02.jpg',
    dest: 'brand-identity/saga-ratna/sagar-ratna-brandmark-anatomy-vaman-cloche.webp',
    title: 'Sagar Ratna: Brandmark Anatomy — Vaman Umbrella & Dining Cloche',
    client: 'Sagar Ratna',
    category: 'branding-design',
    categoryLabel: 'Logo Symbol Anatomy & Geometry',
    year: '2024',
    medium: 'Geometric vector construction grid & cultural iconography',
    dimensions: 'Logomark Mathematical Construction Grid',
    description: 'In-depth breakdown of the new Sagar Ratna symbol combining Lord Vamana\'s auspicious parasol (Chhatri), the gourmet dining cloche, and the steaming idli silhouette.',
    alt: 'Geometric vector diagram showing the construction of Sagar Ratna logo symbol combining dining cloche and royal umbrella',
    tag: 'Logo Design',
    best: true
  },
  {
    src: 'brand identity/saga-ratna/saga-ratna03.jpg',
    dest: 'brand-identity/saga-ratna/sagar-ratna-color-palette-typography-system.webp',
    title: 'Sagar Ratna: Color Hierarchy & Devanagari-Latin Type System',
    client: 'Sagar Ratna',
    category: 'branding-design',
    categoryLabel: 'Color Palette & Typography Manual',
    year: '2024',
    medium: 'Pantone specification sheet and bilingual typographic pairings',
    dimensions: 'Color & Typography Standard Specification Sheet',
    description: 'Standardized brand palette comprising Forest Banana-Leaf Green (#0E4D13), Golden Turmeric Marigold (#F3AB1B), and Warm Dosa Cream (#FFDCA6) with bilingual type hierarchy.',
    alt: 'Sagar Ratna brand color swatch cards in deep green, golden yellow, cream, and typography specimens',
    tag: 'Brand Standards',
    best: false
  },
  {
    src: 'brand identity/saga-ratna/saga-ratna04.jpg',
    dest: 'brand-identity/saga-ratna/sagar-ratna-restaurant-stationery-business-cards.webp',
    title: 'Sagar Ratna: Corporate Stationery & Fine Dining Touchpoints',
    client: 'Sagar Ratna Hospitality',
    category: 'branding-design',
    categoryLabel: 'Corporate Stationery & Print Collateral',
    year: '2024',
    medium: 'Hot-foil stamping and premium cotton paper collateral',
    dimensions: 'Business Card Suite, Letterheads & Envelopes',
    description: 'Refined executive stationery suite featuring gold-embossed brandmark on textured forest-green cotton paper with brass edge guilding.',
    alt: 'Sagar Ratna corporate stationery suite with embossed green business cards and gold foil letterheads',
    tag: 'Stationery Suite',
    best: false
  },
  {
    src: 'brand identity/saga-ratna/saga-ratna05.jpg',
    dest: 'brand-identity/saga-ratna/sagar-ratna-takeaway-packaging-butter-paper.webp',
    title: 'Sagar Ratna: Eco Takeaway Packaging & Custom Butter Paper Wraps',
    client: 'Sagar Ratna',
    category: 'branding-design',
    categoryLabel: 'Food Packaging & Delivery Collateral',
    year: '2024',
    medium: 'Food-grade soy ink on greaseproof unbleached craft paper',
    dimensions: 'Takeaway Carry Bags, Chutney Pods & Dosa Wraps',
    description: 'Sustainable restaurant packaging suite featuring custom illustrated patterns of curry leaves, mustard seeds, and tiffin boxes printed with food-safe botanical ink.',
    alt: 'Sagar Ratna eco delivery packaging boxes, kraft paper bags, and patterned food wrapping paper',
    tag: 'Food Packaging',
    best: true
  },

  // TAG Heuer Devanagari Concept (4 files)
  {
    src: 'brand identity/tag-heuer/tag-heuer1.jpg',
    dest: 'brand-identity/tag-heuer/tag-heuer-devanagari-wordmark-presentation.webp',
    title: 'TAG Heuer: Devanagari Luxury Wordmark System',
    client: 'TAG Heuer (Luxury Brand Localization)',
    category: 'branding-design',
    categoryLabel: 'Multilingual Brand Localization & Typography',
    year: '2024',
    medium: 'Custom precision Devanagari type design and brand architecture',
    dimensions: 'Corporate Identity Monograph (A3 Presentation)',
    description: 'Pioneering typographic adaptation of the iconic Swiss avant-garde horology brand TAG Heuer into Devanagari script (\'टॅग ह्यूअर\'), matching the exact angle, stroke weight, and industrial geometry of the original mark.',
    alt: 'TAG Heuer luxury brandmark re-imagined in bold Devanagari script with iconic green and red shield',
    tag: 'Typography & Localization',
    best: true
  },
  {
    src: 'brand identity/tag-heuer/tag-heuer2.jpg',
    dest: 'brand-identity/tag-heuer/tag-heuer-devanagari-grid-anatomy-shirorekha.webp',
    title: 'TAG Heuer: Typographic Grid Anatomy — Shirorekha & Padrekha',
    client: 'TAG Heuer',
    category: 'branding-design',
    categoryLabel: 'Typographic Engineering & Grid System',
    year: '2024',
    medium: 'Mathematical glyph drafting and baseline vector construction',
    dimensions: 'Typographic Vector Grid Layout',
    description: 'Exact geometric construction of the Devanagari glyphs along Shirorekha (headline), Padrekha (baseline), and Talrekha, preserving the signature diagonal cuts of the Swiss Heuer chevron.',
    alt: 'Typographic blueprint grid showing exact geometric lines constructing the Devanagari letters for TAG Heuer',
    tag: 'Glyph Drafting',
    best: true
  },
  {
    src: 'brand identity/tag-heuer/tag-heuer3.jpg',
    dest: 'brand-identity/tag-heuer/tag-heuer-shield-devanagari-heuer-crest.webp',
    title: 'TAG Heuer: Devanagari Heuer Shield Crest & Optical Balance',
    client: 'TAG Heuer',
    category: 'branding-design',
    categoryLabel: 'Emblem Localization & Shield Geometry',
    year: '2024',
    medium: 'Vector crest design and chromatic balance testing',
    dimensions: 'Emblem Proportions Guide (50cm × 50cm)',
    description: 'Adaptation of the iconic lower five-sided Heuer shield containing the Devanagari \'ह्यूअर\' character string, engineered to maintain optical balance alongside the upper TAG rectangle.',
    alt: 'TAG Heuer shield logo featuring Devanagari lettering inside the bottom half with red and green heritage colors',
    tag: 'Emblem Design',
    best: false
  },
  {
    src: 'brand identity/tag-heuer/tag-heuer4.jpg',
    dest: 'brand-identity/tag-heuer/tag-heuer-luxury-dial-application-render.webp',
    title: 'TAG Heuer: Carrera Chronograph Dial Application Render',
    client: 'TAG Heuer',
    category: 'branding-design',
    categoryLabel: 'Product Application & Luxury Mockup',
    year: '2024',
    medium: '3D luxury product rendering and dial typography mockup',
    dimensions: 'Watch Dial Macro Render (44mm Chronograph Spec)',
    description: 'Macro render of the Carrera Calibre chronograph watch dial showcasing the Devanagari TAG Heuer insignia precision-printed on sunburst anthracite brushed steel dial.',
    alt: 'Luxury TAG Heuer chronograph watch face with Devanagari logo on brushed steel dial',
    tag: 'Luxury Render',
    best: true
  },

  // WWF Campaign (3 files)
  {
    src: 'campaign/wwf-campaign/wwf-1.jpg',
    dest: 'campaigns/wwf/wwf-rhino-horn-poaching-child-print-ad.webp',
    title: 'WWF Anti-Poaching: The Torn Horn — Our Children\'s Future',
    client: 'World Wildlife Fund (WWF India)',
    category: 'branding-design',
    categoryLabel: 'Global Advocacy & Conservation Campaign',
    year: '2024',
    medium: 'Studio conceptual photography and hard-hitting headline copy',
    dimensions: 'Double Page Print & Poster (594mm × 420mm)',
    description: 'Emotional print advocacy campaign showing an innocent young girl clutching a mutilated plush rhinoceros whose horn has been violently torn off, with the message: "Our children\'s future matters. What about theirs?".',
    alt: 'WWF anti-poaching print ad showing little girl crying while holding a stuffed rhino toy with its horn ripped off',
    tag: 'Conservation Campaign',
    best: true
  },
  {
    src: 'campaign/wwf-campaign/wwf-2.jpg',
    dest: 'campaigns/wwf/wwf-elephant-tusk-ivory-boy-print-ad.webp',
    title: 'WWF Anti-Poaching: Severed Ivory — The Bleeding Toy',
    client: 'World Wildlife Fund',
    category: 'branding-design',
    categoryLabel: 'Global Advocacy & Conservation Campaign',
    year: '2024',
    medium: 'Fine art photographic composition and narrative lighting',
    dimensions: 'Double Page Print & Billboard (594mm × 420mm)',
    description: 'Hard-hitting anti-ivory print advertisement capturing a young boy cradling a plush elephant toy with jagged red seams where its tusks once were.',
    alt: 'WWF conservation ad featuring young boy holding plush elephant with torn tusks highlighting illegal ivory trade',
    tag: 'Conservation Campaign',
    best: true
  },
  {
    src: 'campaign/wwf-campaign/wwf-3.jpg',
    dest: 'campaigns/wwf/wwf-tiger-skin-stripes-advocacy-poster.webp',
    title: 'WWF Anti-Poaching: Stolen Stripes — Vanishing Royal Bengal Tiger',
    client: 'World Wildlife Fund',
    category: 'branding-design',
    categoryLabel: 'Global Advocacy & Conservation Campaign',
    year: '2024',
    medium: 'Photographic storytelling and environmental typography',
    dimensions: 'Double Page Print & Transit Shelter (594mm × 420mm)',
    description: 'Final installment of the anti-poaching trilogy depicting a child hugging a toy tiger that has been partially unstitched and skinned, driving urgent action against wildlife trafficking.',
    alt: 'WWF print ad depicting a child with a stuffed tiger toy missing patches of fur to highlight tiger poaching',
    tag: 'Conservation Campaign',
    best: true
  },

  // Logo Designs (1 file with 3 master systems)
  {
    src: 'logo designs/Logo-designing1.jpg',
    dest: 'logo-designs/master-identity-trilogy-typodday-tukaram-alumni.webp',
    title: 'Master Brandmark Trilogy: TYPODAY 2025, Sant Tukaram & JJ Alumni',
    client: 'Cultural Institutions & Academic Conferences',
    category: 'branding-design',
    categoryLabel: 'Cultural Logo Systems & Typographic Monograms',
    year: '2024',
    medium: 'Precision vector geometry and narrative typographic iconography',
    dimensions: 'Identity Systems Showcase Panel (36in × 24in)',
    description: 'Trilogy of celebrated logo marks: TYPODAY 2025 integrating cinema film strips with Hindi script; the Sant Tukaram Sansthan spiritual Veena monogram; and the Sir J.J. Applied Art Alumni cactus emblem.',
    alt: 'Three distinct studio logo designs displayed together including TypoDay cinema logo and spiritual monogram',
    tag: 'Brandmark System',
    best: true
  }
];

async function run() {
  console.log(`Starting conversion of ${fileMappings.length} images to WebP...`);
  
  for (const item of fileMappings) {
    const srcPath = path.join(BASE_DIR, item.src);
    const destPath = path.join(BASE_DIR, item.dest);
    
    if (!fs.existsSync(srcPath)) {
      console.error(`Source file not found: ${srcPath}`);
      continue;
    }
    
    const destDir = path.dirname(destPath);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    
    try {
      await sharp(srcPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(destPath);
      
      const srcStats = fs.statSync(srcPath);
      const destStats = fs.statSync(destPath);
      const reduction = Math.round((1 - destStats.size / srcStats.size) * 100);
      console.log(`✓ ${item.dest} (${Math.round(destStats.size / 1024)} KB, -${reduction}%)`);
    } catch (err) {
      console.error(`Error converting ${srcPath}:`, err.message);
    }
  }
  
  console.log('All images converted to WebP successfully!');
}

run();

