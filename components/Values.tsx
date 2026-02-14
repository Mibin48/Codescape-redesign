
import React, { useState } from 'react';

const values = [
  {
    num: '01',
    title: 'Innovation First',
    desc: "We don't just follow trends; we set them. Our team constantly explores cutting-edge technologies.",
    icon: 'bolt',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    num: '02',
    title: 'Technical Excellence',
    desc: "Clean code, robust architecture, and scalable solutions. We build software that stands the test of time.",
    icon: 'terminal',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    num: '03',
    title: 'Quality & Trust',
    desc: "Transparency in process and rigor in testing. We deliver what we promise with impeccable quality.",
    icon: 'verified_user',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop'
  },
  {
    num: '04',
    title: 'Global Impact',
    desc: "Our solutions are engineered to scale worldwide, impacting millions across different continents.",
    icon: 'language',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop'
  }
];

export const Values = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % values.length);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + values.length) % values.length);
  };

  return (
    <section className="h-screen bg-gray-950 relative overflow-hidden" id="about">
      <div className="flex flex-col lg:flex-row h-full">

        {/* Left Side: Fixed Content */}
        <div className="lg:w-1/2 h-full flex flex-col justify-center p-8 sm:p-12 lg:p-16 xl:p-24 relative overflow-hidden bg-gray-950 lg:border-r border-white/5 z-20">

          {/* Background Image — changes with active card */}
          <div className="absolute inset-0 z-0 transition-opacity duration-700">
            {values.map((v, i) => (
              <img
                key={i}
                src={v.image}
                alt={v.title}
                className={`absolute inset-0 w-full h-full object-cover grayscale transition-opacity duration-700 ${activeIndex === i ? 'opacity-15' : 'opacity-0'
                  }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/95 to-gray-950/80"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            <span className="text-blue-500 font-black tracking-[0.5em] uppercase text-[10px] sm:text-[11px] mb-6 sm:mb-8 block opacity-60">
              Success Criteria
            </span>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-black text-white leading-[0.9] tracking-tighter mb-8 sm:mb-10">
              <span className="block italic uppercase">WHY</span>
              <span className="block italic uppercase">CHOOSE</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                CODESCAPE
              </span>
            </h2>

            {/* Pagination Dots */}
            <div className="flex items-center gap-3 mt-8">
              {values.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-10 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'w-2 bg-white/20'}`}
                />
              ))}
              <span className="text-white/30 text-[10px] font-black tracking-widest uppercase ml-4">
                {String(activeIndex + 1).padStart(2, '0')} / {String(values.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Cards Traverse with Buttons */}
        <div className="lg:w-1/2 relative h-full bg-gray-950">
          {values.map((v, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${activeIndex === i
                ? 'opacity-100 translate-x-0 z-10'
                : 'opacity-0 translate-x-12 z-0'
                }`}
            >
              <div className={`w-full h-full flex flex-col justify-center p-8 sm:p-12 lg:p-16 xl:p-24 relative overflow-hidden ${i % 2 === 0 ? 'bg-[#0A0D1A]' : 'bg-[#0F121F]'
                }`}>

                {/* Background image for right panel */}
                <div className="absolute inset-0">
                  <img
                    src={v.image}
                    alt={v.title}
                    className="w-full h-full object-cover opacity-[0.07]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0A0D1A]/90"></div>
                </div>

                {/* Massive Background Number */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] sm:text-[25rem] md:text-[30rem] lg:text-[35rem] font-black text-white/[0.015] select-none pointer-events-none leading-none">
                  {v.num}
                </div>

                <div className="relative z-10 space-y-8 sm:space-y-12 uppercase">
                  <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black tracking-tighter leading-none flex items-center gap-4 sm:gap-8 text-white/5">
                    {v.num}
                    <div className="h-px flex-1 max-w-[100px] sm:max-w-[150px] bg-white/5"></div>
                  </div>

                  <div className="max-w-xl">
                    <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tighter mb-6 sm:mb-8 leading-[0.85] italic">
                      {v.title}
                    </h3>
                    <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl font-medium normal-case leading-relaxed max-w-sm border-l-2 border-blue-500/50 pl-6 sm:pl-8">
                      {v.desc}
                    </p>
                  </div>

                  {/* Icon Watermark */}
                  <div className="absolute bottom-12 right-12 opacity-5">
                    <span className="material-icons text-white text-[8rem] select-none">{v.icon}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <div className="absolute bottom-12 right-12 z-30 flex gap-4">
            <button
              onClick={prevCard}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              <span className="material-icons">arrow_back</span>
            </button>
            <button
              onClick={nextCard}
              className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-cyan-400 transition-all duration-300 shadow-[0_10px_30px_rgba(0,102,255,0.3)]"
            >
              <span className="material-icons">arrow_forward</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Values;