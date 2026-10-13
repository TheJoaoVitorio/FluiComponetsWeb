import { COMPARISON_DATA } from '../data/componentsData';
import { Check, X, ShieldCheck } from 'lucide-react';

export function GoogleComparisonTable() {
  return (
    <section id="comparison" className="py-20 md:py-28 bg-[#f8f9fa] border-t border-[#e3e3e3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Comparativo Técnico
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1f1f1f] font-google tracking-tight mb-3">
            VCL Tradicional vs. Flui4D
          </h2>
          <p className="text-[#444746] text-sm sm:text-base leading-relaxed">
            Entenda por que a arquitetura moderna do Flui4D supera as limitações da biblioteca padrão do Delphi.
          </p>
        </div>

        {/* Clean Google-style Table */}
        <div className="google-card overflow-hidden shadow-sm border border-[#dadce0] bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f0f4f9] border-b border-[#dadce0] text-xs font-semibold text-[#1f1f1f] uppercase tracking-wider font-google">
                  <th className="py-4 px-6 w-1/3">Recurso / Capacidade</th>
                  <th className="py-4 px-6 w-1/3 text-[#5f6368]">VCL Tradicional (Padrão)</th>
                  <th className="py-4 px-6 w-1/3 text-[#1a73e8]">Flui4D (Moderna)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f3f4] text-xs sm:text-[13px]">
                {COMPARISON_DATA.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#f8f9fa] transition-colors">
                    <td className="py-4 px-6 font-semibold text-[#1f1f1f]">
                      {item.feature}
                    </td>
                    <td className="py-4 px-6 text-[#5f6368]">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-[#d93025] flex-shrink-0 mt-0.5" />
                        <span>{item.delphiStandard}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-[#1f1f1f]">
                      <div className="flex items-start gap-2 font-medium">
                        <Check className="w-4 h-4 text-[#1a73e8] flex-shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{item.flui4d}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
