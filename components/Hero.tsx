
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-light pt-20">
      <div className="absolute inset-0 bg-grid-minimal opacity-60"></div>
      
      {/* Animated Blobs */}
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-indigo-50/60 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm text-text-muted text-xs font-semibold tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          Digital Innovation Agency
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-text-main mb-6 leading-tight">
          CODE<span className="text-primary font-light">SCAPE</span>
        </h1>
        
        <p className="text-2xl md:text-4xl font-light text-text-muted mb-8 tracking-wide">
          Where Creativity Meets <span className="font-medium text-text-main">Technology</span>
        </p>
        
        <p className="mt-4 max-w-2xl mx-auto text-lg text-text-muted mb-12 leading-relaxed">
          Building reliable, scalable, and impactful digital solutions that transform businesses and define the future of interaction with minimalist precision.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-lg font-medium text-lg shadow-sm hover:shadow-lg hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-0.5" href="#services">
            Explore Services
          </a>
          <a className="w-full sm:w-auto px-8 py-4 border border-gray-300 text-text-main bg-white rounded-lg font-medium text-lg hover:border-primary hover:text-primary transition-all duration-300" href="#projects">
            View Our Work
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <span className="material-icons text-gray-400 text-3xl">arrow_downward</span>
      </div>
    </section>
  );
};
