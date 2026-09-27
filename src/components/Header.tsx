import React, { useState, useEffect } from "react";
import { MessageCircle, ExternalLink, Menu, X } from "lucide-react";
import { BRAND_CONFIG, getWhatsAppUrl } from "../config/brand";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Semijoias", href: "#semijoias" },
    { label: "Sobre Mim", href: "#sobre-mim" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Qualidade", href: "#qualidade" },
    { label: "Presentes", href: "#presentes" },
    { label: "Atendimento", href: "#atendimento" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF0F2]/95 backdrop-blur-md shadow-[0_2px_18px_rgba(142,52,75,0.08)] border-b border-[#F0CCD4]"
          : "bg-[#FAF0F2]/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Brand Wordmark (Clean single element display face) */}
          <a
            href="#inicio"
            className="group flex flex-col items-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A73C56] rounded-sm"
          >
            <span className="font-serif-luxury text-2xl sm:text-3xl tracking-[0.15em] font-medium text-[#2D2024] group-hover:text-[#A73C56] transition-colors uppercase">
              {BRAND_CONFIG.name}
            </span>
            <span className="font-sans-clean text-[10px] tracking-[0.25em] uppercase text-[#9E707B] -mt-1 hidden sm:block">
              {BRAND_CONFIG.slogan}
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação Principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#5E4249] hover:text-[#A73C56] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#A73C56] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Quick Action (WhatsApp & Catalog button) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BRAND_CONFIG.catalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide text-[#6E2337] bg-[#FCECEF] hover:bg-[#F8DCE2] border border-[#E8B8C2] rounded-full transition-all duration-200 active:scale-95 whitespace-nowrap shadow-xs"
            >
              <span>Catálogo</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#A73C56]" />
            </a>

            <a
              href={getWhatsAppUrl("hero")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#8E344B] hover:bg-[#75263a] rounded-full transition-all duration-200 shadow-[0_2px_12px_rgba(142,52,75,0.25)] hover:shadow-[0_4px_16px_rgba(142,52,75,0.35)] active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#8CE49B]" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl("hero")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp"
              className="p-2 text-[#8E344B] hover:text-[#A73C56] transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4A3238] hover:text-[#2D2024] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A73C56] rounded-lg"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF0F2] border-b border-[#F0CCD4] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#4A3238] hover:text-[#A73C56] py-2 border-b border-[#F5D8DE]/80 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 grid grid-cols-2 gap-3">
              <a
                href={BRAND_CONFIG.catalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 py-3 px-3 text-xs font-semibold text-[#6E2337] bg-[#FCECEF] border border-[#E8B8C2] rounded-full active:scale-95 text-center"
              >
                <span>Ver Catálogo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={getWhatsAppUrl("hero")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 py-3 px-3 text-xs font-semibold text-white bg-[#8E344B] rounded-full active:scale-95 text-center shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#8CE49B]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
