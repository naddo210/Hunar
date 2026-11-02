import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { ArrowUpRight, Eye, X } from 'lucide-react';
import { REAL_PORTFOLIO_ITEMS } from '../data/realPortfolioData';

const CATEGORIES = [
  { key: 'all', label: 'All Works (64)' },
  { key: 'custom-art', label: 'Custom Art, Portraits & Calligraphy' },
  { key: 'murals-commercial-art', label: 'Murals, Glass Painting & Stage' },
  { key: 'website-development', label: 'Websites & Digital Platforms' },
  { key: 'art-products', label: 'Sculptures & Installations' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredItems = activeFilter === 'all'
    ? REAL_PORTFOLIO_ITEMS
    : REAL_PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'HUNAR Creative Studio Portfolio',
    url: 'https://hunarstudio.com/portfolio',
    description: 'Curated archive of authentic fine art commissions, hand-painted portraits, architectural murals, glass art, stage designs, and high-performance websites by HUNAR Creative Studio.',
  };

  return (
    <>
      <SEO
        title="Portfolio & Selected Works — Fine Art, Murals, Calligraphy & Web | HUNAR"
        description="Explore 60+ authentic works from HUNAR Creative Studio: bespoke oil portraits, hand-painted architectural murals, Devanagari calligraphy, glass painting, stage sets, and bespoke web apps."
        canonicalUrl="/portfolio"
        schema={portfolioSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: 'Selected Works' }]} />
      </div>

      <section className="pt-10 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="editorial-eyebrow">Archive of Selected Works</span>
            <h1 className="mt-3 font-serif text-3xl sm:text-5xl lg:text-6xl text-emerald font-normal leading-tight">
              Selected Works & Atelier Portfolio
            </h1>
            <p className="mt-6 text-base sm:text-lg text-charcoal/80 leading-relaxed font-light">
              An ongoing dialogue between medium, space, and narrative. Every piece shown below is an authentic studio commission, fine art study, or realized architectural installation crafted with uncompromised human care.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-12 flex flex-wrap items-center gap-2 border-b border-beige/60 pb-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`text-xs uppercase tracking-wider px-4 py-2 rounded transition font-medium ${
                  activeFilter === cat.key
                    ? 'bg-emerald text-cream font-semibold shadow-sm'
                    : 'text-charcoal/80 hover:text-emerald bg-white hover:bg-cream border border-beige/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid with Real Optimized WebP Imagery & Native Lazy Loading */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="bg-white border border-beige/70 rounded overflow-hidden shadow-card hover:border-emerald/80 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div
                    className="relative aspect-[4/3] bg-cream-dark overflow-hidden cursor-pointer"
                    onClick={() => setLightboxImage(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.best && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-emerald/95 text-cream text-[10px] font-mono uppercase tracking-wider rounded font-medium shadow-sm backdrop-blur-sm border border-emerald-light/30">
                        ★ Featured Work
                      </span>
                    )}
                    <span className="absolute top-3 right-3 px-2 py-0.5 bg-white/90 text-charcoal text-[10px] font-mono uppercase tracking-wider rounded border border-beige/60">
                      {item.tag}
                    </span>
                    <div className="absolute inset-0 bg-emerald/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="p-3 bg-white/95 rounded-full text-emerald shadow-elevated border border-beige">
                        <Eye className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-charcoal/60 mb-2 font-medium uppercase tracking-wider">
                      <span className="text-olive font-semibold">{item.categoryLabel}</span>
                      <span>{item.year}</span>
                    </div>

                    <h2 className="font-serif text-xl sm:text-2xl text-emerald font-medium leading-snug">
                      {item.title}
                    </h2>

                    <div className="mt-3 space-y-1 text-xs text-charcoal/70 font-mono">
                      <p><span className="text-charcoal/40">Medium:</span> {item.medium}</p>
                      <p><span className="text-charcoal/40">Dimensions:</span> {item.dimensions}</p>
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-beige/40 flex items-center justify-between">
                    <Link
                      to={`/services/${item.category}`}
                      className="text-xs uppercase tracking-wider font-semibold text-emerald inline-flex items-center gap-1 hover:text-olive transition"
                    >
                      Inquire on Similar Commission
                      <ArrowUpRight className="w-3.5 h-3.5 text-olive" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-[#0B281E]/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[92vh] bg-white border border-beige rounded overflow-hidden shadow-elevated flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-3 right-3 p-2 bg-cream/90 hover:bg-cream text-charcoal rounded-full z-10 transition border border-beige shadow-sm"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex-1 overflow-auto flex items-center justify-center bg-charcoal p-2 sm:p-4">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.alt}
                decoding="async"
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="p-5 bg-white border-t border-beige flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-base sm:text-lg font-serif text-emerald font-medium block">
                  {lightboxImage.title}
                </span>
                <span className="text-xs text-charcoal/70 block mt-0.5">
                  {lightboxImage.medium} — {lightboxImage.dimensions}
                </span>
                <p className="text-xs text-charcoal/80 mt-1 font-light">
                  {lightboxImage.description}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-[10px] uppercase font-mono px-2 py-1 bg-cream rounded text-emerald border border-beige/60">
                  {lightboxImage.categoryLabel}
                </span>
                <Link
                  to={`/services/${lightboxImage.category}`}
                  className="text-[11px] uppercase tracking-wider font-semibold px-3 py-1 bg-emerald text-cream rounded hover:bg-emerald-dark transition inline-flex items-center gap-1"
                >
                  Commission Similar
                  <ArrowUpRight className="w-3 h-3 text-beige" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
