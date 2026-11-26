/**
 * Centralized API URL builder & safe JSON parser.
 * Production builds default to the Render backend (https://hunar-aa1o.onrender.com)
 * unless overridden by VITE_API_URL. Local dev uses relative /api via Vite proxy.
 */
const DEFAULT_PROD_API_URL = 'https://hunar-aa1o.onrender.com';
const RAW_API_BASE = (
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD ? DEFAULT_PROD_API_URL : '')
).trim().replace(/\/+$/, '');

export function apiUrl(path) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${RAW_API_BASE}${normalizedPath}`;
}

export async function parseApiResponse(res) {
  const text = await res.text();
  try {
    return text ? JSON.parse(text) : {};
  } catch {
    if (res.status === 405) {
      throw new Error('API server is updating. Please refresh the page in a moment.');
    }
    if (res.status === 404) {
      throw new Error('API endpoint not found. Please verify your backend URL.');
    }
    if (res.status === 502 || res.status === 503 || res.status === 504) {
      throw new Error('Backend server is waking up. Please wait a few seconds and try again.');
    }
    if (res.status >= 500) {
      throw new Error(`Server temporarily unavailable (Status ${res.status}).`);
    }
    throw new Error(`Server response error (${res.status}): ${text.slice(0, 100)}`);
  }
}
