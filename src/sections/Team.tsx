import { useTranslation } from "react-i18next";
import { GraduationCap, Award, Phone } from "lucide-react";
import Container from "../components/ui/Container";
import { Eyebrow, Heading } from "../components/ui/Heading";
import { MAIN_PHONE } from "../data/contacts";
import dovgushaPhoto from "../assets/images/doctor-dovgusha.jpg";
import vetkovskayaPhoto from "../assets/images/doctor-vetkovskaya.jpg";

const LEAD_DOCTORS = [
  {
    name: "doctor_margarita",
    role: "doctor_margarita_role",
    experience: "doctor_margarita_experience",
    photo: dovgushaPhoto,
  },
  {
    name: "doctor_nadezhda",
    role: "doctor_nadezhda_role",
    experience: "doctor_nadezhda_experience",
    photo: vetkovskayaPhoto,
  },
];

export default function Team() {
  const { t } = useTranslation();

  return (
    <section id="team" className="mt-24 md:mt-36 scroll-mt-28">
      <Container>
        <Eyebrow>{t("team_title")}</Eyebrow>
        <Heading text={t("team_heading")} className="mt-5 max-w-2xl text-[28px] sm:text-4xl lg:text-[44px]" />

        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {LEAD_DOCTORS.map((doctor) => (
            <article key={doctor.name} className="rounded-[28px] bg-white p-3 md:p-4 flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-paper">
                <img
                  src={doctor.photo}
                  alt={t(doctor.name)}
                  loading="lazy"
                  className="h-full w-full object-cover object-[center_25%]"
                />
                <p className="absolute left-3 right-3 top-3 w-fit rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-ink shadow-sm backdrop-blur">
                  {t(doctor.role)}
                </p>
              </div>
              <div className="flex flex-col px-3 pt-5 pb-3 md:px-4">
                <h3 className="text-xl md:text-2xl font-medium tracking-tight text-ink">{t(doctor.name)}</h3>

                <ul className="mt-5 flex flex-wrap gap-2">
                  <li className="inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-sm font-medium">
                    <GraduationCap className="h-4 w-4 text-brand" />
                    {t("higher_education")}
                  </li>
                  <li className="inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-sm font-medium">
                    <Award className="h-4 w-4 text-brand" />
                    {t(doctor.experience)}
                  </li>
                </ul>
              </div>
            </article>
          ))}

          {/* Team size */}
          <article className="rounded-[28px] bg-mint p-6 md:p-10 flex flex-col sm:col-span-2 lg:col-span-1">
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
