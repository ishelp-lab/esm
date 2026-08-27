import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Navigation } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de um orçamento via formulário do site da ESM:\n\n` +
      `• *Nome:* ${form.name}\n` +
      `• *WhatsApp:* ${form.phone}\n` +
      `• *Local da Obra:* ${form.city}`;

    window.open(`https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-[#fcfaf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f3efe9] border border-[#e8e2d8] text-[#b46f34] text-xs font-bold uppercase tracking-wider mb-3 font-['Barlow_Condensed']">
            Atendimento Direto da Fábrica
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#652e1f] tracking-tight font-['Barlow_Condensed'] uppercase leading-[0.95]">
            FALE COM A <span className="text-[#b46f34]">ESM BLOCOS & PISOS</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#46484a] font-['Montserrat']">
            Nossa fábrica está de portas abertas em Uberlândia. Solicite sua cotação ou faça-nos uma visita técnica!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Location Card - Page 2 of Catalog */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-white border border-[#e8e2d8] shadow-lg space-y-6">
              <h3 className="text-2xl font-bold text-[#652e1f] font-['Barlow_Condensed'] uppercase tracking-wide border-b border-[#e8e2d8] pb-4">
                Informações de Contato & Fábrica
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#f3efe9] border border-[#e8e2d8] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#b46f34]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#b46f34] uppercase tracking-wider font-['Barlow_Condensed']">Endereço da Fábrica</p>
                  <p className="text-sm font-bold text-[#46484a] mt-0.5">{companyInfo.address.street}</p>
                  <p className="text-xs text-[#686c6e]">{companyInfo.address.neighborhood} • {companyInfo.address.city} - {companyInfo.address.state}</p>
                  <a
                    href="https://maps.google.com/?q=R.+Jesiel+Gon%C3%A7alves+Miranda,+101+-+Centro+Empresarial+Leste+I,+Uberl%C3%A2ndia+-+MG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#652e1f] hover:text-[#b46f34] mt-2 font-['Barlow_Condensed'] uppercase tracking-wider"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#b46f34]" />
                    <span>Abrir no Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#f3efe9] border border-[#e8e2d8] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-[#b46f34]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#b46f34] uppercase tracking-wider font-['Barlow_Condensed']">Telefone & WhatsApp</p>
                  <a 
                    href={`https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de atendimento da ESM.')}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-extrabold text-[#652e1f] hover:text-[#b46f34] transition-colors block mt-0.5 font-['Barlow_Condensed'] uppercase tracking-wider"
                  >
                    {companyInfo.phone}
                  </a>
                  <p className="text-xs text-emerald-700 flex items-center gap-1 mt-1 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Atendimento comercial online
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#f3efe9] border border-[#e8e2d8] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-[#b46f34]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#b46f34] uppercase tracking-wider font-['Barlow_Condensed']">E-mail Comercial</p>
                  <a 
                    href={`mailto:${companyInfo.email}`} 
                    className="text-xs sm:text-sm font-semibold text-[#46484a] hover:text-[#652e1f] transition-colors block mt-0.5"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#f3efe9] border border-[#e8e2d8] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#b46f34]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#b46f34] uppercase tracking-wider font-['Barlow_Condensed']">Horário de Funcionamento</p>
                  <p className="text-xs text-[#46484a] mt-0.5 leading-relaxed font-medium">{companyInfo.operatingHours}</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Quick Quote Request Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#e8e2d8] shadow-lg">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#652e1f] font-['Barlow_Condensed'] uppercase tracking-tight mb-2">
                SOLICITAR COTAÇÃO RÁPIDA
              </h3>
              <p className="text-xs sm:text-sm text-[#46484a] mb-8 font-['Montserrat']">
                Preencha os dados da sua obra e receba a proposta detalhada direto no seu WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <label className="block text-xs font-bold text-[#46484a] mb-1 font-['Barlow_Condensed'] uppercase tracking-wider">
                    Seu Nome ou Construtora *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ex: Carlos Silva / Construtora Alfa"
                    className="w-full bg-[#fcfaf7] border border-[#e8e2d8] rounded-xl px-4 py-3 text-sm text-[#46484a] focus:outline-none focus:border-[#652e1f] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#46484a] mb-1 font-['Barlow_Condensed'] uppercase tracking-wider">
                    WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(34) 9 9999-9999"
                    className="w-full bg-[#fcfaf7] border border-[#e8e2d8] rounded-xl px-4 py-3 text-sm text-[#46484a] focus:outline-none focus:border-[#652e1f] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#46484a] mb-1 font-['Barlow_Condensed'] uppercase tracking-wider">
                    Cidade e Bairro da Obra *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    placeholder="Ex: Uberlândia - Granja Marileusa"
                    className="w-full bg-[#fcfaf7] border border-[#e8e2d8] rounded-xl px-4 py-3 text-sm text-[#46484a] focus:outline-none focus:border-[#652e1f] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-[#652e1f] hover:bg-[#4e2216] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-[#652e1f]/25 transition-all cursor-pointer uppercase tracking-wider font-['Barlow_Condensed'] mt-2"
                >
                  <Send className="w-4 h-4 fill-white" />
                  <span>Enviar Pedido de Orçamento no WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-[#686c6e] mt-2">
                  Receba o orçamento detalhado com frete direto no WhatsApp comercial.
                </p>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
