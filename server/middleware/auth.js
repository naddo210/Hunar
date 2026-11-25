const jwt = require('jsonwebtoken');
const AdminUser = require('../models/AdminUser');

const JWT_SECRET = process.env.JWT_SECRET || 'hunar_studio_jwt_secure_secret_key_2026_dev';

if (process.env.NODE_ENV === 'production' && (!process.env.JWT_SECRET || process.env.JWT_SECRET === 'hunar_studio_jwt_secure_secret_key_2026_dev')) {
  console.warn('[SECURITY WARNING] Production environment detected with default JWT_SECRET. Set JWT_SECRET in production environment variables.');
}

const requireAdminAuth = async (req, res, next) => {
  try {
    let token = req.cookies?.hunar_admin_token;

    if (!token && req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required. Access to admin CRM is restricted.',
      });
    }

    // Explicitly enforce trusted HS256 algorithm to prevent algorithm substitution attacks (none / asymmetric spoofing)
    const decoded = jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] });
    const user = await AdminUser.findById(decoded.id).select('-passwordHash');

    if (!user || !user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Account not authorized or has been disabled.',
      });
    }

    req.adminUser = user;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired session. Please sign in again.',
    });
  }
};

module.exports = { requireAdminAuth };
