import React, { useState } from 'react';
import { productCategories, productsData } from '../data/productsData';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { Boxes, Building2, Grid3X3, Droplets, Download, PhoneCall, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const CatalogSection = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-4 h-4" />;
      case 'Grid3X3': return <Grid3X3 className="w-4 h-4" />;
      case 'Droplets': return <Droplets className="w-4 h-4" />;
      default: return <Boxes className="w-4 h-4" />;
    }
  };

  const filteredProducts = activeCategory === 'todos' 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  return (
    <section id="catalogo" className="py-20 bg-[#fcfaf7] relative border-b border-[#e8e2d8]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f3efe9] border border-[#e8e2d8] text-[#b46f34] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Linha Completa de Fabricação
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#652e1f] tracking-tight font-['Barlow_Condensed'] uppercase leading-[0.95]">
              CATÁLOGO OFICIAL <span className="text-[#b46f34]">ESM BLOCOS & PISOS</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#46484a] max-w-2xl font-['Montserrat']">
              Blocos estruturais de alta resistência, canaletas, blocos com fundo e pisos intertravados ecológicos e drenantes produzidos em Uberlândia - MG.
            </p>
          </div>

          {/* Quick PDF & WhatsApp CTA */}
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de receber o catálogo oficial da ESM em PDF com a tabela de valores.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-[#f3efe9] border border-[#e8e2d8] text-xs font-bold text-[#652e1f] transition-colors uppercase tracking-wider font-['Barlow_Condensed'] shadow-sm"
            >
              <Download className="w-4 h-4 text-[#b46f34]" />
              <span>Baixar Catálogo em PDF</span>
            </a>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 shrink-0 uppercase tracking-wider font-['Barlow_Condensed'] cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#652e1f] text-white shadow-md'
                  : 'bg-white text-[#46484a] hover:text-[#652e1f] hover:bg-[#f3efe9] border border-[#e8e2d8]'
              }`}
            >
              {getCategoryIcon(cat.icon)}
              <span>{cat.name}</span>
              <span className={`text-[11px] px-2 py-0.5 rounded-full ${
                activeCategory === cat.id ? 'bg-[#b46f34] text-white' : 'bg-[#f3efe9] text-[#686c6e]'
              }`}>
                {cat.id === 'todos' ? productsData.length : productsData.filter(p => p.category === cat.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, idx) => (
            <div 
              key={`${activeCategory}-${product.id}`}
              className="reveal-grid-item"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <ProductCard 
                product={product} 
                onOpenDetails={(p) => setSelectedProduct(p)} 
              />
            </div>
          ))}
        </div>

        {/* Bottom Banner inside Catalog */}
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

      {/* Product Detail Modal */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />

    </section>
  );
};
