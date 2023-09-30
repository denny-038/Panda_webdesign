import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import Process from '../components/Process';

function Homepage() {
  return (
    <div>
      <Hero/>
      <About/>
      <Process/>
      <Contact/>
    </div>
  );
}

export default Homepage;