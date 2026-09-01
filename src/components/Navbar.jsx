import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Boxes, ChevronRight } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Produtos', href: '#catalogo' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled
      ? 'bg-white/95 backdrop-blur-md border-b border-[#e8e2d8] shadow-md py-3'
      : 'bg-[#fcfaf7]/90 backdrop-blur-sm border-b border-[#e8e2d8]/60 py-4'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

        {/* Brand Official Logo */}
        <a href="#inicio" className="flex items-center gap-3 group py-0.5" aria-label="ESM Blocos & Pisos">
          <img
            src="/assets/hero/ESM-transparent.png"
            alt="ESM Blocos & Pisos"
            className="h-11 sm:h-13 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 text-xs xl:text-sm font-bold text-[#46484a] hover:text-[#652e1f] hover:bg-[#f3efe9] rounded-lg transition-all duration-200 uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gapv-3">
          <a
            href={`https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento direto da fábrica da ESM Blocos e Pisos.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#652e1f] hover:bg-[#4e2216] rounded-xl shadow-md shadow-[#652e1f]/25 hover:shadow-lg transition-all duration-200 uppercase tracking-wider"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Pedir Orçamento</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-[#46484a] hover:text-[#652e1f] hover:bg-[#f3efe9] rounded-xl lg:hidden transition-colors"
          aria-label="Abrir menu de navegação"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white/95 backdrop-blur-xl border-b border-[#e8e2d8] shadow-2xl px-6 py-6 transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-sm font-bold text-[#46484a] hover:text-[#652e1f] hover:bg-[#f3efe9] rounded-xl transition-all uppercase"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#b46f34]" />
              </a>
            ))}

            <div className="pt-4 border-t border-[#e8e2d8] mt-2 flex flex-col gap-3">
              <a
                href={`https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de um orçamento da ESM Blocos e Pisos.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 text-xs font-bold text-white bg-[#652e1f] rounded-xl shadow-lg shadow-[#652e1f]/30 uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
