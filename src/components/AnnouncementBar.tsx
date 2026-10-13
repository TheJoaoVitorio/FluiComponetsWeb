import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="w-full bg-[#f8f9fa] border-b border-[#e3e3e3] py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-[13px] text-[#444746]">
        <div className="flex-1 flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1 bg-[#1f1f1f] text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
            + NOVO
          </span>
          <span className="hidden sm:inline">
            Flui 2.0 disponível com suporte nativo ao <strong>Delphi 12 Athens</strong>, GDI+ Anti-Aliasing e Fluent API.
          </span>
          <span className="sm:hidden font-medium">
            Flui 2.0 para Delphi 12 Athens lançado!
          </span>
          <a
            href="https://github.com/useflui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1a73e8] font-medium hover:underline inline-flex items-center gap-0.5 ml-1"
          >
            <span>Saiba mais</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-[#747775] hover:text-[#1f1f1f] p-1 rounded-full hover:bg-black/5 transition-colors"
          aria-label="Fechar anúncio"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
