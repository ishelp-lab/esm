import React from 'react';
import { Ruler, MessageSquare, Plus, Check } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const ProductCard = ({ product, onOpenDetails }) => {
  return (
    <div className="group relative rounded-3xl bg-white border border-[#e8e2d8] hover:border-[#b46f34] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl">
      
      {/* Top Image & Badges */}
      <div>
        <div className="relative h-60 w-full overflow-hidden bg-[#f3efe9]">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
          />
          
          {/* Badge */}
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="px-2.5 py-1 text-[11px] font-bold bg-[#b46f34] text-white rounded-lg shadow-md uppercase tracking-wider font-['Barlow_Condensed']">
              {product.badge}
            </span>
          </div>

          {/* Resistance Tag */}
          <div className="absolute bottom-3 right-3 px-2.5 py-1 text-[11px] font-bold bg-white/95 text-[#652e1f] rounded-lg border border-[#e8e2d8] shadow-sm uppercase font-['Barlow_Condensed']">
            {product.resistance}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          
          {/* Dimensions & Yield */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#b46f34] flex items-center gap-1 font-['Montserrat']">
              <Ruler className="w-3.5 h-3.5" />
              {product.dimensions}
            </span>
            <span className="text-xs text-[#46484a] font-semibold">
              {product.yieldPerM2}
            </span>
          </div>

          {/* Product Title in DharmaGothic / Barlow Condensed uppercase */}
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#652e1f] font-['Barlow_Condensed'] uppercase tracking-tight group-hover:text-[#b46f34] transition-colors leading-[0.95] mb-3">
            {product.name}
          </h3>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 pb-6 pt-0 grid grid-cols-2 gap-2.5">
        <button
          onClick={() => onOpenDetails(product)}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-[#652e1f] bg-[#f3efe9] hover:bg-[#e8e2d8] rounded-xl border border-[#e8e2d8] transition-colors uppercase tracking-wider font-['Barlow_Condensed'] cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5 text-[#b46f34]" />
          <span>Ver Detalhes</span>
        </button>

        <a
          href={`https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent(product.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-white bg-[#652e1f] hover:bg-[#4e2216] rounded-xl shadow-md transition-all text-center uppercase tracking-wider font-['Barlow_Condensed'] cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-white" />
          <span>Cotar Agora</span>
        </a>
      </div>

    </div>
  );
};
