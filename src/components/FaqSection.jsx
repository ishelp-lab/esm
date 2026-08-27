import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { faqData } from '../data/testimonialsData';
import { companyInfo } from '../data/companyInfo';

export const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#f3efe9] border-b border-[#e8e2d8] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#e8e2d8] text-[#b46f34] text-xs font-bold uppercase tracking-wider mb-3 font-['Barlow_Condensed']">
            <HelpCircle className="w-3.5 h-3.5" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#652e1f] tracking-tight font-['Barlow_Condensed'] uppercase leading-[0.95]">
            PERGUNTAS <span className="text-[#b46f34]">FREQUENTES</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#46484a] font-['Montserrat']">
            Respostas rápidas sobre prazos de entrega, descarga mecanizada, laudos técnicos e formas de pagamento.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqData.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                openIdx === idx
                  ? 'bg-white border-[#652e1f] shadow-md'
                  : 'bg-white/80 border-[#e8e2d8] hover:border-[#b46f34]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-[#652e1f] hover:text-[#b46f34] transition-colors cursor-pointer"
                aria-expanded={openIdx === idx}
              >
                <span className="text-base sm:text-lg font-bold font-['Barlow_Condensed'] uppercase tracking-wide">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#b46f34] shrink-0 transition-transform duration-300 ${
                    openIdx === idx ? 'rotate-180 text-[#652e1f]' : ''
                  }`}
                />
              </button>

              {openIdx === idx && (
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#46484a] leading-relaxed border-t border-[#f3efe9] pt-4 animate-fadeIn font-['Montserrat']">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center p-6 sm:p-8 rounded-3xl bg-white border border-[#e8e2d8] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-left">
            <p className="text-base font-bold text-[#652e1f] font-['Barlow_Condensed'] uppercase tracking-wide">Ficou com alguma dúvida específica da sua obra?</p>
            <p className="text-xs text-[#46484a] font-['Montserrat']">Nossa equipe técnica atende prontamente pelo WhatsApp direto da fábrica.</p>
          </div>
          
          <a
            href={`https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent('Olá! Tenho uma dúvida sobre os blocos e pisos da ESM.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#652e1f] hover:bg-[#4e2216] text-white text-xs font-bold transition-all shrink-0 shadow-md uppercase tracking-wider font-['Barlow_Condensed'] cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Falar com Especialista</span>
          </a>
        </div>

      </div>
    </section>
  );
};
