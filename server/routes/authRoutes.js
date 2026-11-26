const express = require('express');
const router = express.Router();
const { login, logout, getMe, getSession, changePassword, resetForgotPassword } = require('../controllers/authController');
const { requireAdminAuth } = require('../middleware/auth');
const { authLimiter } = require('../middleware/rateLimiter');

// POST /api/auth/login - rate limited
router.post('/login', authLimiter, login);

// POST /api/auth/reset-password - recovery endpoint, rate limited
router.post('/reset-password', authLimiter, resetForgotPassword);

// POST /api/auth/change-password - protected session endpoint
router.post('/change-password', requireAdminAuth, changePassword);

// POST /api/auth/logout
router.post('/logout', logout);

// GET /api/auth/session - non-erroring frontend session probe
router.get('/session', getSession);

// GET /api/auth/me - protected session check (returns 401 if unauthenticated)
router.get('/me', requireAdminAuth, getMe);

module.exports = router;
