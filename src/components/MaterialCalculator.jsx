import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, MessageSquare, RefreshCw, Sparkles, Building, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyInfo } from '../data/companyInfo';

export const MaterialCalculator = () => {
  const [productType, setProductType] = useState('bloco-estrutural');
  const [calcMode, setCalcMode] = useState('dimensions'); // 'dimensions' or 'area'
  
  const [length, setLength] = useState('10');
  const [height, setHeight] = useState('3');
  const [customArea, setCustomArea] = useState('30');
  const [includeSafetyMargin, setIncludeSafetyMargin] = useState(true);

  const productOptions = [
    {
      id: 'bloco-estrutural',
      name: 'Bloco Estrutural 14x19x39 cm',
      type: 'Alvenaria / Muros',
      yieldPerM2: 12.5,
      piecesPerPallet: 120,
      unit: 'blocos'
    },
    {
      id: 'piso-paver',
      name: 'Piso Paver Maciço (10x20 cm)',
      type: 'Pavimentação / Calçadas',
      yieldPerM2: 50,
      piecesPerPallet: 500,
      unit: 'peças'
    },
    {
      id: 'piso-16-faces',
      name: 'Piso Intertravado 16 Faces (8 cm)',
      type: 'Ruas / Pátios / Condomínios',
      yieldPerM2: 50,
      piecesPerPallet: 450,
      unit: 'peças'
    },
    {
      id: 'piso-drenante',
      name: 'Piso Drenante Ecológico (Pedrisco/Brita 0)',
      type: 'Áreas Permeáveis & Jardins',
      yieldPerM2: 50,
      piecesPerPallet: 500,
      unit: 'peças'
    }
  ];

  const selectedProduct = productOptions.find(p => p.id === productType) || productOptions[0];

  // Calculate area
  const parsedLength = parseFloat(length) || 0;
  const parsedHeight = parseFloat(height) || 0;
  const area = calcMode === 'dimensions' ? (parsedLength * parsedHeight) : (parseFloat(customArea) || 0);

  // Exact pieces
  const exactPieces = Math.ceil(area * selectedProduct.yieldPerM2);
  const safetyFactor = includeSafetyMargin ? 1.05 : 1.0;
  const totalPieces = Math.ceil(exactPieces * safetyFactor);
  const totalPallets = Math.ceil(totalPieces / selectedProduct.piecesPerPallet);

  const handleConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#652e1f', '#b46f34', '#e6b382', '#46484a']
    });
  };

  const whatsappMessage = `Olá! Calculei os materiais no site da ESM e gostaria de um orçamento com frete para Uberlândia/região:\n\n` +
    `• *Produto:* ${selectedProduct.name}\n` +
    `• *Área estimada:* ${area.toFixed(1)} m²\n` +
    `• *Quantidade calculada:* ${totalPieces} ${selectedProduct.unit} (Aprox. ${totalPallets} paletes)\n` +
    `• *Margem de segurança:* ${includeSafetyMargin ? 'Sim (+5%)' : 'Não'}\n\n` +
    `Qual o valor e prazo de entrega?`;

  return (
    <section id="calculadora" className="py-20 bg-[#f3efe9] border-b border-[#e8e2d8] relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#b46f34]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#652e1f]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#e8e2d8] text-[#b46f34] text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Simulador de Materiais ESM
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#652e1f] tracking-tight font-['Barlow_Condensed'] uppercase leading-[0.95]">
            CALCULE A QUANTIDADE EXATA PARA SUA OBRA EM <span className="text-[#b46f34]">SEGUNDOS</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#46484a] font-['Montserrat']">
            Descubra a quantidade ideal de blocos ou pisos intertravados para seu projeto e envie a estimativa direto para a equipe de vendas.
          </p>
        </div>

        {/* Main Interactive Calculator Box */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-[#e8e2d8] shadow-xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Form Inputs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Product Selection */}
              <div>
                <label className="block text-xs font-bold text-[#652e1f] uppercase tracking-wider mb-2 font-['Barlow_Condensed']">
                  1. Selecione o Produto ESM
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {productOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setProductType(opt.id);
                        handleConfetti();
                      }}
                      className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                        productType === opt.id
                          ? 'bg-[#652e1f] border-[#652e1f] text-white shadow-md'
                          : 'bg-[#fcfaf7] border-[#e8e2d8] text-[#46484a] hover:border-[#b46f34]'
                      }`}
                    >
                      <p className={`text-[11px] font-bold uppercase tracking-wider font-['Barlow_Condensed'] ${
                        productType === opt.id ? 'text-[#e6b382]' : 'text-[#b46f34]'
                      }`}>{opt.type}</p>
                      <p className={`text-xs sm:text-sm font-bold mt-0.5 truncate ${
                        productType === opt.id ? 'text-white' : 'text-[#46484a]'
                      }`}>{opt.name}</p>
                      <p className={`text-[11px] mt-1 ${
                        productType === opt.id ? 'text-amber-100' : 'text-[#686c6e]'
                      }`}>Rendimento: {opt.yieldPerM2} peças/m²</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mode Selection: Dimensions or Direct Area */}
              <div>
                <label className="block text-xs font-bold text-[#652e1f] uppercase tracking-wider mb-2 font-['Barlow_Condensed']">
                  2. Como deseja informar as medidas?
                </label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setCalcMode('dimensions')}
                    className={`flex-1 py-2.5 px-3 text-xs font-bold rounded-xl border transition-all uppercase tracking-wider font-['Barlow_Condensed'] cursor-pointer ${
                      calcMode === 'dimensions'
                        ? 'bg-[#652e1f] border-[#652e1f] text-white'
                        : 'bg-[#fcfaf7] border-[#e8e2d8] text-[#46484a] hover:bg-[#f3efe9]'
                    }`}
                  >
                    Comprimento × Altura / Largura
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcMode('area')}
                    className={`flex-1 py-2.5 px-3 text-xs font-bold rounded-xl border transition-all uppercase tracking-wider font-['Barlow_Condensed'] cursor-pointer ${
                      calcMode === 'area'
                        ? 'bg-[#652e1f] border-[#652e1f] text-white'
                        : 'bg-[#fcfaf7] border-[#e8e2d8] text-[#46484a] hover:bg-[#f3efe9]'
                    }`}
                  >
                    Área Total em m²
                  </button>
                </div>
              </div>

              {/* Dimension Inputs */}
              {calcMode === 'dimensions' ? (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#46484a] mb-1">
                      Comprimento (metros)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min="0.1"
                        step="0.5"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        className="w-full bg-[#fcfaf7] border border-[#e8e2d8] rounded-xl px-4 py-3 text-[#46484a] text-sm font-bold focus:outline-none focus:border-[#652e1f] transition-colors"
                      />
                      <span className="absolute right-3.5 top-3 text-xs text-[#686c6e] font-bold">m</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#46484a] mb-1">
                      {productType.startsWith('bloco') ? 'Altura da Parede/Muro (m)' : 'Largura do Pavimento (m)'}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min="0.1"
                        step="0.5"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="w-full bg-[#fcfaf7] border border-[#e8e2d8] rounded-xl px-4 py-3 text-[#46484a] text-sm font-bold focus:outline-none focus:border-[#652e1f] transition-colors"
                      />
                      <span className="absolute right-3.5 top-3 text-xs text-[#686c6e] font-bold">m</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-bold text-[#46484a] mb-1">
                    Área Total da Obra (m²)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="1"
                      step="1"
                      value={customArea}
                      onChange={(e) => setCustomArea(e.target.value)}
                      className="w-full bg-[#fcfaf7] border border-[#e8e2d8] rounded-xl px-4 py-3 text-[#46484a] text-sm font-bold focus:outline-none focus:border-[#652e1f] transition-colors"
                    />
                    <span className="absolute right-3.5 top-3 text-xs text-[#686c6e] font-bold">m²</span>
                  </div>
                </div>
              )}

              {/* Safety Margin Checkbox */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#fcfaf7] border border-[#e8e2d8]">
                <input
                  type="checkbox"
                  id="safety"
                  checked={includeSafetyMargin}
                  onChange={(e) => setIncludeSafetyMargin(e.target.checked)}
                  className="w-4 h-4 rounded border-[#e8e2d8] text-[#652e1f] focus:ring-[#652e1f]"
                />
                <label htmlFor="safety" className="text-xs text-[#46484a] cursor-pointer select-none font-medium">
                  Incluir <strong>5% de margem técnica</strong> de segurança (recomendado para recortes e quebras).
                </label>
              </div>

            </div>

            {/* Right Column: Dynamic Output Card */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#652e1f] text-white border border-[#4e2216] shadow-xl relative">
              <div className="absolute top-4 right-4">
                <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#b46f34] text-white rounded-full font-['Barlow_Condensed']">
                  Resultado
                </span>
              </div>

              <p className="text-xs font-bold text-[#e6b382] uppercase tracking-widest mb-1 font-['Barlow_Condensed']">
                Estimativa para
              </p>
              <h4 className="text-xl font-bold text-white font-['Barlow_Condensed'] uppercase mb-6">
                {area.toFixed(1)} m² de {selectedProduct.type}
              </h4>

              {/* Big Result Metric */}
              <div className="mb-6 p-4 rounded-2xl bg-[#4e2216]/80 border border-[#83422e]/60">
                <p className="text-xs text-amber-100/80 mb-0.5 font-medium">Quantidade Estimada</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl sm:text-6xl font-extrabold text-[#e6b382] font-['Barlow_Condensed'] tracking-tight">
                    {totalPieces.toLocaleString('pt-BR')}
                  </span>
                  <span className="text-base font-bold text-white uppercase font-['Barlow_Condensed']">
                    {selectedProduct.unit}
                  </span>
                </div>
                <p className="text-xs text-amber-200/90 mt-1">
                  Aproximadamente <strong>{totalPallets} paletes</strong> de fábrica
                </p>
              </div>

              {/* Specs Breakdown */}
              <div className="space-y-2 mb-6 text-xs text-amber-100">
                <div className="flex justify-between py-1 border-b border-[#83422e]/60">
                  <span>Consumo Técnico:</span>
                  <span className="font-bold text-white">{selectedProduct.yieldPerM2} peças/m²</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#83422e]/60">
                  <span>Margem de Recorte:</span>
                  <span className="font-bold text-[#e6b382]">{includeSafetyMargin ? '+5% inclusos' : 'Sem margem'}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Tipo de Descarga:</span>
                  <span className="font-bold text-emerald-300">Mecanizada (Munck)</span>
                </div>
              </div>

              {/* WhatsApp Quick CTA with calculated values */}
              <a
                href={`https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 px-4 text-xs sm:text-sm font-bold text-[#652e1f] bg-white hover:bg-[#f3efe9] rounded-2xl shadow-xl transition-all text-center uppercase tracking-wider font-['Barlow_Condensed'] group cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-[#652e1f]" />
                <span>Enviar Estimativa no WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-[10px] text-center text-amber-200/70 mt-3">
                Valores e frete calculados de acordo com o endereço da sua obra.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
