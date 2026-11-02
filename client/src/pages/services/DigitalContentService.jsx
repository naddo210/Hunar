import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import EnquiryForm from '../../components/EnquiryForm';
import ProjectGallery from '../../components/ProjectGallery';
import { SUB_SERVICES } from '../../data/servicesCatalogue';
import { ArrowUpRight } from 'lucide-react';

const SUB_KEYS = [
  'social-media-creatives',
  'motion-graphics-reels',
  'logo-animation',
  'infographics-carousels',
  'digital-event-invitations',
  'email-newsletter-design',
];

const GALLERY = [
  {
    url: '/portfolio/web-design/greek-automata-techfest-website.webp',
    caption: 'Greek Automata — College Techfest Digital Platform & Visuals',
    tag: 'Digital Platform',
    alt: 'Dark modern tech festival website design for Greek Automata with glowing circuit graphics'
  },
  {
    url: '/portfolio/stage-design/sir-jj-applied-art-stage-color-render.webp',
    caption: '88th Exhibition Stage Chromatic 3D Concept Rendering',
    tag: '3D Render',
    alt: 'Color concept rendering of the Sir JJ Institute stage with teal facets and gold accents'
  },
  {
    url: '/portfolio/murals/botanical-mural-concept-design.webp',
    caption: 'Botanical Symphony Concept Drafting & Elevation Plan',
    tag: 'Concept Art',
    alt: 'Digital concept design mockup of modern organic botanical monstera leaf mural'
  },
];

export default function DigitalContentService() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Digital Content & Motion',
    provider: {
      '@type': 'Organization',
      name: 'HUNAR Creative Studio',
      url: 'https://hunarstudio.com',
    },
    areaServed: 'Worldwide',
    description: 'Digital creative assets and motion design that help brands communicate clearly and consistently across online channels.',
  };

  const subServiceItems = SUB_KEYS.map((k) => SUB_SERVICES[k]).filter(Boolean);

  return (
    <>
      <SEO
        title="Digital Content & Motion — Reels, Animated Graphics & Storytelling | HUNAR"
        description="Dynamic digital content and motion graphics by HUNAR Creative Studio. Logo animation, social video reels, infographics, and interactive digital event assets."
        canonicalUrl="/services/digital-content"
        schema={serviceSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs
          items={[
            { label: 'Services', href: '/services' },
            { label: 'Digital Content & Motion' },
          ]}
        />
      </div>

      <section className="pt-10 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="editorial-eyebrow">Service Division 05</span>
              <h1 className="mt-3 font-serif text-3xl sm:text-5xl lg:text-6xl text-emerald font-normal leading-[1.15]">
                Digital Content & Motion
              </h1>
              <p className="mt-6 text-base sm:text-lg text-charcoal/80 leading-relaxed font-light max-w-2xl">
                For brands, creators and marketing teams. Digital creative assets and motion design that help brands communicate clearly and consistently across online channels, combining 3D concept visualization with rhythmic animation.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#offerings"
                  className="px-6 py-3 bg-emerald hover:bg-emerald-dark text-cream text-xs uppercase tracking-widest font-semibold rounded transition shadow-sm hover:shadow-emerald inline-flex items-center gap-2"
                >
                  Explore Motion Formats
                  <ArrowUpRight className="w-3.5 h-3.5 text-beige" />
                </a>
                <a
                  href="#inquiry"
                  className="px-6 py-3 border border-charcoal/30 hover:border-emerald text-charcoal hover:text-emerald text-xs uppercase tracking-widest font-semibold rounded transition"
                >
                  Commission Motion Assets
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded overflow-hidden shadow-card border border-beige aspect-[4/3] bg-cream-dark">
                <img
                  src="/portfolio/web-design/greek-automata-techfest-website.webp"
                  alt="Greek Automata interactive tech festival platform with glowing circuit graphics"
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
            <span className="editorial-eyebrow">Motion & Narrative</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-emerald font-medium mt-2">
              Digital Content Offerings
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-charcoal/70 font-light">
              From kinetic logo stings to cohesive 90-day campaign narratives.
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
                  <p className="mt-1.5 text-xs text-charcoal/70 line-clamp-3 font-light leading-relaxed">
                    {sub.summary}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-beige/40">
                  <Link
                    to={`/services/digital-content/${sub.slug}`}
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
      <ProjectGallery images={GALLERY} title="Motion Design & Digital Creative Studies" />

      {/* Enquiry Form */}
      <section id="inquiry" className="py-24 bg-cream border-t border-beige/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm
            defaultService="digital-content"
            formId="form_service_digital_content"
            title="Inquire on Digital Content & Motion"
            subtitle="Tell us about your brand story, platform formats, and animation timeline."
          />
        </div>
      </section>
    </>
  );
}
