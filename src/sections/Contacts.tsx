import SectionTitle from "../components/ui/SectionTitle";
import { useTranslation } from "react-i18next";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function Contacts() {
  const {t} = useTranslation()
  return (
    <section className="mt-[40px] md:mt-[60px] px-4 md:px-6">
      <SectionTitle title={t('contacts')} subtitle={t('contact_anytime')} />
    </section>
  );
}