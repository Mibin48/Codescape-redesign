
import React from 'react';

const logos = [
  'ACME Corp', 'GlobalTech', 'Nebula', 'FoxRun', 'Circle.io', 'Trevva',
  'Goldline', 'Aven', 'TechFlow', 'DataSync', 'CloudBurst', 'PixelPerfect',
  'InnoVentures', 'NexGen Labs', 'Quantum'
];

export const TrustedBy: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white border-y border-gray-100 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white via-white/50 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white via-white/50 to-transparent z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center" data-aos="fade-up">
        <h4 className="text-xs uppercase tracking-widest text-text-muted font-bold mb-2 inline-block px-4 py-1.5 bg-white rounded-full shadow-sm">
          Trusted by Industry Leaders
        </h4>
        <p className="text-text-muted text-sm mt-3">
          Join <span className="font-bold text-primary">100+</span> companies that trust CODESCAPE
        </p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex overflow-x-hidden">
        <div className="py-4 animate-scroll whitespace-nowrap flex items-center gap-16 px-4">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center min-w-[180px] group cursor-default"
            >
              <span
                className="text-2xl font-bold text-gray-400 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 hover:text-primary transition-all duration-300 select-none transform hover:scale-110"
                style={{
                  filter: 'grayscale(100%)',
                  WebkitFilter: 'grayscale(100%)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'grayscale(0%)';
                  e.currentTarget.style.WebkitFilter = 'grayscale(0%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'grayscale(100%)';
                  e.currentTarget.style.WebkitFilter = 'grayscale(100%)';
                }}
              >
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-text-muted" data-aos="fade-up">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-success"></div>
          <span>ISO 27001 Certified</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <span>Enterprise-Ready</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-warning"></div>
          <span>24/7 Support</span>
        </div>
      </div>
    </section>
  );
};
