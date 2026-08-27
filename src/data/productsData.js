export const productCategories = [
  { id: "todos", name: "Todos os Produtos", icon: "Boxes" },
  { id: "blocos", name: "Blocos de Concreto", icon: "Building2" },
  { id: "pisos", name: "Pisos Intertravados", icon: "Grid3X3" },
  { id: "drenantes", name: "Linha Drenante Ecológica", icon: "Droplets" }
];

export const productsData = [
  {
    id: "bloco-estrutural",
    category: "blocos",
    name: "Bloco Estrutural 4,0 MPa",
    subtitle: "Estrutura e vedação em um só produto",
    dimensions: "14 x 19 x 39 cm",
    resistance: "4,0 MPa (Média até 4,5 MPa)",
    yieldPerM2: "12,5 blocos / m²",
    image: "/assets/products/bloco-estrutural.jpg",
    badge: "Mais Vendido",
    tagline: "A solução perfeita para construções que exigem resistência, segurança e agilidade!",
    description: "Desenvolvido com controle tecnológico rigoroso, o Bloco Estrutural ESM substitui vigas e pilares convencionais na alvenaria armada, acelerando o cronograma físico da obra e reduzindo drasticamente o consumo de formas de madeira e aço.",
    highlights: [
      "Suporta grandes cargas de compressão",
      "Mais agilidade no cronograma da obra",
      "Estrutura e vedação em um só elemento",
      "Encaixe perfeito e acabamento liso"
    ],
    idealFor: [
      "Edifícios de múltiplos pavimentos",
      "Galpões industriais e centros logísticos",
      "Muros de arrimo e contenções",
      "Paredes estruturais sem pilares aparentes",
      "Casas residenciais de alto padrão"
    ],
    specs: [
      { label: "Dimensões Nominais", value: "14 x 19 x 39 cm (Largura x Altura x Comprimento)" },
      { label: "Resistência Característica", value: "4,0 MPa (atendendo ou superando NBR)" },
      { label: "Consumo Médio", value: "12,5 peças por m² de parede" },
      { label: "Paletização", value: "Paletes cintados e organizados" },
      { label: "Descarga", value: "Mecanizada com guindauto Munck" }
    ],
    whatsappMessage: "Olá! Gostaria de um orçamento para o Bloco Estrutural 14x19x39 cm da ESM. Qual a disponibilidade para entrega em Uberlândia/região?"
  },
  {
    id: "bloco-canaleta",
    category: "blocos",
    name: "Bloco Canaleta",
    subtitle: "Reforço e condução estrutural prática",
    dimensions: "14 x 19 x 39 cm",
    resistance: "Alta Resistência",
    yieldPerM2: "2,5 peças / metro linear",
    image: "/assets/products/bloco-canaleta.jpg",
    badge: "Essencial",
    tagline: "Ideal para aplicações estruturais, cintas de amarração e reforço contínuo em construções.",
    description: "O Bloco Canaleta ESM possui canal interno em formato 'U' que funciona como fôrma permanente para vigas, vergas e contravergas, eliminando a necessidade de carpintaria e caixarias de madeira na obra.",
    highlights: [
      "Elimina formas de madeira na obra",
      "Alta resistência mecânica",
      "Perfeito para passagem de tubulações elétricas e hidráulicas",
      "Versatilidade e acabamento uniforme"
    ],
    idealFor: [
      "Cintas de amarração superior",
      "Vergas sobre portas e janelas",
      "Contravergas sob peitoris",
      "Vigas de transição e baldrames",
      "Proteção e condução de instalações embutidas"
    ],
    specs: [
      { label: "Dimensões Nominais", value: "14 x 19 x 39 cm" },
      { label: "Aplicação", value: "Vigas embutidas, vergas e contravergas" },
      { label: "Rendimento Linear", value: "2,5 peças por metro de cinta/viga" },
      { label: "Acabamento", value: "Uniforme com a linha de blocos" },
      { label: "Descarga", value: "Mecanizada / Paletizada" }
    ],
    whatsappMessage: "Olá! Gostaria de cotar o Bloco Canaleta 14x19x39 cm da ESM para minha obra."
  },
  {
    id: "bloco-com-fundo",
    category: "blocos",
    name: "Bloco com Fundo",
    subtitle: "Vedação e contenção sem desperdício de concreto",
    dimensions: "14 x 19 x 39 cm e 10 x 20 x 40 cm",
    resistance: "4,0 MPa",
    yieldPerM2: "12,5 blocos / m²",
    image: "/assets/products/bloco-com-fundo.jpg",
    badge: "Praticidade",
    tagline: "Apoio e contenção de argamassa sem vazamentos, garantindo rapidez e limpeza na alvenaria.",
    description: "Fabricado com fundo fechado, este bloco é fundamental para bases, primeira fiada, canaletas de contenção e áreas onde é necessário impedir o escorrimento de graute ou argamassa para o interior da parede.",
    highlights: [
      "Evita desperdício de concreto e graute",
      "Disponível em opções 14x19x39 cm e 10x20x40 cm",
      "Aumenta a velocidade de assentamento",
      "Estrutura robusta e compactação perfeita"
    ],
    idealFor: [
      "Primeira fiada de alvenaria",
      "Cintas e vigas de transição",
      "Locais de apoio e amarração de lajes",
      "Paredes de divisa e fechamento técnico"
    ],
    specs: [
      { label: "Opções de Medida", value: "14x19x39 cm e 10x20x40 cm" },
      { label: "Tipo de Fundo", value: "Fechado / Maciço na base" },
      { label: "Resistência", value: "4,0 MPa" },
      { label: "Paletização", value: "Paletes protegidos para transporte" }
    ],
    whatsappMessage: "Olá! Preciso de cotação para o Bloco com Fundo da ESM Blocos e Pisos."
  },
  {
    id: "meio-bloco",
    category: "blocos",
    name: "Meio Bloco",
    subtitle: "Ajuste milimétrico e desperdício zero",
    dimensions: "14 x 19 x 19 cm",
    resistance: "4,0 MPa",
    yieldPerM2: "25 peças / m² (se usado isolado)",
    image: "/assets/products/meio-bloco.jpg",
    badge: "Desperdício Zero",
    tagline: "Solução prática para ajustes em alvenaria estrutural ou de vedação, sem corte de blocos.",
    description: "Elimine de vez a perda de tempo e quebra de materiais no canteiro. O Meio Bloco ESM encaixa perfeitamente nas amarrações de cantos, vãos de esquadrias e encontros de paredes.",
    highlights: [
      "Facilita o alinhamento e prumo",
      "Reduz a zero o entulho de quebra no canteiro",
      "Agiliza a produtividade dos pedreiros",
      "Encaixe modular perfeito com o bloco inteiro"
    ],
    idealFor: [
      "Cantos e emendas em 'L' e 'T'",
      "Amarrações estruturais de paredes",
      "Requisições em vãos de portas e janelas",
      "Acabamentos onde o bloco inteiro não cabe"
    ],
    specs: [
      { label: "Dimensões Nominais", value: "14 x 19 x 19 cm" },
      { label: "Compatibilidade", value: "Módulos de 14x19x39 cm" },
      { label: "Resistência", value: "4,0 MPa" },
      { label: "Entrega", value: "Mecanizada no palete" }
    ],
    whatsappMessage: "Olá! Gostaria de incluir o Meio Bloco 14x19x19 cm no meu orçamento da ESM."
  },
  {
    id: "piso-intertravado-macico",
    category: "pisos",
    name: "Piso Intertravado Maciço (Paver)",
    subtitle: "Alta resistência ao tráfego pesado e durabilidade extrema",
    dimensions: "08 x 10 x 20 cm e 06 x 10 x 20 cm",
    resistance: "35 a 50 MPa (Tráfego leve a pesado)",
    yieldPerM2: "50 peças / m²",
    image: "/assets/products/piso-intertravado-macico.jpg",
    badge: "Alta Durabilidade",
    tagline: "O piso intertravado maciço é a escolha ideal para quem busca resistência, facilidade de manutenção e beleza.",
    description: "Produzido com concreto de altíssimo adensamento, suporta veículos leves e pesados (caminhões e carretas). Permite liberação imediata ao tráfego após o assentamento e facilita reparos futuros no subsolo sem quebrar o piso.",
    highlights: [
      "Suporta cargas pesadas de caminhões e veículos",
      "Fácil manutenção (peças reaproveitáveis)",
      "Contribui para a permeabilidade do solo",
      "Acabamento moderno, seguro e antiderrapante"
    ],
    idealFor: [
      "Estacionamentos comerciais e de shoppings",
      "Calçadas públicas e passeios acessíveis",
      "Pátios de manobra e galpões industriais",
      "Vias urbanas, postos de combustível e condomínios"
    ],
    specs: [
      { label: "Espessuras Disponíveis", value: "6 cm (tráfego leve/médio) e 8 cm (tráfego pesado)" },
      { label: "Dimensões de Face", value: "10 x 20 cm" },
      { label: "Consumo por m²", value: "50 blocos por m²" },
      { label: "Cores & Acabamentos", value: "Cinza natural padrão e opções personalizadas" },
      { label: "Norma Técnica", value: "NBR 9781" }
    ],
    whatsappMessage: "Olá! Gostaria de um orçamento de Piso Intertravado Maciço (Paver) da ESM. Qual o valor por m²?"
  },
  {
    id: "piso-intertravado-16-faces",
    category: "pisos",
    name: "Piso Intertravado 16 Faces (8 cm)",
    subtitle: "Travamento geométrico superior e estética diferenciada",
    dimensions: "Espessura de 8 cm",
    resistance: "Alta Resistência (Tráfego Intenso)",
    yieldPerM2: "Consumo modular otimizado",
    image: "/assets/products/piso-16-faces.jpg",
    badge: "Design Exclusivo",
    tagline: "Combina resistência mecânica extrema, versatilidade de paginação e um visual moderno e sofisticado.",
    description: "Com suas 16 faces de contato e encaixe mútuo, este piso distribui as cargas de frenagem e aceleração de forma homogênea, impedindo o deslocamento das peças mesmo em declives acentuados.",
    highlights: [
      "Travamento mecânico superior entre as peças",
      "Visual diferenciado com múltiplas paginações",
      "Fácil manutenção e reposição individual",
      "Excelente drenagem superficial e sustentabilidade"
    ],
    idealFor: [
      "Ruas internas de condomínios fechados",
      "Acessos íngremes e rampas de garagens",
      "Pátios comerciais e áreas de grande circulação",
      "Espaços de lazer, praças e calçadões"
    ],
    specs: [
      { label: "Espessura", value: "8 cm (para alto tráfego e veículos pesados)" },
      { label: "Formato", value: "16 faces de intertravamento contínuo" },
      { label: "Segurança", value: "Superfície antiderrapante e drenante nas juntas" },
      { label: "Descarga", value: "Mecanizada e paletizada" }
    ],
    whatsappMessage: "Olá! Gostaria de cotar o Piso Intertravado 16 Faces de 8cm da ESM."
  },
  {
    id: "piso-drenante-pedrisco",
    category: "drenantes",
    name: "Piso Drenante com Pedrisco",
    subtitle: "Conforto térmico, visual sofisticado e 100% ecológico",
    dimensions: "08 x 10 x 20 cm",
    resistance: "Permeável / Tráfego Leve",
    yieldPerM2: "50 peças / m²",
    image: "/assets/products/piso-drenante-pedrisco.jpg",
    badge: "Linha Ecológica",
    tagline: "Une conforto ao caminhar, acabamento delicado e excelente drenagem natural da água da chuva.",
    description: "Composto por agregados selecionados de pedrisco, este piso possui porosidade controlada que permite a infiltração instantânea da água no lençol freático, prevenindo poças e alagamentos com requinte paisagístico.",
    highlights: [
      "Toque visual mais fino, moderno e elegante",
      "Muito confortável ao caminhar descalço",
      "Drena a água imediatamente, evitando poças",
      "Ajuda no cumprimento da taxa de permeabilidade do solo"
    ],
    idealFor: [
      "Jardins e áreas de paisagismo",
      "Varandas, gazebos e bordas de lazer",
      "Pátios residenciais e áreas de convivência",
      "Calçadas ecológicas e caminhos de parques"
    ],
    specs: [
      { label: "Dimensões", value: "08 x 10 x 20 cm" },
      { label: "Agregado", value: "Pedrisco nobre selecionado" },
      { label: "Capacidade de Drenagem", value: "Alta permeabilidade superficial" },
      { label: "Instalação", value: "Assentamento sobre base drenante" }
    ],
    whatsappMessage: "Olá! Tenho interesse no Piso Drenante com Pedrisco da ESM para minha área externa."
  },
  {
    id: "piso-drenante-brita0",
    category: "drenantes",
    name: "Piso Drenante com Brita 0",
    subtitle: "Alta permeabilidade com estrutura robusta e tráfego moderado",
    dimensions: "08 x 10 x 20 cm",
    resistance: "Alta Permeabilidade e Resistência",
    yieldPerM2: "50 peças / m²",
    image: "/assets/products/piso-drenante-brita0.jpg",
    badge: "Sustentável",
    tagline: "A escolha ideal para quem precisa de robustez, alta capacidade de escoamento e estética rústico-moderna.",
    description: "Desenvolvido com Brita 0 graduada para suportar a passagem contínua de veículos com escoamento pluviométrico total. Ideal para quem deseja sustentabilidade sem abrir mão de resistência.",
    highlights: [
      "Máxima permeabilidade e drenagem contínua",
      "Excelente resistência mecânica para veículos",
      "Visual rústico e sofisticado",
      "Sustentabilidade para projetos ambientais"
    ],
    idealFor: [
      "Estacionamentos permeáveis e garagens",
      "Calçadas urbanas e praças públicas",
      "Áreas de tráfego leve a moderado",
      "Empreendimentos verdes e condomínios sustentáveis"
    ],
    specs: [
      { label: "Dimensões", value: "08 x 10 x 20 cm" },
      { label: "Agregado", value: "Brita 0 calibrada" },
      { label: "Escoamento", value: "Permeabilidade imediata da água da chuva" },
      { label: "Capacidade", value: "Veículos leves e médios" }
    ],
    whatsappMessage: "Olá! Gostaria de um orçamento do Piso Drenante com Brita 0 da ESM Blocos e Pisos."
  }
];
