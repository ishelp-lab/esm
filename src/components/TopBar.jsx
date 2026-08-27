import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { companyInfo } from '../data/companyInfo';

export const TopBar = () => {
  return (
    <div className="bg-[#652e1f] text-white text-xs py-2.5 px-4 border-b border-[#4e2216]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 font-medium">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <div className="flex items-center gap-1.5 text-amber-100 hover:text-white transition-colors">
            <MapPin className="w-3.5 h-3.5 text-[#e6b382] shrink-0" />
            <span>{companyInfo.address.full}</span>
          </div>
          <div className="hidden lg:flex items-center gap-1.5 text-amber-200/80">
            <Clock className="w-3.5 h-3.5 text-[#e6b382] shrink-0" />
            <span>Seg a Sex: 07h às 17h30 | Sáb: 07h30 às 12h</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href={`mailto:${companyInfo.email}`} 
            className="hidden sm:flex items-center gap-1.5 text-amber-100 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#e6b382]" />
            <span>{companyInfo.email}</span>
          </a>
          
          <a 
            href={`https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de atendimento da ESM Blocos e Pisos.')}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-bold text-white bg-[#b46f34] hover:bg-[#c88144] px-2.5 py-1 rounded-lg transition-colors shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 fill-white" />
            <span>{companyInfo.phone}</span>
          </a>

          <a 
            href={companyInfo.instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-amber-200 hover:text-white transition-colors"
            title="Instagram ESM"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-[#e6b382]" />
            <span className="hidden sm:inline">@{companyInfo.instagram}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
