const express = require('express');
const router = express.Router();
const { login, logout, getMe, changePassword, resetForgotPassword } = require('../controllers/authController');
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

// GET /api/auth/me - protected session check
router.get('/me', requireAdminAuth, getMe);

module.exports = router;
