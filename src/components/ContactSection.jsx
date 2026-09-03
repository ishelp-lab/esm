import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Navigation, Check, ChevronRight, ChevronLeft, 
  Building2, Sparkles, Send, Box, LayoutGrid, Layers, Droplets, Package,
  Home, Castle, Warehouse, Network, HardHat
} from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const ContactSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [productInterest, setProductInterest] = useState('');
  const [projectType, setProjectType] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const productOptions = [
    { id: 'Blocos Estruturais (4,5 MPa)', title: 'Blocos Estruturais', icon: Box, sub: 'Resistência 4,5 MPa com laudo' },
    { id: 'Canaletas & Meio Bloco', title: 'Canaletas & Meio Bloco', icon: Layers, sub: 'Alvenaria e vigamento prático' },
    { id: 'Pisos Intertravados (Pavers)', title: 'Pisos Intertravados', icon: LayoutGrid, sub: 'Pavers e 16 faces para tráfego' },
    { id: 'Pisos Drenantes Ecológicos', title: 'Linha Drenante', icon: Droplets, sub: 'Ecológico, pedrisco e brita 0' },
    { id: 'Linha Completa / Vários Itens', title: 'Linha Completa', icon: Package, sub: 'Múltiplos produtos para obra' }
  ];

  const projectOptions = [
    { id: 'Residencial / Muro', title: 'Residencial / Muro', icon: Home, desc: 'Casas, muros e reformas' },
    { id: 'Casa de Alto Padrão', title: 'Casa de Alto Padrão', icon: Castle, desc: 'Acabamento fino e calçadas' },
    { id: 'Galpão / Comercial', title: 'Galpão / Comercial', icon: Warehouse, desc: 'Grandes vãos e pátios' },
    { id: 'Condomínio / Loteamento', title: 'Condomínio / Loteamento', icon: Network, desc: 'Vias e áreas coletivas' },
    { id: 'Construtora / Engenharia', title: 'Construtora / Engenharia', icon: HardHat, desc: 'Fornecimento contínuo' }
  ];

  const handleQuickQuote = (e) => {
    if (e) e.preventDefault();
    const cleanProduct = productInterest.trim() || 'A definir com consultor';
    const cleanProject = projectType.trim() || 'Geral / Obra';
    const cleanName = name.trim();
    const cleanLocation = location.trim() || 'Uberlândia e região';

    const lines = [
      'Olá, ESM Blocos e Pisos!',
      'Gostaria de solicitar uma cotação direta da fábrica:',
      '',
      `• *Produto de Interesse:* ${cleanProduct}`,
      `• *Tipo de Obra:* ${cleanProject}`
    ];

    if (cleanName) {
      lines.push(`• *Nome / Construtora:* ${cleanName}`);
    }

    lines.push(`• *Localização da Obra:* ${cleanLocation}`);
    lines.push('');
    lines.push('Poderiam me informar valores com frete e opção de descarga mecanizada?');

    // Usar %0A direto para garantir que o WhatsApp Web e Mobile quebrem as linhas perfeitamente
    const textParam = lines.map(line => encodeURIComponent(line)).join('%0A');
    const url = `https://api.whatsapp.com/send?phone=${companyInfo.whatsappRaw}&text=${textParam}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-[#fcfaf7] relative border-b border-[#e8e2d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f3efe9] border border-[#e8e2d8] text-[#b46f34] text-xs font-bold uppercase tracking-wider mb-3 font-['Barlow_Condensed']">
            <Sparkles className="w-3.5 h-3.5" />
            Atendimento Comercial Online
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#652e1f] tracking-tight font-['Barlow_Condensed'] uppercase leading-[0.95]">
            SOLICITAR <span className="text-[#b46f34]">COTAÇÃO RÁPIDA</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#46484a] font-['Montserrat']">
            Simule seu pedido em 3 passos simples e receba os valores de fábrica direto no WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Simulator Column: FIRST on mobile (order-1), RIGHT on desktop (lg:order-2 lg:col-span-7) */}
          <div className="order-1 lg:order-2 lg:col-span-7 w-full">
            <div className="p-6 sm:p-9 rounded-3xl bg-white border border-[#e8e2d8] shadow-xl relative overflow-hidden">
              
              {/* iOS-Style Step Progress Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#e8e2d8] mb-6">
                <div>
                  <span className="text-[11px] font-bold text-[#b46f34] uppercase tracking-wider font-['Barlow_Condensed']">
                    Passo {currentStep} de 3
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#652e1f] font-['Barlow_Condensed'] uppercase tracking-tight">
                    {currentStep === 1 && 'Qual material você precisa?'}
                    {currentStep === 2 && 'Qual o tipo da sua obra?'}
                    {currentStep === 3 && 'Onde será a entrega?'}
                  </h3>
                </div>

                {/* Step Dots indicator */}
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3].map((step) => (
                    <button
                      key={step}
                      type="button"
                      onClick={() => {
                        if (step === 1 || (step === 2 && productInterest) || (step === 3 && productInterest && projectType)) {
                          setCurrentStep(step);
                        }
                      }}
                      aria-label={`Ir para passo ${step}`}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        currentStep === step 
                          ? 'w-7 bg-[#652e1f]' 
                          : step < currentStep 
                            ? 'w-2.5 bg-[#b46f34]' 
                            : 'w-2.5 bg-[#e8e2d8]'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Step 1: Product Selection (iOS Clean List with Minimalist Lucide Icons) */}
              {currentStep === 1 && (
                <div className="space-y-2.5 animate-fadeIn">
                  {productOptions.map((opt) => {
                    const IconComp = opt.icon;
                    const isSelected = productInterest === opt.id;
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => {
                          setProductInterest(opt.id);
                          setTimeout(() => setCurrentStep(2), 180);
                        }}
                        className={`w-full p-3.5 sm:p-4 rounded-2xl text-left border transition-all flex items-center justify-between cursor-pointer group ${
                          isSelected
                            ? 'bg-[#652e1f] text-white border-[#652e1f] shadow-md transform scale-[1.01]'
                            : 'bg-[#fcfaf7] text-[#46484a] hover:bg-[#f3efe9] border-[#e8e2d8]'
                        }`}
                      >
                        <div className="flex items-center gap-3.5 pr-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                            isSelected 
                              ? 'bg-white/20 text-[#e6b382]' 
                              : 'bg-white border border-[#e8e2d8] text-[#b46f34] group-hover:border-[#b46f34]'
                          }`}>
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div>
                            <p className={`text-sm font-bold leading-tight ${isSelected ? 'text-white' : 'text-[#652e1f]'}`}>
                              {opt.title}
                            </p>
                            <p className={`text-xs mt-0.5 ${isSelected ? 'text-amber-100/90' : 'text-[#686c6e]'}`}>
                              {opt.sub}
                            </p>
                          </div>
                        </div>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                          isSelected
                            ? 'bg-white text-[#652e1f]'
                            : 'bg-white border border-[#e8e2d8] text-transparent group-hover:border-[#b46f34]'
                        }`}>
                          <Check className="w-4 h-4" />
                        </div>
                      </button>
                    );
                  })}
                  
                  <div className="pt-5 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      disabled={!productInterest}
                      className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-bold uppercase tracking-wider font-['Barlow_Condensed'] text-sm transition-all shadow-md ${
                        productInterest 
                          ? 'bg-[#652e1f] hover:bg-[#4e2216] text-white cursor-pointer hover:shadow-lg hover:-translate-y-0.5' 
                          : 'bg-[#e8e2d8] text-[#686c6e] cursor-not-allowed opacity-60'
                      }`}
                    >
                      <span>Avançar para Passo 2</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Project Type (iOS Clean Segmented Selection with Minimalist Lucide Icons) */}
              {currentStep === 2 && (
                <div className="space-y-2.5 animate-fadeIn">
                  {projectOptions.map((opt) => {
                    const IconComp = opt.icon;
                    const isSelected = projectType === opt.id;
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => {
                          setProjectType(opt.id);
                          setTimeout(() => setCurrentStep(3), 180);
                        }}
                        className={`w-full p-3.5 sm:p-4 rounded-2xl text-left border transition-all flex items-center justify-between cursor-pointer group ${
                          isSelected
                            ? 'bg-[#b46f34] text-white border-[#b46f34] shadow-md transform scale-[1.01]'
                            : 'bg-[#fcfaf7] text-[#46484a] hover:bg-[#f3efe9] border-[#e8e2d8]'
                        }`}
                      >
                        <div className="flex items-center gap-3.5 pr-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                            isSelected 
                              ? 'bg-white/20 text-white' 
                              : 'bg-white border border-[#e8e2d8] text-[#b46f34] group-hover:border-[#b46f34]'
                          }`}>
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div>
                            <p className={`text-sm font-bold leading-tight ${isSelected ? 'text-white' : 'text-[#652e1f]'}`}>
                              {opt.title}
                            </p>
                            <p className={`text-xs mt-0.5 ${isSelected ? 'text-amber-50' : 'text-[#686c6e]'}`}>
                              {opt.desc}
                            </p>
                          </div>
                        </div>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                          isSelected
                            ? 'bg-white text-[#b46f34]'
                            : 'bg-white border border-[#e8e2d8] text-transparent group-hover:border-[#b46f34]'
                        }`}>
                          <Check className="w-4 h-4" />
                        </div>
                      </button>
                    );
                  })}

                  <div className="pt-5 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs font-bold text-[#686c6e] hover:text-[#652e1f] transition-colors uppercase tracking-wider font-['Barlow_Condensed'] cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Voltar</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      disabled={!projectType}
                      className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-bold uppercase tracking-wider font-['Barlow_Condensed'] text-sm transition-all shadow-md ${
                        projectType 
                          ? 'bg-[#652e1f] hover:bg-[#4e2216] text-white cursor-pointer hover:shadow-lg hover:-translate-y-0.5' 
                          : 'bg-[#e8e2d8] text-[#686c6e] cursor-not-allowed opacity-60'
                      }`}
                    >
                      <span>Avançar para Passo 3</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Location, Name & Instant Send */}
              {currentStep === 3 && (
                <form onSubmit={handleQuickQuote} className="space-y-4 animate-fadeIn">
                  
                  {/* Summary Pills of previous steps */}
                  <div className="p-3.5 rounded-2xl bg-[#fcfaf7] border border-[#e8e2d8] flex flex-wrap items-center gap-2 text-xs">
                    <span className="text-[#686c6e] font-medium">Itens selecionados:</span>
                    {productInterest ? (
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#652e1f] text-white rounded-xl font-bold text-xs hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
                        title="Clique para alterar o produto"
                      >
                        <Box className="w-3.5 h-3.5 text-[#e6b382]" />
                        <span>{productInterest}</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="px-2.5 py-1 border border-dashed border-[#b46f34] text-[#b46f34] rounded-xl text-xs font-bold"
                      >
                        + Escolher material
                      </button>
                    )}

                    {projectType ? (
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#b46f34] text-white rounded-xl font-bold text-xs hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
                        title="Clique para alterar o tipo de obra"
                      >
                        <Home className="w-3.5 h-3.5 text-white" />
                        <span>{projectType}</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="px-2.5 py-1 border border-dashed border-[#b46f34] text-[#b46f34] rounded-xl text-xs font-bold"
                      >
                        + Escolher tipo de obra
                      </button>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#46484a] mb-1 font-['Barlow_Condensed'] uppercase tracking-wider">
                      Cidade / Bairro da Obra (Para cálculo do frete)
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Ex: Uberlândia - Granja Marileusa / Araguari"
                      className="w-full bg-[#fcfaf7] border border-[#e8e2d8] rounded-xl px-4 py-3 text-sm text-[#46484a] focus:outline-none focus:border-[#652e1f] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#46484a] mb-1 font-['Barlow_Condensed'] uppercase tracking-wider">
                      Seu Nome ou Construtora (Opcional)
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Carlos Construtor"
                      className="w-full bg-[#fcfaf7] border border-[#e8e2d8] rounded-xl px-4 py-3 text-sm text-[#46484a] focus:outline-none focus:border-[#652e1f] transition-colors"
                    />
                  </div>

                  {/* Send Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-3 shadow-xl shadow-emerald-600/20 hover:shadow-2xl transition-all cursor-pointer uppercase tracking-wider font-['Barlow_Condensed'] group hover:-translate-y-0.5"
                    >
                      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span>Receber Cotação no WhatsApp</span>
                    </button>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#686c6e] hover:text-[#652e1f] transition-colors uppercase tracking-wider font-['Barlow_Condensed'] cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Voltar ao passo anterior</span>
                    </button>
                    <span className="text-[11px] text-[#686c6e]">Resposta imediata</span>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* Address & Contacts Column: SECOND on mobile (order-2), LEFT on desktop (lg:order-1 lg:col-span-5) */}
          <div className="order-2 lg:order-1 lg:col-span-5 space-y-6 w-full">
            
            <div className="p-8 rounded-3xl bg-white border border-[#e8e2d8] shadow-lg space-y-6">
              <div className="border-b border-[#e8e2d8] pb-4">
                <h3 className="text-2xl font-bold text-[#652e1f] font-['Barlow_Condensed'] uppercase tracking-wide">
                  Fábrica Física em Uberlândia
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#f3efe9] border border-[#e8e2d8] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#b46f34]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#b46f34] uppercase tracking-wider font-['Barlow_Condensed']">Endereço da Fábrica</p>
                  <p className="text-sm font-bold text-[#46484a] mt-0.5">{companyInfo.address.street}</p>
                  <p className="text-xs text-[#686c6e]">{companyInfo.address.neighborhood} • {companyInfo.address.city} - {companyInfo.address.state}</p>
                  <a
                    href="https://maps.google.com/?q=R.+Jesiel+Gon%C3%A7alves+Miranda,+101+-+Centro+Empresarial+Leste+I,+Uberl%C3%A2ndia+-+MG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#652e1f] hover:text-[#b46f34] mt-2 font-['Barlow_Condensed'] uppercase tracking-wider"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#b46f34]" />
                    <span>Traçar Rota no Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#f3efe9] border border-[#e8e2d8] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-[#b46f34]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#b46f34] uppercase tracking-wider font-['Barlow_Condensed']">Central Comercial de Vendas</p>
                  <a 
                    href={`https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de falar com o comercial da ESM.')}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-extrabold text-[#652e1f] hover:text-[#b46f34] transition-colors block mt-0.5 font-['Barlow_Condensed'] uppercase tracking-wider"
                  >
                    {companyInfo.phone}
                  </a>
                  <p className="text-xs text-emerald-700 flex items-center gap-1 mt-1 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Consultores de plantão no WhatsApp
                  </p>
                </div>
              </div>

              {/* Direct Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#f3efe9] border border-[#e8e2d8] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-[#b46f34]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#b46f34] uppercase tracking-wider font-['Barlow_Condensed']">E-mail Corporativo & Cotações</p>
                  <a 
                    href={`mailto:${companyInfo.email}`}
                    className="text-sm font-bold text-[#652e1f] hover:text-[#b46f34] transition-colors block mt-0.5"
                  >
                    {companyInfo.email}
                  </a>
                  <p className="text-xs text-[#686c6e] mt-0.5">Envio de projetos e plantas em PDF</p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#f3efe9] border border-[#e8e2d8] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#b46f34]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#b46f34] uppercase tracking-wider font-['Barlow_Condensed']">Expedição & Atendimento</p>
                  <p className="text-xs text-[#46484a] mt-0.5 leading-relaxed font-medium">{companyInfo.operatingHours}</p>
                </div>
              </div>

            </div>

            {/* Trust badge box */}
            <div className="p-6 rounded-3xl bg-[#652e1f] text-white space-y-3 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold text-[#e6b382] uppercase tracking-widest font-['Barlow_Condensed']">
                <Building2 className="w-4 h-4 text-[#b46f34]" />
                <span>Garantia de Fornecimento ESM</span>
              </div>
              <p className="text-xs text-amber-100/90 leading-relaxed font-['Montserrat']">
                Entregamos em toda Uberlândia, Araguari, Monte Alegre e Triângulo Mineiro com frota equipada de caminhão Munck para descarregamento rápido.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
