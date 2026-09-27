import React from "react";
import { BookOpen, MessageCircle, Sparkles, ExternalLink, Heart } from "lucide-react";
import { BRAND_CONFIG, getWhatsAppUrl } from "../config/brand";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#FAF0F2] via-[#FCECEF] to-[#F8DCE2] border-t border-[#F0CCD4] relative overflow-hidden">
      
      {/* Delicate background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-[#F5C2CD]/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.25em] text-[#A73C56] uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Consultoria Próxima & Exclusiva</span>
        </div>

        <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2D1D22] font-medium leading-[1.15] text-balance">
          Vamos encontrar o detalhe perfeito para você?
        </h2>

        <p className="mt-5 font-serif-luxury italic text-xl sm:text-2xl text-[#94354D]">
          "Porque todo dia é dia de se sentir linda e especial."
        </p>

        <p className="mt-4 font-sans-clean text-sm sm:text-base text-[#5E4249] max-w-xl mx-auto leading-relaxed">
          Você pode navegar pelo catálogo para se inspirar ou me chamar diretamente no WhatsApp.
          Estou pronta para te atender com carinho, tirar todas as dúvidas e preparar sua entrega
          aqui em Joinville!
        </p>

        {/* Dual CTAs - Equal Strategic Stature */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* CTA 1: Ver Catálogo */}
          <a
            href={BRAND_CONFIG.catalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wide text-white bg-[#8E344B] hover:bg-[#78263B] rounded-full shadow-[0_6px_22px_rgba(142,52,75,0.28)] hover:shadow-[0_8px_26px_rgba(142,52,75,0.38)] transition-all duration-200 active:scale-95"
          >
            <BookOpen className="w-4 h-4 text-[#FCECEF]" />
            <span>Ver Catálogo Online</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#FCECEF]" />
          </a>

          {/* CTA 2: Falar comigo no WhatsApp */}
          <a
            href={getWhatsAppUrl("hero")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wide text-[#8E344B] bg-white hover:bg-[#FFF5F7] border border-[#E8B8C2] rounded-full shadow-[0_4px_16px_rgba(142,52,75,0.1)] hover:border-[#8E344B] hover:shadow-[0_6px_20px_rgba(142,52,75,0.18)] transition-all duration-200 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Falar comigo no WhatsApp</span>
          </a>

        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#7A5660]">
          <Heart className="w-3.5 h-3.5 fill-[#A73C56] text-[#A73C56]" />
          <span>Atendimento com amor por Thamiris Medeiros</span>
        </div>

      </div>
    </section>
  );
};
