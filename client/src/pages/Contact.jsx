import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import EnquiryForm from '../components/EnquiryForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact HUNAR Creative Studio',
    url: 'https://hunarstudio.com/contact',
    description: 'Get in touch with the creative directors at HUNAR Creative Studio for fine art commissions, brand systems, and web projects.',
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
                    Atelier Locations
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                    Visits are hosted by appointment for collectors, architects, and collaborating founders.
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-beige/40 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-olive flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-emerald">Bengaluru Atelier</p>
                      <p className="text-charcoal/70 text-xs font-light mt-0.5">
                        Indiranagar Arts Quarter, Bengaluru, Karnataka 560038
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-olive flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-emerald">New Delhi Design Studio</p>
                      <p className="text-charcoal/70 text-xs font-light mt-0.5">
                        Hauz Khas Studio Complex, New Delhi 110016
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-beige/40 text-sm">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-olive flex-shrink-0" />
                    <a
                      href="mailto:inquiries@hunarstudio.com"
                      className="text-charcoal/80 hover:text-emerald transition font-medium text-xs sm:text-sm"
                    >
                      inquiries@hunarstudio.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-olive flex-shrink-0" />
                    <a
                      href="tel:+919876543210"
                      className="text-charcoal/80 hover:text-emerald transition font-medium text-xs sm:text-sm"
                    >
                      +91 98765 43210
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-charcoal/70 text-xs font-light">
                    <Clock className="w-4 h-4 text-olive flex-shrink-0" />
                    <span>Monday – Friday, 10:00 AM – 7:00 PM IST</span>
                  </div>
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
