
import React from 'react';

const cases = [
  {
    title: 'Nova Banking App',
    desc: 'A comprehensive mobile banking solution focusing on security, user experience, and real-time transaction processing for the modern user.',
    tags: ['FinTech', 'React', 'Node.js'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_x_VnihrFNfx9Fi3CTBdjHiwTTHCN2qeKVy3VIysal5BFI7NAg6VG3zRk1PNPs0viUjhLAGTdlqb07zlNiQaVE1_q2C_0Vwzw01vn_2v_j0m6x0J6SZrxCRq9v4sOUusBRjgFLZndIh1DQ2FAYcVSPs_az-sHujjUIXgpYvTYgR0QSQkKuZfNZC6zXNtHp0u4pv7AOg7bEV6Q5wuYMiEZfqnXg_998M4jP5c9I3_BlkOncoBMIbhetvcCfReFB7CXpw5tXsYULq3Q'
  },
  {
    title: 'Luxe Fashion Store',
    desc: 'Redesigning the digital storefront for a luxury fashion brand, increasing conversion rates by 45% through intuitive design patterns.',
    tags: ['E-Commerce', 'Shopify', 'AWS'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3fD7hppWELtbCsTghUcOgxjlRoNQExEE7Q0uuIX-Nh_oSNpPtgbLltWPvk7gYKmYhQ-SUTt-X3lzxqgaGOK7SSWy_TCWRLyRpnN-yPlbIz66G1zRNj4E-y8xBdlQcVwHoJagR8OCFtpv0YNsi-uo5rHQR1FWQqo20RMRL-Kels-h5muV0UFzJdAToSaeQ19oMJ_W06scZrbht1hpCLBKXyKtKCOygW5D4GCq1Csjae-BLj-ebaKxqsZOMfjwKXGJT02BNZG508P3s'
  }
];

export const CaseStudies: React.FC = () => {
  return (
    <section className="py-24 bg-background-off" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-main mb-4">Featured Case Studies</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">We take pride in our work. Here are some of the solutions we've engineered.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {cases.map((c, i) => (
            <div key={i} className="group relative flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-white">
                <div className="h-64 md:h-80 overflow-hidden relative">
                  <img 
                    alt={c.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src={c.img}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>
              </div>
              <div className="px-2">
                <div className="flex gap-2 mb-3">
                  {c.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-text-main text-xs font-medium rounded-full">{tag}</span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-text-main mb-2 group-hover:text-primary transition-colors">{c.title}</h3>
                <p className="text-text-muted text-sm mb-4 line-clamp-2 leading-relaxed">{c.desc}</p>
                <a className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors" href="#">
                  View Case Study <span className="material-icons ml-2 text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
