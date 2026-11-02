const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SOURCE_BASE = path.join(__dirname, '../client/src/assets/refer images');
const DEST_BASE = path.join(__dirname, '../client/public/portfolio');

// Specific mapping of all 64 files to clean, SEO-optimized WebP filenames with comprehensive metadata
const IMAGE_DEFINITIONS = {
  // 1. Portrait Painting & Sketching (6 files)
  'portrait painting and sketching': {
    outDir: 'portraits',
    files: {
      '8ba7a6a9-f50b-41e5-9408-6674398c00f5.jpg': {
        name: 'vibrant-crimson-woman-oil-portrait.webp',
        title: 'Luminescence in Crimson',
        medium: 'Fine art oil on stretched Belgian linen canvas',
        dimensions: '20in × 30in Stretched Canvas',
        year: '2025',
        caption: 'Vivid portrait study in oil on canvas featuring rich crimson backdrop, expressive light, and golden drape.',
        alt: 'Fine art oil portrait painting of a woman in yellow dress against a deep crimson background on canvas',
        category: 'custom-art',
        categoryLabel: 'Custom Portrait Commission',
        tag: 'Fine Art Oil',
        best: true
      },
      '0b92ca90-521f-4f62-8ee9-222dd12aa0c0.jpg': {
        name: 'elderly-couple-traditional-oil-portrait.webp',
        title: 'Elders in Heritage Splendor',
        medium: 'Oil and acrylic on primed Belgian linen canvas',
        dimensions: '24in × 36in Custom Stretched Canvas',
        year: '2025',
        caption: 'Traditional hand-painted Indian couple portrait celebrating heritage, lifelong companionship, and familial devotion.',
        alt: 'Hand-painted oil portrait of an Indian couple in traditional attire and saree on primed canvas',
        category: 'custom-art',
        categoryLabel: 'Custom Canvas Portrait',
        tag: 'Oil Canvas',
        best: true
      },
      '18469cb7-6840-4338-b827-2e324780f3de.jpg': {
        name: 'monochrome-charcoal-woman-montage.webp',
        title: 'Soul in Monochrome',
        medium: 'Graphite and compressed charcoal on archival 300gsm paper',
        dimensions: 'A2 (420mm × 594mm)',
        year: '2024',
        caption: 'Multi-perspective fine art portrait montage capturing subtle expressions, soft lighting, and botanical details.',
        alt: 'Detailed charcoal and graphite drawing montage of a woman with floral accents on archival paper',
        category: 'custom-art',
        categoryLabel: 'Pencil & Charcoal Study',
        tag: 'Charcoal',
        best: true
      },
      'fb4e5703-6f21-42c0-bdb2-bc7cbab2ac17.jpg': {
        name: 'bearded-man-studio-easel-portrait.webp',
        title: 'Contemplation on Easel',
        medium: 'Oil on canvas board',
        dimensions: '18in × 24in Studio Easel Study',
        year: '2025',
        caption: 'Studio atelier portrait of a bearded man with expressive brushwork and atmospheric ultramarine hues.',
        alt: 'Studio oil portrait painting of a man on easel with textured brushstrokes and blue background',
        category: 'custom-art',
        categoryLabel: 'Atelier Studio Portrait',
        tag: 'Studio Oil',
        best: false
      },
      '287316b9-33a6-49dc-905d-c20e296d59d7.jpg': {
        name: 'elder-gentleman-turban-oil-portrait.webp',
        title: 'Dignity in Feta',
        medium: 'Oil on primed canvas board',
        dimensions: '16in × 20in',
        year: '2024',
        caption: 'Character portrait of an elderly gentleman in a traditional golden-yellow feta (pagri) and kurta.',
        alt: 'Realistic oil portrait painting of an Indian elderly gentleman wearing a golden-yellow turban and glasses',
        category: 'custom-art',
        categoryLabel: 'Traditional Portrait',
        tag: 'Oil Portrait',
        best: false
      },
      'f13d5ea5-3674-4124-ab05-626185c494cd.jpg': {
        name: 'grandmother-graphite-pencil-sketch.webp',
        title: 'Veneration Matriarch Sketch',
        medium: 'Hard & soft graphite pencils on acid-free cartridge paper',
        dimensions: 'A3 (297mm × 420mm)',
        year: '2024',
        caption: 'Intimate graphite drawing of an Indian matriarch with delicate tonal graduation and lifelike depth.',
        alt: 'Fine graphite pencil sketch portrait of an Indian grandmother with bindi and saree pallu',
        category: 'custom-art',
        categoryLabel: 'Graphite Sketch',
        tag: 'Pencil Sketch',
        best: false
      }
    }
  },

  // 2. Wall Painting & Murals (4 files)
  'wall painting': {
    outDir: 'murals',
    files: {
      'WhatsApp Image 2026-10-24 at 12.00.44 AM (1).jpeg': {
        name: 'staircase-monstera-botanical-mural.webp',
        title: 'Botanical Ascent Staircase Mural',
        medium: 'Mineral pigments and acrylic emulsion on architectural interior wall',
        dimensions: '16ft × 20ft Architectural Staircase Elevation',
        year: '2026',
        caption: 'Custom contemporary botanical wall mural featuring monstera leaves, flowing palms, and warm terracotta forms along an interior staircase.',
        alt: 'Interior wall mural painting of tropical monstera leaves and warm terracotta shapes along a wooden staircase',
        category: 'murals-commercial-art',
        categoryLabel: 'Architectural Wall Mural',
        tag: 'Interior Mural',
        best: true
      },
      'WhatsApp Image 2026-10-24 at 12.00.44 AM (2).jpeg': {
        name: 'rural-village-landscape-panoramic-mural.webp',
        title: 'Echoes of the Countryside Panoramic Mural',
        medium: 'Weatherproof all-weather outdoor exterior acrylic on boundary wall',
        dimensions: '30ft × 8ft Exterior Boundary Wall',
        year: '2026',
        caption: 'Expansive scenic wall mural depicting serene village landscape, rolling hills, lush trees, and traditional rural homes.',
        alt: 'Panoramic outdoor wall mural of rural village cottages, green hills, and palm trees on a concrete boundary wall',
        category: 'murals-commercial-art',
        categoryLabel: 'Exterior Boundary Mural',
        tag: 'Outdoor Mural',
        best: true
      },
      'WhatsApp Image 2026-10-24 at 12.00.44 AM.jpeg': {
        name: 'botanical-mural-concept-design.webp',
        title: 'Botanical Symphony Concept Drafting',
        medium: 'Digital vector art direction and color elevation plan',
        dimensions: 'Full Architectural Scale Design',
        year: '2026',
        caption: 'Original art-directed layout and chromatic study for the staircase monstera mural installation.',
        alt: 'Digital concept design mockup of modern organic botanical monstera leaf mural in terracotta and sage',
        category: 'murals-commercial-art',
        categoryLabel: 'Mural Art Direction',
        tag: 'Concept Art',
        best: false
      },
      'WhatsApp Image 2026-10-24 at 12.00.43 AM.jpeg': {
        name: 'village-cottage-mural-detail.webp',
        title: 'Village Vignette Landscape Detail',
        medium: 'Textured outdoor wall acrylic emulsion',
        dimensions: 'Close-Up Elevation Study',
        year: '2026',
        caption: 'Intricate close-up section of the scenic boundary mural showcasing tree foliage, thatched roofs, and cottage textures.',
        alt: 'Close-up detail of outdoor wall mural showing painted trees, rural tiled-roof hut, and vibrant green field',
        category: 'murals-commercial-art',
        categoryLabel: 'Scenic Wall Painting',
        tag: 'Mural Detail',
        best: false
      }
    }
  },

  // 3. Web Designing Services (5 files)
  'web designing services': {
    outDir: 'web-design',
    files: {
      'Screenshot 2026-11-02 175759.png': {
        name: 'shikha-singh-luxury-model-portfolio.webp',
        title: 'Shikha Singh — High-Fashion Luxury Portfolio',
        medium: 'Full-stack responsive web development with editorial visual art direction',
        dimensions: 'Desktop & Mobile Responsive Experience',
        year: '2026',
        caption: 'Editorial digital portfolio for fashion model Shikha Singh with runway video hero, golden typography, and curated looks gallery.',
        alt: 'Luxury model portfolio website design for Shikha Singh featuring runway fashion photography and gold typography',
        category: 'website-development',
        categoryLabel: 'Luxury Portfolio Website',
        tag: 'Fashion Web',
        best: true
      },
      'techfest.png': {
        name: 'greek-automata-techfest-website.webp',
        title: 'Greek Automata — College Techfest Platform',
        medium: 'Dark cybernetic web design, event schedule, and team registration system',
        dimensions: 'Interactive Event Platform',
        year: '2025',
        caption: 'High-energy college festival portal featuring glowing circuit graphics, department event registries, and dynamic schedules.',
        alt: 'Dark modern tech festival website design for Greek Automata at SPDT College with glowing microchip graphics',
        category: 'website-development',
        categoryLabel: 'Event & Festival Platform',
        tag: 'Event Web',
        best: true
      },
      'food.png': {
        name: 'the-nadeems-gourmet-ordering-web.webp',
        title: 'The Nadeems — Gourmet Dining & Food Delivery',
        medium: 'Ecommerce food ordering web app, interactive digital menu, and cart engine',
        dimensions: 'Ecommerce Web Application',
        year: '2025',
        caption: 'Bespoke restaurant website with fluid online food ordering, culinary storytelling, dish exploration, and mobile app links.',
        alt: 'Gourmet restaurant website design for The Nadeems with online food ordering and culinary storytelling',
        category: 'website-development',
        categoryLabel: 'Restaurant & Ecommerce Web',
        tag: 'Ecommerce',
        best: true
      },
      'kaba.png': {
        name: 'mirza-hajj-umrah-travel-portal.webp',
        title: 'Mirza Hajj & Umrah — Sacred Pilgrimage Portal',
        medium: 'Travel and pilgrimage booking platform with package itineraries and inquiry workflow',
        dimensions: 'Corporate Travel Portal',
        year: '2025',
        caption: 'Trusted tour agency web portal for Makkah & Madina pilgrimage packages with direct customer inquiry automation.',
        alt: 'Travel agency website design for Mirza Hajj and Umrah featuring sacred Kaaba imagery and tour package booking',
        category: 'website-development',
        categoryLabel: 'Travel & Agency Portal',
        tag: 'Travel Web',
        best: false
      },
      'ahproperties.png': {
        name: 'ah-properties-real-estate-portal.webp',
        title: 'A.H Properties — Commercial & Residential Real Estate',
        medium: 'Property catalog website with direct WhatsApp lead routing and inquiries',
        dimensions: 'Business Real Estate Portal',
        year: '2025',
        caption: 'Commercial & residential real estate agency portal designed for rapid property search, project highlights, and lead conversions.',
        alt: 'Real estate company website design for A.H Properties showing luxury hotel suites and property listings',
        category: 'website-development',
        categoryLabel: 'Real Estate Business Website',
        tag: 'Real Estate',
        best: false
      }
    }
  },

  // 4. Glass Painting (8 files)
  'glass painting': {
    outDir: 'glass-painting',
    files: {
      '08803f07-5266-49e9-ab25-a89d73a970a0.jpg': {
        name: 'holiday-reindeer-christmas-window-painting.webp',
        title: 'Noël Woodland Holiday Window Display',
        medium: 'Pebeo opaque vitrail and acrylic enamel on commercial entrance glass',
        dimensions: '8ft × 9ft Commercial Storefront Double Glass Door',
        year: '2025',
        caption: 'Hand-painted festive window display featuring graceful reindeer stags, ornate Christmas tree, and cascading snowfall.',
        alt: 'Hand-painted Christmas window art on glass entrance featuring white reindeer stags, Christmas tree, and snow',
        category: 'murals-commercial-art',
        categoryLabel: 'Storefront Glass Painting',
        tag: 'Glass Art',
        best: true
      },
      'b98eaba4-3da6-48b7-b3e4-300b292ffd7d.jpg': {
        name: 'merry-christmas-botanical-wreath-glass.webp',
        title: 'Merry Christmas Botanical Glass Wreath',
        medium: 'Hand-painted white enamel on architectural glass facade',
        dimensions: '7ft × 10ft Double Door Glass Facade',
        year: '2025',
        caption: 'Grand circular holiday wreath with calligraphic Merry Christmas lettering hand-painted on glass double doors.',
        alt: 'Hand-painted Merry Christmas botanical wreath with calligraphy on glass entrance doors of luxury boutique',
        category: 'murals-commercial-art',
        categoryLabel: 'Holiday Glass Lettering',
        tag: 'Glass Calligraphy',
        best: true
      },
      'd1d32cf9-2c27-4f41-b570-28d827f34e49.jpg': {
        name: 'ganesh-chaturthi-showroom-glass-painting.webp',
        title: 'Lord Ganesha Festive Showroom Glass Installation',
        medium: 'Vibrant vitrail enamel paints on automotive showroom glass facade',
        dimensions: '20ft × 10ft Multi-Pane Commercial Glass Facade',
        year: '2025',
        caption: 'Monumental hand-painted Ganesh Chaturthi artwork featuring Lord Ganesha, Dhol Tasha, and Tutari musicians for showroom glass.',
        alt: 'Hand-painted Lord Ganesha festival artwork on glass showroom facade with traditional Indian musicians and dhol',
        category: 'murals-commercial-art',
        categoryLabel: 'Commercial Showroom Glass Art',
        tag: 'Festive Glass',
        best: true
      },
      '1bdc63a0-f663-42dd-bd31-25972f312304.jpg': {
        name: 'santa-on-chopper-motorcycle-glass-painting.webp',
        title: 'Santa on Chopper: Festive Cafe Glass Painting',
        medium: 'Opaque vitrail glass paints and gloss enamel on cafe window',
        dimensions: '6ft × 8ft High-Street Cafe Glass Facade',
        year: '2025',
        caption: 'Whimsical Christmas glass artwork depicting Santa Claus riding a custom red chopper motorcycle under hanging cafe lanterns.',
        alt: 'Hand-painted Christmas cafe window art showing Santa Claus riding a red chopper motorcycle with stars and hanging lights',
        category: 'murals-commercial-art',
        categoryLabel: 'Whimsical Holiday Glass Art',
        tag: 'Cafe Glass',
        best: true
      },
      '77ecda6d-7295-4911-8893-8fb2a0fb5f4e.jpg': {
        name: 'lord-ganesha-entrance-glass-painting.webp',
        title: 'Lord Ganesha Auspicious Entrance Glass Art',
        medium: 'Translucent vitrail glass stains and opaque acrylic enamel',
        dimensions: '5ft × 8ft Glass Entrance Installation',
        year: '2024',
        caption: 'Hand-painted deity artwork of Lord Ganesha in warm saffron tones, red dhoti, mushak vahan, and hibiscus flower on glass entry.',
        alt: 'Hand-painted glass painting of Lord Ganesha in saffron and red with his mouse on a glass entrance door',
        category: 'murals-commercial-art',
        categoryLabel: 'Auspicious Glass Art',
        tag: 'Glass Deity Art',
        best: false
      },
      'd16d1a82-d1bb-4100-8d6f-41293f2b31e8.jpg': {
        name: 'christmas-gift-boxes-cafe-window-display.webp',
        title: 'Holiday Present Stacks & Ornaments Window Art',
        medium: 'Clean white and festive crimson glass enamels',
        dimensions: '6ft × 8ft Bistro Streetview Window',
        year: '2025',
        caption: 'Minimalist festive window installation showcasing crisp red ribbon gift packages, suspended baubles, and night starlight.',
        alt: 'Restaurant window painted with red and white Christmas gift boxes, stars, and hanging baubles',
        category: 'murals-commercial-art',
        categoryLabel: 'Holiday Window Display',
        tag: 'Bistro Window',
        best: false
      },
      '79753298-82b6-4c2f-ad24-54aaa8824883.jpg': {
        name: 'diwali-front-desk-glass-diyas.webp',
        title: 'Diwali Welcome Glass Art Installation',
        medium: 'Vitrail glass paints and fine brushwork',
        dimensions: '8ft × 7ft Reception Glass Entrance',
        year: '2024',
        caption: 'Warm festive front desk greeting featuring Happy Diwali calligraphy, floating lanterns, and glowing diyas.',
        alt: 'Happy Diwali greeting and traditional glowing diyas hand-painted on office reception glass entrance doors',
        category: 'murals-commercial-art',
        categoryLabel: 'Corporate Glass Art',
        tag: 'Festive Glass',
        best: false
      },
      '069ed6cc-755d-48de-9427-00dc5f92a786.jpg': {
        name: 'cafe-bistro-reindeer-night-window.webp',
        title: 'Starlight Reindeer Window Art',
        medium: 'White glass paint on cafe storefront',
        dimensions: '4ft × 6ft Streetview Window',
        year: '2025',
        caption: 'Charming silhouette of a reindeer with stars and awning details painted on cafe window for winter season.',
        alt: 'Silhouette of reindeer with stars painted on a cafe storefront window with city lights in background',
        category: 'murals-commercial-art',
        categoryLabel: 'Bistro Window Painting',
        tag: 'Window Art',
        best: false
      }
    }
  },

  // 5. Stage Design & Set Fabrication (5 files)
  'stage design': {
    outDir: 'stage-design',
    files: {
      'a0c242cb-222e-4513-ac86-4f3955fad4c8.jpg': {
        name: 'sir-jj-applied-art-winged-stage-finished.webp',
        title: '88th Annual Exhibition Monumental Sculptural Stage',
        medium: 'Engineered timber framework, sculptural foam wings, fluted acoustic arches, and plaster finish',
        dimensions: '40ft × 20ft Architectural Outdoor Stage',
        year: '2025',
        caption: 'Grand theatrical stage backdrop sculpted for Sir J.J. Institute of Applied Art 88th Annual Exhibition, Mumbai.',
        alt: 'Monumental architectural stage design with sculpted angel wings and fluted arches at Sir J.J. Institute of Applied Art',
        category: 'murals-commercial-art',
        categoryLabel: 'Theatrical Stage & Set Design',
        tag: 'Stage Set',
        best: true
      },
      '82652d07-d4c8-40a6-ab2f-7eac140e9064.jpg': {
        name: 'sir-jj-applied-art-stage-color-render.webp',
        title: '88th Exhibition Stage Chromatic Concept Rendering',
        medium: 'Digital 3D rendering and thematic color study',
        dimensions: '1920 × 1080 Design Master',
        year: '2025',
        caption: 'Thematic color rendering showcasing teal geometric facets, metallic gold soundwaves, and heritage insignia.',
        alt: 'Color concept rendering of the Sir J.J. Institute 88th annual exhibition stage with teal facets and gold accents',
        category: 'murals-commercial-art',
        categoryLabel: 'Stage Art Direction & 3D Render',
        tag: '3D Render',
        best: true
      },
      'cfedf632-4349-4e1e-8bb8-46f7491903a4.jpg': {
        name: 'sir-jj-applied-art-stage-grid-drafting.webp',
        title: 'Stage Engineering Grid & Dimension Blueprint',
        medium: 'Architectural grid drawing and structural module plan',
        dimensions: 'Full Metric Grid Specification',
        year: '2025',
        caption: 'Precision mathematical grid drafting detailing wing curvature, acoustic concentric circles, and hexagon tessellations.',
        alt: 'Architectural grid blueprint and drafting for the 40-foot sculpted stage design showing measurements and modules',
        category: 'murals-commercial-art',
        categoryLabel: 'Stage Architectural Drafting',
        tag: 'Blueprint',
        best: false
      },
      'b1e7cd38-b81d-4088-832d-1fed95b1f298.jpg': {
        name: 'sir-jj-applied-art-stage-wing-fabrication.webp',
        title: 'Sculptural Wing On-Site Construction & Finishing',
        medium: 'Carpentry framing, foam sculpting, and pneumatic plaster spray',
        dimensions: 'Work-In-Progress Installation',
        year: '2025',
        caption: 'Atelier artisans shaping and finishing the curved acoustic fins and wing elements on heavy structural scaffolding.',
        alt: 'Artisans fabricating large sculptural stage wings on scaffolding during on-site festival installation',
        category: 'murals-commercial-art',
        categoryLabel: 'Set Fabrication & Production',
        tag: 'Fabrication',
        best: false
      },
      'cb4f0b35-8014-442d-85db-da63c2d3b588.jpg': {
        name: 'sir-jj-applied-art-stage-carpentry-framework.webp',
        title: 'Structural Timber Sub-Framing & Assembly',
        medium: 'Heavy ply timber framing and steel scaffolding rig',
        dimensions: 'Structural Stage Elevation',
        year: '2025',
        caption: 'Early structural phase showing engineered wood formwork and foundation platform prior to surface sculpting.',
        alt: 'Timber carpentry framing and structural formwork of the festival stage platform under mature canopy trees',
        category: 'murals-commercial-art',
        categoryLabel: 'Structural Carpentry',
        tag: 'Carpentry',
        best: false
      }
    }
  },

  // 6. Calligraphy & Hand-Lettering (9 files)
  'calligraphy': {
    outDir: 'calligraphy',
    files: {
      '01df2ee8-7522-4662-97a5-b0b09ad1ff8b.jpg': {
        name: 'gulzar-poetry-spiral-devanagari-calligraphy.webp',
        title: 'Gulzar: "Waqt" Devanagari Spiral Calligraphy',
        medium: 'Traditional chisel-edge nib and vermilion shellac ink on cotton paper',
        dimensions: '18in × 18in Circular Composition',
        year: '2025',
        caption: 'Continuous yin-yang spiral calligraphy of Gulzar’s timeless poem on time ("Waqt ko aate na jaate dekha").',
        alt: 'Circular Devanagari calligraphy artwork of Gulzar poetry written in a continuous yin-yang spiral in red ink',
        category: 'custom-art',
        categoryLabel: 'Devanagari Calligraphy Art',
        tag: 'Calligraphy',
        best: true
      },
      'e06d706b-0095-43f2-80cf-c844690932a0.jpg': {
        name: 'koshish-harivansh-rai-bachchan-calligraphy.webp',
        title: 'Harivansh Rai Bachchan: "Koshish" Calligraphy & Illustration',
        medium: 'Two-tone ochre & cyan calligraphic ink with fine contour mountaineer illustration on 300gsm sheet',
        dimensions: 'A2 (420mm × 594mm)',
        year: '2025',
        caption: 'Inspirational calligraphic tribute to Dr. Harivansh Rai Bachchan\'s "Koshish Karne Walon Ki Kabhi Haar Nahi Hoti" with mountain climber ascending from ocean swells.',
        alt: 'Devanagari calligraphy of poem Koshish by Harivansh Rai Bachchan with illustrated mountain climber scaling a rope from blue waves',
        category: 'custom-art',
        categoryLabel: 'Illustrated Calligraphy Masterpiece',
        tag: 'Devanagari Art',
        best: true
      },
      '0bcb06e7-8495-43cd-b718-96983b546b3d.jpg': {
        name: 'shakespeare-sonnet-circular-calligraphy.webp',
        title: 'Shakespeare: "Time Waste" Concentric Calligraphy',
        medium: 'English Uncial lettering in two-tone walnut ochre and vermilion ink',
        dimensions: '16in × 16in Concentric Layout',
        year: '2025',
        caption: 'Concentric circular English calligraphy rendering William Shakespeare’s reflection on wasted time.',
        alt: 'Concentric circular English calligraphy artwork of Shakespeare quote written in ochre and red ink',
        category: 'custom-art',
        categoryLabel: 'English Uncial Calligraphy',
        tag: 'Calligraphy',
        best: true
      },
      '330f075e-2cca-455d-a699-3f9b13f52ddb.jpg': {
        name: 'gulzar-bosky-poem-devanagari-calligraphy.webp',
        title: 'Gulzar: "Bosky" Poetic Calligraphic Manuscript',
        medium: 'Broad edge calligraphy pen with cobalt blue and emerald green inks',
        dimensions: 'A3 (297mm × 420mm)',
        year: '2025',
        caption: 'Full-verse calligraphic rendering of Gulzar’s poem celebrating his daughter Bosky with ornate flourish lettering.',
        alt: 'Devanagari calligraphy sheet of Gulzar poem Bosky written in deep blue ink with emerald signature flourish',
        category: 'custom-art',
        categoryLabel: 'Literary Calligraphy',
        tag: 'Manuscript Art',
        best: true
      },
      '40cd45b2-adb4-4c3d-9826-f7af480205e5.jpg': {
        name: 'marathi-devanagari-ganpati-watercolor-calligraphy.webp',
        title: 'Marathi Poetic Calligraphy on Teal Watercolor Wash',
        medium: 'Custom Devanagari broad pen with copper ink over watercolor sky wash',
        dimensions: 'A3 (297mm × 420mm)',
        year: '2024',
        caption: 'Expressive Marathi poetic verses hand-lettered with copper ink over an atmospheric emerald-teal watercolor wash.',
        alt: 'Marathi poem written in elegant Devanagari calligraphy with red ink on a teal-emerald watercolor background',
        category: 'custom-art',
        categoryLabel: 'Marathi Calligraphy & Watercolor',
        tag: 'Poetic Calligraphy',
        best: true
      },
      '9cc9bf70-a3de-4a5b-9c32-455e65f00606.jpg': {
        name: 'swatantryotsav-monumental-calligraphy-board.webp',
        title: 'Swatantryotsav: Monumental Calligraphy Exhibition Board',
        medium: 'Hand-lettered acrylic calligraphy on sponge-textured ochre panel',
        dimensions: '4ft × 7ft Freestanding Heritage Display Board',
        year: '2024',
        caption: 'Monumental calligraphic display board honoring India\'s 76th Independence Day in Devanagari script at heritage campus.',
        alt: 'Large freestanding wooden board hand-painted with Marathi poem for Swatantryotsav in front of stone heritage building',
        category: 'murals-commercial-art',
        categoryLabel: 'Monumental Calligraphy Signage',
        tag: 'Exhibition Board',
        best: false
      },
      '87fbf96e-8d8d-4c17-aa6b-b5ab1e1f77f2.jpg': {
        name: 'circular-marathi-calligraphy-sun-mandala.webp',
        title: 'Sun Mandala: Radiating Marathi Calligraphy Study',
        medium: 'Saffron calligraphy ink and watercolor wash on archival paper',
        dimensions: 'A3 (297mm × 420mm)',
        year: '2024',
        caption: 'Concentric radial Marathi verse study celebrating traditional ink preparation and pigments ("Sangrah Masiche").',
        alt: 'Radial circular Devanagari calligraphy artwork spiraling outward from a yellow watercolor sun core',
        category: 'custom-art',
        categoryLabel: 'Concentric Mandala Calligraphy',
        tag: 'Mandala Calligraphy',
        best: false
      },
      '17910139-6a47-4de4-ac8c-670700d1d786.jpg': {
        name: 'gita-and-quran-harmony-devanagari-calligraphy.webp',
        title: 'Unity in Words: Gita & Quran Calligraphic Harmony',
        medium: 'Emerald brush lettering with fluid saffron sweeping ribbon on cartridge paper',
        dimensions: 'A3 (297mm × 420mm)',
        year: '2024',
        caption: 'Poignant couplet on religious harmony and reading sacred scriptures, rendered in green ink with sweeping saffron arc.',
        alt: 'Calligraphy of Hindi poem on Gita and Quran in green ink alongside a curved saffron watercolor brushstroke',
        category: 'custom-art',
        categoryLabel: 'Philosophical Calligraphy',
        tag: 'Calligraphic Verse',
        best: false
      },
      'f4c6751b-b10f-4532-af98-7996dd3529aa.jpg': {
        name: 'dnyaneshwari-devotional-marathi-calligraphy.webp',
        title: 'Sant Dnyaneshwar: Dnyaneshwari Ovi Calligraphy',
        medium: 'Traditional chisel nib in walnut brown ink with twin vermilion sun seals',
        dimensions: 'A3 (297mm × 420mm)',
        year: '2024',
        caption: 'Devotional calligraphy of sacred Sant Dnyaneshwar ovi praising wisdom and pilgrimage ("Vachavi Dnyaneshwari").',
        alt: 'Devanagari calligraphy of Sant Dnyaneshwar verse in walnut brown ink with circular red stamps at top and bottom',
        category: 'custom-art',
        categoryLabel: 'Devotional Scripture Calligraphy',
        tag: 'Scripture Art',
        best: false
      }
    }
  },

  // 7. Event Installation & Sculptures (4 files)
  'event installation': {
    outDir: 'installations',
    files: {
      '67268b34-6e91-415b-9f5c-5b5c706be6d1.jpg': {
        name: 'independence-day-76th-mixed-media-installation.webp',
        title: '76th Swatantrya Din Assemblage Art Installation',
        medium: 'Vintage newspaper archival collage, 3D bas-relief Ashoka pillar, and undulating tricolour ribbon',
        dimensions: '6ft × 4ft Exhibition Easel Installation',
        year: '2024',
        caption: 'Commemorative national installation blending historic journalism, gold bas-relief sculpture, and dimensional flag ribbon.',
        alt: '3D commemorative art installation for India 76th Independence Day with Ashoka pillar sculpture and newspaper collage',
        category: 'murals-commercial-art',
        categoryLabel: '3D Commemorative Installation',
        tag: 'Installation',
        best: true
      },
      'ca5a0b07-e9d7-49eb-8b16-19d9c35b0628.jpg': {
        name: 'flight-of-peace-paper-doves-sculpture.webp',
        title: 'Flight of Peace: Dimensional Paper Sculpture',
        medium: 'Hand-formed cotton rag 3D paper doves on sunburst orange deckle-edge handmade paper',
        dimensions: '2ft × 5ft Entrance Pillar Installation',
        year: '2025',
        caption: 'Three-dimensional sculpted paper white doves taking flight from flowering branches on textured orange substrate.',
        alt: '3D paper craft sculpture of white doves perched on branches mounted on textured orange handmade paper',
        category: 'art-products',
        categoryLabel: 'Sculptural Paper Installation',
        tag: 'Paper Sculpture',
        best: true
      },
      'ffc84c9b-f347-4125-85e8-6dca8816088c.jpg': {
        name: 'creative-tree-of-knowledge-sculpture.webp',
        title: 'The Creative Tree of Knowledge Kinetic Sculpture',
        medium: 'Pipe armature, sculpted mixed media, origami elements, and sapphire display plinth',
        dimensions: '4ft Free-Standing Kinetic Sculpture',
        year: '2025',
        caption: 'Dimensional sculpture embodying the growth of creative disciplines: camera, typography, paint brush, and origami.',
        alt: 'Freestanding colorful artistic tree sculpture featuring branches with camera, typography letters, and art tools',
        category: 'art-products',
        categoryLabel: 'Dimensional Art Sculpture',
        tag: 'Sculpture',
        best: true
      },
      '892713ed-4d85-4b5c-bd0d-5209549d2e87.jpg': {
        name: 'tree-of-knowledge-blueprint-drawing.webp',
        title: 'Tree of Knowledge Architectural Blueprint Study',
        medium: 'Colored pencil, technical ink drafting, and dimensional annotations',
        dimensions: '18in × 24in Engineering Study',
        year: '2025',
        caption: 'Detailed structural design drawing with precise branch lengths and pipe dimensions for the creative tree installation.',
        alt: 'Colored technical blueprint drawing of the Tree of Knowledge sculpture with dimension measurements and annotations',
        category: 'art-products',
        categoryLabel: 'Sculptural Engineering Drafting',
        tag: 'Blueprint Study',
        best: false
      }
    }
  },

  // 8. Caricature & Live Art (10 files)
  'caricature': {
    outDir: 'caricature',
    files: {
      '2c155fce-f470-4988-94f0-65c187eb0fa0.jpg': {
        name: 'live-family-caricature-portrait.webp',
        title: 'Family in Harmony: Live Event Caricature',
        medium: 'Live watercolor and archival ink on hot-press watercolor paper',
        dimensions: 'A3 (297mm × 420mm)',
        year: '2025',
        caption: 'Handcrafted live event family caricature portrait completed in 15 minutes during an interactive studio showcase.',
        alt: 'Family holding their live custom watercolor caricature portrait painted on-site by HUNAR studio artist',
        category: 'custom-art',
        categoryLabel: 'Live Event Caricature',
        tag: 'Live Caricature',
        best: true
      },
      'a25f18e7-59de-4d70-afa5-9adf750c7b47.jpg': {
        name: 'young-girl-live-watercolor-portrait-booth.webp',
        title: 'Radiant Smiles: Live Caricature Booth Showcase',
        medium: 'Live watercolor portrait and Japanese sumi ink on archival paper',
        dimensions: 'A4 (210mm × 297mm)',
        year: '2025',
        caption: 'Delighted young guest proudly holding her custom live watercolor portrait at the HUNAR studio live caricature pavilion.',
        alt: 'Young girl holding her finished live watercolor caricature portrait in front of studio exhibition booth',
        category: 'custom-art',
        categoryLabel: 'Live Event Guest Portrait',
        tag: 'Studio Event',
        best: true
      },
      '08a53073-0cb1-4d0d-9da1-0591c23d1cb9.jpg': {
        name: 'live-event-boy-caricature.webp',
        title: 'Youthful Gaze: Live Watercolor Caricature',
        medium: 'Watercolor wash and fine dip-pen ink on cold-press paper',
        dimensions: 'A4 (210mm × 297mm)',
        year: '2025',
        caption: 'Live guest caricature portrait capturing personality with energetic linework and gentle watercolor glazes.',
        alt: 'Young boy with glasses happily holding his live watercolor and ink caricature portrait at an event',
        category: 'custom-art',
        categoryLabel: 'Live Event Portrait',
        tag: 'Caricature',
        best: true
      },
      '85316e96-16a3-4813-8b23-cadd686190d1.jpg': {
        name: 'pigtail-girl-watercolor-portrait-sketch.webp',
        title: 'Innocence: Warm Watercolor Portrait Study',
        medium: 'Watercolor washes and sepia ink contouring on Fabriano paper',
        dimensions: 'A4 (210mm × 297mm)',
        year: '2025',
        caption: 'Delicate live watercolor portrait capturing childhood innocence with warm sunlit background glazes and soft tones.',
        alt: 'Watercolor portrait sketch of a young girl with pigtails in a blue shirt with soft yellow halo background',
        category: 'custom-art',
        categoryLabel: 'Live Watercolor Study',
        tag: 'Watercolor Portrait',
        best: true
      },
      '4f3b9e09-9be7-4bce-9ab0-bb1b8493bf40.jpg': {
        name: 'sarvesh-live-caricature-event-drawing.webp',
        title: 'Sarvesh: Live Event Ink Caricature on Clipboard',
        medium: 'Expressive brush pen and waterproof black ink on heavyweight drawing paper',
        dimensions: 'A4 (210mm × 297mm)',
        year: '2025',
        caption: 'High-speed live guest caricature featuring bold stylized glasses and calligraphic name signature.',
        alt: 'Live ink caricature of smiling boy with glasses named Sarvesh displayed on an artist clipboard with guest behind',
        category: 'custom-art',
        categoryLabel: 'Live Speed Caricature',
        tag: 'Brush Ink',
        best: false
      },
      'e656399e-987c-4f3b-b269-b31199fa5be0.jpg': {
        name: 'amruta-saree-portrait-caricature.webp',
        title: 'Amruta: Festive Saree Caricature with Heart Accents',
        medium: 'Tonal graphite shading, bold black brush ink, and vibrant crimson markers',
        dimensions: 'A4 (210mm × 297mm)',
        year: '2025',
        caption: 'Expressive tribute caricature of an Indian woman in saree with radiant yellow rim glow and playful crimson hearts.',
        alt: 'Caricature drawing of a woman named Amruta wearing saree with bindi, yellow outline, and painted red hearts',
        category: 'custom-art',
        categoryLabel: 'Custom Milestone Caricature',
        tag: 'Gift Caricature',
        best: false
      },
      'f2968e9a-cb6e-4984-b87c-d3e602023178.jpg': {
        name: 'tushar-watercolor-caricature-portrait.webp',
        title: 'Tushar: Warm Watercolor & Plaid Shirt Caricature',
        medium: 'Warm skin tone watercolors, micron pen hatching, and geometric red border',
        dimensions: 'A4 (210mm × 297mm)',
        year: '2025',
        caption: 'Friendly character caricature of a gentleman in checkered shirt framed by minimalist red geometric accent lines.',
        alt: 'Color watercolor caricature portrait of smiling man with mustache named Tushar in a plaid shirt',
        category: 'custom-art',
        categoryLabel: 'Executive & Gift Caricature',
        tag: 'Color Caricature',
        best: false
      },
      'ca1ecf39-91d3-41ba-bf9b-cb9e8a5bd705.jpg': {
        name: 'young-boy-orange-shirt-watercolor-portrait.webp',
        title: 'Gentle Soul: Watercolor Character Study',
        medium: 'Transparent watercolor washes on cold-pressed paper',
        dimensions: 'A4 (210mm × 297mm)',
        year: '2025',
        caption: 'Luminous live watercolor sketch of a young boy with expressive eyes and sky-blue atmospheric background.',
        alt: 'Hand-painted watercolor portrait sketch of a young boy in an orange shirt with soft blue background wash',
        category: 'custom-art',
        categoryLabel: 'Atelier Watercolor Study',
        tag: 'Watercolor Study',
        best: false
      },
      'bb8c825e-9617-43a0-8df1-1439b874c1d6.jpg': {
        name: 'anuj-glasses-ink-caricature.webp',
        title: 'Anuj: Fluent Brush Pen Caricature',
        medium: 'Dip pen and Indian black ink on heavy smooth Bristol board',
        dimensions: 'A4 (210mm × 297mm)',
        year: '2025',
        caption: 'Speed caricature sketch capturing humor and personality with dynamic thick-and-thin brushstrokes.',
        alt: 'Black and white ink caricature drawing of smiling young man with glasses named Anuj',
        category: 'custom-art',
        categoryLabel: 'Speed Ink Caricature',
        tag: 'Ink Caricature',
        best: false
      },
      '83b7c5eb-dbc2-4ef9-a70a-2fb691c10757.jpg': {
        name: 'smiling-woman-curls-ink-caricature.webp',
        title: 'Joyful Radiance: Brushwork Caricature',
        medium: 'Japanese brush pen and sumi ink on Bristol cardstock',
        dimensions: 'A4 (210mm × 297mm)',
        year: '2025',
        caption: 'Fluid brush pen caricature of a woman with bouncy curls, smiling expression, and traditional bindi.',
        alt: 'Expressive brush and ink caricature drawing of a smiling woman with curly hair and bindi',
        category: 'custom-art',
        categoryLabel: 'Live Brush Caricature',
        tag: 'Brush Caricature',
        best: false
      }
    }
  },

  // 9. Face Painting & Event Tattoos (13 files)
  'face painting and event tatto': {
    outDir: 'face-body-art',
    files: {
      '0beace0b-b97a-42bd-90b8-042580d2b14b.jpg': {
        name: 'spiderman-venom-split-mask-arm-art.webp',
        title: 'Spider-Man & Venom Split Mask Event Body Art',
        medium: 'FDA-approved hypoallergenic cosmetic body pigments and fine liner brushes',
        dimensions: 'Event Arm Art',
        year: '2025',
        caption: 'Precision hand-painted superhero split mask body art executed live for private and corporate gatherings.',
        alt: 'Detailed hand-painted Spider-Man and Venom split mask temporary body art painted on an arm at an event',
        category: 'murals-commercial-art',
        categoryLabel: 'Live Event Body Art & Tattoos',
        tag: 'Event Body Art',
        best: true
      },
      'b4b11c47-3697-4e06-9b43-cd7ec6894b6b.jpg': {
        name: 'indian-flag-tricolour-cheek-face-paint.webp',
        title: 'Patriotic Tricolour Waving Flag Cheek Art',
        medium: 'Skin-safe cosmetic pigments with Ashoka Chakra detailing',
        dimensions: 'Match Day Live Face Art',
        year: '2024',
        caption: 'Vibrant waving Indian tricolour flag cheek painting created live during an international cricket screening.',
        alt: 'Woman cricket fan wearing Team India jersey with Indian national flag hand-painted on her cheek',
        category: 'murals-commercial-art',
        categoryLabel: 'Live Event Face Painting',
        tag: 'Face Painting',
        best: true
      },
      '1c2819eb-0645-498a-8e6a-7f820749175c.jpg': {
        name: 'shreya-peacock-feather-forearm-tattoo.webp',
        title: 'Shreya: Calligraphic Peacock Feather Arm Tattoo',
        medium: 'Cosmetic black liner and iridescent emerald & royal blue feather pigments',
        dimensions: 'Forearm Calligraphy Art',
        year: '2025',
        caption: 'Custom temporary calligraphic tattoo combining flowing script of name Shreya with vibrant peacock feather.',
        alt: 'Hand-painted calligraphic arm tattoo of the name Shreya integrated with a bright green and blue peacock feather',
        category: 'murals-commercial-art',
        categoryLabel: 'Live Calligraphic Body Tattoo',
        tag: 'Calligraphic Tattoo',
        best: true
      },
      '50e5d618-6a14-4c06-b4ec-1c328c3d4fa3.jpg': {
        name: 'quill-feather-dissolving-into-birds-arm-art.webp',
        title: 'Freedom Flight: Quill Dissolving Into Birds Arm Art',
        medium: 'Dual-tone lime green & velvet black cosmetic body art paints',
        dimensions: 'Full Forearm Body Art',
        year: '2025',
        caption: 'Artistic temporary tattoo featuring an ornate quill feather dissolving into a flock of soaring birds ascending the forearm.',
        alt: 'Temporary arm tattoo of a green and black quill feather dissolving into flying birds along the forearm',
        category: 'murals-commercial-art',
        categoryLabel: 'Conceptual Body Art',
        tag: 'Forearm Art',
        best: true
      },
      '91976dc0-aa3a-4c6c-9ce4-9fba3ea403ac.jpg': {
        name: 'botanical-blooming-rose-forearm-tattoo.webp',
        title: 'Botanical Bloom: Hand-Painted Rose Body Art',
        medium: 'Multi-layered magenta, ruby, and olive green skin-safe acrylic cosmetics',
        dimensions: 'Forearm Fine Art Tattoo',
        year: '2025',
        caption: 'Painterly botanical body art of an opening pink rose with delicate stem, thorns, leaves, and companion bud.',
        alt: 'Hand-painted fine art temporary tattoo of a blooming pink rose with green leaves on a woman forearm',
        category: 'murals-commercial-art',
        categoryLabel: 'Fine Art Body Painting',
        tag: 'Botanical Body Art',
        best: true
      },
      'a153fc0d-e076-4854-9bdd-1dc944e1d2c3.jpg': {
        name: 'fairy-butterfly-shimmer-hand-art.webp',
        title: 'Fairy Wing: Shimmering Blue Butterfly Hand Art',
        medium: 'Hypoallergenic sky-blue cosmetic paints, yellow dots, and golden glitter',
        dimensions: 'Back of Hand Live Art',
        year: '2025',
        caption: 'Enchanting live hand painting of a cobalt and sky blue butterfly with delicate golden stardust accents for a young guest.',
        alt: 'Blue and gold shimmer butterfly painted on the back of a little girl hand wearing a pearl bracelet',
        category: 'murals-commercial-art',
        categoryLabel: 'Children Event Hand Painting',
        tag: 'Glitter Hand Art',
        best: true
      },
      '522b0f6f-de4b-407b-a807-64cee534c473.jpg': {
        name: 'corporate-event-peacock-tattoo-showcase.webp',
        title: 'Corporate Celebration: Live Tattoo Experience',
        medium: 'Live on-site corporate event body art activation',
        dimensions: 'Live Corporate Experience',
        year: '2025',
        caption: 'Corporate team member joyfully presenting her finished custom peacock feather arm tattoo at an annual office celebration.',
        alt: 'Smiling professional woman in corporate office setting showing her custom peacock feather arm tattoo',
        category: 'murals-commercial-art',
        categoryLabel: 'Corporate Event Body Art',
        tag: 'Corporate Live Art',
        best: false
      },
      '71f97f85-c128-480a-bd2e-e3933d7907d3.jpg': {
        name: 'corporate-guest-birds-feather-tattoo.webp',
        title: 'LTI Corporate Showcase: Flying Birds Tattoo',
        medium: 'Skin-safe event cosmetic paint',
        dimensions: 'Live Office Activation',
        year: '2025',
        caption: 'LTI corporate employee showing off his custom flying birds quill tattoo during a festive studio employee engagement event.',
        alt: 'Corporate employee with lanyard displaying feather and birds tattoo on his forearm at office celebration',
        category: 'murals-commercial-art',
        categoryLabel: 'Live Office Activation Art',
        tag: 'Live Tattoo Event',
        best: false
      },
      'd37affe2-e910-468d-8f84-63b13af27d5f.jpg': {
        name: 'event-guest-rose-arm-tattoo-smile.webp',
        title: 'Festive Delight: Rose Arm Art Showcase',
        medium: 'Cosmetic pigment portrait at live booth',
        dimensions: 'Live Event Interaction',
        year: '2025',
        caption: 'Happy event attendee in festive yellow attire showcasing her hand-painted botanical rose tattoo at HUNAR live booth.',
        alt: 'Woman in yellow Indian dress smiling and displaying her hand-painted rose tattoo at a cultural celebration',
        category: 'murals-commercial-art',
        categoryLabel: 'Live Event Guest Experience',
        tag: 'Guest Showcase',
        best: false
      },
      '1059a75b-7c94-443f-bc2d-0b24fc2d6337.jpg': {
        name: 'pink-flamingo-temporary-arm-tattoo.webp',
        title: 'Tropical Flamingo: Wrist & Forearm Art',
        medium: 'Cotton candy pink and magenta body pigments with fine black contouring',
        dimensions: 'Wrist & Lower Forearm Art',
        year: '2025',
        caption: 'Playful and graceful pink flamingo body painting completed live in 5 minutes at a summer celebration.',
        alt: 'Cute hand-painted pink flamingo temporary tattoo on a guest forearm',
        category: 'murals-commercial-art',
        categoryLabel: 'Festive Animal Art',
        tag: 'Animal Body Art',
        best: false
      },
      'cbc4a148-7994-4ca4-a006-893672083415.jpg': {
        name: 'badshah-royal-crown-calligraphic-tattoo.webp',
        title: 'Badshah: Crown & Calligraphy Temporary Tattoo',
        medium: 'Jet black pigment with silver shadow drop-relief',
        dimensions: 'Forearm Lettering Art',
        year: '2025',
        caption: 'Regal calligraphic script tattoo of the title "Badshah" topped with an ornate three-point imperial crown.',
        alt: 'Black script calligraphy tattoo of the word Badshah with a royal crown on a man forearm',
        category: 'murals-commercial-art',
        categoryLabel: 'Calligraphic Script Tattoo',
        tag: 'Custom Lettering',
        best: false
      },
      '58d0e81a-41ab-4a23-a90f-b3a2d82368ef.jpg': {
        name: 'ridhaan-calligraphic-arm-tattoo.webp',
        title: 'Ridhaan: Calligraphic Script with Red Rim Shadow',
        medium: 'Black cosmetic ink with red 3D drop-shadow and heart accent',
        dimensions: 'Forearm Script Tattoo',
        year: '2025',
        caption: 'Bespoke hand-lettered cursive name tattoo "Ridhaan" with dimensional red drop-relief and pink heart embellishment.',
        alt: 'Hand-lettered cursive tattoo of the name Ridhaan in black and red ink on forearm',
        category: 'murals-commercial-art',
        categoryLabel: 'Name Script Body Art',
        tag: 'Name Tattoo',
        best: false
      },
      'd9eee1d0-6d3f-4866-9c30-b6ab66917ac0.jpg': {
        name: 'vision-m-corporate-brand-logo-tattoo.webp',
        title: 'Vision M: Corporate Brand Activation Logo Tattoo',
        medium: 'Precision corporate brand pantone pigments',
        dimensions: 'Forearm Brand Activation',
        year: '2025',
        caption: 'Crisp corporate brand logo tattoo painted on attendees during an internal company vision and milestone rollout.',
        alt: 'Corporate logo tattoo of Vision M with red concentric target circle painted on forearm at corporate launch',
        category: 'murals-commercial-art',
        categoryLabel: 'Corporate Brand Activation Art',
        tag: 'Brand Tattoo',
        best: false
      }
    }
  }
};

async function processImages() {
  console.log('Starting optimization of refer images with Sharp...');
  const allGeneratedItems = [];

  for (const [folderName, def] of Object.entries(IMAGE_DEFINITIONS)) {
    const srcDir = path.join(SOURCE_BASE, folderName);
    const targetDir = path.join(DEST_BASE, def.outDir);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    for (const [srcFile, meta] of Object.entries(def.files)) {
      const srcPath = path.join(srcDir, srcFile);
      if (!fs.existsSync(srcPath)) {
        console.warn('Source file missing:', srcPath);
        continue;
      }

      const destPath = path.join(targetDir, meta.name);
      const publicUrl = `/portfolio/${def.outDir}/${meta.name}`;

      // Resize to max 1600px width/height and convert to webp (quality: 82)
      await sharp(srcPath)
        .rotate() // auto-orient from EXIF
        .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 82, effort: 5 })
        .toFile(destPath);

      const srcSize = fs.statSync(srcPath).size;
      const destSize = fs.statSync(destPath).size;
      const reduction = Math.round((1 - destSize / srcSize) * 100);

      console.log(`[Optimized] ${folderName}/${srcFile} -> ${def.outDir}/${meta.name}`);
      console.log(`            Size: ${(srcSize / 1024).toFixed(1)} KB -> ${(destSize / 1024).toFixed(1)} KB (-${reduction}%)`);

      allGeneratedItems.push({
        id: meta.name.replace('.webp', ''),
        title: meta.title,
        category: meta.category,
        categoryLabel: meta.categoryLabel,
        year: meta.year,
        image: publicUrl,
        medium: meta.medium,
        dimensions: meta.dimensions,
        description: meta.caption,
        alt: meta.alt,
        tag: meta.tag,
        best: meta.best
      });
    }
  }

  // Sort: Best works first, then remaining
  allGeneratedItems.sort((a, b) => {
    if (a.best && !b.best) return -1;
    if (!a.best && b.best) return 1;
    return 0;
  });

  // Write a generated JSON / JS file that exports all curated real portfolio items
  const dataPath = path.join(__dirname, '../client/src/data/realPortfolioData.js');
  const jsContent = `/**
 * Real HUNAR Studio Portfolio Data
 * Auto-generated from optimized client reference assets.
 * 100% genuine studio commissions, fine art studies, and architectural projects.
 * Featured items (best: true) are prioritized first for peak visual impact.
 */

export const REAL_PORTFOLIO_ITEMS = ${JSON.stringify(allGeneratedItems, null, 2)};
`;
  fs.writeFileSync(dataPath, jsContent, 'utf-8');
  console.log(`\nSuccessfully processed and generated all ${allGeneratedItems.length} real portfolio items in ${dataPath}!`);
}

processImages().catch((err) => {
  console.error('Error during image processing:', err);
  process.exit(1);
});
