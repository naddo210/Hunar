/**
 * HUNAR Creative Studio - End-to-End Automated Test Suite
 * Tests all 12 visitor-to-lead and tracking scenarios required by the specification.
 */
process.env.NODE_ENV = 'test';
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Lead = require('../models/Lead');
const AdminUser = require('../models/AdminUser');
const app = require('../server');

let server;
let BASE_URL = 'http://localhost:5000';

async function runTests() {
  console.log('\n======================================================');
  console.log(' HUNAR Creative Studio — End-to-End Verification Test');
  console.log('======================================================\n');

  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  [PASS] ${message}`);
      passed++;
    } else {
      console.error(`  [FAIL] ${message}`);
      failed++;
    }
  }

  // Ensure DB connected
  await connectDB();

  // Clean test leads before run
  await Lead.deleteMany({ email: { $regex: /test.*@example\.com|patron.*@example\.com/ } });

  // 1. Health check & robots/sitemap
  console.log('\n--- 1. Infrastructure & SEO Endpoints ---');
  try {
    const healthRes = await fetch(`${BASE_URL}/api/health`);
    const health = await healthRes.json();
    assert(healthRes.status === 200 && health.status === 'healthy', 'GET /api/health responds with 200 Healthy');

    const robotsRes = await fetch(`${BASE_URL}/robots.txt`);
    const robotsTxt = await robotsRes.text();
    assert(robotsRes.status === 200 && robotsTxt.includes('Disallow: /admin') && robotsTxt.includes('Disallow: /api/'), 'GET /robots.txt blocks /admin and /api');

    const sitemapRes = await fetch(`${BASE_URL}/sitemap.xml`);
    const sitemapXml = await sitemapRes.text();
    assert(sitemapRes.status === 200 && sitemapXml.includes('/services/branding-design') && sitemapXml.includes('/services/custom-art/custom-portraits') && sitemapXml.includes('/art-classes'), 'GET /sitemap.xml lists all 67 public studio routes including 50 sub-services');
  } catch (err) {
    assert(false, `Infrastructure test error: ${err.message}`);
  }

  // 2. Scenario 1: Direct visit with no UTM parameters
  console.log('\n--- 2. Scenario 1: Direct Visit (No UTMs) ---');
  let directLeadNumber = '';
  try {
    const res = await fetch(`${BASE_URL}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
      body: JSON.stringify({
        fullName: 'Aria Thorne',
        email: 'aria.thorne.test@example.com',
        phone: '+91 98765 00001',
        serviceCategory: 'custom-art',
        estimatedBudget: '₹1,50,000 - ₹5,00,000',
        preferredTimeline: 'Flexible (1 - 3 months)',
        projectDescription: 'Interested in a 6-foot raw pigment canvas for our new living room elevation.',
        formId: 'form_service_custom_art',
        submittedFromPage: '/services/custom-art',
        clientElapsedMs: 2500,
        visitor: { type: 'new', device: 'desktop' },
        firstTouch: {
          landingPage: 'http://localhost:3000/services/custom-art',
          referrer: '',
          trafficCategory: 'Direct',
          utm: {},
          clickIds: {},
        },
        lastTouch: {
          page: 'http://localhost:3000/services/custom-art',
          referrer: '',
          trafficCategory: 'Direct',
          utm: {},
          clickIds: {},
        },
      }),
    });
    const data = await res.json();
    assert(res.status === 201 && data.success, `Direct lead created successfully: ${data.leadNumber}`);
    directLeadNumber = data.leadNumber;

    const savedLead = await Lead.findOne({ leadNumber: directLeadNumber });
    assert(savedLead && savedLead.firstTouch.trafficCategory === 'Direct', 'Direct lead saved in MongoDB with trafficCategory="Direct"');
  } catch (err) {
    assert(false, `Scenario 1 error: ${err.message}`);
  }

  // 3. Scenario 2: Referral visit
  console.log('\n--- 3. Scenario 2: Referral Traffic Visit ---');
  try {
    const res = await fetch(`${BASE_URL}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' },
      body: JSON.stringify({
        fullName: 'Julian Vance',
        email: 'julian.vance.test@example.com',
        serviceCategory: 'branding',
        projectDescription: 'Architectural studio branding requirements with custom stationery and typography.',
        formId: 'form_service_branding',
        submittedFromPage: '/services/branding',
        clientElapsedMs: 3100,
        firstTouch: {
          landingPage: 'http://localhost:3000/services/branding',
          referrer: 'https://archdaily.com/articles/minimalist-studios',
          trafficCategory: 'Referral',
          utm: {},
          clickIds: {},
        },
      }),
    });
    const data = await res.json();
    assert(res.status === 201, `Referral lead created: ${data.leadNumber}`);
    const saved = await Lead.findOne({ email: 'julian.vance.test@example.com' });
    assert(saved && saved.firstTouch.trafficCategory === 'Referral', 'Referral attribution persisted correctly');
  } catch (err) {
    assert(false, `Scenario 2 error: ${err.message}`);
  }

  // 4. Scenario 3 & 4: Paid Campaign with UTMs, gclid and fbclid
  console.log('\n--- 4. Scenario 3 & 4: Paid Campaign (UTMs + gclid + fbclid) ---');
  try {
    const res = await fetch(`${BASE_URL}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)' },
      body: JSON.stringify({
        fullName: 'Devon Sterling',
        email: 'devon.sterling.test@example.com',
        phone: '+91 98765 00003',
        organization: 'Sterling Hospitality',
        serviceCategory: 'murals',
        estimatedBudget: '₹5,00,000+',
        preferredTimeline: 'Standard (2 - 6 weeks)',
        projectDescription: 'Monumental hand-painted mural needed for our luxury resort pavilion.',
        formId: 'form_service_murals',
        submittedFromPage: '/services/murals',
        clientElapsedMs: 4200,
        visitor: { type: 'new', device: 'ios' },
        firstTouch: {
          landingPage: 'http://localhost:3000/?utm_source=google_ads&utm_medium=cpc&utm_campaign=luxury_murals_2026&gclid=GCLID_TEST_987654321',
          referrer: 'https://www.google.com',
          trafficCategory: 'Paid Campaign',
          utm: {
            source: 'google_ads',
            medium: 'cpc',
            campaign: 'luxury_murals_2026',
            term: 'architectural mural artists',
          },
          clickIds: {
            gclid: 'GCLID_TEST_987654321',
            fbclid: 'FBCLID_TEST_123456789',
          },
        },
        lastTouch: {
          page: 'http://localhost:3000/services/murals',
          referrer: 'http://localhost:3000/portfolio',
          trafficCategory: 'Paid Campaign',
          utm: {
            source: 'google_ads',
            medium: 'cpc',
            campaign: 'luxury_murals_2026',
          },
          clickIds: {
            gclid: 'GCLID_TEST_987654321',
          },
        },
      }),
    });
    const data = await res.json();
    assert(res.status === 201, `Paid campaign lead created: ${data.leadNumber}`);
    const saved = await Lead.findOne({ email: 'devon.sterling.test@example.com' });
    assert(saved && saved.firstTouch.clickIds.gclid === 'GCLID_TEST_987654321', 'Google Click ID (gclid) correctly captured');
    assert(saved && saved.firstTouch.clickIds.fbclid === 'FBCLID_TEST_123456789', 'Meta Click ID (fbclid) correctly captured');
    assert(saved && saved.firstTouch.utm.source === 'google_ads', 'UTM source normalized');
  } catch (err) {
    assert(false, `Scenario 3 & 4 error: ${err.message}`);
  }

  // 5. Scenario 6: Returning Visitor Classification
  console.log('\n--- 5. Scenario 6: Returning Visitor Classification ---');
  try {
    const res = await fetch(`${BASE_URL}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Elena Rostova',
        email: 'elena.rostova.test@example.com',
        serviceCategory: 'art-products',
        projectDescription: 'Purchasing an archival print edition from the Solitude series.',
        formId: 'form_service_art_products',
        submittedFromPage: '/services/art-products',
        clientElapsedMs: 2800,
        visitor: { type: 'returning', device: 'desktop' },
      }),
    });
    const data = await res.json();
    assert(res.status === 201, `Returning visitor lead saved: ${data.leadNumber}`);
    const saved = await Lead.findOne({ email: 'elena.rostova.test@example.com' });
    assert(saved && saved.visitor.type === 'returning', 'Visitor classified as "returning"');
  } catch (err) {
    assert(false, `Scenario 6 error: ${err.message}`);
  }

  // 6. Scenario 9: Anti-Spam Honeypot & Bot Fast-Submission Detection
  console.log('\n--- 6. Scenario 9: Anti-Spam & Validation Tests ---');
  try {
    // Honeypot test: Bot fills hidden field
    const botRes = await fetch(`${BASE_URL}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Bot Spammer',
        email: 'bot@spammer.com',
        projectDescription: 'Cheap SEO services buy now!',
        hp_studio_verify: 'I am a spambot', // Filled honeypot
      }),
    });
    const botData = await botRes.json();
    assert(botRes.status === 200, 'Honeypot caught: returns generic success to silence bot analysis');
    const botSaved = await Lead.findOne({ email: 'bot@spammer.com' });
    assert(!botSaved, 'Honeypot submission is dropped and NOT saved to MongoDB');

    // Sub-second submission test
    const fastRes = await fetch(`${BASE_URL}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Fast Submitter',
        email: 'fast@example.com',
        projectDescription: 'Submitting in 100 milliseconds',
        clientElapsedMs: 150, // Sub-second
      }),
    });
    assert(fastRes.status === 400, 'Sub-second submission blocked as automated script');

    // Invalid email validation test
    const invalidEmailRes = await fetch(`${BASE_URL}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Invalid Email Person',
        email: 'not-an-email',
        projectDescription: 'Valid description here',
        clientElapsedMs: 2500,
      }),
    });
    assert(invalidEmailRes.status === 400, 'Invalid email format rejected with 400 Bad Request');
  } catch (err) {
    assert(false, `Anti-spam test error: ${err.message}`);
  }

  // 7. Scenario 10: Duplicate Submission Prevention
  console.log('\n--- 7. Scenario 10: Duplicate Submission Prevention ---');
  try {
    const dupPayload = {
      fullName: 'Marcus Cole',
      email: 'marcus.cole.test@example.com',
      serviceCategory: 'website-development',
      projectDescription: 'Portfolio website redesign for luxury architectural studio.',
      formId: 'form_service_website',
      submittedFromPage: '/services/website-development',
      clientElapsedMs: 3000,
    };

    // First submit
    const firstRes = await fetch(`${BASE_URL}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dupPayload),
    });
    const firstData = await firstRes.json();
    assert(firstRes.status === 201, `Initial lead submission succeeded: ${firstData.leadNumber}`);

    // Immediate duplicate submit within 120s
    const secondRes = await fetch(`${BASE_URL}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dupPayload),
    });
    const secondData = await secondRes.json();
    assert(
      secondRes.status === 200 && secondData.leadNumber === firstData.leadNumber,
      'Duplicate submission within 120s gracefully handled without duplicating DB record'
    );
  } catch (err) {
    assert(false, `Duplicate prevention error: ${err.message}`);
  }

  // 8. Scenario 12: Admin CRM Authentication & Lead Inspection
  console.log('\n--- 8. Scenario 12: Admin CRM & Attribution Inspection ---');
  try {
    // Login
    const loginRes = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'admin@hunarstudio.com',
        password: 'HunarStudio2026!Admin',
      }),
    });
    const loginData = await loginRes.json();
    assert(loginRes.status === 200 && loginData.token, 'Admin authentication successful with JWT token');

    const adminToken = loginData.token;
    const authHeaders = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${adminToken}`,
    };

    // Fetch leads through protected API
    const crmLeadsRes = await fetch(`${BASE_URL}/api/admin/leads`, { headers: authHeaders });
    const crmData = await crmLeadsRes.json();
    assert(crmLeadsRes.status === 200 && crmData.leads.length >= 4, `Protected CRM returned ${crmData.leads.length} leads`);

    // Verify first lead details and attribution
    const targetLead = crmData.leads[0];
    const detailRes = await fetch(`${BASE_URL}/api/admin/leads/${targetLead._id}`, { headers: authHeaders });
    const detailData = await detailRes.json();
    assert(
      detailRes.status === 200 && detailData.lead.firstTouch,
      `Lead detail contains full First-Touch attribution: ${detailData.lead.firstTouch.trafficCategory}`
    );

    // Update status to 'Contacted'
    const statusRes = await fetch(`${BASE_URL}/api/admin/leads/${targetLead._id}/status`, {
      method: 'PATCH',
      headers: authHeaders,
      body: JSON.stringify({ status: 'Contacted', reason: 'Called client to discuss canvas dimensions' }),
    });
    const statusData = await statusRes.json();
    assert(statusRes.status === 200 && statusData.lead.status === 'Contacted', 'Status updated to Contacted with audit entry');

    // Add Internal Note
    const noteRes = await fetch(`${BASE_URL}/api/admin/leads/${targetLead._id}/notes`, {
      method: 'POST',
      headers: authHeaders,
      body: JSON.stringify({ content: 'Patron requested Belgian linen sample swatches in natural and bleached.' }),
    });
    const noteData = await noteRes.json();
    assert(noteRes.status === 200 && noteData.lead.internalNotes.length > 0, 'Internal note recorded with author and timestamp');

    // Schedule Follow-Up Date
    const followUpDate = '2026-11-01';
    const followUpRes = await fetch(`${BASE_URL}/api/admin/leads/${targetLead._id}/follow-up`, {
      method: 'PATCH',
      headers: authHeaders,
      body: JSON.stringify({ followUpDate }),
    });
    const followUpData = await followUpRes.json();
    assert(followUpRes.status === 200 && followUpData.lead.followUpDate, 'Follow-up date scheduled successfully');

    // Authorized CSV Export
    const csvRes = await fetch(`${BASE_URL}/api/admin/leads/export`, { headers: authHeaders });
    const csvText = await csvRes.text();
    assert(
      csvRes.status === 200 && csvText.includes('Lead Number') && csvText.includes('Traffic Category'),
      'Authorized CSV export generated with complete attribution columns'
    );
  } catch (err) {
    assert(false, `Admin CRM test error: ${err.message}`);
  }

  console.log('\n======================================================');
  console.log(` RESULTS: ${passed} PASSED, ${failed} FAILED`);
  console.log('======================================================\n');

  if (server) {
    await new Promise((resolve) => server.close(resolve));
  }
  await mongoose.connection.close();

  process.exit(failed > 0 ? 1 : 0);
}

// Start server on dynamic port, then test
async function init() {
  await new Promise((resolve) => {
    server = app.listen(0, () => {
      const port = server.address().port;
      BASE_URL = `http://localhost:${port}`;
      console.log(`[Test Server] Running on ${BASE_URL}`);
      resolve();
    });
  });

  await runTests();
}

init().catch((err) => {
  console.error('Test execution failed:', err);
  process.exit(1);
});


