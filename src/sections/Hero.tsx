import { useTranslation } from 'react-i18next';
import { Clock } from 'lucide-react';
import heroDog from '../assets/images/hero-dog.jpg';
import heroCat from '../assets/images/hero-cat.jpg';
import Container from '../components/ui/Container';
import PillButton from '../components/ui/PillButton';
import { Eyebrow, Heading } from '../components/ui/Heading';
import { MAIN_PHONE } from '../data/contacts';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="top" className="pt-12 md:pt-20">
      <Container>
        <Eyebrow>{t('clinic_tagline')}</Eyebrow>
        <Heading
          as="h1"
          text={t('when_pet_needs_help')}
          className="mt-5 max-w-3xl text-[34px] min-[400px]:text-[40px] sm:text-6xl lg:text-[72px] xl:text-[80px]"
        />

        {/* Mobile: two portrait photos side by side, nothing cropped awkwardly */}
        <div className="md:hidden mt-10">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[3/4] rounded-[24px] bg-white overflow-hidden">
              <img src={heroCat} alt="Cat" className="absolute inset-0 h-full w-full object-cover object-top" />
            </div>
            <div className="relative aspect-[3/4] rounded-[24px] bg-white overflow-hidden">
              <img src={heroDog} alt="Dog" className="absolute inset-0 h-full w-full object-cover object-[30%_70%]" />
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3 rounded-2xl bg-white px-4 py-3">
            <span className="h-9 w-9 shrink-0 rounded-full bg-mint flex items-center justify-center">
              <Clock className="h-4 w-4 text-brand-dark" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{t('hero_badge')}</p>
              <p className="text-xs text-muted">{t('open_247')}</p>
            </div>
          </div>

          <p className="mt-7 text-lg font-medium text-ink">{t('help_any_situation')}</p>
          <p className="mt-2 text-sm text-muted leading-relaxed">{t('comprehensive_care')}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <PillButton href={`tel:${MAIN_PHONE.tel}`}>{t('book_visit')}</PillButton>
            <a href={`tel:${MAIN_PHONE.tel}`} className="text-sm font-semibold text-ink whitespace-nowrap">
              {MAIN_PHONE.display}
            </a>
          </div>
        </div>

        <div className="hidden md:grid mt-16 md:grid-cols-[1.5fr_1fr] lg:grid-cols-[1.9fr_1fr] gap-4 md:gap-5">
          <div className="relative rounded-[28px] bg-white overflow-hidden h-[300px] min-[400px]:h-[340px] sm:h-[420px] lg:h-[500px] xl:h-[560px]">
            <img
              src={heroCat}
              alt="Cat"
              className="absolute inset-0 h-full w-full object-cover object-[50%_30%] lg:inset-auto lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:h-[125%] lg:w-auto lg:max-w-none lg:object-contain"
            />
            <div className="absolute z-10 right-4 top-4 md:right-6 md:top-6 lg:right-auto lg:left-6 rounded-2xl bg-paper px-4 py-3 flex items-center gap-3">
              <span className="h-9 w-9 rounded-full bg-mint flex items-center justify-center">
                <Clock className="h-4 w-4 text-brand-dark" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{t('hero_badge')}</p>
                <p className="text-xs text-muted">{t('open_247')}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative rounded-[28px] bg-white overflow-hidden h-[220px] sm:h-[260px] md:h-[220px] lg:h-[260px] xl:h-[300px]">
              <img
                src={heroDog}
                alt="Dog"
                className="absolute bottom-0 left-0 h-[135%] w-auto max-w-none object-contain object-left-bottom"
              />
            </div>

            <div className="md:mt-auto">
              <p className="text-lg md:text-xl font-medium text-ink">{t('help_any_situation')}</p>
              <p className="mt-2 text-sm md:text-base text-muted leading-relaxed max-w-sm">
                {t('comprehensive_care')}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                <PillButton href={`tel:${MAIN_PHONE.tel}`}>{t('book_visit')}</PillButton>
                <a
                  href={`tel:${MAIN_PHONE.tel}`}
                  className="text-sm font-semibold text-ink hover:text-brand transition-colors whitespace-nowrap"
                >
                  {MAIN_PHONE.display}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
