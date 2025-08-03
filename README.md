# Flowlytics LP

![Flowlytics LP Screenshot](/public/assets/doc.png)

Uma landing page moderna e responsiva desenvolvida com Next.js 15, React 19 e Tailwind CSS 4. Este projeto serve como um template reutilizável para futuras aplicações, demonstrando boas práticas de desenvolvimento frontend.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Framework CSS utilitário
- **React Icons** - Biblioteca de ícones
- **ESLint** - Linter para qualidade de código

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn

## 🔧 Instalação

1. **Clone o repositório**

   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd flowlytics-lp
   ```

2. **Instale as dependências**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse a aplicação**
   ```
   http://localhost:3000
   ```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── header/         # Cabeçalho da página
│   │   ├── footer/         # Rodapé da página
│   │   ├── section-*/      # Seções da landing page
│   │   └── Button.tsx      # Componente de botão
│   ├── data/               # Dados estáticos
│   ├── globals.css         # Estilos globais
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página inicial
└── public/                 # Assets estáticos
    ├── assets/             # Imagens e logos
    └── icons/              # Ícones SVG
```

## 🎯 Funcionalidades

- **Design Responsivo** - Adaptável a todos os dispositivos
- **Componentes Modulares** - Estrutura organizada e reutilizável
- **Seções Principais**:
  - Hero com CTA
  - Características do produto
  - Integrações
  - FAQ interativo
  - Métricas
  - Footer completo

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa o linter

## 🎨 Customização

O projeto está estruturado para fácil customização:

- **Dados**: Edite `src/app/data/data.ts` para alterar textos e links
- **Estilos**: Modifique `src/app/globals.css` para personalizar cores e temas
- **Componentes**: Cada seção é um componente independente

## 🔮 Uso Futuro

Este template de landing page foi desenvolvido pensando em reutilização para projetos maiores. A arquitetura modular permite:

- Integração fácil com backends
- Adição de novas seções
- Customização de temas
- Implementação de funcionalidades avançadas (formulários, analytics, etc.)

Desenvolvido por Houston Braga com ❤️ usando Next.js e Tailwind CSS
