import { Menu, X, Globe } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useI18n } from '../i18n-context';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.process, href: '#process' },
    { name: t.nav.whyUs, href: '#why-us' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-primary py-3 border-secondary/50 shadow-md' : 'bg-primary h-20 border-secondary/30 flex items-center'
      }`}
    >
      <div className="container mx-auto px-4 md:px-10 flex justify-between items-center w-full">
        {/* Logo */}
        <a href="#home" className="flex flex-col">
          <span className={`text-secondary font-bold text-xl md:text-2xl tracking-wider leading-none`}>
            MU KUANG
          </span>
          <span className={`text-white text-[10px] md:text-xs tracking-[0.2em] mt-1`}>
            GUANGZHOU TRADING CO., LTD.
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 text-white/80 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex gap-2 text-xs text-white/60 font-semibold cursor-pointer" onClick={toggleLanguage}>
            <span className={language === 'en' ? 'text-white' : 'hover:text-white transition-colors'}>EN</span>
            <span>|</span>
            <span className={language === 'zh' ? 'text-white' : 'hover:text-white transition-colors'}>CN</span>
          </div>
          <a
            href="#contact"
            className="bg-secondary text-white px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#b88d3a] transition-colors"
          >
            Consultation
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center lg:hidden space-x-4">
          <div className="flex gap-2 text-xs text-white/60 font-semibold cursor-pointer" onClick={toggleLanguage}>
            <span className={language === 'en' ? 'text-white' : ''}>EN</span>
            <span>|</span>
            <span className={language === 'zh' ? 'text-white' : ''}>CN</span>
          </div>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden pt-4 pb-6 px-4 absolute top-full left-0 w-full bg-primary shadow-lg border-t border-secondary/30`}
          >
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-white font-medium text-lg border-b border-white/10 pb-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
