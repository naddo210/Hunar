import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import EnquiryForm from '../../components/EnquiryForm';
import ProjectGallery from '../../components/ProjectGallery';
import { DIVISIONS, SUB_SERVICES } from '../../data/servicesCatalogue';
import { Check, Plus, Minus, ArrowUpRight, ArrowLeft } from 'lucide-react';

const PROCESS_STAGES = [
  { step: '01', title: 'Consultation & Creative Brief', desc: 'We align on aesthetic references, space dimensions, material preferences, and target deadlines.' },
  { step: '02', title: 'Concept & Composition Studies', desc: 'Our lead artists or designers create initial studies, color swatches, or wireframe blueprints.' },
  { step: '03', title: 'Atelier Execution & Refinement', desc: 'Crafting the piece or digital system with regular milestone updates and patron reviews.' },
  { step: '04', title: 'Archival Finish & Handover', desc: 'Varnishing, framing, high-resolution master file delivery, and provenance documentation.' },
];

export default function SubServiceTemplate() {
  const { division, subService } = useParams();
  const [openFaq, setOpenFaq] = useState(0);

  const divisionData = DIVISIONS[division];
  const serviceData = SUB_SERVICES[subService];

  // If invalid route, redirect to services overview
  if (!divisionData || !serviceData || serviceData.division !== division) {
    return <Navigate to="/services" replace />;
  }

  // Schema.org Structured Data
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceData.title,
    provider: {
      '@type': 'Organization',
      name: 'HUNAR Creative Studio',
      url: 'https://hunarstudio.com',
    },
    areaServed: 'Worldwide',
    description: serviceData.metaDescription,
  };

  const faqSchema = serviceData.faqs && serviceData.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: serviceData.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  } : null;

  // Sister sub-services in this division
  const sisterServices = Object.values(SUB_SERVICES)
    .filter((s) => s.division === division && s.slug !== subService)
    .slice(0, 4);

  return (
    <>
      <SEO
        title={serviceData.metaTitle}
        description={serviceData.metaDescription}
        canonicalUrl={`/services/${division}/${subService}`}
        schema={[serviceSchema, ...(faqSchema ? [faqSchema] : [])]}
      />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs
          items={[
            { label: 'Services', href: '/services' },
            { label: divisionData.title, href: divisionData.path },
            { label: serviceData.title },
          ]}
        />
      </div>

      {/* Service Hero */}
      <section className="pt-10 pb-16 sm:pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="editorial-eyebrow">{divisionData.title}</span>
              {/* Every page has an explicit h1 */}
              <h1 className="mt-3 font-serif text-3xl sm:text-5xl lg:text-6xl text-emerald font-normal leading-[1.15] tracking-tight">
                {serviceData.title}
              </h1>
              <p className="mt-6 text-base sm:text-lg text-charcoal/80 leading-relaxed font-light max-w-2xl">
                {serviceData.summary}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#inquiry"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald hover:bg-emerald-dark text-cream text-xs uppercase tracking-widest font-semibold rounded shadow-sm hover:shadow-emerald transition"
                >
                  Initiate Commission
                  <ArrowUpRight className="w-3.5 h-3.5 text-beige" />
                </a>
                <Link
                  to={divisionData.path}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-charcoal/30 hover:border-emerald text-charcoal hover:text-emerald text-xs uppercase tracking-widest font-semibold rounded transition"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-olive" />
                  {divisionData.title} Overview
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded overflow-hidden shadow-card border border-beige aspect-[4/3] bg-cream-dark">
                <img
                  src={serviceData.heroImage}
                  alt={`${serviceData.title} demonstration work`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & Scope Checklist */}
      <section className="py-20 bg-sage/15 border-y border-beige/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="editorial-eyebrow">Deliverables & Scope</span>
              <h2 className="font-serif text-3xl text-emerald font-medium mt-2 mb-6">
                What the Atelier Delivers
              </h2>
              <div className="space-y-4">
                {serviceData.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-emerald/10 text-emerald border border-emerald/20 flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-sm text-charcoal/80 leading-relaxed font-light">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="editorial-eyebrow">Production Flow</span>
              <h2 className="font-serif text-3xl text-emerald font-medium mt-2 mb-6">
                Atelier Progression
              </h2>
              <div className="space-y-6">
                {PROCESS_STAGES.map((s) => (
                  <div key={s.step} className="flex items-start gap-4">
                    <span className="font-mono text-xs font-semibold text-olive mt-1">{s.step}</span>
                    <div>
                      <h3 className="font-serif text-xl text-emerald font-medium">{s.title}</h3>
                      <p className="text-xs sm:text-sm text-charcoal/70 mt-1 leading-relaxed font-light">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Dummy Image Gallery for this specific Sub-Service */}
      <ProjectGallery
        images={serviceData.galleryImages}
        title={`Selected Works & Studies: ${serviceData.title}`}
      />

      {/* Frequently Asked Questions */}
      {serviceData.faqs && serviceData.faqs.length > 0 && (
        <section className="py-20 bg-cream border-t border-beige/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="editorial-eyebrow">Clarity</span>
            <h2 className="font-serif text-3xl text-emerald font-medium mt-2 mb-8">
              Frequently Asked Questions
            </h2>

            <div className="divide-y divide-beige/60 border-y border-beige/60">
              {serviceData.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="py-5">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left group focus:outline-none"
                    >
                      <span className="font-serif text-xl text-emerald group-hover:text-olive transition-colors pr-6">
                        {faq.q}
                      </span>
                      <span className="p-1 rounded-full text-charcoal/60 group-hover:text-emerald transition-colors flex-shrink-0">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="mt-3 text-sm text-charcoal/80 leading-relaxed font-light pr-8">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Sister Sub-Services / Related Disciplines */}
      {sisterServices.length > 0 && (
        <section className="py-16 bg-cream-pure border-t border-beige/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="editorial-eyebrow">Related Offerings</span>
                <h3 className="font-serif text-2xl text-emerald font-medium mt-1">
                  More in {divisionData.title}
                </h3>
              </div>
              <Link
                to={divisionData.path}
                className="text-xs uppercase tracking-wider font-semibold text-charcoal/70 hover:text-emerald transition"
              >
                View Full Division →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sisterServices.map((sister) => (
                <Link
                  key={sister.slug}
                  to={`/services/${division}/${sister.slug}`}
                  className="p-5 bg-white border border-beige/70 rounded hover:border-emerald/80 transition flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    <h4 className="font-serif text-lg text-emerald font-medium group-hover:text-olive transition-colors">
                      {sister.title}
                    </h4>
                    <p className="mt-2 text-xs text-charcoal/70 line-clamp-2 font-light">
                      {sister.summary}
                    </p>
                  </div>
                  <span className="mt-4 pt-3 border-t border-beige/40 inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-semibold text-emerald">
                    Explore Offering <ArrowUpRight className="w-3 h-3 text-olive" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Auto-prefilled Enquiry Form Section */}
      <section id="inquiry" className="py-24 bg-cream border-t border-beige/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm
            defaultService={division === 'branding-design' ? 'branding' : division === 'murals-commercial-art' ? 'murals' : division}
            formId={`form_${division}_${subService}`}
            title={`Commission Inquiry: ${serviceData.title}`}
            subtitle={`Share your vision, dimensions, or specifications with our studio directors.`}
          />
        </div>
      </section>
    </>
  );
}

