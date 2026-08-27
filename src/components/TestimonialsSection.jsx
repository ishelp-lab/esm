import React from 'react';
import { Star } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 bg-[#fcfaf7] relative border-b border-[#e8e2d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f3efe9] border border-[#e8e2d8] text-[#b46f34] text-xs font-bold uppercase tracking-wider mb-3 font-['Barlow_Condensed']">
            Prova Social & Confiança
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#652e1f] tracking-tight font-['Barlow_Condensed'] uppercase leading-[0.95]">
            QUEM CONSTRÓI COM A <span className="text-[#b46f34]">ESM RECOMENDA</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#46484a] font-['Montserrat']">
            Veja a experiência de engenheiros, mestres de obras, construtoras e clientes em Uberlândia e região.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-[#e8e2d8] hover:border-[#b46f34] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Rating & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#b46f34] gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#b46f34]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#f3efe9] text-[#652e1f] border border-[#e8e2d8] font-['Barlow_Condensed']">
                    {item.tag}
                  </span>
                </div>

                {/* Quote content */}
                <p className="text-xs sm:text-sm text-[#46484a] leading-relaxed italic mb-6 font-['Montserrat']">
                  "{item.content}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-[#f3efe9]">
                <p className="text-base font-bold text-[#652e1f] font-['Barlow_Condensed'] uppercase tracking-wide">
                  {item.name}
                </p>
                <p className="text-xs text-[#b46f34] font-bold">
                  {item.role}
                </p>
                <p className="text-[11px] text-[#686c6e]">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
