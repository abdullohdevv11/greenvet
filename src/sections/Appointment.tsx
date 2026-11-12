import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import PriceModal from '../components/ui/PriceModal';
import Container from '../components/ui/Container';
import { prices } from '../data/prices';

export default function Appointment() {
    const { t } = useTranslation();
    const [selectedService, setSelectedService] = useState<string | null>(null);

    return (
        <section className="mt-16 md:mt-24">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    <article className="rounded-[28px] bg-brand text-white p-7 md:p-10 flex flex-col min-h-[260px]">
                        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                            {t('vaccination_title')}
                        </h3>
                        <p className="mt-3 text-white/75 max-w-sm leading-relaxed">
                            {t('vaccination_subtitle')}
                        </p>
                        <a
                            href="https://t.me/myvetuz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto pt-8 self-start inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
                        >
                            {t('book_vet_consultation')}
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </article>

                    <article className="rounded-[28px] bg-white border border-line p-7 md:p-10 flex flex-col min-h-[260px]">
                        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
                            {t('spaying_title')}
                        </h3>
                        <p className="mt-3 text-muted max-w-sm leading-relaxed">
                            {t('spaying_subtitle')}
                        </p>
                        <button
                            onClick={() => setSelectedService('spaying_neutering')}
                            className="mt-auto pt-8 self-start inline-flex items-center gap-2 text-sm font-semibold text-ink group cursor-pointer"
                        >
                            <span className="border-b border-ink/30 group-hover:border-brand group-hover:text-brand transition-colors pb-0.5">
                                {t('calculate_cost')}
                            </span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 group-hover:text-brand transition-all" />
                        </button>
                    </article>
                </div>
            </Container>

            <PriceModal
                isOpen={!!selectedService}
                onClose={() => setSelectedService(null)}
                title={selectedService || ''}
                items={selectedService ? prices[selectedService] || [] : []}
            />
        </section>
    );
}
