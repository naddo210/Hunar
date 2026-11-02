const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../client/src/data/servicesCatalogue.js');
let content = fs.readFileSync(targetPath, 'utf-8');

// 1. Enrich resin-art
const oldResin = `  'resin-art': {
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
        url: '/portfolio/installations/flight-of-peace-paper-doves-sculpture.webp',
        caption: 'Flight of Peace: Three-Dimensional Sculpted Paper Doves',
        tag: 'Dimensional Art'
      }
    ],
    deliverables: [
      'Non-Yellowing UV-Resistant Crystal Resin',
      'Hand-Polished High Gloss Edges',
      'Care and Maintenance Guide'
    ],
    faqs: [
      {
        q: 'Is the resin heat resistant?',
        a: 'Our decorative objects are cured with high-grade resins resistant to casual tabletop heat.'
      }
    ]
  },`;

const newResin = `  'resin-art': {
    division: 'art-products',
    slug: 'resin-art',
    title: 'Resin Art, River Tables & Decorative Objects',
    primaryKeyword: 'resin art decorative objects custom resin river tables wall art panels',
    metaTitle: 'Resin Art, River Tables & Decorative Objects — Custom Studio Pieces | HUNAR',
    metaDescription: 'Commission bespoke handcrafted resin art, resin river console tables, decorative wall panels, and sculptural objects by HUNAR Creative Studio. UV-stable, non-yellowing crystal epoxy.',
    summary: 'Optical crystal clear resin decorative objects, river tables, and architectural panels layered with shimmering metallic pigments, gold leaf inlays, raw live-edge hardwoods, and deep mineral swells.',
    heroImage: '/portfolio/installations/flight-of-peace-paper-doves-sculpture.webp',
    galleryImages: [
      {
        url: '/portfolio/installations/flight-of-peace-paper-doves-sculpture.webp',
        caption: 'Flight of Peace: Three-Dimensional Sculptural Kinetic Art Object',
        tag: 'Dimensional Art',
        alt: 'Kinetic 3D paper dove sculpture installation with gold accents against deep emerald wall'
      },
      {
        url: '/portfolio/installations/creative-tree-of-knowledge-sculpture.webp',
        caption: 'Tree of Knowledge: Handcrafted Mixed Media Spatial Sculpture',
        tag: 'Spatial Object',
        alt: 'Freestanding colorful artistic tree sculpture featuring branches with camera and art tools'
      }
    ],
    deliverables: [
      'UV-Stable Non-Yellowing Optical Epoxy Resin Formulation',
      'Kiln-Dried Live-Edge Hardwood Integration (Teak, Walnut, Rosewood)',
      'Multi-Stage Hand Diamond Polishing (Mirror Gloss or Satin Matte)',
      'Custom Powder-Coated Steel or Brass Table Base Fabrication',
      'White-Glove Crated Delivery & Comprehensive Care Manual'
    ],
    faqs: [
      {
        q: 'Is your resin scratch and heat resistant?',
        a: 'Yes. We finish our resin tables and wall art with an industrial nano-ceramic topcoat rated up to 90°C (194°F) with high scratch resistance.'
      },
      {
        q: 'Can you create custom dining tables or console tables with resin river inlays?',
        a: 'Yes. We curate sustainably sourced kiln-dried live-edge timber slabs and cast custom epoxy rivers tinted with your choice of metallic, smoke, ocean blue, or crystal clear hues.'
      },
      {
        q: 'Do you create bespoke 3D sculptural wall panels in resin?',
        a: 'Yes. We craft large-format architectural resin wall art up to 8ft in length, perfect as statement pieces for luxury residences, hotel foyers, and executive boardrooms.'
      }
    ]
  },`;

if (content.includes(oldResin)) {
  content = content.replace(oldResin, newResin);
  console.log('✓ Successfully enriched resin-art');
} else {
  console.warn('Warning: oldResin exact block not found');
}

fs.writeFileSync(targetPath, content, 'utf-8');
console.log('Finished updating servicesCatalogue.js');
