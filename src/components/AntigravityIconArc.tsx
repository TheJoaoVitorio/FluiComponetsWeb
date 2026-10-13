import { 
  ArrowRight, 
  Check, 
  Box, 
  Command, 
  Wand2, 
  RotateCw, 
  Code, 
  Sparkles, 
  Share2, 
  Terminal, 
  MoreHorizontal, 
  ArrowLeft, 
  LayoutGrid, 
  Folder, 
  Braces, 
  Maximize
} from 'lucide-react';

export function AntigravityIconArc() {
  const arcIcons = [
    { icon: ArrowRight },
    { icon: Check },
    { icon: Box },
    { icon: Command },
    { icon: Wand2 },
    { icon: RotateCw },
    { icon: Code },
    { icon: Sparkles, highlighted: true },
    { icon: Share2 },
    { icon: Terminal },
    { icon: MoreHorizontal },
    { icon: ArrowLeft },
    { icon: LayoutGrid },
    { icon: Code },
    { icon: Sparkles, highlighted: true },
    { icon: Folder },
    { icon: Braces },
    { icon: Maximize },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#f8f9fa] border-y border-[#e3e3e3] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The Arc of Circular White Icon Buttons (Exact match to Screenshot 3) */}
        <div className="flex items-center justify-center -space-x-1 sm:space-x-2 overflow-x-auto py-6 mb-16 no-scrollbar">
          {arcIcons.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className={`w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white border border-[#dadce0] shadow-sm flex items-center justify-center flex-shrink-0 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#1a73e8] ${
                  item.highlighted ? 'text-[#1a73e8] bg-[#e8f0fe] border-[#1a73e8]/30' : 'text-[#444746]'
                }`}
                style={{
                  // Subtle gentle arc displacement
                  transform: `translateY(${Math.sin((idx / (arcIcons.length - 1)) * Math.PI) * -12}px)`
                }}
              >
                <IconComp className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
              </div>
            );
          })}
        </div>

        {/* Large Editorial Statement Below (Exact match to Screenshot 3) */}
        <div className="max-w-4xl mx-auto text-left sm:text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#1f1f1f] font-google leading-[1.25] tracking-tight">
            O <span className="text-[#1a73e8]">Flui4D</span> é a nossa plataforma de componentes visuais para Delphi, 
            permitindo que qualquer desenvolvedor construa na era das interfaces fluidas e modernas.
          </h2>
        </div>

      </div>
    </section>
  );
}
