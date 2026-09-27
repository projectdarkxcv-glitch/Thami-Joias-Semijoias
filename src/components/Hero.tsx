import React from "react";
import { MessageCircle, BookOpen, Sparkles, MapPin, ShieldCheck, HeartHandshake } from "lucide-react";
import { BRAND_CONFIG, getWhatsAppUrl } from "../config/brand";

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Delicate background aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10 opacity-80">
        <div className="absolute top-[-60px] right-[8%] w-[420px] h-[420px] rounded-full bg-[#F8D2DA]/70 blur-[110px]" />
        <div className="absolute top-[100px] left-[5%] w-[450px] h-[450px] rounded-full bg-[#FCECEF]/80 blur-[130px]" />
        <div className="absolute top-[280px] right-[25%] w-[320px] h-[320px] rounded-full bg-[#F5C2CD]/50 blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text & Primary Actions Column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Delicate Kicker / Subtitle (Unboxed, Zero-Pill) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#A73C56] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Consultora de Semijoias em Joinville - SC</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-[#2D1D22] font-medium leading-[1.12] tracking-tight max-w-2xl text-balance">
              Seu brilho merece um detalhe especial.
            </h1>

            {/* Slogan & Subheadline */}
            <p className="mt-4 font-serif-luxury italic text-xl sm:text-2xl text-[#94354D] font-normal">
              "{BRAND_CONFIG.slogan}"
            </p>

            <p className="mt-4 font-sans-clean text-base sm:text-lg text-[#5E4249] leading-relaxed max-w-xl">
              Semijoias selecionadas com carinho e delicadeza para acompanhar seus dias e ocasiões especiais.
              Eu posso te ajudar a escolher a peça que mais combina com seu estilo, com atendimento acolhedor
              e entrega com todo o cuidado aqui em Joinville.
            </p>

            {/* Dual CTAs - Equal Strategic Prominence */}
            <div className="mt-8 w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              
              {/* CTA 1: Ver Catálogo */}
              <a
                href={BRAND_CONFIG.catalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold tracking-wide text-white bg-[#8E344B] hover:bg-[#78263B] rounded-full shadow-[0_6px_22px_rgba(142,52,75,0.28)] hover:shadow-[0_8px_26px_rgba(142,52,75,0.38)] transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E344B] focus-visible:ring-offset-2"
              >
                <BookOpen className="w-4 h-4 text-[#FCECEF] group-hover:scale-110 transition-transform" />
                <span>Ver Catálogo</span>
              </a>

              {/* CTA 2: Falar comigo no WhatsApp */}
              <a
                href={getWhatsAppUrl("hero")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold tracking-wide text-[#8E344B] bg-white hover:bg-[#FFF5F7] border border-[#E8B8C2] rounded-full shadow-[0_4px_16px_rgba(142,52,75,0.1)] hover:border-[#8E344B] hover:shadow-[0_6px_20px_rgba(142,52,75,0.18)] transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E344B] focus-visible:ring-offset-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span>Falar comigo no WhatsApp</span>
              </a>

            </div>

            {/* Quiet Trust Markers (Unboxed, clean typographic separators) */}
            <div className="mt-10 pt-6 border-t border-[#F0CCD4] w-full flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 sm:gap-x-6 text-xs text-[#7A5660]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Atendimento em Joinville - SC</span>
              </div>
              <span aria-hidden="true" className="text-[#E8B8C2]">·</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Peças hipoalergênicas com garantia</span>
              </div>
              <span aria-hidden="true" className="text-[#E8B8C2]">·</span>
              <div className="flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Consultoria pessoal e próxima</span>
              </div>
            </div>

          </div>

          {/* Visual Showcase Column (Real/Curated Semijoias Product Photography) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Elegant Decorative Framed Backdrop */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-2xl border border-[#E8B8C2] bg-[#FCECEF] -z-10 shadow-sm" />

              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_12px_36px_rgba(142,52,75,0.12)] border border-[#F0CCD4]">
                <img
                  src={BRAND_CONFIG.images.heroDisplay}
                  alt="Coleção de semijoias finas e delicadas da Thami Joias"
                  className="w-full h-[360px] sm:h-[460px] object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle scrim & floating badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1D22]/70 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-serif-luxury text-xl sm:text-2xl font-medium tracking-wide drop-shadow-sm">
                    Coleções delicadas e atemporais
                  </p>
                  <p className="text-xs text-[#FCECEF] tracking-wider mt-0.5">
                    Banho nobre · Brilho duradouro · Conforto diário
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
