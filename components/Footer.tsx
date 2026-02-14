
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
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-sm">
              Empowering businesses through innovative technology and creative design solutions. Where <span className="text-white font-medium">Creativity Meets Technology</span>.
            </p>
            <div className="flex space-x-3">
              {[
                {
                  name: 'LinkedIn',
                  color: 'hover:bg-[#0077b5]',
                  svg: (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )
                },
                {
                  name: 'Twitter',
                  color: 'hover:bg-[#1da1f2]',
                  svg: (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  )
                },
                {
                  name: 'GitHub',
                  color: 'hover:bg-[#333]',
                  svg: (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  )
                },
                {
                  name: 'Instagram',
                  color: 'hover:bg-[#e1306c]',
                  svg: (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )
                }
              ].map((social) => (
                <a
                  key={social.name}
                  className={`w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-white/10 hover:border-transparent hover:scale-110 ${social.color}`}
                  href="#"
                  aria-label={social.name}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 uppercase text-sm tracking-[0.2em]">Our Services</h4>
            <ul className="space-y-4">
              {['Web Development', 'Mobile Applications', 'Cloud Solutions', 'UI/UX Design', 'AI/ML Integration'].map(item => (
                <li key={item}>
                  <a className="text-gray-400 hover:text-primary transition-all duration-300 text-base flex items-center gap-2 group" href="#">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:w-2.5 transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 uppercase text-sm tracking-[0.2em]">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Latest Projects', 'Career Openings', 'Tech Blog', 'Privacy & Terms'].map(item => (
                <li key={item}>
                  <a className="text-gray-400 hover:text-primary transition-all duration-300 text-base flex items-center gap-2 group" href="#">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:w-2.5 transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-white font-bold mb-8 uppercase text-sm tracking-[0.2em]">Get In Touch</h4>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-icons text-primary text-lg">location_on</span>
                </div>
                <div>
                  <p className="text-white text-base font-semibold mb-0.5">Our Office</p>
                  <p className="text-gray-400 text-base">Muvattupuzha, Kerala, India - 686661</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-icons text-primary text-lg">email</span>
                </div>
                <div>
                  <p className="text-white text-base font-semibold mb-0.5">Email Us</p>
                  <a href="mailto:contact@thecodescape.in" className="text-gray-400 text-base hover:text-primary transition-colors">contact@thecodescape.in</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-icons text-primary text-lg">call</span>
                </div>
                <div>
                  <p className="text-white text-base font-semibold mb-0.5">Call Us</p>
                  <a href="tel:+918921258262" className="text-gray-400 text-3xl font-black hover:text-primary transition-colors tracking-tight">
                    +91 892 125 8262
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
              <p className="text-white text-base font-bold mb-3">Subscribe to our newsletter</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="flex-1 bg-white/5 border border-white/10 text-white text-base rounded-xl focus:ring-primary focus:border-primary block p-3.5 placeholder-gray-500 focus:outline-none focus:bg-white/10 transition-all"
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
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm text-center md:text-left leading-relaxed">
            © {new Date().getFullYear()} <span className="text-gray-400 font-semibold tracking-wide">CODESCAPE</span>. All rights reserved.
            <span className="hidden md:inline mx-3 opacity-30">|</span>
            <br className="md:hidden" />
            Crafting Digital Excellence Worldwide.
          </div>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <a key={item} className="text-gray-500 hover:text-white text-sm transition-colors font-medium" href="#">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
