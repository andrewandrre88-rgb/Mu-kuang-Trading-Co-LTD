import React from 'react';
import { useI18n } from '../i18n-context';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const { t } = useI18n();

  return (
    <section id="why-us" className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-[1px] w-8 bg-secondary"></div>
              <h2 className="text-secondary font-bold uppercase tracking-widest text-[10px]">{t.whyUs.title}</h2>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              {t.whyUs.subtitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.whyUs.items.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-5 h-5 border border-secondary flex items-center justify-center bg-secondary/5">
                      <CheckCircle2 className="w-3 h-3 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1 text-sm uppercase tracking-wide">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 border border-gray-200 bg-[var(--color-background)] p-6 flex flex-col sm:flex-row justify-around relative">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-secondary"></div>
              <div className="text-center mb-6 sm:mb-0">
                <div className="text-4xl font-bold text-primary mb-1">15+</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Years Expertise</div>
              </div>
              <div className="hidden sm:block w-[1px] h-12 bg-gray-300 mx-4"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-1">500+</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Global Clients</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2670&auto=format&fit=crop" 
                alt="Logistics" 
                className="w-full h-80 object-cover mt-8 shadow-sm border border-gray-100"
              />
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop" 
                alt="Warehouse and Logistics" 
                className="w-full h-80 object-cover shadow-sm border border-gray-100"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
