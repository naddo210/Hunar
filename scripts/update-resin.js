const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../client/src/data/servicesCatalogue.js');
let content = fs.readFileSync(targetPath, 'utf-8');

const start = content.indexOf("'resin-art': {");
const end = content.indexOf("'sculptures-handmade-art': {");

if (start !== -1 && end !== -1) {
  const newResinBlock = `'resin-art': {
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
        tag: 'Dimensional Art'
      },
      {
        url: '/portfolio/installations/creative-tree-of-knowledge-sculpture.webp',
        caption: 'Tree of Knowledge: Handcrafted Mixed Media Spatial Sculpture',
        tag: 'Spatial Object'
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
  },
  `;

  content = content.slice(0, start) + newResinBlock + content.slice(end);
  fs.writeFileSync(targetPath, content, 'utf-8');
  console.log('✓ Successfully replaced resin-art block!');
} else {
  console.error('Failed to locate slice boundaries:', { start, end });
}
