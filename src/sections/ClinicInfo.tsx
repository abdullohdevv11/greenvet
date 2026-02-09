import SectionTitle from "../components/ui/SectionTitle";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import catWithBall from "../assets/images/cat_with_ball.png";
import tick from "../assets/icons/black_tick.svg"
import white_tick from "../assets/icons/ticks.svg"
import PriceModal from "../components/ui/PriceModal";
import { prices } from "../data/prices";

export default function ClinicInfo() {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const infoItems = [
    "how_spaying_performed",
    "how_neutering_performed",
    "pet_hotel_facilities",
    "diagnostics_lab_tests",
    "inpatient_care_facilities",
  ];

  const services = [
    "consultation",
    "spaying_neutering",
    "vaccination",
    "general_checkup",
    "treatment",
    "surgery",
    "travel_documents",
    "microchipping",
  ];

  const handleServiceClick = (service: string) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <section className="mt-8 md:mt-[60px] px-4 md:px-6 mb-8 md:mb-[60px]">
      <SectionTitle title={t("everything_about_visit")} />

      <div className="mt-6 md:mt-8 flex flex-col xl:flex-row gap-6">
        <div className="w-full xl:w-1/3 bg-white border border-middleBlue rounded-[30px] md:rounded-[40px] p-6 md:p-8 flex flex-col relative overflow-hidden">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {t("clinic_info_title")}
          </h3>
          <ul className="space-y-4 relative z-10">
            {infoItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-1 min-w-5">
                   <img src={tick} alt="tick" className="w-5 h-5" />
                </div>
                <span className="text-gray-800 font-medium text-base md:text-lg leading-tight">
                  {t(item)}
                </span>
              </li>
            ))}
          </ul>
          
          <div className="absolute bottom-[-20px] left-10 w-20 h-20 bg-middleBlue rounded-full opacity-30 blur-xl"></div>
          <div className="absolute bottom-20 right-[-10px] w-24 h-24 bg-middleBlue rounded-full opacity-20 blur-xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-middleBlue rounded-full opacity-10 blur-2xl"></div>
        </div>

        <div className="w-full xl:w-2/3 bg-middleBlue rounded-[30px] md:rounded-[40px] p-5 md:p-[30px] relative overflow-hidden flex flex-col">
          <div className="relative z-10 w-full xl:w-2/3">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {t("our_services")}
            </h3>
            <p className="text-white/90 text-base md:text-lg mb-6 md:mb-8 font-medium">
              {t("comprehensive_care")}
            </p>

            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-full py-1 px-1 pl-1 flex items-center justify-between">
                  <div className="flex items-center gap-2 md:gap-3 overflow-hidden">
                    <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-middleBlue flex items-center justify-center shrink-0">
                      <img src={white_tick} alt="tick" className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900 text-sm md:text-lg truncate">
                      {t(service)}
                    </span>
                  </div>
                  <button 
                    onClick={() => handleServiceClick(service)}
                    className="bg-middleBlue text-white text-[10px] md:text-sm font-medium py-[11px] px-4 md:py-3 md:px-6 rounded-full shrink-0 whitespace-nowrap ml-2 cursor-pointer"
                  >
                    {t("calculate_cost")}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden xl:block absolute bottom-0 right-0 w-1/3 h-full pointer-events-none">
             <img 
                src={catWithBall} 
                alt="Cat with ball" 
                className="absolute bottom-0 right-0 w-full h-auto object-contain max-h-[90%]"
             />
          </div>
          <div className="xl:hidden mt-8 flex justify-center">
             <img 
                src={catWithBall} 
                alt="Cat with ball" 
                className="w-1/2 h-auto object-contain"
             />
          </div>
        </div>
      </div>

      <PriceModal
        isOpen={!!selectedService}
        onClose={handleCloseModal}
        title={selectedService || ''}
        items={selectedService ? prices[selectedService] || [] : []}
      />
    </section>
  );
}
