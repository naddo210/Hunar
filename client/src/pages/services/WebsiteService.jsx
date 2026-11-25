import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import EnquiryForm from '../../components/EnquiryForm';
import { SUB_SERVICES } from '../../data/servicesCatalogue';
import { ArrowUpRight, ExternalLink, Github, Globe, Sparkles } from 'lucide-react';

const SUB_KEYS = [
  'business-websites',
  'portfolio-websites',
  'ecommerce-websites',
  'landing-pages',
  'agency-websites',
  'website-redesign',
];

const LIVE_PROJECTS = [
  {
    id: 'the-nadeems-gourmet-ordering-web',
    title: 'The Nadeems — Gourmet Food Ordering & Delivery Platform',
    categoryLabel: 'Full-Stack Ecommerce Web App',
    image: '/portfolio/web-design/the-nadeems-gourmet-ordering-web.webp',
    alt: 'Gourmet restaurant website design for The Nadeems with online food ordering and culinary storytelling',
    tag: 'Live Ecommerce',
    description: 'Comprehensive full-stack food ordering platform featuring interactive digital menus, cart state engine, order tracking, and mobile-first responsive checkout.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    demoLink: 'https://food-res-1frontend1.onrender.com/',
    sourceLink: 'https://github.com/naddo210/nadeemp1',
  },
  {
    id: 'vidtube-video-streaming-platform',
    title: 'VidTube — Video Streaming & Media Discovery Platform',
    categoryLabel: 'Interactive Streaming Web App',
    image: '/portfolio/web-design/vidtube-video-streaming-platform.webp',
    alt: 'VidTube modern video streaming web application interface with responsive video feed and search bar',
    tag: 'Live Web App',
    description: 'Modern video streaming platform with YouTube Data API integration, custom video player controls, category exploration, live search, and channel layouts.',
    technologies: ['React', 'Node.js', 'YouTube API', 'Tailwind CSS'],
    demoLink: 'https://ytclone-ktoy-nbk736dpe-naddo210s-projects.vercel.app/',
    sourceLink: 'https://github.com/naddo210/ytclone',
  },
  {
    id: 'mirza-hajj-umrah-travel-portal',
    title: 'Mirza Hajj & Umrah — Sacred Pilgrimage Tour Portal',
    categoryLabel: 'Travel & Booking Platform',
    image: '/portfolio/web-design/mirza-hajj-umrah-travel-portal.webp',
    alt: 'Travel agency website design for Mirza Hajj and Umrah featuring sacred Kaaba imagery and tour package booking',
    tag: 'Live Booking Portal',
    description: 'Trusted tour agency web portal for Makkah & Madina pilgrimage packages with package itinerary breakdowns, testimonial galleries, and direct lead inquiry automation.',
    technologies: ['React', 'Node.js', 'MongoDB', 'GSAP'],
    demoLink: 'https://www.mirza-hajj-umrah-tours.in/',
    sourceLink: 'https://github.com/naddo210/MirzaT',
  },
  {
    id: 'ah-properties-real-estate-portal',
    title: 'A.H Properties — Commercial & Residential Real Estate',
    categoryLabel: 'Real Estate Business Portal',
    image: '/portfolio/web-design/ah-properties-real-estate-portal.webp',
    alt: 'Real estate company website design for A.H Properties showing luxury hotel suites and property listings',
    tag: 'Live Property Portal',
    description: 'Commercial and residential property discovery website with categorized listings, virtual tour integration, responsive search filters, and direct WhatsApp routing.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    demoLink: 'https://www.ahproperties.in/',
    sourceLink: 'https://github.com/naddo210/property-advisor',
  },
  {
    id: 'greek-automata-techfest-website',
    title: 'Greek Automata — College Techfest Digital Platform',
    categoryLabel: 'Interactive Event Flagship',
    image: '/portfolio/web-design/greek-automata-techfest-website.webp',
    alt: 'Dark modern tech festival website design for Greek Automata with glowing circuit graphics',
    tag: 'Live Techfest Web',
    description: 'High-octane annual college tech festival digital portal with cyberpunk microchip visuals, multi-department competition registries, dynamic schedules, and team registration.',
    technologies: ['React', 'GSAP', 'Tailwind CSS', 'Google Forms'],
    demoLink: 'https://xgreek-automata.vercel.app/',
    sourceLink: '',
  },
  {
    id: 'islamic-quiz-app-portal',
    title: 'Islamic Heritage & Culture Interactive Quiz Platform',
    categoryLabel: 'Educational Web Application',
    image: '/portfolio/web-design/islamic-quiz-app-portal.webp',
    alt: 'Islamic Quiz App web application interface with interactive questions and progress tracking',
    tag: 'Live Web App',
    description: 'Interactive educational web application celebrating Islamic history and architecture with timed quiz modules, instant feedback scoring, and progress tracking.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    demoLink: 'https://islamic-quiz-786m.netlify.app/',
    sourceLink: '',
  },
  {
    id: 'shikha-singh-luxury-model-portfolio',
    title: 'Shikha Singh — High-Fashion Luxury Model Portfolio',
    categoryLabel: 'Luxury Editorial Portfolio',
    image: '/portfolio/web-design/shikha-singh-luxury-model-portfolio.webp',
    alt: 'Luxury model portfolio website design for Shikha Singh featuring runway fashion photography',
    tag: 'Fashion Editorial',
    description: 'Editorial digital flagship for fashion model Shikha Singh with runway video hero, golden typography, lookbook carousels, and high-fashion aesthetic.',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Editorial UI'],
    demoLink: '',
    sourceLink: 'https://github.com/naddo210',
  },
  {
    id: 'nadeem-salmani-portfolio-v1',
    title: 'Nadeem Salmani — Studio Developer Flagship V1',
    categoryLabel: 'Personal Developer Portfolio',
    image: '/portfolio/web-design/nadeem-salmani-portfolio-v1.webp',
    alt: 'Nadeem Salmani personal developer portfolio website homepage showcasing projects and contact section',
    tag: 'Live Portfolio',
    description: 'Clean creative developer portfolio highlighting full-stack project showcases, technical skills matrix, and interactive inquiry form.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    demoLink: 'https://nadeport.netlify.app/',
    sourceLink: '',
  },
];

export default function WebsiteService() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Website Design & Development',
    provider: {
      '@type': 'Organization',
      name: 'HUNAR Creative Studio',
      url: 'https://hunarstudio.com',
    },
    areaServed: 'Worldwide',
    description: 'Web experiences designed to present services, build trust and help customers take action, engineered on high-performance full-stack architectures.',
  };

  const subServiceItems = SUB_KEYS.map((k) => SUB_SERVICES[k]).filter(Boolean);

  return (
    <>
      <SEO
        title="Website Design & Development — Custom MERN Full-Stack Platforms | HUNAR"
        description="Bespoke website design and full-stack development by HUNAR Creative Studio. Business websites, portfolios, ecommerce stores, and high-converting landing pages."
        canonicalUrl="/services/website-development"
        schema={serviceSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs
          items={[
            { label: 'Services', href: '/services' },
            { label: 'Website Design & Development' },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="editorial-eyebrow">Service Division 04</span>
              <h1 className="mt-3 font-serif text-3xl sm:text-5xl lg:text-6xl text-emerald font-normal leading-[1.15]">
                Website Design & Full-Stack Development
              </h1>
              <p className="mt-6 text-base sm:text-lg text-charcoal/80 leading-relaxed font-light max-w-2xl">
                For businesses, professionals, creators and online sellers. Web experiences designed to present services, build trust and help customers take action, engineered on high-performance architectures (React, Node.js, MongoDB, Express, Tailwind) with sub-second load times and mobile-first responsiveness.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#live-projects"
                  className="px-6 py-3 bg-emerald hover:bg-emerald-dark text-cream text-xs uppercase tracking-widest font-semibold rounded transition shadow-sm hover:shadow-emerald inline-flex items-center gap-2"
                >
                  View Live Deployments
                  <ArrowUpRight className="w-3.5 h-3.5 text-beige" />
                </a>
                <a
                  href="#inquiry"
                  className="px-6 py-3 border border-charcoal/30 hover:border-emerald text-charcoal hover:text-emerald text-xs uppercase tracking-widest font-semibold rounded transition"
                >
                  Start Web Brief
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded overflow-hidden shadow-card border border-beige aspect-[4/3] bg-cream-dark">
                <img
                  src="/portfolio/web-design/the-nadeems-gourmet-ordering-web.webp"
                  alt="The Nadeems Gourmet Restaurant Website & Food Ordering Platform"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Production Deployments Showcase */}
      <section id="live-projects" className="py-20 bg-cream-pure border-t border-beige/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="editorial-eyebrow">Interactive Portfolio</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-emerald font-medium mt-2">
                Live Production Deployments
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-charcoal/70 font-light max-w-xl">
                Real, deployed web applications and digital platforms engineered with modern full-stack architectures. Test the live platforms or inspect source repositories.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center gap-2 text-xs font-mono text-emerald bg-cream px-3 py-1.5 rounded border border-beige">
              <Sparkles className="w-3.5 h-3.5 text-olive" />
              <span>8 Real Full-Stack Works</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LIVE_PROJECTS.map((proj) => (
              <article
                key={proj.id}
                className="bg-white border border-beige/80 rounded-lg overflow-hidden shadow-sm hover:shadow-card hover:border-emerald/70 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] bg-cream-dark overflow-hidden border-b border-beige/40">
                    <img
                      src={proj.image}
                      alt={proj.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2 py-0.5 bg-white/95 backdrop-blur-sm text-[10px] uppercase font-mono font-bold tracking-wider text-emerald rounded border border-beige/60">
                      {proj.tag}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-olive font-semibold block">
                      {proj.categoryLabel}
                    </span>
                    <h3 className="font-serif text-lg text-emerald font-semibold mt-1 group-hover:text-olive transition-colors leading-snug">
                      {proj.title}
                    </h3>
                    <p className="mt-2 text-xs text-charcoal/75 leading-relaxed font-light line-clamp-3">
                      {proj.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {proj.technologies.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 bg-cream/70 text-charcoal/80 rounded border border-beige/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-5 py-3.5 bg-cream/30 border-t border-beige/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {proj.demoLink ? (
                      <a
                        href={proj.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-emerald hover:text-emerald-dark hover:underline transition"
                        title="Open live production website"
                      >
                        <Globe className="w-3.5 h-3.5 text-olive" />
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-charcoal/50 italic">
                        Private Client Portal
                      </span>
                    )}

                    {proj.sourceLink && (
                      <a
                        href={proj.sourceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-charcoal/70 hover:text-charcoal hover:underline transition"
                        title="View GitHub source code"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                  <a
                    href="#inquiry"
                    className="text-[11px] font-semibold text-olive hover:text-emerald uppercase tracking-wider inline-flex items-center gap-0.5"
                  >
                    Brief Similar <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Directory */}
      <section id="offerings" className="py-20 bg-sage/15 border-y border-beige/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="editorial-eyebrow">Digital Engineering</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-emerald font-medium mt-2">
              Website Solutions & Service Formats
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-charcoal/70 font-light">
              From bespoke artist portfolios to high-concurrency online restaurants and enterprise platforms.
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
                    to={`/services/website-development/${sub.slug}`}
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

      {/* Enquiry Form */}
      <section id="inquiry" className="py-24 bg-cream border-t border-beige/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm
            defaultService="website-development"
            formId="form_service_website"
            title="Inquire on Website Development"
            subtitle="Tell us about your digital goals, timeline, and functional requirements. We engineer fast, clean, and secure web solutions."
          />
        </div>
      </section>
    </>
  );
}
