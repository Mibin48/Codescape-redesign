
import React from 'react';

export const Testimonial: React.FC = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-white via-blue-50/20 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-grid-minimal opacity-20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-sm text-primary font-bold tracking-wider uppercase mb-3 inline-block px-4 py-1.5 bg-primary/5 rounded-full">
            Client Testimonials
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-text-main mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative glass p-10 md:p-16 rounded-3xl shadow-card-hover" data-aos="zoom-in">
          {/* Quote Icon */}
          <div className="absolute -top-6 left-8">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-button rotate-12">
              <span className="material-icons text-white text-3xl -rotate-12">format_quote</span>
            </div>
          </div>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8 mt-4">
            {[1, 2, 3, 4, 5].map(i => (
              <span key={i} className="material-icons text-2xl text-warning animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                star
              </span>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-light text-text-main leading-relaxed mb-10 text-center italic">
            "CODESCAPE transformed our legacy system into a state-of-the-art cloud platform. Their attention to detail and technical prowess are <span className="font-semibold not-italic gradient-text">unmatched in the industry</span>."
          </blockquote>

          {/* Author Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-primary/10">
                  <img
                    alt="David Miller"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuABOTQnWKed0brrxYVp27DSQCvm5cH0leoMioQ6zhSVfcAjPoMWtc92oMTItuayPsk1iGhD9iJGgJ3lCxjMPANxBE_k5PqJKlkhG-FZ-44Vd01krRaHF8nbXQv99rxnRHQMqFwCqNu2OTiYqGkkXK2balS75t6ouvELBQDGzwuvVj7VE-o1qT2f9r3DS1v1tLfEd952cgpTjCxobTzYmj2ETGDO3T6ACN15IL-DreKUJSFsPQeXORV-Wi1tL3HMZbPZjDqHh4X0FNoQ"
                  />
                </div>
                {/* LinkedIn Verified Badge */}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-sm">
                  <span className="material-icons text-white text-xs">verified</span>
                </div>
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-text-main">David Miller</div>
                <div className="text-sm text-text-muted font-medium">CTO, TechForward Inc.</div>
                <div className="text-xs text-text-muted flex items-center gap-1 mt-1">
                  <span className="material-icons text-xs">location_on</span>
                  San Francisco, CA
                </div>
              </div>
            </div>

            {/* Video Testimonial Badge */}
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full text-xs font-semibold text-text-muted border border-gray-200">
              <span className="material-icons text-sm text-primary">play_circle</span>
              <span>Video Available</span>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            <div className="w-10 h-1 bg-gradient-primary rounded-full"></div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Navigation Hint */}
        <div className="text-center mt-8 text-sm text-text-muted" data-aos="fade-up" data-aos-delay="200">
          <p>One of <span className="font-bold text-primary">98+</span> satisfied clients</p>
        </div>
      </div>
    </section>
  );
};
