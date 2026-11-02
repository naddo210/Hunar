require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';

// Connect to MongoDB
connectDB();

// Security Middlewares
app.use(helmet({
  contentSecurityPolicy: false, // Allows flexible integration with React client & external fonts
  crossOriginResourcePolicy: { policy: 'cross-origin' },
}));

app.use(cors({
  origin: [CLIENT_URL, 'http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
}));

// Body parsers
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));
app.use(cookieParser());

// Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'HUNAR Creative Studio API',
    uptime: process.uptime(),
  });
});

// Dynamic Robots.txt
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send(`User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/

Sitemap: ${CLIENT_URL}/sitemap.xml
`);
});

// Dynamic Sitemap.xml
app.get('/sitemap.xml', (req, res) => {
  const publicRoutes = [
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
    // Custom Art & Commissions Sub-Services
    '/services/custom-art/calligraphy-services',
    '/services/custom-art/live-wedding-painting-caricature',
    '/services/custom-art/custom-portraits',
    '/services/custom-art/couple-portraits',
    '/services/custom-art/family-portraits',
    '/services/custom-art/pet-portraits',
    '/services/custom-art/pencil-charcoal-drawings',
    '/services/custom-art/ink-coloured-pencil-art',
    '/services/custom-art/canvas-paintings',
    '/services/custom-art/abstract-art',
    '/services/custom-art/personalized-art-gifts',
    '/services/custom-art/digital-illustration',
    '/services/custom-art/photo-to-sketch',
    // Original Art & Art Products Sub-Services
    '/services/art-products/original-paintings',
    '/services/art-products/art-prints',
    '/services/art-products/resin-art',
    '/services/art-products/sculptures-handmade-art',
    '/services/art-products/home-office-art',
    '/services/art-products/seasonal-art-gifts',
    // Branding & Visual Identity Sub-Services
    '/services/branding-design/advertising-campaigns',
    '/services/branding-design/logo-design',
    '/services/branding-design/brand-identity',
    '/services/branding-design/brand-colour-typography',
    '/services/branding-design/business-stationery',
    '/services/branding-design/packaging-label-design',
    '/services/branding-design/brand-naming',
    '/services/branding-design/brand-guidelines',
    '/services/branding-design/rebranding',
    // Website Design & Development Sub-Services
    '/services/website-development/business-websites',
    '/services/website-development/portfolio-websites',
    '/services/website-development/ecommerce-websites',
    '/services/website-development/landing-pages',
    '/services/website-development/agency-websites',
    '/services/website-development/website-redesign',
    // Digital Content & Motion Sub-Services
    '/services/digital-content/logo-animation',
    '/services/digital-content/animated-social-posts',
    '/services/digital-content/campaign-concepts',
    '/services/digital-content/content-planning',
    // Murals, Interior Art & Commercial Projects Sub-Services
    '/services/murals-commercial-art/commercial-glass-painting',
    '/services/murals-commercial-art/event-tattoos-face-painting',
    '/services/murals-commercial-art/theatrical-stage-design',
    '/services/murals-commercial-art/wall-murals',
    '/services/murals-commercial-art/office-art-installations',
    '/services/murals-commercial-art/interior-art-styling',
    '/services/murals-commercial-art/resin-sculptural-installations',
    '/services/murals-commercial-art/branded-wall-art',
    '/services/murals-commercial-art/event-backdrops-live-art',
    '/services/murals-commercial-art/corporate-art-gifting',
    // Creative Products & Digital Assets Sub-Services
    '/services/creative-products/custom-merchandise',
    '/services/creative-products/branded-tote-bags-notebooks',
    '/services/creative-products/digital-invitations-planners',
    '/services/creative-products/presentation-templates',
    '/services/creative-products/social-media-templates',
    '/services/creative-products/downloadable-art',
    '/services/creative-products/packaging-illustration',
    '/services/creative-products/licensed-digital-assets',
  ];

  const now = new Date().toISOString().split('T')[0];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${publicRoutes.map(route => `  <url>
    <loc>${CLIENT_URL}${route}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${route === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '' ? '1.0' : route.startsWith('/services') ? '0.9' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  res.type('application/xml');
  res.send(xml);
});

// Routes
const leadRoutes = require('./routes/leadRoutes');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use('/api/leads', leadRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

// 404 handler for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ success: false, message: 'API endpoint not found.' });
});

// Serve frontend build in production or standalone
const path = require('path');
const clientDistPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientDistPath));

// Fallback all non-API routes to index.html for client routing
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(clientDistPath, 'index.html'), (err) => {
    if (err) next();
  });
});

// Centralized Error Handler
app.use((err, req, res, next) => {
  console.error('[API Error]:', err.stack || err.message);
  const statusCode = err.status || 500;
  res.status(statusCode).json({
    success: false,
    message: statusCode === 500 && process.env.NODE_ENV === 'production' 
      ? 'An internal server error occurred.' 
      : err.message,
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
  });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`[HUNAR Server] Running on http://localhost:${PORT} in ${process.env.NODE_ENV || 'development'} mode.`);
  });
}

module.exports = app;
