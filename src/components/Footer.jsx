import React from 'react';
import { Boxes, ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { companyInfo } from '../data/companyInfo';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#652e1f] text-amber-100/80 text-xs sm:text-sm border-t border-[#4e2216]">
      
      {/* Top CTA Banner */}
      <div className="border-b border-[#4e2216] py-12 px-4 bg-[#4e2216]/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#e6b382] font-['Barlow_Condensed']">
              Qualidade comprovada em Uberlândia e Região
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-['Barlow_Condensed'] uppercase tracking-wide mt-1">
              Pronto para construir com máxima resistência e economia?
            </h3>
            <p className="text-amber-100 text-xs sm:text-sm mt-1 font-['Montserrat']">
              Converse com nossos consultores técnicos e receba uma cotação personalizada direto de fábrica.
            </p>
          </div>

          <a
            href={`https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de receber um orçamento de blocos e pisos da ESM.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 text-xs sm:text-sm font-bold text-[#652e1f] bg-white hover:bg-[#f3efe9] rounded-2xl shadow-xl shrink-0 transition-all uppercase tracking-wider font-['Barlow_Condensed'] cursor-pointer"
          >
            <span>Falar com a Fábrica Agora</span>
          </a>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-lg">
                <Boxes className="w-6 h-6 text-[#652e1f] stroke-[2.5]" />
              </div>
              <div>
                <span className="text-2xl font-black text-white tracking-tight font-['Barlow_Condensed'] uppercase">
                  ESM
                </span>
                <span className="text-xs font-bold text-[#e6b382] uppercase tracking-widest ml-2 font-['Montserrat']">
                  Blocos & Pisos
                </span>
              </div>
            </div>

            <p className="text-xs text-amber-100/80 leading-relaxed max-w-sm font-['Montserrat']">
              Fábrica especializada na produção de blocos de concreto de 4,5 MPa e pisos intertravados ecológicos e drenantes. Tecnologia, resistência e pontualidade na entrega com munck.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={companyInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#b46f34] hover:text-white text-white border border-[#83422e] flex items-center justify-center transition-colors"
                title="Instagram ESM"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#b46f34] hover:text-white text-white border border-[#83422e] flex items-center justify-center transition-colors"
                title="E-mail Comercial"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider font-['Barlow_Condensed']">Navegação Rápida</p>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">Produtos</a></li>
              <li><a href="#calculadora" className="hover:text-white transition-colors">Simulador</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Products Summary */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider font-['Barlow_Condensed']">Linhas de Produção</p>
            <ul className="space-y-2 text-xs text-amber-100/70 font-medium">
              <li>• Bloco Estrutural 14x19x39 cm (4,0 / 4,5 MPa)</li>
              <li>• Bloco Canaleta 14x19x39 cm (Vigas e Cintas)</li>
              <li>• Bloco com Fundo (14x19x39 cm e 10x20x40 cm)</li>
              <li>• Meio Bloco 14x19x19 cm (Desperdício Zero)</li>
              <li>• Piso Intertravado Maciço / Paver (6 e 8 cm)</li>
              <li>• Piso Intertravado 16 Faces (8 cm)</li>
              <li>• Piso Drenante Ecológico com Pedrisco</li>
              <li>• Piso Drenante Ecológico com Brita 0</li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-10 mt-10 border-t border-[#4e2216] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-200/60">
          <p>
            © {new Date().getFullYear()} ESM Blocos e Pisos. Todos os direitos reservados.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-amber-200 hover:text-white transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
