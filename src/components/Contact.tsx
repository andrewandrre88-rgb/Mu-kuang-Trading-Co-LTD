import React, { useState } from 'react';
import { useI18n } from '../i18n-context';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-[var(--color-background)] border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-[1px] w-8 bg-secondary"></div>
              <h2 className="text-secondary font-bold uppercase tracking-widest text-[10px]">{t.contact.title}</h2>
              <div className="h-[1px] w-8 bg-secondary"></div>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              {t.contact.subtitle}
            </h3>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row bg-white border border-gray-200">
          
          {/* Contact Info */}
          <div className="w-full lg:w-5/12 bg-primary text-white p-10 md:p-14 relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2670&auto=format&fit=crop')] opacity-10 mix-blend-overlay object-cover"></div>
            <div className="absolute top-0 right-0 w-24 h-24 border-l border-b border-white/10 flex items-start justify-end p-4">
               <div className="w-2 h-2 bg-secondary"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-wider mb-2">{t.contact.company}</h3>
              {t.contact.companyCn && <p className="text-xs text-secondary tracking-widest uppercase mb-8">{t.contact.companyCn}</p>}
              
              <div className="mb-10 pb-10 border-b border-white/20">
                <span className="font-bold text-white/50 text-sm block tracking-widest uppercase">{t.contact.ceo}</span>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <h5 className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{t.contact.phone}</h5>
                    <p className="text-sm font-medium">{t.contact.phoneVal}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 border border-[#07C160]/30 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-[#07C160]" />
                  </div>
                  <div>
                    <h5 className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{t.contact.wechat}</h5>
                    <p className="text-sm font-medium">{t.contact.wechatVal}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <h5 className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{t.contact.email}</h5>
                    <a href={`mailto:${t.contact.emailVal}`} className="text-sm font-medium hover:text-secondary transition-colors break-all">
                      {t.contact.emailVal}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <h5 className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{t.contact.address}</h5>
                    <p className="text-sm leading-relaxed text-gray-300">{t.contact.addressVal}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-7/12 p-10 md:p-14 relative">
            <h3 className="text-2xl font-bold text-primary mb-8 tracking-wide">Send an Inquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold text-gray-400">{t.contact.form.name}</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-[var(--color-background)] border border-gray-200 focus:outline-none focus:border-secondary transition-all text-sm rounded-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold text-gray-400">{t.contact.form.email}</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-[var(--color-background)] border border-gray-200 focus:outline-none focus:border-secondary transition-all text-sm rounded-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold text-gray-400">{t.contact.form.message}</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-[var(--color-background)] border border-gray-200 focus:outline-none focus:border-secondary transition-all text-sm resize-none rounded-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="bg-primary hover:bg-primary/90 text-white text-xs font-bold uppercase tracking-widest py-4 px-8 w-full transition-all flex items-center justify-center space-x-2 rounded-none"
              >
                {isSubmitted ? (
                  <span className="text-secondary">{t.contact.form.success}</span>
                ) : (
                  <>
                    <span>{t.contact.form.submit}</span>
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
