import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function CookiePolicy() {
  return (
    <>
      <SEO
        title="Cookie Policy & Attribution Preferences — HUNAR Creative Studio"
        description="Learn how HUNAR Creative Studio utilizes essential session cookies and optional analytical attribution signals on our website."
        canonicalUrl="/cookies"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: 'Cookie Policy' }]} />
      </div>

      <section className="pt-12 pb-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="editorial-eyebrow">Studio Governance</span>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-emerald font-normal leading-tight">
            Cookie Policy
          </h1>
          <p className="mt-2 text-xs text-charcoal/60 font-mono">
            Last Updated: October 2026
          </p>

          <div className="editorial-divider my-8" />

          <div className="space-y-8 text-charcoal/80 text-sm sm:text-base leading-relaxed font-light">
            <div>
              <h2 className="font-serif text-2xl text-emerald font-medium mb-3">1. What Are Cookies?</h2>
              <p>
                Cookies and local storage tokens are small text files placed on your browser or device when you navigate our website. They permit our platform to remember your navigation preferences, protect our inquiry forms against bot automation, and provide insight into site traffic.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-emerald font-medium mb-3">2. Categories of Cookies We Deploy</h2>
              <div className="space-y-4">
                <div className="p-5 bg-white border border-beige/70 rounded shadow-card">
                  <h3 className="font-serif text-lg text-emerald font-medium">Essential & Security Cookies (Mandatory)</h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 mt-1 font-light leading-relaxed">
                    These cookies are strictly necessary for core site operations, including secure form submission anti-tampering tokens (`hp_studio_verify`), sliding-window rate limiting, and authorized admin CRM sessions (`hunar_admin_token`). They cannot be disabled.
                  </p>
                </div>

                <div className="p-5 bg-white border border-beige/70 rounded shadow-card">
                  <h3 className="font-serif text-lg text-emerald font-medium">Analytics & Attribution Signals (Optional)</h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 mt-1 font-light leading-relaxed">
                    With your consent via our banner, we record first-touch and last-touch attribution tokens (`_hunar_ft`, `_hunar_lt`) and an anonymous visitor classifier (`_hunar_vid`) to evaluate whether inquiries stem from direct visits, referrals, or creative campaigns.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-emerald font-medium mb-3">3. Managing Your Preferences</h2>
              <p>
                You can adjust or revoke your cookie preferences at any time by clearing your browser's local storage or using the Cookie Preferences controls located in our consent drawer. Furthermore, most modern web browsers permit you to block cookies entirely via browser settings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

