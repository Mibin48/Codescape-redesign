
import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 border-b border-black/5 glass-effect transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold text-lg">C</div>
            <span className="text-2xl font-bold text-text-main tracking-tight group-hover:text-primary transition-colors">CODESCAPE</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              {['Home', 'Services', 'About', 'Projects', 'Blog', 'Contact'].map((item) => (
                <a
                  key={item}
                  className="text-text-muted hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block">
            <a className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg text-sm font-medium shadow-sm transition-all hover:shadow-md" href="#contact">
              START PROJECT
            </a>
          </div>
          
          <div className="md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-text-muted hover:text-text-main hover:bg-gray-100 focus:outline-none">
              <span className="material-icons">menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
