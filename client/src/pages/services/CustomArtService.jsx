import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import EnquiryForm from '../../components/EnquiryForm';
import ProjectGallery from '../../components/ProjectGallery';
import { SUB_SERVICES } from '../../data/servicesCatalogue';
import { ArrowUpRight } from 'lucide-react';

const SUB_KEYS = [
  'custom-portraits',
  'couple-portraits',
  'family-portraits',
  'pet-portraits',
  'pencil-charcoal-drawings',
  'ink-coloured-pencil-art',
  'canvas-paintings',
  'abstract-art',
  'personalized-art-gifts',
  'digital-illustration',
  'photo-to-sketch',
];

const GALLERY = [
  {
    url: '/portfolio/portraits/vibrant-crimson-woman-oil-portrait.webp',
    caption: 'Luminescence in Crimson — Oil on Belgian Linen Canvas',
    tag: 'Fine Art Oil',
    alt: 'Fine art oil portrait painting of a woman in yellow dress against deep crimson background on canvas'
  },
  {
    url: '/portfolio/portraits/monochrome-charcoal-woman-montage.webp',
    caption: 'Soul in Monochrome — Charcoal & Graphite Montage on 300gsm Paper',
    tag: 'Charcoal',
    alt: 'Detailed charcoal and graphite drawing montage of a woman with floral accents on archival paper'
  },
  {
    url: '/portfolio/calligraphy/gulzar-poetry-spiral-devanagari-calligraphy.webp',
    caption: 'Gulzar: "Waqt" Devanagari Spiral Calligraphy on Cotton Paper',
    tag: 'Calligraphy',
    alt: 'Circular Devanagari calligraphy artwork of Gulzar poetry written in a continuous yin-yang spiral in red ink'
  },
  {
    url: '/portfolio/calligraphy/koshish-harivansh-rai-bachchan-calligraphy.webp',
    caption: 'Harivansh Rai Bachchan: "Koshish" Illustrated Calligraphy Sheet',
    tag: 'Devanagari Art',
    alt: 'Devanagari calligraphy of poem Koshish by Harivansh Rai Bachchan with illustrated mountain climber'
  },
  {
    url: '/portfolio/caricature/live-family-caricature-portrait.webp',
    caption: 'Family in Harmony: Live Event Watercolor Caricature',
    tag: 'Live Caricature',
    alt: 'Family holding their live custom watercolor caricature portrait painted on-site by HUNAR studio artist'
  },
  {
    url: '/portfolio/caricature/young-girl-live-watercolor-portrait-booth.webp',
    caption: 'Radiant Smiles: Live Caricature Booth Guest Showcase',
    tag: 'Live Art',
    alt: 'Young girl holding her finished live watercolor caricature portrait in front of studio exhibition booth'
  },
];

export default function CustomArtService() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Custom Art & Commissions',
    provider: {
      '@type': 'Organization',
      name: 'HUNAR Creative Studio',
      url: 'https://hunarstudio.com',
    },
    areaServed: 'Worldwide',
    description: 'Made-to-order artwork created around a customer’s idea, reference, occasion or preferred style. Traditional craftsmanship on museum substrates.',
  };

  const subServiceItems = SUB_KEYS.map((key) => SUB_SERVICES[key]).filter(Boolean);

  return (
    <>
      <SEO
        title="Custom Art & Commissions — Original Paintings & Portraits | HUNAR"
        description="Commission bespoke artwork, hand-painted portraits, oil paintings, and charcoal drawings from HUNAR Creative Studio. Genuine craftsmanship on archival linen."
        canonicalUrl="/services/custom-art"
        schema={serviceSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs
          items={[
            { label: 'Services', href: '/services' },
            { label: 'Custom Art & Commissions' },
          ]}
        />
      </div>

      <section className="pt-10 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="editorial-eyebrow">Service Division 01</span>
              <h1 className="mt-3 font-serif text-3xl sm:text-5xl lg:text-6xl text-emerald font-normal leading-[1.15]">
                Custom Art & Commissions
              </h1>
              <p className="mt-6 text-base sm:text-lg text-charcoal/80 leading-relaxed font-light max-w-2xl">
                For individuals, gift buyers, and collectors. Made-to-order artwork created around your vision, references, or architectural space. Every piece is composed with raw mineral pigments, oil mediums, and archival patience.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#offerings"
                  className="px-6 py-3 bg-emerald hover:bg-emerald-dark text-cream text-xs uppercase tracking-widest font-semibold rounded transition shadow-sm hover:shadow-emerald inline-flex items-center gap-2"
                >
                  Browse Offerings
                  <ArrowUpRight className="w-3.5 h-3.5 text-beige" />
                </a>
                <a
                  href="#inquiry"
                  className="px-6 py-3 border border-charcoal/30 hover:border-emerald text-charcoal hover:text-emerald text-xs uppercase tracking-widest font-semibold rounded transition"
                >
                  Commission Directly
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded overflow-hidden shadow-card border border-beige aspect-[4/3] bg-cream-dark">
                <img
                  src="/portfolio/portraits/elderly-couple-traditional-oil-portrait.webp"
                  alt="Hand-painted oil portrait of an Indian couple in traditional attire on primed canvas"
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
            <span className="editorial-eyebrow">Atelier Formats</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-emerald font-medium mt-2">
              Commission Disciplines
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-charcoal/70 font-light">
              From traditional oil portraits on Belgian linen to charcoal studies and Devanagari calligraphy.
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
                    to={`/services/custom-art/${sub.slug}`}
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
      <ProjectGallery images={GALLERY} title="Realized Commissions & Atelier Studies" />

      {/* Enquiry Form */}
      <section id="inquiry" className="py-24 bg-cream border-t border-beige/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm
            defaultService="custom-art"
            formId="form_service_custom_art"
            title="Commission a Custom Artwork"
            subtitle="Describe your preferred medium, dimensions, and subject matter."
          />
        </div>
      </section>
    </>
  );
}
