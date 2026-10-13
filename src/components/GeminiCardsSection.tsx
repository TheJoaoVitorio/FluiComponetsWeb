import { FLUI_COMPONENTS } from '../data/componentsData';
import { Check, ExternalLink, Star, Download } from 'lucide-react';

interface GeminiCardsSectionProps {
  selectedCategory: string;
}

export function GeminiCardsSection({ selectedCategory }: GeminiCardsSectionProps) {
  const filteredComponents = FLUI_COMPONENTS.filter((comp) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'inputs') return comp.id === 'flui-edit' || comp.id === 'flui-toast';
    if (selectedCategory === 'containers') return comp.id === 'flui-panel';
    if (selectedCategory === 'selection') return comp.id === 'flui-checkbox' || comp.id === 'flui-combobox';
    return true;
  });

  return (
    <section id="components" className="py-8 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Horizontal Card Grid matching Gemini Subscriptions (Screenshot 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {filteredComponents.map((comp) => {
            const isFeatured = comp.id === 'flui-toast' || comp.id === 'flui-edit';
            
            return (
              <div
                key={comp.id}
                className={`google-card p-6 sm:p-7 flex flex-col justify-between relative transition-all ${
                  isFeatured ? 'ring-2 ring-[#1a73e8]/20 border-[#1a73e8]/30 shadow-md' : ''
                }`}
              >
                <div>
                  {/* Top Badge (Exact match to "Gemini 4 Argon rolling out" in Screenshot 1) */}
                  <div className="min-h-[22px] mb-3">
                    {comp.id === 'flui-toast' && (
                      <span className="text-xs font-medium text-[#1a73e8]">
                        Fluent API & Notificações
                      </span>
                    )}
                    {comp.id === 'flui-edit' && (
                      <span className="text-xs font-medium text-[#1a73e8]">
                        Máscaras Inteligentes (CPF/CNPJ/R$)
                      </span>
                    )}
                    {comp.id === 'flui-panel' && (
                      <span className="text-xs font-medium text-[#1a73e8]">
                        Clipping Real com Window Regions
                      </span>
                    )}
                    {(comp.id === 'flui-checkbox' || comp.id === 'flui-combobox') && (
                      <span className="text-xs font-medium text-[#747775]">
                        Renderização GDI+ Subpixel
                      </span>
                    )}
                  </div>

                  {/* Optional Mini GIF preview inside card */}
                  {comp.demoGif && (
                    <div className="w-full h-32 rounded-xl bg-[#0c0e15] overflow-hidden flex items-center justify-center mb-4 border border-[#e3e3e3]">
                      <img
                        src={comp.demoGif}
                        alt={`Demonstração ${comp.name}`}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                  )}

                  {/* Component Title */}
                  <h3 className="text-2xl font-bold text-[#1f1f1f] font-google tracking-tight mb-2 flex items-center justify-between">
                    <span>{comp.name}</span>
                    <span className="text-xs font-normal text-[#5f6368] flex items-center gap-1 font-sans">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      {comp.stars}
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-[#444746] leading-relaxed mb-6 font-normal">
                    {comp.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-8 pt-4 border-t border-[#f1f3f4]">
                    <div className="text-xs font-semibold text-[#1f1f1f] uppercase tracking-wider mb-2">
                      Recursos inclusos:
                    </div>
                    {comp.features.slice(0, 4).map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#444746]">
                        <Check className="w-4 h-4 text-[#1a73e8] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Pricing & Traditional Action Section */}
                <div className="pt-6 border-t border-[#f1f3f4] mt-auto">
                  
                  {/* Pricing line (Exact format: "R$ 0 BRL / mês...") */}
                  <div className="mb-4">
                    <span className="text-xs text-[#747775] block">Licença:</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-lg font-bold text-[#1f1f1f]">R$ 0</span>
                      <span className="text-xs text-[#444746] font-medium">BRL / Código Aberto MIT</span>
                    </div>
                  </div>

                  {/* Action Buttons for GitHub and Traditional Install */}
                  <div className="space-y-2">
                    <a
                      href={comp.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-semibold py-2.5 px-4 rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Baixar Pacote .DPK</span>
                    </a>

                    <a
                      href={comp.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#f8f9fa] hover:bg-[#f0f4f9] text-[#1f1f1f] text-xs font-medium py-2 px-4 rounded-full transition-colors flex items-center justify-center gap-1.5 border border-[#dadce0]"
                    >
                      <span>Ver Repositório</span>
                      <ExternalLink className="w-3 h-3 text-[#747775]" />
                    </a>
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
