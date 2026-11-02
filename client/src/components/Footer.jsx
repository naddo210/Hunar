import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Lock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald text-cream/90 pt-16 pb-12 border-t border-beige/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-dark">
          {/* Brand Manifesto */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group">
              <span className="font-serif text-3xl tracking-wide text-cream group-hover:text-beige transition font-medium">
                HUNAR
              </span>
              <span className="block text-[10px] tracking-[0.25em] uppercase text-sage font-sans -mt-1 font-medium">
                Creative Studio
              </span>
            </Link>
            <p className="text-xs text-cream/80 max-w-sm leading-relaxed font-light">
              A multi-service creative business bringing traditional art, custom commissions, brand design, website creation, digital assets and commercial art projects together under one professional service offering.
            </p>
            <div className="pt-2 flex flex-col space-y-2 text-xs text-cream/80">
              <a
                href="mailto:inquiries@hunarstudio.com"
                className="inline-flex items-center gap-2 hover:text-beige transition"
              >
                <Mail className="w-3.5 h-3.5 text-beige" />
                <span>inquiries@hunarstudio.com</span>
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 hover:text-beige transition"
              >
                <Phone className="w-3.5 h-3.5 text-beige" />
                <span>+91 98765 43210</span>
              </a>
              <div className="inline-flex items-center gap-2 text-cream/70">
                <MapPin className="w-3.5 h-3.5 text-beige" />
                <span>Bengaluru & New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Service Divisions */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-beige font-semibold mb-4">
              Service Divisions
            </h4>
            <ul className="space-y-2.5 text-xs text-cream/80 font-light">
              <li>
                <Link to="/services/custom-art" className="hover:text-white transition">
                  Custom Art & Commissions
                </Link>
              </li>
              <li>
                <Link to="/services/art-products" className="hover:text-white transition">
                  Original Art & Products
                </Link>
              </li>
              <li>
                <Link to="/services/branding-design" className="hover:text-white transition">
                  Branding & Visual Identity
                </Link>
              </li>
              <li>
                <Link to="/services/website-development" className="hover:text-white transition">
                  Website Design & Development
                </Link>
              </li>
              <li>
                <Link to="/services/digital-content" className="hover:text-white transition">
                  Digital Content & Motion
                </Link>
              </li>
              <li>
                <Link to="/services/murals-commercial-art" className="hover:text-white transition">
                  Murals & Commercial Projects
                </Link>
              </li>
              <li>
                <Link to="/services/creative-products" className="hover:text-white transition">
                  Creative Products & Digital Assets
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialist Offerings */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-beige font-semibold mb-4">
              Specialist Offerings
            </h4>
            <ul className="space-y-2.5 text-xs text-cream/80 font-light">
              <li>
                <Link to="/services/custom-art/calligraphy-services" className="hover:text-white transition">
                  Fine Art Calligraphy
                </Link>
              </li>
              <li>
                <Link to="/services/murals-commercial-art/commercial-glass-painting" className="hover:text-white transition">
                  Commercial Glass Painting
                </Link>
              </li>
              <li>
                <Link to="/services/custom-art/live-wedding-painting-caricature" className="hover:text-white transition">
                  Live Wedding Painting & Caricature
                </Link>
              </li>
              <li>
                <Link to="/services/murals-commercial-art/event-tattoos-face-painting" className="hover:text-white transition">
                  Live Tattoos & Face Painting
                </Link>
              </li>
              <li>
                <Link to="/services/branding-design/advertising-campaigns" className="hover:text-white transition">
                  Advertising & Brand Campaigns
                </Link>
              </li>
              <li>
                <Link to="/services/murals-commercial-art/theatrical-stage-design" className="hover:text-white transition">
                  Stage Sets & Exhibition Fabrication
                </Link>
              </li>
            </ul>
          </div>

          {/* Atelier & Governance */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-beige font-semibold mb-4">
              Atelier & Info
            </h4>
            <ul className="space-y-2.5 text-xs text-cream/80 font-light">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About the Studio
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link to="/art-classes" className="inline-flex items-center gap-1.5 hover:text-white transition">
                  <span>Online Art Classes</span>
                  <span className="text-[9px] uppercase px-1.5 py-0.5 bg-olive text-cream rounded font-semibold">
                    Waitlist
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact & Inquiries
                </Link>
              </li>
              <li className="pt-2 border-t border-emerald-dark">
                <Link to="/privacy" className="hover:text-white transition text-[11px] text-cream/60">
                  Privacy Policy
                </Link>
                <span className="text-cream/40 mx-1.5">·</span>
                <Link to="/terms" className="hover:text-white transition text-[11px] text-cream/60">
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/login"
                  className="inline-flex items-center gap-1.5 text-cream/60 hover:text-beige transition text-[11px]"
                >
                  <Lock className="w-3 h-3 text-beige" />
                  <span>Admin CRM Portal</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/70 gap-4">
          <p>© {currentYear} HUNAR Creative Studio. All rights reserved.</p>
          <p className="text-[11px] text-cream/60 font-light">
            Designed with editorial elegance & artistic authenticity.
          </p>
        </div>
      </div>
    </footer>
  );
}
