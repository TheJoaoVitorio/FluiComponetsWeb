import { Download, FolderDown } from 'lucide-react';

interface AntigravityHeroProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  onTriggerToast?: (title: string, message: string, type?: 'ftSuccess' | 'ftError' | 'ftInfo' | 'ftWarning') => void;
}

export function AntigravityHero({ selectedCategory, setSelectedCategory, onTriggerToast }: AntigravityHeroProps) {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-white">
      
      {/* Antigravity Radial Particle Dispersion Background (Exact match to screenshot 2) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <svg 
          viewBox="0 0 1000 700" 
          className="w-full max-w-5xl h-auto"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 90 }).map((_, i) => {
            const angle = (i * 4 * Math.PI) / 45;
            const radius = 100 + (i % 6) * 55 + Math.sin(i) * 30;
            const cx = 500 + radius * Math.cos(angle);
            const cy = 320 + (radius * 0.7) * Math.sin(angle);
            const colors = ['#4285F4', '#EA4335', '#FBBC04', '#34A853', '#A855F7', '#EC4899', '#60A5FA'];
            const color = colors[i % colors.length];
            const size = (i % 4 === 0) ? 3.5 : 2;
            const opacity = 0.25 + ((i % 5) / 8);

            return (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={size}
                fill={color}
                opacity={opacity}
              />
            );
          })}
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Antigravity Centered Official Logo */}
        <div className="flex flex-col items-center justify-center gap-2 mb-6">
          <img
            src="/assets/FLUI-logo.png"
            alt="Flui Logo Oficial"
            className="h-16 sm:h-20 w-auto object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
          />
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f0f4f9] rounded-full text-xs font-semibold text-[#1f1f1f]">
            <span>Flui Components • Delphi VCL</span>
          </div>
        </div>

        {/* Headline 1 (Google Gemini Style: "Aproveite mais o Gemini") */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1f1f1f] font-google max-w-4xl mx-auto leading-[1.08] mb-4">
          Aproveite mais o{' '}
          <span className="gemini-blue-gradient inline-block">
            Flui4D
          </span>
        </h1>

        {/* Subtitle from Gemini Subscriptions: "Escolha o plano ideal para você." */}
        <p className="text-base sm:text-xl text-[#444746] max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Impulsione seus projetos com a suíte de componentes visuais modernos para Delphi VCL. 
          100% nativa com renderização GDI+, cantos suaves e Fluent API.
        </p>

        {/* Action Button from Antigravity: Black rounded pill button "Baixar" */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <a
            href="https://github.com/useflui"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onTriggerToast?.('Acessando GitHub', 'Redirecionando para os pacotes no repositório useflui...', 'ftInfo')}
            className="bg-[#1f1f1f] hover:bg-black text-white text-sm font-medium px-8 py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow flex items-center gap-2"
          >
            <span>Baixar Repositórios (.DPK)</span>
            <Download className="w-4 h-4" />
          </a>

          <a
            href="#installation"
            className="bg-[#f0f4f9] hover:bg-[#e4ebf5] text-[#1f1f1f] text-sm font-medium px-7 py-3 rounded-full transition-colors flex items-center gap-2"
          >
            <FolderDown className="w-4 h-4 text-[#1a73e8]" />
            <span>Guia de Instalação</span>
          </a>
        </div>

        {/* Segmented Pill Selector (Exact match to Screenshot 1: "Pessoal | Empresa | Desenvolvedor") */}
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto pt-4 border-t border-[#f1f3f4] gap-4">
          
          <div className="google-pill-container shadow-sm mx-auto sm:mx-0">
            {[
              { id: 'all', label: 'Todos os Componentes' },
              { id: 'inputs', label: 'Inputs & Toasts' },
              { id: 'containers', label: 'Cards & Painéis' },
              { id: 'selection', label: 'Seleção & Dropdowns' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#1a73e8] text-white shadow-sm font-semibold'
                    : 'text-[#444746] hover:text-[#1f1f1f]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Country / Delphi Indicator on the Right (Like "🇧🇷 Brasil" in Screenshot 1) */}
          <div className="flex items-center gap-2 text-xs text-[#5f6368] font-medium">
            <span className="text-base">🇧🇷</span>
            <span>Brasil • Delphi VCL XE até 12 Athens (Win32/Win64)</span>
          </div>

        </div>

      </div>
    </section>
  );
}
