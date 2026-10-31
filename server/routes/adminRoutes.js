const express = require('express');
const router = express.Router();
const {
  getLeads,
  getLeadStats,
  getLeadById,
  updateLeadStatus,
  addLeadNote,
  updateFollowUpDate,
  exportLeadsCSV,
} = require('../controllers/adminController');
const { requireAdminAuth } = require('../middleware/auth');

// All admin routes require authenticated session
router.use(requireAdminAuth);

// GET /api/admin/stats - KPI summary
router.get('/stats', getLeadStats);

// GET /api/admin/leads/export - CSV download
router.get('/leads/export', exportLeadsCSV);

// GET /api/admin/leads - Paginated lead list with search & filters
router.get('/leads', getLeads);

// GET /api/admin/leads/:id - Single lead details & full attribution
router.get('/leads/:id', getLeadById);

// PATCH /api/admin/leads/:id/status - Update lead status with audit trail
router.patch('/leads/:id/status', updateLeadStatus);

// POST /api/admin/leads/:id/notes - Add internal note
router.post('/leads/:id/notes', addLeadNote);

// PATCH /api/admin/leads/:id/follow-up - Schedule follow-up date
router.patch('/leads/:id/follow-up', updateFollowUpDate);

module.exports = router;
