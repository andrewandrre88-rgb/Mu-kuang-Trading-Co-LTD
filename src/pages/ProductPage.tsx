import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useI18n } from '../i18n-context';
import { products, Product } from '../data/products';
import { motion } from 'motion/react';
import { ArrowLeft, MessageCircle } from 'lucide-react';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useI18n();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProduct = products.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  if (!product) return null;

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-10">
        <div className="mb-8">
          <Link to="/#products" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="bg-white p-6 md:p-12 rounded-sm shadow-sm border border-gray-100 flex flex-col md:flex-row gap-12">
          {/* Image Gallery */}
          <motion.div 
            className="w-full md:w-1/2 aspect-square bg-gray-100 flex items-center justify-center overflow-hidden relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={product.src} 
              alt={`Product ${product.id}`} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div 
            className="w-full md:w-1/2 flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-[1px] w-8 bg-secondary"></div>
              <span className="text-secondary font-bold uppercase tracking-widest text-[10px]">MU KUANG PRODUCT</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Product Item #{product.id}
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We specialize in sourcing, verifying, and exporting high-quality products from China to destinations worldwide. 
              Contact us for detailed specifications, minimum order quantities (MOQ), and current pricing for this item.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center justify-between border-b border-gray-100 py-3">
                <span className="text-sm text-gray-500 uppercase font-semibold">Availability</span>
                <span className="text-sm font-medium text-primary">In Stock / Sourcing</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 py-3">
                <span className="text-sm text-gray-500 uppercase font-semibold">Origin</span>
                <span className="text-sm font-medium text-primary">China</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 py-3">
                <span className="text-sm text-gray-500 uppercase font-semibold">Customization</span>
                <span className="text-sm font-medium text-primary">OEM / ODM Available</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://wa.me/8615119021614?text=Hello,%20I%20am%20interested%20in%20Product%20Item%20%23${product.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba56] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Inquire on WhatsApp
              </a>
              <Link 
                to="/#contact"
                className="bg-primary hover:bg-[#0B2D5C] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center text-center"
              >
                Email Inquiry
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
