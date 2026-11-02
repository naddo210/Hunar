import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  ArrowUpRight, 
  Sparkles, 
  Palette, 
  Paintbrush, 
  Layers, 
  Calendar, 
  Phone, 
  Mail, 
  Lock 
} from 'lucide-react';
import { DIVISIONS } from '../data/servicesCatalogue';

const SPECIALIST_SERVICES = [
  { label: 'Commercial Glass Painting', path: '/services/murals-commercial-art/commercial-glass-painting', tag: 'Storefront & Facades' },
  { label: 'Resin Art & Spatial Objects', path: '/services/art-products/resin-art', tag: 'Handcrafted Resin' },
  { label: 'Event Stages & Set Fabrication', path: '/services/murals-commercial-art/theatrical-stage-design', tag: 'Events & Sets' },
  { label: 'Live Wedding Painting & Caricature', path: '/services/custom-art/live-wedding-painting-caricature', tag: 'Live Event Art' },
  { label: 'Live Tattoos & Face Painting', path: '/services/murals-commercial-art/event-tattoos-face-painting', tag: 'Corporate & Fan Art' },
  { label: 'Fine Art Calligraphy & Manuscripts', path: '/services/custom-art/calligraphy-services', tag: 'Devanagari & English' },
  { label: 'Advertising Campaigns & Direction', path: '/services/branding-design/advertising-campaigns', tag: 'National Campaigns' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDivisionsOpen, setMobileDivisionsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const divisionsList = Object.values(DIVISIONS);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDivisionsOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-md border-b border-beige/50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Clickable Logo */}
        <Link to="/" className="flex flex-col group" aria-label="HUNAR Creative Studio Home">
          <span className="font-serif text-2xl sm:text-3xl tracking-wide text-emerald group-hover:text-olive transition-colors font-medium">
            HUNAR
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-charcoal/70 font-sans -mt-1 font-medium">
            Creative Studio
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs uppercase tracking-widest font-medium text-charcoal/80">
          <Link
            to="/about"
            className={`hover:text-emerald transition ${location.pathname === '/about' ? 'text-emerald font-bold border-b-2 border-emerald pb-0.5' : ''}`}
          >
            About
          </Link>

          <Link
            to="/portfolio"
            className={`inline-flex items-center gap-1.5 hover:text-emerald transition ${location.pathname === '/portfolio' ? 'text-emerald font-bold border-b-2 border-emerald pb-0.5' : ''}`}
          >
            Our Work
            <span className="text-[10px] font-mono px-1.5 py-0.2 bg-emerald/10 text-emerald rounded font-bold">
              95+
            </span>
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <Link
              to="/services"
              className={`inline-flex items-center gap-1 hover:text-emerald transition ${location.pathname.startsWith('/services') ? 'text-emerald font-bold border-b-2 border-emerald pb-0.5' : ''}`}
            >
              Services
              <ChevronDown className="w-3.5 h-3.5 text-beige-dark transition-transform group-hover:rotate-180" />
            </Link>

            {servicesDropdownOpen && (
              <div className="absolute left-0 mt-2 w-96 bg-white border border-beige/60 shadow-elevated rounded-lg py-3 z-50 animate-fadeIn">
                <div className="px-4 pb-2 border-b border-beige/40 flex items-center justify-between">
                  <Link
                    to="/services"
                    className="text-[11px] font-bold text-emerald uppercase tracking-wider hover:text-olive"
                  >
                    View All 7 Divisions Catalogue →
                  </Link>
                  <span className="text-[10px] font-mono text-charcoal/50">56 Offerings</span>
                </div>

                <div className="max-h-[60vh] overflow-y-auto divide-y divide-beige/30 py-1">
                  {divisionsList.map((division) => (
                    <Link
                      key={division.id}
                      to={division.path}
                      className="block px-4 py-2.5 text-xs normal-case tracking-normal text-charcoal hover:text-emerald hover:bg-cream/40 transition group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-emerald group-hover:text-olive transition-colors">
                          {division.title}
                        </span>
                        <ChevronRight className="w-3 h-3 text-beige-dark opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-[11px] text-charcoal/60 block line-clamp-1 mt-0.5">
                        {division.tagline}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Popular Specialities in Dropdown Footer */}
                <div className="px-4 pt-2.5 mt-1 border-t border-beige/40 bg-cream/30 rounded-b-lg">
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-olive mb-1.5">
                    Popular Inquiries
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <Link
                      to="/services/art-products/resin-art"
                      className="text-[10px] px-2 py-0.5 bg-white border border-beige rounded text-charcoal hover:text-emerald hover:border-emerald transition"
                    >
                      Resin Art
                    </Link>
                    <Link
                      to="/services/murals-commercial-art/commercial-glass-painting"
                      className="text-[10px] px-2 py-0.5 bg-white border border-beige rounded text-charcoal hover:text-emerald hover:border-emerald transition"
                    >
                      Glass Painting
                    </Link>
                    <Link
                      to="/services/murals-commercial-art/theatrical-stage-design"
                      className="text-[10px] px-2 py-0.5 bg-white border border-beige rounded text-charcoal hover:text-emerald hover:border-emerald transition"
                    >
                      Stage & Events
                    </Link>
                    <Link
                      to="/services/custom-art/live-wedding-painting-caricature"
                      className="text-[10px] px-2 py-0.5 bg-white border border-beige rounded text-charcoal hover:text-emerald hover:border-emerald transition"
                    >
                      Wedding Art
                    </Link>
                    <Link
                      to="/services/custom-art/calligraphy-services"
                      className="text-[10px] px-2 py-0.5 bg-white border border-beige rounded text-charcoal hover:text-emerald hover:border-emerald transition"
                    >
                      Calligraphy
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/art-classes"
            className={`inline-flex items-center gap-1.5 hover:text-emerald transition ${location.pathname === '/art-classes' ? 'text-emerald font-bold border-b-2 border-emerald pb-0.5' : ''}`}
          >
            Art Classes
            <span className="text-[9px] uppercase px-1.5 py-0.5 bg-olive/15 text-olive rounded font-semibold tracking-wider">
              Waitlist
            </span>
          </Link>

          <Link
            to="/faq"
            className={`hover:text-emerald transition ${location.pathname === '/faq' ? 'text-emerald font-bold border-b-2 border-emerald pb-0.5' : ''}`}
          >
            FAQ
          </Link>

          <Link
            to="/contact"
            className={`hover:text-emerald transition ${location.pathname === '/contact' ? 'text-emerald font-bold border-b-2 border-emerald pb-0.5' : ''}`}
          >
            Contact
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold px-5 py-2.5 bg-emerald text-cream hover:bg-emerald-dark rounded transition shadow-sm hover:shadow-emerald"
          >
            Initiate Project
            <ArrowUpRight className="w-3.5 h-3.5 text-beige" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-charcoal hover:text-emerald rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald/40 transition"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-emerald" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Luxury Redesigned Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-50 flex flex-col bg-cream-pure/98 backdrop-blur-lg border-t border-beige/60 overflow-hidden animate-fadeIn">
          {/* Scrollable Container */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-7">
            
            {/* Quick Action Top Bar */}
            <div className="p-3 bg-white border border-beige/70 rounded-lg shadow-sm flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-olive font-semibold block">
                  Studio Atelier
                </span>
                <p className="font-serif text-sm text-emerald font-medium">Bespoke Commissions & Projects</p>
              </div>
              <Link
                to="/contact"
                className="px-3 py-1.5 bg-emerald text-cream text-[11px] uppercase tracking-wider font-semibold rounded hover:bg-emerald-dark transition flex items-center gap-1"
              >
                Inquire
                <ArrowUpRight className="w-3 h-3 text-beige" />
              </Link>
            </div>

            {/* Core Navigation Links */}
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal/50 font-semibold block px-1 mb-2">
                Navigation
              </span>
              
              <Link
                to="/"
                className={`flex items-center justify-between py-2.5 px-3 rounded-md transition ${location.pathname === '/' ? 'bg-emerald text-cream font-medium' : 'text-charcoal hover:bg-white hover:text-emerald'}`}
              >
                <span className="font-serif text-lg">Home</span>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </Link>

              <Link
                to="/about"
                className={`flex items-center justify-between py-2.5 px-3 rounded-md transition ${location.pathname === '/about' ? 'bg-emerald text-cream font-medium' : 'text-charcoal hover:bg-white hover:text-emerald'}`}
              >
                <span className="font-serif text-lg">About the Atelier</span>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </Link>

              <Link
                to="/portfolio"
                className={`flex items-center justify-between py-2.5 px-3 rounded-md transition ${location.pathname === '/portfolio' ? 'bg-emerald text-cream font-medium' : 'text-charcoal hover:bg-white hover:text-emerald'}`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-serif text-lg">Selected Works</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 bg-olive/20 text-olive rounded font-bold">
                    95 Works
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </Link>

              <Link
                to="/services"
                className={`flex items-center justify-between py-2.5 px-3 rounded-md transition ${location.pathname === '/services' ? 'bg-emerald text-cream font-medium' : 'text-charcoal hover:bg-white hover:text-emerald'}`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-serif text-lg">All Services Overview</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 bg-emerald/10 text-emerald rounded font-bold">
                    7 Divisions
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </Link>

              <Link
                to="/art-classes"
                className={`flex items-center justify-between py-2.5 px-3 rounded-md transition ${location.pathname === '/art-classes' ? 'bg-emerald text-cream font-medium' : 'text-charcoal hover:bg-white hover:text-emerald'}`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-serif text-lg">Online Art Classes</span>
                  <span className="text-[9px] uppercase px-1.5 py-0.5 bg-olive text-cream rounded font-semibold tracking-wider">
                    Waitlist
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </Link>

              <Link
                to="/faq"
                className={`flex items-center justify-between py-2.5 px-3 rounded-md transition ${location.pathname === '/faq' ? 'bg-emerald text-cream font-medium' : 'text-charcoal hover:bg-white hover:text-emerald'}`}
              >
                <span className="font-serif text-lg">FAQ & Process</span>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </Link>

              <Link
                to="/contact"
                className={`flex items-center justify-between py-2.5 px-3 rounded-md transition ${location.pathname === '/contact' ? 'bg-emerald text-cream font-medium' : 'text-charcoal hover:bg-white hover:text-emerald'}`}
              >
                <span className="font-serif text-lg">Contact & Inquiries</span>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </Link>
            </div>

            {/* In-Demand Specialist Services Section */}
            <div className="p-4 bg-white border border-beige/80 rounded-lg shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-mono tracking-widest text-emerald font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-olive" />
                  Specialist & In-Demand Disciplines
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {SPECIALIST_SERVICES.map((s, idx) => (
                  <Link
                    key={idx}
                    to={s.path}
                    className="p-2.5 rounded border border-beige/60 bg-cream/40 hover:bg-emerald hover:text-cream hover:border-emerald transition group flex flex-col justify-between"
                  >
                    <span className="text-xs font-semibold text-emerald group-hover:text-cream leading-tight">
                      {s.label}
                    </span>
                    <span className="text-[10px] text-charcoal/60 group-hover:text-beige mt-1">
                      {s.tag}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Expandable 7 Divisions Accordion */}
            <div className="border border-beige/70 rounded-lg bg-white overflow-hidden shadow-sm">
              <button
                onClick={() => setMobileDivisionsOpen(!mobileDivisionsOpen)}
                className="w-full flex items-center justify-between p-3.5 text-left bg-cream/30 hover:bg-cream/60 transition"
              >
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-emerald block">
                    Browse All 7 Divisions
                  </span>
                  <span className="text-[11px] text-charcoal/60">
                    Comprehensive studio service catalogue
                  </span>
                </div>
                <ChevronDown className={`w-4 h-4 text-emerald transition-transform ${mobileDivisionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileDivisionsOpen && (
                <div className="p-2 divide-y divide-beige/40">
                  {divisionsList.map((div) => (
                    <Link
                      key={div.id}
                      to={div.path}
                      className="block p-2.5 text-xs text-charcoal hover:text-emerald hover:bg-cream/40 rounded transition"
                    >
                      <span className="font-semibold block text-emerald">{div.title}</span>
                      <span className="text-[11px] text-charcoal/60 block line-clamp-1">{div.tagline}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact quick touchpoints */}
            <div className="pt-2 text-xs text-charcoal/70 space-y-2 border-t border-beige/60">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-olive flex-shrink-0" />
                <a href="mailto:inquiries@hunarstudio.com" className="hover:text-emerald">inquiries@hunarstudio.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-olive flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-emerald">+91 98765 43210</a>
              </div>
            </div>
          </div>

          {/* Sticky Mobile Drawer Footer */}
          <div className="p-4 bg-white border-t border-beige/70 space-y-2 shadow-lg">
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-emerald hover:bg-emerald-dark text-cream font-sans text-xs uppercase tracking-widest font-semibold rounded-md shadow-md transition"
            >
              Initiate Studio Commission
              <ArrowUpRight className="w-4 h-4 text-beige" />
            </Link>

            <div className="flex items-center justify-between text-[11px] text-charcoal/60 px-1 pt-1">
              <span>Bengaluru & New Delhi</span>
              <Link to="/admin/login" className="inline-flex items-center gap-1 hover:text-emerald text-[11px]">
                <Lock className="w-3 h-3 text-beige-dark" />
                <span>Admin Login</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
