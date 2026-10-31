/**
 * HUNAR Creative Studio - Visitor & Attribution Tracking Engine
 * Captures, normalizes, and maintains multi-touch attribution (First-Touch & Last-Touch)
 */

// Memory fallback if localStorage/sessionStorage is blocked or in private mode
const memoryStore = {};

function safeGetItem(storageType, key) {
  try {
    if (typeof window === 'undefined') return null;
    const storage = storageType === 'local' ? window.localStorage : window.sessionStorage;
    return storage.getItem(key);
  } catch (e) {
    return memoryStore[`${storageType}_${key}`] || null;
  }
}

function safeSetItem(storageType, key, value) {
  try {
    if (typeof window === 'undefined') return;
    const storage = storageType === 'local' ? window.localStorage : window.sessionStorage;
    storage.setItem(key, value);
  } catch (e) {
    memoryStore[`${storageType}_${key}`] = value;
  }
}

/**
 * Detect device category without high-entropy fingerprinting
 * Returns: 'desktop' | 'android' | 'ios' | 'tablet' | 'other'
 */
export function detectDeviceCategory() {
  if (typeof window === 'undefined') return 'desktop';
  const ua = (navigator.userAgent || '').toLowerCase();

  if (/ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk/i.test(ua)) {
    return 'tablet';
  }
  if (/iphone|ipod/i.test(ua)) {
    return 'ios';
  }
  if (/android.*mobile/i.test(ua)) {
    return 'android';
  }
  if (/windows nt|macintosh|mac os x|linux(?!.*android)/i.test(ua)) {
    return 'desktop';
  }
  return 'other';
}

/**
 * Classifies traffic category based on UTMs, click IDs, and referrer
 */
export function detectTrafficCategory({ utmSource = '', utmMedium = '', gclid = '', fbclid = '', referrer = '' }) {
  const source = (utmSource || '').toLowerCase().trim();
  const medium = (utmMedium || '').toLowerCase().trim();
  const ref = (referrer || '').toLowerCase().trim();
  const hasPaidClickId = Boolean(gclid || fbclid);

  // 1. Paid Campaign
  const paidMediums = ['cpc', 'ppc', 'paid', 'cpm', 'paidsocial', 'paid-social', 'meta_ads', 'google_ads', 'adwords'];
  if (hasPaidClickId || paidMediums.includes(medium) || /^(cpc|ppc|paid)/.test(medium)) {
    return 'Paid Campaign';
  }

  // 2. Social Networks
  const socialDomains = [
    'facebook.com', 'instagram.com', 'linkedin.com', 'twitter.com', 't.co', 'x.com',
    'pinterest.com', 'tiktok.com', 'youtube.com', 'threads.net', 'reddit.com'
  ];
  if (socialDomains.some(d => ref.includes(d)) || ['facebook', 'instagram', 'linkedin', 'twitter', 'x', 'pinterest', 'tiktok', 'youtube'].includes(source) || medium === 'social') {
    return 'Social';
  }

  // 3. Organic Search
  const searchDomains = ['google.', 'bing.com', 'yahoo.com', 'duckduckgo.com', 'ecosia.org', 'baidu.com'];
  if (searchDomains.some(d => ref.includes(d)) || medium === 'organic') {
    return 'Organic Search';
  }

  // 4. Referral
  if (ref && !ref.includes(window.location.hostname)) {
    return 'Referral';
  }

  // 5. Direct (no referrer and no UTM campaign markers)
  if (!ref && !source && !medium) {
    return 'Direct';
  }

  return source || medium ? 'Referral' : 'Other';
}

/**
 * Extracts campaign parameters and click IDs from search params
 */
export function extractUrlParameters(searchString = window.location.search) {
  const params = new URLSearchParams(searchString);
  return {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || params.get('utm_content') || '',
    utm_id: params.get('utm_id') || params.get('utm_campaign_id') || '',
    utm_term: params.get('utm_term') || params.get('utm_campaign_keywords') || '',
    utm_content: params.get('utm_content') || '',
    gclid: params.get('gclid') || params.get('utm_gclid') || '',
    fbclid: params.get('fbclid') || params.get('utm_fbclid') || '',
    network: params.get('network') || params.get('visitor_network_1') || '',
  };
}

/**
 * Initializes and manages visitor identity & multi-touch attribution
 */
export function initAttributionTracker() {
  if (typeof window === 'undefined') return null;

  const now = new Date();
  const currentUrl = window.location.href;
  const currentPath = window.location.pathname;
  const rawReferrer = document.referrer || '';
  const params = extractUrlParameters();
  const device = detectDeviceCategory();

  // 1. Visitor classification: New vs Returning
  const visitorKey = '_hunar_visitor_id';
  const lastActiveKey = '_hunar_last_active';
  const existingVisitorId = safeGetItem('local', visitorKey);
  const lastActiveTimestamp = safeGetItem('local', lastActiveKey);

  let visitorType = 'new';
  if (existingVisitorId && lastActiveTimestamp) {
    const elapsedMinutes = (now.getTime() - Number(lastActiveTimestamp)) / (1000 * 60);
    // If returning after more than 30 minutes inactivity
    if (elapsedMinutes > 30) {
      visitorType = 'returning';
    }
  } else {
    // Generate new anonymous visitor id
    const newId = 'vid_' + Math.random().toString(36).substring(2, 11) + '_' + Date.now();
    safeSetItem('local', visitorKey, newId);
  }
  safeSetItem('local', lastActiveKey, String(now.getTime()));

  // 2. Traffic Category
  const trafficCategory = detectTrafficCategory({
    utmSource: params.utm_source,
    utmMedium: params.utm_medium,
    gclid: params.gclid,
    fbclid: params.fbclid,
    referrer: rawReferrer,
  });

  // 3. First-Touch Attribution (Immutable per visitor lifecycle)
  const ftKey = '_hunar_ft';
  let firstTouch = null;
  const rawFT = safeGetItem('local', ftKey);
  if (rawFT) {
    try {
      firstTouch = JSON.parse(rawFT);
    } catch {
      firstTouch = null;
    }
  }

  if (!firstTouch) {
    firstTouch = {
      landingPage: currentUrl,
      landingPath: currentPath,
      referrer: rawReferrer,
      trafficCategory,
      utm: {
        source: params.utm_source,
        medium: params.utm_medium,
        campaign: params.utm_campaign,
        campaignId: params.utm_id,
        term: params.utm_term,
        content: params.utm_content,
      },
      clickIds: {
        gclid: params.gclid,
        fbclid: params.fbclid,
      },
      network: params.network,
      timestamp: now.toISOString(),
    };
    safeSetItem('local', ftKey, JSON.stringify(firstTouch));
  }

  // 4. Last-Touch Attribution (Updated per session/interaction)
  const lastTouch = {
    page: currentUrl,
    path: currentPath,
    referrer: rawReferrer,
    trafficCategory,
    utm: {
      source: params.utm_source || firstTouch.utm?.source || '',
      medium: params.utm_medium || firstTouch.utm?.medium || '',
      campaign: params.utm_campaign || firstTouch.utm?.campaign || '',
      campaignId: params.utm_id || firstTouch.utm?.campaignId || '',
      term: params.utm_term || firstTouch.utm?.term || '',
      content: params.utm_content || firstTouch.utm?.content || '',
    },
    clickIds: {
      gclid: params.gclid || firstTouch.clickIds?.gclid || '',
      fbclid: params.fbclid || firstTouch.clickIds?.fbclid || '',
    },
    network: params.network || firstTouch.network || '',
    timestamp: now.toISOString(),
  };
  safeSetItem('session', '_hunar_lt', JSON.stringify(lastTouch));

  return {
    visitor: {
      type: visitorType,
      device,
    },
    firstTouch,
    lastTouch,
  };
}

/**
 * Gets currently stored attribution state for forms
 */
export function getStoredAttribution() {
  const fallback = initAttributionTracker();
  try {
    const rawFT = safeGetItem('local', '_hunar_ft');
    const rawLT = safeGetItem('session', '_hunar_lt');
    const ft = rawFT ? JSON.parse(rawFT) : fallback.firstTouch;
    const lt = rawLT ? JSON.parse(rawLT) : fallback.lastTouch;
    return {
      visitor: fallback.visitor,
      firstTouch: ft,
      lastTouch: lt,
    };
  } catch {
    return fallback;
  }
}
