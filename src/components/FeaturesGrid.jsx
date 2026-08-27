import React from 'react';
import { Flame, Layers, Sparkles, Truck, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const FeaturesGrid = () => {
  const pilarIcons = [
    <Flame className="w-6 h-6 text-[#b46f34]" />,
    <Layers className="w-6 h-6 text-[#b46f34]" />,
    <Sparkles className="w-6 h-6 text-[#b46f34]" />,
    <Truck className="w-6 h-6 text-[#b46f34]" />
  ];

  return (
    <section className="py-20 bg-[#652e1f] text-white relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#b46f34]/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Manifesto - Page 3 of Catalog */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16 pb-16 border-b border-[#4e2216]/80">
          
          <div className="lg:col-span-5">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs font-bold px-3 py-1 bg-[#b46f34] text-white rounded-full uppercase tracking-widest font-['Barlow_Condensed']">
                RESISTÊNCIA
              </span>
              <span className="text-xs font-bold px-3 py-1 bg-[#b46f34] text-white rounded-full uppercase tracking-widest font-['Barlow_Condensed']">
                QUALIDADE
              </span>
              <span className="text-xs font-bold px-3 py-1 bg-[#b46f34] text-white rounded-full uppercase tracking-widest font-['Barlow_Condensed']">
                ACABAMENTO
              </span>
              <span className="text-xs font-bold px-3 py-1 bg-[#b46f34] text-white rounded-full uppercase tracking-widest font-['Barlow_Condensed']">
                ENTREGA
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
              A <strong>ESM Blocos e Pisos</strong> é uma fábrica especializada na produção de blocos de concreto de alta qualidade, desenvolvidos para oferecer resistência, durabilidade e um acabamento diferenciado. Nosso compromisso é entregar produtos que facilitem a construção, trazendo economia e segurança para cada obra.
            </p>
            <p className="text-xs sm:text-sm text-amber-100/80">
              Nos destacamos pela <strong>resistência de 4,5 MPa</strong>, acabamento ideal para muros e alvenarias e produção padronizada com controle de qualidade. Oferecemos atendimento personalizado, entrega rápida com descarga mecanizada e somos parceiros de confiança em obras de todos os tamanhos.
            </p>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyInfo.pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="group p-6 rounded-2xl bg-[#4e2216]/60 border border-[#83422e]/60 hover:border-[#b46f34] transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#b46f34] group-hover:text-white transition-colors">
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

      </div>
    </section>
  );
};
