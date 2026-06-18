import React, { useEffect } from 'react';
import { useI18n } from '../i18n-context';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function CompanyProfilePage() {
  const { t } = useI18n();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-10">
        
        <div className="mb-8">
          <Link to="/#about" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.nav.home}
          </Link>
        </div>

        <div className="bg-white p-6 md:p-12 rounded-sm shadow-sm border border-gray-100 flex flex-col gap-12">
          {/* Header */}
          <motion.div 
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-[1px] w-8 bg-secondary"></div>
              <span className="text-secondary font-bold uppercase tracking-widest text-[10px]">MU KUANG TRADING</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              {t.companyProfile.title}
            </h1>
          </motion.div>

          {/* Content block 1 */}
          <div className="flex flex-col lg:flex-row gap-10">
            <motion.div 
              className="lg:w-1/2 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-gray-700 leading-relaxed text-lg">
                {t.companyProfile.paragraphs[0]}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t.companyProfile.paragraphs[1]}
              </p>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://raw.githubusercontent.com/andrewandrre88-rgb/Mu-Kuang-images/main/mmexport1781702861309.jpg"
                alt="Company Facilities"
                className="w-full h-full object-cover rounded-sm border border-gray-100"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Content block 2 */}
          <div className="flex flex-col lg:flex-row-reverse gap-10 mt-6 border-t border-gray-100 pt-12">
            <motion.div 
              className="lg:w-1/2 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-700 leading-relaxed text-lg">
                {t.companyProfile.paragraphs[2]}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t.companyProfile.paragraphs[3]}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg font-medium">
                {t.companyProfile.paragraphs[4]}
              </p>
            </motion.div>
            <motion.div 
              className="lg:w-1/2 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img 
                src="https://raw.githubusercontent.com/andrewandrre88-rgb/Mu-Kuang-images/main/mmexport1781702952624.jpg"
                alt="Factory Operations"
                className="w-full h-full min-h-[250px] object-cover rounded-sm border border-gray-100"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://raw.githubusercontent.com/andrewandrre88-rgb/Mu-Kuang-images/main/mmexport1781702957135.jpg"
                alt="Assembly Line"
                className="w-full h-full min-h-[250px] object-cover rounded-sm border border-gray-100"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
