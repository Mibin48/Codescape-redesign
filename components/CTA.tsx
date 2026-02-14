
import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="py-32 animated-gradient relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-grid-dots opacity-10"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full filter blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="zoom-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Build Something <br className="hidden sm:block" />
            <span className="text-accent-400">Exceptional?</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Let's transform your vision into reality. Partner with an engineering team that delivers <span className="font-semibold">scalable technology solutions</span> that drive real business results.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
            <a
              className="group w-full sm:w-auto px-10 py-5 bg-white text-primary rounded-xl font-bold text-base sm:text-lg shadow-button-hover hover:shadow-glow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
              href="#contact"
            >
              <span>Start Your Project</span>
              <span className="material-icons transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
            <a
              className="group w-full sm:w-auto px-10 py-5 border-3 border-white/30 text-white bg-white/10 backdrop-blur-sm rounded-xl font-bold text-base sm:text-lg hover:bg-white/20 hover:border-white transition-all duration-300 inline-flex items-center justify-center gap-2"
              href="#contact"
            >
              <span className="material-icons">calendar_today</span>
              <span>Schedule a Call</span>
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Stat 1 */}
          <div className="glass-dark p-8 rounded-2xl text-center hover:scale-105 transition-transform duration-300 cursor-default">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="material-icons text-accent-400 text-2xl">verified</span>
            </div>
            <div className="text-5xl font-bold text-white mb-2">6+</div>
            <div className="text-sm text-white/70 font-semibold uppercase tracking-wider">Years Excellence</div>
          </div>

          {/* Stat 2 */}
          <div className="glass-dark p-8 rounded-2xl text-center hover:scale-105 transition-transform duration-300 cursor-default">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="material-icons text-accent-400 text-2xl">rocket_launch</span>
            </div>
            <div className="text-5xl font-bold text-white mb-2">100+</div>
            <div className="text-sm text-white/70 font-semibold uppercase tracking-wider">Projects Delivered</div>
          </div>

          {/* Stat 3 */}
          <div className="glass-dark p-8 rounded-2xl text-center hover:scale-105 transition-transform duration-300 cursor-default sm:col-span-3 lg:col-span-1">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="material-icons text-accent-400 text-2xl">sentiment_very_satisfied</span>
            </div>
            <div className="text-5xl font-bold text-white mb-2">98%</div>
            <div className="text-sm text-white/70 font-semibold uppercase tracking-wider">Client Satisfaction</div>
          </div>
        </div>

        {/* Trust Footer */}
        <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="400">
          <p className="text-white/60 text-sm">
            Trusted by startups to enterprises · Award-winning development team
          </p>
        </div>
      </div>
    </section>
  );
};
