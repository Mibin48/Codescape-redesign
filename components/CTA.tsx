
import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-blue-50/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-minimal opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-4 leading-tight">
            Ready to Build Something <br/><span className="text-primary">Exceptional?</span>
          </h2>
          <p className="text-xl text-text-muted mb-8 max-w-xl">
            Let's transform your ideas into reality. Partner with us for reliable, scalable technology solutions.
          </p>
          <a className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95" href="#contact">
            Start Your Project
          </a>
        </div>
        
        <div className="flex-1 w-full max-w-md">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-primary mb-1">100+</div>
              <div className="text-sm text-text-muted">Projects Delivered</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-text-muted">Happy Clients</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center col-span-2 shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-text-muted">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
