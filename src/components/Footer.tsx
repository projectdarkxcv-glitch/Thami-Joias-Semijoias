import React from "react";
import { Instagram, MessageCircle, BookOpen, MapPin, Heart } from "lucide-react";
import { BRAND_CONFIG, getWhatsAppUrl } from "../config/brand";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#33151D] text-[#F3E2E6] pt-16 pb-12 border-t border-[#4D222D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#4D222D]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 text-center md:text-left">
            <span className="font-serif-luxury text-2xl sm:text-3xl tracking-[0.18em] text-[#FFF0F3] font-medium uppercase block">
              {BRAND_CONFIG.name}
            </span>
            <p className="font-serif-luxury italic text-sm text-[#F7CFD8] mt-1">
              "{BRAND_CONFIG.slogan}"
            </p>
            <p className="mt-4 font-sans-clean text-xs sm:text-sm text-[#D4B6BD] leading-relaxed max-w-sm mx-auto md:mx-0">
              Consultoria exclusiva de semijoias delicadas e elegantes. Peças selecionadas com
              banho nobre, garantia e atendimento humanizado.
            </p>

            <div className="mt-4 flex items-center justify-center md:justify-start gap-2 text-xs text-[#F7CFD8]">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Atendimento em {BRAND_CONFIG.locationDisplay}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 text-center md:text-left">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#E8B8C2] uppercase mb-4">
              Navegação
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="text-[#D4B6BD] hover:text-[#FFF0F3] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#semijoias" className="text-[#D4B6BD] hover:text-[#FFF0F3] transition-colors">
                  Galeria de Semijoias
                </a>
              </li>
              <li>
                <a href="#sobre-mim" className="text-[#D4B6BD] hover:text-[#FFF0F3] transition-colors">
                  Sobre a Thami
                </a>
              </li>
              <li>
                <a href="#qualidade" className="text-[#D4B6BD] hover:text-[#FFF0F3] transition-colors">
                  Qualidade & Garantia
                </a>
              </li>
              <li>
                <a href="#presentes" className="text-[#D4B6BD] hover:text-[#FFF0F3] transition-colors">
                  Embalagens para Presente
                </a>
              </li>
              <li>
                <a
                  href={BRAND_CONFIG.catalogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4B6BD] hover:text-[#FFF0F3] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Catálogo Online</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-3 text-center md:text-left flex flex-col items-center md:items-start">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#E8B8C2] uppercase mb-4">
              Contato & Redes
            </p>

            <div className="flex flex-col gap-3 w-full max-w-xs">
              {/* WhatsApp direct link */}
              <a
                href={getWhatsAppUrl("hero")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center md:justify-start gap-2.5 px-4 py-2.5 text-xs font-medium text-white bg-[#471E28] hover:bg-[#5C2634] border border-[#6B2F3D] rounded-xl transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: {BRAND_CONFIG.whatsappDisplayNumber}</span>
              </a>

              {/* Instagram official link */}
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center md:justify-start gap-2.5 px-4 py-2.5 text-xs font-medium text-[#FFF0F3] hover:text-white bg-[#471E28] hover:bg-[#5C2634] border border-[#6B2F3D] rounded-xl transition-all"
              >
                <Instagram className="w-4 h-4 text-[#F7A6B6]" />
                <span>Instagram: {BRAND_CONFIG.instagramHandle}</span>
              </a>

              {/* Catalog link */}
              <a
                href={BRAND_CONFIG.catalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center md:justify-start gap-2.5 px-4 py-2.5 text-xs font-medium text-[#F7CFD8] hover:text-white bg-transparent hover:bg-[#471E28] border border-[#6B2F3D]/70 rounded-xl transition-all"
              >
                <BookOpen className="w-4 h-4 text-[#C5A059]" />
                <span>thamirismedeiros.yannesemijoias.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A88B92] text-center sm:text-left">
          <p>© 2026 Thami Joias. Todos os direitos reservados.</p>
          <p className="flex items-center justify-center gap-1.5 text-[#D4B6BD]">
            <span>Feito com carinho para você brilhar</span>
            <Heart className="w-3.5 h-3.5 text-[#F7A6B6] fill-[#F7A6B6]" />
          </p>
        </div>

      </div>
    </footer>
  );
};
