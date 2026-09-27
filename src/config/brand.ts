/**
 * Configuração central da marca THAMI JOIAS
 * Todas as informações de contato, links, redes sociais, formas de pagamento
 * e imagens estão centralizadas aqui para fácil edição pela proprietária ou desenvolvedores.
 */

export const BRAND_CONFIG = {
  // Dados Principais da Marca
  name: "THAMI JOIAS",
  slogan: "Detalhes que fazem você brilhar",
  consultantName: "Thami",
  city: "Joinville",
  state: "SC",
  locationDisplay: "Joinville - SC",

  // Links Oficiais (sem links fictícios)
  catalogUrl: "https://thamirismedeiros.yannesemijoias.com",
  instagramUrl: "https://www.instagram.com/thami_joias_",
  instagramHandle: "@thami_joias_",
  whatsappRawNumber: "5547996832025",
  whatsappDisplayNumber: "(47) 99683-2025",

  // Mensagens pré-configuradas para o WhatsApp (contextuais)
  whatsappMessages: {
    hero: "Olá, Thami! Vi seu site e gostaria de conhecer suas semijoias.",
    consultoria: "Olá, Thami! Vi seu site e gostaria de ajuda para escolher uma semijoia.",
    presente: "Olá, Thami! Estou procurando uma semijoia para presentear alguém e gostaria da sua ajuda.",
    pedido: "Olá, Thami! Vi seu site e gostaria de fazer um pedido.",
    duvidas: "Olá, Thami! Vi seu site e gostaria de tirar uma dúvida sobre as peças.",
  },

  // Modalidades de Entrega em Joinville
  deliveryMethods: [
    {
      title: "Entrega particular",
      description: "Agendamento de entrega prática e com todo o cuidado diretamente em Joinville.",
      icon: "car",
    },
    {
      title: "Retirada / coleta",
      description: "Opção de retirada combinada de forma simples e rápida.",
      icon: "package",
    },
    {
      title: "Atendimento pelo WhatsApp",
      description: "Combinamos o melhor dia e horário diretamente na nossa conversa.",
      icon: "message-circle",
    },
  ],

  // Formas de Pagamento Aceitas
  paymentMethods: [
    { name: "Pix", tag: "Prático e instantâneo", icon: "qr-code" },
    { name: "Cartão de Crédito", tag: "Todas as bandeiras", icon: "credit-card" },
    { name: "Cartão de Débito", tag: "Para sua comodidade", icon: "credit-card" },
    { name: "Parcelamento no Cartão", tag: "Consulte condições no WhatsApp", icon: "calendar" },
    { name: "Dinheiro", tag: "No momento da entrega ou retirada", icon: "banknote" },
  ],

  // Diferenciais das Semijoias e do Atendimento
  differentials: [
    {
      id: "personalizado",
      title: "Atendimento Personalizado",
      description: "Converso com você para entender seu estilo, ocasião e preferência com atenção exclusiva.",
    },
    {
      id: "ajuda",
      title: "Ajuda para Escolher",
      description: "Seja para você ou para presentear, te envio fotos, detalhes e combinações sob medida.",
    },
    {
      id: "facilidade",
      title: "Compra Fácil pelo WhatsApp",
      description: "Sem burocracias, sem carrinhos complicados. Uma conversa leve e direta comigo.",
    },
    {
      id: "qualidade",
      title: "Qualidade e Banho Nobre",
      description: "Peças selecionadas com acabamento impecável, brilho refinado e excelente durabilidade.",
    },
    {
      id: "garantia",
      title: "Garantia de Qualidade",
      description: "Segurança e tranquilidade na sua escolha, valorizando o cuidado com cada detalhe.",
    },
    {
      id: "hipoalergenicas",
      title: "Peças Hipoalergênicas",
      description: "Desenvolvidas com tecnologia que minimiza riscos de alergias, proporcionando conforto diário.",
    },
    {
      id: "presente",
      title: "Embalagem para Presente",
      description: "Seu pedido pronto para encantar, embalado com delicadeza e carinho especial.",
    },
  ],

  // Imagens da Marca
  // Quando a proprietária disponibilizar fotos finais de produtos ou ensaio próprio,
  // basta atualizar os caminhos abaixo.
  images: {
    heroDisplay: "/src/assets/images/hero_semijoias_display_1790532034979.jpg",
    consultantPortrait: "/src/assets/images/regenerated_image_1790536983325.png",
    // Galeria de Destaques
    gallery: [
      {
        id: "colar-delicado",
        title: "Colares & Pingentes Delicados",
        description: "Pontos de luz e detalhes sutis para iluminar seu colo com leveza.",
        category: "Colares",
        src: "/src/assets/images/semijoias_colar_delicado_1790532045722.jpg",
        alt: "Colar delicado dourado com pingente com ponto de luz de zircônia",
        isPlaceholder: false,
      },
      {
        id: "brincos-elegantes",
        title: "Brincos Hipoalergênicos",
        description: "Do brilho sutil ao clássico marcante, com conforto absoluto.",
        category: "Brincos",
        src: "/src/assets/images/semijoias_brincos_elegantes_1790532055712.jpg",
        alt: "Brincos elegantes de semijoia com detalhes delicados",
        isPlaceholder: false,
      },
      {
        id: "pulseiras-mix",
        title: "Pulseiras & Elos Finos",
        description: "Perfeitas para usar sozinhas ou em mix harmônicos e modernos.",
        category: "Pulseiras",
        src: "/src/assets/images/semijoias_pulseiras_mix_1790532064340.jpg",
        alt: "Mix de pulseiras delicadas douradas",
        isPlaceholder: false,
      },
      {
        id: "conjuntos-especiais",
        title: "Composições para Ocasiões Especiais",
        description: "Harmonias completas pensadas para destacar sua beleza única.",
        category: "Conjuntos",
        src: "/src/assets/images/hero_semijoias_display_1790532034979.jpg",
        alt: "Composição de semijoias finas",
        isPlaceholder: false,
      },
    ],
  },
};

/**
 * Função utilitária para gerar links do WhatsApp formatados com codificação segura de URL
 */
export function getWhatsAppUrl(messageKey: keyof typeof BRAND_CONFIG.whatsappMessages = "hero"): string {
  const text = BRAND_CONFIG.whatsappMessages[messageKey] || BRAND_CONFIG.whatsappMessages.hero;
  return `https://wa.me/${BRAND_CONFIG.whatsappRawNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Função utilitária com mensagem customizada direta
 */
export function getCustomWhatsAppUrl(customText: string): string {
  return `https://wa.me/${BRAND_CONFIG.whatsappRawNumber}?text=${encodeURIComponent(customText)}`;
}
