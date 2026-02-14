
import React from 'react';

const services = [
  {
    icon: 'language',
    title: 'Websites that Work',
    desc: 'We build fast, friendly websites that look great on any screen and feel even better to use.',
    tech: ['React', 'Next.js', 'Node.js'],
    projects: 45,
    color: 'from-blue-500 to-cyan-400',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop'
  },
  {
    icon: 'smartphone',
    title: 'Mobile Experiences',
    desc: "Apps that people actually want to keep on their phones. Smooth, intuitive, and built for real life.",
    tech: ['React Native', 'Flutter', 'Swift'],
    projects: 28,
    color: 'from-violet-500 to-purple-400',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop'
  },
  {
    icon: 'cloud_queue',
    title: 'Modern Infrastructure',
    desc: "Setting up a solid foundation for your app to grow, so you can focus on your users without the headaches.",
    tech: ['AWS', 'Azure', 'Docker'],
    projects: 32,
    color: 'from-emerald-500 to-teal-400',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop'
  },
  {
    icon: 'palette',
    title: 'Human Design',
    desc: "We design experiences that feel natural, not frustrating. Beautiful interfaces that just make sense.",
    tech: ['Figma', 'Adobe XD', 'Sketch'],
    projects: 52,
    color: 'from-amber-500 to-orange-400',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop'
  }
];

export const Expertise: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="services">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-50/60 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-50/40 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-dots opacity-30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-xs mb-6 px-5 py-2 rounded-full border border-primary/20 bg-primary/5">
            <span className="material-icons text-sm">auto_awesome</span>
            What we're good at
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight mb-6 leading-[0.95]">
            Crafting Digital<br />
            <span className="gradient-text">Experiences</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We don't just build software. We create digital tools that solve real problems and make people's lives just a little bit easier.
          </p>
        </div>

        {/* Bento Grid Layout with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative rounded-3xl bg-white border border-gray-200/80 hover:border-transparent overflow-hidden cursor-pointer transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Hover Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              <div className="absolute inset-[1.5px] rounded-[22px] bg-white z-[1]"></div>

              <div className="relative z-[2]">
                {/* Image Banner */}
                <div className="relative h-48 overflow-hidden rounded-t-[22px]">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-100 group-hover:opacity-60 transition-opacity duration-700`}></div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-30 transition-opacity duration-700 mix-blend-overlay`}></div>

                  {/* Floating Project Count on Image */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-xl px-4 py-2 shadow-lg transform group-hover:-translate-x-2 transition-transform duration-500">
                    <span className="text-2xl font-black text-gray-900 leading-none group-hover:text-primary transition-colors">{s.projects}+</span>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Projects</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 lg:p-12 pt-6">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} shadow-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-[15deg] transition-all duration-500 flex-shrink-0 group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]`}>
                      <span className="material-icons text-white text-2xl">{s.icon}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-gray-900 group-hover:text-primary transition-colors duration-300 tracking-tight group-hover:translate-x-2 transition-transform">
                      {s.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-base leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                    {s.desc}
                  </p>

                  {/* Bottom: Tech Tags + Arrow */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100 group-hover:border-primary/10 transition-colors">
                    <div className="flex flex-wrap gap-2">
                      {s.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-gray-500 font-semibold group-hover:border-primary/30 group-hover:text-primary group-hover:bg-white group-hover:shadow-sm transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gray-900 border border-transparent flex items-center justify-center group-hover:bg-primary group-hover:scale-110 group-hover:shadow-xl transition-all duration-500 flex-shrink-0 ml-4 group/arrow">
                      <span className="material-icons text-white text-xl group-hover:rotate-[-45deg] transition-all duration-500">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Showreel Video Section */}
        <div className="mt-20 rounded-3xl overflow-hidden relative group" data-aos="fade-up" data-aos-delay="200">
          <div className="relative aspect-[4/3] md:aspect-video bg-gray-950">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-laptop-keyboard-4131-large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent"></div>

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-8">
              <div className="relative group/play cursor-pointer mb-6 md:mb-8">
                {/* Multiple Animated Rings */}
                <div className="absolute inset-0 rounded-full bg-white/20 animate-ping duration-1000"></div>
                <div className="absolute -inset-2 md:-inset-4 rounded-full bg-white/10 animate-pulse duration-1000"></div>

                {/* Actual Button */}
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white text-gray-950 flex items-center justify-center relative z-10 group-hover/play:scale-110 group-hover/play:bg-primary group-hover/play:text-white transition-all duration-500">
                  <span className="material-icons text-3xl md:text-5xl ml-1">play_arrow</span>
                </div>
              </div>
              <h3 className="text-2xl md:text-5xl font-black text-white mb-2 md:mb-3 tracking-tight leading-none">See Our Process</h3>
              <p className="text-white/60 text-sm md:text-base font-medium max-w-[280px] md:max-w-sm mx-auto">Experience the journey from a bold vision to a pixel-perfect digital reality.</p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
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
