import React from 'react';
import { Flame, Layers, Sparkles, Truck, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const FeaturesGrid = () => {
  const pilarIcons = [
    <Flame className="w-6 h-6 text-[#b46f34] group-hover:text-[#e6b382] transition-colors" />,
    <Layers className="w-6 h-6 text-[#b46f34] group-hover:text-[#e6b382] transition-colors" />,
    <Sparkles className="w-6 h-6 text-[#b46f34] group-hover:text-[#e6b382] transition-colors" />,
    <Truck className="w-6 h-6 text-[#b46f34] group-hover:text-[#e6b382] transition-colors" />
  ];

  return (
    <section className="py-20 bg-[#652e1f] text-white relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#b46f34]/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Manifesto - Authority & Trust */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16 pb-16 border-b border-[#4e2216]/80">
          
          <div className="lg:col-span-5">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs font-bold px-3 py-1 bg-[#b46f34] text-white rounded-full uppercase tracking-widest font-['Barlow_Condensed']">
                4,5 MPa
              </span>
              <span className="text-xs font-bold px-3 py-1 bg-[#b46f34] text-white rounded-full uppercase tracking-widest font-['Barlow_Condensed']">
                DESCARGA MUNCK
              </span>
              <span className="text-xs font-bold px-3 py-1 bg-[#b46f34] text-white rounded-full uppercase tracking-widest font-['Barlow_Condensed']">
                ECONOMIA REAL
              </span>
              <span className="text-xs font-bold px-3 py-1 bg-[#b46f34] text-white rounded-full uppercase tracking-widest font-['Barlow_Condensed']">
                FÁBRICA PRÓPRIA
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.0] font-['Barlow_Condensed'] uppercase tracking-tight">
              NA ESM, NÃO VENDEMOS APENAS BLOCOS.
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#e6b382] mt-2 font-['Barlow_Condensed'] uppercase">
              VENDEMOS TRANQUILIDADE, EFICIÊNCIA E CONFIANÇA PARA A SUA OBRA.
            </h3>
          </div>

          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-amber-50/90 leading-relaxed font-['Montserrat']">
            <p>
              A <strong>ESM Blocos e Pisos</strong> é uma indústria especializada em blocos de concreto e pisos intertravados de alta performance em Uberlândia. Nosso foco é eliminar dores de cabeça no canteiro: entregamos materiais com resistência comprovada em laudo, acabamento padronizado e descarga mecanizada rápida.
            </p>
            <p className="text-xs sm:text-sm text-amber-100/80">
              Seja para um muro residencial, loteamento ou grandes edifícios, negociar direto com a fábrica garante preço justo, entrega programada e pontualidade total.
            </p>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {companyInfo.pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="group p-6 rounded-2xl bg-[#4e2216]/60 border border-[#83422e]/60 hover:border-[#b46f34] transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#b46f34] text-[#b46f34] group-hover:text-[#e6b382] transition-all">
                    {pilarIcons[idx]}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#652e1f] text-[#e6b382] border border-[#83422e] uppercase font-['Barlow_Condensed'] tracking-wider">
                    {pillar.badge}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2 font-['Barlow_Condensed'] uppercase tracking-wide group-hover:text-[#e6b382] transition-colors">
                  {pillar.title}
                </h4>

                <p className="text-xs text-amber-100/80 leading-relaxed font-['Montserrat']">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#83422e]/60 flex items-center gap-2 text-xs font-bold text-[#e6b382] uppercase tracking-wider font-['Barlow_Condensed']">
                <CheckCircle2 className="w-4 h-4 text-[#b46f34]" />
                <span>Padrão ESM de Fábrica</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick WhatsApp Strip under Pillars */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-white font-['Barlow_Condensed'] uppercase tracking-wide">
              Quer tirar dúvidas técnicas ou fechar pedido direto da fábrica?
            </h4>
            <p className="text-xs sm:text-sm text-amber-100/80 mt-0.5">
              Nossa equipe comercial responde rapidamente com orçamentos e prazos de entrega.
            </p>
          </div>

          <a
            href={`https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de conversar com um especialista da ESM sobre valores e prazos de entrega para minha obra.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all uppercase tracking-wider font-['Barlow_Condensed'] shrink-0 group"
          >
            {/* WhatsApp Logo SVG */}
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Conversar no WhatsApp</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
