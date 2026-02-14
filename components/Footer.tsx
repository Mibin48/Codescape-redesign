
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-900 pt-24 pb-12 overflow-hidden" id="contact">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8 group cursor-pointer">
              <img src="/no-bg-icon.png" alt="CODESCAPE Logo" className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300" />
              <span className="text-2xl font-bold text-white tracking-tight">
                CODE<span className="gradient-text">SCAPE</span>
              </span>
            </div>
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-xs">
              Empowering businesses through innovative technology and creative design solutions. Where <span className="text-white font-medium">Creativity Meets Technology</span>.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'LinkedIn', icon: 'linkedin', color: 'hover:bg-[#0077b5]' },
                { name: 'Twitter', icon: 'twitter', color: 'hover:bg-[#1da1f2]' },
                { name: 'GitHub', icon: 'github', color: 'hover:bg-[#333]' },
                { name: 'Instagram', icon: 'instagram', color: 'hover:bg-[#e1306c]' }
              ].map((social) => (
                <a
                  key={social.name}
                  className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-white/10 ${social.color}`}
                  href="#"
                >
                  <span className="sr-only">{social.name}</span>
                  <span className="material-icons text-xl">share</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
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

          {/* Company Column */}
          <div>
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

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em]">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-6">Stay informed with our latest news and tech insights.</p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input
                className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-xl focus:ring-primary focus:border-primary block p-4 pr-16 placeholder-gray-500 focus:outline-none focus:bg-white/10 transition-all"
                placeholder="Your email address"
                type="email"
              />
              <button
                className="absolute right-2 top-2 bottom-2 bg-gradient-primary hover:shadow-glow text-white rounded-lg px-4 transition-all duration-300 transform active:scale-95"
                type="submit"
              >
                <span className="material-icons">east</span>
              </button>
            </form>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 text-sm text-gray-400">
                <span className="material-icons text-primary/60">location_on</span>
                <span>Muvattupuzha, Kerala, <br />India - 686661</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="material-icons text-primary/60">email</span>
                <a href="mailto:contact@thecodescape.in" className="hover:text-primary transition-colors">contact@thecodescape.in</a>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="material-icons text-primary/60">call</span>
                <a href="tel:+918921258262" className="hover:text-primary transition-colors">+91 8921258262</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-gray-500 text-xs">
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
