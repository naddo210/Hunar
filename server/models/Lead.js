const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema(
  {
    leadNumber: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
      maxlength: [120, 'Name cannot exceed 120 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      trim: true,
      lowercase: true,
      index: true,
    },
    phone: {
      type: String,
      trim: true,
      maxlength: [30, 'Phone number cannot exceed 30 characters'],
    },
    organization: {
      type: String,
      trim: true,
      maxlength: [150, 'Organization name cannot exceed 150 characters'],
    },
    serviceCategory: {
      type: String,
      required: [true, 'Service category is required'],
      enum: [
        'branding',
        'website-development',
        'custom-art',
        'art-products',
        'digital-content',
        'murals',
        'creative-products',
        'art-classes',
        'general',
      ],
      index: true,
    },
    estimatedBudget: {
      type: String,
      trim: true,
    },
    preferredTimeline: {
      type: String,
      trim: true,
    },
    projectDescription: {
      type: String,
      required: [true, 'Project details or message is required'],
      trim: true,
      maxlength: [4000, 'Project description cannot exceed 4000 characters'],
    },
    formId: {
      type: String,
      required: true,
      trim: true,
    },
    submittedFromPage: {
      type: String,
      required: true,
      trim: true,
    },

    // Visitor & Device Tracking
    visitor: {
      type: {
        type: String,
        enum: ['new', 'returning'],
        default: 'new',
      },
      device: {
        type: String,
        enum: ['desktop', 'android', 'ios', 'tablet', 'other'],
        default: 'desktop',
      },
      city: { type: String, trim: true },
      country: { type: String, trim: true },
      ipHash: { type: String, select: false }, // Salted hash, not raw IP, excluded from default select
    },

    // First-Touch Attribution
    firstTouch: {
      landingPage: { type: String, trim: true },
      referrer: { type: String, trim: true },
      trafficCategory: {
        type: String,
        enum: ['Direct', 'Organic Search', 'Referral', 'Paid Campaign', 'Social', 'Other'],
        default: 'Direct',
      },
      utm: {
        source: { type: String, trim: true, lowercase: true },
        medium: { type: String, trim: true, lowercase: true },
        campaign: { type: String, trim: true },
        campaignId: { type: String, trim: true },
        content: { type: String, trim: true },
        term: { type: String, trim: true },
      },
      clickIds: {
        gclid: { type: String, trim: true },
        fbclid: { type: String, trim: true },
      },
      network: { type: String, trim: true },
      timestamp: { type: Date, default: Date.now },
    },

    // Last-Touch Attribution
    lastTouch: {
      page: { type: String, trim: true },
      referrer: { type: String, trim: true },
      trafficCategory: {
        type: String,
        enum: ['Direct', 'Organic Search', 'Referral', 'Paid Campaign', 'Social', 'Other'],
        default: 'Direct',
      },
      utm: {
        source: { type: String, trim: true, lowercase: true },
        medium: { type: String, trim: true, lowercase: true },
        campaign: { type: String, trim: true },
        campaignId: { type: String, trim: true },
        content: { type: String, trim: true },
        term: { type: String, trim: true },
      },
      clickIds: {
        gclid: { type: String, trim: true },
        fbclid: { type: String, trim: true },
      },
      network: { type: String, trim: true },
      timestamp: { type: Date, default: Date.now },
    },

    // Consent records
    consent: {
      consentToContact: { type: Boolean, default: true },
      cookiePreferences: {
        essential: { type: Boolean, default: true },
        analytics: { type: Boolean, default: false },
        marketing: { type: Boolean, default: false },
      },
      timestamp: { type: Date, default: Date.now },
    },

    // CRM Management & Workflow
    status: {
      type: String,
      enum: ['New', 'Contacted', 'Qualified', 'Proposal Sent', 'Won', 'Lost'],
      default: 'New',
      index: true,
    },
    followUpDate: {
      type: Date,
    },
    assignedTo: {
      type: String,
      trim: true,
    },
    internalNotes: [
      {
        content: { type: String, required: true },
        author: { type: String, default: 'Admin' },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    statusHistory: [
      {
        previousStatus: String,
        newStatus: String,
        changedBy: { type: String, default: 'Admin' },
        changedAt: { type: Date, default: Date.now },
        reason: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Compound Indexes for fast dashboard filtering & search
leadSchema.index({ createdAt: -1 });
leadSchema.index({ status: 1, createdAt: -1 });
leadSchema.index({ serviceCategory: 1, createdAt: -1 });
leadSchema.index({ 'firstTouch.utm.source': 1 });
leadSchema.index({ email: 1, createdAt: -1 });

// Generate sequential or timestamped human-readable lead number
leadSchema.pre('validate', function (next) {
  if (!this.leadNumber) {
    const year = new Date().getFullYear();
    const randomHex = Math.random().toString(36).substring(2, 7).toUpperCase();
    this.leadNumber = `HNR-${year}-${randomHex}`;
  }
  next();
});

const Lead = mongoose.model('Lead', leadSchema);
module.exports = Lead;
