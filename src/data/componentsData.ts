import type { FluiComponentInfo } from '../types';

export const FLUI_COMPONENTS: FluiComponentInfo[] = [
  {
    id: 'flui-toast',
    name: 'FluiToast4D',
    repoName: 'FluiToast4D',
    badge: 'Fluent Notification Engine',
    tagline: 'Notificações elegantes, não intrusivas e 100% fluidas para Delphi VCL.',
    description: 'Sistema completo de notificações Toast com empilhamento inteligente, renderização suave em GDI+, cálculo responsivo de altura, suporte a ícones e imagens personalizadas e uma Fluent API limpa e expressiva.',
    githubUrl: 'https://github.com/useflui/FluiToast4D',
    stars: 7,
    forks: 2,
    demoGif: '/assets/toast-demo.gif',
    features: [
      'Fluent API moderna (TFluiToast.New...Show)',
      'Renderização anti-aliased suave via GDI+',
      'Empilhamento inteligente de múltiplos toasts sem sobreposição',
      'Altura responsiva ao tamanho da mensagem',
      'Suporte a ícones customizados (PNG, JPEG, TPicture)',
      'Ações interativas via callbacks no clique do toast',
      'Presets visuais: Sucesso, Erro, Aviso e Informação'
    ],
    properties: [
      { name: 'Title', type: 'string', default: "''", description: 'Título principal da notificação' },
      { name: 'Message', type: 'string', default: "''", description: 'Mensagem explicativa com auto-wrap e auto-height' },
      { name: 'ToastType', type: 'TFluiToastType', default: 'ftSuccess', description: 'ftSuccess, ftError, ftWarning, ftInfo ou ftCustom' },
      { name: 'Position', type: 'TFluiToastPosition', default: 'ftpBottomRight', description: 'Canto onde o toast aparecerá e empilhará' },
      { name: 'Duration', type: 'Integer', default: '4000', description: 'Tempo em milissegundos antes do dismiss automático' }
    ],
    delphiCode: {
      fluent: `uses
  FluiToast, FluiToast.Types;

// Notificação de Sucesso com Fluent API
procedure TForm1.SalvarRegistro;
begin
  TFluiToast.New
    .Title('Salvo com êxito')
    .Message('O registro foi gravado no banco de dados com sucesso.')
    .ToastType(ftSuccess)
    .Position(ftpBottomRight)
    .Duration(4000)
    .Show;
end;`,
      component: `// Configuração em Design-Time via Object Inspector:
FluiToast1.Title := 'Atenção';
FluiToast1.Message := 'Sessão expirará em 5 minutos.';
FluiToast1.ToastType := ftWarning;
FluiToast1.Duration := 5000;
FluiToast1.Show;`,
      description: 'Chame notificações em qualquer lugar do seu código com apenas 5 linhas expressivas.'
    },
    highlights: [
      { icon: 'Zap', title: 'Zero Bloqueio', desc: 'Ao contrário do ShowMessage, não bloqueia o fluxo de trabalho do operador.' },
      { icon: 'Layers', title: 'Smart Stacking', desc: 'Gerenciador que organiza e empilha várias notificações na tela simultaneamente.' },
      { icon: 'Sparkles', title: 'GDI+ Curves', desc: 'Curvas com suavização anti-aliasing perfeitas no Windows 10 e 11.' }
    ]
  },
  {
    id: 'flui-edit',
    name: 'FluiEdit4D',
    repoName: 'FluiEdit4D',
    badge: 'Smart Input & Mask System',
    tagline: 'O componente de input moderno que a VCL sempre mereceu.',
    description: 'Caixa de texto moderna para Delphi VCL com suporte a GDI+, máscaras inteligentes automáticas (CPF, CNPJ, Moeda, Telefone), estilos Outline/Material com rótulos flutuantes, ícones internos e helper text com validação.',
    githubUrl: 'https://github.com/useflui/FluiEdit4D',
    stars: 4,
    forks: 1,
    demoGif: '/assets/edit-demo.gif',
    features: [
      'Estilos visuais fsNormal, fsLabelOnTop e fsOutline (Material floating)',
      'Máscaras dinâmicas inteligentes (CPF, CNPJ, Moeda R$, Telefone, Data)',
      'InnerIcon interno à esquerda ou direita (PNG com transparência)',
      'HelperText inferior com alinhamento e cores para avisos e validação',
      'TextHint com ajuste de opacidade via GDI+',
      'FocusedColor dinâmico com transição visual elegante',
      'Cantos arredondados configuráveis (Rounding)'
    ],
    properties: [
      { name: 'Style', type: 'TFluiEditStyle', default: 'fsNormal', description: 'fsNormal, fsLabelOnTop, fsOutline (estilo flutuante moderno)' },
      { name: 'Rounding', type: 'Integer', default: '8', description: 'Raio de arredondamento das bordas desenhadas em GDI+' },
      { name: 'BorderColor', type: 'TColor', default: '$00D8D8D8', description: 'Cor da borda em estado normal/repouso' },
      { name: 'FocusedColor', type: 'TColor', default: '$00FF8000', description: 'Cor viva de destaque quando o campo ganha o foco' },
      { name: 'MaskType', type: 'TFluiMaskType', default: 'fmtNone', description: 'fmtCPF, fmtCNPJ, fmtPhone, fmtCurrency, fmtDate, fmtEmail' },
      { name: 'InnerIcon.Picture', type: 'TPicture', default: 'nil', description: 'Ícone embutido dentro da área do Edit' }
    ],
    delphiCode: {
      fluent: `with FluiEditCPF do
begin
  Style := fsOutline;
  LabelCaption := 'CPF do Cliente';
  MaskType := fmtCPF;
  Rounding := 10;
  FocusedColor := $00E8731A; // Azul Gemini / Material
  HelperText.Text := 'Digite apenas números';
  HelperText.Visible := True;
end;`,
      component: `object FluiEditValor: TFluiEdit
  Left = 32
  Top = 64
  Width = 260
  Height = 48
  Style = fsOutline
  LabelCaption = 'Valor da Parcela (R$)'
  Rounding = 12
  MaskType = fmtCurrency
  FocusedColor = 15309826
  TextHint = '0,00'
end`,
      description: 'Transforme formulários pesados em interfaces leves e amigáveis para o usuário.'
    },
    highlights: [
      { icon: 'CreditCard', title: 'Máscara em Tempo Real', desc: 'Moeda R$, CPF, CNPJ e telefone formatam enquanto o usuário digita.' },
      { icon: 'Smile', title: 'Inner Icons', desc: 'Coloque ícones de busca, cadeado, email e calendário direto no input.' },
      { icon: 'Sliders', title: 'Estilo Outline', desc: 'Rótulo cortado na borda superior igual ao Google Material You.' }
    ]
  },
  {
    id: 'flui-panel',
    name: 'FluiPanel4D',
    repoName: 'FluiPanel4D',
    badge: 'Modern Card & Real Clipping',
    tagline: 'Cards com sombras externas e internas, gradientes e Window Regions.',
    description: 'Painel arredondado de alta performance para Delphi VCL. Utiliza GDI+ para traços impecáveis e Window Regions para clipping real, impedindo que botões e grids vazem pelos cantos arredondados.',
    githubUrl: 'https://github.com/useflui/FluiPanel4D',
    stars: 4,
    forks: 0,
    demoGif: '/assets/panel-demo.gif',
    features: [
      'Clipping Real (Window Regions) que corta controles filhos nas quinas',
      'Seleção individual de cantos: TopLeft, TopRight, BottomLeft, BottomRight',
      'BoxShadow externo (Drop Shadow) e interno (Inner Shadow)',
      'Suporte a gradientes lineares no fundo e na borda',
      'Totalmente compatível com Align, Anchors e Padding do VCL',
      'Visualização fiel em Design-Time no Delphi IDE',
      'Zero flickering com buffer duplo nativo'
    ],
    properties: [
      { name: 'Corners', type: 'TFluiCorners', default: '[fcTopLeft..fcBottomRight]', description: 'Quais cantos aplicar o arredondamento' },
      { name: 'Rounding', type: 'Integer', default: '12', description: 'Raio de curvatura dos cantos selecionados' },
      { name: 'DropShadow', type: 'TFluiShadow', default: 'Visible = True', description: 'Configuração de desfoque, distância, cor e opacidade' },
      { name: 'Gradient', type: 'TFluiGradient', default: 'Enabled = False', description: 'Gradiente linear com ângulo e cor inicial/final' },
      { name: 'BorderColor', type: 'TColor', default: '$00E2E8F0', description: 'Cor e espessura do contorno perimetral' }
    ],
    delphiCode: {
      fluent: `FluiCard := TFluiPanel.Create(Self);
with FluiCard do
begin
  Parent := Self;
  Width := 340;
  Height := 220;
  Rounding := 16;
  Corners := [fcTopLeft, fcTopRight, fcBottomRight, fcBottomLeft];
  Color := clWhite;
  DropShadow.Enabled := True;
  DropShadow.Blur := 15;
  DropShadow.Distance := 6;
  DropShadow.Opacity := 40;
end;`,
      component: `object FluiPanelHeader: TFluiPanel
  Left = 0
  Top = 0
  Width = 800
  Height = 80
  Align = alTop
  Rounding = 20
  Corners = [fcBottomLeft, fcBottomRight]
  Color = 16777215
  BorderColor = 14474460
end`,
      description: 'Ideal para construir dashboards modernos, cards de métricas e menus suspensos no Delphi.'
    },
    highlights: [
      { icon: 'Shield', title: 'Clipping Real', desc: 'Evita a clássica falha do Delphi onde componentes vazam nas quinas arredondadas.' },
      { icon: 'Sun', title: 'Drop & Inner Shadow', desc: 'Profundidade tridimensional calculada com algoritmo de blur gaussiano.' },
      { icon: 'Palette', title: 'Cantos Seletivos', desc: 'Arredonde apenas o topo para cabeçalhos ou apenas a base para rodapés.' }
    ]
  },
  {
    id: 'flui-checkbox',
    name: 'FluiCheckBox4D',
    repoName: 'FluiCheckBox4D',
    badge: 'Smooth Toggle & Check',
    tagline: 'Checkboxes e switches com desenho suave e estados vibrantes.',
    description: 'Componente de seleção moderno para Delphi VCL com renderização anti-aliased GDI+, cantos configuráveis, gradientes no fundo e posicionamento flexível do rótulo.',
    githubUrl: 'https://github.com/useflui/FluiCheckBox4D',
    stars: 1,
    forks: 0,
    features: [
      'Renderização GDI+ sem serrilhado',
      'Arredondamento customizável (de quadrado suave a circular)',
      'Suporte a gradientes de fundo no estado desmarcado',
      'Posicionamento de Label em 4 direções (Top, Bottom, Left, Right)',
      'Controle refinado de cores (Border, Checked, Hover, Checkmark)',
      'Feedback visual agradável ao passar o mouse'
    ],
    properties: [
      { name: 'Checked', type: 'Boolean', default: 'False', description: 'Estado atual de seleção do checkbox' },
      { name: 'Rounding', type: 'Integer', default: '6', description: 'Raio de curvatura da caixinha de marcação' },
      { name: 'CheckedColor', type: 'TColor', default: '$00E8731A', description: 'Cor de preenchimento quando marcado' },
      { name: 'CheckmarkColor', type: 'TColor', default: 'clWhite', description: 'Cor do ícone de check desenhado' },
      { name: 'LabelPosition', type: 'TFluiLabelPosition', default: 'lpRight', description: 'Posição do texto (lpLeft, lpRight, lpTop, lpBottom)' }
    ],
    delphiCode: {
      fluent: `with FluiCheckBox1 do
begin
  Caption := 'Habilitar Notificações em Tempo Real';
  Checked := True;
  Rounding := 6;
  CheckedColor := $00E8731A; // Google Blue
  BorderColor := $00D1D5DB;
end;`,
      component: `object FluiCheckBoxLembrar: TFluiCheckBox
  Left = 40
  Top = 180
  Width = 200
  Height = 28
  Caption = 'Lembrar de mim neste dispositivo'
  Rounding = 8
  Checked = True
  CheckedColor = 16024130
end`,
      description: 'Diga adeus à caixa cinza padrão do Windows 95 e traga modernidade aos seus formulários.'
    },
    highlights: [
      { icon: 'CheckCircle2', title: 'GDI+ Vector Check', desc: 'Ícone de check nítido desenhado com precisão vetorial subpixel.' },
      { icon: 'Compass', title: 'Rótulo em 4 Lados', desc: 'Posicione o texto em cima, embaixo, à esquerda ou à direita livremente.' },
      { icon: 'Cpu', title: 'Super Leve', desc: 'Consumo mínimo de recursos com desempenho instantâneo.' }
    ]
  },
  {
    id: 'flui-combobox',
    name: 'FluiComboBox4D',
    repoName: 'FluiComboBox4D',
    badge: 'Modern Select & Dropdown',
    tagline: 'Seleção elegante com busca inteligente e visual limpo.',
    description: 'Dropdown moderno para Delphi VCL que substitui o TComboBox tradicional por um controle com bordas arredondadas GDI+, suporte a texto de dica (placeholder), cores de foco e popup estilizável.',
    githubUrl: 'https://github.com/useflui/FluiComboBox4D',
    stars: 2,
    forks: 0,
    features: [
      'Design moderno alinhado com FluiEdit e FluiPanel',
      'Bordas arredondadas com antialiasing via GDI+',
      'TextHint / Placeholder elegante quando nada selecionado',
      'Destaque no foco com FocusedColor customizável',
      'Suporte a listas dinâmicas e busca rápida',
      'Visual nativo que não depende de skins pesadas'
    ],
    properties: [
      { name: 'Rounding', type: 'Integer', default: '8', description: 'Arredondamento dos cantos' },
      { name: 'BorderColor', type: 'TColor', default: '$00D8D8D8', description: 'Cor da borda em repouso' },
      { name: 'FocusedColor', type: 'TColor', default: '$00E8731A', description: 'Cor da borda ao focar ou abrir' },
      { name: 'TextHint', type: 'string', default: "'Selecione uma opção...'", description: 'Placeholder exibido' }
    ],
    delphiCode: {
      fluent: `with FluiComboBox1 do
begin
  TextHint := 'Selecione o Estado (UF)';
  Rounding := 10;
  FocusedColor := $00E8731A;
  Items.Add('SP - São Paulo');
  Items.Add('RJ - Rio de Janeiro');
  ItemIndex := 0;
end;`,
      component: `object FluiComboPlano: TFluiComboBox
  Left = 32
  Top = 120
  Width = 260
  Height = 44
  Rounding = 10
  TextHint = 'Escolha a opção...'
  FocusedColor = 15309826
end`,
      description: 'O substituto definitivo para o TComboBox tradicional do Delphi.'
    },
    highlights: [
      { icon: 'Search', title: 'Busca e Filtragem', desc: 'Experiência ágil para localização de registros em listas grandes.' },
      { icon: 'Layout', title: 'Harmonia Total', desc: 'Mesmo raio de arredondamento e padrão de cores de toda a suíte Flui.' },
      { icon: 'Check', title: 'Pronto para Produção', desc: 'Testado em ambientes corporativos de alta demanda.' }
    ]
  }
];

export const COMPARISON_DATA = [
  {
    feature: 'Renderização Visual',
    delphiStandard: 'GDI clássico legado (bordas serrilhadas, aspecto Windows 98/XP)',
    flui4d: 'GDI+ vetorial com Anti-Aliasing suave e subpixel rendering'
  },
  {
    feature: 'Bordas Arredondadas',
    delphiStandard: 'Limitado a 90 graus retos ou formas rústicas com falhas visuais',
    flui4d: 'Rounding configurável de 0 a 100px com cantos individuais independentes'
  },
  {
    feature: 'Sombras e Elevação',
    delphiStandard: 'Inexistente nativamente sem skins de terceiros que pesam o EXE',
    flui4d: 'BoxShadow com desfoque gaussiano, distância e opacidade personalizáveis'
  },
  {
    feature: 'Clipping de Controles Filhos',
    delphiStandard: 'Controles vazam por cima das curvas do painel',
    flui4d: 'Window Regions com clipping real que corta os filhos exatamente na curva'
  },
  {
    feature: 'Notificações (Toasts)',
    delphiStandard: 'ShowMessage / MessageDlg bloqueia o fluxo e paralisa o operador',
    flui4d: 'TFluiToast não-intrusivo com Fluent API e empilhamento automático na tela'
  },
  {
    feature: 'Máscaras e Entradas',
    delphiStandard: 'TMaskEdit rígido que causa erros chatos de digitação',
    flui4d: 'Máscaras fluidas dinâmicas em tempo real (CPF, CNPJ, Moeda R$, Telefone)'
  },
  {
    feature: 'Dependências',
    delphiStandard: 'Componentes pesados exigem DLLs e skins proprietárias',
    flui4d: '100% Nativo Delphi VCL, utilizando apenas bibliotecas padrão do Windows'
  }
];

export const FAQS = [
  {
    q: 'O Flui Components funciona em quais versões do Delphi?',
    a: 'O Flui é compatível com o Delphi VCL desde as versões XE até a mais recente Delphi 12 Athens (12.x), suportando compilação tanto em 32-bit (Win32) quanto em 64-bit (Win64).'
  },
  {
    q: 'Como é feita a instalação dos componentes no Delphi?',
    a: 'A instalação é feita pelo método tradicional: basta abrir o pacote .dpk no Delphi IDE, clicar com o botão direito no Project Manager e selecionar Build, depois Install. Por fim, adicione a pasta src ao Library Path em Tools > Options > Library.'
  },
  {
    q: 'Preciso distribuir DLLs extras junto com o executável?',
    a: 'Não! O Flui utiliza a biblioteca GDI+ (gdiplus.dll), que já faz parte de todas as versões do Windows moderno. Seu executável continua sendo um único arquivo .EXE independente.'
  },
  {
    q: 'O Flui suporta telas High DPI (monitores 2K e 4K)?',
    a: 'Sim. Por utilizar primitivas vetoriais em GDI+, os componentes recalculam seus raios, bordas e ícones mantendo máxima nitidez mesmo em escalas de 125%, 150% ou 200% do Windows.'
  },
  {
    q: 'A biblioteca é gratuita para uso comercial?',
    a: 'Sim! Todos os repositórios da organização Flui são disponibilizados sob a licença de código aberto MIT, permitindo uso livre em projetos comerciais e pessoais sem royalties.'
  }
];
