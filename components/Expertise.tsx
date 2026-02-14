
import React from 'react';

const services = [
  {
    icon: 'language',
    title: 'Web Development',
    desc: 'High-performance websites and web applications built with modern frameworks and best practices.',
    tech: ['React', 'Next.js', 'Node.js'],
    projects: 45,
    featured: true
  },
  {
    icon: 'smartphone',
    title: 'Mobile Apps',
    desc: 'Native and cross-platform mobile experiences that users love on iOS and Android.',
    tech: ['React Native', 'Flutter', 'Swift'],
    projects: 28
  },
  {
    icon: 'cloud_queue',
    title: 'Cloud Solutions',
    desc: 'Scalable cloud infrastructure, migration, and serverless architecture for modern apps.',
    tech: ['AWS', 'Azure', 'Docker'],
    projects: 32
  },
  {
    icon: 'palette',
    title: 'UI/UX Design',
    desc: 'User-centric design that creates intuitive and beautiful digital products.',
    tech: ['Figma', 'Adobe XD', 'Sketch'],
    projects: 52
  }
];

export const Expertise: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="services">
      {/* Subtle Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/30 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-8"
          data-aos="fade-up"
        >
          <div>
            <h2 className="text-sm text-primary font-bold tracking-wider uppercase mb-3">What We Do</h2>
            <p className="text-4xl md:text-5xl font-bold text-text-main mb-2">
              Our <span className="gradient-text">Expertise</span>
            </p>
            <p className="text-lg md:text-xl text-text-muted mt-2">
              Comprehensive digital solutions for modern businesses.
            </p>
          </div>
          <a
            className="hidden md:flex items-center text-primary font-semibold hover:text-primary-dark transition-colors mt-4 md:mt-0 group px-6 py-3 border-2 border-primary rounded-xl hover:bg-primary hover:text-white"
            href="#"
          >
            View All Services
            <span className="material-icons ml-2 text-lg transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className={`group card-hover rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-primary/30 p-8 flex flex-col justify-between cursor-pointer ${s.featured ? 'md:col-span-2 md:row-span-1 lg:col-span-1' : ''
                }`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              style={{ minHeight: s.featured ? '360px' : '340px' }}
            >
              <div>
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-primary rounded-2xl shadow-button flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="material-icons text-2xl">{s.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-muted leading-relaxed mb-4">{s.desc}</p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {s.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-white border border-gray-200 rounded-full text-text-muted font-medium group-hover:border-primary group-hover:text-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 mt-4">
                {/* Project Count (visible on hover) */}
                <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 mb-3">
                  <span className="text-sm text-text-muted">
                    <span className="font-bold text-primary">{s.projects}+</span> projects completed
                  </span>
                </div>

                {/* Learn More Link */}
                <span className="inline-flex items-center text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Explore service
                  <span className="material-icons text-sm ml-1 transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden mt-10 text-center" data-aos="fade-up">
          <a
            className="inline-flex items-center justify-center text-primary font-semibold hover:text-primary-dark transition-colors px-6 py-3 border-2 border-primary rounded-xl hover:bg-primary hover:text-white w-full sm:w-auto"
            href="#"
          >
            View All Services
            <span className="material-icons ml-2">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};
