import React from 'react';
import { useI18n } from '../i18n-context';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const { t } = useI18n();

  return (
    <section id="testimonials" className="py-24 bg-white relative border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-[1px] w-8 bg-secondary"></div>
              <h2 className="text-secondary font-bold uppercase tracking-widest text-[10px]">{t.testimonials.title}</h2>
              <div className="h-[1px] w-8 bg-secondary"></div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              {t.testimonials.subtitle}
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[var(--color-background)] border border-gray-100 border-t-2 border-t-secondary p-8 relative group hover:-translate-y-1 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Quote className="w-8 h-8 text-secondary/30 mb-4" />
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-gray-600 italic text-[15px] leading-relaxed mb-8 flex-grow">
                  "{item.quote}"
                </p>
                <div className="flex items-center pt-4 border-t border-gray-200">
                  <div className="w-10 h-10 bg-primary border-r border-b border-secondary flex items-center justify-center text-white font-bold mr-4">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm">{item.author}</h4>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{item.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
