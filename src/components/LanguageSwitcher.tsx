import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

import ruIcon from "../assets/icons/russian_icon.svg";
import uzIcon from "../assets/icons/uzbek_icon.svg";
import enIcon from "../assets/icons/England_icon.svg";

type Language = {
  code: string;
  label: string;
  icon: string;
};

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const languages: Language[] = [
    { code: "ru", label: "RU", icon: ruIcon },
    { code: "uz", label: "UZ", icon: uzIcon },
    { code: "en", label: "EN", icon: enIcon }
  ];

  const currentLang =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLang = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center bg-white rounded-full px-1.5 py-1.5"
      >
        <img
          src={currentLang.icon}
          alt={currentLang.label}
          className="w-8 h-8 rounded-full object-cover"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-4 min-w-[120px] bg-white rounded-2xl overflow-hidden z-50 border border-gray-100"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLang(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                  currentLang.code === lang.code
                    ? "bg-gray-100 text-middleBlue"
                    : "text-gray-700"
                }`}
              >
                <img
                  src={lang.icon}
                  alt={lang.label}
                  className="w-5 h-5 rounded-full object-cover"
                />
                <span>{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
