# HUNAR Creative Studio — MERN Stack Website & Lead Attribution Platform

A production-grade, full-stack **MERN** platform for **HUNAR Creative Studio** — an interdisciplinary creative atelier uniting traditional fine art craftsmanship with architectural identity, bespoke software engineering, and spatial mural installations.

---

## 1. Architectural Stack

* **Frontend:** React 18, Vite, React Router v6, Tailwind CSS, Lucide Icons, React Helmet Async (Dynamic SEO & Schema.org JSON-LD).
* **Backend:** Node.js, Express.js, Mongoose, JWT (`httpOnly` cookies), Helmet (Security headers), CORS, sliding-window Rate Limiter.
* **Database:** MongoDB (Local or MongoDB Atlas connection strings).
* **Design Palette:** Warm Ivory (`#FDFBF7`), Charcoal (`#1A1A1A`), Architectural Stone (`#E8E3DA`), Terracotta (`#C25E43`), with Cormorant Garamond (Editorial Serif) & Plus Jakarta Sans (Grotesk Sans). Zero generic purple gradients or AI badges.

---

## 2. Directory Structure

```
Hunar/
├── server/
│   ├── config/             # MongoDB connection pooling & error handling
│   ├── controllers/        # Lead ingestion, Auth, and Admin CRM controllers
│   ├── middleware/         # JWT verification, honeypot & sliding-window rate limiters
│   ├── models/             # Mongoose schemas (Lead, AdminUser) with compound indexes
│   ├── routes/             # Express API routes (/api/leads, /api/auth, /api/admin)
│   ├── utils/              # Device classifier, deterministic traffic classifier, IP hasher
│   ├── seeds/              # CLI script to seed administrator credentials
│   ├── tests/              # Automated end-to-end test suite (12 verification scenarios)
│   ├── .env.example        # Environment variable blueprint
│   └── server.js           # Server entry point + static client asset host + sitemap generator
├── client/
│   ├── src/
│   │   ├── components/     # Navigation, Footer, EnquiryForm, CookieConsent, SEO, Breadcrumbs
│   │   ├── context/        # AttributionContext, AuthContext
│   │   ├── hooks/          # useAttribution, useAuth
│   │   ├── pages/          # All 15 public pages + 2 Admin CRM pages
│   │   │   ├── services/   # 7 dedicated individual service discipline pages
│   │   │   └── admin/      # Login and Dashboard
│   │   ├── utils/          # Client-side attribution & device tracker
│   │   ├── App.jsx         # Full route configuration
│   │   ├── index.css       # Tailwind layers & editorial typography
│   │   └── main.jsx        # Root application setup
│   ├── index.html          # HTML shell with Google Fonts preloads
│   ├── tailwind.config.js  # Bespoke editorial tokens
│   └── vite.config.js      # Vite dev server with /api proxy to Express
├── package.json            # Unified scripts (dev, build, start)
└── README.md
```

---

## 3. Wix Tracking Field Mapping & Normalization

All legacy Wix tracking parameters are captured, normalized, and saved into structured MongoDB documents:

| Wix Field Name | MongoDB Lead Field | Type | Description |
|---|---|---|---|
| `visitor_type` | `visitor.type` | String | `new` vs `returning` (evaluated via persistent local session token) |
| `visitor_device` | `visitor.device` | String | `desktop`, `android`, `ios`, `tablet`, `other` (non-invasive UA regex) |
| `visitor_city` | `visitor.city` | String | CDN header derivation (`cf-ipcity`, `x-vercel-ip-city`) or client fallback |
| `visitor_country` | `visitor.country` | String | CDN header derivation (`cf-ipcountry`) |
| `visitor_traffic_category` | `attribution.trafficCategory` | String | `Direct`, `Organic Search`, `Referral`, `Paid Campaign`, `Social`, `Other` |
| `visitor_network_1` | `attribution.network` | String | Custom ad network or placement parameter |
| `utm_campaign_source` | `attribution.utm.source` | String | Normalized lowercase query param `utm_source` |
| `utm_campaign_medium` | `attribution.utm.medium` | String | Normalized lowercase query param `utm_medium` |
| `utm_campaign_id` | `attribution.utm.campaignId` | String | Query param `utm_id` or `utm_campaign_id` |
| `utm_campaign_content` | `attribution.utm.content` | String | Query param `utm_content` |
| `utm_campaign_keywords` | `attribution.utm.term` | String | Query param `utm_term` |
| `utm_gclid` | `attribution.clickIds.gclid` | String | Google Ads Click Identifier (`gclid`) |
| `utm_fbclid` | `attribution.clickIds.fbclid` | String | Meta Ads Click Identifier (`fbclid`) |
| *(Multi-Touch)* | `firstTouch` | Object | Immutable snapshot of landing page, initial referrer, UTMs, and timestamp |
| *(Multi-Touch)* | `lastTouch` | Object | Dynamic snapshot of conversion page, immediate referrer, and UTMs |

---

## 4. Website Pages Implemented

* **`/` (Home):** Editorial brand hero, philosophy manifesto, discipline showcases, and curated portfolio highlights. **Strictly NO enquiry form on the homepage.**
* **`/about`:** Studio origins, craftsmanship ethos, material honesty, and team tenets.
* **`/portfolio`:** Filterable portfolio archive (Custom Art, Branding, Websites, Murals, Prints) with detailed medium, scope, and project notes.
* **`/services`:** Comprehensive overview of all 7 creative disciplines.
* **Individual Service Pages (with embedded `EnquiryForm` & Schema.org structured data):**
  * `/services/branding` — Branding & Visual Identity
  * `/services/website-development` — Custom Website Development
  * `/services/custom-art` — Custom Fine Art Commissions
  * `/services/art-products` — Art Prints & Limited Editions
  * `/services/digital-content` — Digital Content Creation
  * `/services/murals` — Murals & Commercial Architectural Art
  * `/services/creative-products` — Curated Creative Products & Merchandise
* **`/art-classes`:** Online fine art masterclasses waitlist and upcoming curriculum preview (transparently labeled as upcoming in late 2026).
* **`/contact`:** Atelier studio addresses (Bengaluru & New Delhi), telephone, direct email, and universal consultation inquiry form.
* **`/faq`:** Accessible accordions with Schema.org `FAQPage` structured data.
* **`/privacy`:** Studio data stewardship, retention, and patron rights.
* **`/cookies`:** Granular cookie definitions (Essential vs Analytics/Marketing) and preference controls.
* **`/terms`:** Fine art commissioning retainers, copyright ownership, and commercial licenses.
* **`*` (404):** Custom editorial 404 page with navigation pathways.
* **`/admin/login` & `/admin/dashboard`:** Protected CRM dashboard with KPI tiles, search/filtering, Lead Dossier with Attribution Inspector, internal notes, follow-up scheduler, and authorized CSV export.

---

## 5. Security & Spam Protection

1. **Anti-Spam Honeypot:** Invisible field (`hp_studio_verify`) silently drops bot submissions from the database while returning standard responses to hinder scraper analysis.
2. **Fast-Submit Protection:** Rejects automated programmatic submissions completed in under 1200ms.
3. **Duplicate Submission Guard:** Rejects identical email + service submissions received within 120 seconds with friendly duplicate notices.
4. **Rate Limiting:**
   * `/api/leads`: Maximum 10 submissions per 15 minutes per IP hash.
   * `/api/auth/login`: Maximum 5 attempts per 15 minutes to prevent brute-force attacks.
5. **Session Security:** JSON Web Tokens signed with server secrets and stored in `httpOnly`, `sameSite=lax` secure cookies.
6. **Input Sanitization:** HTML entity escaping and strict validation via `validator.js`.

---

## 6. Getting Started

### 1. Prerequisites
* Node.js v20+
* MongoDB running locally (`mongodb://127.0.0.1:27017`) or a remote MongoDB Atlas URI.

### 2. Environment Variables
Configure `server/.env` (a template is provided in `server/.env.example`):
```ini
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000
MONGODB_URI=mongodb://127.0.0.1:27017/hunar_studio
JWT_SECRET=hunar_studio_jwt_secure_secret_key_2026_dev
ADMIN_DEFAULT_EMAIL=admin@hunarstudio.com
ADMIN_DEFAULT_PASSWORD=HunarStudio2026!Admin
```

### 3. Seed Default Administrator
```bash
npm run seed:admin --prefix server
```
* **Email:** `admin@hunarstudio.com`
* **Password:** `HunarStudio2026!Admin`

### 4. Run in Development
Runs both Express server (port 5000) and Vite client (port 3000) concurrently:
```bash
npm run dev
```

### 5. Production Build & Start
```bash
npm run build
npm start
```
The Express server will automatically serve both the API endpoints and the compiled React production application at `http://localhost:5000`.

### 6. Run End-to-End Test Suite
Executes the comprehensive automated verification suite covering all 12 visitor-to-lead scenarios:
```bash
npm test --prefix server
```
*(All 26 test assertions verified passing).*

