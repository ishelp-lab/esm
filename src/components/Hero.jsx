import React from 'react';
import { ShieldCheck, Truck, Sparkles, MessageSquare, CheckCircle2, Award, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const Hero = () => {
  return (
    <section id="inicio" className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-[#fcfaf7] paper-grid border-b border-[#e8e2d8]">
      {/* Ambient background glows in Terracotta & Ochre */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#b46f34]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[300px] bg-[#652e1f]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & High Conversion CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3efe9] border border-[#e8e2d8] text-[#652e1f] text-xs sm:text-sm font-bold mb-6 shadow-sm reveal-block">
              <span className="w-2.5 h-2.5 rounded-full bg-[#b46f34] animate-pulse" />
              <span className="uppercase tracking-wider">Fábrica em Uberlândia • Resistência de 4,5 MPa</span>
            </div>

            {/* Main Headline with Catalog Display Typography */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#652e1f] leading-[0.95] mb-6 font-['Barlow_Condensed'] uppercase reveal-block delay-100">
              MÁXIMA RESISTÊNCIA E <span className="text-[#b46f34]">ACABAMENTO PERFEITO</span> PARA SUA OBRA.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#46484a] mb-8 max-w-2xl leading-relaxed font-['Montserrat'] reveal-block delay-200">
              Fabricação padronizada de <strong className="text-[#652e1f] font-bold">Blocos Estruturais</strong>, <strong className="text-[#652e1f] font-bold">Meio Bloco</strong>, <strong className="text-[#652e1f] font-bold">Canaletas</strong> e <strong className="text-[#652e1f] font-bold">Pisos Intertravados Drenantes</strong>. Entregamos com <span className="text-[#b46f34] font-bold">descarga mecanizada</span> em Uberlândia e região.
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 w-full reveal-block delay-300">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#46484a]">
                <CheckCircle2 className="w-4 h-4 text-[#b46f34] shrink-0" />
                <span>Resistência garantida de até 4,5 MPa</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#46484a]">
                <CheckCircle2 className="w-4 h-4 text-[#b46f34] shrink-0" />
                <span>Descarga rápida com caminhão Munck</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#46484a]">
                <CheckCircle2 className="w-4 h-4 text-[#b46f34] shrink-0" />
                <span>Acabamento liso: economia de argamassa</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#46484a]">
                <CheckCircle2 className="w-4 h-4 text-[#b46f34] shrink-0" />
                <span>Direto da fábrica com preço competitivo</span>
              </div>
            </div>
            {/* Primary Action Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10 reveal-block delay-300">
              <a
                href={`https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de receber um orçamento de blocos e pisos da fábrica ESM.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-bold text-white bg-[#652e1f] hover:bg-[#4e2216] rounded-2xl shadow-xl shadow-[#652e1f]/25 hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-wider group"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Solicitar Cotação de Fábrica</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#e8e2d8] w-full reveal-block delay-300">
              {companyInfo.metrics.map((m, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#652e1f] font-['Barlow_Condensed']">{m.value}</span>
                    <span className="text-xs font-bold text-[#b46f34] uppercase">{m.unit}</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#46484a] mt-0.5 leading-tight uppercase tracking-tight">{m.label}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Visual Feature Showcase */}
          <div className="lg:col-span-5 relative reveal-block delay-200">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card with Real Product Visual */}
              <div className="relative rounded-3xl p-3 bg-white border border-[#e8e2d8] shadow-2xl overflow-hidden group">
                <div className="relative h-[340px] sm:h-[400px] rounded-2xl overflow-hidden bg-[#46484a]">
                  <img 
                    src="/assets/hero/hero-bg.jpg" 
                    alt="Blocos de Concreto e Pisos Intertravados ESM" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#652e1f]/90 via-transparent to-transparent" />
                  
                  {/* Bottom badge overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 border border-[#e8e2d8] shadow-lg backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] text-[#b46f34] font-bold tracking-widest uppercase font-['Montserrat']">Catálogo Oficial 2026</p>
                        <p className="text-base sm:text-lg font-bold text-[#652e1f] font-['Barlow_Condensed'] uppercase tracking-wide">Blocos Estruturais & Pisos Pavers</p>
                      </div>
                      <span className="px-3 py-1 text-xs font-bold bg-[#652e1f] text-white rounded-lg uppercase tracking-wider font-['Barlow_Condensed']">
                        4,5 MPa
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge: Descarga Mecanizada */}
              <div className="absolute -top-4 -left-4 sm:-left-6 p-3 sm:p-4 rounded-2xl bg-white border border-[#e8e2d8] shadow-xl flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 rounded-xl bg-[#b46f34]/15 border border-[#b46f34]/30 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5 text-[#b46f34]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#652e1f] uppercase tracking-wide leading-tight">Descarga com Munck</p>
                  <p className="text-[11px] text-[#46484a] font-medium">Zero quebra no canteiro</p>
                </div>
              </div>

              {/* Floating Badge: Qualidade 4.5 MPa */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 p-3 sm:p-4 rounded-2xl bg-white border border-[#e8e2d8] shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#652e1f]/10 border border-[#652e1f]/20 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-[#652e1f]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#652e1f] uppercase tracking-wide leading-tight">4,5 MPa Comprovado</p>
                  <p className="text-[11px] text-[#46484a] font-medium">Laudos laboratoriais</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
