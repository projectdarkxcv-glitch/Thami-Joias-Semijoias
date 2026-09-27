import React from "react";
import { Sparkles, Gem, Heart, MessageCircle } from "lucide-react";

export const Destaques: React.FC = () => {
  const highlights = [
    {
      icon: Sparkles,
      title: "Atendimento Personalizado",
      description: "Uma conversa próxima para entender seu estilo, ocasião e preferência com atenção exclusiva.",
    },
    {
      icon: Gem,
      title: "Peças de Qualidade",
      description: "Semijoias com banho nobre, brilho impecável, hipoalergênicas e acompanhadas de garantia.",
    },
    {
      icon: Heart,
      title: "Ajuda para Escolher",
      description: "Seja para você ou para presentear alguém querido, te envio fotos e combinações sob medida.",
    },
    {
      icon: MessageCircle,
      title: "Compra Fácil pelo WhatsApp",
      description: "Sem burocracias ou cadastros complexos. Você escolhe, conversa comigo e alinha os detalhes.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F9E5E9]/60 border-y border-[#F0CCD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="font-sans-clean text-xs font-semibold tracking-[0.2em] text-[#A73C56] uppercase mb-2">
            A Experiência Thami Joias
          </p>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl text-[#2D1D22] font-medium leading-snug">
            Mais do que uma semijoia, uma escolha feita para você.
          </h2>
          <div className="w-12 h-[1.5px] bg-[#E8B8C2] mx-auto mt-4" />
        </div>

        {/* 4 Clean Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/95 backdrop-blur-sm p-6 sm:p-7 rounded-xl border border-[#F0CCD4] hover:border-[#8E344B] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(142,52,75,0.08)] flex flex-col items-center sm:items-start text-center sm:text-left group"
              >
                <div className="w-11 h-11 rounded-lg bg-[#FCECEF] flex items-center justify-center mb-4 text-[#8E344B] group-hover:text-white group-hover:bg-[#8E344B] transition-colors border border-[#F0CCD4]">
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-serif-luxury text-lg sm:text-xl font-semibold text-[#2D1D22] mb-2">
                  {item.title}
                </h3>
                <p className="font-sans-clean text-xs sm:text-sm text-[#5E4249] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
