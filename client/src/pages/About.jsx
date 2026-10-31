import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { ArrowUpRight, Compass, Sparkles, Shield, HeartHandshake } from 'lucide-react';

export default function About() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About HUNAR Creative Studio',
    url: 'https://hunarstudio.com/about',
    description: 'Learn about the philosophy, craftsmanship, and multidisciplinary artists behind HUNAR Creative Studio.',
  };

  return (
    <>
      <SEO
        title="About Us — Philosophy & Atelier Craftsmanship | HUNAR"
        description="Discover the philosophy, artistic craftsmanship, and cross-disciplinary expertise driving HUNAR Creative Studio. From tactile canvas to digital architecture."
        canonicalUrl="/about"
        schema={aboutSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: 'About the Studio' }]} />
      </div>

      {/* Hero Header */}
      <section className="pt-10 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="editorial-eyebrow">The Atelier</span>
              {/* Explicit H1 */}
              <h1 className="mt-3 font-serif text-3xl sm:text-5xl lg:text-6xl text-emerald font-normal leading-tight">
                An atelier rooted in material honesty, artistic depth, and thoughtful precision.
              </h1>
              <p className="mt-6 text-base sm:text-lg text-charcoal/80 leading-relaxed font-light">
                HUNAR was born out of a desire to bridge the divide between authentic tactile art practices and contemporary digital communication. We believe that true luxury lies in originality, patience, and bespoke care.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded overflow-hidden shadow-card border border-beige aspect-[4/3] bg-cream-dark">
                <img
                  src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80"
                  alt="HUNAR Studio Atelier Artists at Work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 bg-sage/15 border-y border-beige/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-6 text-charcoal/80 text-sm sm:text-base leading-relaxed font-light">
              <h2 className="font-serif text-3xl text-emerald font-medium">
                The Confluence of Canvas & Code
              </h2>
              <p>
                In classical art traditions, "Hunar" signifies mastery, skill, and creative virtue. Our studio operates as a laboratory where traditional painters, typographic purists, and senior software engineers collaborate side-by-side.
              </p>
              <p>
                When we build a digital brand identity, we do not begin with template libraries or sterile vector kits. We explore tactile textures, pigment swatches, and physical archival references. When we execute monumental murals or custom canvas commissions, we apply rigorous spatial planning and architectural foresight.
              </p>
            </div>

            <div className="space-y-6 text-charcoal/80 text-sm sm:text-base leading-relaxed font-light">
              <h2 className="font-serif text-3xl text-emerald font-medium">
                Our Delivery Principles
              </h2>
              <p>
                As outlined in our Studio Catalogue, we follow six core delivery principles: Capability First, Clear Scope, Transparent Pricing, Rights & Permissions, Professional Handover, and Dedicated Quality & Communication.
              </p>
              <p>
                Every project accepted into our atelier receives personal creative direction from our founding practitioners. We maintain a deliberately focused client roster to ensure unhurried, museum-grade execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Pillars */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="editorial-eyebrow">Studio Tenets</span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-emerald font-normal">
              Principles Guiding Our Studio
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-beige/70 rounded shadow-card">
              <div className="p-3 bg-emerald/10 w-fit rounded text-emerald mb-5 border border-emerald/20">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-emerald font-medium mb-2">Editorial Restraint</h3>
              <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                We believe that clarity is the highest form of sophistication. We eliminate visual clutter to give ideas and artwork the physical and visual breathing room they deserve.
              </p>
            </div>

            <div className="p-8 bg-white border border-beige/70 rounded shadow-card">
              <div className="p-3 bg-emerald/10 w-fit rounded text-emerald mb-5 border border-emerald/20">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-emerald font-medium mb-2">Material Integrity</h3>
              <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                Whether sourcing raw Belgian linen for an oil commission or specifying high-grade archival cotton rag for art editions, our materials are selected for archival permanence.
              </p>
            </div>

            <div className="p-8 bg-white border border-beige/70 rounded shadow-card">
              <div className="p-3 bg-emerald/10 w-fit rounded text-emerald mb-5 border border-emerald/20">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-emerald font-medium mb-2">Direct Collaboration</h3>
              <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                You work directly with the artists and engineers executing your work. No detached layers of account managers, miscommunication, or hollow promises.
              </p>
            </div>
          </div>

          <div className="mt-16 p-8 bg-white border border-beige/70 rounded text-center max-w-3xl mx-auto shadow-card">
            <h3 className="font-serif text-2xl text-emerald font-medium">
              Explore Our Complete Services Catalogue
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-charcoal/70 font-light">
              Discover how our atelier approaches custom art, branding, web engineering, and commercial murals.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-emerald hover:bg-emerald-dark text-cream text-xs uppercase tracking-widest font-semibold rounded transition shadow-sm hover:shadow-emerald"
              >
                Services Overview
                <ArrowUpRight className="w-3.5 h-3.5 text-beige" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-1.5 px-6 py-2.5 border border-charcoal/30 hover:border-emerald text-charcoal hover:text-emerald text-xs uppercase tracking-widest font-semibold rounded transition"
              >
                View Works Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
