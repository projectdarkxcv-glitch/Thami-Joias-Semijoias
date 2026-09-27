import React from "react";
import { MessageCircle, Heart, Sparkles, MapPin } from "lucide-react";
import { BRAND_CONFIG, getWhatsAppUrl } from "../config/brand";

export const SobreMim: React.FC = () => {
  return (
    <section id="sobre-mim" className="py-16 sm:py-24 bg-[#F9E5E9]/50 border-t border-[#F0CCD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              
              {/* Backplate decoration */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-2xl border border-[#E8B8C2] bg-[#FCECEF] -z-10 shadow-sm" />

              {/* Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(142,52,75,0.12)] border border-[#F0CCD4] bg-white">
                <img
                  src={BRAND_CONFIG.images.consultantPortrait}
                  alt="Thami, consultora da Thami Joias em Joinville"
                  className="w-full aspect-[4/5] object-cover object-top"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <div className="p-4 bg-white/95 backdrop-blur-sm border-t border-[#F5D8DE] text-center">
                  <p className="font-serif-luxury text-lg font-semibold text-[#2D1D22]">
                    Thamiris Medeiros (Thami)
                  </p>
                  <p className="text-xs text-[#9E707B] tracking-wider uppercase">
                    Consultora de Semijoias · Joinville - SC
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Bio / Message Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] text-[#A73C56] uppercase mb-2">
              <Heart className="w-3.5 h-3.5 fill-[#A73C56] text-[#A73C56]" />
              <span>Conheça quem cuida de você</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#2D1D22] font-medium leading-tight">
              Oi, eu sou a Thami! 💕
            </h2>

            <p className="mt-4 font-serif-luxury italic text-xl text-[#94354D]">
              "Acredito que cada detalhe tem o poder de transformar nossa autoestima e iluminar o nosso dia."
            </p>

            <div className="mt-6 space-y-4 font-sans-clean text-sm sm:text-base text-[#5E4249] leading-relaxed">
              <p>
                A Thami Joias nasceu da minha paixão por semijoias delicadas e do desejo de oferecer um
                atendimento verdadeiramente próximo, acolhedor e feito de pessoa para pessoa.
              </p>
              <p>
                Eu sei que escolher um acessório não é apenas uma compra: é sobre encontrar aquela peça
                que expressa quem você é, que te faz sentir linda e confiante, ou que se torna um presente
                inesquecível para alguém especial.
              </p>
              <p>
                Por isso, não trabalho como uma loja distante. Eu estou aqui para te ouvir, mostrar opções,
                tirar dúvidas sobre banho, caimento e combinações, e te acompanhar até a entrega com todo o cuidado
                aqui em <strong>Joinville</strong>.
              </p>
              <p className="font-medium text-[#6E2337]">
                Quero te ajudar a encontrar o detalhe perfeito para o seu brilho!
              </p>
            </div>

            {/* Consultant CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={getWhatsAppUrl("consultoria")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#8E344B] hover:bg-[#78263B] rounded-full shadow-[0_6px_22px_rgba(142,52,75,0.28)] hover:shadow-[0_8px_26px_rgba(142,52,75,0.38)] transition-all duration-200 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Falar comigo no WhatsApp</span>
              </a>

              <div className="flex items-center gap-2 text-xs text-[#7A5660]">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <span>Atendimento e entrega em Joinville - SC</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
