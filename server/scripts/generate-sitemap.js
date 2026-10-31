const fs = require('fs');
const path = require('path');

async function generate() {
  const { SUB_SERVICES } = await import('../../client/src/data/servicesCatalogue.js');
  const routes = [
    '',
    '/about',
    '/portfolio',
    '/services',
    '/services/custom-art',
    '/services/art-products',
    '/services/branding-design',
    '/services/website-development',
    '/services/digital-content',
    '/services/murals-commercial-art',
    '/services/creative-products',
    '/art-classes',
    '/contact',
    '/faq',
    '/privacy',
    '/cookies',
    '/terms',
    ...Object.values(SUB_SERVICES).map(s => `/services/${s.division}/${s.slug}`)
  ];

  const now = new Date().toISOString().split('T')[0];
  const urls = routes.map(r => `  <url>
    <loc>https://hunarstudio.com${r}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${r === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${r === '' ? '1.0' : r.startsWith('/services') ? '0.9' : '0.8'}</priority>
  </url>`).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  const destPath = path.join(__dirname, '../../client/public/sitemap.xml');
  fs.writeFileSync(destPath, xml, 'utf8');
  console.log(`[Sitemap] Generated ${destPath} with ${routes.length} verified routes.`);
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});

