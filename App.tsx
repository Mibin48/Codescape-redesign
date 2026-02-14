
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Values } from './components/Values';
import { Expertise } from './components/Expertise';
import { TrustedBy } from './components/TrustedBy';
import { Testimonial } from './components/Testimonial';
import { CaseStudies } from './components/CaseStudies';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background-light overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Values />
        <Expertise />
        <TrustedBy />
        <Testimonial />
        <CaseStudies />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
