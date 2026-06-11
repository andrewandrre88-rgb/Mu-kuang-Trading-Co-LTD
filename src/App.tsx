/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { I18nProvider } from './i18n-context';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-[var(--color-background)] font-sans antialiased text-gray-900 selection:bg-secondary selection:text-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Services />
          <WhyChooseUs />
          <Process />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </I18nProvider>
  );
}
