const app = require('../server/server');

module.exports = (req, res) => {
  // Normalize req.url if Vercel serverless functions stripped the /api prefix
  if (req.url && !req.url.startsWith('/api') && (
    req.url.startsWith('/auth') || 
    req.url.startsWith('/leads') || 
    req.url.startsWith('/admin') || 
    req.url.startsWith('/health')
  )) {
    req.url = '/api' + req.url;
  }
  return app(req, res);
};
