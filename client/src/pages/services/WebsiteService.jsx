import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import EnquiryForm from '../../components/EnquiryForm';
import ProjectGallery from '../../components/ProjectGallery';
import { SUB_SERVICES } from '../../data/servicesCatalogue';
import { ArrowUpRight } from 'lucide-react';

const SUB_KEYS = [
  'business-websites',
  'portfolio-websites',
  'ecommerce-websites',
  'landing-pages',
  'agency-websites',
  'website-redesign',
];

const GALLERY = [
  {
    url: '/portfolio/web-design/shikha-singh-luxury-model-portfolio.webp',
    caption: 'Shikha Singh — High-Fashion Luxury Model Digital Flagship',
    tag: 'Luxury Web',
    alt: 'Luxury model portfolio website design for Shikha Singh featuring runway fashion photography'
  },
  {
    url: '/portfolio/web-design/the-nadeems-gourmet-ordering-web.webp',
    caption: 'The Nadeems — Gourmet Dining & Food Delivery Web App',
    tag: 'Ecommerce',
    alt: 'Gourmet restaurant website design for The Nadeems with online food ordering'
  },
  {
    url: '/portfolio/web-design/greek-automata-techfest-website.webp',
    caption: 'Greek Automata — College Techfest Registration Platform',
    tag: 'Event Platform',
    alt: 'Dark modern tech festival website design for Greek Automata with glowing circuit graphics'
  },
  {
    url: '/portfolio/web-design/ah-properties-real-estate-portal.webp',
    caption: 'A.H Properties — Commercial & Residential Real Estate Portal',
    tag: 'Real Estate',
    alt: 'Real estate company website design for AH Properties showing property listings'
  },
  {
    url: '/portfolio/web-design/mirza-hajj-umrah-travel-portal.webp',
    caption: 'Mirza Hajj & Umrah — Sacred Pilgrimage Tour Portal',
    tag: 'Travel Agency',
    alt: 'Travel agency website design for Mirza Hajj and Umrah featuring tour package booking'
  },
];

export default function WebsiteService() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Website Design & Development',
    provider: {
      '@type': 'Organization',
      name: 'HUNAR Creative Studio',
      url: 'https://hunarstudio.com',
    },
    areaServed: 'Worldwide',
    description: 'Web experiences designed to present services, build trust and help customers take action.',
  };

  const subServiceItems = SUB_KEYS.map((k) => SUB_SERVICES[k]).filter(Boolean);

  return (
    <>
      <SEO
        title="Website Design & Development — Custom MERN Full-Stack Platforms | HUNAR"
        description="Bespoke website design and full-stack development by HUNAR Creative Studio. Business websites, portfolios, ecommerce stores, and high-converting landing pages."
        canonicalUrl="/services/website-development"
        schema={serviceSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs
          items={[
            { label: 'Services', href: '/services' },
            { label: 'Website Design & Development' },
          ]}
        />
      </div>

      <section className="pt-10 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="editorial-eyebrow">Service Division 04</span>
              <h1 className="mt-3 font-serif text-3xl sm:text-5xl lg:text-6xl text-emerald font-normal leading-[1.15]">
                Website Design & Development
              </h1>
              <p className="mt-6 text-base sm:text-lg text-charcoal/80 leading-relaxed font-light max-w-2xl">
                For businesses, professionals, creators and online sellers. Web experiences designed to present services, build trust and help customers take action, engineered on high-performance full-stack architectures with zero bloat and lightning load times.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#offerings"
                  className="px-6 py-3 bg-emerald hover:bg-emerald-dark text-cream text-xs uppercase tracking-widest font-semibold rounded transition shadow-sm hover:shadow-emerald inline-flex items-center gap-2"
                >
                  Explore Capabilities
                  <ArrowUpRight className="w-3.5 h-3.5 text-beige" />
                </a>
                <a
                  href="#inquiry"
                  className="px-6 py-3 border border-charcoal/30 hover:border-emerald text-charcoal hover:text-emerald text-xs uppercase tracking-widest font-semibold rounded transition"
                >
                  Start Web Brief
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded overflow-hidden shadow-card border border-beige aspect-[4/3] bg-cream-dark">
                <img
                  src="/portfolio/web-design/shikha-singh-luxury-model-portfolio.webp"
                  alt="Luxury model portfolio website design for Shikha Singh featuring runway fashion photography"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Directory */}
      <section id="offerings" className="py-20 bg-sage/15 border-y border-beige/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="editorial-eyebrow">Digital Engineering</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-emerald font-medium mt-2">
              Website Solutions & Formats
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-charcoal/70 font-light">
              From bespoke portfolio platforms to multi-currency art ecommerce stores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subServiceItems.map((sub) => (
              <article
                key={sub.slug}
                className="p-6 bg-white border border-beige/70 rounded shadow-card hover:border-emerald/70 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/10] bg-cream-dark rounded overflow-hidden mb-4 border border-beige/40">
                    <img
                      src={sub.heroImage}
                      alt={sub.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-emerald font-medium group-hover:text-olive transition-colors">
                    {sub.title}
                  </h3>
                  <p className="mt-2 text-xs text-charcoal/70 leading-relaxed font-light">
                    {sub.summary}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-beige/40">
                  <Link
                    to={`/services/website-development/${sub.slug}`}
                    className="text-xs uppercase tracking-wider font-semibold text-emerald inline-flex items-center gap-1 hover:text-olive"
                  >
                    View Specs & Inquire <ArrowUpRight className="w-3.5 h-3.5 text-olive" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <ProjectGallery images={GALLERY} title="Web Engineering & UI Case Studies" />

      {/* Enquiry Form */}
      <section id="inquiry" className="py-24 bg-cream border-t border-beige/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm
            defaultService="website-development"
            formId="form_service_website"
            title="Inquire on Website Development"
            subtitle="Tell us about your digital goals, timeline, and functional requirements."
          />
        </div>
      </section>
    </>
  );
}
