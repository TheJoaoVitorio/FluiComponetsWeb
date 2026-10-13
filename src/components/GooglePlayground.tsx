import { useState } from 'react';
import { 
  Sparkles, 
  Copy, 
  Check, 
  FileCode2, 
  FileText, 
  X, 
  ZoomIn, 
  ZoomOut, 
  BellRing, 
  Type, 
  Layers, 
  Code2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { ToastType } from '../types';

interface GooglePlaygroundProps {
  onTriggerToast: (title: string, message: string, type: ToastType) => void;
}

type ComponentTab = 'edit' | 'panel' | 'toast';

interface ComponentInfo {
  id: ComponentTab;
  title: string;
  name: string;
  fileName: string;
  breadcrumb: string;
  gif: string;
  zoomPosition: string;
  zoomScale: number;
  badge: string;
  desc: string;
  features: string[];
  code: string;
  statusText: string;
}

const COMPONENTS_DATA: Record<ComponentTab, ComponentInfo> = {
  edit: {
    id: 'edit',
    title: 'FluiEdit4D',
    name: 'Inputs com Máscaras & Rótulo Flutuante',
    fileName: 'FluiEdit4D.pas',
    breadcrumb: 'vcl › components › FluiEdit4D',
    gif: '/assets/edit-demo.gif',
    zoomPosition: '87% 37%',
    zoomScale: 2.15,
    badge: 'Inputs & Validação',
    desc: 'Inputs modernos com cantos arredondados, rótulo flutuante estilo Material You e formatação automática em tempo real para CPF, CNPJ, Moeda R$ e Telefone.',
    features: [
      'Máscara dinâmica sem travamentos',
      'Rótulo flutuante com animação suave',
      'Ícone interno e texto de ajuda (Helper)',
      'Renderização vetorial subpixel GDI+'
    ],
    code: `uses
  FluiEdit, FluiEdit.Types;

procedure TForm1.ConfigurarInput;
begin
  // Instanciação e Fluent Setup do FluiEdit
  EditCPF := TFluiEdit.Create(Self);
  EditCPF.Parent := Self;
  EditCPF.LabelCaption := 'CPF do Titular';
  EditCPF.MaskType := fmtCPF;
  EditCPF.Rounding := 12;
  EditCPF.BorderColor := clSilver;
  EditCPF.FocusedColor := $00E8731A; // Azul Flui
  EditCPF.HelperText := 'Digite apenas números';
end;`,
    statusText: 'TFluiEdit • GDI+ Anti-Aliasing'
  },
  panel: {
    id: 'panel',
    title: 'FluiPanel4D',
    name: 'Cards & Containers com Clipping Real',
    fileName: 'FluiPanel4D.pas',
    breadcrumb: 'vcl › containers › FluiPanel4D',
    gif: '/assets/panel-demo.gif',
    zoomPosition: '80% 43%',
    zoomScale: 1.95,
    badge: 'Cards & Superfícies',
    desc: 'Painel com cantos arredondados individuais e recorte real de controles filhos através de Window Regions do Windows, eliminando vazamentos nas quinas.',
    features: [
      'Recorte real de controles filhos (Clipping)',
      'Cantos arredondados individuais (Top/Bottom)',
      'BoxShadow suave gaussiano personalizável',
      'Suporte a gradientes lineares suaves'
    ],
    code: `uses
  FluiPanel, FluiPanel.Types;

procedure TForm1.ConfigurarCard;
begin
  // Container com cantos suaves e sombra
  CardPrincipal := TFluiPanel.Create(Self);
  CardPrincipal.Parent := Self;
  CardPrincipal.Rounding := 20;
  CardPrincipal.Corners := [coTopLeft, coTopRight, coBotLeft, coBotRight];
  CardPrincipal.EnableGradient := True;
  CardPrincipal.ColorStart := $00E8731A;
  CardPrincipal.ColorEnd := $00B020E0;
  CardPrincipal.DropShadow := True;
end;`,
    statusText: 'TFluiPanel • Window Regions Clipping'
  },
  toast: {
    id: 'toast',
    title: 'FluiToast4D',
    name: 'Sistema de Notificações Toast Não-Intrusivo',
    fileName: 'FluiToast4D.pas',
    breadcrumb: 'vcl › notifications › FluiToast4D',
    gif: '/assets/toast-demo.gif',
    zoomPosition: '75% 72%',
    zoomScale: 1.5,
    badge: 'Fluent API • Material You',
    desc: 'Sistema de notificações flutuantes e empilháveis para Delphi. Não bloqueia a interface do usuário e pode ser disparado em uma única linha com Fluent API encadeada.',
    features: [
      'Fluent API encadeada em uma única chamada',
      'Temas Success, Error, Info, Warning e Custom',
      'Múltiplos pontos de ancoragem na tela',
      'Temporizador e autodestruição suave'
    ],
    code: `uses
  FluiToast, FluiToast.Types;

procedure TForm1.SalvarRegistro;
begin
  // Disparo encadeado via Fluent API
  TFluiToast.New
    .Title('Salvo com êxito')
    .Message('Os dados foram gravados no banco.')
    .Duration(4000)
    .Position(ftpBottomRight)
    .ToastType(ftSuccess)
    .Show;
end;`,
    statusText: 'TFluiToast • Fluent API Encadeada'
  }
};

export function GooglePlayground({ onTriggerToast }: GooglePlaygroundProps) {
  const [activeTab, setActiveTab] = useState<ComponentTab>('edit');
  const [zoomEnabled, setZoomEnabled] = useState(true);
  const [copiedCode, setCopiedCode] = useState(false);

  const activeComp = COMPONENTS_DATA[activeTab];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeComp.code);
    setCopiedCode(true);
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.7, x: 0.3 }
    });
    onTriggerToast('Código copiado!', `Exemplo do ${activeComp.title} copiado com sucesso.`, 'ftSuccess');
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleTestToast = () => {
    onTriggerToast('Disparo de Demonstração', 'Notificação simulada ao vivo no navegador!', 'ftSuccess');
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.8, x: 0.8 }
    });
  };

  return (
    <section id="playground" className="py-20 md:py-28 bg-[#fafafa]/50 border-t border-[#e3e3e3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: "Veja alguns componentes" */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Showcase Real Delphi VCL
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1f1f1f] font-google tracking-tight mb-4">
            Veja alguns componentes
          </h2>
          <p className="text-[#5f6368] text-sm sm:text-base leading-relaxed">
            Gravações reais de execução no Delphi. Veja a renderização GDI+, o recorte suave e as animações em tempo real de cada componente.
          </p>
        </div>

        {/* Tab Switcher Pills */}
        <div className="flex justify-center mb-10">
          <div className="google-pill-container shadow-sm border border-[#dadce0]/60">
            {[
              { id: 'edit', label: 'FluiEdit4D (Inputs)', icon: Type },
              { id: 'panel', label: 'FluiPanel4D (Cards)', icon: Layers },
              { id: 'toast', label: 'FluiToast4D (Notificações)', icon: BellRing },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as ComponentTab)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#1a73e8] text-white font-semibold shadow-sm'
                      : 'text-[#444746] hover:text-[#1f1f1f] hover:bg-black/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Studio Box: Code & Features on Left, Mockup IDE with Zoomed GIF on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (5 Cols): Component Details & Pascal Code */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#dadce0] shadow-sm space-y-5">
              
              {/* Header */}
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f0f4f9] text-[#1a73e8] text-[11px] font-semibold font-mono mb-2">
                  <span>{activeComp.badge}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#1f1f1f] font-google tracking-tight">
                  {activeComp.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5f6368] leading-relaxed mt-1">
                  {activeComp.desc}
                </p>
              </div>

              {/* Feature Points */}
              <div className="space-y-2 pt-2 border-t border-[#f1f3f4]">
                {activeComp.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#444746]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1a73e8]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Pascal Code Block with Copy Action */}
              <div className="pt-2">
                <div className="flex items-center justify-between pb-2 text-xs">
                  <span className="font-mono text-[#747775] text-[11px] flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-[#1a73e8]" />
                    <span>Exemplo Object Pascal</span>
                  </span>
                  
                  <button
                    onClick={handleCopyCode}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-[#f0f4f9] hover:bg-[#e8f0fe] text-[#1a73e8] rounded-full text-xs font-semibold transition-colors shadow-2xs"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#1e8e3e]" />
                        <span className="text-[#1e8e3e]">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Código</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="relative rounded-2xl bg-[#0c0e15] p-4 font-mono text-xs overflow-x-auto shadow-inner text-[#e3e3e3] border border-[#2a2d3d]">
                  <pre className="text-[11px] sm:text-xs leading-relaxed">
                    <code>{activeComp.code}</code>
                  </pre>
                </div>
              </div>

              {/* Extra action for Toast component */}
              {activeTab === 'toast' && (
                <div className="pt-2">
                  <button
                    onClick={handleTestToast}
                    className="w-full bg-[#e8f0fe] hover:bg-[#d2e3fc] text-[#1a73e8] text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <BellRing className="w-3.5 h-3.5" />
                    <span>Simular Notificação Toast na Página</span>
                  </button>
                </div>
              )}

            </div>
          </div>

          {/* Right Column (7 Cols): Antigravity Style IDE Card with Zoomed GIF */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[36px] sm:rounded-[44px] p-4 sm:p-8 overflow-hidden bg-gradient-to-br from-[#f0f4f9] via-[#f8f9fa] to-[#edf3fe] border border-[#dadce0] shadow-sm">
              
              {/* Atmospheric Ambient Glow Blobs */}
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#c2e7ff]/50 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#fedfc8]/45 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-[#f3e8fd]/40 rounded-full blur-3xl pointer-events-none" />

              {/* Rainbow Gemini Border Wrapper */}
              <div className="relative p-[1.5px] rounded-2xl bg-gradient-to-tr from-[#fbbc04]/80 via-[#ea4335]/60 via-[#a142f4]/70 via-[#4285f4]/85 to-[#34a853]/75 shadow-2xl shadow-blue-900/10">
                <div className="bg-white rounded-[15px] overflow-hidden flex flex-col">
                  
                  {/* IDE Top Bar: Abas e Breadcrumbs */}
                  <div className="bg-[#fbfbfb] border-b border-[#f1f3f4] select-none">
                    
                    {/* Tabs row */}
                    <div className="flex items-center justify-between px-3 pt-2 text-xs">
                      <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
                        
                        {/* Tab inativa secundária */}
                        <div className="flex items-center gap-1.5 px-3 py-1.5 text-[#747775] hover:text-[#1f1f1f] rounded-t-lg transition-colors cursor-default">
                          <FileText className="w-3.5 h-3.5 text-[#8e918f]" />
                          <span className="font-medium text-[12px]">Design-Time</span>
                        </div>

                        {/* Tab ativa do componente atual */}
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-[#1f1f1f] rounded-t-lg border-t-2 border-[#1a73e8] shadow-[0_-1px_3px_rgba(0,0,0,0.02)]">
                          <FileCode2 className="w-3.5 h-3.5 text-[#1a73e8]" />
                          <span className="font-semibold text-[12px] font-mono">{activeComp.fileName}</span>
                          <span className="text-[10px] text-[#747775] ml-0.5">1</span>
                          <X className="w-3 h-3 text-[#747775] ml-1 hover:text-[#1f1f1f] cursor-pointer" />
                        </div>

                      </div>

                      {/* Zoom Toggle Pill Button */}
                      <button
                        onClick={() => setZoomEnabled(!zoomEnabled)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-[#444746] hover:text-[#1a73e8] bg-[#f0f4f9] hover:bg-[#e8f0fe] rounded-full transition-colors"
                        title={zoomEnabled ? "Ver tela completa sem zoom" : "Focar no componente"}
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

                    {/* Breadcrumbs row */}
                    <div className="px-4 py-2 text-[11px] text-[#747775] font-mono flex items-center gap-1.5 bg-white/70 border-t border-[#f1f3f4]">
                      <span>delphi</span>
                      <span>›</span>
                      <span>vcl</span>
                      <span>›</span>
                      <span className="text-[#1f1f1f] font-semibold">{activeComp.title}</span>
                    </div>

                  </div>

                  {/* Window Content: Zoomed GIF focusing on Delphi Component */}
                  <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] bg-[#fafafa] overflow-hidden flex items-center justify-center">
                    
                    {/* Linhas de código à esquerda estilo IDE */}
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

                    {/* GIF com enquadramento e zoom dinâmico por componente */}
                    <div className="w-full h-full overflow-hidden flex items-center justify-center pl-9">
                      <img
                        key={activeComp.id}
                        src={activeComp.gif}
                        alt={`${activeComp.title} Demonstration`}
                        className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 ease-out"
                        style={{
                          objectPosition: zoomEnabled ? activeComp.zoomPosition : 'center center',
                          transform: zoomEnabled ? `scale(${activeComp.zoomScale})` : 'scale(1)',
                          transformOrigin: zoomEnabled ? activeComp.zoomPosition : 'center center',
                        }}
                      />
                    </div>

                    {/* Badge de status flutuante inferior */}
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md border border-[#e3e3e3] px-3 py-1 rounded-full text-[11px] font-medium text-[#444746] shadow-sm flex items-center gap-1.5 z-10 pointer-events-none">
                      <span className="w-2 h-2 rounded-full bg-[#1e8e3e] animate-pulse" />
                      <span>{activeComp.statusText}</span>
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
