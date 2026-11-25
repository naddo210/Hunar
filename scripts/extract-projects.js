const fs = require('fs');

const code = fs.readFileSync('scripts/portfolio-bundle.js', 'utf-8');

const startIdx = code.indexOf('const P=[');
if (startIdx !== -1) {
  // Find where P ends
  const endIdx = code.indexOf('];', startIdx);
  const pCode = code.slice(startIdx, endIdx + 2);
  console.log(pCode);
}
