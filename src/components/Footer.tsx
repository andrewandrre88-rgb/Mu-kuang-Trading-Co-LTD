import React from 'react';
import { useI18n } from '../i18n-context';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <h3 className="font-bold text-2xl mb-2 text-secondary tracking-wider">MU KUANG</h3>
            <h4 className="text-white text-[10px] tracking-[0.2em] uppercase mb-6">Guangzhou Trading Co., Ltd.</h4>
            <div className="h-[1px] w-8 bg-secondary mb-4"></div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6 uppercase tracking-wide">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-secondary mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              <li><Link to="/#home" className="text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider">{t.nav.home}</Link></li>
              <li><Link to="/company-profile" className="text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider">{t.nav.profile}</Link></li>
              <li><Link to="/#about" className="text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider">{t.nav.about}</Link></li>
              <li><Link to="/#services" className="text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider">{t.nav.services}</Link></li>
              <li><Link to="/#process" className="text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider">{t.nav.process}</Link></li>
              <li><Link to="/#contact" className="text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-secondary mb-6">{t.footer.social}</h4>
            <div className="space-y-3">
              <a href="https://wa.me/8615119021614" target="_blank" rel="noopener noreferrer" className="block text-white/60 hover:text-[#25D366] transition-colors text-xs font-bold uppercase tracking-wider">
                WhatsApp
              </a>
              <div className="text-white/60 text-xs font-bold uppercase tracking-wider">
                <span className="hover:text-[#07C160] transition-colors cursor-pointer">WeChat:</span> MK_9066
              </div>
              <a href={`mailto:${t.contact.emailVal}`} className="block text-white/60 hover:text-secondary transition-colors text-xs font-bold uppercase tracking-wider">
                Email
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col items-center text-center">
          <p className="text-white/40 text-[10px] tracking-widest uppercase">
            © {new Date().getFullYear()} Guangzhou Mu Kuang Trading Co., Ltd. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
