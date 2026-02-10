import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";
import { X, Instagram } from "lucide-react";
import phoneIcon from "../../assets/icons/phone.svg";
import locationIcon from "../../assets/icons/location.svg";
import clockIcon from "../../assets/icons/clock.svg";
import qr from "../../assets/images/qr.png";
import heartFooter from "../../assets/images/headrt_footer.png";
import feet from "../../assets/images/feet.png";
import licenseImg from "../../assets/images/license.png";

export default function Footer() {
  const { t } = useTranslation();
  const [isLicenseOpen, setIsLicenseOpen] = useState(false);

  useEffect(() => {
    if (isLicenseOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLicenseOpen]);

  const handleBookVisit = () => {
    window.open('https://t.me/ContactMyVet', '_blank');
  };

  return (
    <>
      <footer className="mt-auto">
        <div className="px-4 pb-8">
          <div className="bg-middleBlue rounded-[30px] md:rounded-[50px] p-6 md:p-12 relative overflow-hidden text-white">
            <div className="relative z-10 flex flex-col gap-8 md:max-w-[60%]">
              <h2 className="text-3xl md:text-4xl font-bold">{t("contact_with_us")}</h2>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
                <button 
                  onClick={handleBookVisit}
                  className="bg-white text-black font-bold py-2 px-10 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  {t("book_visit")}
                </button>
                <a href="tel:+998994425080" className="flex items-center gap-3 text-lg md:text-xl font-medium hover:opacity-80 transition-opacity whitespace-nowrap shrink-0">
                  <div className="bg-white/20 p-2 rounded-full hidden md:block">
                     <img src={phoneIcon} alt="phone" className="w-5 h-5 md:w-6 md:h-6 brightness-0 invert" /> 
                  </div>
                   <img src={phoneIcon} alt="phone" className="w-5 h-5 md:w-6 md:h-6 brightness-0 invert md:hidden" />
                  <span>+998 99 442 50 80</span>
                </a>

                <div className="flex items-center gap-3 mt-2 sm:mt-0">
                  <a 
                    href="https://www.instagram.com/p/B_SFawJJtfM/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors flex items-center justify-center"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </a>
                  <a 
                    href="https://t.me/myvetuz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors flex items-center justify-center"
                    aria-label="Telegram"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" aria-hidden="true">
                      <path d="M22 3.7 2.9 10.9c-.9.35-.89 1.62.02 1.95l4.7 1.75 1.8 5.5c.28.86 1.36 1.05 1.9.34l2.6-3.4 5.1 3.7c.77.56 1.86.12 2.06-.85L23 4.9c.18-.93-.7-1.72-1.6-1.2Zm-3.2 5.1-8.2 7.5c-.2.18-.52.1-.62-.15l-1.5-4.5 10.3-6.2c.3-.18.62.22.33.45Z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="bg-white text-gray-900 rounded-[20px] md:rounded-[30px] p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 w-full md:w-auto md:max-w-fit">
                <img src={qr} alt="QR Code" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
                
                <div className="flex flex-col gap-4 md:flex-row md:gap-12">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-bold text-lg">
                      <img src={locationIcon} alt="location" className="w-5 h-5" />
                      {t("address")}
                    </div>
                    <p className="text-gray-600 leading-tight whitespace-pre-line">
                      {t("clinic_address")}
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-bold text-lg">
                      <img src={clockIcon} alt="clock" className="w-5 h-5" />
                      {t("working_hours")}
                    </div>
                    <p className="text-gray-600 leading-tight">
                      {t("open_247")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white/80 text-sm mt-4 md:mt-8">
                  {t("copyright")}
                </p>
                <div className="flex items-center gap-4">
                  <p className="text-white/80 text-sm">Made with support by RZB Tech</p>
                  <button 
                    onClick={() => setIsLicenseOpen(true)}
                    className="text-white/80 text-sm underline hover:text-white transition-colors cursor-pointer"
                  >
                    {t("license")}
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute right-0 bottom-0 pointer-events-none z-0">
              <img 
                src={heartFooter} 
                alt="" 
                className="absolute right-[50%] bottom-0 h-[250px] md:h-[350px] opacity-0 md:opacity-50 translate-x-1/4" 
              />
              <img 
                src={feet} 
                alt="" 
                className="relative z-10 h-[150px] md:h-[280px] object-contain translate-y-8 translate-x-8 md:translate-y-10 md:translate-x-10 opacity-0 md:opacity-100" 
              />
            </div>
          </div>
        </div>
      </footer>

      {isLicenseOpen && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setIsLicenseOpen(false)}
        >
          <div 
            className="relative bg-white rounded-lg max-w-4xl w-auto max-h-[90vh] shadow-2xl p-2 md:p-4 animate-in zoom-in-95 duration-200 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsLicenseOpen(false)}
              className="absolute top-2 right-2 md:top-4 md:right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10 cursor-pointer"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </button>
            <img 
              src={licenseImg} 
              alt={t("license")} 
              className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-md"
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
