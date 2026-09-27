import React from "react";
import { ShieldCheck, Gem, Sparkles, Feather, Clock } from "lucide-react";
import { getWhatsAppUrl } from "../config/brand";

export const QualidadeConfianca: React.FC = () => {
  const qualityPillars = [
    {
      icon: ShieldCheck,
      title: "Garantia de Qualidade",
      description: "Segurança e tranquilidade na sua escolha, valorizando o cuidado e respeito com cada cliente.",
    },
    {
      icon: Gem,
      title: "Qualidade das Peças",
      description: "Acabamento primoroso com atenção a cada detalhe, pedra, encaixe e fecho.",
    },
    {
      icon: Sparkles,
      title: "Banho & Folheação Nobre",
      description: "Banho multicamadas refinado que confere tonalidade elegante e brilho apaixonante.",
    },
    {
      icon: Feather,
      title: "Peças Hipoalergênicas",
      description: "Desenvolvidas com processos que respeitam a pele e minimizam o risco de irritações ou alergias.",
    },
    {
      icon: Clock,
      title: "Durabilidade & Resistência",
      description: "Acessórios criados para acompanhar sua rotina com elegância quando seguidos os cuidados básicos.",
    },
  ];

  return (
    <section id="qualidade" className="py-16 sm:py-24 bg-[#F9E5E9]/60 border-y border-[#F0CCD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="font-sans-clean text-xs font-semibold tracking-[0.2em] text-[#A73C56] uppercase mb-2">
            Cuidado em cada detalhe
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#2D1D22] font-medium leading-tight">
            Qualidade & Confiança
          </h2>
          <p className="mt-3 font-sans-clean text-sm sm:text-base text-[#5E4249]">
            Cada semijoia passa por uma curadoria rigorosa para que você tenha em mãos uma peça
            que una brilho duradouro e conforto para todos os momentos.
          </p>
          <div className="w-16 h-[1.5px] bg-[#E8B8C2] mx-auto mt-4" />
        </div>

        {/* 5 Quality Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {qualityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-[#F0CCD4] hover:border-[#8E344B] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(142,52,75,0.08)] flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FCECEF] flex items-center justify-center mb-4 text-[#8E344B] group-hover:bg-[#8E344B] group-hover:text-white transition-colors border border-[#F0CCD4]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif-luxury text-lg font-semibold text-[#2D1D22] mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="font-sans-clean text-xs text-[#5E4249] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Reassurance text */}
        <div className="mt-12 text-center max-w-xl mx-auto">
          <p className="text-xs text-[#7A5660] leading-relaxed">
            Dúvidas sobre cuidados ou banho de alguma peça específica? Me chame no WhatsApp e te explico
            todas as recomendações de conservação para manter o brilho sempre perfeito!
          </p>
          <a
            href={getWhatsAppUrl("duvidas")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-xs font-semibold text-[#8E344B] hover:text-[#5E1E2D] underline underline-offset-4 transition-colors"
          >
            Tirar dúvidas sobre as peças
          </a>
        </div>

      </div>
    </section>
  );
};
