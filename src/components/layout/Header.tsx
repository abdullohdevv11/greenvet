import LanguageSwitcher from '../LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import greenVetLogo from "../../assets/images/green_vet_logo.png";
import Container from '../ui/Container';
import { Phone } from 'lucide-react';
import { MAIN_PHONE } from '../../data/contacts';

export default function Header() {
    const { t } = useTranslation();

    const links = [
        { href: '#services', label: t('our_services') },
        { href: '#team', label: t('team_title') },
        { href: '#info', label: t('useful_information') },
        { href: '#contacts', label: t('contacts') },
    ];

    return (
        <header className="sticky top-0 z-50 pt-3 md:pt-4">
            <Container>
                <div className="flex h-14 md:h-16 items-center justify-between gap-4 rounded-2xl md:rounded-[20px] bg-white/90 backdrop-blur-md pl-4 pr-2 md:pl-6 md:pr-2.5 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                    <a href="#top" className="flex items-center shrink-0">
                        <img src={greenVetLogo} alt="Green Vet" className="h-6 sm:h-7 md:h-8 w-auto object-contain" />
                    </a>

                    <nav className="hidden lg:flex items-center gap-5 xl:gap-8 text-sm text-ink whitespace-nowrap">
                        {links.map((l) => (
                            <a key={l.href} href={l.href} className="hover:text-brand transition-colors">
                                {l.label}
                            </a>
                        ))}
                        <a href={`tel:${MAIN_PHONE.tel}`} className="hidden xl:inline font-semibold hover:text-brand transition-colors whitespace-nowrap">
                            {MAIN_PHONE.display}
                        </a>
                    </nav>

                    <div className="flex items-center gap-2">
                        <LanguageSwitcher />
                        <a
                            href={`tel:${MAIN_PHONE.tel}`}
                            className="hidden sm:inline-flex items-center rounded-full bg-ink text-white px-5 py-2.5 text-sm font-medium hover:bg-brand transition-colors"
                        >
                            {t('request_call')}
                        </a>
                        <a
                            href={`tel:${MAIN_PHONE.tel}`}
                            aria-label={MAIN_PHONE.display}
                            className="sm:hidden h-10 w-10 inline-flex items-center justify-center rounded-full bg-ink text-white"
                        >
                            <Phone className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </Container>
        </header>
    );
}
