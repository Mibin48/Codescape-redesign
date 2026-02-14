
import React from 'react';

export const Testimonial: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative">
          <span className="material-icons text-6xl text-gray-100 absolute -top-10 left-0 transform -translate-x-1/2 select-none">format_quote</span>
          <blockquote className="text-2xl md:text-3xl font-light text-text-main leading-relaxed mb-10 relative z-10 italic">
            "CODESCAPE transformed our legacy system into a state-of-the-art cloud platform. Their attention to detail and technical prowess are unmatched in the industry."
          </blockquote>
        </div>
        
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-gray-100">
            <img 
              alt="David Miller" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuABOTQnWKed0brrxYVp27DSQCvm5cH0leoMioQ6zhSVfcAjPoMWtc92oMTItuayPsk1iGhD9iJGgJ3lCxjMPANxBE_k5PqJKlkhG-FZ-44Vd01krRaHF8nbXQv99rxnRHQMqFwCqNu2OTiYqGkkXK2balS75t6ouvELBQDGzwuvVj7VE-o1qT2f9r3DS1v1tLfEd952cgpTjCxobTzYmj2ETGDO3T6ACN15IL-DreKUJSFsPQeXORV-Wi1tL3HMZbPZjDqHh4X0FNoQ"
            />
          </div>
          <div className="text-left">
            <div className="text-base font-bold text-text-main">David Miller</div>
            <div className="text-xs text-text-muted uppercase tracking-wide">CTO, TechForward Inc.</div>
          </div>
          <div className="ml-4 flex text-primary">
            {[1,2,3,4,5].map(i => <span key={i} className="material-icons text-sm">star</span>)}
          </div>
        </div>
      </div>
    </section>
  );
};
