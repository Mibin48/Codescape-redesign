import React from 'react';

const values = [
  {
    num: '01',
    title: 'Innovation First',
    desc: "We don't just follow trends; we set them. Our team constantly explores cutting-edge technologies.",
    icon: 'bolt'
  },
  {
    num: '02',
    title: 'Technical Excellence',
    desc: "Clean code, robust architecture, and scalable solutions. We build software that stands the test of time.",
    icon: 'terminal'
  },
  {
    num: '03',
    title: 'Quality & Trust',
    desc: "Transparency in process and rigor in testing. We deliver what we promise with impeccable quality.",
    icon: 'verified_user'
  },
  {
    num: '04',
    title: 'Global Impact',
    desc: "Our solutions are engineered to scale worldwide, impacting millions across different continents.",
    icon: 'language'
  }
];

export const Values: React.FC = () => {
  return (
    <section className="bg-gray-950 relative" id="about">
      <div className="flex flex-col lg:flex-row">

        {/* Left Side: Sticky — stays pinned while right side scrolls */}
        <div className="lg:w-1/2 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center p-12 lg:p-24 relative overflow-hidden bg-gray-950 border-r border-white/5 z-20">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
              alt="Engineering"
              className="w-full h-full object-cover grayscale opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/98 to-transparent"></div>
          </div>

          <div className="relative z-10">
            <span className="text-primary font-black tracking-[0.5em] uppercase text-[11px] mb-8 block opacity-60">Success Criteria</span>
            <h2 className="text-6xl md:text-[6rem] lg:text-[7rem] font-black text-white leading-[0.9] tracking-tighter mb-10 italic uppercase">
              WHY<br />CHOOSE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-500 not-italic">CODESCAPE</span>
            </h2>

            <div className="mt-8 flex items-center gap-4 opacity-50">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black text-white/50 tracking-[0.3em] uppercase">Scroll to explore</span>
            </div>
          </div>
        </div>

        {/* Right Side: Vertically scrolling stacking cards */}
        {/* Each card is h-screen and sticky, so it covers the previous one as you scroll */}
        <div className="lg:w-1/2">
          {values.map((v, i) => (
            <div
              key={i}
              className="h-screen sticky top-0"
              style={{ zIndex: i + 1 }}
            >
              <div
                className={`w-full h-full flex flex-col justify-center p-12 lg:p-24 relative overflow-hidden
                  ${i % 2 === 0 ? 'bg-[#0A0D1A]' : 'bg-[#0F121F]'}
                `}
                style={{
                  boxShadow: '0 -30px 60px -10px rgba(0,0,0,0.7)'
                }}
              >
                {/* Massive Background Number */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35rem] font-black text-white/[0.015] select-none pointer-events-none">
                  {v.num}
                </div>

                <div className="relative z-10 space-y-12 uppercase">
                  <div className="text-8xl lg:text-[12rem] font-black tracking-tighter leading-none flex items-center justify-between text-white/5">
                    {v.num}
                    <div className="h-px flex-grow max-w-[150px] bg-white/5 hidden md:block"></div>
                  </div>

                  <div className="max-w-xl">
                    <h3 className="text-5xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.85] italic">
                      {v.title}
                    </h3>
                    <p className="text-gray-400 text-xl lg:text-2xl font-medium normal-case leading-relaxed max-w-sm border-l-2 border-primary/50 pl-8">
                      {v.desc}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <button className="w-20 h-20 rounded-[28px] bg-white flex items-center justify-center hover:bg-primary transition-all duration-300 group/btn shadow-lg">
                      <span className="material-icons text-gray-900 group-hover/btn:text-white group-hover/btn:rotate-180 transition-transform duration-500 text-3xl">add</span>
                    </button>
                  </div>

                  <div className="absolute bottom-12 right-12 opacity-5">
                    <span className="material-icons text-white text-[8rem] select-none">{v.icon}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
