
import React from 'react';

const services = [
  {
    icon: 'language',
    title: 'Web Development',
    desc: 'High-performance websites and web applications built with modern frameworks.'
  },
  {
    icon: 'smartphone',
    title: 'Mobile Apps',
    desc: 'Native and cross-platform mobile experiences for iOS and Android.'
  },
  {
    icon: 'cloud_queue',
    title: 'Cloud Solutions',
    desc: 'Scalable cloud infrastructure, migration, and serverless architecture.'
  },
  {
    icon: 'palette',
    title: 'UI/UX Design',
    desc: 'User-centric design that creates intuitive and beautiful digital products.'
  }
];

export const Expertise: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-8">
          <div>
            <h2 className="text-4xl font-bold text-text-main mb-2">Our Expertise</h2>
            <p className="text-lg text-text-muted">Comprehensive digital solutions for modern businesses.</p>
          </div>
          <a className="hidden md:flex items-center text-primary font-medium hover:text-primary-dark transition-colors mt-4 md:mt-0 group" href="#">
            View All Services <span className="material-icons ml-2 text-lg transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group rounded-xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-lg transition-all duration-300 p-8 flex flex-col justify-between h-80 cursor-pointer">
              <div>
                <div className="w-10 h-10 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center text-primary mb-6">
                  <span className="material-icons text-xl">{s.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-text-main mb-2">{s.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{s.desc}</p>
              </div>
              <div className="pt-4">
                <span className="inline-flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Learn more <span className="material-icons text-sm ml-1">arrow_forward</span>
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="md:hidden mt-10 text-center">
          <a className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors" href="#">
            View All Services <span className="material-icons ml-2">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};
