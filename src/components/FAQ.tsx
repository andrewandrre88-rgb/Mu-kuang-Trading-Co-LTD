import React, { useState } from 'react';
import { useI18n } from '../i18n-context';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[var(--color-background)] border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div 
            className="w-full lg:w-1/3 lg:sticky lg:top-32"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-[1px] w-8 bg-secondary"></div>
              <h2 className="text-secondary font-bold uppercase tracking-widest text-[10px]">{t.faq.title}</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              {t.faq.subtitle}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Got more questions? Feel free to contact our team for a free consultation about your specific sourcing needs.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-widest py-4 px-8 hover:bg-primary/90 transition-colors"
            >
              Contact Support
            </a>
          </motion.div>

          <motion.div 
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {t.faq.items.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-gray-200 overflow-hidden group hover:border-secondary/50 transition-colors"
                >
                  <button
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h4 className={`text-base font-bold transition-colors ${openIndex === index ? 'text-secondary' : 'text-primary group-hover:text-secondary'}`}>
                      {item.question}
                    </h4>
                    <span className={`ml-4 shrink-0 w-8 h-8 flex items-center justify-center bg-[var(--color-background)] border border-gray-100 text-primary transition-colors ${openIndex === index ? 'bg-secondary border-secondary text-white' : ''}`}>
                      {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="p-6 md:p-8 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 mt-2 bg-gray-50/50">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
