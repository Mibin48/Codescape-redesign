
import React, { useState } from 'react';

const cases = [
  {
    title: 'Nova Banking App',
    desc: 'A comprehensive mobile banking solution focusing on security, user experience, and real-time transaction processing for the modern user.',
    tags: ['FinTech', 'React Native', 'Node.js', 'AWS'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_x_VnihrFNfx9Fi3CTBdjHiwTTHCN2qeKVy3VIysal5BFI7NAg6VG3zRk1PNPs0viUjhLAGTdlqb07zlNiQaVE1_q2C_0Vwzw01vn_2v_j0m6x0J6SZrxCRq9v4sOUusBRjgFLZndIh1DQ2FAYcVSPs_az-sHujjUIXgpYvTYgR0QSQkKuZfNZC6zXNtHp0u4pv7AOg7bEV6Q5wuYMiEZfqnXg_998M4jP5c9I3_BlkOncoBMIbhetvcCfReFB7CXpw5tXsYULq3Q',
    metrics: [
      { label: 'Growth', value: '150%' },
      { label: 'Faster', value: '60%' },
      { label: 'Impact', value: '$2M+' }
    ],
    category: 'FinTech',
  },
  {
    title: 'Luxe Fashion Store',
    desc: 'Redesigning the digital storefront for a luxury fashion brand, increasing conversion rates by 45% through intuitive design patterns.',
    tags: ['E-Commerce', 'Shopify', 'React', 'AWS'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3fD7hppWELtbCsTghUcOgxjlRoNQExEE7Q0uuIX-Nh_oSNpPtgbLltWPvk7gYKmYhQ-SUTt-X3lzxqgaGOK7SSWy_TCWRLyRpnN-yPlbIz66G1zRNj4E-y8xBdlQcVwHoJagR8OCFtpv0YNsi-uo5rHQR1FWQqo20RMRL-Kels-h5muV0UFzJdAToSaeQ19oMJ_W06scZrbht1hpCLBKXyKtKCOygW5D4GCq1Csjae-BLj-ebaKxqsZOMfjwKXGJT02BNZG508P3s',
    metrics: [
      { label: 'Conversion', value: '45%' },
      { label: 'Load Time', value: '3s' },
      { label: 'Order Value', value: '2.5x' }
    ],
    category: 'E-Commerce',
  },
  {
    title: 'Pulse Health Platform',
    desc: 'An integrated telehealth ecosystem connecting patients with specialists instantly, featuring secure data encryption and real-time monitoring.',
    tags: ['Healthcare', 'Next.js', 'PostgreSQL', 'WebRTC'],
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    metrics: [
      { label: 'Patients', value: '10k+' },
      { label: 'Wait Time', value: '40%' },
      { label: 'Security', value: '100%' }
    ],
    category: 'Healthcare',
  },
  {
    title: 'Vortex AI Analytics',
    desc: 'Enterprise-grade predictive analytics dashboard that processes millions of data points to provide actionable business intelligence.',
    tags: ['SaaS', 'Python', 'React', 'TensorFlow'],
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    metrics: [
      { label: 'Accuracy', value: '99%' },
      { label: 'Costs', value: '30%' },
      { label: 'Clients', value: '500+' }
    ],
    category: 'SaaS',
  }
];

export const CaseStudies: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((prev) => (prev + 1) % cases.length);
  const prev = () => setActiveIdx((prev) => (prev - 1 + cases.length) % cases.length);

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="projects">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-minimal opacity-[0.15] pointer-events-none"></div>
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>

      <div className="max-w-[1600px] mx-auto relative z-10 px-6">
        <div className="text-center mb-24" data-aos="fade-up">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-[11px] mb-4 block">Our Portfolio</span>
          <h2 className="text-6xl md:text-7xl font-black text-gray-950 tracking-tighter mb-6">
            Engineering <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg">A curated showcase of our most impactful digital transformations.</p>
        </div>

        {/* Overlapping Horizontal Carousel */}
        <div className="relative h-[650px] flex items-center justify-center perspective-[2000px]">
          {cases.map((c, i) => {
            let diff = i - activeIdx;

            // Adjust for circular behavior
            if (diff < -cases.length / 2) diff += cases.length;
            if (diff > cases.length / 2) diff -= cases.length;

            const isCurrent = diff === 0;
            const isPrev = diff === -1;
            const isNext = diff === 1;
            const isHidden = Math.abs(diff) > 1;

            return (
              <div
                key={i}
                className={`absolute w-full max-w-5xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isHidden ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100'}`}
                style={{
                  zIndex: isCurrent ? 30 : 10,
                  transform: `
                    translateX(${diff * 25}%)
                    translateZ(${isCurrent ? '0' : '-150px'})
                    rotateY(${diff * -15}deg)
                    scale(${isCurrent ? 1 : 0.85})
                  `,
                  filter: isCurrent ? 'none' : 'blur(1px) grayscale(0.5)',
                }}
              >
                <div
                  className={`bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col md:flex-row h-[520px] transition-all duration-500 overflow-hidden ${isCurrent ? 'cursor-default ring-1 ring-gray-100' : 'cursor-pointer hover:opacity-100 opacity-60'}`}
                  onClick={() => !isCurrent && setActiveIdx(i)}
                >

                  {/* Image Side */}
                  <div className="w-full md:w-[45%] h-56 md:h-full relative overflow-hidden group">
                    <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/60 to-transparent mix-blend-overlay"></div>

                    {/* Floating Tech Badges */}
                    <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                      {c.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[9px] font-black text-white uppercase tracking-widest border border-white/20">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full md:w-[55%] p-12 flex flex-col bg-white">
                    <div className="flex justify-between items-start mb-8">
                      <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">{c.category}</span>
                      <span className="material-icons text-gray-100 text-5xl select-none">watermark</span>
                    </div>

                    <h3 className="text-4xl font-extrabold text-gray-950 mb-6 leading-[1.1] tracking-tight">{c.title}</h3>
                    <p className="text-gray-500 font-medium leading-relaxed mb-10 flex-grow text-lg">{c.desc}</p>

                    {/* Premium Metrics Grid */}
                    <div className="grid grid-cols-3 gap-6 mb-10 pt-10 border-t border-gray-50">
                      {c.metrics.map((m, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="text-2xl font-black text-gray-950 tracking-tighter">{m.value}</div>
                          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter leading-tight">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 group/link cursor-pointer">
                      <span className="text-[11px] font-black tracking-[0.2em] text-gray-950 group-hover/link:text-primary transition-colors">EXPLORE CASE STUDY</span>
                      <div className="h-px flex-grow bg-gray-100 relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary -translate-x-full group-hover/link:translate-x-0 transition-transform duration-500"></div>
                      </div>
                      <span className="material-icons text-xl group-hover/link:translate-x-2 transition-transform duration-300">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Improved Carousel Controls */}
        <div className="flex items-center justify-between mt-16 max-w-xs mx-auto">
          <button onClick={prev} className="w-16 h-16 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-950 hover:text-white hover:border-gray-950 transition-all duration-300 shadow-sm active:scale-95 group">
            <span className="material-icons transition-transform group-hover:-translate-x-1">west</span>
          </button>

          <div className="flex gap-3">
            {cases.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${activeIdx === i ? 'w-10 bg-primary' : 'w-2 bg-gray-200 hover:bg-gray-300'}`}
              />
            ))}
          </div>

          <button onClick={next} className="w-16 h-16 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-950 hover:text-white hover:border-gray-950 transition-all duration-300 shadow-sm active:scale-95 group">
            <span className="material-icons transition-transform group-hover:translate-x-1">east</span>
          </button>
        </div>
      </div>
    </section>
  );
};
