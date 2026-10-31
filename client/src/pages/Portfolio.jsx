import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { ArrowUpRight, Eye, X } from 'lucide-react';

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Aura of Terra',
    category: 'custom-art',
    categoryLabel: 'Custom Art Commission',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    medium: 'Raw earthen pigments, limestone wash, and Belgian linen',
    dimensions: '210cm × 160cm (Triptych)',
    description: 'A site-specific art commission exploring the mineral textures and ancient red soils of the southern plateau, commissioned for an architectural residence in Bengaluru.',
  },
  {
    id: 2,
    title: 'Atelier Kanso',
    category: 'branding-design',
    categoryLabel: 'Branding & Identity',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80',
    medium: 'Custom typography, editorial brand guidelines, and print collateral',
    dimensions: 'Complete Brand System',
    description: 'A restrained visual identity for a minimalist architectural studio, featuring bespoke letterforms inspired by stone masonry and tactile letterpress stationery.',
  },
  {
    id: 3,
    title: 'Echoes of the Deccan',
    category: 'murals-commercial-art',
    categoryLabel: 'Murals & Commercial Art',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1561055657-b9e0bf0fa360?auto=format&fit=crop&w=1200&q=80',
    medium: 'Mineral silicate paint on lime plaster',
    dimensions: '45ft × 14ft Interior Wall',
    description: 'Monumental hand-painted mural within a luxury heritage hospitality pavilion, translating historic botanical and basalt motifs into a contemporary visual cadence.',
  },
  {
    id: 4,
    title: 'Kanso Digital Flagship',
    category: 'website-development',
    categoryLabel: 'Website Development',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    medium: 'Headless React, Node.js, and editorial typography',
    dimensions: 'Custom Web Application',
    description: 'A bespoke portfolio web platform engineered with 100/100 Core Web Vitals, fluid typography, and bespoke grid transitions celebrating architectural blueprints.',
  },
  {
    id: 5,
    title: 'Solitude Series (Limited Edition)',
    category: 'art-products',
    categoryLabel: 'Original Art & Products',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=1200&q=80',
    medium: 'Archival pigment print on 310gsm Hahnemühle Photo Rag',
    dimensions: 'Edition of 25 (Hand-embossed & signed)',
    description: 'A curated fine art release exploring stillness and atmospheric light in Himalayan morning fog, produced in collaboration with master printmakers.',
  },
  {
    id: 6,
    title: 'Kinetic Identity System',
    category: 'digital-content',
    categoryLabel: 'Digital Content & Motion',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    medium: '4K ProRes Master, Lottie vector animations, and soundscapes',
    dimensions: 'Digital Motion Suite',
    description: 'Cinematic logo stingers, social motion vignettes, and organic motion textures developed for a cultural luxury fashion house.',
  },
  {
    id: 7,
    title: 'Artisanal Studio Objects & Tote Suite',
    category: 'creative-products',
    categoryLabel: 'Creative Products & Merchandise',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    medium: 'Heavyweight unbleached organic canvas and stoneware ceramics',
    dimensions: 'Limited Studio Merchandise Run',
    description: 'Custom silkscreened organic totes and handmade ceramic desktop vessels commissioned as VIP cultural event keepsakes.',
  },
];

const CATEGORIES = [
  { key: 'all', label: 'All Works' },
  { key: 'custom-art', label: 'Custom Art' },
  { key: 'branding-design', label: 'Branding' },
  { key: 'website-development', label: 'Websites' },
  { key: 'digital-content', label: 'Digital Motion' },
  { key: 'murals-commercial-art', label: 'Murals' },
  { key: 'art-products', label: 'Prints & Art' },
  { key: 'creative-products', label: 'Products' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'HUNAR Creative Studio Portfolio',
    url: 'https://hunarstudio.com/portfolio',
    description: 'Curated portfolio of bespoke fine art, brand identities, custom websites, and architectural murals by HUNAR Creative Studio.',
  };

  return (
    <>
      <SEO
        title="Portfolio & Selected Works — Fine Art, Branding & Murals | HUNAR"
        description="Explore the curated works of HUNAR Creative Studio: bespoke canvas commissions, luxury brand systems, high-performance web platforms, and architectural murals."
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
            {/* Every page has an explicit h1 */}
            <h1 className="mt-3 font-serif text-3xl sm:text-5xl lg:text-6xl text-emerald font-normal leading-tight">
              Selected Works & Atelier Portfolio
            </h1>
            <p className="mt-6 text-base sm:text-lg text-charcoal/80 leading-relaxed font-light">
              An ongoing dialogue between medium, space, and narrative. Browse by creative discipline below to examine our recent fine art commissions, brand systems, and spatial installations.
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

          {/* Portfolio Grid with High Quality Artwork Imagery */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="bg-white border border-beige/70 rounded overflow-hidden shadow-card hover:border-emerald/80 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div
                    className="relative aspect-[16/10] bg-cream-dark overflow-hidden cursor-pointer"
                    onClick={() => setLightboxImage(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-emerald/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="p-3 bg-white/95 rounded-full text-emerald shadow-elevated border border-beige">
                        <Eye className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between text-xs text-charcoal/60 mb-3 font-medium uppercase tracking-wider">
                      <span className="text-olive font-semibold">{item.categoryLabel}</span>
                      <span>{item.year}</span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl text-emerald font-medium">
                      {item.title}
                    </h2>

                    <div className="mt-4 space-y-1 text-xs text-charcoal/70 font-mono">
                      <p><span className="text-charcoal/40">Medium:</span> {item.medium}</p>
                      <p><span className="text-charcoal/40">Scale:</span> {item.dimensions}</p>
                    </div>

                    <p className="mt-4 text-sm text-charcoal/70 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0">
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
            className="relative max-w-4xl max-h-[90vh] bg-white border border-beige rounded overflow-hidden shadow-elevated flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-3 right-3 p-2 bg-cream/90 hover:bg-cream text-charcoal rounded-full z-10 transition border border-beige"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex-1 overflow-auto flex items-center justify-center bg-charcoal">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>
            <div className="p-4 bg-white border-t border-beige flex items-center justify-between">
              <div>
                <span className="text-sm font-serif text-emerald font-medium block">{lightboxImage.title}</span>
                <span className="text-xs text-charcoal/70">{lightboxImage.medium}</span>
              </div>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-cream rounded text-emerald border border-beige/60">
                {lightboxImage.categoryLabel}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
