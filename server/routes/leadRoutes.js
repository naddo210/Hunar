const express = require('express');
const router = express.Router();
const { submitLead } = require('../controllers/leadController');
const { leadSubmissionLimiter } = require('../middleware/rateLimiter');

// POST /api/leads - public enquiry submission with rate limiting
router.post('/', leadSubmissionLimiter, submitLead);

module.exports = router;
