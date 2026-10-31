/**
 * Deterministic traffic category classifier.
 * Categories: 'Direct', 'Organic Search', 'Referral', 'Paid Campaign', 'Social', 'Other'
 */
function classifyTraffic({ utmSource = '', utmMedium = '', gclid = '', fbclid = '', referrer = '', currentHost = 'localhost' }) {
  const source = (utmSource || '').toLowerCase().trim();
  const medium = (utmMedium || '').toLowerCase().trim();
  const ref = (referrer || '').toLowerCase().trim();
  const hasPaidClickId = Boolean(gclid || fbclid);

  // 1. Paid Campaign
  const paidMediums = ['cpc', 'ppc', 'paid', 'cpm', 'paidsocial', 'paid-social', 'meta_ads', 'google_ads', 'adwords', 'display'];
  if (hasPaidClickId || paidMediums.includes(medium) || /^(cpc|ppc|paid)/.test(medium)) {
    return 'Paid Campaign';
  }

  // 2. Social Networks
  const socialDomains = [
    'facebook.com', 'l.facebook.com', 'm.facebook.com',
    'instagram.com', 'l.instagram.com',
    'linkedin.com', 'lnkd.in',
    'twitter.com', 't.co', 'x.com',
    'pinterest.com', 'pin.it',
    'tiktok.com',
    'youtube.com', 'youtu.be',
    'threads.net',
    'reddit.com',
  ];
  const isSocialReferrer = socialDomains.some(domain => ref.includes(domain));
  const isSocialSource = ['facebook', 'instagram', 'linkedin', 'twitter', 'x', 'pinterest', 'tiktok', 'youtube'].includes(source);

  if (isSocialReferrer || isSocialSource || medium === 'social') {
    return 'Social';
  }

  // 3. Organic Search Engines
  const searchDomains = [
    'google.', 'bing.com', 'yahoo.com', 'duckduckgo.com', 'ecosia.org', 'baidu.com', 'yandex.'
  ];
  const isSearchReferrer = searchDomains.some(domain => ref.includes(domain));
  if (isSearchReferrer || medium === 'organic') {
    return 'Organic Search';
  }

  // 4. Referral (External website)
  if (ref && !ref.includes(currentHost.toLowerCase())) {
    try {
      const refUrl = new URL(ref.startsWith('http') ? ref : `https://${ref}`);
      if (refUrl.hostname && !refUrl.hostname.includes(currentHost.toLowerCase())) {
        return 'Referral';
      }
    } catch {
      if (ref.length > 3) return 'Referral';
    }
  }

  // 5. Direct
  if (!ref && !source && !medium) {
    return 'Direct';
  }

  // Fallback
  return source || medium ? 'Referral' : 'Other';
}

module.exports = { classifyTraffic };
