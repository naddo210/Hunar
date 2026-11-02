import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import EnquiryForm from '../../components/EnquiryForm';
import ProjectGallery from '../../components/ProjectGallery';
import { SUB_SERVICES } from '../../data/servicesCatalogue';
import { ArrowUpRight } from 'lucide-react';

const SUB_KEYS = [
  'wall-murals',
  'office-art-installations',
  'interior-art-styling',
  'resin-sculptural-installations',
  'branded-wall-art',
  'event-backdrops-live-art',
  'corporate-art-gifting',
];

const GALLERY = [
  {
    url: '/portfolio/murals/staircase-monstera-botanical-mural.webp',
    caption: 'Botanical Ascent Staircase Mural (16ft × 20ft)',
    tag: 'Interior Mural',
    alt: 'Interior wall mural painting of tropical monstera leaves and warm terracotta shapes along a wooden staircase'
  },
  {
    url: '/portfolio/murals/rural-village-landscape-panoramic-mural.webp',
    caption: 'Echoes of the Countryside Panoramic Boundary Mural (30ft × 8ft)',
    tag: 'Exterior Mural',
    alt: 'Panoramic outdoor wall mural of rural village cottages, green hills, and palm trees on a concrete boundary wall'
  },
  {
    url: '/portfolio/stage-design/sir-jj-applied-art-winged-stage-finished.webp',
    caption: 'Sir J.J. Applied Art 88th Annual Exhibition Sculptural Stage (40ft × 20ft)',
    tag: 'Stage Set',
    alt: 'Monumental architectural stage design with sculpted angel wings and fluted arches at Sir JJ Institute of Applied Art'
  },
  {
    url: '/portfolio/glass-painting/holiday-reindeer-christmas-window-painting.webp',
    caption: 'Noël Woodland Holiday Storefront Window Display',
    tag: 'Glass Art',
    alt: 'Hand-painted Christmas window art on glass entrance featuring white reindeer stags, Christmas tree, and snow'
  },
  {
    url: '/portfolio/glass-painting/ganesh-chaturthi-showroom-glass-painting.webp',
    caption: 'Lord Ganesha Festive Showroom Glass Installation (20ft × 10ft)',
    tag: 'Showroom Glass',
    alt: 'Hand-painted Lord Ganesha festival artwork on glass showroom facade with traditional Indian musicians and dhol'
  },
  {
    url: '/portfolio/installations/independence-day-76th-mixed-media-installation.webp',
    caption: '76th Swatantrya Din Assemblage Art Installation',
    tag: 'Installation',
    alt: '3D commemorative art installation for India 76th Independence Day with Ashoka pillar sculpture and newspaper collage'
  },
];

export default function MuralsService() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Murals, Interior Art & Commercial Projects',
    provider: {
      '@type': 'Organization',
      name: 'HUNAR Creative Studio',
      url: 'https://hunarstudio.com',
    },
    areaServed: 'Worldwide',
    description: 'Artwork and creative installations designed for physical spaces, hospitality environments, corporate offices and cultural events.',
  };

  const subServiceItems = SUB_KEYS.map((k) => SUB_SERVICES[k]).filter(Boolean);

  return (
    <>
      <SEO
        title="Murals, Interior Art & Commercial Projects — Architectural Installations | HUNAR"
        description="Hand-painted architectural wall murals, commercial glass painting, stage designs, and spatial art features by HUNAR Creative Studio."
        canonicalUrl="/services/murals-commercial-art"
        schema={serviceSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs
          items={[
            { label: 'Services', href: '/services' },
            { label: 'Murals, Interior Art & Commercial Projects' },
          ]}
        />
      </div>

      <section className="pt-10 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="editorial-eyebrow">Service Division 06</span>
              <h1 className="mt-3 font-serif text-3xl sm:text-5xl lg:text-6xl text-emerald font-normal leading-[1.15]">
                Murals, Interior Art & Commercial Projects
              </h1>
              <p className="mt-6 text-base sm:text-lg text-charcoal/80 leading-relaxed font-light max-w-2xl">
                For homeowners, cafes, offices, restaurants, hotels and designers. Artwork and creative installations designed for physical spaces, events and business environments, marrying mineral pigments with structural engineering.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#offerings"
                  className="px-6 py-3 bg-emerald hover:bg-emerald-dark text-cream text-xs uppercase tracking-widest font-semibold rounded transition shadow-sm hover:shadow-emerald inline-flex items-center gap-2"
                >
                  View Spatial Disciplines
                  <ArrowUpRight className="w-3.5 h-3.5 text-beige" />
                </a>
                <a
                  href="#inquiry"
                  className="px-6 py-3 border border-charcoal/30 hover:border-emerald text-charcoal hover:text-emerald text-xs uppercase tracking-widest font-semibold rounded transition"
                >
                  Commission Site Survey
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded overflow-hidden shadow-card border border-beige aspect-[4/3] bg-cream-dark">
                <img
                  src="/portfolio/murals/staircase-monstera-botanical-mural.webp"
                  alt="Interior wall mural painting of tropical monstera leaves along a wooden staircase"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Directory */}
      <section id="offerings" className="py-20 bg-sage/15 border-y border-beige/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="editorial-eyebrow">Spatial Disciplines</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-emerald font-medium mt-2">
              Spaces Transformed by Hand
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-charcoal/70 font-light">
              From hand-painted interior murals to glass art, stage designs, and corporate installations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subServiceItems.map((sub) => (
              <article
                key={sub.slug}
                className="p-6 bg-white border border-beige/70 rounded shadow-card hover:border-emerald/70 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/10] bg-cream-dark rounded overflow-hidden mb-4 border border-beige/40">
                    <img
                      src={sub.heroImage}
                      alt={sub.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-emerald font-medium group-hover:text-olive transition-colors">
                    {sub.title}
                  </h3>
                  <p className="mt-2 text-xs text-charcoal/70 leading-relaxed font-light">
                    {sub.summary}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-beige/40">
                  <Link
                    to={`/services/murals-commercial-art/${sub.slug}`}
                    className="text-xs uppercase tracking-wider font-semibold text-emerald inline-flex items-center gap-1 hover:text-olive"
                  >
                    View Specs & Inquire <ArrowUpRight className="w-3.5 h-3.5 text-olive" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <ProjectGallery images={GALLERY} title="Spatial & Theatrical Installations" />

      {/* Enquiry Form */}
      <section id="inquiry" className="py-24 bg-cream border-t border-beige/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm
            defaultService="murals"
            formId="form_service_murals"
            title="Inquire on Mural or Commercial Art"
            subtitle="Tell us about your physical space, surface dimensions, and creative theme."
          />
        </div>
      </section>
    </>
  );
}
