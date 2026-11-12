import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";
import { X, Instagram, ArrowUpRight } from "lucide-react";
import licenseImg from "../../assets/images/license.png";
import greenVetLogo from "../../assets/images/green_vet_logo.png";
import Container from "../ui/Container";

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.665 3.717L2.935 10.554C2.044 10.908 2.051 11.405 2.775 11.626L7.327 13.046L17.859 6.401C18.357 6.098 18.815 6.262 18.441 6.595L9.907 14.296L9.882 14.293L9.593 18.985C10.016 18.985 10.203 18.793 10.439 18.567L13.211 15.875L17.81 19.272C18.658 19.739 19.268 19.5 19.479 18.489L22.498 4.261C22.807 3.022 22.025 2.458 20.665 3.717Z" fill="currentColor" />
  </svg>
);

export default function Footer() {
  const { t } = useTranslation();
  const [isLicenseOpen, setIsLicenseOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isLicenseOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLicenseOpen]);

  return (
    <>
      <footer className="mt-24 md:mt-36 pb-8">
        <Container>
          <div className="rounded-[28px] bg-ink text-white p-6 sm:p-8 md:p-14">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <h2 className="text-[28px] sm:text-4xl md:text-5xl font-medium tracking-tight max-w-lg">
                {t("contact_with_us")}
              </h2>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://t.me/ContactMyVet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-mint text-ink px-6 py-3.5 text-sm font-medium hover:bg-white transition-colors"
                >
                  {t("book_visit")}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:+998994425080"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium hover:border-white transition-colors"
                >
                  +998 99 442 50 80
                </a>
              </div>
            </div>

            <div className="mt-12 md:mt-16 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="text-white/50">{t("address")}</p>
                <p className="mt-1.5 font-medium whitespace-pre-line">{t("clinic_address")}</p>
              </div>
              <div>
                <p className="text-white/50">{t("working_hours")}</p>
                <p className="mt-1.5 font-medium">{t("open_247")}</p>
              </div>
              <div className="flex sm:justify-end items-start gap-2">
                <a
                  href="https://www.instagram.com/myvet.uz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-ink transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://t.me/myvetuz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-ink transition-colors"
                >
                  <TelegramIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm text-muted">
            <img src={greenVetLogo} alt="Green Vet" className="h-6 w-auto self-start sm:self-auto" />
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span>{t("copyright")}</span>
              <span>Made with support by RZB Tech</span>
              <button
                onClick={() => setIsLicenseOpen(true)}
                className="underline underline-offset-4 hover:text-ink transition-colors cursor-pointer"
              >
                {t("license")}
              </button>
            </div>
          </div>
        </Container>
      </footer>

      {isLicenseOpen && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setIsLicenseOpen(false)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl w-auto max-h-[90vh] p-2 md:p-4 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsLicenseOpen(false)}
              className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-gray-100 rounded-full transition-colors z-10 cursor-pointer"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            <img
              src={licenseImg}
              alt={t("license")}
              className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
