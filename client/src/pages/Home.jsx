import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ArrowUpRight, Compass, Palette, Globe, Sparkles, Building2, Package, ShoppingBag } from 'lucide-react';

const DISCIPLINES = [
  {
    title: 'Custom Art & Commissions',
    slug: '/services/custom-art',
    description: 'Bespoke portraits, original oil paintings, charcoal drawings, and commemorative pieces for private patrons.',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    accent: '01',
  },
  {
    title: 'Original Art & Products',
    slug: '/services/art-products',
    description: 'Curated ready-to-buy paintings, museum-grade limited prints on 310gsm cotton rag, and handmade sculptures.',
    image: 'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=800&q=80',
    accent: '02',
  },
  {
    title: 'Branding & Visual Identity',
    slug: '/services/branding-design',
    description: 'Bespoke logo systems, editorial brand guidelines, custom typography, stationery, and packaging design.',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80',
    accent: '03',
  },
  {
    title: 'Website Design & Development',
    slug: '/services/website-development',
    description: 'Full-stack MERN digital flagships engineered with editorial layouts, sub-second speed, and 100/100 Core Web Vitals.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    accent: '04',
  },
  {
    title: 'Digital Content & Motion',
    slug: '/services/digital-content',
    description: 'Art-directed logo animation, animated social motion vignettes, and campaign visual storytelling systems.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    accent: '05',
  },
  {
    title: 'Murals & Commercial Projects',
    slug: '/services/murals-commercial-art',
    description: 'Monumental hand-painted architectural wall murals, commercial art installations, and spatial art features.',
    image: 'https://images.unsplash.com/photo-1561055657-b9e0bf0fa360?auto=format&fit=crop&w=800&q=80',
    accent: '06',
  },
  {
    title: 'Creative Products & Digital Assets',
    slug: '/services/creative-products',
    description: 'Artisanal merchandise, custom tote bags, presentation templates, and licensed digital artwork collections.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    accent: '07',
  },
];

const SELECTED_WORKS = [
  {
    title: 'Aura of Terra',
    category: 'Fine Art Commission',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    summary: 'A 7-foot triptych in raw pigment, limestone wash, and Belgian linen created for an architectural Bengaluru residence.',
  },
  {
    title: 'Atelier Kanso',
    category: 'Branding & Digital Platform',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80',
    summary: 'Complete visual identity, custom typography, and headless web development for a minimalist architectural studio.',
  },
  {
    title: 'Echoes of the Deccan',
    category: 'Commercial Mural Installation',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1561055657-b9e0bf0fa360?auto=format&fit=crop&w=800&q=80',
    summary: 'A 45-foot hand-painted mural celebrating regional basalt motifs inside a luxury heritage hospitality pavilion.',
  },
];

export default function Home() {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HUNAR Creative Studio',
    url: 'https://hunarstudio.com',
    description: 'HUNAR Creative Studio is an interdisciplinary creative atelier specializing in bespoke fine art, branding, digital platforms, and commercial installations.',
    publisher: {
      '@type': 'Organization',
      name: 'HUNAR Creative Studio',
      url: 'https://hunarstudio.com',
    },
  };

  return (
    <>
      <SEO
        title="HUNAR Creative Studio — Bespoke Art, Branding & Digital Production"
        description="HUNAR is an interdisciplinary creative studio crafting bespoke fine art, luxury branding, custom websites, and architectural murals. No generic templates."
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
                Where fine art craftsmanship meets architectural design and digital engineering.
              </h1>
              <p className="mt-6 text-base sm:text-lg text-charcoal/80 leading-relaxed font-light max-w-2xl">
                HUNAR is an interdisciplinary creative studio. We partner with visionaries, architects, and founders to create original art pieces, bespoke visual identities, and enduring digital platforms.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald hover:bg-emerald-dark text-cream text-xs uppercase tracking-widest font-semibold rounded shadow-sm hover:shadow-emerald transition"
                >
                  Explore Catalogue
                  <ArrowUpRight className="w-4 h-4 text-beige" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-charcoal/30 hover:border-emerald text-charcoal hover:text-emerald text-xs uppercase tracking-widest font-semibold rounded transition"
                >
                  View Selected Works
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded overflow-hidden shadow-card border border-beige aspect-[4/5] bg-cream-dark">
                <img
                  src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80"
                  alt="HUNAR Creative Atelier Artwork Showcase"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded border border-beige/60 text-xs shadow-subtle">
                  <p className="font-serif text-sm text-emerald font-medium">Fine Art Study No. 07</p>
                  <p className="text-[11px] text-olive font-mono mt-0.5">Raw Mineral Pigments on Belgian Linen</p>
                </div>
              </div>
            </div>
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
                Whether designing a bespoke brand identity or hand-painting an architectural mural across forty feet of lime plaster, we bring together tactile sensibilities and modern technological rigor.
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

      {/* Catalogue Divisions Grid with Dummy Imagery */}
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
              All Services Overview →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DISCIPLINES.map((item) => (
              <article
                key={item.slug}
                className="group bg-white border border-beige/70 rounded overflow-hidden shadow-card hover:border-emerald/70 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] bg-cream-dark overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
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

      {/* Selected Works Showcase with Visual Cards */}
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
              View Full Portfolio Archive →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SELECTED_WORKS.map((work, index) => (
              <div
                key={index}
                className="bg-white border border-beige/70 rounded overflow-hidden shadow-card flex flex-col justify-between group hover:border-emerald/70 transition"
              >
                <div>
                  <div className="aspect-[4/3] bg-cream-dark overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-charcoal/60 uppercase tracking-widest mb-2 font-medium">
                      <span className="text-olive font-semibold">{work.category}</span>
                      <span>•</span>
                      <span>{work.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-emerald font-medium">
                      {work.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                      {work.summary}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-emerald hover:text-olive transition"
                  >
                    View Project Details
                    <ArrowUpRight className="w-3.5 h-3.5 text-olive" />
                  </Link>
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
            We are authoring intimate online masterclasses exploring traditional pigment grinding, oil techniques, and editorial brand design. Opening for enrollment in late 2026.
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
            We welcome inquiries for bespoke fine art commissions, brand transformations, web projects, and architectural murals.
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
