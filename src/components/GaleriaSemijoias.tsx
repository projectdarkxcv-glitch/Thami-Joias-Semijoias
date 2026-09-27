import React, { useState } from "react";
import { BookOpen, MessageCircle, ExternalLink, Sparkles, ZoomIn, X } from "lucide-react";
import { BRAND_CONFIG, getCustomWhatsAppUrl } from "../config/brand";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  src: string;
  alt: string;
}

export const GaleriaSemijoias: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const items: GalleryItem[] = BRAND_CONFIG.images.gallery;

  return (
    <section id="semijoias" className="py-16 sm:py-24 bg-[#FAF0F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] text-[#A73C56] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Coleções & Modelos</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#2D1D22] font-medium leading-tight">
            Peças para combinar com a sua história.
          </h2>
          <p className="mt-4 font-sans-clean text-sm sm:text-base text-[#5E4249] leading-relaxed">
            Uma seleção delicada e atemporal. Cada detalhe foi pensado para realçar sua luz
            própria em qualquer ocasião.
          </p>
          <div className="w-16 h-[1.5px] bg-[#E8B8C2] mx-auto mt-5" />
        </div>

        {/* Gallery Grid (Responsive, mobile-optimized, luxury aesthetic) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#F0CCD4] hover:border-[#8E344B] transition-all duration-300 shadow-[0_4px_16px_rgba(142,52,75,0.06)] hover:shadow-[0_10px_28px_rgba(142,52,75,0.12)] flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-[#FCECEF] cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Hover Action Overlay */}
                <div className="absolute inset-0 bg-[#2D1D22]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <span className="p-2.5 bg-white/95 rounded-full text-[#8E344B] shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>

                {/* Category watermark tag (Quiet text, zero pill) */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-semibold tracking-wider text-[#7A5660] uppercase">
                  {item.category}
                </div>
              </div>

              {/* Emotional Description Card Content (No fake prices or store inventory) */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-luxury text-xl font-semibold text-[#2D1D22] leading-snug group-hover:text-[#A73C56] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-sans-clean text-xs sm:text-sm text-[#664850] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Direct Action Link to Inquire on WhatsApp */}
                <div className="mt-5 pt-4 border-t border-[#F5D8DE] flex items-center justify-between">
                  <a
                    href={getCustomWhatsAppUrl(`Olá, Thami! Amei os modelos de ${item.title} no site e gostaria de ver opções disponíveis.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8E344B] hover:text-[#5E1E2D] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Perguntar à Thami</span>
                  </a>

                  <button
                    onClick={() => setSelectedItem(item)}
                    className="text-xs text-[#9E707B] hover:text-[#2D1D22] font-medium transition-colors"
                  >
                    Ampliar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA: Direct to Full Catalog */}
        <div className="mt-14 text-center">
          <p className="font-sans-clean text-sm text-[#664850] mb-4">
            Deseja conferir todas as peças disponíveis atualizadas em tempo real?
          </p>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a
              href={BRAND_CONFIG.catalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide text-white bg-[#8E344B] hover:bg-[#78263B] rounded-full shadow-[0_6px_22px_rgba(142,52,75,0.28)] hover:shadow-[0_8px_26px_rgba(142,52,75,0.36)] transition-all duration-200 active:scale-95"
            >
              <BookOpen className="w-4 h-4 text-[#FCECEF]" />
              <span>Ver Catálogo Completo</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#FCECEF]" />
            </a>

            <a
              href={getCustomWhatsAppUrl("Olá, Thami! Gostaria de ajuda para escolher entre as peças do catálogo.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold tracking-wide text-[#8E344B] bg-white hover:bg-[#FFF5F7] border border-[#E8B8C2] rounded-full shadow-sm hover:border-[#8E344B] transition-all duration-200 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Pedir sugestão no WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#F0CCD4] animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Fechar"
                className="absolute top-3 right-3 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A73C56]">
                {selectedItem.category}
              </span>
              <h3 className="font-serif-luxury text-2xl font-semibold text-[#2D1D22] mt-1">
                {selectedItem.title}
              </h3>
              <p className="mt-2 font-sans-clean text-sm text-[#5E4249] leading-relaxed">
                {selectedItem.description}
              </p>
              
              <div className="mt-6 pt-5 border-t border-[#F5D8DE] flex flex-col sm:flex-row gap-3">
                <a
                  href={getCustomWhatsAppUrl(`Olá, Thami! Gostaria de saber mais detalhes e valores da peça: ${selectedItem.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-[#8E344B] hover:bg-[#78263B] rounded-full transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Falar sobre esta peça no WhatsApp</span>
                </a>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="py-3 px-4 text-xs font-medium text-[#7A5660] hover:bg-[#FCECEF] rounded-full transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
