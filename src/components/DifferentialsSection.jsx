import React from 'react';
import { Truck, ShieldCheck, TrendingDown, Clock, Award, Hammer, FileText, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const DifferentialsSection = () => {
  const differentials = [
    {
      icon: <Truck className="w-6 h-6 text-[#b46f34]" />,
      title: "Descarga Mecanizada com Munck",
      description: "Caminhões equipados com guindauto próprio. Descarregamos os paletes organizados no local exato do canteiro de obras, reduzindo o tempo de descarga de horas para minutos e com índice zero de quebra."
    },
    {
      icon: <Award className="w-6 h-6 text-[#b46f34]" />,
      title: "Resistência de 4,5 MPa",
      description: "Blocos de concreto que atingem e superam as normas da ABNT. Perfeitos para alvenaria estrutural, galpões e edifícios que exigem capacidade de carga confiável e laudos laboratoriais."
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-[#b46f34]" />,
      title: "Economia Real de Argamassa e Reboco",
      description: "Nossos moldes de alta precisão produzem peças com cantos vivos e faces lisas, garantindo alinhamento milimétrico e diminuindo drasticamente o consumo de massa de assentamento e revestimento."
    },
    {
      icon: <FileText className="w-6 h-6 text-[#b46f34]" />,
      title: "Laudos e Controle Tecnológico",
      description: "Controle de qualidade lote a lote com ensaios de compressão e absorção. Segurança total para engenheiros, arquitetos e construtoras responsáveis pela assinatura da obra."
    },
    {
      icon: <Clock className="w-6 h-6 text-[#b46f34]" />,
      title: "Pontualidade de Entrega Garantida",
      description: "Frota própria e logística ágil atendendo Uberlândia e toda a região do Triângulo Mineiro. Respeitamos seu cronograma para que sua obra nunca fique parada esperando material."
    },
    {
      icon: <Hammer className="w-6 h-6 text-[#b46f34]" />,
      title: "Linha Completa Modular",
      description: "Do bloco estrutural ao meio bloco e canaleta, além de pisos intertravados e drenantes. Você resolve 100% da alvenaria e da pavimentação em um único fornecedor direto de fábrica."
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-[#fcfaf7] relative border-b border-[#e8e2d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f3efe9] border border-[#e8e2d8] text-[#b46f34] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Por que escolher a ESM?
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#652e1f] tracking-tight font-['Barlow_Condensed'] uppercase leading-[0.95]">
            TECNOLOGIA DE FABRICAÇÃO QUE GERA <span className="text-[#b46f34]">ECONOMIA E SEGURANÇA</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#46484a] font-['Montserrat']">
            Entenda como nossos padrões de engenharia e logística transformam o ritmo e o custo da sua obra.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-[#e8e2d8] hover:border-[#b46f34] transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#f3efe9] border border-[#e8e2d8] flex items-center justify-center mb-6 group-hover:bg-[#652e1f] group-hover:text-white transition-all">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#652e1f] mb-3 group-hover:text-[#b46f34] transition-colors font-['Barlow_Condensed'] uppercase tracking-wide">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#46484a] leading-relaxed font-['Montserrat']">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f3efe9] flex items-center gap-2 text-xs font-bold text-[#b46f34] uppercase tracking-wider font-['Barlow_Condensed']">
                <CheckCircle2 className="w-4 h-4 text-[#b46f34] shrink-0" />
                <span>Padrão ESM de Qualidade</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
