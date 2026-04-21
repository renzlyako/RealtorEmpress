import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Stats from './components/Stats/Stats';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div id="hero">
        <HeroBanner />
      </div>

      <div id="stats">
        <Stats />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="faq">
        <FAQ />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>

      <div id="cta">
        <CTA />
      </div>

      <div id="footer">
        <Footer />
      </div>

    </div>
  );
}

export default App;