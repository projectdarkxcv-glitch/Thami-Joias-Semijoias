import React from "react";
import { MapPin, Car, Package, MessageCircle } from "lucide-react";
import { BRAND_CONFIG, getWhatsAppUrl } from "../config/brand";

export const LocalizacaoAtendimento: React.FC = () => {
  return (
    <section id="atendimento" className="py-14 sm:py-20 bg-[#FAF0F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#F0CCD4] shadow-[0_8px_30px_rgba(142,52,75,0.08)]">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] text-[#A73C56] uppercase mb-2">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Presença Local</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#2D1D22] font-medium">
              Atendimento em Joinville
            </h2>
            <p className="mt-3 font-sans-clean text-sm text-[#5E4249]">
              Consultoria próxima e dedicada com entrega particular ou retirada combinada na cidade de Joinville - SC.
            </p>
            <div className="w-12 h-[1.5px] bg-[#E8B8C2] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Localidade */}
            <div className="p-6 rounded-2xl bg-[#FCECEF]/70 border border-[#F0CCD4] text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#8E344B] mb-3 shadow-xs border border-[#F0CCD4]">
                <MapPin className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h3 className="font-serif-luxury text-lg font-semibold text-[#2D1D22]">
                Joinville - SC
              </h3>
              <p className="text-xs text-[#664850] mt-2 font-sans-clean leading-relaxed">
                Atendimento consultivo e personalizado voltado exclusivamente para a região de Joinville.
              </p>
            </div>

            {/* Entrega Particular */}
            <div className="p-6 rounded-2xl bg-[#FCECEF]/70 border border-[#F0CCD4] text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#8E344B] mb-3 shadow-xs border border-[#F0CCD4]">
                <Car className="w-5 h-5 text-[#8E344B]" />
              </div>
              <h3 className="font-serif-luxury text-lg font-semibold text-[#2D1D22]">
                Entrega Particular
              </h3>
              <p className="text-xs text-[#664850] mt-2 font-sans-clean leading-relaxed">
                Sua semijoia levada até você com toda a segurança, pontualidade e embalagem impecável.
              </p>
            </div>

            {/* Retirada / Coleta */}
            <div className="p-6 rounded-2xl bg-[#FCECEF]/70 border border-[#F0CCD4] text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#8E344B] mb-3 shadow-xs border border-[#F0CCD4]">
                <Package className="w-5 h-5 text-[#8E344B]" />
              </div>
              <h3 className="font-serif-luxury text-lg font-semibold text-[#2D1D22]">
                Retirada / Coleta
              </h3>
              <p className="text-xs text-[#664850] mt-2 font-sans-clean leading-relaxed">
                Preferência por retirar sua peça? Alinhamos o ponto de retirada combinado pelo WhatsApp.
              </p>
            </div>

          </div>

          {/* Quick WhatsApp alignment */}
          <div className="mt-8 pt-6 border-t border-[#F5D8DE] text-center">
            <a
              href={getWhatsAppUrl("hero")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#8E344B] hover:text-[#5E1E2D] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Combinar entrega ou tirar dúvidas pelo WhatsApp ({BRAND_CONFIG.whatsappDisplayNumber})</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
