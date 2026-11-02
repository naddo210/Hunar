const fs = require('fs');
const path = require('path');

const catPath = path.join(__dirname, '../client/src/data/servicesCatalogue.js');
let content = fs.readFileSync(catPath, 'utf-8');

const replacements = [
  ['https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80', '/portfolio/portraits/elder-gentleman-turban-oil-portrait.webp'],
  ['https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=800&q=80', '/portfolio/calligraphy/marathi-devanagari-ganpati-watercolor-calligraphy.webp'],
  ['https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80', '/portfolio/calligraphy/circular-marathi-calligraphy-sun-mandala.webp'],
  ['https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80', '/portfolio/web-design/greek-automata-techfest-website.webp'],
  ['https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80', '/portfolio/portraits/monochrome-charcoal-woman-montage.webp'],
  ['https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80', '/portfolio/glass-painting/christmas-gift-boxes-cafe-window-display.webp'],
  ['https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80', '/portfolio/calligraphy/gulzar-bosky-poem-devanagari-calligraphy.webp'],
  ['https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80', '/portfolio/calligraphy/shakespeare-sonnet-circular-calligraphy.webp'],
  ['https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', '/portfolio/calligraphy/koshish-harivansh-rai-bachchan-calligraphy.webp'],
  ['https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80', '/portfolio/web-design/greek-automata-techfest-website.webp'],
  ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80', '/portfolio/calligraphy/gita-and-quran-harmony-devanagari-calligraphy.webp']
];

for (const [target, repl] of replacements) {
  content = content.split(target).join(repl);
}

fs.writeFileSync(catPath, content, 'utf-8');
console.log('Cleaned all remaining unsplash references in servicesCatalogue.js');

