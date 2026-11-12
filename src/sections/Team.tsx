import { useTranslation } from "react-i18next";
import { GraduationCap, Award, Stethoscope, Phone } from "lucide-react";
import Container from "../components/ui/Container";
import { Eyebrow, Heading } from "../components/ui/Heading";
import { MAIN_PHONE } from "../data/contacts";

export default function Team() {
  const { t } = useTranslation();

  return (
    <section id="team" className="mt-24 md:mt-36 scroll-mt-28">
      <Container>
        <Eyebrow>{t("team_title")}</Eyebrow>
        <Heading text={t("team_heading")} className="mt-5 max-w-2xl text-[28px] sm:text-4xl lg:text-[44px]" />

        <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-4 md:gap-5">
          {/* Featured doctor */}
          <article className="rounded-[28px] bg-white p-6 md:p-10 flex flex-col sm:flex-row gap-6 md:gap-8">
            <div className="h-28 w-28 md:h-36 md:w-36 shrink-0 rounded-[24px] bg-lilac flex items-center justify-center">
              <Stethoscope className="h-12 w-12 md:h-14 md:w-14 text-ink" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl md:text-2xl font-medium tracking-tight text-ink">
                {t("doctor_margarita")}
              </h3>
              <p className="mt-1 text-muted">{t("doctor_margarita_role")}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                <li className="inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-sm font-medium">
                  <GraduationCap className="h-4 w-4 text-brand" />
                  {t("higher_education")}
                </li>
                <li className="inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-sm font-medium">
                  <Award className="h-4 w-4 text-brand" />
                  {t("years_experience")}
                </li>
              </ul>
            </div>
          </article>

          {/* Team size */}
          <article className="rounded-[28px] bg-mint p-6 md:p-10 flex flex-col">
            <p className="text-6xl md:text-7xl font-medium tracking-tight text-ink">8</p>
            <p className="mt-1 text-lg font-medium text-ink">{t("doctors_count")}</p>
            <p className="mt-4 text-ink/70 leading-relaxed">{t("team_more")}</p>
            <a
              href={`tel:${MAIN_PHONE.tel}`}
              className="mt-auto pt-6 self-start inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-brand-dark transition-colors"
            >
              <Phone className="h-4 w-4" />
              {MAIN_PHONE.display}
            </a>
          </article>
        </div>
      </Container>
    </section>
  );
}
