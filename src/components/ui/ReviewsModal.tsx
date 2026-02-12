import { X } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

interface ReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReviewsModal({ isOpen, onClose }: ReviewsModalProps) {
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

  const handleOpenLink = (url: string) => {
    window.open(url, '_blank');
  };

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
            className="bg-white rounded-[30px] w-full max-w-md flex flex-col relative z-10"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold font-rounded text-gray-900 pr-8">
                {t('reviews')}
              </h3>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors absolute right-4 top-4 md:right-6 md:top-6"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <button 
                onClick={() => handleOpenLink('https://yandex.ru/maps/org/myvet_uz/93506518218/reviews/')}
                className="w-full bg-[#FC3F1D] text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all shadow-sm"
              >
                <span className="text-lg">Yandex Maps</span>
              </button>

              <button 
                onClick={() => handleOpenLink('https://www.google.com/search?sca_esv=b1aa0ebf47929ca9&biw=430&bih=731&q=myvet.uz+tashkent+reviews&uds=ALYpb_k4Lf6CNhMJGd8YAc8fmdUwSIQhGSxcx000J9wCqhVACWunaNArTsxJZCimLlSDpZWS-vkW0PbGrhHynEJmXZujFMOprzMgdzaTHrqDvgVDnxWtlUa_mFKpS6ls8fYyqk-h-4MEnMW-RH_w4SwskyT-qV8qOwiI4MZIuCr1WTh0I3KjwC-oifu0YsH1aePfiA8dl8A-An7UvT4vzT-dF4KpupedZWTyhi50DX5BciScP0gdYSw9dK1lzepM_RUkFqn0UdaR6MusbVhsSQqRTPvZpRoaAOAOM-5o_cmT7lR-JPaBkrTpAFVLg6o353T_Tu_iP9-0XlAcKG2k37Y2Xbq18pcI4n6TzU4WX2eU7NCpC1GZ-eD4c8ybGXPijWm8cZ2Q2EBH0th8AbHzZrRwGz0acjLyUpxOWpibKf70_doAcK3R9-cS3NN_M8y3Eyx0fQWcQ5xz4jXQFaC3MXvtl0U1zvrTvw9kW8Q5JKdSBpL879IqlPzw8hJkIv-Kkmd--cp1AlB4mLxkxRG9B46-rav8cEx7AQ&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZMQ8ugx1J9w6JDOlIQ_shkP8WW_6zG61Pe66jRn4C55CbZvSPGKRGSOCbmCj2xBI1iv2nc6tL-su-MuiZJ0g-NQ1R6MdfoL4_BxadPtrrUig8MnvQ%3D%3D&sa=X&ved=2ahUKEwjW6I_q59GSAxWuORAIHZLdGXYQk8gLegQIHhAB&ictx=1#ebo=1')}
                className="w-full bg-[#4285F4] text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all shadow-sm"
              >
                <span className="text-lg">Google Maps</span>
              </button>
            </div>

            <div className="p-2 pb-4 px-6">
              <button 
                onClick={onClose}
                className="w-full bg-gray-100 text-gray-700 font-bold py-3 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
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
