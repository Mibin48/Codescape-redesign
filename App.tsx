
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Values } from './components/Values';
import { Expertise } from './components/Expertise';
import { Blog } from './components/Blog';
import { TrustedBy } from './components/TrustedBy';
import { Testimonial } from './components/Testimonial';
import { CaseStudies } from './components/CaseStudies';
import { CTA } from './components/CTA';
import { Careers } from './components/Careers';
import { Footer } from './components/Footer';

// Declare AOS to avoid TS errors
declare var AOS: any;

function App() {
  useEffect(() => {
    // Refresh AOS once components are mounted
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
      });
      // Periodically refresh AOS to catch dynamic content or late renders
      const timer = setInterval(() => {
        AOS.refresh();
      }, 1000);
      return () => clearInterval(timer);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background-light">
      <Navbar />
      <main>
        <Hero />
        <Values />
        <Expertise />
        <TrustedBy />
        <Testimonial />
        <CaseStudies />
        <Blog />
        <Careers />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
