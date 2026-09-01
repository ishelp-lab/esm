import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Navigation, CheckCircle2, Building2, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const ContactSection = () => {
  const [productInterest, setProductInterest] = useState('Blocos Estruturais (4,5 MPa)');
  const [projectType, setProjectType] = useState('Residencial / Muro');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const productOptions = [
    'Blocos Estruturais (4,5 MPa)',
    'Canaletas & Meio Bloco',
    'Pisos Intertravados (Pavers)',
    'Pisos Drenantes Ecológicos',
    'Linha Completa / Vários Itens'
  ];

  const projectOptions = [
    'Residencial / Muro',
    'Casa de Alto Padrão',
    'Galpão / Comercial',
    'Condomínio / Loteamento',
    'Construtora / Engenharia'
  ];

  const handleQuickQuote = (e) => {
    e.preventDefault();
    let msg = `Olá, ESM Blocos e Pisos! Gostaria de uma cotação direta da fábrica:\n\n` +
      `📦 *Produto de Interesse:* ${productInterest}\n` +
      `🏗️ *Tipo de Obra:* ${projectType}\n`;

    if (name.trim()) {
      msg += `👤 *Nome / Empresa:* ${name.trim()}\n`;
    }
    if (location.trim()) {
      msg += `📍 *Localização da Obra:* ${location.trim()}\n`;
    } else {
      msg += `📍 *Local da Obra:* Uberlândia e região\n`;
    }
    msg += `\nPoderiam me enviar valores com opção de entrega e descarga mecanizada?`;

    window.open(`https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-[#fcfaf7] relative border-b border-[#e8e2d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f3efe9] border border-[#e8e2d8] text-[#b46f34] text-xs font-bold uppercase tracking-wider mb-3 font-['Barlow_Condensed']">
            <Sparkles className="w-3.5 h-3.5" />
            Atendimento Comercial Online
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#652e1f] tracking-tight font-['Barlow_Condensed'] uppercase leading-[0.95]">
            SOLICITAR <span className="text-[#b46f34]">COTAÇÃO RÁPIDA</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#46484a] font-['Montserrat']">
            Monte seu pedido em poucos segundos e receba a proposta detalhada direto no WhatsApp comercial da fábrica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Physical Factory Credibility */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-white border border-[#e8e2d8] shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-[#e8e2d8] pb-4">
                <h3 className="text-2xl font-bold text-[#652e1f] font-['Barlow_Condensed'] uppercase tracking-wide">
                  Fábrica Física em Uberlândia
                </h3>
                <span className="text-[11px] font-bold px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full uppercase tracking-wider">
                  Aberta para Visitas
                </span>
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

          {/* Right Column: 1-Click WhatsApp Quick Quote Builder */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#e8e2d8] shadow-xl">
              
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#652e1f] font-['Barlow_Condensed'] uppercase tracking-tight">
                  Simulador de Cotação de Fábrica
                </h3>
                <p className="text-xs sm:text-sm text-[#46484a] mt-1 font-['Montserrat']">
                  Selecione as opções abaixo para receber valores e condições personalizadas:
                </p>
              </div>

              <form onSubmit={handleQuickQuote} className="space-y-6">
                
                {/* Step 1: Select Product */}
                <div>
                  <label className="block text-xs font-bold text-[#652e1f] mb-2.5 font-['Barlow_Condensed'] uppercase tracking-wider">
                    1. Qual produto você procura?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {productOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setProductInterest(opt)}
                        className={`flex items-center justify-between p-3 rounded-xl text-xs font-bold transition-all border text-left cursor-pointer ${
                          productInterest === opt
                            ? 'bg-[#652e1f] text-white border-[#652e1f] shadow-sm'
                            : 'bg-[#fcfaf7] text-[#46484a] hover:bg-[#f3efe9] border-[#e8e2d8]'
                        }`}
                      >
                        <span>{opt}</span>
                        {productInterest === opt && <CheckCircle2 className="w-4 h-4 text-[#e6b382] shrink-0" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Select Type of Work */}
                <div>
                  <label className="block text-xs font-bold text-[#652e1f] mb-2.5 font-['Barlow_Condensed'] uppercase tracking-wider">
                    2. Qual o tipo de aplicação / obra?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {projectOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setProjectType(opt)}
                        className={`flex items-center justify-between p-3 rounded-xl text-xs font-bold transition-all border text-left cursor-pointer ${
                          projectType === opt
                            ? 'bg-[#b46f34] text-white border-[#b46f34] shadow-sm'
                            : 'bg-[#fcfaf7] text-[#46484a] hover:bg-[#f3efe9] border-[#e8e2d8]'
                        }`}
                      >
                        <span className="line-clamp-1">{opt}</span>
                        {projectType === opt && <CheckCircle2 className="w-4 h-4 text-white shrink-0" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Optional Name & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#46484a] mb-1 font-['Barlow_Condensed'] uppercase tracking-wider">
                      Seu Nome ou Construtora (Opcional)
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Marcos / Construtora"
                      className="w-full bg-[#fcfaf7] border border-[#e8e2d8] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#46484a] focus:outline-none focus:border-[#652e1f] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#46484a] mb-1 font-['Barlow_Condensed'] uppercase tracking-wider">
                      Cidade / Bairro da Obra (Opcional)
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Ex: Uberlândia - Santa Mônica"
                      className="w-full bg-[#fcfaf7] border border-[#e8e2d8] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#46484a] focus:outline-none focus:border-[#652e1f] transition-colors"
                    />
                  </div>
                </div>

                {/* Submit to WhatsApp */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-3 shadow-xl shadow-emerald-600/20 hover:shadow-2xl transition-all cursor-pointer uppercase tracking-wider font-['Barlow_Condensed'] group"
                >
                  {/* WhatsApp Logo SVG */}
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Receber Proposta Completa no WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-[#686c6e]">
                  ⚡ Resposta ágil com valores de fábrica, cálculo de frete e prazos de entrega.
                </p>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
