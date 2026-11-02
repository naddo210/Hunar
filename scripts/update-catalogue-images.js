const fs = require('fs');
const path = require('path');

const catPath = path.join(__dirname, '../client/src/data/servicesCatalogue.js');
let content = fs.readFileSync(catPath, 'utf-8');

const mapping = {
  'ink-coloured-pencil-art': {
    hero: '/portfolio/calligraphy/marathi-devanagari-ganpati-watercolor-calligraphy.webp',
  },
  'abstract-art': {
    hero: '/portfolio/calligraphy/circular-marathi-calligraphy-sun-mandala.webp',
  },
  'digital-illustration': {
    hero: '/portfolio/web-design/greek-automata-techfest-website.webp',
  },
  'art-prints': {
    hero: '/portfolio/portraits/monochrome-charcoal-woman-montage.webp',
  },
  'seasonal-art-gifts': {
    hero: '/portfolio/glass-painting/holiday-reindeer-christmas-window-painting.webp',
  },
  'brand-colour-typography': {
    hero: '/portfolio/calligraphy/koshish-harivansh-rai-bachchan-calligraphy.webp',
  },
  'business-stationery': {
    hero: '/portfolio/calligraphy/shakespeare-sonnet-circular-calligraphy.webp',
  },
  'brand-naming': {
    hero: '/portfolio/calligraphy/koshish-harivansh-rai-bachchan-calligraphy.webp',
  },
  'brand-guidelines': {
    hero: '/portfolio/calligraphy/koshish-harivansh-rai-bachchan-calligraphy.webp',
  },
  'rebranding': {
    hero: '/portfolio/calligraphy/shakespeare-sonnet-circular-calligraphy.webp',
  },
  'content-planning': {
    hero: '/portfolio/murals/botanical-mural-concept-design.webp',
  },
  'digital-invitations-planners': {
    hero: '/portfolio/calligraphy/gulzar-bosky-poem-devanagari-calligraphy.webp',
  },
  'presentation-templates': {
    hero: '/portfolio/web-design/greek-automata-techfest-website.webp',
  },
  'social-media-templates': {
    hero: '/portfolio/web-design/shikha-singh-luxury-model-portfolio.webp',
  },
  'packaging-illustration': {
    hero: '/portfolio/calligraphy/gita-and-quran-harmony-devanagari-calligraphy.webp',
  },
  'pet-portraits': {
    hero: '/portfolio/portraits/vibrant-crimson-woman-oil-portrait.webp',
  }
};

let count = 0;
for (const [key, val] of Object.entries(mapping)) {
  const blockStart = content.indexOf(`'${key}':`);
  if (blockStart === -1) {
    console.log('Key not found:', key);
    continue;
  }
  const nextBlock = content.indexOf('\n  },', blockStart);
  if (nextBlock === -1) {
    console.log('End of block not found:', key);
    continue;
  }
  let block = content.slice(blockStart, nextBlock + 5);
  block = block.replace(/heroImage:\s*'[^']+'/, `heroImage: '${val.hero}'`);
  content = content.slice(0, blockStart) + block + content.slice(nextBlock + 5);
  count++;
}

fs.writeFileSync(catPath, content, 'utf-8');
console.log('Successfully updated final', count, 'subservices in servicesCatalogue.js');
