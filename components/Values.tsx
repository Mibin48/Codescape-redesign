
import React from 'react';

const values = [
  {
    icon: 'emoji_objects',
    title: 'Innovation First',
    desc: "We don't just follow trends; we set them. Our team constantly explores cutting-edge technologies to give you a competitive advantage in the digital landscape."
  },
  {
    icon: 'terminal',
    title: 'Technical Excellence',
    desc: "Clean code, robust architecture, and scalable solutions. We build software that stands the test of time, traffic, and evolving business needs."
  },
  {
    icon: 'shield',
    title: 'Quality & Trust',
    desc: "Transparency in process and rigor in testing. We deliver what we promise, on time and with impeccable quality that exceeds expectations."
  }
];

export const Values: React.FC = () => {
  return (
    <section className="py-24 bg-background-off relative overflow-hidden" id="about">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-minimal opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-sm text-primary font-bold tracking-wider uppercase mb-3 inline-block px-4 py-1.5 bg-primary/5 rounded-full">
            Our Core Values
          </h2>
          <p className="text-4xl md:text-5xl font-bold tracking-tight text-text-main mb-4">
            Why Choose <span className="gradient-text">CODESCAPE</span>
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl text-lg md:text-xl text-text-muted mx-auto leading-relaxed">
            Your success is our mission. We deliver excellence through transparency, technical rigor, and thoughtful innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <div
              key={i}
              className="group card-hover bg-white p-8 rounded-2xl border border-gray-100 shadow-card cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-button">
                <span className="material-icons text-white text-3xl group-hover:scale-110 transition-transform">
                  {v.icon}
                </span>
              </div>

              {/* Title with Decorative Underline */}
              <h3 className="text-2xl font-bold text-text-main mb-2 group-hover:text-primary transition-colors">
                {v.title}
              </h3>
              <div className="w-12 h-0.5 bg-gradient-primary mb-4 group-hover:w-20 transition-all duration-300"></div>

              {/* Description */}
              <p className="text-text-muted leading-relaxed text-base">
                {v.desc}
              </p>

              {/* Learn More Link (appears on hover) */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="inline-flex items-center text-primary font-semibold text-sm gap-1">
                  Learn more
                  <span className="material-icons text-sm">arrow_forward</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
