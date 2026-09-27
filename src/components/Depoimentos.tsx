import React from "react";
import { Heart, MessageCircle, Sparkles } from "lucide-react";
import { getCustomWhatsAppUrl } from "../config/brand";

/**
 * Área de Depoimentos Reais
 * Conforme diretrizes da marca: NÃO foram inventados depoimentos fictícios.
 * Quando clientes reais enviarem relatos pelo WhatsApp ou Instagram,
 * basta preencher o array abaixo.
 */
interface Testimonial {
  id: string;
  clientName: string;
  city: string;
  piecePurchased?: string;
  text: string;
  date?: string;
}

// Quando houver depoimentos reais fornecidos pela proprietária, insira-os aqui:
const REAL_TESTIMONIALS: Testimonial[] = [
  // Exemplo para preenchimento futuro:
  // {
  //   id: "1",
  //   clientName: "Nome da Cliente",
  //   city: "Joinville - SC",
  //   piecePurchased: "Colar Ponto de Luz",
  //   text: "Mensagem real enviada pela cliente...",
  //   date: "Setembro de 2026",
  // }
];

export const Depoimentos: React.FC = () => {
  const hasRealTestimonials = REAL_TESTIMONIALS.length > 0;

  return (
    <section className="py-14 sm:py-20 bg-[#F9E5E9]/50 border-t border-[#F0CCD4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {hasRealTestimonials ? (
          <div>
            <div className="text-center max-w-xl mx-auto mb-10">
              <p className="font-sans-clean text-xs font-semibold tracking-[0.2em] text-[#A73C56] uppercase mb-1">
                Depoimentos Reais
              </p>
              <h2 className="font-serif-luxury text-3xl text-[#2D1D22] font-medium">
                O que dizem as clientes
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {REAL_TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-white p-6 rounded-2xl border border-[#F0CCD4] shadow-sm">
                  <p className="font-sans-clean text-sm text-[#5E4249] italic">"{t.text}"</p>
                  <div className="mt-4 pt-3 border-t border-[#F5D8DE] flex items-center justify-between text-xs text-[#9E707B]">
                    <span className="font-semibold text-[#2D1D22]">{t.clientName}</span>
                    <span>{t.city}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Espaço carinhoso preparado para os primeiros relatos reais */
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#F0CCD4] text-center shadow-[0_8px_30px_rgba(142,52,75,0.06)]">
            <div className="w-12 h-12 rounded-full bg-[#FCECEF] flex items-center justify-center text-[#8E344B] mx-auto mb-4 border border-[#F0CCD4]">
              <Heart className="w-5 h-5 fill-[#8E344B]" />
            </div>

            <p className="font-sans-clean text-xs font-semibold tracking-[0.2em] text-[#A73C56] uppercase mb-1">
              Espaço da Cliente
            </p>

            <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#2D1D22] font-medium">
              Sua história faz parte do nosso brilho
            </h2>

            <p className="mt-3 font-sans-clean text-sm text-[#5E4249] max-w-xl mx-auto leading-relaxed">
              Cada semijoia entregue em Joinville é embalada com carinho e dedicação.
              Quando receber sua caixinha da Thami Joias, envie sua foto ou mensagem contando
              como a peça fez você se sentir!
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={getCustomWhatsAppUrl("Olá, Thami! Recebi minha semijoia e gostaria de compartilhar meu carinho!")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-[#8E344B] bg-[#FCECEF] hover:bg-[#F8DCE2] border border-[#E8B8C2] rounded-full transition-all shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Enviar meu relato pelo WhatsApp</span>
              </a>

              <div className="flex items-center gap-1.5 text-xs text-[#9E707B]">
                <Sparkles className="w-3 h-3 text-[#C5A059]" />
                <span>Avaliações 100% autênticas e espontâneas</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
