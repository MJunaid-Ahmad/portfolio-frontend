import React from 'react';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Experience from '../components/experience/Experience';
import CTA from '../components/cta/CTA';

const HomePage = () => {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <CTA />
    </div>
  );
};

export default HomePage;
