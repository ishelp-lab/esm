import React from 'react';
import { X, CheckCircle, Ruler, MessageSquare } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-white border border-[#e8e2d8] rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#46484a] hover:text-[#652e1f] bg-[#f3efe9] hover:bg-[#e8e2d8] rounded-full transition-colors cursor-pointer"
          aria-label="Fechar detalhes"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Product Image */}
          <div className="relative h-72 md:h-full bg-[#f3efe9] flex items-center justify-center overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1 text-xs font-bold bg-[#b46f34] text-white rounded-lg shadow-md uppercase tracking-wider font-['Barlow_Condensed']">
                {product.badge}
              </span>
            </div>
          </div>

          {/* Right Column: Specs & Copy */}
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
            <div>
              <p className="text-xs font-bold text-[#b46f34] uppercase tracking-widest mb-1 font-['Montserrat']">
                Catálogo Oficial ESM Blocos e Pisos
              </p>
              
              {/* Big Display Title */}
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#652e1f] font-['Barlow_Condensed'] uppercase tracking-tight leading-[0.95] mb-2">
                {product.name}
              </h3>
              
              <p className="text-sm font-bold text-[#46484a] mb-4">
                {product.dimensions} • <span className="text-[#b46f34]">{product.resistance}</span>
              </p>
              
              <p className="text-xs sm:text-sm text-[#46484a] leading-relaxed mb-6 font-['Montserrat']">
                {product.description}
              </p>

              {/* Ideal para list */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-[#b46f34] uppercase tracking-wider mb-2 font-['Barlow_Condensed']">
                  Ideal para:
                </h4>
                <ul className="space-y-1.5">
                  {product.idealFor.map((app, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#46484a] font-medium">
                      <span className="text-[#b46f34] font-bold">•</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-[#652e1f] uppercase tracking-wider mb-2 font-['Barlow_Condensed']">
                  Diferenciais de Fabricação
                </h4>
                <ul className="space-y-1.5">
                  {product.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#46484a]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#b46f34] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specs Table */}
              <div className="mb-6 bg-[#fcfaf7] rounded-2xl p-4 border border-[#e8e2d8] space-y-2">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between text-xs py-1 border-b border-[#e8e2d8]/60 last:border-0">
                    <span className="text-[#686c6e]">{spec.label}:</span>
                    <span className="font-bold text-[#46484a] text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#e8e2d8] flex flex-col gap-2">
              <a
                href={`https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent(product.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 px-4 text-xs sm:text-sm font-bold text-white bg-[#652e1f] hover:bg-[#4e2216] rounded-xl shadow-lg transition-all uppercase tracking-wider font-['Barlow_Condensed'] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Solicitar Cotação deste Produto</span>
              </a>

              <p className="text-[11px] text-center text-[#686c6e]">
                Atendimento direto da fábrica • Entrega com Munck em Uberlândia e Região
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
