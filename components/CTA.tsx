
import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden" id="contact">
      {/* Dark top section with the main CTA */}
      <div className="relative bg-gray-950 py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[100px] animate-blob-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-[150px]"></div>

          {/* Grid overlay */}
          <div className="absolute inset-0 bg-grid-dots opacity-5"></div>

          {/* Radial fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-transparent to-gray-950 opacity-60"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          {/* Badge */}
          <div className="text-center mb-12" data-aos="fade-down">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/60 text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              We're Available
            </span>
          </div>

          {/* Headline */}
          <div className="text-center" data-aos="zoom-in" data-aos-duration="1000">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-8">
              Let's Build<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-500 to-primary bg-[length:200%_auto] animate-gradient-shift">
                Something Epic
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-14 font-medium">
              Partner with an engineering team that turns ambitious ideas into scalable, production-ready products.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-20" data-aos="fade-up" data-aos-delay="200">
            <a
              className="group w-full sm:w-auto px-10 py-5 bg-white text-gray-900 rounded-2xl font-black text-base sm:text-lg hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] hover:scale-[1.03] transition-all duration-300 inline-flex items-center justify-center gap-3"
              href="#contact"
            >
              Start Your Project
              <span className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <span className="material-icons text-white text-sm group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
              </span>
            </a>
            <a
              className="group w-full sm:w-auto px-10 py-5 border border-white/15 text-white bg-white/5 backdrop-blur-sm rounded-2xl font-bold text-base sm:text-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 inline-flex items-center justify-center gap-3"
              href="#contact"
            >
              <span className="material-icons text-white/50 group-hover:text-accent-500 transition-colors">calendar_today</span>
              Schedule a Call
            </a>
          </div>

          {/* Trust Signals Row */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {[
              { value: '6+', label: 'Years', icon: 'verified' },
              { value: '100+', label: 'Projects', icon: 'rocket_launch' },
              { value: '98%', label: 'Satisfaction', icon: 'thumb_up' },
              { value: '24/7', label: 'Support', icon: 'support_agent' }
            ].map((stat, i) => (
              <div key={i} className="text-center p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 group cursor-default">
                <span className="material-icons text-primary/60 text-lg mb-2 block group-hover:text-primary group-hover:scale-110 transition-all">{stat.icon}</span>
                <div className="text-2xl md:text-3xl font-black text-white mb-0.5">{stat.value}</div>
                <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Bottom Trust Line */}
          <div className="mt-14 text-center" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 text-white/30 text-xs font-semibold">
                <span className="material-icons text-emerald-400/60 text-sm">check_circle</span>
                Free Consultation
              </div>
              <div className="flex items-center gap-2 text-white/30 text-xs font-semibold">
                <span className="material-icons text-emerald-400/60 text-sm">check_circle</span>
                No Commitment
              </div>
              <div className="flex items-center gap-2 text-white/30 text-xs font-semibold">
                <span className="material-icons text-emerald-400/60 text-sm">check_circle</span>
                NDA Protected
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
