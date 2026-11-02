import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import EnquiryForm from '../components/EnquiryForm';
import { Clock, ShieldAlert } from 'lucide-react';

export default function ArtClasses() {
  const classesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'HUNAR Atelier Online Art Masterclasses (Upcoming)',
    description: 'Upcoming online fine art masterclasses and mentorship exploring traditional pigment preparation, oil painting techniques, and visual brand identity.',
    provider: {
      '@type': 'Organization',
      name: 'HUNAR Creative Studio',
      url: 'https://hunarstudio.com',
    },
  };

  const PLANNED_MODULES = [
    {
      code: 'MODULE 01',
      title: 'Material Alchemy & Traditional Pigment Grinding',
      duration: '4 Weeks',
      format: 'Live Studio Demos & Lab Kits',
      image: '/portfolio/portraits/monochrome-charcoal-woman-montage.webp',
      alt: 'Charcoal and graphite tonal study on archival paper',
      description: 'Sourcing natural earth pigments, grinding on granite mullers, testing egg tempera vs walnut oil binders, and substrate preparation on Belgian linen.',
    },
    {
      code: 'MODULE 02',
      title: 'Atmospheric Glazing & Tonal Chiaroscuro',
      duration: '6 Weeks',
      format: 'Intimate Masterclass (Capped at 15 Patrons)',
      image: '/portfolio/portraits/vibrant-crimson-woman-oil-portrait.webp',
      alt: 'Fine art oil portrait painting with rich glazes on linen canvas',
      description: 'Layering translucent glazes, understanding spectral refraction in oil mediums, and capturing subtle transitions of light and shadow.',
    },
    {
      code: 'MODULE 03',
      title: 'Architectural Scale & Spatial Painting',
      duration: '4 Weeks',
      format: 'Case Studies & Virtual Studio Critique',
      image: '/portfolio/murals/staircase-monstera-botanical-mural.webp',
      alt: 'Architectural interior staircase botanical mural painting',
      description: 'Designing fine art for specific architectural elevations, working with interior lighting temperatures, and structural installation methodology.',
    },
  ];

  return (
    <>
      <SEO
        title="Online Art Classes & Studio Masterclasses (Upcoming Waitlist) — HUNAR"
        description="Join the early access waitlist for HUNAR Creative Studio's upcoming online fine art masterclasses. In-depth mentorship in traditional oil painting, raw pigments, and editorial design."
        canonicalUrl="/art-classes"
        schema={classesSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: 'Online Art Classes (Upcoming)' }]} />
      </div>

      <section className="pt-10 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive/10 border border-olive/30 rounded text-olive text-xs uppercase tracking-widest font-semibold mb-4">
                <Clock className="w-3.5 h-3.5" />
                <span>In Development — Launching Late 2026</span>
              </div>
              {/* Explicit H1 */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-emerald font-normal leading-tight">
                Online Fine Art Masterclasses & Creative Mentorship
              </h1>
              <p className="mt-6 text-base sm:text-lg text-charcoal/80 leading-relaxed font-light">
                We are carefully authoring intimate, studio-grade online masterclasses. Rather than generic recorded tutorials, our cohorts will offer direct atelier mentorship, physical pigment kits, and rigorous technique instruction.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded overflow-hidden shadow-card border border-beige aspect-[4/3] bg-cream-dark">
                <img
                  src="/portfolio/portraits/bearded-man-studio-easel-portrait.webp"
                  alt="Fine art oil portrait painting on easel in HUNAR studio atelier"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Preview Section */}
      <section className="py-20 bg-sage/15 border-y border-beige/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="editorial-eyebrow">Curriculum In Authoring</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-emerald font-medium mt-2">
              Planned Masterclass Cohorts
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-charcoal/70 font-light">
              Each masterclass is strictly limited to 15 students per cohort to ensure one-on-one portfolio critiques with HUNAR studio directors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLANNED_MODULES.map((m) => (
              <div
                key={m.code}
                className="bg-white border border-beige/70 rounded overflow-hidden shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] bg-cream-dark overflow-hidden">
                    <img
                      src={m.image}
                      alt={m.alt || m.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-charcoal/60 font-mono mb-3">
                      <span className="text-olive font-semibold">{m.code}</span>
                      <span>{m.duration}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-emerald font-medium mb-3">
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                      {m.description}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-beige/40 text-[11px] uppercase tracking-wider text-charcoal/60 font-medium">
                    {m.format}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white border border-beige/70 rounded flex items-start gap-3 text-xs text-charcoal/80 max-w-2xl mx-auto shadow-card">
            <ShieldAlert className="w-4 h-4 text-olive flex-shrink-0 mt-0.5" />
            <p className="font-light leading-relaxed">
              <strong className="font-semibold text-emerald">Notice on Availability:</strong> Enrollment is not yet open. Registration on this page places you on the priority announcement waitlist. You will receive first notification and early syllabus access prior to public release.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist Enquiry Form */}
      <section className="py-24 bg-cream border-t border-beige/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm
            defaultService="art-classes"
            formId="form_art_classes_waitlist"
            title="Join the Early Access Waitlist"
            subtitle="Submit your details and art background to be notified when cohort enrollment begins."
          />
        </div>
      </section>
    </>
  );
}
