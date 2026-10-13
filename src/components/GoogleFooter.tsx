import { GithubIcon } from './GithubIcon';

export function GoogleFooter() {
  return (
    <footer className="bg-white border-t border-[#e3e3e3] pt-16 pb-12 text-[#1f1f1f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row (Exact match to Screenshot 2) */}
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-16">
          
          {/* Left Title */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1f1f1f] font-google tracking-tight mb-2">
              Impulsione seus projetos
            </h3>
            <p className="text-sm text-[#5f6368] max-w-sm leading-relaxed">
              Desenvolva softwares no Delphi com a mesma sofisticação visual e fluidez das aplicações modernas.
            </p>
          </div>

          {/* Right Columns: Produto & Recursos (Exact match to Screenshot 2) */}
          <div className="flex flex-wrap gap-12 sm:gap-16 text-xs">
            <div className="space-y-3">
              <h4 className="font-semibold text-[#1f1f1f] uppercase tracking-wider text-[11px]">
                Componentes
              </h4>
              <ul className="space-y-2 text-[#444746]">
                <li><a href="https://github.com/useflui/FluiToast4D" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a73e8] transition-colors">FluiToast4D</a></li>
                <li><a href="https://github.com/useflui/FluiEdit4D" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a73e8] transition-colors">FluiEdit4D</a></li>
                <li><a href="https://github.com/useflui/FluiPanel4D" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a73e8] transition-colors">FluiPanel4D</a></li>
                <li><a href="https://github.com/useflui/FluiCheckBox4D" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a73e8] transition-colors">FluiCheckBox4D</a></li>
                <li><a href="https://github.com/useflui/FluiComboBox4D" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a73e8] transition-colors">FluiComboBox4D</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-[#1f1f1f] uppercase tracking-wider text-[11px]">
                Recursos Delphi
              </h4>
              <ul className="space-y-2 text-[#444746]">
                <li><a href="#installation" className="hover:text-[#1a73e8] transition-colors">Guia de Instalação (.DPK)</a></li>
                <li><a href="#playground" className="hover:text-[#1a73e8] transition-colors">Componentes em Ação</a></li>
                <li><a href="#comparison" className="hover:text-[#1a73e8] transition-colors">VCL Tradicional vs Flui4D</a></li>
                <li><a href="https://github.com/useflui" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a73e8] transition-colors">Repositórios no GitHub</a></li>
                <li><span className="text-[#747775]">Licença MIT (Gratuito)</span></li>
              </ul>
            </div>
          </div>

        </div>

        {/* GIANT MASSIVE TYPOGRAPHY (Exact match to Screenshot 2: huge "Antigravity") */}
        <div className="py-6 sm:py-12 select-none pointer-events-none text-center overflow-hidden border-y border-[#f1f3f4]">
          <h1 className="text-[18vw] font-extrabold tracking-tighter text-[#1f1f1f] leading-none font-google">
            Flui4D
          </h1>
        </div>

        {/* Bottom Bar (Exact match to Screenshot 2: Google on left, links on right) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5f6368]">
          <div className="flex items-center gap-3">
            <img src="/assets/FLUI-logo.png" alt="Flui Logo" className="h-6 w-auto object-contain" />
            <span className="font-semibold text-[#1f1f1f]">Flui Components</span>
            <span className="text-[#dadce0]">|</span>
            <span>Delphi VCL Community</span>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <a href="https://github.com/useflui" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a73e8] flex items-center gap-1.5 font-medium text-[#1f1f1f]">
              <GithubIcon className="w-4 h-4" />
              <span>useflui</span>
            </a>
            <a href="https://github.com/useflui" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a73e8]">Repositórios</a>
            <a href="#installation" className="hover:text-[#1a73e8]">Instalação</a>
            <span className="text-[#747775]">Código Aberto MIT</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
