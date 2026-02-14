
import React from 'react';

const values = [
  {
    icon: 'emoji_objects',
    title: 'Innovation First',
    desc: "We don't just follow trends; we set them. Our team constantly explores new technologies to give you a competitive edge."
  },
  {
    icon: 'terminal',
    title: 'Technical Excellence',
    desc: "Clean code, robust architecture, and scalable solutions. We build software that stands the test of time and traffic."
  },
  {
    icon: 'shield',
    title: 'Quality & Trust',
    desc: "Transparency in process and rigor in testing. We deliver what we promise, on time and with impeccable quality."
  }
];

export const Values: React.FC = () => {
  return (
    <section className="py-24 bg-background-off relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm text-primary font-bold tracking-widest uppercase mb-3">Our Core Values</h2>
          <p className="text-3xl md:text-4xl font-bold tracking-tight text-text-main mb-4">
            Why Choose CODESCAPE
          </p>
          <p className="max-w-2xl text-lg text-text-muted mx-auto leading-relaxed">
            Your success is our mission. We deliver excellence through transparency, technical rigor, and thoughtful innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <div key={i} className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="material-icons text-primary text-2xl">{v.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">{v.title}</h3>
              <p className="text-text-muted leading-relaxed text-sm">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
