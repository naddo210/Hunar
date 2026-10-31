import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy — HUNAR Creative Studio"
        description="Read the privacy governance and data protection practices of HUNAR Creative Studio. How we respect visitor attribution, inquiries, and customer confidentiality."
        canonicalUrl="/privacy"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
      </div>

      <section className="pt-12 pb-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="editorial-eyebrow">Studio Governance</span>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-emerald font-normal leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-charcoal/60 font-mono">
            Last Updated: October 2026
          </p>

          <div className="editorial-divider my-8" />

          <div className="space-y-8 text-charcoal/80 text-sm sm:text-base leading-relaxed font-light">
            <div>
              <h2 className="font-serif text-2xl text-emerald font-medium mb-3">1. Principles of Data Stewardship</h2>
              <p>
                HUNAR Creative Studio operates under the strict principle of data minimization. We only collect information strictly required to respond to commission briefs, provide customer service, preserve lead attribution, and uphold studio security. We never sell, rent, or trade your personal or project data.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-emerald font-medium mb-3">2. Information We Collect</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Contact & Project Information:</strong> Full name, email address, telephone number, organization name, and project requirements submitted via our consultation and enquiry forms.
                </li>
                <li>
                  <strong>Attribution & Campaign Signals:</strong> When you arrive via marketing campaigns, we capture non-identifying UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`), referral headers, and click identifiers (`gclid`, `fbclid`) to evaluate channel effectiveness.
                </li>
                <li>
                  <strong>Device & Network Categorization:</strong> Broad device type (`desktop`, `tablet`, `mobile`) and approximate country/city level data via CDN headers. We do not capture high-entropy canvas fingerprints or precise GPS coordinates.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-emerald font-medium mb-3">3. How Data is Utilized</h2>
              <p>
                All submitted information is utilized exclusively for:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Evaluating and preparing custom proposals and artistic commission agreements.</li>
                <li>Responding to inquiries within our 24–48 hour studio SLA.</li>
                <li>Protecting our server endpoints against brute-force attacks, automated bot spam, and denial-of-service attempts.</li>
                <li>Internal attribution analysis to optimize our studio resources.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-emerald font-medium mb-3">4. Data Retention & Security</h2>
              <p>
                Lead records are stored within an encrypted MongoDB Atlas database protected by role-based access controls and secure JSON Web Tokens. Inactive lead archives are periodically reviewed and pruned in accordance with data protection best practices.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-emerald font-medium mb-3">5. Your Legal Rights</h2>
              <p>
                Under applicable privacy legislation, you have the right to request access to the personal data we hold about you, request corrections, or request complete erasure of your contact record. To exercise these rights, please email us directly at{' '}
                <a href="mailto:inquiries@hunarstudio.com" className="text-emerald underline font-medium hover:text-olive">
                  inquiries@hunarstudio.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

