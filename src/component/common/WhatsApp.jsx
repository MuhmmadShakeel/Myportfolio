import { useTranslation } from "react-i18next"
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsAppUrl } from "../../contactDetails";

function WhatsApp() {
  const { t } = useTranslation()
  return (
    <a
      href={whatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("Chat on WhatsApp")}
      className="fixed bottom-6 right-6 z-48 group"
    >
      <div className="relative">
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 blur-xl animate-pulse"></div>

        {/* WhatsApp Button */}
        <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110">
          <FaWhatsapp className="text-white text-3xl" />

          {/* Ring Animation */}
          <div className="absolute inset-0 rounded-full border-8 border-white/20 animate-ping"></div>
        </div>

        {/* Tooltip */}
        <div className="absolute -top-8 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-gray-800 text-white text-sm px-3 py-4 rounded-lg shadow-lg whitespace-nowrap">
            {t("Chat with us")}
          </div>
        </div>
      </div>
    </a>
  );
}
export default WhatsApp;
