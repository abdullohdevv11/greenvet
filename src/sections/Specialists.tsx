import SectionTitle from "../components/ui/SectionTitle";
import { useTranslation } from "react-i18next";
import { specialists } from "../data/specialists";
import { useState } from "react";
import PriceModal from "../components/ui/PriceModal";
import { prices } from "../data/prices";

export default function Specialists() {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleBookVisit = () => {
    window.open('https://t.me/ContactMyVet', '_blank');
  };

  return (
    <section className="mt-8 md:mt-[60px] px-4 md:px-6 mb-8 md:mb-[60px]">
      <SectionTitle 
        title={t('our_specialists')} 
        subtitle={t('caring_professionals')} 
      />

      <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {specialists.map((doctor) => (
          <div key={doctor.id} className="flex flex-col items-center w-full max-w-[400px]">
            <div className="relative w-[320px] h-[320px] rounded-full bg-[#D1EDDC] flex items-end justify-center overflow-hidden mb-8 group">
              <img 
                src={doctor.image} 
                alt={doctor.name}
                className="w-full h-full object-cover object-top pt-4 transition-transform duration-300"
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">
              {t(doctor.name)}
            </h3>
            
            {doctor.role && (
              <p className="text-middleBlue font-medium text-lg md:text-xl mb-6 text-center">
                {t(doctor.role)}
              </p>
            )}

            <div className="flex flex-wrap gap-3 w-full justify-center">
              {doctor.actions.includes('consult') && (
                <button 
                  onClick={handleBookVisit}
                  className="flex-1 min-w-[160px] bg-middleBlue text-white py-4 px-6 rounded-full font-bold text-base md:text-lg cursor-pointer whitespace-nowrap"
                >
                  {t('consult_online')}
                </button>
              )}
              
              {doctor.actions.includes('book') && (
                <button 
                  onClick={() => {
                    if (doctor.role === 'director_role') {
                      window.open('https://yandex.ru/maps/org/93506518218/?add-review=true', '_blank');
                    } else {
                      handleBookVisit();
                    }
                  }}
                  className="flex-1 min-w-[160px] bg-middleBlue text-white py-4 px-6 rounded-full font-bold text-base md:text-lg cursor-pointer whitespace-nowrap"
                >
                  {doctor.role === 'director_role' ? t('leave_review') : t('book_visit')}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <PriceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService || ''}
        items={selectedService ? prices[selectedService] || [] : []}
      />
    </section>
  );
}
