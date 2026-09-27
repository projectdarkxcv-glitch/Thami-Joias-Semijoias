import React from "react";
import { Gift, MessageCircle, Sparkles, Heart } from "lucide-react";
import { getWhatsAppUrl } from "../config/brand";

export const SessaoPresentes: React.FC = () => {
  return (
    <section id="presentes" className="py-14 sm:py-20 bg-[#FAF0F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-[#FFF2F5] via-white to-[#FCECEF] rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#F0CCD4] shadow-[0_8px_30px_rgba(142,52,75,0.08)] relative overflow-hidden">
          
          {/* Subtle floral/sparkle decoration */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-[#F8D2DA]/50 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] text-[#A73C56] uppercase mb-2">
                <Gift className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Para Quem Você Ama</span>
              </div>

              <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl text-[#2D1D22] font-medium leading-tight">
                Um detalhe especial para presentear.
              </h2>

              <p className="mt-4 font-sans-clean text-sm sm:text-base text-[#5E4249] leading-relaxed">
                Se você está procurando um presente especial, posso te ajudar a encontrar uma peça
                que combine perfeitamente com a personalidade da pessoa que você quer surpreender.
              </p>

              {/* Discreet highlight: Embalagem para presente */}
              <div className="mt-5 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-white/90 border border-[#E8B8C2] text-xs font-medium text-[#6E2337] shadow-xs">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span>Embalagem para presente delicada e pronta para encantar</span>
              </div>
            </div>

            {/* CTA: Quero escolher um presente */}
            <div className="shrink-0">
              <a
                href={getWhatsAppUrl("presente")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold tracking-wide text-white bg-[#8E344B] hover:bg-[#78263B] rounded-full shadow-[0_6px_22px_rgba(142,52,75,0.28)] hover:shadow-[0_8px_26px_rgba(142,52,75,0.36)] transition-all duration-200 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Quero escolher um presente</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
