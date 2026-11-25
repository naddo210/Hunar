const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../client/src/data/servicesCatalogue.js');
let content = fs.readFileSync(targetFile, 'utf8');

const before = "heroImage: '/portfolio/calligraphy/koshish-harivansh-rai-bachchan-calligraphy.webp'";
const after = "heroImage: '/portfolio/brand-identity/saga-ratna/sagar-ratna-brand-identity-concept-cover.webp'";

if (content.includes(before)) {
  content = content.replace(before, after);
  fs.writeFileSync(targetFile, content, 'utf8');
  console.log('✓ Successfully updated heroImage for branding-design in servicesCatalogue.js');
} else {
  console.log('Target string not found!');
}
