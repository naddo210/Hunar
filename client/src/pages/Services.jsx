import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { DIVISIONS, SUB_SERVICES } from '../data/servicesCatalogue';
import { ArrowUpRight, Search, Sparkles, Check } from 'lucide-react';

const SPECIALIST_SERVICES = [
  {
    title: 'Commercial & Festive Glass Painting',
    division: 'Murals & Commercial Projects',
    path: '/services/murals-commercial-art/commercial-glass-painting',
    image: '/portfolio/glass-painting/lord-ganesha-entrance-glass-painting.webp',
    alt: 'Hand-painted Lord Ganesha decorative entrance art on commercial glass facade',
    tag: 'Retail & Storefronts',
    summary: 'Transform retail facades, cafe windows, and corporate entrances into luminous visual spectacles with weather-resistant enamels and festive holiday compositions.',
  },
  {
    title: 'Resin Art & Spatial Decorative Objects',
    division: 'Original Art & Products',
    path: '/services/art-products/resin-art',
    image: '/portfolio/installations/flight-of-peace-paper-doves-sculpture.webp',
    alt: 'Dimensional decorative art installation by HUNAR Studio',
    tag: 'Handcrafted Resin & Decor',
    summary: 'Bespoke crystal clear resin panels, metallic mineral river tables, and dimensional sculptural wall art engineered for contemporary luxury interiors.',
  },
  {
    title: 'Theatrical Stage Design & Event Production',
    division: 'Murals & Commercial Projects',
    path: '/services/murals-commercial-art/theatrical-stage-design',
    image: '/portfolio/stage-design/sir-jj-applied-art-winged-stage-finished.webp',
    alt: 'Sir J.J. Applied Art 88th Annual Exhibition 40ft sculpted winged stage set',
    tag: 'Stage & Exhibition Sets',
    summary: 'Monumental festival stages, theatrical prosceniums, and corporate pavilions. Complete architectural drafting, 3D color renders, heavy timber framing, and EPS foam sculpting.',
  },
  {
    title: 'Live Wedding Painting & Rapid Caricatures',
    division: 'Custom Art & Commissions',
    path: '/services/custom-art/live-wedding-painting-caricature',
    image: '/portfolio/caricature/live-family-caricature-portrait.webp',
    alt: 'Live wedding and celebratory event caricature portrait by HUNAR Studio',
    tag: 'Experiential Wedding Art',
    summary: 'Capture your wedding pheras or first dance live on a fine art canvas throughout the ceremony, alongside master speed caricaturists drawing 4-minute guest keepsakes.',
  },
  {
    title: 'Live Event Tattoos & Temporary Body Art',
    division: 'Murals & Commercial Projects',
    path: '/services/murals-commercial-art/event-tattoos-face-painting',
    image: '/portfolio/face-body-art/corporate-event-peacock-tattoo-showcase.webp',
    alt: 'Royal Peacock temporary tattoo painted on guest arm at corporate gala event',
    tag: 'Brand Activations & Galas',
    summary: 'Interactive body art and cosmetic tattooing for corporate product launches, sports fan events, and gala celebrations using 100% hypoallergenic FDA pigments.',
  },
  {
    title: 'Fine Art Calligraphy & Illuminated Manuscripts',
    division: 'Custom Art & Commissions',
    path: '/services/custom-art/calligraphy-services',
    image: '/portfolio/calligraphy/marathi-devanagari-ganpati-watercolor-calligraphy.webp',
    alt: 'Devanagari calligraphy artwork of Lord Ganesha in warm watercolor washes',
    tag: 'Devanagari & English Script',
    summary: 'Mastery of classical reed and steel nibs across Devanagari, Marathi, Sanskrit verses, poetry manuscripts, and monumental hand-lettered wooden boards with 24k gold leaf.',
  },
];

const SEARCH_KEYWORDS = [
  { keyword: 'Resin Art & Tables', target: '/services/art-products/resin-art' },
  { keyword: 'Commercial Glass Painting', target: '/services/murals-commercial-art/commercial-glass-painting' },
  { keyword: 'Stage Design & Events', target: '/services/murals-commercial-art/theatrical-stage-design' },
  { keyword: 'Live Wedding Painter', target: '/services/custom-art/live-wedding-painting-caricature' },
  { keyword: 'Event Temporary Tattoos', target: '/services/murals-commercial-art/event-tattoos-face-painting' },
  { keyword: 'Devanagari Calligraphy', target: '/services/custom-art/calligraphy-services' },
  { keyword: 'Brand Identity Systems', target: '/services/branding-design/brand-identity' },
  { keyword: 'National Ad Campaigns', target: '/services/branding-design/advertising-campaigns' },
  { keyword: 'Architectural Murals', target: '/services/murals-commercial-art/wall-murals' },
  { keyword: 'Custom Oil Portraits', target: '/services/custom-art/custom-portraits' },
  { keyword: 'Packaging Dielines & 3D', target: '/services/branding-design/packaging-label-design' },
];

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('');
  const divisionsList = Object.values(DIVISIONS);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return Object.values(SUB_SERVICES)
      .filter((s) => 
        s.title.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q) ||
        s.primaryKeyword.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [searchQuery]);

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'HUNAR Creative Studio Divisions',
    url: 'https://hunarstudio.com/services',
    itemListElement: divisionsList.map((s, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: s.title,
      url: `https://hunarstudio.com${s.path}`,
    })),
  };

  return (
    <>
      <SEO
        title="Creative Service Divisions & Atelier Capabilities — 56 Offerings | HUNAR"
        description="Explore the complete creative catalogue of HUNAR Creative Studio: Custom Art, Resin Art, Commercial Glass Painting, Brand Identity, Web Platforms, Stage Sets, and Digital Assets."
        canonicalUrl="/services"
        schema={servicesSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: 'Services Catalogue' }]} />
      </div>

      <section className="pt-10 pb-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="editorial-eyebrow">Creative Services Catalogue</span>
            <h1 className="mt-3 font-serif text-3xl sm:text-5xl lg:text-6xl text-emerald font-normal leading-tight">
              Seven Divisions. 56 Curated Disciplines. One Dedicated Atelier.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-charcoal/80 leading-relaxed font-light">
              Bringing traditional fine art, custom commissions, brand architecture, decorative glass art, resin objects, stage fabrication, and full-stack digital builds together under one unified studio practice.
            </p>
          </div>

          {/* Interactive Search Intent Bar */}
          <div className="p-6 sm:p-8 bg-white border border-beige/70 rounded-lg shadow-sm mb-16">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase font-mono tracking-widest text-emerald font-bold block mb-1">
                Filter Offerings By Search Term
              </span>
              <h2 className="font-serif text-xl sm:text-2xl text-emerald font-medium">
                Find Exact Atelier Capability
              </h2>
              
              <div className="relative mt-4">
                <Search className="w-4 h-4 text-olive absolute left-4 top-3.5 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 'resin art', 'glass painting', 'wedding portrait', 'packaging'..."
                  className="w-full pl-11 pr-4 py-3 bg-cream/40 border border-beige rounded-lg text-sm text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-emerald focus:bg-white focus:ring-2 focus:ring-emerald/10 transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 text-xs text-charcoal/50 hover:text-emerald px-2 py-1"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Live search results */}
              {searchResults.length > 0 && (
                <div className="mt-3 bg-cream/30 border border-beige/70 rounded-lg divide-y divide-beige/40 overflow-hidden">
                  {searchResults.map((r) => (
                    <Link
                      key={r.slug}
                      to={`/services/${r.division}/${r.slug}`}
                      className="p-3 hover:bg-white flex items-center justify-between transition group"
                    >
                      <div>
                        <span className="font-serif text-sm text-emerald font-medium group-hover:text-olive">
                          {r.title}
                        </span>
                        <span className="text-[10px] uppercase font-mono ml-2 px-1.5 py-0.2 bg-beige/40 text-charcoal/60 rounded">
                          {r.division}
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-olive" />
                    </Link>
                  ))}
                </div>
              )}

              {/* Popular tags */}
              <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-3 border-t border-beige/40">
                <span className="text-xs text-charcoal/60 mr-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-olive" />
                  Quick Searches:
                </span>
                {SEARCH_KEYWORDS.map((k, idx) => (
                  <Link
                    key={idx}
                    to={k.target}
                    className="text-xs px-2.5 py-1 bg-cream/70 hover:bg-emerald hover:text-cream border border-beige/60 rounded text-charcoal transition"
                  >
                    {k.keyword}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* In-Demand Specialist Services Spotlight */}
          <div className="mb-20">
            <div className="mb-8">
              <span className="editorial-eyebrow">Signature In-Demand Disciplines</span>
              <h2 className="font-serif text-2xl sm:text-4xl text-emerald font-medium mt-1">
                Decorative Art, Resin & Live Experiential Offerings
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SPECIALIST_SERVICES.map((s, idx) => (
                <article
                  key={idx}
                  className="bg-white border border-beige/70 rounded-lg overflow-hidden shadow-card hover:border-emerald/70 transition flex flex-col justify-between group"
                >
                  <div>
                    <div className="aspect-[16/10] bg-cream-dark overflow-hidden relative">
                      <img
                        src={s.image}
                        alt={s.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2.5 right-2.5 text-[10px] uppercase font-mono px-2 py-0.5 bg-white/95 text-emerald font-semibold rounded border border-beige/60">
                        {s.tag}
                      </span>
                    </div>

                    <div className="p-5">
                      <span className="text-[10px] uppercase tracking-wider text-olive font-semibold block mb-1">
                        {s.division}
                      </span>
                      <h3 className="font-serif text-xl text-emerald font-medium group-hover:text-olive transition-colors leading-snug">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-xs text-charcoal/70 leading-relaxed font-light">
                        {s.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-beige/40">
                      <Link
                        to={s.path}
                        className="inline-flex items-center justify-between w-full text-xs uppercase tracking-wider font-semibold text-emerald group-hover:text-olive transition"
                      >
                        <span>View Dedicated Page & Scope</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-olive" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* 7 Core Divisions Stack */}
          <div className="mb-8">
            <span className="editorial-eyebrow">Complete Division Architecture</span>
            <h2 className="font-serif text-2xl sm:text-4xl text-emerald font-medium mt-1">
              Explore By Studio Division
            </h2>
          </div>

          <div className="space-y-12">
            {divisionsList.map((division) => (
              <article
                key={division.id}
                className="p-8 sm:p-12 bg-white border border-beige/70 rounded-lg shadow-card hover:border-emerald/70 transition-all flex flex-col lg:flex-row items-center gap-8 lg:gap-12 group"
              >
                <div className="w-full lg:w-5/12 aspect-[16/10] bg-cream-dark rounded-md overflow-hidden border border-beige/60 flex-shrink-0">
                  <img
                    src={division.heroImage}
                    alt={division.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="w-full lg:w-7/12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-charcoal/60 font-mono mb-2">
                      <span className="text-olive font-semibold">{division.accent}</span>
                      <span>•</span>
                      <span className="uppercase tracking-wider">{division.tagline}</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-4xl text-emerald font-medium group-hover:text-olive transition-colors">
                      {division.title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base text-charcoal/70 leading-relaxed font-light">
                      {division.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-beige/40 flex flex-wrap items-center gap-4">
                    <Link
                      to={division.path}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-emerald hover:bg-emerald-dark text-cream text-xs uppercase tracking-widest font-semibold rounded shadow-sm hover:shadow-emerald transition"
                    >
                      Explore Full Division
                      <ArrowUpRight className="w-3.5 h-3.5 text-beige" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Education Spotlight */}
          <div className="mt-16 p-8 sm:p-10 bg-white border border-beige/70 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-card">
            <div>
              <span className="editorial-eyebrow">Studio Education</span>
              <h3 className="font-serif text-2xl sm:text-3xl text-emerald font-medium mt-1">
                Online Fine Art Masterclasses & Mentorship
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-charcoal/70 max-w-xl font-light">
                Preparing for launch in late 2026. Explore our upcoming curriculum in pigment grinding, resin casting, and editorial brand identity.
              </p>
            </div>
            <Link
              to="/art-classes"
              className="inline-flex items-center gap-1.5 px-6 py-3 border border-charcoal/30 hover:border-emerald text-charcoal hover:text-emerald text-xs uppercase tracking-widest font-semibold rounded transition"
            >
              Join Priority Waitlist
              <ArrowUpRight className="w-3.5 h-3.5 text-olive" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
