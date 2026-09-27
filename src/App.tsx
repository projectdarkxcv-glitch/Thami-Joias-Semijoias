import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Destaques } from "./components/Destaques";
import { GaleriaSemijoias } from "./components/GaleriaSemijoias";
import { SobreMim } from "./components/SobreMim";
import { ComoFunciona } from "./components/ComoFunciona";
import { QualidadeConfianca } from "./components/QualidadeConfianca";
import { SessaoPresentes } from "./components/SessaoPresentes";
import { FormasPagamento } from "./components/FormasPagamento";
import { LocalizacaoAtendimento } from "./components/LocalizacaoAtendimento";
import { Depoimentos } from "./components/Depoimentos";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { WhatsAppFloatingButton } from "./components/WhatsAppFloatingButton";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF0F2] text-[#2D2024] flex flex-col font-sans-clean antialiased selection:bg-[#F7CFD8] selection:text-[#5E1E2D] overflow-x-hidden">
      {/* Top Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Destaques & Diferenciais */}
        <Destaques />

        {/* 3. Galeria de Semijoias & Vitrine */}
        <GaleriaSemijoias />

        {/* 4. Apresentação da Consultora ("Sobre Mim") */}
        <SobreMim />

        {/* 5. Como Funciona / Experiência de Compra */}
        <ComoFunciona />

        {/* 6. Qualidade & Confiança (Garantia, Banho, Hipoalergênicas) */}
        <QualidadeConfianca />

        {/* 7. Sessão de Presentes & Embalagem Especial */}
        <SessaoPresentes />

        {/* 8. Formas de Pagamento Aceitas */}
        <FormasPagamento />

        {/* 9. Localização & Atendimento em Joinville - SC */}
        <LocalizacaoAtendimento />

        {/* 10. Mural de Carinho / Depoimentos Reais */}
        <Depoimentos />

        {/* 11. Chamada Final Emocional */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
