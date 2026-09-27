import React from "react";
import { QrCode, CreditCard, Banknote, Calendar } from "lucide-react";
import { BRAND_CONFIG } from "../config/brand";

export const FormasPagamento: React.FC = () => {
  const paymentIcons = {
    "qr-code": QrCode,
    "credit-card": CreditCard,
    "banknote": Banknote,
    "calendar": Calendar,
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F9E5E9]/50 border-t border-[#F0CCD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="font-sans-clean text-xs font-semibold tracking-[0.2em] text-[#A73C56] uppercase mb-1">
            Flexibilidade & Segurança
          </p>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#2D1D22] font-medium">
            Facilidade para comprar
          </h2>
          <p className="mt-2 font-sans-clean text-xs sm:text-sm text-[#5E4249]">
            Formas de pagamento aceitas com total praticidade no seu atendimento:
          </p>
        </div>

        {/* Payment Methods Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {BRAND_CONFIG.paymentMethods.map((method, idx) => {
            const Icon = paymentIcons[method.icon as keyof typeof paymentIcons] || CreditCard;
            return (
              <div
                key={idx}
                className="bg-white/95 p-5 rounded-xl border border-[#F0CCD4] hover:border-[#8E344B] transition-all text-center flex flex-col items-center justify-center shadow-[0_4px_14px_rgba(142,52,75,0.05)] hover:shadow-[0_6px_20px_rgba(142,52,75,0.1)] group"
              >
                <div className="w-10 h-10 rounded-full bg-[#FCECEF] flex items-center justify-center text-[#8E344B] group-hover:bg-[#8E344B] group-hover:text-white transition-colors mb-3 border border-[#F0CCD4]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif-luxury text-base font-semibold text-[#2D1D22]">
                  {method.name}
                </h3>
                <p className="text-[11px] text-[#7A5660] mt-1 font-sans-clean">
                  {method.tag}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
