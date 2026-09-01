import React from 'react';
import { Ruler, CheckCircle2, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const ProductCard = ({ product }) => {
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
        <div className="p-6 pb-3">
          
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

          {/* Product Title */}
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#652e1f] font-['Barlow_Condensed'] uppercase tracking-tight group-hover:text-[#b46f34] transition-colors leading-[0.95] mb-3">
            {product.name}
          </h3>

          {/* Quick Highlights */}
          {product.highlights && (
            <div className="space-y-1.5 mb-4">
              {product.highlights.slice(0, 2).map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#46484a]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#b46f34] shrink-0" />
                  <span className="line-clamp-1">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Button - 100% WhatsApp Direct */}
      <div className="px-6 pb-6 pt-2">
        <a
          href={`https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent(product.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full py-3.5 px-4 text-xs sm:text-sm font-bold text-white bg-[#652e1f] hover:bg-[#4e2216] rounded-xl shadow-md hover:shadow-lg transition-all text-center uppercase tracking-wider font-['Barlow_Condensed'] cursor-pointer group/btn"
        >
          <div className="flex items-center gap-2">
            {/* WhatsApp Logo SVG */}
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Cotar este Item</span>
          </div>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>

    </div>
  );
};
