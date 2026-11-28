import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Globe, Compass, Eye, ShieldCheck, ChevronDown } from 'lucide-react';

const DISCIPLINES_TICKER = [
  { id: 'branding', number: '01', label: 'Brand Identity & Systems', path: '/services/branding-design' },
  { id: 'web', number: '02', label: 'Full-Stack Digital Flagships', path: '/services/website-development' },
  { id: 'murals', number: '03', label: 'Commercial Murals & Glass Art', path: '/services/murals-commercial-art' },
  { id: 'motion', number: '04', label: 'Motion Graphics & Campaigns', path: '/services/digital-content' },
  { id: 'art', number: '05', label: 'Fine Art & Spatial Objects', path: '/services/custom-art' },
];

export default function AgencyHero() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [activeArtifact, setActiveArtifact] = useState('brand'); // 'brand' | 'web' | 'art'
  const containerRef = useRef(null);

  // Smooth mouse movement parallax for desktop
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Check if user prefers reduced motion or device is touch
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(pointer: coarse)').matches) {
        return;
      }

      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[calc(100svh-5rem)] bg-cream flex flex-col justify-between overflow-hidden border-b border-beige/60 select-none"
      aria-label="HUNAR Creative Studio Hero"
    >
      {/* Background Architectural Blueprint Grid Lines (Subtle Editorial Detail) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.45] grid grid-cols-6 sm:grid-cols-12 h-full w-full"
        aria-hidden="true"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-beige/40 h-full last:border-r-0" />
        ))}
      </div>

      {/* Top Architectural Spec Strip */}
      <div className="relative z-10 w-full border-b border-beige/50 bg-cream/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-charcoal/70">
          <div className="flex items-center gap-3">
            <span className="text-emerald font-bold">[ HUNAR ATELIER ]</span>
            <span className="hidden sm:inline-block text-beige-dark">/</span>
            <span className="hidden sm:inline-block">INDEPENDENT CREATIVE STUDIO</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-olive animate-pulse" />
            <span className="text-charcoal/80 font-medium">MUMBAI ATELIER · 19°04'N 72°52'E</span>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span className="text-olive font-bold">98 AUTHENTIC COMMISSIONS</span>
            <span className="text-beige-dark">·</span>
            <span>EST. 2024</span>
          </div>
        </div>
      </div>

      {/* Core Hero Content: Monumental Asymmetrical Composition */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Monumental Editorial Poster Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Kicker badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-white border border-beige/80 rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-emerald font-semibold shadow-subtle inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-olive" />
                Creativity, Made Visible
              </span>
              <span className="h-[1px] w-12 bg-beige-dark/60 hidden sm:block" />
              <span className="text-[11px] font-mono text-charcoal/60 uppercase tracking-widest hidden sm:block">
                Vol. 26 Edition
              </span>
            </div>

            {/* Monumental Headline */}
            <h1 className="font-serif tracking-tight leading-[0.92] text-charcoal">
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] font-normal text-emerald transition-all">
                WE MAKE
              </span>
              
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] font-serif italic text-olive font-normal mt-1 sm:mt-2">
                IDEAS
                <span className="inline-block text-xs sm:text-sm font-sans font-normal not-italic uppercase tracking-[0.3em] text-charcoal/60 ml-4 align-middle px-3 py-1 bg-cream-dark/60 rounded border border-beige/60">
                  Identity · Digital · Spatial
                </span>
              </span>

              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] font-semibold text-charcoal mt-1 sm:mt-2">
                MATTER<span className="text-olive">.</span>
              </span>
            </h1>

            {/* Editorial Manifesto */}
            <p className="mt-8 text-base sm:text-lg lg:text-xl text-charcoal/80 font-light leading-relaxed max-w-2xl">
              HUNAR is an independent creative studio where fine art craftsmanship collides with brand architecture, digital flagships, and spatial design. We turn ambitious visions into visual work that makes businesses impossible to ignore.
            </p>

            {/* Action CTA Cluster */}
            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
              <Link
                to="/portfolio"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-emerald hover:bg-emerald-dark text-cream font-sans text-xs uppercase tracking-widest font-semibold rounded shadow-sm hover:shadow-emerald transition-all duration-300"
              >
                <span>Explore Selected Works</span>
                <span className="font-mono text-[10px] px-2 py-0.5 bg-emerald-light/40 rounded text-beige font-normal">
                  98 Projects
                </span>
                <ArrowUpRight className="w-4 h-4 text-beige group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 hover:bg-white text-charcoal hover:text-emerald border border-charcoal/30 hover:border-emerald font-sans text-xs uppercase tracking-widest font-semibold rounded shadow-subtle transition-all duration-300"
              >
                <span>Initiate Commission</span>
                <ArrowUpRight className="w-4 h-4 text-olive" />
              </Link>
            </div>

            {/* Trust and Capability Accents */}
            <div className="mt-10 pt-6 border-t border-beige/60 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-charcoal/70">
              <div>
                <span className="text-olive block text-[10px] tracking-wider uppercase font-semibold">Disciplines</span>
                <span className="text-charcoal font-medium text-xs sm:text-sm">7 Studio Divisions</span>
              </div>
              <div>
                <span className="text-olive block text-[10px] tracking-wider uppercase font-semibold">Execution</span>
                <span className="text-charcoal font-medium text-xs sm:text-sm">Bespoke & Turnkey</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-olive block text-[10px] tracking-wider uppercase font-semibold">Turnaround</span>
                <span className="text-charcoal font-medium text-xs sm:text-sm">Worldwide Commissions</span>
              </div>
            </div>

          </div>

          {/* Right Column: Multi-Layered Art-Directed Visual Collage */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] sm:min-h-[560px]">
            
            {/* Layer 1: Core Brand Architecture Specimen (Sagar Ratna Identity Cover) */}
            <div 
              style={{
                transform: `translate3d(${mouseOffset.x * -16}px, ${mouseOffset.y * -12}px, 0)`,
                transition: 'transform 0.15s ease-out',
              }}
              className={`relative z-20 w-[82%] sm:w-[75%] rounded-lg overflow-hidden bg-white border border-beige shadow-elevated transition-all duration-500 cursor-pointer ${
                activeArtifact === 'brand' ? 'ring-2 ring-emerald ring-offset-4 ring-offset-cream' : 'opacity-95 hover:opacity-100'
              }`}
              onClick={() => setActiveArtifact('brand')}
            >
              {/* Card Meta Header */}
              <div className="p-3 bg-white border-b border-beige/60 flex items-center justify-between text-[10px] font-mono">
                <span className="uppercase text-emerald font-bold tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald" />
                  Brand Identity Manual
                </span>
                <span className="text-charcoal/50">Specimen No. 01</span>
              </div>

              {/* Work Image */}
              <div className="aspect-[4/3] bg-charcoal overflow-hidden relative group">
                <img
                  src="/portfolio/brand-identity/saga-ratna/sagar-ratna-brand-identity-concept-cover.webp"
                  alt="Sagar Ratna restaurant brand identity manual and corporate visual system by HUNAR Studio"
                  fetchPriority="high"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-serif">Sagar Ratna · Corporate Identity Architecture</span>
                </div>
              </div>

              {/* Card Technical Footer */}
              <div className="p-4 bg-cream/30 border-t border-beige/40">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-serif text-sm font-semibold text-emerald">Sagar Ratna Identity System</p>
                    <p className="text-[11px] text-charcoal/60 mt-0.5">Typographic Hierarchy & Packaging Wrap</p>
                  </div>
                  <Link
                    to="/services/branding-design"
                    className="p-2 bg-white rounded-full border border-beige text-emerald hover:bg-emerald hover:text-white transition shadow-sm"
                    aria-label="View Branding Services"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Layer 2: Digital Engineering Browser Fragment (The Nadeems Food Ordering Platform) */}
            <div 
              style={{
                transform: `translate3d(${mouseOffset.x * 22}px, ${mouseOffset.y * 18}px, 0)`,
                transition: 'transform 0.18s ease-out',
              }}
              className={`absolute top-0 right-0 sm:-right-4 z-30 w-[70%] sm:w-[65%] rounded-lg overflow-hidden bg-white border border-beige shadow-card transition-all duration-500 cursor-pointer ${
                activeArtifact === 'web' ? 'ring-2 ring-emerald ring-offset-4 ring-offset-cream' : 'opacity-95 hover:opacity-100 hover:scale-[1.02]'
              }`}
              onClick={() => setActiveArtifact('web')}
            >
              {/* Simulated Browser Bar */}
              <div className="px-3 py-2 bg-charcoal text-cream flex items-center justify-between text-[9px] font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E57373]" />
                  <span className="w-2 h-2 rounded-full bg-[#FFB74D]" />
                  <span className="w-2 h-2 rounded-full bg-[#81C784]" />
                </div>
                <span className="text-cream/60 truncate max-w-[120px]">the-nadeems.onrender.com</span>
                <span className="text-[8px] px-1.5 py-0.2 bg-emerald/60 text-cream rounded font-bold">MERN</span>
              </div>

              {/* Image Preview */}
              <div className="aspect-[16/10] bg-cream-dark overflow-hidden relative group">
                <img
                  src="/portfolio/web-design/the-nadeems-gourmet-ordering-web.webp"
                  alt="The Nadeems Gourmet Restaurant Website & Food Ordering Platform"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-emerald/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <a
                    href="https://food-res-1frontend1.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-white text-emerald text-[11px] font-semibold rounded shadow-md flex items-center gap-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Globe className="w-3 h-3 text-olive" />
                    Live App
                  </a>
                </div>
              </div>

              <div className="p-3 bg-white border-t border-beige/40 flex items-center justify-between text-[11px]">
                <span className="font-serif text-emerald font-medium">The Nadeems · Digital Flagship</span>
                <span className="text-[10px] font-mono text-olive font-bold">100/100 Core Vitals</span>
              </div>
            </div>

            {/* Layer 3: Physical Spatial Craft & Murals Fragment */}
            <div 
              style={{
                transform: `translate3d(${mouseOffset.x * -12}px, ${mouseOffset.y * 22}px, 0)`,
                transition: 'transform 0.2s ease-out',
              }}
              className={`absolute bottom-2 left-0 sm:-left-4 z-10 w-[60%] sm:w-[55%] rounded-lg overflow-hidden bg-white border border-beige shadow-card transition-all duration-500 cursor-pointer ${
                activeArtifact === 'art' ? 'ring-2 ring-emerald ring-offset-4 ring-offset-cream' : 'opacity-90 hover:opacity-100 hover:scale-[1.02]'
              }`}
              onClick={() => setActiveArtifact('art')}
            >
              <div className="p-2.5 bg-white border-b border-beige/40 flex items-center justify-between text-[9px] font-mono">
                <span className="text-olive uppercase tracking-wider font-bold">Spatial Murals & Glass</span>
                <span className="text-charcoal/40">Handmade</span>
              </div>

              <div className="aspect-[4/3] bg-charcoal overflow-hidden relative group">
                <img
                  src="/portfolio/murals/staircase-monstera-botanical-mural.webp"
                  alt="Botanical Ascent Staircase Architectural Wall Mural by HUNAR Studio"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-2.5 bg-cream/40 border-t border-beige/40">
                <p className="font-serif text-xs font-semibold text-emerald">20ft Botanical Ascent</p>
                <p className="text-[10px] text-charcoal/60 font-mono">Mineral Pigments on Wall</p>
              </div>
            </div>

            {/* Layer 4: Authentic Rotating Studio Seal / Authenticity Stamp */}
            <div 
              style={{
                transform: `translate3d(${mouseOffset.x * 14}px, ${mouseOffset.y * -16}px, 0)`,
                transition: 'transform 0.22s ease-out',
              }}
              className="absolute -bottom-6 -right-2 sm:right-2 z-40 pointer-events-none select-none"
              aria-hidden="true"
            >
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                {/* Rotating Circular Typography SVG */}
                <svg
                  className="w-full h-full animate-[spin_24s_linear_infinite]"
                  viewBox="0 0 120 120"
                >
                  <path
                    id="sealCircle"
                    d="M 60, 60 m -46, 0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
                    fill="none"
                  />
                  <text className="text-[8.5px] uppercase font-mono tracking-[0.24em] fill-emerald font-semibold">
                    <textPath href="#sealCircle" startOffset="0%">
                      ★ HUNAR CREATIVE ATELIER ★ EST. 2024 ★ 98 WORKS ★
                    </textPath>
                  </text>
                </svg>

                {/* Center Badge Core */}
                <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-white border border-beige shadow-card flex items-center justify-center">
                  <span className="font-serif text-lg font-bold text-emerald">H</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Interactive Creative Disciplines Ticker & Scroll Continuum */}
      <div className="relative z-10 w-full border-t border-beige/60 bg-cream/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Horizontal Interactive Discipline Strip */}
          <div className="w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-none flex items-center gap-2 sm:gap-4 text-xs font-mono">
            <span className="text-[10px] uppercase tracking-widest text-olive font-bold px-2 whitespace-nowrap">
              Disciplines:
            </span>
            
            {DISCIPLINES_TICKER.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="group px-3 py-1.5 rounded bg-white/70 hover:bg-emerald hover:text-cream border border-beige/60 hover:border-emerald transition-all duration-200 whitespace-nowrap flex items-center gap-2 text-charcoal shadow-subtle"
              >
                <span className="text-olive group-hover:text-beige text-[10px] font-bold">
                  {item.number}
                </span>
                <span className="text-xs group-hover:text-white font-medium">
                  {item.label}
                </span>
                <ArrowUpRight className="w-3 h-3 text-beige-dark group-hover:text-beige opacity-60 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>

          {/* Editorial Scroll Continuum Indicator */}
          <a
            href="#intent-search"
            className="hidden lg:inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-charcoal/70 hover:text-emerald transition group py-1"
            title="Scroll to explore creative services search"
          >
            <span>Scroll To Enter Atelier</span>
            <span className="p-1.5 rounded-full bg-white border border-beige/80 text-emerald group-hover:translate-y-0.5 transition-transform shadow-subtle">
              <ChevronDown className="w-3 h-3" />
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}
