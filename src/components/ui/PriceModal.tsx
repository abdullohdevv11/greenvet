
import { X } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import type { PriceItem } from "../../data/prices";

interface PriceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  items: PriceItem[];
}

export default function PriceModal({ isOpen, onClose, title, items }: PriceModalProps) {
  const { t } = useTranslation();
  
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-[30px] w-full max-w-md max-h-[90vh] flex flex-col relative z-10"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold font-rounded text-gray-900 pr-8">
                {t(title)}
              </h3>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors absolute right-4 top-4 md:right-6 md:top-6"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="overflow-y-auto p-6 space-y-4">
              {items && items.length > 0 ? (
                items.map((item, index) => (
                  <div key={index} className="flex justify-between items-start gap-4 py-2 border-b border-dashed border-gray-200 last:border-0">
                    <span className="font-medium text-gray-700 text-sm md:text-base">
                      {t(item.name)}
                    </span>
                    <span className="font-bold text-middleBlue text-sm md:text-base whitespace-nowrap">
                      {item.isFrom 
                        ? t('formatted_price_from', { price: item.price }) 
                        : t('formatted_price', { price: item.price })
                      }
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 py-4">
                  {t('no_price_info')}
                </p>
              )}
            </div>

            <div className="p-2 rounded-b-[30px]">
              <button 
                onClick={onClose}
                className="w-full bg-middleBlue text-white font-bold py-3 rounded-full cursor-pointer"
              >
                {t('close')}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
