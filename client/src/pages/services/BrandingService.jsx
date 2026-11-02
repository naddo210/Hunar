import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import EnquiryForm from '../../components/EnquiryForm';
import ProjectGallery from '../../components/ProjectGallery';
import { SUB_SERVICES } from '../../data/servicesCatalogue';
import { ArrowUpRight } from 'lucide-react';

const SUB_KEYS = [
  'advertising-campaigns',
  'logo-design',
  'brand-identity',
  'brand-colour-typography',
  'packaging-label-design',
  'business-stationery',
  'brand-naming',
  'brand-guidelines',
  'rebranding',
];

const GALLERY = [
  {
    url: '/portfolio/brand-identity/saga-ratna/sagar-ratna-brand-identity-concept-cover.webp',
    caption: 'Sagar Ratna: Comprehensive Brand Identity & Visual System Manual',
    tag: 'Brand Identity',
    alt: 'Sagar Ratna brand identity presentation cover featuring new logo icon, green and gold brand colors'
  },
  {
    url: '/portfolio/brand-identity/levis/levis-desert-heat-polar-bear.webp',
    caption: 'Levi\'s: "Feel the Desert Heat in Winter" Polar Bear Campaign',
    tag: 'Fashion Advertising',
    alt: 'Levi\'s winter campaign ad featuring a polar bear wearing denim jacket relaxing on ice under warm sunlight'
  },
  {
    url: '/portfolio/brand-identity/royal-enfield/royal-enfield-live-royal-ride-royal-cover.webp',
    caption: 'Royal Enfield: "Live Royal, Ride Royal" Campaign Key Visual',
    tag: 'Cultural Campaign',
    alt: 'Royal Enfield Live Royal Ride Royal campaign headline with traditional Indian pagadi and helmet'
  },
  {
    url: '/portfolio/brand-identity/tag-heuer/tag-heuer-devanagari-wordmark-presentation.webp',
    caption: 'TAG Heuer: Devanagari Luxury Wordmark System & Typographic Grid',
    tag: 'Multilingual Brand',
    alt: 'TAG Heuer luxury brandmark re-imagined in bold Devanagari script with iconic green and red shield'
  },
  {
    url: '/portfolio/campaigns/wwf/wwf-rhino-horn-poaching-child-print-ad.webp',
    caption: 'WWF Anti-Poaching: "The Torn Horn — Our Children\'s Future Matters"',
    tag: 'Advocacy Campaign',
    alt: 'WWF anti-poaching print ad showing little girl crying while holding a stuffed rhino toy with its horn ripped off'
  },
  {
    url: '/portfolio/brand-identity/packaging/brambles-swan-duck-food-packaging-flat.webp',
    caption: 'Brambles Swan & Duck Food: Primary Carton Die-Line Design',
    tag: 'Structural Packaging',
    alt: 'Flat packaging die-line design for Brambles Swan and Duck food box with swan graphics'
  },
  {
    url: '/portfolio/logo-designs/master-identity-trilogy-typodday-tukaram-alumni.webp',
    caption: 'Master Brandmark Trilogy: TYPODAY 2025, Sant Tukaram & JJ Alumni',
    tag: 'Logo Design',
    alt: 'Three distinct studio logo designs displayed together including TypoDay cinema logo and spiritual monogram'
  },
  {
    url: '/portfolio/advertising/boat-rockerz-luxury-of-sound-poster.webp',
    caption: 'boAt Rockerz: "The Luxury of Sound" Cosmic Audio Poster',
    tag: 'Print Advertising',
    alt: 'boAt Rockerz advertising poster featuring dynamic drummer playing on headphones in deep space'
  },
];

export default function BrandingService() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Branding & Visual Identity',
    provider: {
      '@type': 'Organization',
      name: 'HUNAR Creative Studio',
      url: 'https://hunarstudio.com',
    },
    areaServed: 'Worldwide',
    description: 'Visual systems that help a business present itself consistently across digital and physical touchpoints with typographic rigor.',
  };

  const subServiceItems = SUB_KEYS.map((k) => SUB_SERVICES[k]).filter(Boolean);

  return (
    <>
      <SEO
        title="Branding & Visual Identity — Logos, Guidelines & Typography | HUNAR"
        description="Craft a timeless visual identity with HUNAR Creative Studio. Custom logo design, brand guidelines, bespoke calligraphy, stationery, and premium packaging."
        canonicalUrl="/services/branding-design"
        schema={serviceSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs
          items={[
            { label: 'Services', href: '/services' },
            { label: 'Branding & Visual Identity' },
          ]}
        />
      </div>

      <section className="pt-10 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="editorial-eyebrow">Service Division 03</span>
              <h1 className="mt-3 font-serif text-3xl sm:text-5xl lg:text-6xl text-emerald font-normal leading-[1.15]">
                Branding & Visual Identity
              </h1>
              <p className="mt-6 text-base sm:text-lg text-charcoal/80 leading-relaxed font-light max-w-2xl">
                For startups, freelancers, small businesses and established companies. Visual systems that help a business present itself consistently across digital and physical touchpoints, composed with custom calligraphy and typographic rigor.
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
                  Start Brand Brief
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded overflow-hidden shadow-card border border-beige aspect-[4/3] bg-cream-dark">
                <img
                  src="/portfolio/calligraphy/koshish-harivansh-rai-bachchan-calligraphy.webp"
                  alt="Devanagari calligraphy of poem Koshish by Harivansh Rai Bachchan with illustrated mountain climber"
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
            <span className="editorial-eyebrow">Brand Disciplines</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-emerald font-medium mt-2">
              Branding & Design Capabilities
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-charcoal/70 font-light">
              From singular logo marks to end-to-end packaging and rebranding systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subServiceItems.map((sub) => (
              <article
                key={sub.slug}
                className="p-5 bg-white border border-beige/70 rounded shadow-card hover:border-emerald/70 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/10] bg-cream-dark rounded overflow-hidden mb-3 border border-beige/40">
                    <img
                      src={sub.heroImage}
                      alt={sub.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-lg text-emerald font-medium group-hover:text-olive transition-colors">
                    {sub.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-charcoal/70 leading-relaxed font-light line-clamp-2">
                    {sub.summary}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-beige/40">
                  <Link
                    to={`/services/branding-design/${sub.slug}`}
                    className="text-xs uppercase tracking-wider font-semibold text-emerald inline-flex items-center gap-1 hover:text-olive"
                  >
                    Specs <ArrowUpRight className="w-3 h-3 text-olive" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <ProjectGallery images={GALLERY} title="Brand Systems & Typographic Studies" />

      {/* Enquiry Form */}
      <section id="inquiry" className="py-24 bg-cream border-t border-beige/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm
            defaultService="branding"
            formId="form_service_branding"
            title="Inquire on Branding & Visual Identity"
            subtitle="Tell us about your brand vision, target patrons, and deliverables required."
          />
        </div>
      </section>
    </>
  );
}
