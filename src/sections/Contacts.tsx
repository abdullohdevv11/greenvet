import SectionTitle from "../components/ui/SectionTitle";
import { useTranslation } from "react-i18next";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import hospitalImg from "../assets/images/hospital.png";
import locationIcon from "../assets/icons/location.svg";
import phoneIcon from "../assets/icons/phone.svg";

export default function Contacts() {
  const { t } = useTranslation();

  // Coordinates for Tashkent (approximate center or specific location if known)
  // Using a central location for now as placeholder for "Chigil 32A"
  // 41.341459, 69.289136 is roughly near Chigil street if found, but let's use a safe central point
  // or the coordinates from the screenshot if readable. 
  // Let's use a general Tashkent coordinate: 41.2995, 69.2401
  const mapState = {
    center: [41.353326, 69.208154], // Approximate for Chigil based on search context or generic
    zoom: 14,
    type: "yandex#map", // 'day' style (standard)
  };

  return (
    <section className="mt-[40px] md:mt-[60px] px-4 md:px-6 mb-[40px] md:mb-[60px]">
      <SectionTitle title={t("contacts")} subtitle={t("contact_anytime")} />

      <div className="mt-8 flex flex-col lg:flex-row gap-6">
        {/* Map Section */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-auto min-h-[400px] rounded-[30px] overflow-hidden border border-blue-100 shadow-sm relative z-0">
          <YMaps>
            <Map
              defaultState={mapState}
              width="100%"
              height="100%"
              options={{
                suppressMapOpenBlock: true, // Hide "Open in Yandex Maps"
              }}
            >
              <Placemark geometry={mapState.center} />
            </Map>
          </YMaps>
        </div>

        {/* Info Card */}
        <div className="w-full lg:w-1/2 bg-white rounded-[30px] border border-blue-200 p-6 flex flex-col justify-between shadow-sm">
          <div>
            {/* Address Header */}
            <h3 className="text-2xl font-bold mb-6 text-gray-900">{t("address")}</h3>

            {/* Address Pill */}
            <div className="bg-[#4D89FF] text-white rounded-full py-3 px-6 flex items-center gap-3 mb-4 w-full">
              <img src={locationIcon} alt="location" className="w-6 h-6 brightness-0 invert" />
              <span className="font-medium text-sm md:text-base truncate">
                {t("clinic_address")}
              </span>
            </div>

            {/* Phone Pill */}
            <div className="bg-[#4D89FF] text-white rounded-full py-3 px-6 flex items-center gap-3 mb-8 w-full">
              <img src={phoneIcon} alt="phone" className="w-6 h-6 brightness-0 invert" />
              <span className="font-medium text-sm md:text-base">+998 99 442 50 80</span>
            </div>
          </div>

          {/* Image and Text Split */}
          <div className="flex flex-col md:flex-row gap-6 items-end">
            {/* Building Image */}
            <div className="w-full md:w-5/12">
              <img
                src={hospitalImg}
                alt="Hospital"
                className="w-full h-auto object-cover rounded-xl shadow-md"
              />
            </div>

            {/* Text and Button */}
            <div className="w-full md:w-7/12 flex flex-col pb-2">
              <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                {t("contact_description")}
              </p>
              <button className="bg-[#4D89FF] text-white py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors font-medium shadow-md cursor-pointer">
                {t("call_clinic")}
                <img src={phoneIcon} alt="phone" className="w-5 h-5 brightness-0 invert" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
