/**
 * Non-invasive device category classifier.
 * Evaluates broad device category without collecting sensitive hardware identifiers.
 * Allowed categories: 'desktop', 'android', 'ios', 'tablet', 'other'
 */
function classifyDevice(userAgent = '') {
  if (!userAgent || typeof userAgent !== 'string') return 'other';
  const ua = userAgent.toLowerCase();

  // Tablets
  if (/ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk/i.test(ua)) {
    return 'tablet';
  }

  // iOS Mobile
  if (/iphone|ipod/i.test(ua)) {
    return 'ios';
  }

  // Android Mobile
  if (/android.*mobile/i.test(ua)) {
    return 'android';
  }

  // Desktop (Mac, Windows, Linux desktop)
  if (/windows nt|macintosh|mac os x|linux(?!.*android)/i.test(ua)) {
    return 'desktop';
  }

  return 'other';
}

module.exports = { classifyDevice };
