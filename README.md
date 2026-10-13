# Flui Components Web (Flui4D) 🚀

Website oficial moderno da suíte de componentes visuais para **Delphi VCL** — **Flui Components / Flui4D**.

Construído com base no **System Design do Google Gemini Subscriptions** e **Google Antigravity**, priorizando uma estética limpa, tipografia Google Sans/Inter, bordas sutis e modo claro de alta fidelidade.

---

## 📦 Sobre a Suíte Flui4D

O **Flui Components** é um ecossistema de componentes nativos para **Delphi VCL** (Delphi XE até Delphi 12 Athens, Win32/Win64), desenvolvido para transformar a experiência visual de aplicações legadas e novos softwares sem depender de DLLs externas ou skins pesadas.

- **FluiToast4D**: Notificações fluidas, não intrusivas e empilháveis com Fluent API (`TFluiToast.New...Show`).
- **FluiEdit4D**: Inputs modernos estilo Outline/Material com máscaras dinâmicas em tempo real (CPF, CNPJ, Moeda R$, Telefone) e ícones internos.
- **FluiPanel4D**: Cards e painéis arredondados com recorte real via Window Regions e sombras gaussianas (BoxShadow).
- **FluiCheckBox4D**: Caixas de seleção vetoriais sem serrilhado via GDI+.
- **FluiComboBox4D**: Dropdowns modernos com suporte a TextHint e bordas suaves.

Repositórios oficiais da organização: [github.com/useflui](https://github.com/useflui)

---

## 🛠️ Instalação Tradicional no Delphi IDE (.DPK)

A instalação dos componentes é feita pelo método visual tradicional da VCL:

1. **Download do Repositório**: Baixe o `.ZIP` ou faça `git clone` do componente desejado em [useflui](https://github.com/useflui).
2. **Abra o Pacote**: No Delphi IDE, vá em `File > Open Project` e selecione o arquivo `.dpk` (ex: `FluiToast4D.dpk`).
3. **Compile (Build)**: No Project Manager, clique com o botão direito no pacote e selecione **Build** (`Shift + F9`).
4. **Instale (Install)**: Clique com o botão direito e selecione **Install** para registrar na paleta `FLUI`.
5. **Configure o Library Path**:
   - Vá em `Tools > Options > Language > Delphi > Library`.
   - Selecione a plataforma (`Windows 32-bit` / `Windows 64-bit`).
   - No **Library Path**, adicione o caminho da pasta `\src` do componente.

---

## 💻 Tecnologias do Website

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Lucide Icons**
- **Canvas Confetti**

---

## 🚀 Como Executar o Projeto Web

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento local
npm run dev

# Compilar para produção
npm run build

# Pré-visualizar build de produção
npm run preview
```

---

## 📄 Licença

Distribuído sob a licença **MIT**. Veja o arquivo LICENSE nos repositórios para mais detalhes.
