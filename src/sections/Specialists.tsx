import SectionTitle from "../components/ui/SectionTitle";
import { useTranslation } from "react-i18next";
import { specialists } from "../data/specialists";

export default function Specialists() {
  const { t } = useTranslation();

  return (
    <section className="mt-[40px] md:mt-[60px] px-4 md:px-6 mb-[40px] md:mb-[60px]">
      <SectionTitle 
        title={t('our_specialists')} 
        subtitle={t('caring_professionals')} 
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {specialists.map((doctor) => (
          <div key={doctor.id} className="flex flex-col items-center w-full max-w-[350px]">
            <div className="relative w-[280px] h-[280px] rounded-full bg-[#BFE0FF] flex items-end justify-center overflow-hidden mb-6 group">
              <img 
                src={doctor.image} 
                alt={doctor.name}
                className="w-full h-full object-cover object-top pt-4 transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
              {doctor.name}
            </h3>

            <div className="flex gap-3 w-full justify-center">
              {doctor.actions.includes('consult') && (
                <button className="flex-1 bg-middleBlue text-white py-3 px-4 rounded-full font-medium text-sm md:text-base cursor-pointer whitespace-nowrap">
                  {t('consult_online')}
                </button>
              )}
              
              {doctor.actions.includes('book') && (
                <button className="flex-1 bg-middleBlue text-white py-3 px-4 rounded-full font-medium text-sm md:text-base cursor-pointer whitespace-nowrap">
                  {t('book_visit')}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
