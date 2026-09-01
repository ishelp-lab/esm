import React from 'react';
import { Truck, CheckCircle2, Award, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const Hero = () => {
  // Reusable Hero Visual Card
  const HeroVisualCard = () => (
    <div className="relative mx-auto max-w-md lg:max-w-none w-full">
      {/* Main Card with Real Product Visual */}
      <div className="relative rounded-3xl p-3 bg-white border border-[#e8e2d8] shadow-2xl overflow-hidden group">
        <div className="relative h-[260px] sm:h-[340px] lg:h-[420px] rounded-2xl overflow-hidden bg-[#46484a]">
          <img 
            src="/assets/hero/hero-bg.jpg" 
            alt="Blocos de Concreto e Pisos Intertravados ESM" 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#652e1f]/90 via-transparent to-transparent" />
          
          {/* Bottom badge overlay */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl bg-white/95 border border-[#e8e2d8] shadow-lg backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] sm:text-[11px] text-[#b46f34] font-bold tracking-widest uppercase font-['Montserrat']">Catálogo Oficial 2026</p>
                <p className="text-sm sm:text-lg font-bold text-[#652e1f] font-['Barlow_Condensed'] uppercase tracking-wide">Blocos Estruturais & Pisos Pavers</p>
              </div>
              <span className="px-2.5 py-1 sm:px-3 sm:py-1 text-xs font-bold bg-[#652e1f] text-white rounded-lg uppercase tracking-wider font-['Barlow_Condensed']">
                4,5 MPa
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge: Descarga Mecanizada */}
      <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-6 p-2.5 sm:p-3.5 rounded-2xl bg-white border border-[#e8e2d8] shadow-xl flex items-center gap-2.5 sm:gap-3 animate-bounce-slow">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#b46f34]/15 border border-[#b46f34]/30 flex items-center justify-center shrink-0">
          <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-[#b46f34]" />
        </div>
        <div>
          <p className="text-[11px] sm:text-xs font-bold text-[#652e1f] uppercase tracking-wide leading-tight">Descarga com Munck</p>
          <p className="text-[10px] sm:text-[11px] text-[#46484a] font-medium">Zero quebra no canteiro</p>
        </div>
      </div>

      {/* Floating Badge: Qualidade 4.5 MPa */}
      <div className="absolute -bottom-4 -right-3 sm:-bottom-5 sm:-right-6 p-2.5 sm:p-3.5 rounded-2xl bg-white border border-[#e8e2d8] shadow-xl flex items-center gap-2.5 sm:gap-3">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#652e1f]/10 border border-[#652e1f]/20 flex items-center justify-center shrink-0">
          <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#652e1f]" />
        </div>
        <div>
          <p className="text-[11px] sm:text-xs font-bold text-[#652e1f] uppercase tracking-wide leading-tight">4,5 MPa Comprovado</p>
          <p className="text-[10px] sm:text-[11px] text-[#46484a] font-medium">Laudos laboratoriais</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="inicio" className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden bg-[#fcfaf7] paper-grid border-b border-[#e8e2d8]">
      {/* Ambient background glows in Terracotta & Ochre */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#b46f34]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[300px] bg-[#652e1f]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Copywriting & High Conversion CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3efe9] border border-[#e8e2d8] text-[#652e1f] text-xs sm:text-sm font-bold mb-4 lg:mb-5 shadow-sm reveal-block">
              <span className="w-2.5 h-2.5 rounded-full bg-[#b46f34] animate-pulse" />
              <span className="uppercase tracking-wider">Fábrica em Uberlândia • Resistência de 4,5 MPa</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-[#652e1f] leading-[0.95] mb-5 font-['Barlow_Condensed'] uppercase reveal-block delay-100">
              MÁXIMA RESISTÊNCIA E <span className="text-[#b46f34]">ACABAMENTO PERFEITO</span> PARA SUA OBRA.
            </h1>

            {/* MOBILE ONLY: Visual Card shown right at top below H1 */}
            <div className="block lg:hidden w-full my-6 reveal-block delay-150">
              <HeroVisualCard />
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-[#46484a] mb-6 max-w-2xl leading-relaxed font-['Montserrat'] reveal-block delay-200">
              Fabricação padronizada de <strong className="text-[#652e1f] font-bold">Blocos Estruturais</strong>, <strong className="text-[#652e1f] font-bold">Meio Bloco</strong>, <strong className="text-[#652e1f] font-bold">Canaletas</strong> e <strong className="text-[#652e1f] font-bold">Pisos Intertravados Drenantes</strong>. Entregamos com <span className="text-[#b46f34] font-bold">descarga mecanizada</span> em Uberlândia e região.
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full reveal-block delay-300">
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

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8 reveal-block delay-300">
              <a
                href={`https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de receber um orçamento de blocos e pisos direto da fábrica ESM.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-2xl shadow-xl shadow-emerald-600/20 hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-wider group"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Pedir Cotação no WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#catalogo"
                className="flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-bold text-[#652e1f] bg-white hover:bg-[#f3efe9] border border-[#e8e2d8] rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 uppercase tracking-wider font-['Barlow_Condensed']"
              >
                <span>Ver Catálogo de Produtos</span>
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

          {/* DESKTOP ONLY Right Column: Visual Feature Showcase aligned with H1 top */}
          <div className="hidden lg:block lg:col-span-5 relative reveal-block delay-200 lg:pt-1">
            <HeroVisualCard />
          </div>

        </div>
      </div>
    </section>
  );
};
