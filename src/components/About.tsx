import React from 'react';
import { useI18n } from '../i18n-context';
import { motion } from 'motion/react';
import { Building2, Globe2, Leaf } from 'lucide-react';

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/3] rounded-sm overflow-hidden relative shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop" 
                alt="Business Meeting" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/5"></div>
            </div>
            
            {/* Overlay Box */}
            <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 border border-secondary/30 hidden md:block max-w-[280px]">
              <div className="w-10 h-10 bg-secondary flex items-center justify-center mb-4">
                <Globe2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Reach</h3>
              <p className="text-xs text-white/60">Connecting Chinese manufacturing to the world market.</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-[1px] w-8 bg-secondary"></div>
              <h2 className="text-secondary font-bold uppercase tracking-widest text-[10px]">{t.about.title}</h2>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              {t.about.company}
            </h3>
            
            <div className="space-y-4 text-gray-600 text-[15px]">
              <p className="leading-relaxed">
                {t.about.p1}
              </p>
              <p className="leading-relaxed">
                {t.about.p2}
              </p>
            </div>

            {/* CEO Quote */}
            <div className="mt-8 border-l border-gray-200 pl-6 py-2">
              <h3 className="text-secondary text-[10px] font-bold uppercase tracking-widest mb-3">CEO Vision</h3>
              <p className="italic text-sm text-gray-600 mb-4">
                {t.about.ceoQuote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary border-2 border-secondary flex items-center justify-center text-secondary font-bold text-xs uppercase overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=250&auto=format&fit=crop" className="w-full h-full object-cover" alt="CEO" />
                </div>
                <div>
                  <p className="font-bold text-sm text-primary">{t.about.ceoName}</p>
                  <p className="text-[10px] text-secondary font-bold uppercase tracking-widest">{t.about.ceoTitle}</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
