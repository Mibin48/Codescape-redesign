
import React from 'react';

const testimonials = [
  {
    name: 'Rakesh Goyal',
    role: 'Co-Founder & CEO at Velt',
    text: 'Love CODESCAPE - When we started out we got all our design and landing page work done from them. They are fast and high quality!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    size: 'small'
  },
  {
    name: 'Ng Yi Ying',
    role: 'Founder at AllSome',
    text: 'We are subscribing Pro and have only good words for the awesome works! Fast matching, outstanding communication, quality works and cost saving! We highly recommend CODESCAPE and enjoy peace of mind!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    size: 'medium'
  },
  {
    name: 'Nik Kotov',
    role: 'Founder & CEO at Atomized',
    text: 'Recently engaged CODESCAPE for a side project I\'m working on. Saw results literally on day 1. Overall, very impressed and will definitely continue to use their services for my graphic design needs!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    size: 'medium'
  },
  {
    name: 'Ben Warren',
    role: 'Co-Founder & CTO at Snowpilot',
    text: 'We used CODESCAPE for our logo design and have received lots of unprompted compliments. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
    size: 'small'
  },
  {
    name: 'Amir Prodensky',
    role: 'CEO at Strada',
    text: 'The team at CODESCAPE is simply phenomenal. They didn\'t just build a website; they built a brand identity that captures exactly who we are. Their technical depth paired with creative flair is rare.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    size: 'large',
    featuredImg: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'Tal Feld',
    role: 'Co-Founder & CEO at Echo',
    text: 'We did the 1 to 1 plan, exceeded our expectations. Amazing support. Highly recommend.',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop',
    size: 'small'
  },
  {
    name: 'Erick Enriquez',
    role: 'Co-Founder & CEO at InQuery',
    text: 'CODESCAPE really quickly matched me to a designer for what I thought would be a short project, but we\'ve now been working together for over a year on everything from UI to marketing assets.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
    size: 'medium'
  },
  {
    name: 'David Head',
    role: 'Founder & CEO at Sixty',
    text: 'Incredible speed and attention to detail. CODESCAPE feels like an extension of our own team rather than an agency.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop',
    size: 'small'
  }
];

export const Testimonial: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden" id="testimonials">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full filter blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full filter blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl" data-aos="fade-right">
            <h2 className="text-sm text-primary font-black tracking-[0.4em] uppercase mb-4 flex items-center gap-2">
              <span className="w-10 h-px bg-primary"></span>
              Wall of Praise
            </h2>
            <p className="text-5xl md:text-7xl font-bold text-gray-950 mb-0 leading-tight tracking-tighter">
              Trusted by <span className="gradient-text">Global Founders</span>
            </p>
          </div>
          <div className="hidden md:block pb-2" data-aos="fade-left">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-gray-50 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-gray-50 bg-gray-950 flex items-center justify-center text-[10px] font-bold text-white">
                +2k
              </div>
            </div>
            <p className="text-xs font-bold text-gray-400 mt-4 tracking-widest text-right uppercase">Join 2,000+ companies</p>
          </div>
        </div>

        {/* Masonry-style Bento Grid using CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`break-inside-avoid group relative bg-white rounded-[32px] p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 border border-gray-100 hover:border-primary/20 flex flex-col ${t.size === 'large' ? 'md:ring-1 md:ring-gray-100' : ''} hover:-translate-y-2 active:scale-95`}
              data-aos="fade-up"
              data-aos-delay={i * 50}
              style={{
                animation: `float ${3 + i % 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            >
              {/* User Info Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-14 h-14 rounded-full p-1 bg-gradient-to-tr from-gray-200 to-transparent group-hover:from-primary/50 transition-colors duration-500">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-950 transition-colors group-hover:text-primary leading-tight">{t.name}</h4>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 font-medium leading-[1.7] mb-6 flex-grow text-[15px]">
                {t.text}
              </p>

              {/* Featured Image for large cards */}
              {t.featuredImg && (
                <div className="mt-4 rounded-2xl overflow-hidden h-48 relative group/img">
                  <img src={t.featuredImg} alt="Work showcase" className="w-full h-full object-cover scale-110 group-hover/img:scale-100 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-transparent group-hover/img:bg-primary/10 transition-colors"></div>
                </div>
              )}

              {/* Quote Symbol (Floating on bottom right) */}
              <div className="absolute bottom-8 right-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <span className="material-icons text-7xl select-none rotate-12">format_quote</span>
              </div>
            </div>
          ))}

          {/* Call to Action Card in Grid */}
          <div
            className="break-inside-avoid group bg-primary rounded-[32px] p-10 flex flex-col items-center justify-center text-center space-y-6 shadow-button transition-all duration-500 hover:scale-[1.02]"
            data-aos="fade-up"
          >
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
              <span className="material-icons text-white text-4xl animate-bounce-slow">volunteer_activism</span>
            </div>
            <h4 className="text-2xl font-black text-white leading-tight">Your Success Story Starts Here</h4>
            <p className="text-white/80 font-medium text-sm">Become part of our global network of innovators.</p>
            <a href="#contact" className="w-full bg-white text-primary rounded-2xl py-4 font-black text-sm uppercase tracking-widest hover:bg-gray-50 transition-colors">
              Start Project
            </a>
          </div>
        </div>

        {/* Global Stats Footer */}
        <div className="mt-24 pt-12 border-t border-gray-100 flex flex-wrap justify-center gap-12 md:gap-24 opacity-60">
          <div className="text-center">
            <div className="text-3xl font-black text-gray-950 tracking-tighter">98%</div>
            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-gray-950 tracking-tighter">250+</div>
            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-gray-950 tracking-tighter">12+</div>
            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Countries Impacted</div>
          </div>
        </div>
      </div>
    </section>
  );
};
