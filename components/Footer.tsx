
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-900 overflow-hidden">
      {/* Top Gradient Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      {/* Main Footer Content */}
      <div className="relative pt-24 pb-16 px-8 sm:px-12 lg:px-20 xl:px-32">
        {/* Decorative Background */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-[100px] translate-y-1/2 pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-8 group cursor-pointer">
              <img src="/no-bg-icon.png" alt="CODESCAPE Logo" className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300" />
              <span className="text-2xl font-bold text-white tracking-tight">
                CODE<span className="gradient-text">SCAPE</span>
              </span>
            </div>
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-sm">
              Empowering businesses through innovative technology and creative design solutions. Where <span className="text-white font-medium">Creativity Meets Technology</span>.
            </p>
            <div className="flex space-x-3">
              {[
                { name: 'LinkedIn', color: 'hover:bg-[#0077b5]' },
                { name: 'Twitter', color: 'hover:bg-[#1da1f2]' },
                { name: 'GitHub', color: 'hover:bg-[#333]' },
                { name: 'Instagram', color: 'hover:bg-[#e1306c]' }
              ].map((social) => (
                <a
                  key={social.name}
                  className={`w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-white/10 hover:border-transparent hover:scale-110 ${social.color}`}
                  href="#"
                  aria-label={social.name}
                >
                  <span className="material-icons text-lg">share</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em]">Our Services</h4>
            <ul className="space-y-4">
              {['Web Development', 'Mobile Applications', 'Cloud Solutions', 'UI/UX Design', 'AI/ML Integration'].map(item => (
                <li key={item}>
                  <a className="text-gray-400 hover:text-primary transition-all duration-300 text-sm flex items-center gap-2 group" href="#">
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:w-2 transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em]">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Latest Projects', 'Career Openings', 'Tech Blog', 'Privacy & Terms'].map(item => (
                <li key={item}>
                  <a className="text-gray-400 hover:text-primary transition-all duration-300 text-sm flex items-center gap-2 group" href="#">
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:w-2 transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter Column */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em]">Get In Touch</h4>

            {/* Contact Info */}
            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-icons text-primary text-lg">location_on</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold mb-0.5">Our Office</p>
                  <p className="text-gray-400 text-sm">Muvattupuzha, Kerala, India - 686661</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-icons text-primary text-lg">email</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold mb-0.5">Email Us</p>
                  <a href="mailto:contact@thecodescape.in" className="text-gray-400 text-sm hover:text-primary transition-colors">contact@thecodescape.in</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-icons text-primary text-lg">call</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold mb-0.5">Call Us</p>
                  <a href="tel:+918921258262" className="text-gray-400 text-2xl font-black hover:text-primary transition-colors tracking-tight">
                    +91 892 125 8262
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
              <p className="text-white text-sm font-bold mb-3">Subscribe to our newsletter</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="flex-1 bg-white/5 border border-white/10 text-white text-sm rounded-xl focus:ring-primary focus:border-primary block p-3.5 placeholder-gray-500 focus:outline-none focus:bg-white/10 transition-all"
                  placeholder="your@email.com"
                  type="email"
                />
                <button
                  className="bg-primary hover:bg-primary/80 text-white rounded-xl px-5 transition-all duration-300 transform active:scale-95 flex items-center justify-center"
                  type="submit"
                >
                  <span className="material-icons text-lg">east</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Bottom Bar */}
      <div className="w-full border-t border-white/5 bg-black/20">
        <div className="px-8 sm:px-12 lg:px-20 xl:px-32 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-gray-400 font-semibold tracking-wide">CODESCAPE</span>. All rights reserved.
            <span className="hidden md:inline mx-3 opacity-30">|</span>
            <br className="md:hidden" />
            Crafting Digital Excellence Worldwide.
          </div>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <a key={item} className="text-gray-500 hover:text-white text-xs transition-colors" href="#">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
