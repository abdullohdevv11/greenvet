import Container from "../components/ui/Container";
import { Eyebrow, Heading } from "../components/ui/Heading";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import PriceModal from "../components/ui/PriceModal";
import VideoModal from "../components/ui/VideoModal";
import { prices } from "../data/prices";
import answersVideo from "../assets/video/answers_on_questions.mp4";
import workersVideo from "../assets/video/how_work_workers.mp4";
import castrationVideo from "../assets/video/кастрация.mp4";
import roundClockVideo from "../assets/video/круглосуточный.mp4";
import receptionVideo from "../assets/video/приём.mp4";
import { Play, ArrowUpRight } from "lucide-react";
import { cn } from "../utils/cn";

export default function ClinicInfo() {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const infoItems = [
    { key: "how_castration_performed", video: castrationVideo, color: "bg-sun" },
    { key: "how_reception_performed", video: receptionVideo, color: "bg-lilac" },
    { key: "how_vets_work", video: workersVideo, color: "bg-sky" },
    { key: "faq_answers", video: answersVideo, color: "bg-peach" },
    { key: "round_clock_reception", video: roundClockVideo, color: "bg-mint" },
  ];

  const services = [
    "consultation",
    "spaying_neutering",
    "vaccination",
    "general_checkup",
    "treatment",
    "surgery",
    "travel_documents",
    "microchipping",
  ];

  return (
    <section id="info" className="mt-24 md:mt-36 scroll-mt-28">
      <Container>
        <Eyebrow>{t("clinic_info_title")}</Eyebrow>
        <Heading text={t("useful_information")} className="mt-5 text-[28px] sm:text-4xl lg:text-[44px]" />

        {/* Videos */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-5 gap-3 md:gap-4">
          {infoItems.map((item, i) => (
            <button
              key={item.key}
              onClick={() => setVideoUrl(item.video)}
              className={cn(
                "group rounded-[24px] p-4 sm:p-5 flex flex-row items-center gap-4 sm:flex-col sm:items-start sm:justify-between sm:min-h-[180px] lg:min-h-[200px] text-left cursor-pointer lg:col-span-1",
                i < 2 ? "sm:col-span-3" : "sm:col-span-2",
                item.color
              )}
            >
              <span className="h-11 w-11 shrink-0 rounded-full bg-ink text-white flex items-center justify-center transition-transform group-hover:scale-110">
                <Play className="h-4 w-4 ml-0.5 fill-current" />
              </span>
              <span className="font-medium text-ink leading-snug">{t(item.key)}</span>
            </button>
          ))}
        </div>

        {/* Services list */}
        <div className="mt-5 rounded-[28px] bg-white p-5 sm:p-6 md:p-10">
          <p className="text-xl md:text-2xl font-medium tracking-tight">{t("all_services")}</p>
          <ul className="mt-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10">
            {services.map((service, i) => (
              <li key={service} className="border-t border-line">
                <button
                  onClick={() => setSelectedService(service)}
                  className="group w-full flex items-center gap-3 sm:gap-4 py-4 text-left cursor-pointer"
                >
                  <span className="w-6 text-xs text-muted tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-medium text-ink group-hover:text-brand transition-colors">
                    {t(service)}
                  </span>
                  <span className="h-8 w-8 shrink-0 rounded-full border border-line flex items-center justify-center group-hover:bg-ink group-hover:border-ink group-hover:text-white transition-colors">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <PriceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService || ""}
        items={selectedService ? prices[selectedService] || [] : []}
      />
      <VideoModal
        isOpen={!!videoUrl}
        onClose={() => setVideoUrl(null)}
        videoSrc={videoUrl}
      />
    </section>
  );
}
