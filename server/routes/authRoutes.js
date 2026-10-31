const express = require('express');
const router = express.Router();
const { login, logout, getMe } = require('../controllers/authController');
const { requireAdminAuth } = require('../middleware/auth');
const { authLimiter } = require('../middleware/rateLimiter');

// POST /api/auth/login - rate limited
router.post('/login', authLimiter, login);

// POST /api/auth/logout
router.post('/logout', logout);

// GET /api/auth/me - protected session check
router.get('/me', requireAdminAuth, getMe);

module.exports = router;
