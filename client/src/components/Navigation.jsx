import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { DIVISIONS } from '../data/servicesCatalogue';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const divisionsList = Object.values(DIVISIONS);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
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
            className={`hover:text-emerald transition ${location.pathname === '/portfolio' ? 'text-emerald font-bold border-b-2 border-emerald pb-0.5' : ''}`}
          >
            Our Work
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
              <ChevronDown className="w-3.5 h-3.5 text-beige-dark" />
            </Link>

            {servicesDropdownOpen && (
              <div className="absolute left-0 mt-2 w-80 bg-white border border-beige/60 shadow-elevated rounded py-2 z-50">
                <div className="px-4 py-2 border-b border-beige/40">
                  <Link
                    to="/services"
                    className="text-[11px] font-bold text-emerald uppercase tracking-wider block hover:text-olive"
                  >
                    View All 7 Divisions Catalogue →
                  </Link>
                </div>
                {divisionsList.map((division) => (
                  <Link
                    key={division.id}
                    to={division.path}
                    className="block px-4 py-2.5 text-xs normal-case tracking-normal text-charcoal hover:text-emerald hover:bg-cream/40 transition"
                  >
                    <span className="font-semibold block text-emerald">{division.title}</span>
                    <span className="text-[11px] text-charcoal/60 block line-clamp-1">{division.tagline}</span>
                  </Link>
                ))}
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
            className="p-2 text-charcoal hover:text-emerald rounded focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-cream z-50 overflow-y-auto px-6 py-8 flex flex-col justify-between border-t border-beige/60">
          <div className="space-y-6">
            <Link
              to="/about"
              className="block font-serif text-2xl text-emerald hover:text-olive transition"
            >
              About Studio
            </Link>

            <Link
              to="/portfolio"
              className="block font-serif text-2xl text-emerald hover:text-olive transition"
            >
              Selected Works & Portfolio
            </Link>

            <div>
              <Link
                to="/services"
                className="block font-serif text-2xl text-emerald hover:text-olive transition mb-2"
              >
                Services Divisions
              </Link>
              <div className="pl-4 space-y-2 border-l border-beige mt-2">
                {divisionsList.map((division) => (
                  <Link
                    key={division.id}
                    to={division.path}
                    className="block text-sm text-charcoal hover:text-emerald py-1"
                  >
                    {division.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/art-classes"
              className="flex items-center gap-2 font-serif text-2xl text-emerald hover:text-olive transition"
            >
              Online Art Classes
              <span className="text-[10px] uppercase font-sans px-2 py-0.5 bg-olive/15 text-olive rounded font-semibold">
                Waitlist
              </span>
            </Link>

            <Link
              to="/faq"
              className="block font-serif text-2xl text-emerald hover:text-olive transition"
            >
              FAQ & Atelier Process
            </Link>

            <Link
              to="/contact"
              className="block font-serif text-2xl text-emerald hover:text-olive transition"
            >
              Contact Atelier
            </Link>
          </div>

          <div className="pt-8 border-t border-beige/60 space-y-4">
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-emerald text-cream font-sans text-xs uppercase tracking-widest font-semibold rounded shadow-sm"
            >
              Commission an Artwork / Project
              <ArrowUpRight className="w-4 h-4 text-beige" />
            </Link>
            <div className="text-center text-xs text-charcoal/60">
              <Link to="/admin/login" className="hover:text-emerald">
                Studio Director CRM Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
