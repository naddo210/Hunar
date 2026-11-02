const fs = require('fs');
const path = require('path');

const cataloguePath = path.join(__dirname, '../client/src/data/servicesCatalogue.js');
let content = fs.readFileSync(cataloguePath, 'utf-8');

// 1. Update DIVISIONS['branding-design'].heroImage to actual brand identity work
content = content.replace(
  "heroImage: '/portfolio/calligraphy/koshish-harivansh-rai-bachchan-calligraphy.webp',\n    accent: '03',",
  "heroImage: '/portfolio/brand-identity/saga-ratna/sagar-ratna-brand-identity-concept-cover.webp',\n    accent: '03',"
);

// 2. Define the 6 new subservices as JS code string
const newSubServices = `  'calligraphy-services': {
    division: 'custom-art',
    slug: 'calligraphy-services',
    title: 'Fine Art Calligraphy & Hand-Lettering',
    primaryKeyword: 'devanagari calligraphy artists custom lettering manuscripts',
    metaTitle: 'Fine Art Calligraphy & Custom Hand-Lettering — Devanagari & English | HUNAR',
    metaDescription: 'Master calligraphy services by HUNAR Creative Studio. Authentic Devanagari, Marathi, Sanskrit, and English Uncial script commissions, poetic manuscripts, and bespoke monumental boards.',
    summary: 'Mastery of the written word rendered by classical reed and steel nibs. We specialize in Devanagari, Marathi, Sanskrit verses, illuminated poetry manuscripts, concentric spiritual mandalas, and monumental calligraphy installations on handmade archival paper and raw wood.',
    heroImage: '/portfolio/calligraphy/marathi-devanagari-ganpati-watercolor-calligraphy.webp',
    galleryImages: [
      {
        url: '/portfolio/calligraphy/marathi-devanagari-ganpati-watercolor-calligraphy.webp',
        caption: 'Morya: Lord Ganesha Devanagari Watercolor Calligraphy on Archival Sheet',
        tag: 'Sacred Calligraphy',
        alt: 'Devanagari calligraphy artwork forming the silhouette of Lord Ganesha in warm watercolor washes'
      },
      {
        url: '/portfolio/calligraphy/koshish-harivansh-rai-bachchan-calligraphy.webp',
        caption: 'Harivansh Rai Bachchan: "Koshish Karne Walon Ki Haar Nahi Hoti" Illustrated Sheet',
        tag: 'Literary Calligraphy',
        alt: 'Devanagari calligraphy of poem Koshish by Harivansh Rai Bachchan with illustrated mountain climber'
      },
      {
        url: '/portfolio/calligraphy/gulzar-poetry-spiral-devanagari-calligraphy.webp',
        caption: 'Gulzar: "Waqt" Circular Yin-Yang Spiral Calligraphy in Red & Black Ink',
        tag: 'Spiral Calligraphy',
        alt: 'Circular Devanagari calligraphy artwork of Gulzar poetry written in a continuous yin-yang spiral in red ink'
      },
      {
        url: '/portfolio/calligraphy/circular-marathi-calligraphy-sun-mandala.webp',
        caption: 'Solar Hymn: Circular Marathi Calligraphy Mandala with Sun Radiance',
        tag: 'Sun Mandala',
        alt: 'Circular radiant sun mandala featuring Marathi devotional verses in dense calligraphic strokes'
      },
      {
        url: '/portfolio/calligraphy/swatantryotsav-monumental-calligraphy-board.webp',
        caption: 'Swatantryotsav 75th: Monumental Hand-Lettered Wooden Festival Board',
        tag: 'Monumental Board',
        alt: 'Hand-painted wooden festival title board with bold tricolor Marathi and Hindi typography'
      },
      {
        url: '/portfolio/calligraphy/gita-and-quran-harmony-devanagari-calligraphy.webp',
        caption: 'Harmony of Faiths: Bhagavad Gita & Holy Quran Calligraphic Manuscript',
        tag: 'Spiritual Manuscript',
        alt: 'Harmonious side-by-side calligraphic manuscript featuring sacred Gita shlokas and Quranic verses'
      },
      {
        url: '/portfolio/calligraphy/shakespeare-sonnet-circular-calligraphy.webp',
        caption: 'Shakespeare Sonnet: "Time Waste" Concentric English Uncial Scription',
        tag: 'English Uncial',
        alt: 'Concentric circular English calligraphy artwork of Shakespeare quote written in ochre and red ink'
      },
      {
        url: '/portfolio/calligraphy/dnyaneshwari-devotional-marathi-calligraphy.webp',
        caption: 'Sant Dnyaneshwar Pasaydan: Illuminated Marathi Script Manuscript',
        tag: 'Pasaydan Manuscript',
        alt: 'Traditional Marathi script Pasaydan manuscript written with reed pen and gold embellishments'
      },
      {
        url: '/portfolio/calligraphy/gulzar-bosky-poem-devanagari-calligraphy.webp',
        caption: 'Gulzar: "Bosky" Poetic Calligraphic Manuscript in Indigo Ink',
        tag: 'Poetry Sheet',
        alt: 'Devanagari calligraphy sheet of Gulzar poem Bosky written in deep blue ink with emerald signature'
      }
    ],
    deliverables: [
      'Original Calligraphy Artwork on 300gsm Archival Cotton Paper',
      'Hand-Ground Japanese Sumi & Shellac Inks with 24k Gold Leafing',
      'Preliminary Script & Typographic Rhythm Studies',
      'Museum UV-Filtering Glass Framing with Acid-Free Mount',
      'Signed Certificate of Provenance & Seal of the Scribe'
    ],
    faqs: [
      { q: 'Which languages and scripts do your scribes specialize in?', a: 'We specialize in Devanagari (Hindi, Marathi, Sanskrit), Classical English scripts (Gothic, Blackletter, Italic, Uncial, Copperplate), and bespoke hybrid typographic letterforms.' },
      { q: 'Can you letter custom poetry, sacred scriptures, or wedding vows?', a: 'Yes. We frequently scribe custom stanzas from Gulzar, Harivansh Rai Bachchan, sacred Bhagavad Gita shlokas, Quranic harmony passages, and bespoke wedding vows.' },
      { q: 'Do you create large-scale architectural or stage calligraphy boards?', a: 'Yes, our atelier crafts monumental hand-lettered wooden panels, festival boards (such as Swatantryotsav), and architectural focal walls.' }
    ]
  },
  'commercial-glass-painting': {
    division: 'murals-commercial-art',
    slug: 'commercial-glass-painting',
    title: 'Commercial & Festive Glass Painting',
    primaryKeyword: 'commercial glass painting storefront retail window art cafe glass mural',
    metaTitle: 'Commercial Glass Painting & Storefront Window Art | HUNAR Creative Studio',
    metaDescription: 'Elevate retail facades, cafe storefronts, and restaurant glass with bespoke hand-painted glass art by HUNAR. Festive holiday themes, botanical window murals, and branded entrance typography.',
    summary: 'Transform glass storefronts, restaurant partitions, showroom windows, and hospitality entrances into luminous, hand-painted visual spectacles. Our artists use weather-resistant enamels and luminous gouache to paint seasonal displays, festive greetings, coffee bar iconography, and intricate botanical compositions directly on glass.',
    heroImage: '/portfolio/glass-painting/lord-ganesha-entrance-glass-painting.webp',
    galleryImages: [
      {
        url: '/portfolio/glass-painting/lord-ganesha-entrance-glass-painting.webp',
        caption: 'Auspicious Welcome: Lord Ganesha Festive Entrance Glass Painting',
        tag: 'Festive Glass Art',
        alt: 'Intricate white glass painting of Lord Ganesha with floral garland on glass entrance door'
      },
      {
        url: '/portfolio/glass-painting/cappuccino-coffee-cup-glass-facade.webp',
        caption: 'The Roastery: Artisan Cappuccino & Coffee Plant Storefront Glass Art',
        tag: 'Cafe Facade',
        alt: 'Hand-painted coffee cup illustration with rising steam and coffee leaves on cafe window'
      },
      {
        url: '/portfolio/glass-painting/holiday-reindeer-christmas-window-painting.webp',
        caption: 'Noël Woodland: Holiday Storefront Window Display with Reindeer',
        tag: 'Holiday Display',
        alt: 'Hand-painted Christmas window art on glass entrance featuring white reindeer stags, Christmas tree, and snow'
      },
      {
        url: '/portfolio/glass-painting/festive-christmas-decor-wreath-window.webp',
        caption: 'Yuletide Glow: Baubles & Holly Wreath Glass Composition',
        tag: 'Window Baubles',
        alt: 'Festive hanging glass baubles, pine cones, and mistletoe painted on boutique front window'
      },
      {
        url: '/portfolio/glass-painting/merry-christmas-botanical-wreath-glass.webp',
        caption: 'Botanical Noel: Illustrated Pine Wreath & Calligraphic Greeting',
        tag: 'Retail Branding',
        alt: 'Intricate circular Christmas wreath and Merry Christmas calligraphy painted in snow-white enamel on glass'
      },
      {
        url: '/portfolio/glass-painting/flying-dove-of-peace-glass-monochrome.webp',
        caption: 'Flight of Peace: Luminous Dove & Golden Olive Branch Glass Feature',
        tag: 'Corporate Glazing',
        alt: 'Monochrome white glass painting of a soaring peace dove with olive branch on interior office partition'
      },
      {
        url: '/portfolio/glass-painting/santa-on-chopper-motorcycle-glass-painting.webp',
        caption: 'Biker Noel: Santa Riding a Custom Chopper Motorcycle Window Mural',
        tag: 'Whimsical Window',
        alt: 'Whimsical Christmas glass painting of Santa Claus riding a custom motorcycle chopper on showroom window'
      },
      {
        url: '/portfolio/glass-painting/holiday-poinsettia-christmas-window-wreath.webp',
        caption: 'Crimson Poinsettia & Evergreen Winter Window Installation',
        tag: 'Holiday Glass',
        alt: 'Hand-painted poinsettia flowers and winter foliage in frosted white on boutique display glass'
      }
    ],
    deliverables: [
      'On-Site Precision Glass Painting by Master Muralists',
      'Dual-Sided Visibility Engineering (Luminous Day & Night Viewing)',
      'High-Durability Non-Damaging Enamels & Resilient Paint Compounds',
      'Complete Pre-Design Digital Scale Elevation Mockups',
      'Optional Seasonal Refresh & Clean Removal Service'
    ],
    faqs: [
      { q: 'Does window paint damage the glass or leave permanent residue?', a: 'Never. We use professional non-porous glass enamels and temperas engineered specifically for commercial glazing. They clean off completely without scratching or etching.' },
      { q: 'How long does a storefront glass painting last?', a: 'Indoor partition paintings last indefinitely. Exterior facing window paintings withstand sun, wind, and rain for 3 to 6 months or until your seasonal campaign concludes.' },
      { q: 'How long does an on-site glass painting installation take?', a: 'Most standard boutique or cafe storefronts (10ft to 20ft) are completed in a single morning or evening shift within 4 to 8 hours to minimize disruption.' }
    ]
  },
  'event-tattoos-face-painting': {
    division: 'murals-commercial-art',
    slug: 'event-tattoos-face-painting',
    title: 'Live Temporary Tattoos & Event Face Painting',
    primaryKeyword: 'temporary tattoo artist for events corporate face painting live body art',
    metaTitle: 'Live Temporary Tattoos & Event Face Painting Services | HUNAR Creative Studio',
    metaDescription: 'Professional live temporary tattoo and face painting artists for corporate brand activations, luxury celebrations, sports screenings, and festivals. Hypoallergenic FDA-compliant cosmetic pigments.',
    summary: 'Interactive live body art and bespoke temporary tattooing for high-profile corporate activations, luxury product launches, sports fan engagements, and celebratory gatherings. From calligraphic name tattoos and precision corporate brandmarks to shimmering botanical arm art and festival face painting.',
    heroImage: '/portfolio/face-body-art/corporate-event-peacock-tattoo-showcase.webp',
    galleryImages: [
      {
        url: '/portfolio/face-body-art/corporate-event-peacock-tattoo-showcase.webp',
        caption: 'Royal Peacock: Shimmering Fine-Line Forearm Tattoo for Corporate Gala',
        tag: 'Event Tattoo',
        alt: 'Intricate peacock temporary tattoo painted on woman arm with glitter accents at gala event'
      },
      {
        url: '/portfolio/face-body-art/vision-m-corporate-brand-logo-tattoo.webp',
        caption: 'Vision M: Corporate Brand Activation Logo Tattoo on Attendees',
        tag: 'Brand Tattoo',
        alt: 'Corporate logo tattoo of Vision M with red concentric target circle painted on forearm at corporate launch'
      },
      {
        url: '/portfolio/face-body-art/badshah-royal-crown-calligraphic-tattoo.webp',
        caption: 'Badshah: Crown & Calligraphy Script Temporary Tattoo',
        tag: 'Custom Lettering',
        alt: 'Black script calligraphy tattoo of the word Badshah with a royal crown on a man forearm'
      },
      {
        url: '/portfolio/face-body-art/ridhaan-calligraphic-arm-tattoo.webp',
        caption: 'Ridhaan: Calligraphic Script with Red Rim Shadow & Heart Accent',
        tag: 'Name Tattoo',
        alt: 'Hand-lettered cursive tattoo of the name Ridhaan in black and red ink on forearm'
      },
      {
        url: '/portfolio/face-body-art/botanical-blooming-rose-forearm-tattoo.webp',
        caption: 'Botanical Bloom: Detailed Fine-Line Rose & Stem Arm Art',
        tag: 'Botanical Tattoo',
        alt: 'Realistic black ink rose temporary tattoo with detailed shading and leaves on woman forearm'
      },
      {
        url: '/portfolio/face-body-art/indian-flag-tricolour-cheek-face-paint.webp',
        caption: 'Cricket Match Day: Indian Tricolour Cheek Face Painting with Cricket Ball',
        tag: 'Sports Activation',
        alt: 'Young cricket fan smiling with Indian national flag and red cricket ball painted on cheek'
      },
      {
        url: '/portfolio/face-body-art/quill-feather-dissolving-into-birds-arm-art.webp',
        caption: 'Freedom Flight: Quill Feather Dissolving into Soaring Birds Tattoo',
        tag: 'Expressive Ink',
        alt: 'Artistic temporary tattoo of a black quill feather breaking into a flock of flying birds on arm'
      },
      {
        url: '/portfolio/face-body-art/spiderman-venom-split-mask-arm-art.webp',
        caption: 'Symbiote Split: Spider-Man & Venom Dynamic Forearm Body Art',
        tag: 'Pop Culture Art',
        alt: 'Dynamic half Spiderman half Venom face temporary painting on young boy forearm'
      },
      {
        url: '/portfolio/face-body-art/pink-flamingo-temporary-arm-tattoo.webp',
        caption: 'Tropical Elegance: Pink Flamingo & Hibiscus Flower Arm Painting',
        tag: 'Animal Body Art',
        alt: 'Delicate pink flamingo temporary tattoo standing among tropical flora on woman arm'
      },
      {
        url: '/portfolio/face-body-art/fairy-butterfly-shimmer-hand-art.webp',
        caption: 'Enchanted Butterfly: Shimmering Hand & Wrist Cosmetic Body Art',
        tag: 'Cosmetic Art',
        alt: 'Delicate butterfly temporary tattoo painted on woman hand with shimmering accents'
      }
    ],
    deliverables: [
      'Certified Professional On-Site Atelier Artists & Scribes',
      '100% FDA-Compliant Hypoallergenic Cosmetic Grade Pigments',
      'Custom Flash Sheet Design with Client Branding or Event Theme',
      'High-Throughput Fast Queue Management (2 to 5 minutes per guest)',
      'Complete Sanitized Mobile Art Bar Station Setup'
    ],
    faqs: [
      { q: 'Are the pigments safe for children and sensitive skin?', a: 'Yes, 100%. We exclusively use European and FDA-compliant cosmetic grade body inks and water-based pigments that are hypoallergenic, non-toxic, and dermatologically tested.' },
      { q: 'How long do the temporary tattoos last on skin?', a: 'Depending on placement and friction, our waterproof cosmetic inks stay crisp for 3 to 7 days, yet can be removed instantly anytime with mild baby oil or alcohol wipes.' },
      { q: 'Can you paint our exact corporate logo or brand crest on attendees?', a: 'Absolutely. We formulate custom precision flash stencils matching your exact brand Pantone shades and vector silhouette.' }
    ]
  },
  'live-wedding-painting-caricature': {
    division: 'custom-art',
    slug: 'live-wedding-painting-caricature',
    title: 'Live Wedding Painting & Rapid Event Caricatures',
    primaryKeyword: 'live wedding painter speed caricatures event watercolor portraits wedding artist',
    metaTitle: 'Live Wedding Painting & Speed Guest Caricatures | HUNAR Creative Studio',
    metaDescription: 'Capture your wedding or luxury gala live on canvas. HUNAR provides master live wedding painters and rapid guest caricaturists creating unforgettable heirloom entertainment and guest favors.',
    summary: 'Enchant your wedding guests with live experiential fine art. Watch our master painter capture your wedding pheras, vow exchange, or first dance live on a fine art canvas throughout the evening, alongside rapid live guest caricaturists producing framed, humorous, yet deeply flattering keepsake portraits in 4 minutes flat.',
    heroImage: '/portfolio/caricature/elderly-couple-wedding-caricature-portrait.webp',
    galleryImages: [
      {
        url: '/portfolio/caricature/elderly-couple-wedding-caricature-portrait.webp',
        caption: '50 Golden Years: Anniversary Wedding Caricature Portrait in Traditional Attire',
        tag: 'Golden Anniversary',
        alt: 'Detailed caricature portrait of an elderly Indian couple in wedding attire with garland and festive floral border'
      },
      {
        url: '/portfolio/caricature/groom-in-tuxedo-wedding-caricature.webp',
        caption: 'The Royal Groom: Studio Caricature in Sherwani & Pagadi',
        tag: 'Wedding Caricature',
        alt: 'Stylized wedding caricature of a smiling groom in gold-embroidered sherwani and emerald necklace'
      },
      {
        url: '/portfolio/caricature/traditional-turban-wedding-caricature.webp',
        caption: 'Maratha Baraati: Traditional Feta Guest Caricature',
        tag: 'Guest Favor',
        alt: 'Expressive watercolor caricature of an Indian wedding guest in saffron turban and kurta'
      },
      {
        url: '/portfolio/caricature/groom-in-turban-traditional-caricature.webp',
        caption: 'Regal Turbaned Sangeet Celebration Caricature',
        tag: 'Sangeet Art',
        alt: 'Hand-drawn wedding guest caricature featuring ornate turban and charismatic smile'
      },
      {
        url: '/portfolio/caricature/bearded-wedding-guest-caricature.webp',
        caption: 'Joyful Guest: 4-Minute Speed Caricature on Archival Cardstock',
        tag: 'Speed Caricature',
        alt: 'Speed guest caricature drawing of a bearded wedding guest in blue shirt smiling warmly'
      },
      {
        url: '/portfolio/caricature/charismatic-gentleman-speed-caricature.webp',
        caption: 'Charismatic Gentleman: Live Cocktail Hour Caricature',
        tag: 'Live Event Art',
        alt: 'Fast live caricature drawing of an Indian gentleman in black jacket drawn at live event'
      },
      {
        url: '/portfolio/caricature/live-family-caricature-portrait.webp',
        caption: 'Family Milestone: Multi-Generational Group Wedding Caricature',
        tag: 'Family Commission',
        alt: 'Group caricature portrait of Indian family members celebrating together with joyful expressions'
      }
    ],
    deliverables: [
      'Live On-Site Easel Performance throughout Ceremony & Reception',
      'Original Stretched Canvas Live Painting Completed by Evening Finale',
      'Rapid Guest Caricatures on Branded Archival Stock (30 to 50 guests per artist)',
      'Protective Presentation Sleeves & Mounting for Guest Takeaways',
      'Studio Retouching, Archival Varnishing, and Hand-Delivery of Master Piece'
    ],
    faqs: [
      { q: 'What moment of the wedding can the live artist capture?', a: 'Couples commonly choose the garland exchange (Varmala), sacred vows, first dance, or the walking down the aisle. We consult beforehand to freeze your most cherished moment in time.' },
      { q: 'How fast do your speed caricaturists draw each guest?', a: 'Our caricature artists complete each full-color or ink portrait in 3 to 4 minutes, allowing 15 to 20 guests per hour per artist to receive a custom framed favor.' },
      { q: 'What logistical setup is required at the venue?', a: 'Minimal footprint: we only need a 6ft × 6ft area with good lighting and proximity to the celebration. We supply our own French easel, lighting, drop cloths, and display materials.' }
    ]
  },
  'advertising-campaigns': {
    division: 'branding-design',
    slug: 'advertising-campaigns',
    title: 'Advertising Campaigns & Creative Art Direction',
    primaryKeyword: 'advertising campaigns art direction creative direction print ads outdoor hoardings',
    metaTitle: 'Advertising Campaigns & Creative Art Direction | HUNAR Creative Studio',
    metaDescription: 'Award-grade advertising campaigns, provocative print hyperbole, national hoardings, and transit media crafted by HUNAR Creative Studio. Proven conceptual power and art direction.',
    summary: 'Conceptual advertising that commands cultural attention, disrupts category conventions, and drives visceral brand recall. We architect end-to-end national campaigns — from provocative visual hyperbole (Levi\\'s "Desert Heat in Winter", Royal Enfield "Live Royal, Ride Royal") and environmental advocacy (WWF anti-poaching series) to high-energy consumer product launches and civic engagement drives.',
    heroImage: '/portfolio/brand-identity/royal-enfield/royal-enfield-live-royal-ride-royal-cover.webp',
    galleryImages: [
      {
        url: '/portfolio/brand-identity/royal-enfield/royal-enfield-live-royal-ride-royal-cover.webp',
        caption: 'Royal Enfield: "Live Royal, Ride Royal" Campaign Master Vision',
        tag: 'Heritage Campaign',
        alt: 'Royal Enfield Live Royal Ride Royal campaign headline with traditional Indian pagadi and Royal Enfield helmet'
      },
      {
        url: '/portfolio/brand-identity/levis/levis-desert-heat-polar-bear.webp',
        caption: 'Levi\\'s: "Feel the Desert Heat in Winter" Polar Bear Campaign',
        tag: 'Fashion Advertising',
        alt: 'Levi\\'s winter campaign ad featuring a polar bear wearing denim jacket relaxing on ice under warm sunlight'
      },
      {
        url: '/portfolio/advertising/boat-rockerz-luxury-of-sound-poster.webp',
        caption: 'boAt Rockerz: "The Luxury of Sound" Cosmic Audio Poster',
        tag: 'Consumer Audio',
        alt: 'boAt Rockerz advertising poster featuring dynamic drummer playing on headphones in deep space with golden shockwaves'
      },
      {
        url: '/portfolio/campaigns/wwf/wwf-rhino-horn-poaching-child-print-ad.webp',
        caption: 'WWF Anti-Poaching: "The Torn Horn — Our Children\\'s Future Matters"',
        tag: 'Conservation Advocacy',
        alt: 'WWF anti-poaching print ad showing little girl crying while holding a stuffed rhino toy with its horn ripped off'
      },
      {
        url: '/portfolio/advertising/surf-excel-daag-achhe-hain-ganesha-ad.webp',
        caption: 'Surf Excel: "Daag Agar Achhe Hain" Festive Ganesha Clay Campaign',
        tag: 'Festive Campaign',
        alt: 'Surf Excel print ad showing children making clay Ganesha idol in courtyard with mud stains on traditional clothes'
      },
      {
        url: '/portfolio/advertising/green-mountain-coffee-vibes-poster.webp',
        caption: 'Green Mountain Coffee: "Great Coffee, Good Vibes" Illustrated Poster',
        tag: 'Illustrated Campaign',
        alt: 'Green Mountain Coffee illustrated advertising poster with coffee beans, mountains, steaming mug, and retro typography'
      },
      {
        url: '/portfolio/brand-identity/levis/levis-desert-heat-arctic-penguin.webp',
        caption: 'Levi\\'s: Arctic Penguin Denim Fleece Winter Collection',
        tag: 'Fashion Advertising',
        alt: 'Levi\\'s advertising billboard showing emperor penguins wearing denim jackets and sunglasses on an iceberg'
      },
      {
        url: '/portfolio/brand-identity/royal-enfield/royal-enfield-punjabi-turban-dastar-helmet.webp',
        caption: 'Royal Enfield: The Dastar of Punjab — Pride & Protection Print Spread',
        tag: 'Print Campaign',
        alt: 'Royal Enfield print ad comparing a regal Punjabi saffron turban with a matte black motorcycle helmet'
      },
      {
        url: '/portfolio/campaigns/wwf/wwf-elephant-tusk-ivory-boy-print-ad.webp',
        caption: 'WWF Anti-Poaching: Severed Ivory — The Bleeding Toy Print Ad',
        tag: 'Conservation Advocacy',
        alt: 'WWF conservation ad featuring young boy holding plush elephant with torn tusks highlighting illegal ivory trade'
      },
      {
        url: '/portfolio/campaigns/wwf/wwf-tiger-skin-stripes-advocacy-poster.webp',
        caption: 'WWF Anti-Poaching: Stolen Stripes — Vanishing Royal Bengal Tiger',
        tag: 'Conservation Advocacy',
        alt: 'WWF print ad depicting a child with a stuffed tiger toy missing patches of fur to highlight tiger poaching'
      },
      {
        url: '/portfolio/advertising/maharashtra-ceo-voter-awareness-poster.webp',
        caption: 'Chief Electoral Officer: Maharashtra Youth Voter Civic Campaign',
        tag: 'Public Service',
        alt: 'Maharashtra Election Commission civic voter awareness poster with Marathi typography and voting finger ink mark'
      }
    ],
    deliverables: [
      'Master Big-Idea Campaign Narrative & Visual Manifesto',
      'Print Advertising Suites (Full-Page Magazine, Newspapers, Metro Displays)',
      'Outdoor Large-Format Billboards, Bus Shelters & Transit Hoardings',
      'Digital Social Hyperbole & High-Conversion Hero Banner Formats',
      'Complete Production-Ready Pre-Press Files with Color Profiles'
    ],
    faqs: [
      { q: 'How do you develop the central campaign big idea?', a: 'We dig deep into human emotional truths, cultural paradoxes, and product superiority to find a single arresting narrative hook that cannot be ignored.' },
      { q: 'Can you handle both concept ideation and final visual art direction?', a: 'Yes. We are rare in bridging high-level copywriting and strategy with museum-grade digital illustration, photography direction, and typographic craft in-house.' },
      { q: 'What mediums and formats are included in an advertising campaign rollout?', a: 'We deliver full omnichannel toolkits: high-resolution billboard hoardings (up to 40ft), magazine double-spreads, point-of-sale displays, and dynamic digital social cuts.' }
    ]
  },
  'theatrical-stage-design': {
    division: 'murals-commercial-art',
    slug: 'theatrical-stage-design',
    title: 'Theatrical Stage, Set Design & Exhibition Fabrication',
    primaryKeyword: 'stage design theatrical set exhibition fabrication monumental backdrops sir jj',
    metaTitle: 'Theatrical Stage Design & Exhibition Set Fabrication | HUNAR Creative Studio',
    metaDescription: 'Monumental stage architecture, theatrical set design, sculptural backdrops, and exhibition fabrication by HUNAR. Classical drafting, 3D color renders, and on-site carpentry fabrication.',
    summary: 'Architectural storytelling brought to life on grand stages. Our atelier designs and fabricates monumental exhibition stages, theatrical sets, cultural festival backdrops, and sculptural pavilions. From classical geometric grid drafting and 3D architectural color renders to heavy timber framing, EPS high-density foam sculpting, and grand finishing.',
    heroImage: '/portfolio/stage-design/sir-jj-applied-art-winged-stage-finished.webp',
    galleryImages: [
      {
        url: '/portfolio/stage-design/sir-jj-applied-art-winged-stage-finished.webp',
        caption: 'Sir J.J. Applied Art 88th Annual Exhibition Sculptural Winged Stage (40ft × 20ft)',
        tag: 'Finished Stage',
        alt: 'Monumental architectural stage design with sculpted angel wings and fluted arches at Sir JJ Institute of Applied Art'
      },
      {
        url: '/portfolio/stage-design/sir-jj-applied-art-stage-color-render.webp',
        caption: 'Architectural Lighting & Color Concept Elevation Render',
        tag: '3D Color Render',
        alt: 'Color elevation rendering of the Sir JJ exhibition stage showing golden lighting and winged backdrop'
      },
      {
        url: '/portfolio/stage-design/sir-jj-applied-art-stage-carpentry-framework.webp',
        caption: 'Heavy Timber Framework & Proscenium Carpentry Engineering',
        tag: 'Timber Engineering',
        alt: 'Raw wooden carpentry framework and truss construction for the monumental exhibition stage'
      },
      {
        url: '/portfolio/stage-design/sir-jj-applied-art-stage-wing-fabrication.webp',
        caption: 'High-Density EPS Sculptural Wing & Relief Fabrication',
        tag: 'Sculptural Relief',
        alt: 'Atelier sculptors carving monumental decorative angel wings from high-density foam in studio'
      },
      {
        url: '/portfolio/stage-design/sir-jj-applied-art-stage-grid-drafting.webp',
        caption: 'Classical Geometric Grid Drafting & Orthographic Elevations',
        tag: 'Architectural Drafting',
        alt: 'Detailed pencil architectural drafting and scale grid layout of the exhibition stage proscenium'
      },
      {
        url: '/portfolio/installations/flight-of-peace-paper-doves-sculpture.webp',
        caption: 'Flight of Peace: Kinetic Hanging Sculpture Installation',
        tag: 'Hanging Art',
        alt: 'Spiral kinetic paper sculpture of soaring white doves suspended against deep green gallery wall'
      },
      {
        url: '/portfolio/installations/creative-tree-of-knowledge-sculpture.webp',
        caption: 'Tree of Knowledge: 3D Mixed Media Architectural Sculpture',
        tag: 'Tree Sculpture',
        alt: 'Bespoke mixed-media sculptural installation representing a tree of wisdom and creative growth'
      }
    ],
    deliverables: [
      'Architectural Concept Blueprints & Geometric Grid Drafting',
      'Full-Color 3D Environmental Lighting & Perspective Renders',
      'Structural Timber Framing & Carpentry Engineering Blueprints',
      'High-Density Sculptural Relief Fabrication (Wings, Arches, Columns)',
      'Turnkey On-Site Assembly, Lighting Integration & Safety Certification'
    ],
    faqs: [
      { q: 'What scale of stage installations can HUNAR design and build?', a: 'We engineer sets ranging from 20ft boutique theater prosceniums to 60ft monumental exhibition stages, festival arenas, and corporate convention pavilions.' },
      { q: 'Do you provide on-site supervision and fabrication teams?', a: 'Yes. Our master art directors oversee on-site master carpenters, metal fabricators, scenic painters, and sculptural artisans from raw frame to gala spotlight.' },
      { q: 'How far in advance should we commission a stage or exhibition set?', a: 'We recommend 4 to 8 weeks for complex architectural stages to ensure rigorous structural engineering, materials curing, and thorough rehearsal staging.' }
    ]
  },
`;

// Insert the new subservices right after `export const SUB_SERVICES = {\n`
if (!content.includes("'calligraphy-services': {")) {
  content = content.replace('export const SUB_SERVICES = {\n', `export const SUB_SERVICES = {\n${newSubServices}`);
}

// 3. Upgrade logo-design, brand-identity, brand-colour-typography, packaging-label-design, business-stationery, campaign-concepts
// Upgrade logo-design hero and gallery
content = content.replace(
  "heroImage: '/portfolio/calligraphy/marathi-devanagari-ganpati-watercolor-calligraphy.webp',\n    galleryImages: [\n      {\n        url: '/portfolio/calligraphy/marathi-devanagari-ganpati-watercolor-calligraphy.webp',",
  "heroImage: '/portfolio/logo-designs/master-identity-trilogy-typodday-tukaram-alumni.webp',\n    galleryImages: [\n      {\n        url: '/portfolio/logo-designs/master-identity-trilogy-typodday-tukaram-alumni.webp',\n        caption: 'Master Brandmark Trilogy: TYPODAY 2025, Sant Tukaram & JJ Alumni',\n        tag: 'Brandmark System',\n        alt: 'Three distinct studio logo designs displayed together including TypoDay cinema logo and spiritual monogram'\n      },\n      {\n        url: '/portfolio/brand-identity/saga-ratna/sagar-ratna-brandmark-anatomy-vaman-cloche.webp',\n        caption: 'Sagar Ratna: Brandmark Anatomy — Vaman Umbrella & Dining Cloche',\n        tag: 'Symbol Anatomy',\n        alt: 'Geometric vector diagram showing the construction of Sagar Ratna logo symbol'\n      },\n      {\n        url: '/portfolio/brand-identity/tag-heuer/tag-heuer-shield-devanagari-heuer-crest.webp',\n        caption: 'TAG Heuer: Devanagari Heuer Shield Crest & Optical Balance',\n        tag: 'Shield Crest',\n        alt: 'TAG Heuer shield logo featuring Devanagari lettering inside the bottom half'\n      },"
);

// Upgrade brand-identity hero and gallery
content = content.replace(
  "heroImage: '/portfolio/calligraphy/circular-marathi-calligraphy-sun-mandala.webp',\n    galleryImages: [\n      {\n        url: '/portfolio/calligraphy/circular-marathi-calligraphy-sun-mandala.webp',",
  "heroImage: '/portfolio/brand-identity/saga-ratna/sagar-ratna-brand-identity-concept-cover.webp',\n    galleryImages: [\n      {\n        url: '/portfolio/brand-identity/saga-ratna/sagar-ratna-brand-identity-concept-cover.webp',\n        caption: 'Sagar Ratna: Comprehensive Brand Identity & Visual System Manual',\n        tag: 'Identity Manual',\n        alt: 'Sagar Ratna brand identity presentation cover featuring new logo icon, green and gold brand colors'\n      },\n      {\n        url: '/portfolio/brand-identity/tag-heuer/tag-heuer-devanagari-wordmark-presentation.webp',\n        caption: 'TAG Heuer: Devanagari Luxury Wordmark System',\n        tag: 'Multilingual Brand',\n        alt: 'TAG Heuer luxury brandmark re-imagined in bold Devanagari script with iconic green and red shield'\n      },\n      {\n        url: '/portfolio/brand-identity/royal-enfield/royal-enfield-live-royal-ride-royal-cover.webp',\n        caption: 'Royal Enfield: \"Live Royal, Ride Royal\" Cultural Heritage Campaign',\n        tag: 'Brand Campaign',\n        alt: 'Royal Enfield Live Royal Ride Royal campaign headline with traditional Indian pagadi and helmet'\n      },"
);

// Upgrade brand-colour-typography hero and gallery
content = content.replace(
  "heroImage: '/portfolio/calligraphy/gita-and-quran-harmony-devanagari-calligraphy.webp',\n    galleryImages: [\n      {\n        url: '/portfolio/calligraphy/gita-and-quran-harmony-devanagari-calligraphy.webp',",
  "heroImage: '/portfolio/brand-identity/saga-ratna/sagar-ratna-color-palette-typography-system.webp',\n    galleryImages: [\n      {\n        url: '/portfolio/brand-identity/saga-ratna/sagar-ratna-color-palette-typography-system.webp',\n        caption: 'Sagar Ratna: Color Hierarchy & Devanagari-Latin Typographic Standards',\n        tag: 'Color & Typography',\n        alt: 'Sagar Ratna brand color swatch cards in deep green, golden yellow, cream, and typography specimens'\n      },\n      {\n        url: '/portfolio/brand-identity/tag-heuer/tag-heuer-devanagari-grid-anatomy-shirorekha.webp',\n        caption: 'TAG Heuer: Typographic Grid Anatomy — Shirorekha & Padrekha Construction',\n        tag: 'Glyph Drafting',\n        alt: 'Typographic blueprint grid showing exact geometric lines constructing the Devanagari letters for TAG Heuer'\n      },"
);

// Upgrade packaging-label-design hero and gallery
content = content.replace(
  "heroImage: '/portfolio/installations/flight-of-peace-paper-doves-sculpture.webp',\n    galleryImages: [\n      {\n        url: '/portfolio/installations/flight-of-peace-paper-doves-sculpture.webp',",
  "heroImage: '/portfolio/brand-identity/packaging/brambles-swan-duck-food-packaging-flat.webp',\n    galleryImages: [\n      {\n        url: '/portfolio/brand-identity/packaging/brambles-swan-duck-food-packaging-flat.webp',\n        caption: 'Brambles Swan & Duck Food: Primary Carton Die-Line Design',\n        tag: 'Structural Packaging',\n        alt: 'Flat packaging die-line design for Brambles Swan and Duck food box with swan graphics'\n      },\n      {\n        url: '/portfolio/brand-identity/packaging/brambles-swan-duck-feeder-box-3d.webp',\n        caption: 'Brambles: 3D Fabricated Feeder Box & Floating Dispenser Prototype',\n        tag: '3D Prototyping',\n        alt: 'Three-dimensional prototype mockup of Brambles duck food packaging with pour spout on wooden table'\n      },\n      {\n        url: '/portfolio/brand-identity/saga-ratna/sagar-ratna-takeaway-packaging-butter-paper.webp',\n        caption: 'Sagar Ratna: Eco Takeaway Packaging & Custom Butter Paper Wraps',\n        tag: 'Food Packaging',\n        alt: 'Sagar Ratna eco delivery packaging boxes, kraft paper bags, and patterned food wrapping paper'\n      },"
);

// Upgrade business-stationery hero and gallery
content = content.replace(
  "heroImage: '/portfolio/calligraphy/gulzar-poetry-spiral-devanagari-calligraphy.webp',\n    galleryImages: [\n      {\n        url: '/portfolio/calligraphy/gulzar-poetry-spiral-devanagari-calligraphy.webp',",
  "heroImage: '/portfolio/brand-identity/saga-ratna/sagar-ratna-restaurant-stationery-business-cards.webp',\n    galleryImages: [\n      {\n        url: '/portfolio/brand-identity/saga-ratna/sagar-ratna-restaurant-stationery-business-cards.webp',\n        caption: 'Sagar Ratna: Corporate Stationery, Foil Cards & Dining Touchpoints',\n        tag: 'Stationery Suite',\n        alt: 'Sagar Ratna corporate stationery suite with embossed green business cards and gold foil letterheads'\n      },"
);

// Upgrade campaign-concepts hero and gallery
content = content.replace(
  "heroImage: '/portfolio/installations/creative-tree-of-knowledge-sculpture.webp',\n    galleryImages: [\n      {\n        url: '/portfolio/installations/creative-tree-of-knowledge-sculpture.webp',",
  "heroImage: '/portfolio/campaigns/wwf/wwf-rhino-horn-poaching-child-print-ad.webp',\n    galleryImages: [\n      {\n        url: '/portfolio/campaigns/wwf/wwf-rhino-horn-poaching-child-print-ad.webp',\n        caption: 'WWF Anti-Poaching: The Torn Horn — Our Children\\'s Future Matters',\n        tag: 'Advocacy Campaign',\n        alt: 'WWF anti-poaching print ad showing little girl crying while holding a stuffed rhino toy with its horn ripped off'\n      },\n      {\n        url: '/portfolio/brand-identity/levis/levis-desert-heat-polar-bear.webp',\n        caption: 'Levi\\'s: Desert Heat in Winter — National Fashion Print Campaign',\n        tag: 'Fashion Advertising',\n        alt: 'Levi\\'s winter campaign ad featuring a polar bear wearing denim jacket relaxing on ice under warm sunlight'\n      },\n      {\n        url: '/portfolio/advertising/boat-rockerz-luxury-of-sound-poster.webp',\n        caption: 'boAt Rockerz: The Luxury of Sound Advertising Poster',\n        tag: 'Print Ad',\n        alt: 'boAt Rockerz advertising poster featuring dynamic drummer playing on headphones in deep space'\n      },"
);

fs.writeFileSync(cataloguePath, content, 'utf-8');
console.log('Successfully updated servicesCatalogue.js with 6 new subservices and upgraded branding imagery!');

