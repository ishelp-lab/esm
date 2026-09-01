import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { companyInfo } from '../data/companyInfo';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#652e1f] text-amber-100/80 text-xs sm:text-sm border-t border-[#4e2216]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        
        {/* Main Simple Grid */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#4e2216]">
          
          {/* Brand Logo & Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <img 
              src="/assets/hero/ESM-white.png" 
              alt="ESM Blocos & Pisos" 
              className="h-12 sm:h-14 w-auto object-contain"
            />
            <div className="hidden sm:block w-px h-8 bg-amber-200/20" />
            <p className="text-xs text-amber-100/70 max-w-xs font-['Montserrat']">
              Fábrica de blocos de concreto e pisos intertravados em Uberlândia - MG.
            </p>
          </div>

          {/* Quick Links & Social */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-bold uppercase tracking-wider font-['Barlow_Condensed']">
            <a href="#inicio" className="hover:text-white transition-colors">Início</a>
            <a href="#catalogo" className="hover:text-white transition-colors">Produtos</a>
            <a href="#contato" className="hover:text-white transition-colors">Cotação</a>
            <a 
              href={`https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de falar com o atendimento da ESM Blocos e Pisos.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e6b382] hover:text-white transition-colors"
            >
              WhatsApp Comercial
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pl-2">
              <a
                href={companyInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#b46f34] text-white flex items-center justify-center transition-colors"
                title="Instagram ESM"
                aria-label="Instagram da ESM"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#b46f34] text-white flex items-center justify-center transition-colors"
                title="E-mail Comercial"
                aria-label="E-mail da ESM"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-200/60 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} ESM Blocos e Pisos. Todos os direitos reservados.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-amber-200 hover:text-white transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
