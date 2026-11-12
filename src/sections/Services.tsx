import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Plus, Minus, Stethoscope, Scissors, Microscope, BedDouble, ShieldCheck, ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';
import petsGroup from '../assets/images/pets-group.jpg';
import Container from '../components/ui/Container';
import PriceModal from '../components/ui/PriceModal';
import ReviewsModal from '../components/ui/ReviewsModal';
import PillButton from '../components/ui/PillButton';
import { Eyebrow, Heading } from '../components/ui/Heading';
import { prices } from '../data/prices';
import { cn } from '../utils/cn';

type Item = {
  title: string;
  icon: LucideIcon;
  color: string;
  desc?: string;
  list?: string[];
  priceKey?: string;
};

const items: Item[] = [
  { title: 'vaccination_title', icon: Stethoscope, color: 'bg-sun', desc: 'vaccination_subtitle' },
  { title: 'spaying_title', icon: Scissors, color: 'bg-lilac', desc: 'spaying_subtitle', priceKey: 'spaying_neutering' },
  { title: 'diagnostics', icon: Microscope, color: 'bg-sky', list: ['ultrasound', 'blood_tests', 'xray'], priceKey: 'diagnostics' },
  { title: 'inpatient_care', icon: BedDouble, color: 'bg-peach', list: ['care_247', 'vet_supervision', 'around_clock'] },
  { title: 'prevention', icon: ShieldCheck, color: 'bg-mint', desc: 'prevention_desc' },
];

export default function Services() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(0);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isReviewsModalOpen, setIsReviewsModalOpen] = useState(false);

  return (
    <section id="services" className="mt-24 md:mt-36 scroll-mt-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8">
          <div className="flex flex-col">
            <Eyebrow>{t('our_services')}</Eyebrow>
            <Heading
              text={t('comprehensive_care')}
              className="mt-5 max-w-lg text-[28px] sm:text-4xl lg:text-[44px]"
            />

            <ul className="mt-10 lg:mt-auto lg:pt-12 space-y-3">
              {items.map((item, i) => {
                const isOpen = open === i;
                const Icon = item.icon;
                return (
                  <li key={item.title} className="rounded-2xl bg-white">
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="w-full flex items-center gap-3 sm:gap-4 p-4 md:p-5 text-left cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className={cn('h-10 w-10 rounded-full flex items-center justify-center shrink-0', item.color)}>
                        <Icon className="h-4 w-4 text-ink" />
                      </span>
                      <span className="flex-1 font-medium text-ink text-[15px] sm:text-base md:text-lg leading-snug">{t(item.title)}</span>
                      <span className="h-8 w-8 rounded-full bg-ink text-white flex items-center justify-center shrink-0">
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 md:px-5 pb-5 sm:pl-[72px] md:pl-[76px]">
                            {item.desc && (
                              <p className="text-sm md:text-base text-muted leading-relaxed">{t(item.desc)}</p>
                            )}
                            {item.list && (
                              <p className="text-sm md:text-base text-muted">
                                {item.list.map((k) => t(k)).join(' · ')}
                              </p>
                            )}
                            <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
                              {item.priceKey && (
                                <button
                                  onClick={() => setSelectedService(item.priceKey!)}
                                  className="underline underline-offset-4 decoration-ink/30 hover:text-brand hover:decoration-brand transition-colors cursor-pointer"
                                >
                                  {t('calculate_cost')}
                                </button>
                              )}
                              <a
                                href="https://t.me/myvetuz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 hover:text-brand transition-colors"
                              >
                                {t('book_vet_consultation')}
                                <ArrowUpRight className="h-4 w-4" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative rounded-[28px] bg-[#FDFDFD] overflow-hidden h-[380px] sm:h-[460px] lg:h-auto lg:min-h-[640px]">
            <img
              src={petsGroup}
              alt="Dog and cats"
              className="absolute inset-0 h-full w-full object-cover object-[50%_60%]"
            />
          </div>
        </div>

        {/* Facts strip */}
        <div className="mt-5 rounded-[28px] bg-white p-6 md:p-10 grid grid-cols-1 xl:grid-cols-[1.1fr_2fr] gap-8 items-center">
          <div>
            <p className="text-2xl md:text-3xl font-medium tracking-tight">{t('everything_about_visit')}</p>
            <p className="mt-3 text-muted leading-relaxed">{t('no_rush')}</p>
            <PillButton onClick={() => setIsReviewsModalOpen(true)} className="mt-6">
              {t('read_reviews')}
            </PillButton>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { k: 'rating_text', c: 'bg-sun' },
              { k: 'trusted_clients', c: 'bg-lilac' },
              { k: 'certified_vets', c: 'bg-mint' },
            ].map(({ k, c }) => (
              <li key={k} className={cn('rounded-2xl p-5 min-h-[72px] sm:min-h-[120px] flex items-end text-sm sm:text-base break-words hyphens-auto font-medium text-ink leading-snug', c)}>
                {t(k)}
              </li>
            ))}
          </ul>
        </div>
      </Container>

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
