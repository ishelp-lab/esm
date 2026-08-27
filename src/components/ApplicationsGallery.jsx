import React from 'react';
import { Building, Warehouse, Car, Trees, Home, Shield, ArrowUpRight } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const ApplicationsGallery = () => {
  const applications = [
    {
      title: "Galpões Comerciais & Centros Logísticos",
      category: "Bloco Estrutural & Canaleta",
      description: "Paredes altas com grande capacidade de carga e agilidade de montagem, dispensando pilares intermediários.",
      image: "/assets/applications/obra-galpao.jpg",
      icon: <Warehouse className="w-4 h-4 text-[#b46f34]" />
    },
    {
      title: "Estacionamentos & Pátios de Manobra",
      category: "Piso Intertravado Maciço (Paver)",
      description: "Pavimentação de alta durabilidade que suporta tráfego contínuo de carretas, caminhões e veículos leves.",
      image: "/assets/applications/estacionamento-paver.jpg",
      icon: <Car className="w-4 h-4 text-[#b46f34]" />
    },
    {
      title: "Ruas de Condomínios & Praças",
      category: "Piso Intertravado 16 Faces",
      description: "Travamento mecânico superior entre as peças e estética geométrica moderna para áreas nobres.",
      image: "/assets/applications/calcada-16-faces.jpg",
      icon: <Home className="w-4 h-4 text-[#b46f34]" />
    },
    {
      title: "Jardins & Calçadas Permeáveis",
      category: "Piso Drenante Ecológico",
      description: "Absorção instantânea da água da chuva no solo, evitando alagamentos e atendendo normas ambientais.",
      image: "/assets/applications/jardim-drenante.jpg",
      icon: <Trees className="w-4 h-4 text-[#b46f34]" />
    },
    {
      title: "Muros de Arrimo & Divisas",
      category: "Bloco Estrutural com Fundo",
      description: "Contenção robusta de encostas e fechamento seguro de perímetros com acabamento liso e uniforme.",
      image: "/assets/applications/patio-drenante.jpg",
      icon: <Shield className="w-4 h-4 text-[#b46f34]" />
    },
    {
      title: "Passeios Públicos & Acessibilidade",
      category: "Linha Paver & Drenante",
      description: "Piso antiderrapante, plano e confortável para pedestres, cadeirantes e ciclovias urbanas.",
      image: "/assets/applications/calcada-permeavel.jpg",
      icon: <Building className="w-4 h-4 text-[#b46f34]" />
    }
  ];

  return (
    <section id="aplicacoes" className="py-20 bg-[#f3efe9] border-b border-[#e8e2d8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#e8e2d8] text-[#b46f34] text-xs font-bold uppercase tracking-wider mb-3">
            Obras & Soluções Reais
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#652e1f] tracking-tight font-['Barlow_Condensed'] uppercase leading-[0.95]">
            APLICAÇÕES DOS PRODUTOS <span className="text-[#b46f34]">ESM NA PRÁTICA</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#46484a] font-['Montserrat']">
            Do muro residencial ao grande complexo industrial, nossos blocos e pisos garantem durabilidade e eficiência máxima.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl bg-white border border-[#e8e2d8] hover:border-[#b46f34] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-[#e8e2d8]">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/95 border border-[#e8e2d8] text-xs font-bold text-[#652e1f] uppercase font-['Barlow_Condensed'] shadow-md">
                    {app.icon}
                    <span>{app.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#652e1f] font-['Barlow_Condensed'] uppercase tracking-wide group-hover:text-[#b46f34] transition-colors mb-2 leading-tight">
                    {app.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#46484a] leading-relaxed font-['Montserrat']">
                    {app.description}
                  </p>
                </div>
              </div>

              {/* Bottom WhatsApp Link */}
              <div className="px-6 pb-6 pt-0">
                <a
                  href={`https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent(`Olá! Gostaria de consultar soluções da ESM para: ${app.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-2.5 px-4 rounded-xl bg-[#fcfaf7] hover:bg-[#652e1f] text-[#652e1f] hover:text-white border border-[#e8e2d8] text-xs font-bold transition-all uppercase tracking-wider font-['Barlow_Condensed'] group/btn"
                >
                  <span>Cotar solução para este tipo de obra</span>
                  <ArrowUpRight className="w-4 h-4 text-[#b46f34] group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
