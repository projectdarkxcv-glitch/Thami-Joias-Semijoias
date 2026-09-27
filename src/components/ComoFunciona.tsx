import React from "react";
import { BookOpen, Heart, MessageCircle, PackageCheck, ArrowRight } from "lucide-react";
import { BRAND_CONFIG, getWhatsAppUrl } from "../config/brand";

export const ComoFunciona: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: BookOpen,
      title: "Conheça as peças",
      description: "Navegue pelo catálogo online ou pelas fotos na galeria e encante-se com cada detalhe.",
    },
    {
      icon: Heart,
      number: "02",
      title: "Escolha suas favoritas",
      description: "Guarde as semijoias que mais tocaram seu coração para o seu uso ou para presentear.",
    },
    {
      icon: MessageCircle,
      number: "03",
      title: "Se precisar, fale comigo",
      description: "Me mande uma mensagem pelo WhatsApp. Eu tiro dúvidas, envio vídeos e te oriento com carinho.",
    },
    {
      icon: PackageCheck,
      number: "04",
      title: "Receba ou retire em Joinville",
      description: "Combinamos a entrega particular cuidadosa ou retirada/coleta no melhor momento para você.",
    },
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-[#FAF0F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <p className="font-sans-clean text-xs font-semibold tracking-[0.2em] text-[#A73C56] uppercase mb-2">
            Experiência leve e transparente
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#2D1D22] font-medium leading-tight">
            Comprar sua semijoia pode ser simples.
          </h2>
          <p className="mt-3 font-sans-clean text-sm sm:text-base text-[#5E4249]">
            Sem passos burocráticos, sem cadastros demorados. Uma consultoria direta e dedicada.
          </p>
          <div className="w-16 h-[1.5px] bg-[#E8B8C2] mx-auto mt-4" />
        </div>

        {/* 4 Steps Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white p-7 rounded-2xl border border-[#F0CCD4] hover:border-[#8E344B] transition-all duration-300 shadow-[0_4px_16px_rgba(142,52,75,0.06)] hover:shadow-[0_8px_24px_rgba(142,52,75,0.12)] flex flex-col justify-between group"
              >
                <div>
                  {/* Step Editorial Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif-luxury text-3xl font-medium text-[#A73C56]">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#FCECEF] flex items-center justify-center text-[#8E344B] group-hover:bg-[#8E344B] group-hover:text-white transition-colors border border-[#F0CCD4]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif-luxury text-xl font-semibold text-[#2D1D22] mb-2 group-hover:text-[#A73C56] transition-colors">
                    {step.title}
                  </h3>

                  <p className="font-sans-clean text-xs sm:text-sm text-[#5E4249] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F5D8DE] flex items-center text-[11px] font-medium text-[#9E707B] group-hover:text-[#8E344B] transition-colors">
                  <span>Passo {idx + 1} de 4</span>
                  <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Link */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a
              href={getWhatsAppUrl("hero")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#8E344B] hover:bg-[#78263B] rounded-full shadow-[0_6px_22px_rgba(142,52,75,0.28)] hover:shadow-[0_8px_26px_rgba(142,52,75,0.36)] transition-all duration-200 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Iniciar conversa no WhatsApp</span>
            </a>

            <a
              href={BRAND_CONFIG.catalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide text-[#8E344B] bg-white hover:bg-[#FFF5F7] border border-[#E8B8C2] rounded-full transition-all duration-200 active:scale-95"
            >
              <BookOpen className="w-4 h-4 text-[#A73C56]" />
              <span>Ver Catálogo Online</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
