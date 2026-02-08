import Header from '../components/layout/Header';
import logo_vertical from '../assets/images/Logo_vetical 1 1.png';
import cat1 from '../assets/images/cat 1.png';
import dog1 from '../assets/images/dog 1.png';
import { cn } from '../utils/cn';
import { useTranslation } from 'react-i18next';

const Sparkle = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={cn("text-white absolute opacity-70", className)}
    width="24" 
    height="24"
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

export default function Hero() {
  const {t} = useTranslation();
  return (
    <section className="p-2 pb-[0px] md:p-6 md:pb-[0px] w-full bg-white flex justify-center">
      <div className="bg-lightBlue2 w-full min-h-[650px] md:min-h-0 md:h-[calc(100vh-3rem)] rounded-[30px] md:rounded-[50px] relative overflow-hidden flex flex-col">
        <Sparkle className="top-12 left-[10%] md:left-[18%] w-6 h-6 md:w-8 md:h-8 rotate-12" />
        <Sparkle className="top-32 left-[5%] md:left-[8%] w-4 h-4 md:w-6 md:h-6 -rotate-12" />
        <Sparkle className="top-24 right-[10%] md:right-[18%] w-8 h-8 md:w-10 md:h-10 rotate-45" />
        <Sparkle className="bottom-48 left-[20%] md:left-[28%] w-6 h-6 md:w-8 md:h-8 rotate-12" />
        <Sparkle className="bottom-32 right-[20%] md:right-[28%] w-4 h-4 md:w-6 md:h-6 -rotate-12" />
        <Sparkle className="top-[60%] left-[5%] w-8 h-8 md:w-12 md:h-12 rotate-6" />
        <Sparkle className="top-[55%] right-[8%] w-6 h-6 md:w-8 md:h-8 rotate-45" />
        <Sparkle className="top-40 left-[45%] w-4 h-4 md:w-5 md:h-5" />

        <Header />

        <div className="flex-1 flex flex-col items-center justify-start pt-4 md:pt-2 relative z-10 pb-24 md:pb-0">
           <div className="relative z-20 mt-4 md:mt-0">
             <img src={logo_vertical} alt="Pets" className="h-[180px] md:h-[280px] object-contain drop-shadow-sm" />
           </div>

           <div className="text-center -mt-2 md:-mt-4 flex flex-col items-center relative z-20 px-4">
             <h1 className="text-white text-3xl md:text-5xl font-bold font-poppins tracking-wide drop-shadow-sm leading-tight">
               {t('when_pet_needs_help')}
             </h1>
             <h2 className="text-darkBlue text-5xl md:text-7xl font-shantell font-bold mt-1 md:mt-[-5px]">
               MyVet.uz
             </h2>
             <p className="text-white text-lg md:text-3xl font-poppins font-semibold tracking-wide mt-2 drop-shadow-sm">
               {t('help_any_situation')}
             </p>
           </div>

           <button className="mt-8 md:mt-10 bg-white text-black font-poppins font-bold text-sm md:text-base px-8 md:px-12 py-3 md:py-4 rounded-full uppercase tracking-widest">
             {t('book_visit')}
           </button>
        </div>  

        <img 
            src={cat1} 
            alt="White Cat" 
            className="absolute bottom-0 left-0 w-[160px] md:w-[380px] object-contain z-10 translate-y-4 md:translate-y-12 -translate-x-4 md:-translate-x-8"
        />
        <img 
            src={dog1} 
            alt="White Dog" 
            className="absolute bottom-0 right-0 w-[160px] md:w-[380px] object-contain z-10 translate-y-4 md:translate-y-12 translate-x-4 md:translate-x-8"
        />
      </div>
    </section>
  );
}
