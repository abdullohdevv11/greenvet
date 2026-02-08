import { useTranslation } from 'react-i18next';
import heart from '../assets/images/heart.png';
import logo_blue from '../assets/icons/logo_blue.svg';

export default function Appointment() {
    const { t } = useTranslation();
    
    return (
        <section className="px-4 mt-[12px] md:mt-[20px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[12px] md:gap-[20px]">
                <div className="bg-middleBlue rounded-[40px] p-[16px] md:p-[20px] relative overflow-hidden flex h-auto min-h-[200px] md:min-h-[200px]">
                    <div className="relative z-10 max-w-[70%] md:max-w-[65%] flex flex-col items-start h-full">
                        <div>
                            <h3 className="text-white text-2xl md:text-4xl font-bold font-rounded leading-tight">
                                {t('vaccination_title')}
                            </h3>
                            <p className="text-white/80 font-rounded font-bold text-xs md:text-base mt-1">
                                {t('vaccination_subtitle')}
                            </p>
                        </div>
                        <button className="mt-auto bg-white text-black font-bold font-poppins py-2 px-6 md:py-3 md:px-8 text-sm md:text-base rounded-full shadow-sm hover:scale-105 transition-transform">
                            {t('book_vet_consultation')}
                        </button>
                    </div>
                    
                    <div className="absolute bottom-0 right-10 w-[150px] md:w-[200px] h-[150px] md:h-[175px] bg-[#DEEFFE] rounded-full blur-[40px] md:blur-[60px] opacity-40 z-0"></div>

                    <div className="absolute right-[-10px] md:right-[-20px] top-1/2 -translate-y-1/3 h-[80%] md:h-[90%] w-[40%] md:w-[45%] flex items-center justify-center pointer-events-none">
                         <img 
                            src={heart} 
                            alt="Heart" 
                            className="h-full object-contain drop-shadow-md" 
                         />
                    </div>
                </div>

                <div className="bg-white border-2 border-middleBlue rounded-[40px] p-[20px] md:p-[20px] relative overflow-hidden h-auto min-h-[200px] md:min-h-[200px] flex flex-col md:flex-row justify-between items-start md:items-stretch gap-4 md:gap-0">
                    <div className="relative z-10">
                        <h3 className="text-[#1A1A1A] text-2xl md:text-4xl font-bold font-rounded leading-tight">
                            {t('spaying_title')}
                        </h3>
                    </div>

                    <div className="flex flex-col justify-between relative z-10 h-full w-full md:w-[45%]">
                        <div className="text-left">
                            <p className="text-[20px] md:text-sm font-rounded text-black font-bold mt-1 leading-tight">
                                {t('spaying_subtitle')}
                            </p>
                        </div>
                        
                        <button className="bg-middleBlue text-white font-bold font-rounded py-3 px-8 text-sm md:text-lg rounded-full shadow-md hover:bg-blue-600 transition-colors w-full mt-4 md:mt-0">
                            {t('calculate_cost')}
                        </button>
                    </div>
                    <div className="absolute bottom-1 left-6 flex gap-6 opacity-70">
                        <img src={logo_blue} alt="paw" className="w-12 h-12 mt-2" />
                        <img src={logo_blue} alt="paw" className="w-12 h-12 -mt-1" />
                        <img src={logo_blue} alt="paw" className="w-12 h-12 mt-3" />
                        <img src={logo_blue} alt="paw" className="w-12 h-12 -mt-2" />
                        <img src={logo_blue} alt="paw" className="w-12 h-12 mt-1" />
                        <img src={logo_blue} alt="paw" className="w-12 h-12 -mt-3" />
                    </div>
                </div>
            </div>
        </section>
    )
}
