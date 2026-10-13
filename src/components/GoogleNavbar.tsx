import { useState } from 'react';
import { GithubIcon } from './GithubIcon';
import { ChevronDown, Menu, X, Download } from 'lucide-react';

interface GoogleNavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function GoogleNavbar({ activeSection, setActiveSection }: GoogleNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e3e3e3] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left: Official FLUI Logo */}
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="/assets/FLUI-logo.png" 
              alt="Flui Logo" 
              className="h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
            />
            <div className="flex items-center gap-1.5">
              <span className="text-[20px] font-bold text-[#1f1f1f] tracking-tight font-google">
                Flui<span className="text-[#1a73e8]">4D</span>
              </span>
              <span className="text-[11px] bg-[#e8f0fe] text-[#1a73e8] font-semibold px-2 py-0.5 rounded-full font-mono">
                VCL
              </span>
            </div>
          </a>

          {/* Center Navigation Links - Authentic Google Gemini Underline Tabs */}
          <div className="hidden lg:flex items-center gap-7 text-[14px]">
            <a
              href="#demonstracoes"
              onClick={() => setActiveSection('demonstracoes')}
              className={`py-5 transition-colors relative flex items-center gap-1 ${
                activeSection === 'demonstracoes'
                  ? 'text-[#1a73e8] font-medium'
                  : 'text-[#444746] hover:text-[#1f1f1f]'
              }`}
            >
              <span>Demonstrações</span>
              {activeSection === 'demonstracoes' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#1a73e8] rounded-t-full" />
              )}
            </a>

            <a
              href="#components"
              onClick={() => setActiveSection('components')}
              className={`py-5 transition-colors relative flex items-center gap-1 ${
                activeSection === 'components'
                  ? 'text-[#1a73e8] font-medium'
                  : 'text-[#444746] hover:text-[#1f1f1f]'
              }`}
            >
              <span>Componentes</span>
              <ChevronDown className="w-4 h-4 opacity-60" />
              {activeSection === 'components' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#1a73e8] rounded-t-full" />
              )}
            </a>

            <a
              href="#playground"
              onClick={() => setActiveSection('playground')}
              className={`py-5 transition-colors relative flex items-center gap-1 ${
                activeSection === 'playground'
                  ? 'text-[#1a73e8] font-medium'
                  : 'text-[#444746] hover:text-[#1f1f1f]'
              }`}
            >
              <span>Componentes em Ação</span>
              {activeSection === 'playground' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#1a73e8] rounded-t-full" />
              )}
            </a>

            <a
              href="#comparison"
              onClick={() => setActiveSection('comparison')}
              className={`py-5 transition-colors relative flex items-center gap-1 ${
                activeSection === 'comparison'
                  ? 'text-[#1a73e8] font-medium'
                  : 'text-[#444746] hover:text-[#1f1f1f]'
              }`}
            >
              <span>Comparativo</span>
              {activeSection === 'comparison' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#1a73e8] rounded-t-full" />
              )}
            </a>

            <a
              href="#installation"
              onClick={() => setActiveSection('installation')}
              className={`py-5 transition-colors relative flex items-center gap-1 ${
                activeSection === 'installation'
                  ? 'text-[#1a73e8] font-medium'
                  : 'text-[#444746] hover:text-[#1f1f1f]'
              }`}
            >
              <span>Instalação (.DPK)</span>
              {activeSection === 'installation' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#1a73e8] rounded-t-full" />
              )}
            </a>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          {/* GitHub Icon Link */}
          <a
            href="https://github.com/useflui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#444746] hover:text-[#1f1f1f] p-2 rounded-full hover:bg-black/5 transition-colors"
            title="Organização useflui no GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>

          {/* Primary Action Button - Google Blue Pill */}
          <a
            href="https://github.com/useflui"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs sm:text-sm font-semibold px-5 py-2 rounded-full shadow-sm transition-all hover:shadow duration-150 inline-flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Baixar no GitHub</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#444746] hover:text-[#1f1f1f] rounded-lg"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#e3e3e3] bg-white px-4 py-4 space-y-2 shadow-lg">
          <a
            href="#demonstracoes"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#444746] hover:text-[#1a73e8] hover:bg-[#f0f4f9] rounded-xl"
          >
            Demonstrações dos Componentes
          </a>
          <a
            href="#components"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#444746] hover:text-[#1a73e8] hover:bg-[#f0f4f9] rounded-xl"
          >
            Catálogo de Componentes
          </a>
          <a
            href="#playground"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#444746] hover:text-[#1a73e8] hover:bg-[#f0f4f9] rounded-xl"
          >
            Componentes em Ação
          </a>
          <a
            href="#comparison"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#444746] hover:text-[#1a73e8] hover:bg-[#f0f4f9] rounded-xl"
          >
            Comparativo VCL
          </a>
          <a
            href="#installation"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#444746] hover:text-[#1a73e8] hover:bg-[#f0f4f9] rounded-xl"
          >
            Instalação Tradicional (.DPK)
          </a>
        </div>
      )}
    </nav>
  );
}
