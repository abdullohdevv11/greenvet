import { X } from "lucide-react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string | null;
}

export default function VideoModal({ isOpen, onClose, videoSrc }: VideoModalProps) {
  
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
      {isOpen && videoSrc && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-full max-w-4xl aspect-video bg-black rounded-[20px] overflow-hidden shadow-2xl"
          >
             <button 
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
              
            <video 
              src={videoSrc} 
              controls 
              autoPlay
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
