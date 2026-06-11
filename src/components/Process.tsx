import React from 'react';
import { useI18n } from '../i18n-context';
import { motion } from 'motion/react';

export default function Process() {
  const { t } = useI18n();

  return (
    <section id="process" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-[1px] w-8 bg-secondary"></div>
              <h2 className="text-secondary font-bold uppercase tracking-widest text-[10px]">{t.process.title}</h2>
              <div className="h-[1px] w-8 bg-secondary"></div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              {t.process.subtitle}
            </h3>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[24px] left-[50px] w-[calc(100%-100px)] h-[1px] bg-secondary/30"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {t.process.steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mx-auto lg:mx-0 w-12 h-12 bg-primary border border-secondary text-secondary flex items-center justify-center mb-6 relative group-hover:bg-secondary group-hover:text-primary transition-colors duration-300 z-10">
                  <span className="font-bold text-lg">0{index + 1}</span>
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-2 text-center lg:text-left text-white px-2 lg:px-0">
                  {step.title}
                </h4>
                <p className="text-white/60 text-xs px-2 lg:px-0 text-center lg:text-left leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
