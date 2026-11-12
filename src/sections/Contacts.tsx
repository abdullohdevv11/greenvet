import { Eyebrow, Heading } from "../components/ui/Heading";
import Container from "../components/ui/Container";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Clock, Instagram, ArrowUpRight } from "lucide-react";
import { PHONES, MAIN_PHONE, INSTAGRAM_URL, MAP_EMBED_URL, MAP_LINK_URL } from "../data/contacts";

export default function Contacts() {
  const { t } = useTranslation();

  return (
    <section id="contacts" className="mt-24 md:mt-36 scroll-mt-28">
      <Container>
        <Eyebrow>{t("contacts")}</Eyebrow>
        <Heading text={t("contact_anytime")} className="mt-5 max-w-2xl text-[28px] sm:text-4xl lg:text-[44px]" />

        <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-4 md:gap-5">
          <div className="rounded-[28px] bg-white p-5 sm:p-7 md:p-10 flex flex-col">
            <ul className="divide-y divide-line">
              <li className="flex items-start gap-4 pb-4">
                <span className="h-10 w-10 rounded-full bg-mint flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-ink" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-muted">{t("address")}</p>
                  <p className="mt-1 font-semibold text-ink">{t("clinic_address")}</p>
                  <a
                    href={MAP_LINK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-sm text-muted hover:text-brand transition-colors"
                  >
                    {t("open_in_maps")}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4 py-4">
                <span className="h-10 w-10 rounded-full bg-mint flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-ink" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-muted">{t("phones")}</p>
                  <ul className="mt-1 grid grid-cols-1 min-[420px]:grid-cols-2 gap-x-6 gap-y-1">
                    {PHONES.map((p) => (
                      <li key={p.tel}>
                        <a
                          href={`tel:${p.tel}`}
                          className="font-semibold text-ink hover:text-brand transition-colors whitespace-nowrap"
                        >
                          {p.display}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li className="flex items-start gap-4 pt-4">
                <span className="h-10 w-10 rounded-full bg-mint flex items-center justify-center shrink-0">
                  <Clock className="h-4 w-4 text-ink" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-muted">{t("working_hours")}</p>
                  <p className="mt-1 font-semibold text-ink">{t("open_247")}</p>
                </div>
              </li>
            </ul>

            <div className="mt-auto pt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${MAIN_PHONE.tel}`}
                className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-6 py-3 text-sm font-medium hover:bg-brand transition-colors"
              >
                <Phone className="h-4 w-4" />
                {t("call_clinic")}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink hover:border-ink transition-colors"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>

          <div className="h-[320px] sm:h-[400px] lg:h-auto lg:min-h-[480px] rounded-[28px] overflow-hidden relative bg-white">
            <iframe
              src={MAP_EMBED_URL}
              title={t("clinic_address")}
              loading="lazy"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
