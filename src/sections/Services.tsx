import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Plus, Minus, Stethoscope, Scissors, Microscope, BedDouble, ShieldCheck, Smile, Bug, Hotel, Bird, Phone,
  type LucideIcon,
} from 'lucide-react';
import petsGroup from '../assets/images/pets-group.jpg';
import Container from '../components/ui/Container';
import PriceModal from '../components/ui/PriceModal';
import { Eyebrow, Heading } from '../components/ui/Heading';
import { prices } from '../data/prices';
import { MAIN_PHONE } from '../data/contacts';
import { cn } from '../utils/cn';

type Item = {
  title: string;
  icon: LucideIcon;
  color: string;
  desc: string;
  priceKey?: string;
};

const items: Item[] = [
  { title: 'vaccination_title', icon: Stethoscope, color: 'bg-sun', desc: 'vaccination_subtitle', priceKey: 'treatment' },
  { title: 'surgery_title', icon: Scissors, color: 'bg-lilac', desc: 'surgery_desc', priceKey: 'spaying_neutering' },
  { title: 'lab_title', icon: Microscope, color: 'bg-sky', desc: 'lab_desc', priceKey: 'diagnostics' },
  { title: 'dentistry_title', icon: Smile, color: 'bg-peach', desc: 'dentistry_desc' },
  { title: 'vaccination_prev_title', icon: ShieldCheck, color: 'bg-mint', desc: 'prevention_desc', priceKey: 'vaccination' },
  { title: 'inpatient_title', icon: BedDouble, color: 'bg-sun', desc: 'inpatient_desc' },
  { title: 'infectious_title', icon: Bug, color: 'bg-lilac', desc: 'infectious_desc' },
  { title: 'hotel_title', icon: Hotel, color: 'bg-sky', desc: 'hotel_desc' },
  { title: 'exotic_title', icon: Bird, color: 'bg-peach', desc: 'exotic_desc' },
];

const pets = [
  { key: 'pet_cats', emoji: '🐈' },
  { key: 'pet_dogs', emoji: '🐕' },
  { key: 'pet_birds', emoji: '🦜' },
  { key: 'pet_hamsters', emoji: '🐹' },
  { key: 'pet_guinea_pigs', emoji: '🐁' },
  { key: 'pet_chinchillas', emoji: '🐭' },
  { key: 'pet_turtles', emoji: '🐢' },
];

export default function Services() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(0);
  const [selectedService, setSelectedService] = useState<string | null>(null);

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

            <ul className="mt-10 space-y-3">
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
                            <p className="text-sm md:text-base text-muted leading-relaxed">{t(item.desc)}</p>
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
                                href={`tel:${MAIN_PHONE.tel}`}
                                className="inline-flex items-center gap-1.5 hover:text-brand transition-colors"
                              >
                                <Phone className="h-3.5 w-3.5" />
                                {t('book_vet_consultation')}
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

          <div className="flex flex-col gap-4 md:gap-5">
            <div className="relative rounded-[28px] bg-[#FDFDFD] overflow-hidden h-[380px] sm:h-[460px] lg:h-auto lg:flex-1 lg:min-h-[560px]">
              <img
                src={petsGroup}
                alt="Dog and cats"
                className="absolute inset-0 h-full w-full object-cover object-[50%_60%]"
              />
            </div>

            <div className="rounded-[28px] bg-white p-6 md:p-8">
              <p className="text-lg md:text-xl font-medium tracking-tight">{t('patients_title')}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {pets.map((p) => (
                  <li
                    key={p.key}
                    className="inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-sm font-medium text-ink"
                  >
                    <span aria-hidden="true">{p.emoji}</span>
                    {t(p.key)}
                  </li>
                ))}
                <li className="inline-flex items-center rounded-full border border-line px-4 py-2 text-sm text-muted">
                  {t('pet_other')}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Facts strip */}
        <div className="mt-5 rounded-[28px] bg-white p-6 md:p-10 grid grid-cols-1 xl:grid-cols-[1fr_2.2fr] gap-8 items-center">
          <div>
            <p className="text-2xl md:text-3xl font-medium tracking-tight">{t('everything_about_visit')}</p>
            <p className="mt-3 text-muted leading-relaxed">{t('no_rush')}</p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { k: 'fact_247', c: 'bg-sun' },
              { k: 'fact_doctors', c: 'bg-lilac' },
              { k: 'fact_experience', c: 'bg-sky' },
              { k: 'fact_services', c: 'bg-mint' },
            ].map(({ k, c }) => (
              <li key={k} className={cn('rounded-2xl p-5 min-h-[72px] sm:min-h-[120px] flex items-end text-sm sm:text-base font-medium text-ink leading-snug', c)}>
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
    </section>
  );
}
