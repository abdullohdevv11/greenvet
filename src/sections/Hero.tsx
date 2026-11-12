import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';
import heroDog from '../assets/images/hero-dog.jpg';
import heroCat from '../assets/images/hero-cat.jpg';
import Container from '../components/ui/Container';
import PillButton from '../components/ui/PillButton';
import { Eyebrow, Heading } from '../components/ui/Heading';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="top" className="pt-12 md:pt-20">
      <Container>
        <Eyebrow>{t('available_247')}</Eyebrow>
        <Heading
          as="h1"
          text={t('when_pet_needs_help')}
          className="mt-5 max-w-3xl text-[34px] min-[400px]:text-[40px] sm:text-6xl lg:text-[72px] xl:text-[80px]"
        />

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-[1.5fr_1fr] lg:grid-cols-[1.9fr_1fr] gap-4 md:gap-5">
          <div className="relative rounded-[28px] bg-white overflow-hidden h-[300px] min-[400px]:h-[340px] sm:h-[420px] lg:h-[500px] xl:h-[560px] ">
            <img
              src={heroCat}
              alt="Cat"
              className="absolute inset-0 h-full w-full object-cover object-[50%_30%] lg:inset-auto lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:h-[125%] lg:w-auto lg:max-w-none lg:object-contain"
            />
            <div className="absolute z-10 right-4 top-4 md:right-6 md:top-6 lg:right-auto lg:left-6 rounded-2xl bg-paper px-4 py-3">
              <div className="flex items-center gap-0.5 text-ink">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-1 text-sm font-medium text-ink">{t('rating_text')}</p>
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
              <PillButton href="https://t.me/ContactMyVet" className="mt-6">
                {t('book_visit')}
              </PillButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
