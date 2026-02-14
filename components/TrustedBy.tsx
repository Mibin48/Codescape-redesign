
import React from 'react';

const logos = [
  { name: 'ACME Corp', img: 'https://img.logoipsum.com/243.svg' },
  { name: 'GlobalTech', img: 'https://img.logoipsum.com/244.svg' },
  { name: 'Nebula', img: 'https://img.logoipsum.com/245.svg' },
  { name: 'FoxRun', img: 'https://img.logoipsum.com/246.svg' },
  { name: 'Circle.io', img: 'https://img.logoipsum.com/247.svg' },
  { name: 'Trevva', img: 'https://img.logoipsum.com/248.svg' },
  { name: 'Goldline', img: 'https://img.logoipsum.com/249.svg' },
  { name: 'Aven', img: 'https://img.logoipsum.com/250.svg' },
  { name: 'TechFlow', img: 'https://img.logoipsum.com/251.svg' },
  { name: 'DataSync', img: 'https://img.logoipsum.com/252.svg' },
  { name: 'CloudBurst', img: 'https://img.logoipsum.com/253.svg' },
  { name: 'PixelPerfect', img: 'https://img.logoipsum.com/254.svg' },
  { name: 'InnoVentures', img: 'https://img.logoipsum.com/255.svg' },
  { name: 'NexGen Labs', img: 'https://img.logoipsum.com/256.svg' },
  { name: 'Quantum', img: 'https://img.logoipsum.com/257.svg' },
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

      {/* Infinite Scroll Container with Logo Images */}
      <div className="relative flex overflow-x-hidden">
        <div className="py-4 animate-scroll whitespace-nowrap flex items-center gap-16 px-4">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center min-w-[160px] group cursor-default"
            >
              <img
                src={logo.img}
                alt={logo.name}
                className="h-10 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
              />
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
