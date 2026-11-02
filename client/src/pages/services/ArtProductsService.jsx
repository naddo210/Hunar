import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import EnquiryForm from '../../components/EnquiryForm';
import ProjectGallery from '../../components/ProjectGallery';
import { SUB_SERVICES } from '../../data/servicesCatalogue';
import { ArrowUpRight } from 'lucide-react';

const SUB_KEYS = [
  'original-paintings',
  'art-prints',
  'mini-canvas-art',
  'handmade-bookmarks',
  'sculptures-installations',
  'resin-art-products',
  'home-office-art',
  'seasonal-art-gifts',
];

const GALLERY = [
  {
    url: '/portfolio/installations/flight-of-peace-paper-doves-sculpture.webp',
    caption: 'Flight of Peace: Dimensional Sculpted Paper Doves on Deckle Paper',
    tag: 'Paper Sculpture',
    alt: '3D paper craft sculpture of white doves perched on branches mounted on textured orange handmade paper'
  },
  {
    url: '/portfolio/installations/creative-tree-of-knowledge-sculpture.webp',
    caption: 'The Creative Tree of Knowledge Free-Standing Kinetic Sculpture',
    tag: 'Sculpture',
    alt: 'Freestanding colorful artistic tree sculpture featuring branches with camera, typography letters, and art tools'
  },
  {
    url: '/portfolio/installations/tree-of-knowledge-blueprint-drawing.webp',
    caption: 'Tree of Knowledge Architectural Blueprint & Structural Module Study',
    tag: 'Blueprint',
    alt: 'Colored technical blueprint drawing of the Tree of Knowledge sculpture with dimension measurements'
  },
];

export default function ArtProductsService() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Original Art & Art Products',
    provider: {
      '@type': 'Organization',
      name: 'HUNAR Creative Studio',
      url: 'https://hunarstudio.com',
    },
    areaServed: 'Worldwide',
    description: 'A curated selection of original and made-for-sale creative pieces, fine art prints, sculptures, and resin objects.',
  };

  const subServiceItems = SUB_KEYS.map((k) => SUB_SERVICES[k]).filter(Boolean);

  return (
    <>
      <SEO
        title="Original Art & Art Products — Prints, Paintings & Sculptures | HUNAR"
        description="Explore original paintings, archival museum art prints, resin decorative objects, and sculptures curated by HUNAR Creative Studio."
        canonicalUrl="/services/art-products"
        schema={serviceSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs
          items={[
            { label: 'Services', href: '/services' },
            { label: 'Original Art & Art Products' },
          ]}
        />
      </div>

      <section className="pt-10 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="editorial-eyebrow">Service Division 02</span>
              <h1 className="mt-3 font-serif text-3xl sm:text-5xl lg:text-6xl text-emerald font-normal leading-[1.15]">
                Original Art & Art Products
              </h1>
              <p className="mt-6 text-base sm:text-lg text-charcoal/80 leading-relaxed font-light max-w-2xl">
                For art lovers, homeowners, and gift shops. A curated selection of original and made-for-sale creative pieces, archival prints, resin objects, and handmade sculptures crafted in our ateliers.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#offerings"
                  className="px-6 py-3 bg-emerald hover:bg-emerald-dark text-cream text-xs uppercase tracking-widest font-semibold rounded transition shadow-sm hover:shadow-emerald inline-flex items-center gap-2"
                >
                  Browse Catalogue
                  <ArrowUpRight className="w-3.5 h-3.5 text-beige" />
                </a>
                <a
                  href="#inquiry"
                  className="px-6 py-3 border border-charcoal/30 hover:border-emerald text-charcoal hover:text-emerald text-xs uppercase tracking-widest font-semibold rounded transition"
                >
                  Inquire on Editions
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded overflow-hidden shadow-card border border-beige aspect-[4/3] bg-cream-dark">
                <img
                  src="/portfolio/installations/flight-of-peace-paper-doves-sculpture.webp"
                  alt="3D paper craft sculpture of white doves perched on branches mounted on textured orange handmade paper"
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
            <span className="editorial-eyebrow">Art & Editions Directory</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-emerald font-medium mt-2">
              Curated Art & Product Categories
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-charcoal/70 font-light">
              Explore individual product collections, archival print specifications, and available studio editions.
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
                    to={`/services/art-products/${sub.slug}`}
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
      <ProjectGallery images={GALLERY} title="Original Creations & Sculptural Editions" />

      {/* Enquiry Form */}
      <section id="inquiry" className="py-24 bg-cream border-t border-beige/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm
            defaultService="art-products"
            formId="form_service_art_products"
            title="Inquire on Original Art & Products"
            subtitle="Let us know which limited prints, originals, or sculptures you wish to acquire."
          />
        </div>
      </section>
    </>
  );
}
