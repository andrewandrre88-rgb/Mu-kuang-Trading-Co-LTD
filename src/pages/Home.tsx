import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Products />
      <Services />
      <WhyChooseUs />
      <Process />
      <FAQ />
      <Testimonials />
      <Contact />
    </>
  );
}
