import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { DIVISIONS } from '../data/servicesCatalogue';
import { ArrowUpRight } from 'lucide-react';

export default function Services() {
  const divisionsList = Object.values(DIVISIONS);

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
        title="Creative Service Divisions & Atelier Capabilities — HUNAR"
        description="Explore the seven core creative divisions of HUNAR Creative Studio: Custom Art, Original Art, Branding, Web Development, Digital Content, Murals, and Creative Products."
        canonicalUrl="/services"
        schema={servicesSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: 'Services Catalogue' }]} />
      </div>

      <section className="pt-10 pb-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="editorial-eyebrow">Creative Services Catalogue</span>
            <h1 className="mt-3 font-serif text-3xl sm:text-5xl lg:text-6xl text-emerald font-normal leading-tight">
              Seven Divisions. One Dedicated Atelier.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-charcoal/80 leading-relaxed font-light">
              Bringing traditional fine art, custom commissions, brand design, website engineering, digital assets, and commercial art projects together under one unified studio practice.
            </p>
          </div>

          <div className="space-y-12">
            {divisionsList.map((division) => (
              <article
                key={division.id}
                className="p-8 sm:p-12 bg-white border border-beige/70 rounded shadow-card hover:border-emerald/70 transition-all flex flex-col lg:flex-row items-center gap-8 lg:gap-12 group"
              >
                <div className="w-full lg:w-5/12 aspect-[16/10] bg-cream-dark rounded overflow-hidden border border-beige/60 flex-shrink-0">
                  <img
                    src={division.heroImage}
                    alt={division.title}
                    loading="lazy"
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

                    <h2 className="font-serif text-2xl sm:text-4xl text-emerald font-medium group-hover:text-olive transition-colors">
                      {division.title}
                    </h2>

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
          <div className="mt-16 p-8 sm:p-10 bg-white border border-beige/70 rounded flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-card">
            <div>
              <span className="editorial-eyebrow">Studio Education</span>
              <h3 className="font-serif text-2xl sm:text-3xl text-emerald font-medium mt-1">
                Online Fine Art Masterclasses & Mentorship
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-charcoal/70 max-w-xl font-light">
                Preparing for launch in late 2026. Explore our upcoming curriculum or register for priority early-access notification.
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
