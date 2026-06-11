import React from 'react';
import { useI18n } from '../i18n-context';
import { motion } from 'motion/react';
import { 
  PackageSearch, FileCheck2, Handshake, ShieldCheck, 
  Factory, ClipboardList, TrendingUp, Ship, 
  FileBox, Warehouse, Building, LayoutTemplate, 
  MonitorSmartphone, Car, Globe2
} from 'lucide-react';

const iconMap = [
  PackageSearch, FileCheck2, Handshake, ShieldCheck,
  Factory, ClipboardList, TrendingUp, Ship,
  FileBox, Warehouse, Building, LayoutTemplate,
  MonitorSmartphone, Car, Globe2
];

export default function Services() {
  const { t } = useI18n();

  return (
    <section id="services" className="py-24 bg-[var(--color-background)] border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-10">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-[1px] w-8 bg-secondary"></div>
              <h2 className="text-secondary font-bold uppercase tracking-widest text-[10px]">{t.services.title}</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-primary leading-tight">
              {t.services.subtitle}
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-200 bg-white">
          {t.services.items.map((service, index) => {
            const IconComponent = iconMap[index % iconMap.length];
            return (
              <motion.div
                key={index}
                className="p-8 border-b border-r border-gray-200 group hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[var(--color-background)] flex items-center justify-center text-secondary font-bold text-sm shrink-0 border border-secondary/10 group-hover:border-secondary/30 transition-colors">
                    <IconComponent className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2 text-sm uppercase tracking-wide">
                      {service.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
