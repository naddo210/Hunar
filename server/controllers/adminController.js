const validator = require('validator');
const Lead = require('../models/Lead');

/**
 * Get Paginated & Filtered Leads
 */
const getLeads = async (req, res, next) => {
  try {
    const {
      search = '',
      service = '',
      status = '',
      source = '',
      startDate = '',
      endDate = '',
      page = 1,
      limit = 20,
    } = req.query;

    const query = {};

    // Search query across name, email, leadNumber, organization
    if (search.trim()) {
      const escapedSearch = search.trim();
      query.$or = [
        { fullName: { $regex: escapedSearch, $options: 'i' } },
        { email: { $regex: escapedSearch, $options: 'i' } },
        { leadNumber: { $regex: escapedSearch, $options: 'i' } },
        { organization: { $regex: escapedSearch, $options: 'i' } },
      ];
    }

    // Filter by Service
    if (service && service !== 'all') {
      query.serviceCategory = service;
    }

    // Filter by Status
    if (status && status !== 'all') {
      query.status = status;
    }

    // Filter by Campaign / Source
    if (source && source !== 'all') {
      query['firstTouch.utm.source'] = source.toLowerCase();
    }

    // Filter by Date Range
    if (startDate || endDate) {
      query.createdAt = {};
      if (startDate) query.createdAt.$gte = new Date(startDate);
      if (endDate) query.createdAt.$lte = new Date(new Date(endDate).setHours(23, 59, 59, 999));
    }

    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.min(100, Math.max(1, parseInt(limit, 10) || 20));
    const skip = (pageNum - 1) * limitNum;

    const [leads, total] = await Promise.all([
      Lead.find(query).sort({ createdAt: -1 }).skip(skip).limit(limitNum).lean(),
      Lead.countDocuments(query),
    ]);

    return res.status(200).json({
      success: true,
      leads,
      pagination: {
        total,
        page: pageNum,
        limit: limitNum,
        pages: Math.ceil(total / limitNum) || 1,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Lead Analytics & KPI Summary
 */
const getLeadStats = async (req, res, next) => {
  try {
    const [
      totalLeads,
      newLeads,
      contactedLeads,
      qualifiedLeads,
      proposalLeads,
      wonLeads,
      lostLeads,
      byService,
      byTraffic,
    ] = await Promise.all([
      Lead.countDocuments(),
      Lead.countDocuments({ status: 'New' }),
      Lead.countDocuments({ status: 'Contacted' }),
      Lead.countDocuments({ status: 'Qualified' }),
      Lead.countDocuments({ status: 'Proposal Sent' }),
      Lead.countDocuments({ status: 'Won' }),
      Lead.countDocuments({ status: 'Lost' }),
      Lead.aggregate([
        { $group: { _id: '$serviceCategory', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
      ]),
      Lead.aggregate([
        { $group: { _id: '$firstTouch.trafficCategory', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
      ]),
    ]);

    const conversionRate = totalLeads > 0 ? ((wonLeads / totalLeads) * 100).toFixed(1) : 0;

    return res.status(200).json({
      success: true,
      stats: {
        total: totalLeads,
        new: newLeads,
        contacted: contactedLeads,
        qualified: qualifiedLeads,
        proposalSent: proposalLeads,
        won: wonLeads,
        lost: lostLeads,
        conversionRate: `${conversionRate}%`,
        byService,
        byTraffic,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get Single Lead by ID with Full Attribution
 */
const getLeadById = async (req, res, next) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ success: false, message: 'Lead not found.' });
    }
    return res.status(200).json({ success: true, lead });
  } catch (error) {
    next(error);
  }
};

/**
 * Update Lead Status with Audit Log
 */
const updateLeadStatus = async (req, res, next) => {
  try {
    const { status, reason = '' } = req.body;
    const validStatuses = ['New', 'Contacted', 'Qualified', 'Proposal Sent', 'Won', 'Lost'];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Must be one of: ${validStatuses.join(', ')}`,
      });
    }

    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ success: false, message: 'Lead not found.' });
    }

    const previousStatus = lead.status;
    lead.status = status;
    lead.statusHistory.push({
      previousStatus,
      newStatus: status,
      changedBy: req.adminUser.fullName || req.adminUser.email,
      changedAt: new Date(),
      reason: reason ? validator.escape(String(reason).trim()) : '',
    });

    await lead.save();

    return res.status(200).json({
      success: true,
      lead,
      message: `Lead status updated to ${status}.`,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Add Internal Note to Lead
 */
const addLeadNote = async (req, res, next) => {
  try {
    const { content } = req.body;
    if (!content || typeof content !== 'string' || !content.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Note content cannot be empty.',
      });
    }

    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ success: false, message: 'Lead not found.' });
    }

    lead.internalNotes.push({
      content: validator.escape(content.trim()),
      author: req.adminUser.fullName || 'Admin',
      createdAt: new Date(),
    });

    await lead.save();

    return res.status(200).json({
      success: true,
      lead,
      message: 'Note recorded successfully.',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update Follow-up Date
 */
const updateFollowUpDate = async (req, res, next) => {
  try {
    const { followUpDate } = req.body;
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ success: false, message: 'Lead not found.' });
    }

    lead.followUpDate = followUpDate ? new Date(followUpDate) : null;
    await lead.save();

    return res.status(200).json({
      success: true,
      lead,
      message: 'Follow-up date updated.',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Export Leads to CSV with Complete Attribution
 */
const exportLeadsCSV = async (req, res, next) => {
  try {
    const leads = await Lead.find({}).sort({ createdAt: -1 }).lean();

    // Headers
    const headers = [
      'Lead Number',
      'Created At',
      'Full Name',
      'Email',
      'Phone',
      'Organization',
      'Service Category',
      'Status',
      'Estimated Budget',
      'Preferred Timeline',
      'Project Details',
      'Visitor Type',
      'Device',
      'First Touch Landing Page',
      'First Touch Traffic Category',
      'First Touch Referrer',
      'UTM Source',
      'UTM Medium',
      'UTM Campaign',
      'UTM Term',
      'UTM Content',
      'Google Click ID (gclid)',
      'Meta Click ID (fbclid)',
      'Last Touch Page',
      'Follow-Up Date',
    ];

    const escapeCSV = (val) => {
      if (val === null || val === undefined) return '""';
      const str = String(val).replace(/"/g, '""');
      return `"${str}"`;
    };

    const rows = leads.map((l) => [
      escapeCSV(l.leadNumber),
      escapeCSV(new Date(l.createdAt).toISOString()),
      escapeCSV(l.fullName),
      escapeCSV(l.email),
      escapeCSV(l.phone || ''),
      escapeCSV(l.organization || ''),
      escapeCSV(l.serviceCategory),
      escapeCSV(l.status),
      escapeCSV(l.estimatedBudget || ''),
      escapeCSV(l.preferredTimeline || ''),
      escapeCSV(l.projectDescription || ''),
      escapeCSV(l.visitor?.type || ''),
      escapeCSV(l.visitor?.device || ''),
      escapeCSV(l.firstTouch?.landingPage || ''),
      escapeCSV(l.firstTouch?.trafficCategory || ''),
      escapeCSV(l.firstTouch?.referrer || ''),
      escapeCSV(l.firstTouch?.utm?.source || ''),
      escapeCSV(l.firstTouch?.utm?.medium || ''),
      escapeCSV(l.firstTouch?.utm?.campaign || ''),
      escapeCSV(l.firstTouch?.utm?.term || ''),
      escapeCSV(l.firstTouch?.utm?.content || ''),
      escapeCSV(l.firstTouch?.clickIds?.gclid || ''),
      escapeCSV(l.firstTouch?.clickIds?.fbclid || ''),
      escapeCSV(l.lastTouch?.page || ''),
      escapeCSV(l.followUpDate ? new Date(l.followUpDate).toISOString().split('T')[0] : ''),
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="HUNAR_Leads_Export_${new Date().toISOString().split('T')[0]}.csv"`
    );
    return res.status(200).send(csvContent);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getLeads,
  getLeadStats,
  getLeadById,
  updateLeadStatus,
  addLeadNote,
  updateFollowUpDate,
  exportLeadsCSV,
};
