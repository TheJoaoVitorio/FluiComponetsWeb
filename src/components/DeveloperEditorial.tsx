import { useState } from 'react';
import { FileCode2, FileText, X, Sparkles, ZoomIn, ZoomOut, ArrowRight } from 'lucide-react';

export function DeveloperEditorial() {
  const [zoomEnabled, setZoomEnabled] = useState(true);

  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#e3e3e3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Clean Layout matching Antigravity IDE (Screenshot 1 Reference) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Direct, Bold Editorial Headline & Description */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-[46px] font-normal text-[#1f1f1f] font-google tracking-tight leading-[1.14]">
              Flui4D  
            </h2>

            <p className="text-base sm:text-lg text-[#5f6368] leading-relaxed font-normal max-w-lg">
              A suíte visual completa para Delphi VCL. Equipada com renderização GDI+, 
              cantos arredondados com recorte perfeito, máscaras dinâmicas e uma arquitetura moderna para a sua aplicação.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#installation"
                className="bg-[#1f1f1f] hover:bg-[#333333] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all shadow-sm hover:shadow"
              >
                <span>Ver passo a passo de instalação</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#playground"
                className="text-xs sm:text-sm font-semibold text-[#1a73e8] hover:bg-[#e8f0fe] px-4 py-3 rounded-full transition-colors inline-flex items-center gap-1.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>Ver componentes em ação</span>
              </a>
            </div>
          </div>

          {/* Right Column: Large Aura Card with Mockup IDE & Zoomed GIF (Screenshot 1 Reference) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[36px] sm:rounded-[44px] p-4 sm:p-8 lg:p-10 overflow-hidden bg-gradient-to-br from-[#f0f4f9] via-[#f8f9fa] to-[#edf3fe] border border-[#e3e3e3]/70 shadow-sm">
              
              {/* Google Ambient Aura Blobs (Light pastel atmospheric glow) */}
              <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#c2e7ff]/50 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#fedfc8]/45 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-[#f3e8fd]/40 rounded-full blur-3xl pointer-events-none" />

              {/* IDE Window with Google Gemini / Antigravity Rainbow Border */}
              <div className="relative p-[1.5px] rounded-2xl bg-gradient-to-tr from-[#fbbc04]/80 via-[#ea4335]/60 via-[#a142f4]/70 via-[#4285f4]/85 to-[#34a853]/75 shadow-2xl shadow-blue-900/10">
                <div className="bg-white rounded-[15px] overflow-hidden flex flex-col">
                  
                  {/* IDE Top Bar: Tabs & Breadcrumb (Exact match to Reference Screenshot 1) */}
                  <div className="bg-[#fbfbfb] border-b border-[#f1f3f4] select-none">
                    
                    {/* Tabs row */}
                    <div className="flex items-center justify-between px-3 pt-2 text-xs">
                      <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
                        
                        {/* Tab 1: Inactive "Implementation plan" tab */}
                        <div className="flex items-center gap-1.5 px-3 py-1.5 text-[#747775] hover:text-[#1f1f1f] rounded-t-lg transition-colors cursor-default">
                          <FileText className="w-3.5 h-3.5 text-[#8e918f]" />
                          <span className="font-medium text-[12px]">Implementation plan</span>
                        </div>

                        {/* Tab 2: Active Component tab matching Screenshot 1 */}
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-[#1f1f1f] rounded-t-lg border-t-2 border-[#1a73e8] shadow-[0_-1px_3px_rgba(0,0,0,0.02)]">
                          <FileCode2 className="w-3.5 h-3.5 text-[#1a73e8]" />
                          <span className="font-semibold text-[12px] font-mono">FluiEdit4D.pas</span>
                          <span className="text-[10px] text-[#747775] ml-0.5">1</span>
                          <X className="w-3 h-3 text-[#747775] ml-1 hover:text-[#1f1f1f] cursor-pointer" />
                        </div>

                      </div>

                      {/* Zoom Toggle Pill Button */}
                      <button
                        onClick={() => setZoomEnabled(!zoomEnabled)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-[#444746] hover:text-[#1a73e8] bg-[#f0f4f9] hover:bg-[#e8f0fe] rounded-full transition-colors"
                        title={zoomEnabled ? "Ver visão geral sem zoom" : "Focar no componente"}
                      >
                        {zoomEnabled ? (
                          <>
                            <ZoomOut className="w-3 h-3 text-[#1a73e8]" />
                            <span>Zoom 2x</span>
                          </>
                        ) : (
                          <>
                            <ZoomIn className="w-3 h-3" />
                            <span>Zoom 1x</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Breadcrumbs row: matching "app > components > LoginButton.tsx" */}
                    <div className="px-4 py-2 text-[11px] text-[#747775] font-mono flex items-center gap-1.5 bg-white/70 border-t border-[#f1f3f4]">
                      <span>vcl</span>
                      <span>›</span>
                      <span>components</span>
                      <span>›</span>
                      <span className="text-[#1f1f1f] font-semibold">FluiEdit4D</span>
                    </div>

                  </div>

                  {/* Window Content: Zoomed GIF focusing strictly on FluiEdit4D component */}
                  <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] bg-[#fafafa] overflow-hidden flex items-center justify-center">
                    
                    {/* Subtle Delphi/Code Line Numbers on the left (as in Screenshot 1) */}
                    <div className="absolute left-0 top-0 bottom-0 w-9 bg-white/90 border-r border-[#f1f3f4] py-4 flex flex-col items-center gap-2 text-[11px] text-[#c4c7c5] font-mono select-none z-10">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                      <span>6</span>
                      <span>7</span>
                      <span>8</span>
                      <span>9</span>
                      <span>10</span>
                      <span>11</span>
                      <span>12</span>
                    </div>

                    {/* GIF Container with calculated zoom cropping out Bandicam and property menus */}
                    <div className="w-full h-full overflow-hidden flex items-center justify-center pl-9">
                      <img
                        src="/assets/edit-demo.gif"
                        alt="FluiEdit4D Component Demonstration"
                        className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 ease-out"
                        style={{
                          objectPosition: zoomEnabled ? '87% 37%' : 'center center',
                          transform: zoomEnabled ? 'scale(2.15)' : 'scale(1)',
                          transformOrigin: zoomEnabled ? '87% 37%' : 'center center',
                        }}
                      />
                    </div>

                    {/* Bottom Floating Status Pill */}
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md border border-[#e3e3e3] px-3 py-1 rounded-full text-[11px] font-medium text-[#444746] shadow-sm flex items-center gap-1.5 z-10 pointer-events-none">
                      <span className="w-2 h-2 rounded-full bg-[#1e8e3e] animate-pulse" />
                      <span>GDI+ Anti-Aliasing • TFluiEdit</span>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
