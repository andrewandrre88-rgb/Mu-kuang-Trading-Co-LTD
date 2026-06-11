import React from 'react';
import { useI18n } from '../i18n-context';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section id="home" className="relative min-h-screen pt-20 flex flex-col lg:flex-row overflow-hidden bg-white">
      {/* Light Side */}
      <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto lg:ml-auto lg:mr-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-secondary"></div>
            <span className="text-secondary text-xs font-bold uppercase tracking-widest">
              International Trade & Logistics
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6 text-primary">
            {t.hero.title}
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-primary text-white px-8 py-4 rounded-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
            >
              {t.hero.ctaConsultation}
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <a 
              href="https://wa.me/8618240029066" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary px-8 py-4 rounded-sm font-semibold flex items-center justify-center hover:bg-primary/5 transition-colors"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              {t.hero.ctaWhatsApp}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Dark Side */}
      <div className="w-full lg:w-1/2 bg-primary relative min-h-[50vh] lg:min-h-0 flex items-center justify-center">
        {/* Abstract Geometry */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="none">
            <path d="M150,300 Q400,100 650,300 T150,500" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5,5"/>
            <circle cx="150" cy="300" r="4" fill="#D4A64A"/>
            <circle cx="650" cy="300" r="4" fill="#D4A64A"/>
            <path d="M100,100 L700,500 M700,100 L100,500" stroke="white" strokeWidth="0.5" opacity="0.3"/>
          </svg>
        </div>
        
        {/* Metric Cards Matrix */}
        <div className="grid grid-cols-2 gap-4 p-8 w-full max-w-lg relative z-10 h-full max-h-[500px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-secondary/10 border border-secondary/30 rounded-lg flex flex-col justify-end p-6 aspect-square"
          >
            <span className="text-white font-bold text-4xl mb-1">10+</span>
            <span className="text-white/60 text-xs uppercase font-semibold tracking-wider">Years Expertise</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-lg flex flex-col justify-end p-6 aspect-square mt-8"
          >
            <span className="text-white font-bold text-4xl mb-1">500+</span>
            <span className="text-white/60 text-xs uppercase font-semibold tracking-wider">Verified Factories</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-lg flex flex-col justify-end p-6 aspect-square -mt-8"
          >
            <span className="text-white font-bold text-3xl mb-1">Global</span>
            <span className="text-white/60 text-xs uppercase font-semibold tracking-wider">Shipping Network</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-secondary rounded-lg flex flex-col justify-end p-6 aspect-square"
          >
            <span className="text-primary font-bold text-3xl uppercase mb-1">Pro</span>
            <span className="text-primary/80 text-xs font-bold uppercase tracking-wider">Service Standards</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
