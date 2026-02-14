
import React from 'react';

const cases = [
  {
    title: 'Nova Banking App',
    desc: 'A comprehensive mobile banking solution focusing on security, user experience, and real-time transaction processing for the modern user.',
    tags: ['FinTech', 'React Native', 'Node.js', 'AWS'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_x_VnihrFNfx9Fi3CTBdjHiwTTHCN2qeKVy3VIysal5BFI7NAg6VG3zRk1PNPs0viUjhLAGTdlqb07zlNiQaVE1_q2C_0Vwzw01vn_2v_j0m6x0J6SZrxCRq9v4sOUusBRjgFLZndIh1DQ2FAYcVSPs_az-sHujjUIXgpYvTYgR0QSQkKuZfNZC6zXNtHp0u4pv7AOg7bEV6Q5wuYMiEZfqnXg_998M4jP5c9I3_BlkOncoBMIbhetvcCfReFB7CXpw5tXsYULq3Q',
    metrics: [
      { icon: 'trending_up', label: '+150% user growth', value: '150%' },
      { icon: 'flash_on', label: '60% faster transactions', value: '60%' },
      { icon: 'attach_money', label: '$2M+ revenue impact', value: '$2M+' }
    ],
    category: 'FinTech',
    award: '🏆 Best Mobile Banking App 2024'
  },
  {
    title: 'Luxe Fashion Store',
    desc: 'Redesigning the digital storefront for a luxury fashion brand, increasing conversion rates by 45% through intuitive design patterns and seamless checkout experience.',
    tags: ['E-Commerce', 'Shopify', 'React', 'AWS'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3fD7hppWELtbCsTghUcOgxjlRoNQExEE7Q0uuIX-Nh_oSNpPtgbLltWPvk7gYKmYhQ-SUTt-X3lzxqgaGOK7SSWy_TCWRLyRpnN-yPlbIz66G1zRNj4E-y8xBdlQcVwHoJagR8OCFtpv0YNsi-uo5rHQR1FWQqo20RMRL-Kels-h5muV0UFzJdAToSaeQ19oMJ_W06scZrbht1hpCLBKXyKtKCOygW5D4GCq1Csjae-BLj-ebaKxqsZOMfjwKXGJT02BNZG508P3s',
    metrics: [
      { icon: 'shopping_cart', label: '+45% conversion rate', value: '45%' },
      { icon: 'speed', label: '3s avg load time', value: '3s' },
      { icon: 'local_mall', label: '2.5x avg order value', value: '2.5x' }
    ],
    category: 'E-Commerce',
    award: null
  }
];

const categoryColors: { [key: string]: string } = {
  'FinTech': 'bg-green-500',
  'E-Commerce': 'bg-purple-500',
  'Healthcare': 'bg-blue-500',
  'SaaS': 'bg-orange-500'
};

export const CaseStudies: React.FC = () => {
  return (
    <section className="py-24 bg-background-off relative overflow-hidden" id="projects">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-minimal opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-sm text-primary font-bold tracking-wider uppercase mb-3 inline-block px-4 py-1.5 bg-primary/5 rounded-full">
            Success Stories
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-text-main mb-4">
            Featured <span className="gradient-text">Case Studies</span>
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            We take pride in our work. Here are some of the transformative solutions we've engineered for our clients.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {cases.map((c, i) => (
            <div
              key={i}
              className="group card-hover bg-white rounded-3xl overflow-hidden shadow-card cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Image Container */}
              <div className="relative h-72 md:h-80 overflow-hidden">
                <img
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={c.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className={`${categoryColors[c.category] || 'bg-primary'} text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg`}>
                    {c.category}
                  </span>
                </div>

                {/* Award Badge */}
                {c.award && (
                  <div className="absolute top-6 right-6 glass-dark px-4 py-2 rounded-full text-xs font-semibold text-white backdrop-blur-md">
                    {c.award}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {c.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-text-main text-xs font-semibold rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl md:text-3xl font-bold text-text-main mb-3 group-hover:text-primary transition-colors">
                  {c.title}
                </h3>
                <div className="w-16 h-0.5 bg-gradient-primary mb-4"></div>
                <p className="text-text-muted text-base mb-6 leading-relaxed line-clamp-2">
                  {c.desc}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl">
                  {c.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mx-auto mb-2 shadow-sm">
                        <span className="material-icons text-primary text-lg">{metric.icon}</span>
                      </div>
                      <div className="text-lg font-bold text-primary">{metric.value}</div>
                      <div className="text-xs text-text-muted leading-tight">{metric.label.replace(metric.value + ' ', '')}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors group/link"
                  href="#"
                >
                  <span>View Full Case Study</span>
                  <span className="material-icons ml-2 text-lg transform group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16" data-aos="fade-up">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-button"
          >
            <span>View All Projects</span>
            <span className="material-icons">apps</span>
          </a>
        </div>
      </div>
    </section>
  );
};
