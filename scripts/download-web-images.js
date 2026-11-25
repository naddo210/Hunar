const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesToDownload = [
  { url: 'https://myport-547t.vercel.app/ISLAMIC.png', filename: 'islamic-quiz-app-portal.webp' },
  { url: 'https://myport-547t.vercel.app/vidtube.png', filename: 'vidtube-video-streaming-platform.webp' },
  { url: 'https://myport-547t.vercel.app/personalpp.png', filename: 'nadeem-salmani-portfolio-v1.webp' },
];

const destDir = path.join(__dirname, '../client/public/portfolio/web-design');

async function downloadAndConvert(item) {
  const destPath = path.join(destDir, item.filename);
  return new Promise((resolve, reject) => {
    https.get(item.url, (res) => {
      if (res.statusCode !== 200) {
        console.error(`Failed to download ${item.url}: HTTP ${res.statusCode}`);
        return resolve();
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', async () => {
        const buffer = Buffer.concat(chunks);
        try {
          await sharp(buffer)
            .webp({ quality: 85 })
            .toFile(destPath);
          console.log(`✓ Saved and converted: ${item.filename}`);
          resolve();
        } catch (err) {
          console.error(`Sharp error on ${item.filename}:`, err);
          resolve();
        }
      });
    }).on('error', err => {
      console.error(`Download error for ${item.url}:`, err);
      resolve();
    });
  });
}

async function main() {
  for (const item of imagesToDownload) {
    await downloadAndConvert(item);
  }
}

main();
