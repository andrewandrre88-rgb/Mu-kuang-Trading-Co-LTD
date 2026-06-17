import React from 'react';
import { useI18n } from '../i18n-context';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Products() {
  const { t } = useI18n();

  return (
    <section id="products" className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-[1px] w-8 bg-secondary"></div>
              <h2 className="text-secondary font-bold uppercase tracking-widest text-[10px]">{t.products.title}</h2>
              <div className="h-[1px] w-8 bg-secondary"></div>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              {t.products.subtitle}
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <motion.div
                className="relative aspect-square overflow-hidden bg-gray-50 group border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: parseInt(product.id) * 0.05 }}
              >
                <img 
                  src={product.src} 
                  alt={`Motorcycle ${product.id}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/8615119021614"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-secondary hover:bg-[#b08b5c] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all"
          >
            <span>{t.products.viewMore}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
