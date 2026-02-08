import { useTranslation } from 'react-i18next';
import arrow from '../assets/icons/arrow.svg';
import light_arrow from '../assets/icons/light_arrow.svg';
import ticks from '../assets/icons/ticks.svg';
import dog from '../assets/images/dog.png';
import dog_with_cat from '../assets/images/dog_wth_cat.png';
import blue_icon from '../assets/icons/blue_icon.svg';
import black_tick from '../assets/icons/black_tick.svg';
import SectionTitle from '../components/ui/SectionTitle';

export default function Services() {
  const { t } = useTranslation();
  return (
    <section className="mt-[40px] md:mt-[60px] px-4 md:px-6">
      <SectionTitle title={t('our_services')} subtitle={t('instant_price')} />

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr] gap-4 md:gap-[20px] mt-6">
        <div className="relative overflow-hidden rounded-[30px] border border-darkBlue bg-white p-6 md:p-8 min-h-[400px] lg:min-h-[500px]">
          <button className="absolute top-6 right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-middleBlue flex items-center justify-center">
            <img src={light_arrow} alt="arrow" className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <h3 className="text-black text-3xl md:text-[40px] font-bold font-rounded">
            {t('diagnostics')}
          </h3>
          <ul className="mt-6 space-y-3 text-xl md:text-[30px] font-poppins font-regular text-black relative z-10">
            <li className="flex items-center gap-3">
              <img src={black_tick} alt="tick" className="w-6 h-6" />
              {t('ultrasound')}
            </li>
            <li className="flex items-center gap-3">
              <img src={black_tick} alt="tick" className="w-6 h-6" />
              {t('blood_tests')}
            </li>
            <li className="flex items-center gap-3">
              <img src={black_tick} alt="tick" className="w-6 h-6" />
              {t('xray')}
            </li>
            <li className="flex items-center gap-3">
              <img src={black_tick} alt="tick" className="w-6 h-6" />
              {t('fast')}
            </li>
            <li className="flex items-center gap-3">
              <img src={black_tick} alt="tick" className="w-6 h-6" />
              {t('accurate')}
            </li>
            <li className="flex items-center gap-3">
              <img src={black_tick} alt="tick" className="w-6 h-6" />
              {t('informative')}
            </li>
          </ul>
          <div className="absolute bottom-10 right-10 w-[150px] md:w-[372px] h-[150px] md:h-[250px] bg-darkBlue rounded-full blur-[40px] md:blur-[60px] opacity-30 z-0"></div>
          <img
            src={blue_icon}
            alt="paw"
            className="absolute -bottom-25 -right-25 md:-bottom-35 md:-right-35 w-[516px] md:w-[483px] opacity-50 rotate-[265deg] z-0"
          />
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-middleBlue to-[#ABC5FD] p-6 text-white min-h-[250px] md:min-h-[300px]">
            <button className="absolute top-6 right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center">
              <img src={arrow} alt="arrow" className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <h3 className="text-2xl md:text-[30px] font-bold font-rounded leading-tight">
              {t('inpatient_care')}
            </h3>
            <ul className="mt-4 space-y-2 text-base font-bold font-rounded">
              <li className="flex items-center gap-3">
                <img src={ticks} alt="tick" className="w-5 h-5" />
                {t('care_247')}
              </li>
              <li className="flex items-center gap-3">
                <img src={ticks} alt="tick" className="w-5 h-5" />
                {t('vet_supervision')}
              </li>
              <li className="flex items-center gap-3">
                <img src={ticks} alt="tick" className="w-5 h-5" />
                {t('around_clock')}
              </li>
            </ul>

            <div className="absolute right-6 bottom-0 w-40 h-40 opacity-20">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-10 h-40 bg-white"></div>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 h-10 w-40 bg-white"></div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-middleBlue to-[#ABC5FD] p-6 min-h-[250px] md:min-h-[300px]">
            <h3 className="text-3xl md:text-[40px] font-bold font-rounded text-white leading-tight">
              {t('prevention')}
            </h3>
            <p className="text-sm md:text-base font-rounded font-bold text-white/90 mt-4 max-w-[80%]">
              {t('prevention_desc')}
            </p>
            <img src={dog_with_cat} alt="dog" className="absolute bottom-0 right-4 md:right-6 w-[100px] md:w-[140px] object-contain" />
          </div>
        </div>

        <div className="relative rounded-[30px] border border-[#B9D2FF] bg-white p-6 min-h-[400px] md:min-h-[300px] flex flex-col">
          <div className="text-center relative z-10">
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
              <span className="text-[#5A88FF] text-xl">★</span>
              4.9/5 from 1,200+ pet owners
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#5A88FF] text-xl">★</span>
              Trusted by 5,000+ clients
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#5A88FF] text-xl">★</span>
              Certified veterinarians
            </li>
          </ul>
          <button className="mt-auto bg-middleBlue text-white font-rounded font-bold text-sm md:text-base py-3 px-6 md:px-8 rounded-full w-fit relative z-10">
            {t('book_call')}
          </button>
          <div className="absolute bottom-10 right-10 w-[150px] md:w-[200px] h-[150px] md:h-[175px] bg-darkBlue rounded-full blur-[40px] md:blur-[60px] opacity-30 z-0"></div>
          <img src={dog} alt="dog" className="absolute top-83 right-[-20px] md:right-0 w-[180px] md:w-[300px] object-contain z-0" />
        </div>
      </div>
    </section>
  );
}
