import LanguageSwitcher from '../LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import logo from "../../assets/logo.svg";

export default function Header() {
    const { t } = useTranslation();
    return (
        <div className="relative flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-4 gap-4 md:gap-0 w-full z-50">
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
                <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-darkBlue flex items-center justify-center p-2.5 md:p-3">
                        <img src={logo} alt="logo" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-white text-xl md:text-2xl font-oooh mt-2">MyVet</p>
                </div>

                <div className="md:hidden">
                    <LanguageSwitcher />
                </div>
            </div>

            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 bg-white rounded-full px-8 md:px-12 py-2 flex flex-col items-center justify-center shadow-md md:shadow-none w-full md:w-auto">
                <span className="text-[10px] md:text-[11px] font-poppins text-gray-800 font-medium whitespace-nowrap">
                    {t('available_247')}
                </span>
                <a href="tel:+998994425080" className="text-lg md:text-xl font-bold font-poppins text-black leading-tight hover:text-darkBlue transition-colors">
                    +998 99 442 50 80
                </a>
            </div>

            <div className="hidden md:flex ml-auto items-center gap-4">
                <button className="bg-white rounded-full px-6 md:px-8 py-3 md:py-4 font-poppins font-bold text-xs md:text-sm uppercase tracking-wider">
                    {t('request_call')}
                </button>
                <LanguageSwitcher />
            </div>
            
            <button className="md:hidden w-full bg-white rounded-full py-3 font-poppins font-bold text-sm uppercase tracking-wider shadow-md">
                {t('request_call')}
            </button>
        </div>
    );
}
