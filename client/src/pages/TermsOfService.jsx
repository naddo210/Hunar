import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Terms of Service & Atelier Agreements — HUNAR Creative Studio"
        description="Review the terms and conditions governing fine art commissions, brand identity engagements, web development, and merchandise from HUNAR Creative Studio."
        canonicalUrl="/terms"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
      </div>

      <section className="pt-12 pb-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="editorial-eyebrow">Studio Governance</span>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-emerald font-normal leading-tight">
            Terms of Service
          </h1>
          <p className="mt-2 text-xs text-charcoal/60 font-mono">
            Last Updated: October 2026
          </p>

          <div className="editorial-divider my-8" />

          <div className="space-y-8 text-charcoal/80 text-sm sm:text-base leading-relaxed font-light">
            <div>
              <h2 className="font-serif text-2xl text-emerald font-medium mb-3">1. Scope of Engagement</h2>
              <p>
                These terms govern all creative engagements entered into with HUNAR Creative Studio, encompassing custom fine art commissions, brand identity systems, website design and engineering, murals, and physical product purchases.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-emerald font-medium mb-3">2. Commission Quotations & Retainers</h2>
              <p>
                Formal work commences upon written agreement of a bespoke Studio Brief and receipt of the designated project deposit (typically 50% non-refundable retainer for custom artwork and branding projects). Milestone deliverables and payment schedules will be explicitly documented in each individual proposal.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-emerald font-medium mb-3">3. Intellectual Property Rights</h2>
              <p>
                For branding and custom website development, complete commercial rights to the approved final marks, assets, and source code transfer to the client upon full payment. Preliminary sketches and unselected design directions remain the proprietary intellectual property of HUNAR.
              </p>
              <p className="mt-2">
                For original fine art commissions, patrons acquire physical ownership of the artwork. Copyright and moral rights remain vested in the artist, prohibiting unauthorized commercial reproduction unless explicitly licensed in writing.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-emerald font-medium mb-3">4. Limitation of Liability</h2>
              <p>
                HUNAR provides all services with professional care and material diligence. While we guarantee technical craftsmanship and adherence to archival standards, the studio is not liable for indirect or consequential losses resulting from client implementation or external third-party hosting failures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

