import SectionTitle from "../components/ui/SectionTitle";
import { useTranslation } from "react-i18next";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import hospitalImg from "../assets/images/hospital.png";
import locationIcon from "../assets/icons/location.svg";
import phoneIcon from "../assets/icons/phone.svg";

export default function Contacts() {
  const { t } = useTranslation();

  const mapState = {
    center: [41.298463, 69.338361],
    zoom: 14,
    type: "yandex#map" as const,
    behaviors: ["default", "scrollZoom"],
  };

  return (
    <section className="mt-8 md:mt-[60px] px-4 md:px-6 mb-8 md:mb-[60px]">
      <SectionTitle title={t("contacts")} subtitle={t("contact_anytime")} />

      <YMaps query={{ lang: "ru_RU" }}>
        <div className="mt-8 flex flex-col xl:flex-row xl:items-start gap-6">
          <div
            className="hidden md:block w-full xl:w-1/2 h-[300px] md:h-[400px] xl:h-auto min-h-[300px] md:min-h-[400px] rounded-[30px] overflow-hidden border border-blue-100 relative z-0"
            data-lenis-prevent
          >
            <Map
              defaultState={mapState}
              width="100%"
              height="100%"
              options={{
                suppressMapOpenBlock: true, 
              }}
            >
              <Placemark geometry={mapState.center} />
            </Map>
          </div>

          <div className="w-full xl:w-1/2 bg-white rounded-[30px] border border-blue-200 p-5 md:p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">{t("address")}</h3>

              <div className="bg-middleBlue text-white rounded-full py-3 px-4 md:px-6 flex items-center gap-3 mb-3 md:mb-4 w-full">
                <img src={locationIcon} alt="location" className="w-5 h-5 md:w-6 md:h-6 brightness-0 invert shrink-0" />
                <span className="font-medium text-xs md:text-base truncate">
                  {t("clinic_address")}
                </span>
              </div>

              <div className="bg-middleBlue text-white rounded-full py-3 px-4 md:px-6 flex items-center gap-3 mb-6 md:mb-8 w-full">
                <img src={phoneIcon} alt="phone" className="w-5 h-5 md:w-6 md:h-6 brightness-0 invert shrink-0" />
                <span className="font-medium text-xs md:text-base">+998 99 442 50 80</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-end">
              <div className="w-full md:w-5/12 hidden md:block">
                <img
                  src={hospitalImg}
                  alt="Hospital"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              
              <div
                className="w-full md:hidden mb-4 h-[200px] rounded-xl overflow-hidden relative z-0 border border-blue-100"
                data-lenis-prevent
              >
                <Map
                  defaultState={mapState}
                  width="100%"
                  height="100%"
                  options={{
                    suppressMapOpenBlock: true, 
                  }}
                >
                  <Placemark geometry={mapState.center} />
                </Map>
              </div>

              <div className="w-full md:w-7/12 flex flex-col pb-2">
                <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                  {t("contact_description")}
                </p>
                <a 
                  href="tel:+998994425080"
                  className="bg-middleBlue text-white py-3 px-6 rounded-full flex items-center justify-center gap-2 font-medium cursor-pointer hover:bg-opacity-90 transition-opacity"
                >
                  {t("call_clinic")}
                  <img src={phoneIcon} alt="phone" className="w-5 h-5 brightness-0 invert" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </YMaps>
    </section>
  );
}
