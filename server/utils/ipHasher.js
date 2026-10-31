const crypto = require('crypto');

const SALT = process.env.IP_SALT || 'hunar_ip_privacy_salt_2026';

/**
 * Creates a one-way pseudonymous hash of an IP address.
 * Never stores or exposes raw IP addresses in database logs.
 */
function hashIp(ip = '') {
  if (!ip) return 'unknown_ip';
  return crypto.createHmac('sha256', SALT).update(ip).digest('hex').substring(0, 32);
}

module.exports = { hashIp };
