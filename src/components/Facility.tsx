import React from 'react';
import { useI18n } from '../i18n-context';
import { motion } from 'motion/react';

const facilityImages = [
  "mmexport1781702952624.jpg",
  "mmexport1781702957135.jpg",
  "mmexport1781702963750.jpg",
  "mmexport1781702969282.jpg",
  "mmexport1781702973209.jpg",
  "mmexport1781702977422.jpg",
  "mmexport1781702981658.jpg",
  "mmexport1781702987638.jpg",
  "mmexport1781702994637.jpg",
  "mmexport1781702998494.jpg",
  "mmexport1781703003294.jpg",
  "mmexport1781703006307.jpg",
  "mmexport1781703009833.jpg",
  "mmexport1781703015409.jpg",
  "mmexport1781703019662.jpg",
  "mmexport1781703024493.jpg"
].map(img => `https://raw.githubusercontent.com/andrewandrre88-rgb/Mu-Kuang-images/main/${img}`);

export default function Facility() {
  const { t } = useI18n();

  return (
    <section id="facility" className="py-24 bg-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-[1px] w-8 bg-secondary"></div>
              <h2 className="text-secondary font-bold uppercase tracking-widest text-[10px]">{t.facility.title}</h2>
              <div className="h-[1px] w-8 bg-secondary"></div>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              {t.facility.subtitle}
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {facilityImages.map((src, index) => (
            <motion.div
              key={index}
              className="relative aspect-video md:aspect-square overflow-hidden bg-gray-200 group border border-gray-100 shadow-sm rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.1 }}
            >
              <img 
                src={src} 
                alt={`Facility view ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
