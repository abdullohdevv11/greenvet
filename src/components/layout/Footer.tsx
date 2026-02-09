import { useTranslation } from "react-i18next";
import phoneIcon from "../../assets/icons/phone.svg";
import locationIcon from "../../assets/icons/location.svg";
import clockIcon from "../../assets/icons/clock.svg";
import qr from "../../assets/images/qr.png";
import heartFooter from "../../assets/images/headrt_footer.png";
import feet from "../../assets/images/feet.png";

export default function Footer() {
  const { t } = useTranslation();

  const handleBookVisit = () => {
    window.open('https://t.me/myvetuz', '_blank');
  };

  return (
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
              <a href="tel:+998994425080" className="flex items-center gap-3 text-lg md:text-xl font-medium hover:opacity-80 transition-opacity">
                <div className="bg-white/20 p-2 rounded-full hidden md:block">
                   <img src={phoneIcon} alt="phone" className="w-5 h-5 md:w-6 md:h-6 brightness-0 invert" /> 
                </div>
                 <img src={phoneIcon} alt="phone" className="w-5 h-5 md:w-6 md:h-6 brightness-0 invert md:hidden" />
                <span>+998 99 442 50 80</span>
              </a>
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
            <p className="text-white/80 text-sm">Made with support by RZB Tech</p>
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
  );
}