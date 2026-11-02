import React, { useState } from 'react';
import { Eye, X } from 'lucide-react';

export default function ProjectGallery({ images = [], title = 'Selected Work & Concept Studies' }) {
  const [activeImage, setActiveImage] = useState(null);

  if (!images || images.length === 0) return null;

  return (
    <section className="py-16 bg-cream-pure border-t border-beige/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="editorial-eyebrow">Studio Showcase</span>
          <h2 className="font-serif text-2xl sm:text-3xl text-emerald font-medium mt-1">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/70 mt-2 font-light">
            Curated studies, materiality tests, and realized commissions from the atelier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {images.map((img, idx) => (
            <figure
              key={idx}
              onClick={() => setActiveImage(img)}
              className="group cursor-pointer bg-white border border-beige/70 rounded overflow-hidden shadow-sm hover:border-emerald/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] bg-cream overflow-hidden">
                <img
                  src={img.url}
                  alt={img.alt || img.caption || 'Artistic commission work'}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-emerald/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-white/95 text-emerald shadow-card border border-beige">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>
                {img.tag && (
                  <span className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm text-[10px] uppercase font-mono font-semibold tracking-wider text-emerald rounded border border-beige/60">
                    {img.tag}
                  </span>
                )}
              </div>
              <figcaption className="p-4 border-t border-beige/40 bg-white">
                <p className="text-xs text-charcoal font-medium leading-snug">
                  {img.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-[#0B281E]/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white border border-beige rounded overflow-hidden shadow-elevated flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-3 right-3 p-2 bg-cream/90 hover:bg-cream text-charcoal rounded-full z-10 transition border border-beige"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex-1 overflow-auto flex items-center justify-center bg-charcoal">
              <img
                src={activeImage.url}
                alt={activeImage.alt || activeImage.caption || 'Expanded project view'}
                decoding="async"
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>
            <div className="p-4 bg-white border-t border-beige flex items-center justify-between">
              <span className="text-xs text-charcoal font-medium">{activeImage.caption}</span>
              {activeImage.tag && (
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-cream rounded text-emerald border border-beige/60">
                  {activeImage.tag}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

