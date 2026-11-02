const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../client/src/data/servicesCatalogue.js');
let fileContent = fs.readFileSync(targetPath, 'utf-8');

// Fix commercial-glass-painting
const badGlass = `  'commercial-glass-painting': {
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
  },`;

const fixedGlass = `  'commercial-glass-painting': {
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
        url: '/portfolio/glass-painting/cafe-bistro-reindeer-night-window.webp',
        caption: 'The Bistro: Illuminated Evening Reindeer Storefront Window Art',
        tag: 'Cafe Facade',
        alt: 'Illuminated night view of hand-painted reindeer and winter scenery on cafe window'
      },
      {
        url: '/portfolio/glass-painting/holiday-reindeer-christmas-window-painting.webp',
        caption: 'Noël Woodland: Holiday Storefront Window Display with Reindeer',
        tag: 'Holiday Display',
        alt: 'Hand-painted Christmas window art on glass entrance featuring white reindeer stags, Christmas tree, and snow'
      },
      {
        url: '/portfolio/glass-painting/christmas-gift-boxes-cafe-window-display.webp',
        caption: 'Yuletide Celebration: Gift Boxes & Pine Wreath Window Display',
        tag: 'Retail Display',
        alt: 'Festive painted gift boxes and ribbons on storefront glass'
      },
      {
        url: '/portfolio/glass-painting/merry-christmas-botanical-wreath-glass.webp',
        caption: 'Botanical Noel: Illustrated Pine Wreath & Calligraphic Greeting',
        tag: 'Retail Branding',
        alt: 'Intricate circular Christmas wreath and Merry Christmas calligraphy painted in snow-white enamel on glass'
      },
      {
        url: '/portfolio/glass-painting/diwali-front-desk-glass-diyas.webp',
        caption: 'Deepavali Illumination: Festive Oil Lamps Glass Painting',
        tag: 'Festive Decor',
        alt: 'Hand-painted glowing Diwali diyas and floral motifs on commercial reception glass partition'
      },
      {
        url: '/portfolio/glass-painting/santa-on-chopper-motorcycle-glass-painting.webp',
        caption: 'Biker Noel: Santa Riding a Custom Chopper Motorcycle Window Mural',
        tag: 'Whimsical Window',
        alt: 'Whimsical Christmas glass painting of Santa Claus riding a custom motorcycle chopper on showroom window'
      },
      {
        url: '/portfolio/glass-painting/ganesh-chaturthi-showroom-glass-painting.webp',
        caption: 'Ganeshotsav: Showroom Glass Mural & Auspicious Motifs',
        tag: 'Cultural Decor',
        alt: 'Detailed hand-painted Ganesha glass mural on showroom entrance'
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
  },`;

if (fileContent.includes(badGlass)) {
  fileContent = fileContent.replace(badGlass, fixedGlass);
  console.log('✓ Fixed glass painting entries');
}

// Fix live-wedding-painting-caricature
const badCaricature = `  'live-wedding-painting-caricature': {
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
  },`;

const fixedCaricature = `  'live-wedding-painting-caricature': {
    division: 'custom-art',
    slug: 'live-wedding-painting-caricature',
    title: 'Live Wedding Painting & Rapid Event Caricatures',
    primaryKeyword: 'live wedding painter speed caricatures event watercolor portraits wedding artist',
    metaTitle: 'Live Wedding Painting & Speed Guest Caricatures | HUNAR Creative Studio',
    metaDescription: 'Capture your wedding or luxury gala live on canvas. HUNAR provides master live wedding painters and rapid guest caricaturists creating unforgettable heirloom entertainment and guest favors.',
    summary: 'Enchant your wedding guests with live experiential fine art. Watch our master painter capture your wedding pheras, vow exchange, or first dance live on a fine art canvas throughout the evening, alongside rapid live guest caricaturists producing framed, humorous, yet deeply flattering keepsake portraits in 4 minutes flat.',
    heroImage: '/portfolio/caricature/live-family-caricature-portrait.webp',
    galleryImages: [
      {
        url: '/portfolio/caricature/live-family-caricature-portrait.webp',
        caption: 'Family Milestone: Multi-Generational Group Wedding Caricature',
        tag: 'Live Wedding Art',
        alt: 'Group caricature portrait of Indian family members celebrating together with joyful expressions'
      },
      {
        url: '/portfolio/caricature/amruta-saree-portrait-caricature.webp',
        caption: 'The Saree Elegance: Live Wedding Guest Watercolor Caricature',
        tag: 'Guest Portrait',
        alt: 'Hand-painted watercolor caricature of a woman in elegant traditional saree and jewelry'
      },
      {
        url: '/portfolio/caricature/sarvesh-live-caricature-event-drawing.webp',
        caption: 'Gala Evening: 4-Minute Live Event Caricature on Cardstock',
        tag: 'Speed Caricature',
        alt: 'Charismatic young man drawn in live speed caricature on archival cardstock'
      },
      {
        url: '/portfolio/caricature/smiling-woman-curls-ink-caricature.webp',
        caption: 'Joyful Radiance: Fine-Line Ink & Brush Event Caricature',
        tag: 'Ink Caricature',
        alt: 'Expressive ink line caricature of smiling woman with curls drawn at wedding reception'
      },
      {
        url: '/portfolio/caricature/tushar-watercolor-caricature-portrait.webp',
        caption: 'Festive Baraat: Live Watercolor Guest Keepsake',
        tag: 'Watercolor Caricature',
        alt: 'Vibrant watercolor caricature portrait of wedding attendee with expressive features'
      },
      {
        url: '/portfolio/caricature/anuj-glasses-ink-caricature.webp',
        caption: 'Bespoke Keepsake: Speed Caricature with Studio Embossed Seal',
        tag: 'Guest Favor',
        alt: 'Speed ink caricature of gentleman with glasses drawn at cocktail gala'
      },
      {
        url: '/portfolio/caricature/young-girl-live-watercolor-portrait-booth.webp',
        caption: 'Wedding Booth: Live Watercolor Keepsake for Young Guests',
        tag: 'Live Booth',
        alt: 'Delicate watercolor sketch portrait of young girl created at live event booth'
      },
      {
        url: '/portfolio/caricature/pigtail-girl-watercolor-portrait-sketch.webp',
        caption: 'Cherished Moment: Delicate Watercolor Child Portrait',
        tag: 'Child Portrait',
        alt: 'Watercolor portrait sketch of young girl with braided pigtails'
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
  },`;

if (fileContent.includes(badCaricature)) {
  fileContent = fileContent.replace(badCaricature, fixedCaricature);
  console.log('✓ Fixed caricature entries');
}

fs.writeFileSync(targetPath, fileContent, 'utf-8');
console.log('Finished fixing image paths in servicesCatalogue.js!');

