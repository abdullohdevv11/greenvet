import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import arrow from '../assets/icons/arrow.svg';
import light_arrow from '../assets/icons/light_arrow.svg';
import ticks from '../assets/icons/ticks.svg';
import dog from '../assets/images/dog.png';
import dog_with_cat from '../assets/images/dog_wth_cat.png';
import blue_icon from '../assets/icons/blue_icon.svg';
import black_tick from '../assets/icons/black_tick.svg';
import SectionTitle from '../components/ui/SectionTitle';
import PriceModal from '../components/ui/PriceModal';
import ReviewsModal from '../components/ui/ReviewsModal';
import { prices } from '../data/prices';

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M20.665 3.717L2.935 10.554C2.044 10.908 2.051 11.405 2.775 11.626L7.327 13.046L17.859 6.401C18.357 6.098 18.815 6.262 18.441 6.595L9.907 14.296L9.882 14.293L9.593 18.985C10.016 18.985 10.203 18.793 10.439 18.567L13.211 15.875L17.81 19.272C18.658 19.739 19.268 19.5 19.479 18.489L22.498 4.261C22.807 3.022 22.025 2.458 20.665 3.717Z" 
      fill="currentColor"
    />
  </svg>
);

export default function Services() {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isReviewsModalOpen, setIsReviewsModalOpen] = useState(false);

  return (
    <section className="mt-8 md:mt-[60px] px-4 md:px-6">
      <SectionTitle title={t('our_services')} />

      <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_1fr_1fr] gap-4 md:gap-[20px] mt-6">
        <div className="relative overflow-hidden rounded-[30px] border border-darkBlue bg-white p-6 md:p-8 min-h-[350px] md:min-h-[400px] xl:min-h-[500px] flex flex-col">
          <button 
            onClick={() => setSelectedService('diagnostics')}
            className="absolute top-6 right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-middleBlue flex items-center justify-center cursor-pointer z-20"
          >
            <img src={light_arrow} alt="arrow" className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <h3 className="text-black text-2xl md:text-[40px] font-bold font-rounded">
            {t('diagnostics')}
          </h3>
          <ul className="mt-6 space-y-3 text-lg md:text-[30px] font-poppins font-regular text-black relative z-10 mb-8">
            <li className="flex items-center gap-3">
              <img src={black_tick} alt="tick" className="w-5 h-5 md:w-6 md:h-6" />
              {t('ultrasound')}
            </li>
            <li className="flex items-center gap-3">
              <img src={black_tick} alt="tick" className="w-5 h-5 md:w-6 md:h-6" />
              {t('blood_tests')}
            </li>
            <li className="flex items-center gap-3">
              <img src={black_tick} alt="tick" className="w-5 h-5 md:w-6 md:h-6" />
              {t('xray')}
            </li>
          </ul>
          <button 
            onClick={() => window.open('https://t.me/myvetuz', '_blank')}
            className="mt-auto self-start bg-middleBlue text-white font-bold font-poppins py-2 px-6 md:py-3 md:px-8 text-xs md:text-base rounded-full cursor-pointer hover:bg-opacity-90 transition-opacity z-10 flex items-center gap-2"
          >
            {t('learn_more')}
            <TelegramIcon className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <div className="absolute bottom-10 right-10 w-[150px] md:w-[372px] h-[150px] md:h-[250px] bg-darkBlue rounded-full blur-[40px] md:blur-[60px] opacity-30 z-0"></div>
          <img
            src={blue_icon}
            alt="paw"
            className="absolute -bottom-25 -right-25 md:-bottom-35 md:-right-35 w-[300px] md:w-[483px] opacity-50 rotate-[265deg] z-0"
          />
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-middleBlue to-[#ABC5FD] p-6 text-white min-h-[220px] md:min-h-[300px] flex flex-col">
            <button 
              onClick={() => setSelectedService('inpatient_care')}
              className="absolute top-6 right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center cursor-pointer z-20"
            >
              <img src={arrow} alt="arrow" className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <h3 className="text-xl md:text-[30px] font-bold font-rounded leading-tight">
              {t('inpatient_care')}
            </h3>
            <ul className="mt-4 space-y-2 text-sm md:text-base font-bold font-rounded mb-8">
              <li className="flex items-center gap-3">
                <img src={ticks} alt="tick" className="w-4 h-4 md:w-5 md:h-5" />
                {t('care_247')}
              </li>
              <li className="flex items-center gap-3">
                <img src={ticks} alt="tick" className="w-4 h-4 md:w-5 md:h-5" />
                {t('vet_supervision')}
              </li>
              <li className="flex items-center gap-3">
                <img src={ticks} alt="tick" className="w-4 h-4 md:w-5 md:h-5" />
                {t('around_clock')}
              </li>
            </ul>

            <button 
                onClick={() => window.open('https://t.me/myvetuz', '_blank')}
                className="mt-auto self-start bg-white text-middleBlue font-bold font-poppins py-2 px-6 md:py-3 md:px-8 text-xs md:text-base rounded-full cursor-pointer hover:bg-opacity-90 transition-opacity z-10 flex items-center gap-2"
            >
                {t('learn_more')}
                <TelegramIcon className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            <div className="absolute right-6 bottom-0 w-32 h-32 md:w-40 md:h-40 opacity-20">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-8 md:w-10 h-32 md:h-40 bg-white"></div>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 h-8 md:h-10 w-32 md:w-40 bg-white"></div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-middleBlue to-[#ABC5FD] p-6 min-h-[220px] md:min-h-[300px] flex flex-col">
            <h3 className="text-2xl md:text-[40px] font-bold font-rounded text-white leading-tight">
              {t('prevention')}
            </h3>
            <p className="text-xs md:text-base font-rounded font-bold text-white/90 mt-4 max-w-[80%] mb-8">
              {t('prevention_desc')}
            </p>
            
            <button 
                onClick={() => window.open('https://t.me/myvetuz', '_blank')}
                className="mt-auto self-start bg-white text-middleBlue font-bold font-poppins py-2 px-6 md:py-3 md:px-8 text-xs md:text-base rounded-full cursor-pointer hover:bg-opacity-90 transition-opacity z-10 flex items-center gap-2"
            >
                {t('learn_more')}
                <TelegramIcon className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            <img src={dog_with_cat} alt="dog" className="absolute bottom-0 right-4 md:right-6 w-[80px] md:w-[140px] object-contain z-0" />
          </div>
        </div>

        <div className="relative rounded-[30px] border border-middleBlue bg-white p-6 pr-28 sm:pr-32 md:pr-[220px] min-h-[400px] md:min-h-[300px] flex flex-col">
          <div className="relative z-10">
            <p className="text-darkBlue font-rounded font-bold text-3xl md:text-[40px]">MyVet.uz</p>
            <h3 className="text-black text-2xl md:text-[30px] font-bold font-rounded mt-1">
              {t('everything_about_visit')}
            </h3>
          </div>
          <p className="text-sm md:text-base font-rounded font-bold text-gray-700 mt-4 relative z-10">
            {t('no_rush')}
          </p>
          <ul className="mt-4 space-y-2 text-sm md:text-base font-rounded font-bold text-black relative z-10">
            <li className="flex items-center gap-3">
              <span className="text-middleBlue text-xl">★</span>
              {t('rating_text')}
            </li>
            <li className="flex items-center gap-3">
              <span className="text-middleBlue text-xl">★</span>
              {t('trusted_clients')}
            </li>
            <li className="flex items-center gap-3">
              <span className="text-middleBlue text-xl">★</span>
              {t('certified_vets')}
            </li>
          </ul>
          <button 
            onClick={() => setIsReviewsModalOpen(true)}
            className="mt-auto bg-middleBlue text-white font-rounded font-bold text-sm md:text-base py-3 px-6 md:px-8 rounded-full w-fit relative z-10 cursor-pointer hover:bg-opacity-90 transition-opacity"
          >
            {t('read_reviews')}
          </button>
          <div className="absolute bottom-10 right-10 w-[150px] md:w-[200px] h-[150px] md:h-[175px] bg-darkBlue rounded-full blur-[40px] md:blur-[60px] opacity-30 z-0"></div>
          <img src={dog} alt="dog" className="absolute bottom-[-10px] right-[-10px] md:right-0 md:bottom-[-24px] w-[140px] md:w-[300px] object-contain z-0" />
        </div>
      </div>

      <PriceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService || ''}
        items={selectedService ? prices[selectedService] || [] : []}
      />
      <ReviewsModal
        isOpen={isReviewsModalOpen}
        onClose={() => setIsReviewsModalOpen(false)}
      />
    </section>
  );
}
