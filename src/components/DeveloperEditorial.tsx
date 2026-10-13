export function DeveloperEditorial() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#e3e3e3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-column Editorial Header (Exact match to Screenshot 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14">
          
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-5xl font-bold text-[#1f1f1f] font-google tracking-tight leading-[1.12]">
              Criado para desenvolvedores na era da VCL moderna
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="text-sm sm:text-base text-[#444746] leading-relaxed font-normal">
              O <strong>Flui4D</strong> foi construído para transformar a percepção dos seus usuários finais, 
              seja você um desenvolvedor sênior mantendo um ERP corporativo robusto, 
              criando novas aplicações do zero ou revitalizando telas antigas sem quebrar o código de negócio existente.
            </p>
          </div>

        </div>

        {/* Big Preview Card with Real GIF (Matching the lower section of Screenshot 3) */}
        <div className="google-card p-6 sm:p-10 bg-[#f8f9fa] border border-[#dadce0] rounded-3xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-semibold text-[#1a73e8] uppercase tracking-wider bg-[#e8f0fe] px-3 py-1 rounded-full">
                Design-Time & Run-Time
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1f1f1f] font-google">
                Pronto para instalar e usar no seu Delphi IDE
              </h3>
              <p className="text-xs sm:text-sm text-[#5f6368] leading-relaxed">
                Você pode utilizar os componentes arrastando diretamente da paleta <strong>FLUI</strong> 
                no Delphi IDE ou instanciar dinamicamente via código através da Fluent API limpa e tipada.
              </p>
              
              <div className="pt-2">
                <a
                  href="#installation"
                  className="bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full inline-flex items-center gap-2 transition-colors shadow-sm"
                >
                  <span>Ver passo a passo de instalação</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#dadce0] bg-[#0c0e15] shadow-inner flex items-center justify-center p-3">
              <img
                src="/assets/edit-demo.gif"
                alt="FluiEdit4D Demonstration"
                className="w-full h-auto max-h-[380px] object-contain rounded-xl"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
