
import React from 'react';

const logos = [
  'ACME Corp', 'GlobalTech', 'Nebula', 'FoxRun', 'Circle.io', 'Trevva', 'Goldline', 'Aven'
];

export const TrustedBy: React.FC = () => {
  return (
    <section className="py-16 bg-background-off border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h4 className="text-xs uppercase tracking-widest text-text-muted font-semibold">Trusted by Industry Leaders</h4>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="py-2 animate-scroll whitespace-nowrap flex items-center gap-20 px-8">
          {[...logos, ...logos].map((logo, i) => (
            <span 
              key={i} 
              className="text-2xl font-bold text-gray-400 hover:text-primary transition-colors cursor-default select-none"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
