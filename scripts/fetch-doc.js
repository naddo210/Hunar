const fs = require('fs');
const https = require('https');

https.get("https://docs.google.com/document/u/0/d/1-sGf-hs8l35k3_67xvQk967bXVQvYJL1E52A9KHmmrM/mobilebasic?pli=1", (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    // Strip HTML tags to extract clean text
    const text = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                     .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                     .replace(/<[^>]+>/g, '\n')
                     .replace(/&quot;/g, '"')
                     .replace(/&amp;/g, '&')
                     .replace(/&lt;/g, '<')
                     .replace(/&gt;/g, '>')
                     .replace(/&#39;/g, "'")
                     .replace(/\n\s*\n/g, '\n');
    fs.writeFileSync('scripts/security-doc.txt', text);
    console.log('Saved security doc text, length:', text.length);
  });
});
