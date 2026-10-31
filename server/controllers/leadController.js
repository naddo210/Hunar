const validator = require('validator');
const Lead = require('../models/Lead');
const { classifyDevice } = require('../utils/deviceDetector');
const { classifyTraffic } = require('../utils/trafficClassifier');
const { hashIp } = require('../utils/ipHasher');

// Allowed service categories
const VALID_SERVICES = [
  'branding',
  'website-development',
  'custom-art',
  'art-products',
  'digital-content',
  'murals',
  'creative-products',
  'art-classes',
  'general',
];

/**
 * Handle new lead submission with full attribution and spam mitigation
 */
const submitLead = async (req, res, next) => {
  try {
    const {
      // Main form fields
      fullName,
      email,
      phone,
      organization,
      serviceCategory,
      estimatedBudget,
      preferredTimeline,
      projectDescription,
      formId,
      submittedFromPage,

      // Anti-spam security fields
      honeypot,
      hp_studio_verify,
      clientElapsedMs,

      // Frontend attribution payload
      visitor: rawVisitor = {},
      firstTouch: rawFirstTouch = {},
      lastTouch: rawLastTouch = {},
      consent: rawConsent = {},

      // Legacy Wix Field fallback mapping (if submitted via legacy integration)
      visitor_type,
      visitor_device,
      visitor_traffic_category,
      visitor_network_1,
      utm_campaign_source,
      utm_campaign_medium,
      utm_campaign_id,
      utm_campaign_content,
      utm_campaign_keywords,
      utm_gclid,
      utm_fbclid,
    } = req.body;

    // 1. Honeypot check: Bots usually fill hidden fields
    if (honeypot || hp_studio_verify) {
      console.warn('[Spam Caught] Honeypot triggered.');
      return res.status(200).json({
        success: true,
        message: 'Your inquiry has been received. Thank you.',
      });
    }

    // 2. Minimum submission duration check (sub-second submissions are typically automated scripts)
    if (clientElapsedMs && Number(clientElapsedMs) < 1200) {
      console.warn(`[Spam Caught] Submission too fast (${clientElapsedMs}ms).`);
      return res.status(400).json({
        success: false,
        message: 'Submission completed too quickly. Please review your details and submit again.',
      });
    }

    // 3. Validation & Sanitization
    const errors = [];
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      errors.push('Please provide your full name (minimum 2 characters).');
    }
    if (!email || !validator.isEmail(String(email).trim())) {
      errors.push('Please provide a valid email address.');
    }
    if (!projectDescription || typeof projectDescription !== 'string' || projectDescription.trim().length < 10) {
      errors.push('Please provide project details or a message (minimum 10 characters).');
    }
    const cleanService = (serviceCategory || 'general').toLowerCase().trim();
    if (!VALID_SERVICES.includes(cleanService)) {
      errors.push(`Invalid service category. Must be one of: ${VALID_SERVICES.join(', ')}`);
    }

    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    const cleanFullName = validator.escape(fullName.trim());
    const cleanEmail = email.trim().toLowerCase();
    const cleanPhone = phone ? validator.escape(String(phone).trim()) : '';
    const cleanOrg = organization ? validator.escape(String(organization).trim()) : '';
    const cleanDescription = validator.escape(projectDescription.trim());
    const cleanBudget = estimatedBudget ? validator.escape(String(estimatedBudget).trim()) : '';
    const cleanTimeline = preferredTimeline ? validator.escape(String(preferredTimeline).trim()) : '';
    const cleanFormId = formId ? String(formId).trim() : 'form_default';
    const cleanPage = submittedFromPage ? String(submittedFromPage).trim() : '/contact';

    // 4. Duplicate prevention within 120 seconds
    const twoMinutesAgo = new Date(Date.now() - 120 * 1000);
    const existingRecentLead = await Lead.findOne({
      email: cleanEmail,
      serviceCategory: cleanService,
      createdAt: { $gte: twoMinutesAgo },
    });

    if (existingRecentLead) {
      return res.status(200).json({
        success: true,
        leadNumber: existingRecentLead.leadNumber,
        message: 'Your project inquiry was already received. A studio director will be in touch with you shortly.',
      });
    }

    // 5. Normalization of Device & Geo
    const userAgent = req.headers['user-agent'] || '';
    const detectedDevice = classifyDevice(userAgent);
    const clientIp = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress || '';
    const ipHash = hashIp(clientIp);

    // Country/City derived safely from CDN headers if present (e.g., Cloudflare / Vercel), else fallback
    const derivedCountry = req.headers['cf-ipcountry'] || req.headers['x-vercel-ip-country'] || rawVisitor.country || '';
    const derivedCity = req.headers['cf-ipcity'] || req.headers['x-vercel-ip-city'] || rawVisitor.city || '';

    // Visitor Type Normalization
    const visitorType = (visitor_type || rawVisitor.type || 'new').toLowerCase() === 'returning' ? 'returning' : 'new';
    const visitorDevice = visitor_device || rawVisitor.device || detectedDevice;

    // 6. Normalization of Attribution (UTMs, Click IDs, Traffic Categories)
    const utmSource = utm_campaign_source || rawLastTouch.utm?.source || rawFirstTouch.utm?.source || '';
    const utmMedium = utm_campaign_medium || rawLastTouch.utm?.medium || rawFirstTouch.utm?.medium || '';
    const utmCampaign = utm_campaign_content || rawLastTouch.utm?.campaign || rawFirstTouch.utm?.campaign || '';
    const utmCampaignId = utm_campaign_id || rawLastTouch.utm?.campaignId || rawFirstTouch.utm?.campaignId || '';
    const utmTerm = utm_campaign_keywords || rawLastTouch.utm?.term || rawFirstTouch.utm?.term || '';
    const utmContent = rawLastTouch.utm?.content || rawFirstTouch.utm?.content || '';
    const gclid = utm_gclid || rawLastTouch.clickIds?.gclid || rawFirstTouch.clickIds?.gclid || '';
    const fbclid = utm_fbclid || rawLastTouch.clickIds?.fbclid || rawFirstTouch.clickIds?.fbclid || '';
    const network = visitor_network_1 || rawLastTouch.network || rawFirstTouch.network || '';

    const firstTouchReferrer = rawFirstTouch.referrer || req.headers['referer'] || '';
    const computedTrafficCategory = classifyTraffic({
      utmSource,
      utmMedium,
      gclid,
      fbclid,
      referrer: firstTouchReferrer,
      currentHost: req.headers.host || 'localhost',
    });

    const leadData = {
      fullName: cleanFullName,
      email: cleanEmail,
      phone: cleanPhone,
      organization: cleanOrg,
      serviceCategory: cleanService,
      estimatedBudget: cleanBudget,
      preferredTimeline: cleanTimeline,
      projectDescription: cleanDescription,
      formId: cleanFormId,
      submittedFromPage: cleanPage,

      visitor: {
        type: visitorType,
        device: visitorDevice,
        city: derivedCity,
        country: derivedCountry,
        ipHash,
      },

      firstTouch: {
        landingPage: rawFirstTouch.landingPage || cleanPage,
        referrer: firstTouchReferrer,
        trafficCategory: rawFirstTouch.trafficCategory || computedTrafficCategory,
        utm: {
          source: rawFirstTouch.utm?.source || utmSource,
          medium: rawFirstTouch.utm?.medium || utmMedium,
          campaign: rawFirstTouch.utm?.campaign || utmCampaign,
          campaignId: rawFirstTouch.utm?.campaignId || utmCampaignId,
          content: rawFirstTouch.utm?.content || utmContent,
          term: rawFirstTouch.utm?.term || utmTerm,
        },
        clickIds: {
          gclid: rawFirstTouch.clickIds?.gclid || gclid,
          fbclid: rawFirstTouch.clickIds?.fbclid || fbclid,
        },
        network: rawFirstTouch.network || network,
        timestamp: rawFirstTouch.timestamp ? new Date(rawFirstTouch.timestamp) : new Date(),
      },

      lastTouch: {
        page: cleanPage,
        referrer: rawLastTouch.referrer || req.headers['referer'] || '',
        trafficCategory: computedTrafficCategory,
        utm: {
          source: utmSource,
          medium: utmMedium,
          campaign: utmCampaign,
          campaignId: utmCampaignId,
          content: utmContent,
          term: utmTerm,
        },
        clickIds: {
          gclid,
          fbclid,
        },
        network,
        timestamp: new Date(),
      },

      consent: {
        consentToContact: rawConsent.consentToContact !== false,
        cookiePreferences: {
          essential: true,
          analytics: Boolean(rawConsent.cookiePreferences?.analytics),
          marketing: Boolean(rawConsent.cookiePreferences?.marketing),
        },
        timestamp: new Date(),
      },

      status: 'New',
    };

    const newLead = await Lead.create(leadData);

    return res.status(201).json({
      success: true,
      leadNumber: newLead.leadNumber,
      message: 'Thank you for reaching out to HUNAR. We have received your inquiry and will be in touch within 24–48 hours.',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { submitLead };
