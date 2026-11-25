const https = require('https');
const fs = require('fs');

https.get('https://myport-547t.vercel.app/assets/index-C3FfD8KV.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('scripts/portfolio-bundle.js', data);
    console.log('Saved bundle, length:', data.length);
  });
}).on('error', err => {
  console.error(err);
});
