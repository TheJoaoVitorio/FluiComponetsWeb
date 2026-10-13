import { useState } from 'react';
import { Package, Copy, Check, Download, ExternalLink, FolderCheck, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';

interface GoogleInstallationProps {
  onTriggerToast: (title: string, message: string, type: 'ftSuccess' | 'ftError' | 'ftInfo' | 'ftWarning') => void;
}

export function GoogleInstallation({ onTriggerToast }: GoogleInstallationProps) {
  const [activeTab, setActiveTab] = useState<'dpk' | 'path' | 'repos'>('dpk');
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const handleCopy = (cmd: string, name: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.8 }
    });
    onTriggerToast('Copiado!', `${name} copiado para a área de transferência.`, 'ftSuccess');
    setTimeout(() => setCopiedCmd(null), 2500);
  };

  const repos = [
    {
      name: 'FluiToast4D',
      dpk: 'FluiToast4D.dpk',
      desc: 'Sistema de notificações Toast não-intrusivo com Fluent API',
      gitUrl: 'https://github.com/useflui/FluiToast4D.git',
      zipUrl: 'https://github.com/useflui/FluiToast4D/archive/refs/heads/main.zip',
      repoUrl: 'https://github.com/useflui/FluiToast4D'
    },
    {
      name: 'FluiEdit4D',
      dpk: 'FluiEdit4D.dpk',
      desc: 'Inputs modernos com máscaras inteligentes (CPF, CNPJ, Moeda R$)',
      gitUrl: 'https://github.com/useflui/FluiEdit4D.git',
      zipUrl: 'https://github.com/useflui/FluiEdit4D/archive/refs/heads/main.zip',
      repoUrl: 'https://github.com/useflui/FluiEdit4D'
    },
    {
      name: 'FluiPanel4D',
      dpk: 'FluiPanel4D.dpk',
      desc: 'Cards arredondados com Window Regions e BoxShadow gaussiano',
      gitUrl: 'https://github.com/useflui/FluiPanel4D.git',
      zipUrl: 'https://github.com/useflui/FluiPanel4D/archive/refs/heads/main.zip',
      repoUrl: 'https://github.com/useflui/FluiPanel4D'
    },
    {
      name: 'FluiCheckBox4D',
      dpk: 'FluiCheckBox4D.dpk',
      desc: 'Checkboxes vetoriais anti-aliased com estados suaves',
      gitUrl: 'https://github.com/useflui/FluiCheckBox4D.git',
      zipUrl: 'https://github.com/useflui/FluiCheckBox4D/archive/refs/heads/main.zip',
      repoUrl: 'https://github.com/useflui/FluiCheckBox4D'
    },
    {
      name: 'FluiComboBox4D',
      dpk: 'FluiComboBox4D.dpk',
      desc: 'Dropdowns modernos com suporte a TextHint e bordas GDI+',
      gitUrl: 'https://github.com/useflui/FluiComboBox4D.git',
      zipUrl: 'https://github.com/useflui/FluiComboBox4D/archive/refs/heads/main.zip',
      repoUrl: 'https://github.com/useflui/FluiComboBox4D'
    },
  ];

  return (
    <section id="installation" className="py-20 md:py-28 bg-white border-t border-[#e3e3e3]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold mb-3">
            <Package className="w-3.5 h-3.5" />
            Instalação Tradicional Delphi
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1f1f1f] font-google tracking-tight mb-3">
            Instale em minutos no Delphi IDE
          </h2>
          <p className="text-[#444746] text-sm sm:text-base leading-relaxed">
            Processo nativo padrão da VCL: abra o arquivo <span className="font-mono text-xs font-bold text-[#1f1f1f] bg-[#f0f4f9] px-2 py-0.5 rounded">.dpk</span>, compile o pacote, registre na paleta e aponte o Library Path.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex justify-center mb-10">
          <div className="google-pill-container">
            <button
              onClick={() => setActiveTab('dpk')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'dpk'
                  ? 'bg-[#1a73e8] text-white font-semibold shadow-sm'
                  : 'text-[#444746] hover:text-[#1f1f1f]'
              }`}
            >
              Passo a Passo (.DPK)
            </button>
            <button
              onClick={() => setActiveTab('path')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'path'
                  ? 'bg-[#1a73e8] text-white font-semibold shadow-sm'
                  : 'text-[#444746] hover:text-[#1f1f1f]'
              }`}
            >
              Configurar Library Path
            </button>
            <button
              onClick={() => setActiveTab('repos')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'repos'
                  ? 'bg-[#1a73e8] text-white font-semibold shadow-sm'
                  : 'text-[#444746] hover:text-[#1f1f1f]'
              }`}
            >
              Download dos Pacotes
            </button>
          </div>
        </div>

        {/* Tab 1: DPK Visual Step by Step */}
        {activeTab === 'dpk' && (
          <div className="google-card p-6 sm:p-10 bg-white border border-[#dadce0] shadow-sm space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#f1f3f4] gap-2">
              <div>
                <h3 className="font-bold text-lg text-[#1f1f1f] font-google">Instalação Visual via Pacote Delphi (.DPK)</h3>
                <p className="text-xs text-[#5f6368] mt-0.5">Compatível com Delphi XE até Delphi 12 Athens (Win32 & Win64).</p>
              </div>
              <span className="text-xs font-mono font-semibold text-[#1a73e8] bg-[#e8f0fe] px-3 py-1 rounded-full self-start sm:self-auto">
                Paleta: FLUI
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { 
                  step: '1', 
                  title: 'Baixe o repositório', 
                  desc: 'Faça o download do arquivo ZIP no GitHub do componente desejado ou clone para uma pasta em seu computador.',
                  tip: 'Exemplo: C:\\Components\\Flui\\FluiToast4D'
                },
                { 
                  step: '2', 
                  title: 'Abra o pacote no Delphi IDE', 
                  desc: 'No menu superior do Delphi, vá em File > Open Project e abra o arquivo com extensão .dpk do componente.',
                  tip: 'Exemplo: FluiToast4D.dpk'
                },
                { 
                  step: '3', 
                  title: 'Compile o pacote (Build)', 
                  desc: 'No Project Manager à direita, clique com o botão direito sobre o pacote e clique em "Build" (ou pressione Shift + F9).',
                  tip: 'Verifique se não há mensagens de erro de compilação.'
                },
                { 
                  step: '4', 
                  title: 'Instale na paleta (Install)', 
                  desc: 'Clique novamente com o botão direito no pacote e selecione "Install". Uma janela confirmará o registro na paleta FLUI.',
                  tip: 'O componente já ficará disponível na Tool Palette!'
                },
              ].map((s) => (
                <div key={s.step} className="p-5 rounded-2xl bg-[#f8f9fa] border border-[#e3e3e3] hover:border-[#dadce0] transition-colors flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-full bg-[#1a73e8] text-white flex items-center justify-center text-xs font-bold mb-3 shadow-2xs">
                      {s.step}
                    </div>
                    <h4 className="font-bold text-sm text-[#1f1f1f] mb-1.5">{s.title}</h4>
                    <p className="text-xs text-[#5f6368] leading-relaxed mb-3">{s.desc}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#e3e3e3] text-[11px] font-mono text-[#444746]">
                    {s.tip}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#e8f0fe] border border-[#c2e7ff] flex items-start gap-3">
              <FolderCheck className="w-5 h-5 text-[#1a73e8] flex-shrink-0 mt-0.5" />
              <div className="text-xs text-[#1f1f1f] leading-relaxed">
                <strong className="text-[#1a73e8] font-semibold">Importante:</strong> Após instalar o pacote, certifique-se de adicionar a pasta <code className="bg-white px-1.5 py-0.5 rounded font-mono text-[11px] font-bold text-[#1a73e8]">src</code> ao Library Path do Delphi para que seus projetos encontrem as units em tempo de compilação.
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Library Path Guide */}
        {activeTab === 'path' && (
          <div className="google-card p-6 sm:p-10 bg-white border border-[#dadce0] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#f1f3f4] gap-2">
              <div>
                <h3 className="font-bold text-lg text-[#1f1f1f] font-google">Configuração Essencial do Library Path</h3>
                <p className="text-xs text-[#5f6368] mt-0.5">Permite que o compilador do Delphi localize os arquivos .pas e .dcu em qualquer projeto.</p>
              </div>
              <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 self-start sm:self-auto">
                Recomendado
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4.5 rounded-2xl bg-[#f8f9fa] border border-[#e3e3e3] space-y-3">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#1a73e8] flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  Caminho no Delphi IDE
                </h4>
                <div className="p-3 bg-white border border-[#dadce0] rounded-xl font-mono text-xs text-[#1f1f1f] overflow-x-auto">
                  Tools &gt; Options &gt; Language &gt; Delphi &gt; Library &gt; Selected Platform &gt; Library Path
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-[#f8f9fa] border border-[#e3e3e3]">
                  <span className="text-xs font-bold text-[#1f1f1f] block mb-1">1. Escolha a Plataforma</span>
                  <p className="text-xs text-[#5f6368] leading-relaxed">
                    Selecione <strong>Windows 32-bit</strong> no seletor suspenso. Se compilar para 64-bit, repita o processo para <strong>Windows 64-bit</strong>.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#f8f9fa] border border-[#e3e3e3]">
                  <span className="text-xs font-bold text-[#1f1f1f] block mb-1">2. Abra o Editor de Path</span>
                  <p className="text-xs text-[#5f6368] leading-relaxed">
                    Localize a linha <strong>Library Path</strong> e clique no botão com reticências (<code className="bg-white px-1 py-0.5 rounded font-mono text-xs">...</code>) à direita.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#f8f9fa] border border-[#e3e3e3]">
                  <span className="text-xs font-bold text-[#1f1f1f] block mb-1">3. Adicione a Pasta \src</span>
                  <p className="text-xs text-[#5f6368] leading-relaxed">
                    Navegue até a pasta <code className="bg-white px-1 py-0.5 rounded font-mono text-xs">src</code> do componente Flui e clique em <strong>Add</strong> e depois em <strong>Save</strong>.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#f8f9fa] border border-[#e3e3e3]">
                <span className="text-xs font-bold text-[#1f1f1f] block mb-2">Exemplo de pastas a adicionar:</span>
                <div className="space-y-1.5 font-mono text-xs text-[#444746]">
                  <div className="p-2 bg-white rounded-lg border border-[#e3e3e3]">C:\Components\Flui\FluiToast4D\src</div>
                  <div className="p-2 bg-white rounded-lg border border-[#e3e3e3]">C:\Components\Flui\FluiEdit4D\src</div>
                  <div className="p-2 bg-white rounded-lg border border-[#e3e3e3]">C:\Components\Flui\FluiPanel4D\src</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Direct Repo Downloads */}
        {activeTab === 'repos' && (
          <div className="google-card p-6 sm:p-10 bg-white border border-[#dadce0] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#f1f3f4] gap-2">
              <div>
                <h3 className="font-bold text-lg text-[#1f1f1f] font-google">Download Direto dos Repositórios</h3>
                <p className="text-xs text-[#5f6368] mt-0.5">Baixe o arquivo ZIP completo ou copie o comando Git Clone de cada pacote.</p>
              </div>
              <a
                href="https://github.com/useflui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#1a73e8] hover:underline flex items-center gap-1 font-medium self-start sm:self-auto"
              >
                <span>useflui no GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="space-y-3">
              {repos.map((pkg) => (
                <div
                  key={pkg.name}
                  className="p-4 rounded-2xl bg-[#f8f9fa] border border-[#e3e3e3] flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#dadce0] transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-[#1f1f1f]">{pkg.name}</span>
                      <span className="text-[11px] font-mono text-[#1a73e8] bg-[#e8f0fe] px-2 py-0.5 rounded-full">{pkg.dpk}</span>
                    </div>
                    <span className="text-xs text-[#5f6368] mt-0.5 block">{pkg.desc}</span>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap flex-shrink-0">
                    <button
                      onClick={() => handleCopy(`git clone ${pkg.gitUrl}`, `Git Clone ${pkg.name}`)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#dadce0] hover:border-[#1a73e8] text-xs font-mono text-[#1f1f1f] transition-all shadow-2xs group"
                      title="Copiar comando git clone"
                    >
                      {copiedCmd === `git clone ${pkg.gitUrl}` ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#747775] group-hover:text-[#1a73e8]" />
                          <span>git clone</span>
                        </>
                      )}
                    </button>

                    <a
                      href={pkg.zipUrl}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-medium transition-colors shadow-2xs"
                      title="Download ZIP direto"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Baixar .ZIP</span>
                    </a>

                    <a
                      href={pkg.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-[#747775] hover:text-[#1f1f1f] hover:bg-black/5 transition-colors"
                      title="Abrir no GitHub"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
