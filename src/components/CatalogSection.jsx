import React from 'react';
import { productsData } from '../data/productsData';
import { ProductCard } from './ProductCard';
import { Sparkles, PhoneCall } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const CatalogSection = () => {
  return (
    <section id="catalogo" className="py-20 bg-[#fcfaf7] relative border-b border-[#e8e2d8]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header  */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f3efe9] border border-[#e8e2d8] text-[#b46f34] text-xs font-bold uppercase tracking-wider mb-3">
            <Spark les className="w-3.5 h-3.5" />
            Linha Completa de Fabricação
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#652e1f] tracking-tight font-['Barlow_Condensed'] uppercase leading-[0.95]">
            PRODUTOS <span className="text-[#b46f34]">DIRETO DA FÁBRICA</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#46484a] max-w-2xl font-['Montserrat']">
            Blocos estruturais de 4,5 MPa, canaletas, meio bloco e pisos intertravados ecológicos e drenantes produzidos em Uberlândia - MG. Escolha seu produto e solicite orçamento direto no WhatsApp.
          </p>
        </div>

        {/* Product Cards Grid - All Products Direct */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.map((product, idx) => (
            <div
              key={product.id}
              className="reveal-grid-item"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Bottom Banner inside Catalog for Contractors/Engineers */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-[#652e1f] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#b46f34]/20 blur-[90px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <span className="text-xs font-bold text-[#e6b382] uppercase tracking-widest font-['Barlow_Condensed']">
              Atendimento Especial para Construtoras e Engenharia
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Barlow_Condensed'] uppercase tracking-wide mt-1">
              Condições exclusivas de faturamento e fornecimento programado
            </h3>
            <p className="text-xs sm:text-sm text-amber-100/90 mt-1 font-['Montserrat']">
              Atendemos construtoras, empreiteiras, engenheiros e órgãos públicos com laudos laboratoriais e entrega garantida.
            </p>
          </div>

          <a
            href={`https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent('Olá! Sou de construtora/engenharia e gostaria de negociar fornecimento contínuo de blocos e pisos com a ESM.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex items-center gap-2 px-7 py-4 text-xs sm:text-sm font-bold text-[#652e1f] bg-white hover:bg-[#f3efe9] rounded-2xl shadow-lg shrink-0 transition-all uppercase tracking-wider font-['Barlow_Condensed']"
          >
            <PhoneCall className="w-4 h-4 text-[#b46f34]" />
            <span>Falar com Gerente Comercial</span>
          </a>
        </div>

      </div>

    </section>
  );
};
