const app = require('../server/server');

module.exports = (req, res) => {
  try {
    if (req.url && !req.url.startsWith('/api') && (
      req.url.startsWith('/auth') || 
      req.url.startsWith('/leads') || 
      req.url.startsWith('/admin') || 
      req.url.startsWith('/health')
    )) {
      req.url = '/api' + req.url;
    }
    return app(req, res);
  } catch (err) {
    console.error('[Vercel Serverless Invocation Error]:', err);
    res.status(500).json({ success: false, message: err.message });
  }
};
