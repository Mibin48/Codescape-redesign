
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
        <div className="w-full px-4 sm:px-6 lg:px-12 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <a href="#home" className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
              <img src="/no-bg-icon.png" alt="CODESCAPE Logo" className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300" />
              <span className="text-2xl sm:text-3xl font-bold text-text-main tracking-tight group-hover:text-primary transition-colors">
                CODE<span className="gradient-text">SCAPE</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-2">
                {['Home', 'Services', 'About', 'Projects', 'Contact'].map((item) => (
                  <a
                    key={item}
                    className="text-text-muted hover:text-primary px-4 py-2 rounded-lg text-base font-semibold transition-all hover:bg-primary/5"
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a
                className="btn-primary text-white px-8 py-3.5 rounded-xl text-base font-bold inline-flex items-center gap-2 group relative overflow-hidden"
                href="#contact"
              >
                <span className="relative z-10">🚀 Start Project</span>
                <span className="material-icons text-base relative z-10 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-text-muted hover:text-primary hover:bg-primary/5 focus:outline-none transition-colors"
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
            className="absolute right-0 top-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 space-y-4 mt-20">
              {['Home', 'Services', 'About', 'Projects', 'Contact'].map((item, i) => (
                <a
                  key={item}
                  className="block text-text-muted hover:text-primary px-4 py-3 rounded-lg text-base font-semibold transition-all hover:bg-primary/5 animate-fade-in-down"
                  href={`#${item.toLowerCase()}`}
                  style={{ animationDelay: `${i * 50}ms` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                className="block btn-primary text-white text-center px-6 py-3 rounded-xl text-sm font-bold mt-6"
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                🚀 Start Project
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
