import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

const FAQS = [
  {
    q: 'How does the custom fine art commission process work?',
    a: 'We begin with an architectural and aesthetic consultation where we assess your space, dimensions, lighting, and textural preferences. Our artists then create miniature oil studies and palette swatches. Once approved, the piece is stretched on Belgian linen, painted with archival mineral pigments, cured, and delivered with a Certificate of Authenticity.',
  },
  {
    q: 'What is the typical timeline for a complete brand identity project?',
    a: 'Comprehensive branding systems typically span 4 to 8 weeks. This allows sufficient time for cultural immersion, typographic exploration, secondary mark creation, tactile packaging tests, and full editorial guideline documentation.',
  },
  {
    q: 'How do you build custom websites, and do you use generic CMS templates?',
    a: 'We never use generic pre-built templates or rigid drag-and-drop page builders. Our digital platforms are custom engineered using modern full-stack architectures (React, Node.js, Express, MongoDB). Every layout, typographic rhythm, and responsive breakpoint is crafted with bespoke attention to performance and 100/100 Core Web Vitals.',
  },
  {
    q: 'Do you execute commercial murals outside of Bengaluru and New Delhi?',
    a: 'Yes. Our mural execution team regularly travels across India and internationally. For distant projects, we conduct initial laser surveys and elevation planning virtually, followed by on-site substrate preparation and hand-painting over a 1 to 3 week installation period.',
  },
  {
    q: 'Who owns the intellectual property and copyright of commissioned works?',
    a: 'For branding systems and website source code, full commercial operating rights and design ownership transfer to the client upon final invoice settlement. For original fine art commissions, patrons own the physical artwork outright, while standard moral rights and artistic reproduction rights are preserved by the studio as per international fine art convention.',
  },
  {
    q: 'When will the online art classes officially open for enrollment?',
    a: 'Our online fine art masterclasses are in curriculum production and scheduled to launch in late 2026. Patrons who register on the early-access waitlist will receive first access to syllabus details, pigment kits, and limited cohort seats prior to public announcement.',
  },
  {
    q: 'How do you handle shipping and insurance for delicate art pieces?',
    a: 'Every original painting and limited edition print is packed in acid-free archival wrapping and custom-built wooden crates with moisture barriers. We ship via specialized fine art couriers with 100% door-to-door transit insurance.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <>
      <SEO
        title="Frequently Asked Questions & Atelier Policies — HUNAR"
        description="Find answers to common questions about commissioning original art, branding timelines, web development architectures, mural installations, and IP rights at HUNAR."
        canonicalUrl="/faq"
        schema={faqSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />
      </div>

      <section className="pt-10 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="editorial-eyebrow">Clarity & Procedures</span>
            {/* Explicit H1 */}
            <h1 className="mt-3 font-serif text-3xl sm:text-5xl lg:text-6xl text-emerald font-normal leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-base sm:text-lg text-charcoal/80 leading-relaxed font-light">
              Clear information regarding commission procedures, production timelines, copyright, and delivery logistics across our creative disciplines.
            </p>
          </div>

          {/* Accordion */}
          <div className="divide-y divide-beige/50 border-y border-beige/50">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-6">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-xl sm:text-2xl text-emerald group-hover:text-olive transition-colors pr-6">
                      {faq.q}
                    </span>
                    <span className="p-1 rounded-full text-charcoal/50 group-hover:text-emerald transition-colors flex-shrink-0">
                      {isOpen ? <Minus className="w-4 h-4 text-emerald" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pr-12 text-charcoal/70 text-sm sm:text-base leading-relaxed font-light">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Additional Questions Card */}
          <div className="mt-16 p-8 sm:p-10 bg-white border border-beige/70 rounded text-center shadow-card">
            <h2 className="font-serif text-2xl sm:text-3xl text-emerald font-medium">
              Have a bespoke inquiry not addressed here?
            </h2>
            <p className="mt-2 text-sm text-charcoal/70 max-w-lg mx-auto leading-relaxed font-light">
              Our directors are happy to review your architectural plans, brand challenges, or custom substrate requirements directly.
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-6 py-3 bg-emerald hover:bg-emerald-dark text-cream text-xs uppercase tracking-widest font-semibold rounded transition shadow-sm hover:shadow-emerald"
              >
                Inquire with Studio
                <ArrowUpRight className="w-4 h-4 text-beige" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
