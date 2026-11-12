import { Eyebrow, Heading } from "../components/ui/Heading";
import Container from "../components/ui/Container";
import { useTranslation } from "react-i18next";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";

export default function Contacts() {
  const { t } = useTranslation();

  const mapState = {
    center: [41.298463, 69.338361],
    zoom: 14,
    type: "yandex#map" as const,
    behaviors: ["default", "scrollZoom"],
  };

  const rows = [
    { icon: MapPin, label: t("address"), value: t("clinic_address") },
    { icon: Phone, label: "Tel", value: "+998 99 442 50 80", href: "tel:+998994425080" },
    { icon: Clock, label: t("working_hours"), value: t("open_247") },
  ];

  return (
    <section id="contacts" className="mt-24 md:mt-36 scroll-mt-28">
      <Container>
        <Eyebrow>{t("contacts")}</Eyebrow>
        <Heading text={t("contact_anytime")} className="mt-5 max-w-2xl text-[28px] sm:text-4xl lg:text-[44px]" />

        <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-4 md:gap-5">
          <div className="rounded-[28px] bg-white p-5 sm:p-7 md:p-10 flex flex-col">
            <ul className="divide-y divide-line">
              {rows.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4 py-4 first:pt-0">
                  <span className="h-10 w-10 rounded-full bg-mint flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-ink" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-muted">{label}</p>
                    {href ? (
                      <a href={href} className="mt-1 block font-semibold text-ink hover:text-brand transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 font-semibold text-ink">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-muted leading-relaxed">{t("contact_description")}</p>

            <div className="mt-auto pt-8 flex flex-wrap gap-3">
              <a
                href="tel:+998994425080"
                className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-6 py-3 text-sm font-medium hover:bg-brand transition-colors"
              >
                <Phone className="h-4 w-4" />
                {t("call_clinic")}
              </a>
              <a
                href="https://t.me/ContactMyVet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink hover:border-ink transition-colors"
              >
                Telegram
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div
            className="h-[300px] sm:h-[400px] lg:h-auto lg:min-h-[480px] rounded-[28px] overflow-hidden relative z-0 bg-white"
            onWheel={(event) => event.stopPropagation()}
          >
            <YMaps query={{ lang: "ru_RU" }}>
              <Map
                defaultState={mapState}
                width="100%"
                height="100%"
                options={{ suppressMapOpenBlock: true }}
              >
                <Placemark geometry={mapState.center} />
              </Map>
            </YMaps>
          </div>
        </div>
      </Container>
    </section>
  );
}
