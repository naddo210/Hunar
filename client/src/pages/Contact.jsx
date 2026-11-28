import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import EnquiryForm from '../components/EnquiryForm';
import { STUDIO_CONTACT } from '../constants/studioContact';
import { Mail, Phone, MapPin, Clock, MessageCircle, Instagram, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${STUDIO_CONTACT.studioName}`,
    url: 'https://hunarstudio.com/contact',
    description: 'Get in touch with the creative directors at HUNAR Creative Studio in Mumbai for fine art commissions, brand systems, and web projects.',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: STUDIO_CONTACT.studioName,
      telephone: STUDIO_CONTACT.phoneDisplay,
      email: STUDIO_CONTACT.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: STUDIO_CONTACT.city,
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
      sameAs: [STUDIO_CONTACT.instagramUrl],
    },
  };

  return (
    <>
      <SEO
        title="Contact Atelier & Project Inquiries — HUNAR Creative Studio"
        description="Connect with the creative directors at HUNAR Creative Studio. Initiate an artwork commission, discuss brand identity design, or schedule a studio visit."
        canonicalUrl="/contact"
        schema={contactSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: 'Contact Atelier' }]} />
      </div>

      <section className="pt-10 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="editorial-eyebrow">Studio Connection</span>
            {/* Explicit H1 */}
            <h1 className="mt-3 font-serif text-3xl sm:text-5xl lg:text-6xl text-emerald font-normal leading-tight">
              Begin a creative collaboration.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-charcoal/80 leading-relaxed font-light">
              We welcome commissions for custom canvas paintings, comprehensive brand identity systems, high-performance web engineering, and commercial murals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Atelier Info Column */}
            <div className="lg:col-span-5 space-y-10">
              <div className="p-8 bg-white border border-beige/70 rounded shadow-card space-y-6">
                <div>
                  <h2 className="font-serif text-2xl text-emerald font-medium">
                    Mumbai Atelier
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                    Visits and studio consultations in Mumbai are hosted by appointment for collectors, architects, and collaborating founders.
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-beige/40 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-olive flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-emerald">{STUDIO_CONTACT.city} Creative Studio</p>
                      <p className="text-charcoal/70 text-xs font-light mt-0.5">
                        {STUDIO_CONTACT.locationFull}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3.5 pt-4 border-t border-beige/40 text-sm">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-olive flex-shrink-0" />
                    <a
                      href={`mailto:${STUDIO_CONTACT.email}`}
                      className="text-charcoal/80 hover:text-emerald transition font-medium text-xs sm:text-sm"
                    >
                      {STUDIO_CONTACT.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-olive flex-shrink-0" />
                    <a
                      href={STUDIO_CONTACT.phoneHref}
                      className="text-charcoal/80 hover:text-emerald transition font-medium text-xs sm:text-sm"
                    >
                      {STUDIO_CONTACT.phoneDisplay}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-4 h-4 text-emerald flex-shrink-0" />
                    <a
                      href={STUDIO_CONTACT.whatsappChatUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-emerald hover:text-olive transition font-medium text-xs sm:text-sm"
                    >
                      <span>WhatsApp · {STUDIO_CONTACT.phoneDisplay}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Instagram className="w-4 h-4 text-olive flex-shrink-0" />
                    <a
                      href={STUDIO_CONTACT.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-charcoal/80 hover:text-emerald transition font-medium text-xs sm:text-sm"
                    >
                      <span>Instagram · {STUDIO_CONTACT.instagramHandle}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-charcoal/70 text-xs font-light">
                    <Clock className="w-4 h-4 text-olive flex-shrink-0" />
                    <span>Monday – Friday, 10:00 AM – 7:00 PM IST</span>
                  </div>
                </div>

                {/* Direct WhatsApp Quick-Chat CTA */}
                <div className="pt-2">
                  <a
                    href={STUDIO_CONTACT.whatsappChatUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald hover:bg-emerald-dark text-cream text-xs uppercase tracking-widest font-semibold rounded transition shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-beige" />
                    <span>Message Us on WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="p-6 bg-sage/15 border border-beige/50 rounded">
                <span className="editorial-eyebrow">Studio Response SLA</span>
                <p className="mt-2 text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                  Our directors review inquiries every morning. You will receive a personal reply with timeline availability and project questions within 24 to 48 hours.
                </p>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <EnquiryForm
                defaultService="general"
                formId="form_contact_main"
                title="Submit Project Inquiry"
                subtitle="Provide project context and select your service requirements below."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
