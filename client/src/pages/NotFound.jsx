import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ArrowLeft, Compass, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 — Page Not Found | HUNAR Creative Studio"
        description="The requested page could not be located in our studio archive."
      />

      <section className="min-h-[70vh] flex items-center justify-center py-24 bg-cream px-4">
        <div className="max-w-xl text-center space-y-6">
          <span className="editorial-eyebrow">Error 404</span>
          <h1 className="font-serif text-5xl sm:text-7xl text-emerald font-normal leading-tight">
            Lost in the Atelier
          </h1>
          <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed font-light">
            The page or artwork link you followed does not exist or has been archived. You can navigate back to our main disciplines or return to the studio overview.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald hover:bg-emerald-dark text-cream text-xs uppercase tracking-widest font-semibold rounded transition shadow-sm hover:shadow-emerald"
            >
              <Home className="w-3.5 h-3.5 text-beige" />
              Return Home
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-charcoal/30 hover:border-emerald text-charcoal hover:text-emerald text-xs uppercase tracking-widest font-semibold rounded transition"
            >
              <Compass className="w-3.5 h-3.5 text-olive" />
              Explore Disciplines
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

