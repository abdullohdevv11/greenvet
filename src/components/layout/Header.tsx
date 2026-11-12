import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone, Menu, X, Instagram } from 'lucide-react';
import LanguageSwitcher from '../LanguageSwitcher';
import greenVetLogo from "../../assets/images/green_vet_logo.png";
import Container from '../ui/Container';
import { cn } from '../../utils/cn';
import { MAIN_PHONE, PHONES, INSTAGRAM_URL } from '../../data/contacts';

export default function Header() {
    const { t } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState<string>('');

    const links = [
        { id: 'services', label: t('our_services') },
        { id: 'team', label: t('team_title') },
        { id: 'info', label: t('useful_information') },
        { id: 'contacts', label: t('contacts') },
    ];

    // Shadow once the page is scrolled
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Highlight the section currently in view
    useEffect(() => {
        const sections = ['services', 'team', 'info', 'contacts']
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => !!el);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(e.target.id);
                });
            },
            { rootMargin: '-45% 0px -50% 0px' }
        );
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    // Close the mobile menu on Escape / when resizing to desktop
    useEffect(() => {
        if (!menuOpen) return;
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
        const onResize = () => window.innerWidth >= 1024 && setMenuOpen(false);
        window.addEventListener('keydown', onKey);
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('keydown', onKey);
            window.removeEventListener('resize', onResize);
        };
    }, [menuOpen]);

    return (
        <header className="sticky top-0 z-50 pt-3 md:pt-4">
            <Container>
                <div
                    className={cn(
                        'relative rounded-2xl md:rounded-[22px] bg-white/90 backdrop-blur-md transition-shadow duration-300',
                        scrolled || menuOpen
                            ? 'shadow-[0_8px_30px_-12px_rgba(20,22,26,0.18)]'
                            : 'shadow-[0_1px_0_rgba(0,0,0,0.04)]'
                    )}
                >
                    <div className="flex h-14 md:h-16 items-center justify-between gap-4 pl-4 pr-2 md:pl-5 md:pr-2.5">
                        <a href="#top" className="flex items-center shrink-0" onClick={() => setMenuOpen(false)}>
                            <img src={greenVetLogo} alt="Green Vet" className="h-6 sm:h-7 md:h-8 w-auto object-contain" />
                        </a>

                        <nav className="hidden lg:flex items-center gap-1 rounded-full bg-paper p-1 text-sm whitespace-nowrap">
                            {links.map((l) => (
                                <a
                                    key={l.id}
                                    href={`#${l.id}`}
                                    className={cn(
                                        'rounded-full px-4 py-2 transition-colors',
                                        active === l.id
                                            ? 'bg-white text-ink font-medium shadow-[0_1px_2px_rgba(0,0,0,0.06)]'
                                            : 'text-muted hover:text-ink'
                                    )}
                                >
                                    {l.label}
                                </a>
                            ))}
                        </nav>

                        <div className="flex items-center gap-2">
                            <a
                                href={`tel:${MAIN_PHONE.tel}`}
                                className="hidden xl:inline-flex items-center gap-2 px-2 text-sm font-semibold text-ink hover:text-brand transition-colors whitespace-nowrap"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                                </span>
                                {MAIN_PHONE.display}
                            </a>
                            <LanguageSwitcher />
                            <a
                                href={`tel:${MAIN_PHONE.tel}`}
                                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-ink text-white pl-4 pr-5 py-2.5 text-sm font-medium hover:bg-brand transition-colors"
                            >
                                <Phone className="h-4 w-4" />
                                {t('request_call')}
                            </a>
                            <button
                                onClick={() => setMenuOpen((v) => !v)}
                                aria-label="Menu"
                                aria-expanded={menuOpen}
                                className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-full bg-paper text-ink cursor-pointer"
                            >
                                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>

                    <AnimatePresence initial={false}>
                        {menuOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: 'easeOut' }}
                                className="lg:hidden overflow-hidden"
                            >
                                <div className="border-t border-line px-4 pb-4 pt-2">
                                    <nav className="flex flex-col">
                                        {links.map((l) => (
                                            <a
                                                key={l.id}
                                                href={`#${l.id}`}
                                                onClick={() => setMenuOpen(false)}
                                                className={cn(
                                                    'flex items-center justify-between py-3 text-base border-b border-line last:border-0',
                                                    active === l.id ? 'text-brand font-medium' : 'text-ink'
                                                )}
                                            >
                                                {l.label}
                                                <span className={cn('h-1.5 w-1.5 rounded-full', active === l.id ? 'bg-brand' : 'bg-transparent')} />
                                            </a>
                                        ))}
                                    </nav>

                                    <div className="mt-3 rounded-2xl bg-paper p-4">
                                        <p className="text-xs uppercase tracking-[0.12em] text-muted">{t('phones')}</p>
                                        <ul className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5 text-sm font-semibold">
                                            {PHONES.map((p) => (
                                                <li key={p.tel}>
                                                    <a href={`tel:${p.tel}`} className="whitespace-nowrap hover:text-brand">
                                                        {p.display}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-3 flex gap-2">
                                        <a
                                            href={`tel:${MAIN_PHONE.tel}`}
                                            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-ink text-white py-3 text-sm font-medium"
                                        >
                                            <Phone className="h-4 w-4" />
                                            {t('request_call')}
                                        </a>
                                        <a
                                            href={INSTAGRAM_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Instagram"
                                            className="h-11 w-11 inline-flex items-center justify-center rounded-full border border-line"
                                        >
                                            <Instagram className="h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Container>
        </header>
    );
}
