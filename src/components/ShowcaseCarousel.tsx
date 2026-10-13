import { useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

export function ShowcaseCarousel() {
  const [scrollIndex, setScrollIndex] = useState(0);

  const items = [
    {
      id: 'toast',
      title: 'FluiToast4D em Ação no Delphi',
      desc: 'Notificações elegantes que empilham dinamicamente no canto da tela sem travar a thread de execução do formulário.',
      image: '/assets/toast-demo.gif',
      tag: 'Notificações • VCL',
      date: 'Nativo GDI+',
      url: 'https://github.com/useflui/FluiToast4D'
    },
    {
      id: 'edit',
      title: 'FluiEdit4D: Máscaras e Estilo Outline',
      desc: 'Inputs com formatação dinâmica em tempo real (Moeda R$, CPF, CNPJ, Telefone), ícone interno e rótulos flutuantes.',
      image: '/assets/edit-demo.gif',
      tag: 'Inputs & Formatação',
      date: 'Anti-Aliasing',
      url: 'https://github.com/useflui/FluiEdit4D'
    },
    {
      id: 'panel',
      title: 'FluiPanel4D: Clipping com Window Regions',
      desc: 'Painel com cantos arredondados individuais e recorte real de controles filhos, eliminando vazamentos nas quinas.',
      image: '/assets/panel-demo.gif',
      tag: 'Cards & Containers',
      date: 'BoxShadow Real',
      url: 'https://github.com/useflui/FluiPanel4D'
    },
    {
      id: 'brand',
      title: 'Identidade Visual & Suíte Flui',
      desc: 'Design fluido, curvas suaves e paleta inspirada no Google Gemini para modernizar sistemas legados em Delphi.',
      image: '/assets/FLUI-logo.png',
      tag: 'Identidade • Suíte',
      date: 'MIT License',
      url: 'https://github.com/useflui'
    }
  ];

  const handleNext = () => {
    setScrollIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setScrollIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Rotate items based on scrollIndex for interactive responsiveness
  const displayItems = [
    ...items.slice(scrollIndex),
    ...items.slice(0, scrollIndex)
  ];

  return (
    <section className="py-20 bg-white border-t border-[#e3e3e3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header row (Matching Screenshot 1: "Últimas postagens do blog" + "Ver blog") */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1f1f1f] font-google tracking-tight">
              Componentes em ação
            </h2>
            <p className="text-xs sm:text-sm text-[#5f6368] mt-1">
              Veja as demonstrações reais dos controles rodando dentro de formulários Delphi VCL.
            </p>
          </div>

          <a
            href="https://github.com/useflui"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f0f4f9] hover:bg-[#e4ebf5] text-[#1f1f1f] text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-colors flex items-center gap-1.5"
          >
            <span>Ver no GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#5f6368]" />
          </a>
        </div>

        {/* Horizontal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayItems.map((item) => (
            <div
              key={item.id}
              className="google-card p-4 sm:p-5 flex flex-col justify-between group hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Media Container (GIF or Logo) with exact dark/clean aspect ratio */}
                <div className="w-full h-48 rounded-[20px] bg-[#0c0e15] overflow-hidden flex items-center justify-center relative mb-4 border border-[#e3e3e3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 ${
                      item.id === 'brand' ? 'p-6 max-h-36' : 'p-2'
                    }`}
                  />
                </div>

                {/* Content */}
                <h3 className="font-bold text-base text-[#1f1f1f] font-google tracking-tight mb-2 group-hover:text-[#1a73e8] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5f6368] leading-relaxed line-clamp-3 mb-4">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Tag & Link (Exact match to Screenshot 1) */}
              <div className="pt-3 border-t border-[#f1f3f4] mt-auto">
                <div className="flex items-center justify-between text-[11px] text-[#747775] mb-2">
                  <span>{item.tag}</span>
                  <span className="font-mono text-[#1a73e8]">{item.date}</span>
                </div>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#1a73e8] hover:underline inline-flex items-center gap-1"
                >
                  <span>Ver repositório</span>
                  <span>›</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Carousel Bottom Controls (Exact match to bottom left of Screenshot 1) */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full border border-[#dadce0] bg-white hover:bg-[#f0f4f9] text-[#1f1f1f] flex items-center justify-center transition-colors"
              aria-label="Anterior"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full border border-[#dadce0] bg-white hover:bg-[#f0f4f9] text-[#1f1f1f] flex items-center justify-center transition-colors"
              aria-label="Próximo"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-[#5f6368] ml-2 font-mono">
              {scrollIndex + 1} de {items.length}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setScrollIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === scrollIndex ? 'w-6 bg-[#1a73e8]' : 'w-2 bg-[#dadce0] hover:bg-[#5f6368]'
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
