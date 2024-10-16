import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Socials from './components/Socials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/globals.css';


const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((elem) => {
        const scrollY = window.pageYOffset;
        elem.style.transform = `translateY(${scrollY * 0.5}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <div className="bg-black text-white min-h-screen font-inter">
        <Header />
        <Hero />
        <About />
        <Socials />
        <Contact />
        <Footer />
      </div>
  );
};

export default App;
