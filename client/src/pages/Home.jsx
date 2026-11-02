import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  ArrowUpRight, 
  Search, 
  Sparkles, 
  Layers, 
  Paintbrush, 
  Palette, 
  Calendar, 
  Check, 
  Compass 
} from 'lucide-react';
import { SUB_SERVICES } from '../data/servicesCatalogue';

const DISCIPLINES = [
  {
    title: 'Custom Art & Commissions',
    slug: '/services/custom-art',
    description: 'Bespoke portraits, original oil paintings, charcoal drawings, fine calligraphy, and live wedding art for private patrons.',
    image: '/portfolio/portraits/elderly-couple-traditional-oil-portrait.webp',
    alt: 'Hand-painted oil portrait of an Indian couple in traditional attire on primed canvas',
    accent: '01',
  },
  {
    title: 'Original Art & Products',
    slug: '/services/art-products',
    description: 'Curated ready-to-buy paintings, museum-grade limited prints on cotton rag, bespoke resin art, and handmade sculptures.',
    image: '/portfolio/installations/flight-of-peace-paper-doves-sculpture.webp',
    alt: '3D paper craft sculpture of white doves perched on branches mounted on textured orange paper',
    accent: '02',
  },
  {
    title: 'Branding & Visual Identity',
    slug: '/services/branding-design',
    description: 'Bespoke logo systems, editorial brand guidelines, corporate identity manuals, national advertising campaigns, and packaging design.',
    image: '/portfolio/brand-identity/saga-ratna/sagar-ratna-brand-identity-concept-cover.webp',
    alt: 'Sagar Ratna restaurant brand identity manual and corporate visual system by HUNAR Studio',
    accent: '03',
  },
  {
    title: 'Website Design & Development',
    slug: '/services/website-development',
    description: 'Full-stack MERN digital flagships engineered with editorial layouts, sub-second speed, and 100/100 Core Web Vitals.',
    image: '/portfolio/web-design/shikha-singh-luxury-model-portfolio.webp',
    alt: 'Luxury model portfolio website design for Shikha Singh featuring runway photography',
    accent: '04',
  },
  {
    title: 'Digital Content & Motion',
    slug: '/services/digital-content',
    description: 'Art-directed logo animation, animated social motion vignettes, and campaign visual storytelling systems.',
    image: '/portfolio/web-design/greek-automata-techfest-website.webp',
    alt: 'Greek Automata interactive tech festival platform with glowing circuit graphics',
    accent: '05',
  },
  {
    title: 'Murals & Commercial Projects',
    slug: '/services/murals-commercial-art',
    description: 'Monumental architectural wall murals, commercial glass painting, theatrical stage sets, live body art, and spatial installations.',
    image: '/portfolio/murals/staircase-monstera-botanical-mural.webp',
    alt: 'Interior wall mural painting of tropical monstera leaves along a wooden staircase',
    accent: '06',
  },
  {
    title: 'Creative Products & Digital Assets',
    slug: '/services/creative-products',
    description: 'Artisanal merchandise, dimensional kinetic sculptures, presentation templates, and licensed artwork collections.',
    image: '/portfolio/installations/creative-tree-of-knowledge-sculpture.webp',
    alt: 'Freestanding colorful artistic tree sculpture featuring branches with camera and art tools',
    accent: '07',
  },
];

// High-demand specialist disciplines explicitly requested by clients
const SPECIALIST_SPOTLIGHTS = [
  {
    title: 'Commercial & Festive Glass Painting',
    division: 'Murals & Commercial Projects',
    path: '/services/murals-commercial-art/commercial-glass-painting',
    image: '/portfolio/glass-painting/lord-ganesha-entrance-glass-painting.webp',
    alt: 'Hand-painted Lord Ganesha decorative entrance art on commercial glass facade',
    tag: 'Retail & Storefronts',
    summary: 'Transform retail facades, cafe windows, and corporate entrances into luminous visual spectacles with weather-resistant enamels and festive holiday compositions.',
    features: ['Non-damaging glass enamels', 'Day & night dual visibility', 'Seasonal refresh & clean removal'],
  },
  {
    title: 'Resin Art & Spatial Decorative Objects',
    division: 'Original Art & Products',
    path: '/services/art-products/resin-art',
    image: '/portfolio/installations/flight-of-peace-paper-doves-sculpture.webp',
    alt: 'Dimensional decorative art installation by HUNAR Studio',
    tag: 'Handcrafted Resin & Decor',
    summary: 'Bespoke crystal clear resin panels, metallic mineral river tables, and dimensional sculptural wall art engineered for contemporary luxury interiors.',
    features: ['UV-resistant non-yellowing epoxy', 'Custom metallic pigment swirls', 'Architectural hardwood mounting'],
  },
  {
    title: 'Theatrical Stage Design & Event Production',
    division: 'Murals & Commercial Projects',
    path: '/services/murals-commercial-art/theatrical-stage-design',
    image: '/portfolio/stage-design/sir-jj-applied-art-winged-stage-finished.webp',
    alt: 'Sir J.J. Applied Art 88th Annual Exhibition 40ft sculpted winged stage set',
    tag: 'Stage & Exhibition Sets',
    summary: 'Monumental festival stages, theatrical prosceniums, and corporate pavilions. Complete architectural drafting, 3D color renders, heavy timber framing, and EPS foam sculpting.',
    features: ['3D lighting & color elevations', 'Structural carpentry blueprints', 'Turnkey on-site scenic team'],
  },
  {
    title: 'Live Wedding Painting & Rapid Caricatures',
    division: 'Custom Art & Commissions',
    path: '/services/custom-art/live-wedding-painting-caricature',
    image: '/portfolio/caricature/live-family-caricature-portrait.webp',
    alt: 'Live wedding and celebratory event caricature portrait by HUNAR Studio',
    tag: 'Experiential Wedding Art',
    summary: 'Capture your wedding pheras or first dance live on a fine art canvas throughout the ceremony, alongside master speed caricaturists drawing 4-minute guest keepsakes.',
    features: ['Live on-site easel performance', 'Master canvas completed by night', '4-minute guest favors with mats'],
  },
  {
    title: 'Live Event Tattoos & Temporary Body Art',
    division: 'Murals & Commercial Projects',
    path: '/services/murals-commercial-art/event-tattoos-face-painting',
    image: '/portfolio/face-body-art/corporate-event-peacock-tattoo-showcase.webp',
    alt: 'Royal Peacock temporary tattoo painted on guest arm at corporate gala event',
    tag: 'Brand Activations & Galas',
    summary: 'Interactive body art and cosmetic tattooing for corporate product launches, sports fan events, and gala celebrations using 100% hypoallergenic FDA pigments.',
    features: ['FDA-compliant cosmetic ink', 'Custom corporate logo stencils', 'Fast queue throughput (2-5 min)'],
  },
  {
    title: 'Fine Art Calligraphy & Illuminated Manuscripts',
    division: 'Custom Art & Commissions',
    path: '/services/custom-art/calligraphy-services',
    image: '/portfolio/calligraphy/marathi-devanagari-ganpati-watercolor-calligraphy.webp',
    alt: 'Devanagari calligraphy artwork of Lord Ganesha in warm watercolor washes',
    tag: 'Devanagari & English Script',
    summary: 'Mastery of classical reed and steel nibs across Devanagari, Marathi, Sanskrit verses, poetry manuscripts, and monumental hand-lettered wooden boards with 24k gold leaf.',
    features: ['Hand-ground Japanese sumi ink', '24k gold leaf illuminated details', 'Archival 300gsm cotton rag sheets'],
  },
];

const SELECTED_WORKS = [
  {
    title: 'Sagar Ratna — Complete Brand Identity & Visual Guidelines',
    category: 'Brand Identity & Rebrand',
    year: '2024',
    image: '/portfolio/brand-identity/saga-ratna/sagar-ratna-brand-identity-concept-cover.webp',
    alt: 'Sagar Ratna restaurant brand identity manual and corporate visual system by HUNAR Studio',
    summary: 'Comprehensive brand architecture for premier Indian dining chain: Vamana chhatri brandmark, bilingual Devanagari type, and custom packaging wraps.',
  },
  {
    title: 'Royal Enfield — "Live Royal, Ride Royal" Campaign',
    category: 'Cultural Advertising Campaign',
    year: '2024',
    image: '/portfolio/brand-identity/royal-enfield/royal-enfield-live-royal-ride-royal-cover.webp',
    alt: 'Royal Enfield Live Royal Ride Royal campaign visual pairing traditional turbans with motorcycle helmets',
    summary: 'Flagship national campaign honoring regional Indian turbans alongside precision Royal Enfield safety headgear.',
  },
  {
    title: 'Botanical Ascent Staircase Mural',
    category: 'Architectural Wall Mural',
    year: '2026',
    image: '/portfolio/murals/staircase-monstera-botanical-mural.webp',
    alt: 'Interior wall mural painting of tropical monstera leaves and warm terracotta shapes along a wooden staircase',
    summary: 'A 20-foot hand-painted botanical mural featuring monstera leaves and earthy mineral pigments along an architectural residence staircase.',
  },
  {
    title: 'Sir J.J. Applied Art 88th Annual Sculptural Stage',
    category: 'Theatrical Stage & Set Fabrication',
    year: '2024',
    image: '/portfolio/stage-design/sir-jj-applied-art-winged-stage-finished.webp',
    alt: 'Monumental architectural stage design with sculpted angel wings and fluted arches at Sir JJ Institute of Applied Art',
    summary: '40ft architectural exhibition stage proscenium with hand-carved high-density foam angel wings, classical grid drafting, and timber trusses.',
  },
  {
    title: 'Lord Ganesha Festive Storefront Glass Painting',
    category: 'Commercial Glass Painting',
    year: '2025',
    image: '/portfolio/glass-painting/lord-ganesha-entrance-glass-painting.webp',
    alt: 'Intricate white glass painting of Lord Ganesha with floral garland on glass entrance door',
    summary: 'Luminous white glass enamel mural painted on commercial entrance glass with traditional dhol musicians and auspicious floral festoons.',
  },
  {
    title: 'Luminescence in Crimson — Oil on Belgian Linen',
    category: 'Custom Portrait Commission',
    year: '2025',
    image: '/portfolio/portraits/vibrant-crimson-woman-oil-portrait.webp',
    alt: 'Fine art oil portrait painting of a woman in yellow dress against deep crimson background on canvas',
    summary: 'Vivid portrait study in oil on canvas featuring rich crimson backdrop, expressive natural light, and golden hand-painted drapery.',
  },
];

// Popular search keywords that patrons commonly search for
const POPULAR_SEARCH_KEYWORDS = [
  { keyword: 'Resin Art & Tables', target: '/services/art-products/resin-art', division: 'Original Art' },
  { keyword: 'Commercial Glass Painting', target: '/services/murals-commercial-art/commercial-glass-painting', division: 'Murals & Glass' },
  { keyword: 'Theatrical Stage Design', target: '/services/murals-commercial-art/theatrical-stage-design', division: 'Events & Sets' },
  { keyword: 'Live Wedding Painter', target: '/services/custom-art/live-wedding-painting-caricature', division: 'Wedding Art' },
  { keyword: 'Event Temporary Tattoos', target: '/services/murals-commercial-art/event-tattoos-face-painting', division: 'Body Art' },
  { keyword: 'Devanagari Calligraphy', target: '/services/custom-art/calligraphy-services', division: 'Custom Scription' },
  { keyword: 'Brand Identity Systems', target: '/services/branding-design/brand-identity', division: 'Branding' },
  { keyword: 'Advertising Campaigns', target: '/services/branding-design/advertising-campaigns', division: 'Advertising' },
  { keyword: 'Architectural Wall Murals', target: '/services/murals-commercial-art/wall-murals', division: 'Murals' },
  { keyword: 'Custom Oil Portraits', target: '/services/custom-art/custom-portraits', division: 'Fine Art' },
  { keyword: 'Bespoke Logo Redesign', target: '/services/branding-design/logo-design', division: 'Logo Design' },
  { keyword: 'Full-Stack Web Development', target: '/services/website-development/business-websites', division: 'Web Engineering' },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  // Live filter of all 56 subservices based on search query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return Object.values(SUB_SERVICES)
      .filter((s) => 
        s.title.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q) ||
        s.primaryKeyword.toLowerCase().includes(q)
      )
      .slice(0, 6);
  }, [searchQuery]);

  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HUNAR Creative Studio',
    url: 'https://hunarstudio.com',
    description: 'HUNAR Creative Studio is an interdisciplinary creative atelier specializing in bespoke fine art, resin art, commercial glass painting, branding, theatrical stage sets, and digital platforms.',
    publisher: {
      '@type': 'Organization',
      name: 'HUNAR Creative Studio',
      url: 'https://hunarstudio.com',
    },
  };

  return (
    <>
      <SEO
        title="HUNAR Creative Studio — Fine Art, Branding, Glass Painting, Resin & Stage Design"
        description="HUNAR is an interdisciplinary creative atelier crafting bespoke fine art, luxury brand identity, commercial glass painting, resin art, theatrical stages, and digital engineering. 95+ authentic works."
        schema={homeSchema}
      />

      {/* Hero Section with Editorial Art Direction */}
      <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 overflow-hidden bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="editorial-eyebrow">Creative Studio & Atelier</span>
              {/* Every page has an explicit h1 */}
              <h1 className="mt-4 font-serif text-4xl sm:text-6xl lg:text-7xl text-emerald font-normal leading-[1.1] tracking-tight">
                Where fine art craftsmanship meets spatial design and brand architecture.
              </h1>
              <p className="mt-6 text-base sm:text-lg text-charcoal/80 leading-relaxed font-light max-w-2xl">
                HUNAR is an interdisciplinary creative studio. We partner with visionaries, architects, retailers, and founders to create original art pieces, bespoke visual identities, decorative glass paintings, and enduring digital platforms.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald hover:bg-emerald-dark text-cream text-xs uppercase tracking-widest font-semibold rounded shadow-sm hover:shadow-emerald transition"
                >
                  Explore 56 Offerings
                  <ArrowUpRight className="w-4 h-4 text-beige" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-charcoal/30 hover:border-emerald text-charcoal hover:text-emerald text-xs uppercase tracking-widest font-semibold rounded transition"
                >
                  View Selected Works (95+)
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-lg overflow-hidden shadow-elevated border border-beige aspect-[4/5] bg-cream-dark group">
                <img
                  src="/portfolio/brand-identity/saga-ratna/sagar-ratna-brand-identity-concept-cover.webp"
                  alt="Sagar Ratna restaurant brand identity manual and corporate visual system by HUNAR Studio"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded border border-beige/60 text-xs shadow-subtle">
                  <p className="font-serif text-sm text-emerald font-medium">Sagar Ratna: Brand Identity Manual</p>
                  <p className="text-[11px] text-olive font-mono mt-0.5">Corporate Brandmark Architecture & Typography</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Service Search & Keyword Intent Hub */}
      <section className="py-12 bg-white border-y border-beige/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-emerald font-bold block mb-1">
              Find Services By Search Intent
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-emerald font-medium">
              What creative solution are you looking to commission?
            </h2>
            <p className="text-xs sm:text-sm text-charcoal/70 mt-2 font-light">
              Explore by search keywords or type your specific discipline below for instant direct matching.
            </p>

            {/* Interactive Search Bar */}
            <div className="relative mt-6 max-w-xl mx-auto">
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-olive absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Try searching 'resin art', 'glass painting', 'stage design', 'wedding'..."
                  className="w-full pl-11 pr-4 py-3 bg-cream/50 border border-beige rounded-lg text-xs sm:text-sm text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-emerald focus:bg-white focus:ring-2 focus:ring-emerald/10 transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 text-xs text-charcoal/50 hover:text-emerald px-2 py-1"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Dynamic Live Results Dropdown */}
              {searchResults.length > 0 && (
                <div className="absolute left-0 right-0 mt-2 bg-white border border-beige/80 rounded-lg shadow-elevated z-30 text-left overflow-hidden divide-y divide-beige/40">
                  {searchResults.map((result) => (
                    <Link
                      key={result.slug}
                      to={`/services/${result.division}/${result.slug}`}
                      className="p-3.5 hover:bg-cream/40 flex items-center justify-between transition group"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-sm text-emerald font-medium group-hover:text-olive">
                            {result.title}
                          </span>
                          <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 bg-beige/40 text-charcoal/70 rounded">
                            {result.division}
                          </span>
                        </div>
                        <p className="text-xs text-charcoal/60 mt-0.5 line-clamp-1 font-light">
                          {result.summary}
                        </p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-olive opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Popular Search Keyword Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="text-xs text-charcoal/50 font-medium mr-1 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-olive" />
              Popular Searches:
            </span>
            {POPULAR_SEARCH_KEYWORDS.map((item, idx) => (
              <Link
                key={idx}
                to={item.target}
                className="text-xs px-3 py-1.5 bg-cream/50 hover:bg-emerald hover:text-cream border border-beige rounded-full text-charcoal transition-all duration-200 inline-flex items-center gap-1.5 shadow-xs"
              >
                <span>{item.keyword}</span>
                <span className="text-[9px] uppercase font-mono opacity-60">· {item.division}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* IN-DEMAND SPOTLIGHTS: Resin Art, Glass Painting, Event Management, Wedding Art, Calligraphy */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-beige/50">
            <div>
              <span className="editorial-eyebrow">Signature Studio Offerings</span>
              <h2 className="mt-2 font-serif text-3xl sm:text-5xl text-emerald font-normal">
                Decorative Art, Resin & Experiential Productions
              </h2>
            </div>
            <Link
              to="/services"
              className="mt-4 md:mt-0 text-xs uppercase tracking-widest font-semibold text-charcoal/70 hover:text-emerald transition inline-flex items-center gap-1"
            >
              Browse Complete Directory (56 Services) →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPECIALIST_SPOTLIGHTS.map((service, index) => (
              <article
                key={index}
                className="group bg-white border border-beige/70 rounded-lg overflow-hidden shadow-card hover:border-emerald/70 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] bg-cream-dark overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 text-[10px] uppercase font-mono px-2.5 py-1 bg-white/95 rounded text-emerald font-semibold border border-beige/60 shadow-xs">
                      {service.tag}
                    </span>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] uppercase tracking-wider text-olive font-semibold block mb-1">
                      {service.division}
                    </span>
                    <h3 className="font-serif text-2xl text-emerald font-medium group-hover:text-olive transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-charcoal/75 leading-relaxed font-light">
                      {service.summary}
                    </p>

                    {/* Key features checklist */}
                    <div className="mt-5 pt-4 border-t border-beige/40 space-y-1.5">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-charcoal/70 font-light">
                          <Check className="w-3.5 h-3.5 text-emerald flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-beige/40">
                    <Link
                      to={service.path}
                      className="inline-flex items-center justify-between w-full text-xs uppercase tracking-wider font-semibold text-emerald group-hover:text-olive transition"
                    >
                      <span>Explore Dedicated Service Page</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-olive group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Manifesto */}
      <section className="py-20 bg-sage/15 border-y border-beige/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="editorial-eyebrow">Atelier Philosophy</span>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-emerald font-medium leading-snug">
                Reclaiming human craft in an era of homogenized design.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 text-charcoal/80 text-sm sm:text-base leading-relaxed font-light">
              <p>
                At HUNAR, we reject repetitive layouts, synthetic shortcuts, and disposable aesthetics. Every brushstroke on our canvas, every letterform in our branding, and every line of code in our digital builds is composed with profound artistic intent.
              </p>
              <p>
                Whether designing a national brand identity, casting crystal clear resin furniture, or hand-painting an architectural glass mural across a boutique facade, we bring together tactile sensibilities and rigorous modern engineering.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-olive hover:text-emerald border-b border-olive hover:border-emerald pb-0.5 transition"
                >
                  Read our full studio story
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue Divisions Grid with Upgraded Branding Visual */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-beige/50">
            <div>
              <span className="editorial-eyebrow">Service Catalogue</span>
              <h2 className="mt-2 font-serif text-3xl sm:text-5xl text-emerald font-normal">
                Disciplines of the Atelier
              </h2>
            </div>
            <Link
              to="/services"
              className="mt-4 md:mt-0 text-xs uppercase tracking-widest font-semibold text-charcoal/70 hover:text-emerald transition"
            >
              All 7 Divisions Overview →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DISCIPLINES.map((item) => (
              <article
                key={item.slug}
                className="group bg-white border border-beige/70 rounded-lg overflow-hidden shadow-card hover:border-emerald/70 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] bg-cream-dark overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 font-mono text-xs px-2 py-0.5 bg-white/95 rounded text-emerald font-semibold border border-beige/60">
                      {item.accent}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl text-emerald font-medium group-hover:text-olive transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-beige/40 flex items-center justify-between">
                    <Link
                      to={item.slug}
                      className="text-xs uppercase tracking-wider font-semibold text-emerald group-hover:text-olive inline-flex items-center gap-1 transition"
                    >
                      Explore Discipline
                      <ArrowUpRight className="w-3.5 h-3.5 text-olive" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Works Showcase with Genuine Visual Cards */}
      <section className="py-24 bg-cream-pure border-t border-beige/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-beige/50">
            <div>
              <span className="editorial-eyebrow">Curation</span>
              <h2 className="mt-2 font-serif text-3xl sm:text-5xl text-emerald font-normal">
                Selected Works Archive
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="mt-4 md:mt-0 text-xs uppercase tracking-widest font-semibold text-charcoal/70 hover:text-emerald transition"
            >
              View Full Portfolio Archive (95 Works) →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SELECTED_WORKS.map((work, index) => (
              <div
                key={index}
                className="bg-white border border-beige/70 rounded-lg overflow-hidden shadow-card flex flex-col justify-between group hover:border-emerald/70 transition"
              >
                <div>
                  <div className="aspect-[4/3] bg-cream-dark overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-charcoal/60 uppercase tracking-widest mb-2 font-medium">
                      <span className="text-olive font-semibold">{work.category}</span>
                      <span>•</span>
                      <span>{work.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-emerald font-medium leading-snug">
                      {work.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                      {work.summary}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-beige/40">
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-emerald hover:text-olive transition"
                    >
                      View Project in Archive
                      <ArrowUpRight className="w-3.5 h-3.5 text-olive" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Classes Teaser */}
      <section className="py-20 bg-sage/15 border-t border-beige/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="editorial-eyebrow">Studio Education</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-emerald font-medium">
            Online Fine Art Masterclasses & Creative Mentorship
          </h2>
          <p className="mt-4 text-sm sm:text-base text-charcoal/80 max-w-2xl mx-auto leading-relaxed font-light">
            We are authoring intimate online masterclasses exploring traditional pigment grinding, oil techniques, resin casting, and editorial brand design. Opening for enrollment in late 2026.
          </p>
          <div className="mt-8">
            <Link
              to="/art-classes"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald hover:bg-emerald-dark text-cream text-xs uppercase tracking-widest font-semibold rounded shadow-sm hover:shadow-emerald transition"
            >
              Join Early Access Waitlist
              <ArrowUpRight className="w-4 h-4 text-beige" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final Call to Action - Routes to dedicated /contact page (Strictly NO form on homepage) */}
      <section className="py-24 bg-emerald text-cream border-t border-beige/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-beige font-semibold">
            Begin a Dialogue
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-cream font-normal leading-tight">
            Have a project or commission in mind?
          </h2>
          <p className="text-cream/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light">
            We welcome inquiries for bespoke fine art commissions, brand transformations, commercial glass art, resin installations, theatrical stages, and web platforms.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cream text-emerald hover:bg-white text-xs uppercase tracking-widest font-bold rounded shadow-md transition"
            >
              Initiate Studio Consultation
              <ArrowUpRight className="w-4 h-4 text-olive" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-cream/40 hover:border-cream text-cream text-xs uppercase tracking-widest font-semibold rounded transition"
            >
              Review Services Catalogue
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
