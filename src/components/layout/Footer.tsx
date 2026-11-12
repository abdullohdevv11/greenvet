import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";
import { X, Instagram } from "lucide-react";
import licenseImg from "../../assets/images/license.png";
import greenVetLogo from "../../assets/images/green_vet_logo.png";
import Container from "../ui/Container";
import { PHONES, MAIN_PHONE, INSTAGRAM_URL } from "../../data/contacts";

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
              <div>
                <p className="text-sm text-white/50">{t("clinic_tagline")}</p>
                <h2 className="mt-2 text-[28px] sm:text-4xl md:text-5xl font-medium tracking-tight max-w-lg">
                  {t("contact_with_us")}
                </h2>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${MAIN_PHONE.tel}`}
                  className="inline-flex items-center gap-2 rounded-full bg-mint text-ink px-6 py-3.5 text-sm font-medium hover:bg-white transition-colors"
                >
                  {t("book_visit")}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-ink transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="mt-12 md:mt-16 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="text-white/50">{t("address")}</p>
                <p className="mt-1.5 font-medium">{t("clinic_address")}</p>
              </div>
              <div>
                <p className="text-white/50">{t("phones")}</p>
                <ul className="mt-1.5 grid grid-cols-2 gap-x-4 gap-y-1 font-medium">
                  {PHONES.map((p) => (
                    <li key={p.tel}>
                      <a href={`tel:${p.tel}`} className="hover:text-mint transition-colors whitespace-nowrap">
                        {p.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-white/50">{t("working_hours")}</p>
                <p className="mt-1.5 font-medium">{t("open_247")}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm text-muted">
            <img src={greenVetLogo} alt="Green Vet" className="h-6 w-auto self-start sm:self-auto" />
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span>{t("copyright")}</span>
              <a
                href="https://rzbtech.uz/ru"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink transition-colors"
              >
                Made with support by <span className="font-semibold text-ink">RZB Tech</span>
              </a>
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
