
import React from 'react';

const services = [
  {
    icon: 'language',
    title: 'Web Development',
    desc: 'High-performance websites and web applications built with modern frameworks and best practices.',
    tech: ['React', 'Next.js', 'Node.js'],
    projects: 45,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    icon: 'smartphone',
    title: 'Mobile Apps',
    desc: 'Native and cross-platform mobile experiences that users love on iOS and Android.',
    tech: ['React Native', 'Flutter', 'Swift'],
    projects: 28,
    color: 'from-violet-500 to-purple-400'
  },
  {
    icon: 'cloud_queue',
    title: 'Cloud Solutions',
    desc: 'Scalable cloud infrastructure, migration, and serverless architecture for modern apps.',
    tech: ['AWS', 'Azure', 'Docker'],
    projects: 32,
    color: 'from-emerald-500 to-teal-400'
  },
  {
    icon: 'palette',
    title: 'UI/UX Design',
    desc: 'User-centric design that creates intuitive and beautiful digital products.',
    tech: ['Figma', 'Adobe XD', 'Sketch'],
    projects: 52,
    color: 'from-amber-500 to-orange-400'
  }
];

export const Expertise: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="services">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-50/60 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-50/40 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

      {/* Grid Dots Background */}
      <div className="absolute inset-0 bg-grid-dots opacity-30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-xs mb-6 px-5 py-2 rounded-full border border-primary/20 bg-primary/5">
            <span className="material-icons text-sm">auto_awesome</span>
            What We Do
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight mb-6 leading-[0.95]">
            Engineering<br />
            <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We transform complex challenges into elegant, scalable digital solutions that drive measurable business impact.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative rounded-3xl bg-white border border-gray-200/80 hover:border-transparent overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)]"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Hover Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="absolute inset-[1.5px] rounded-[22px] bg-white z-[1]"></div>

              <div className="relative z-[2] p-10 lg:p-12 flex flex-col min-h-[340px]">

                {/* Top Row: Icon + Project Count */}
                <div className="flex items-start justify-between mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <span className="material-icons text-white text-3xl">{s.icon}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-black text-gray-900 leading-none">{s.projects}+</span>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1">Projects</p>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300 tracking-tight">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-base leading-relaxed mb-8 flex-grow">
                  {s.desc}
                </p>

                {/* Bottom: Tech Tags + Arrow */}
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100 group-hover:border-gray-200 transition-colors">
                  <div className="flex flex-wrap gap-2">
                    {s.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-gray-500 font-semibold group-hover:border-primary/20 group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:shadow-button transition-all duration-300 flex-shrink-0 ml-4">
                    <span className="material-icons text-gray-400 text-lg group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300">arrow_forward</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {[
            { value: '157+', label: 'Projects Delivered', icon: 'rocket_launch' },
            { value: '98%', label: 'Client Satisfaction', icon: 'sentiment_very_satisfied' },
            { value: '24/7', label: 'Support Available', icon: 'support_agent' },
            { value: '6+', label: 'Years Experience', icon: 'verified' }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-gray-50/80 border border-gray-100 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 group cursor-default">
              <span className="material-icons text-primary text-2xl mb-3 block group-hover:scale-110 transition-transform">{stat.icon}</span>
              <div className="text-3xl md:text-4xl font-black text-gray-900 mb-1">{stat.value}</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
