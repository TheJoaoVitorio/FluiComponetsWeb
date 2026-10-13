import { useState } from 'react';
import { 
  Sparkles, 
  Copy, 
  Check, 
  Sliders, 
  Code2, 
  BellRing
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { ToastType } from '../types';

interface GooglePlaygroundProps {
  onTriggerToast: (title: string, message: string, type: ToastType) => void;
}

export function GooglePlayground({ onTriggerToast }: GooglePlaygroundProps) {
  const [activeTab, setActiveTab] = useState<'toast' | 'edit' | 'panel' | 'checkbox'>('toast');
  const [copiedCode, setCopiedCode] = useState(false);

  // Toast state
  const [toastTitle, setToastTitle] = useState('Salvo com êxito');
  const [toastMessage, setToastMessage] = useState('O registro foi gravado no banco de dados com sucesso.');
  const [toastType, setToastType] = useState<ToastType>('ftSuccess');
  const [toastDuration, setToastDuration] = useState(4000);

  // Edit state
  const [editStyle, setEditStyle] = useState<'fsOutline' | 'fsLabelOnTop' | 'fsNormal'>('fsOutline');
  const [editLabel, setEditLabel] = useState('CPF do Titular');
  const [editMask, setEditMask] = useState<'fmtCPF' | 'fmtCNPJ' | 'fmtCurrency' | 'fmtPhone'>('fmtCPF');
  const [editRounding, setEditRounding] = useState(10);
  const [editValue, setEditValue] = useState('123.456.789-00');

  // Panel state
  const [panelRounding, setPanelRounding] = useState(16);
  const [panelShadow, setPanelShadow] = useState(true);

  // Checkbox state
  const [checkedState, setCheckedState] = useState(true);
  const [checkRounding, setCheckRounding] = useState(6);

  const handleFireToast = () => {
    onTriggerToast(toastTitle, toastMessage, toastType);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.85, x: 0.85 }
    });
  };

  const getPascalCode = () => {
    switch (activeTab) {
      case 'toast':
        return `uses
  FluiToast, FluiToast.Types;

procedure TForm1.SalvarRegistro;
begin
  TFluiToast.New
    .Title('${toastTitle}')
    .Message('${toastMessage}')
    .ToastType(${toastType})
    .Position(ftpBottomRight)
    .Duration(${toastDuration})
    .Show;
end;`;
      case 'edit':
        return `// Configuração do FluiEdit4D
with FluiEdit1 do
begin
  Style := ${editStyle};
  LabelCaption := '${editLabel}';
  MaskType := ${editMask};
  Rounding := ${editRounding};
  FocusedColor := $00E8731A; // Google Blue
  HelperText.Text := 'Validado';
  HelperText.Visible := True;
end;`;
      case 'panel':
        return `// Configuração do FluiPanel4D
with FluiPanel1 do
begin
  Rounding := ${panelRounding};
  Corners := [fcTopLeft, fcTopRight, fcBottomRight, fcBottomLeft];
  DropShadow.Enabled := ${panelShadow ? 'True' : 'False'};
  DropShadow.Blur := 15;
  Color := clWhite;
end;`;
      case 'checkbox':
        return `with FluiCheckBox1 do
begin
  Caption := 'Habilitar Notificações em Tempo Real';
  Checked := ${checkedState ? 'True' : 'False'};
  Rounding := ${checkRounding};
  CheckedColor := $00E8731A;
end;`;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getPascalCode());
    setCopiedCode(true);
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.7 }
    });
    onTriggerToast('Código Copiado!', 'Snippet Pascal copiado para uso no Delphi.', 'ftSuccess');
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <section id="playground" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Playground Interativo
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1f1f1f] font-google tracking-tight mb-3">
            Experimente no seu navegador
          </h2>
          <p className="text-[#444746] text-sm sm:text-base leading-relaxed">
            Manipule os parâmetros visuais e veja a renderização e o código Pascal sendo gerados em tempo real.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex justify-center mb-8">
          <div className="google-pill-container">
            {[
              { id: 'toast', label: 'FluiToast4D' },
              { id: 'edit', label: 'FluiEdit4D' },
              { id: 'panel', label: 'FluiPanel4D' },
              { id: 'checkbox', label: 'FluiCheckBox4D' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#1a73e8] text-white font-semibold shadow-sm'
                    : 'text-[#444746] hover:text-[#1f1f1f]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Studio Box (Clean Google Cloud Theme) */}
        <div className="google-card p-6 sm:p-10 shadow-sm border border-[#dadce0] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#f1f3f4]">
              <span className="font-semibold text-sm text-[#1f1f1f] flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#1a73e8]" />
                Propriedades no Delphi
              </span>
              <span className="text-[11px] font-mono text-[#5f6368] bg-[#f0f4f9] px-2 py-0.5 rounded">
                Object Inspector
              </span>
            </div>

            {/* Toast Controls */}
            {activeTab === 'toast' && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-[#444746] block mb-1">Título:</label>
                  <input
                    type="text"
                    value={toastTitle}
                    onChange={(e) => setToastTitle(e.target.value)}
                    className="w-full bg-[#f8f9fa] border border-[#dadce0] rounded-xl px-3 py-2 text-xs text-[#1f1f1f] focus:outline-none focus:border-[#1a73e8]"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-[#444746] block mb-1">Mensagem:</label>
                  <input
                    type="text"
                    value={toastMessage}
                    onChange={(e) => setToastMessage(e.target.value)}
                    className="w-full bg-[#f8f9fa] border border-[#dadce0] rounded-xl px-3 py-2 text-xs text-[#1f1f1f] focus:outline-none focus:border-[#1a73e8]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-[#444746] block mb-1">ToastType:</label>
                    <select
                      value={toastType}
                      onChange={(e) => setToastType(e.target.value as any)}
                      className="w-full bg-[#f8f9fa] border border-[#dadce0] rounded-xl px-3 py-2 text-xs text-[#1f1f1f] focus:outline-none focus:border-[#1a73e8]"
                    >
                      <option value="ftSuccess">ftSuccess</option>
                      <option value="ftError">ftError</option>
                      <option value="ftWarning">ftWarning</option>
                      <option value="ftInfo">ftInfo</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#444746] block mb-1">Duração:</label>
                    <select
                      value={toastDuration}
                      onChange={(e) => setToastDuration(Number(e.target.value))}
                      className="w-full bg-[#f8f9fa] border border-[#dadce0] rounded-xl px-3 py-2 text-xs text-[#1f1f1f] focus:outline-none focus:border-[#1a73e8]"
                    >
                      <option value="3000">3 segundos</option>
                      <option value="4000">4 segundos</option>
                      <option value="6000">6 segundos</option>
                    </select>
                  </div>
                </div>
                <button
                  onClick={handleFireToast}
                  className="w-full py-2.5 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <BellRing className="w-3.5 h-3.5" />
                  Disparar TFluiToast.New.Show
                </button>
              </div>
            )}

            {/* Edit Controls */}
            {activeTab === 'edit' && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-[#444746] block mb-1">Rótulo (LabelCaption):</label>
                  <input
                    type="text"
                    value={editLabel}
                    onChange={(e) => setEditLabel(e.target.value)}
                    className="w-full bg-[#f8f9fa] border border-[#dadce0] rounded-xl px-3 py-2 text-xs text-[#1f1f1f] focus:outline-none focus:border-[#1a73e8]"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#444746] block mb-1">Estilo Visual:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['fsOutline', 'fsLabelOnTop', 'fsNormal'].map((s) => (
                      <button
                        key={s}
                        onClick={() => setEditStyle(s as any)}
                        className={`py-2 text-xs rounded-xl border transition-all ${
                          editStyle === s
                            ? 'bg-[#e8f0fe] border-[#1a73e8] text-[#1a73e8] font-semibold'
                            : 'bg-[#f8f9fa] border-[#dadce0] text-[#444746]'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-[#444746] block mb-1">Máscara (MaskType):</label>
                  <select
                    value={editMask}
                    onChange={(e) => {
                      const m = e.target.value as any;
                      setEditMask(m);
                      if (m === 'fmtCPF') setEditValue('123.456.789-00');
                      if (m === 'fmtCNPJ') setEditValue('12.345.678/0001-90');
                      if (m === 'fmtCurrency') setEditValue('R$ 1.850,00');
                      if (m === 'fmtPhone') setEditValue('(11) 98765-4321');
                    }}
                    className="w-full bg-[#f8f9fa] border border-[#dadce0] rounded-xl px-3 py-2 text-xs text-[#1f1f1f] focus:outline-none focus:border-[#1a73e8]"
                  >
                    <option value="fmtCPF">fmtCPF</option>
                    <option value="fmtCNPJ">fmtCNPJ</option>
                    <option value="fmtCurrency">fmtCurrency (R$)</option>
                    <option value="fmtPhone">fmtPhone</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-[#444746] mb-1">
                    <span>Arredondamento (Rounding):</span>
                    <span className="font-semibold text-[#1a73e8]">{editRounding} px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={editRounding}
                    onChange={(e) => setEditRounding(Number(e.target.value))}
                    className="w-full accent-[#1a73e8]"
                  />
                </div>
              </div>
            )}

            {/* Panel Controls */}
            {activeTab === 'panel' && (
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs text-[#444746] mb-1">
                    <span>Arredondamento:</span>
                    <span className="font-semibold text-[#1a73e8]">{panelRounding} px</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="32"
                    value={panelRounding}
                    onChange={(e) => setPanelRounding(Number(e.target.value))}
                    className="w-full accent-[#1a73e8]"
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-[#444746] pt-2">
                  <span>Sombra Externa (DropShadow):</span>
                  <input
                    type="checkbox"
                    checked={panelShadow}
                    onChange={(e) => setPanelShadow(e.target.checked)}
                    className="w-4 h-4 accent-[#1a73e8]"
                  />
                </div>
              </div>
            )}

            {/* Checkbox Controls */}
            {activeTab === 'checkbox' && (
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs text-[#444746] mb-1">
                    <span>Raio da Caixa:</span>
                    <span className="font-semibold text-[#1a73e8]">{checkRounding} px</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="12"
                    value={checkRounding}
                    onChange={(e) => setCheckRounding(Number(e.target.value))}
                    className="w-full accent-[#1a73e8]"
                  />
                </div>
              </div>
            )}

          </div>

          {/* Visual Display & Code Output */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Visual Screen Box (Clean Light Delphi Window) */}
            <div className="bg-[#f8f9fa] border border-[#dadce0] rounded-2xl p-6 sm:p-8 min-h-[260px] flex items-center justify-center">
              
              {activeTab === 'toast' && (
                <div className="bg-white border border-[#dadce0] rounded-2xl p-4 shadow-lg max-w-sm w-full flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#e6f4ea] text-[#137333] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-sm text-[#1f1f1f]">{toastTitle}</div>
                    <div className="text-xs text-[#444746] mt-0.5">{toastMessage}</div>
                  </div>
                </div>
              )}

              {activeTab === 'edit' && (
                <div className="w-full max-w-xs relative">
                  {editStyle === 'fsOutline' && (
                    <span className="absolute -top-2.5 left-3 px-1.5 bg-[#f8f9fa] text-[11px] font-semibold text-[#1a73e8]">
                      {editLabel}
                    </span>
                  )}
                  <div 
                    className="bg-white border-2 border-[#1a73e8] px-3.5 py-2.5 shadow-sm"
                    style={{ borderRadius: `${editRounding}px` }}
                  >
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="w-full bg-transparent text-sm text-[#1f1f1f] focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'panel' && (
                <div
                  className="bg-white p-6 border border-[#dadce0] w-full max-w-sm transition-all"
                  style={{
                    borderRadius: `${panelRounding}px`,
                    boxShadow: panelShadow ? '0 10px 25px rgba(0,0,0,0.08)' : 'none'
                  }}
                >
                  <div className="text-xs font-bold text-[#1f1f1f] mb-1">TFluiPanel</div>
                  <div className="text-xs text-[#5f6368]">Clipping real ativo sem vazamento nas quinas.</div>
                </div>
              )}

              {activeTab === 'checkbox' && (
                <div 
                  onClick={() => setCheckedState(!checkedState)}
                  className="cursor-pointer flex items-center gap-3 p-3 bg-white border border-[#dadce0] rounded-xl shadow-sm"
                >
                  <div 
                    className={`w-5 h-5 flex items-center justify-center border transition-colors ${
                      checkedState ? 'bg-[#1a73e8] border-[#1a73e8] text-white' : 'border-[#747775] bg-white'
                    }`}
                    style={{ borderRadius: `${checkRounding}px` }}
                  >
                    {checkedState && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span className="text-xs font-medium text-[#1f1f1f]">
                    Habilitar Notificações em Tempo Real
                  </span>
                </div>
              )}

            </div>

            {/* Generated Pascal Code Box */}
            <div className="bg-[#f8f9fa] border border-[#dadce0] rounded-2xl p-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#e3e3e3] mb-2">
                <span className="text-xs font-mono text-[#5f6368] flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-[#1a73e8]" />
                  Código Delphi Pascal
                </span>
                <button
                  onClick={handleCopy}
                  className="text-xs font-medium text-[#1a73e8] hover:text-[#1557b0] flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-[#dadce0] shadow-2xs"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copiado!' : 'Copiar'}</span>
                </button>
              </div>
              <pre className="text-xs font-mono text-[#1f1f1f] leading-relaxed overflow-x-auto p-1">
                <code>{getPascalCode()}</code>
              </pre>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
