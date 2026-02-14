
import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${isScrolled
        ? 'h-16 glass border-b border-gray-200/50 shadow-sm'
        : 'h-20 bg-white/80 backdrop-blur-sm border-b border-transparent'
        }`}>
        <div className="w-full px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <a href="#home" className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
              <img src="/no-bg-icon.png" alt="CODESCAPE Logo" className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300" />
              <span className="text-2xl sm:text-3xl font-bold text-text-main tracking-tight group-hover:text-primary transition-colors">
                CODE<span className="gradient-text">SCAPE</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 ml-auto">
              <div className="flex items-baseline space-x-6">
                {['Home', 'Services', 'About', 'Projects', 'Blog', 'Careers', 'Contact'].map((item) => (
                  <a
                    key={item}
                    className="text-gray-800 hover:text-primary px-4 py-2 rounded-lg text-base font-bold tracking-wide transition-all hover:bg-primary/5"
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <a
                href="#demo"
                className="bg-gray-950 hover:bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95 shadow-lg flex items-center gap-2 group"
              >
                Try Demo
                <span className="material-icons text-xs group-hover:translate-x-0.5 transition-transform">bolt</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-900 hover:text-primary hover:bg-primary/5 focus:outline-none transition-colors"
              >
                <span className="material-icons">{isMobileMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 space-y-6 mt-24">
              {['Home', 'Services', 'About', 'Projects', 'Blog', 'Careers', 'Contact'].map((item, i) => (
                <a
                  key={item}
                  className="block text-gray-900 hover:text-primary px-4 py-3 border-b border-gray-100 rounded-lg text-lg font-bold transition-all hover:bg-primary/5 animate-fade-in-down"
                  href={`#${item.toLowerCase()}`}
                  style={{ animationDelay: `${i * 50}ms` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#demo"
                  className="w-full bg-primary text-white px-6 py-4 rounded-2xl font-black text-center text-lg shadow-xl shadow-primary/20 block active:scale-95 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Try Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
