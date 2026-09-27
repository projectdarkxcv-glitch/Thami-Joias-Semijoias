import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { BRAND_CONFIG, getWhatsAppUrl } from "../config/brand";

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a gentle greeting tooltip after 3 seconds on desktop
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      
      {/* Desktop subtle gentle tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 mb-2 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-xl shadow-[0_6px_20px_rgba(142,52,75,0.12)] border border-[#F0CCD4] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <p className="text-xs text-[#6E2337] font-medium">
            Oi! Posso te ajudar a escolher uma semijoia? 💕
          </p>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#9E707B] hover:text-[#2D1D22] p-0.5"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getWhatsAppUrl("hero")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Thami no WhatsApp"
        className="group flex items-center gap-2.5 p-3.5 sm:px-4 sm:py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.55)] transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        <MessageCircle className="w-6 h-6 sm:w-5 sm:h-5 fill-white stroke-[#25D366] group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline font-sans-clean text-xs font-semibold tracking-wide">
          Falar comigo
        </span>
      </a>
    </aside>
  );
};
