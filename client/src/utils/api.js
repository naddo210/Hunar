/**
 * Centralized API URL builder & safe JSON parser.
 * Set VITE_API_URL in Vercel (e.g. https://your-service.onrender.com) to route requests to Render.
 * Leave unset for local dev proxy (/api) or same-origin serverless functions.
 */
const RAW_API_BASE = (import.meta.env.VITE_API_URL || '').trim().replace(/\/+$/, '');

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
