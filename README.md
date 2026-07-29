# Pedro Nascimento — Portfolio

Portfólio pessoal (single-page) de **Pedro Nascimento** — Software Engineer Intern @ SumUp (Adquirência), estudante de Engenharia de Computação @ FIAP, com foco em sistemas de alta concorrência, IA e robótica.

Site bilíngue **PT-BR / EN** com estética *dark dev/terminal*, construído com **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4** e **TypeScript** (strict).

> O conteúdo (copy, trajetória, cases e matriz de skills) foi consolidado a partir de um plano de conteúdo e traduzido para PT-BR/EN diretamente nos dicionários de i18n (`src/messages/`).

## Stack

- **Next.js 16** (App Router) — SSG + ISR para a seção de repositórios
- **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** (configuração CSS-first via `@theme` em `src/app/globals.css`)
- **next/font** — Space Grotesk (display/corpo) + JetBrains Mono (terminal/labels)
- **next/image** — retrato e screenshots dos projetos otimizados

## Funcionalidades

- **Hero tipo terminal** com efeito de digitação, cursor piscando, relógio UTC vivo e retrato do Pedro enquadrado como um *feed* de terminal.
- **Seções**: Sobre mim, Experiência (timeline), Projetos em Destaque (layout editorial assimétrico), Repositórios (dinâmico) e Matriz de Competências.
- **i18n PT-BR/EN** com toggle no header, persistência em `localStorage` e sincronização do `<html lang>`. Padrão: PT-BR. Sem roteamento por URL (toggle client-side).
- **Repositórios via GitHub API** (`api.github.com/users/pcnasc/repos`) com **ISR** (revalidação de 1h), exclusão de forks, ordenação por stars/recência e **fallback** estático elegante caso a API falhe ou esteja em rate-limit.
- **Motion** com scroll-reveal, micro-interações e respeito a `prefers-reduced-motion`.
- **Responsivo** de 375px (mobile) a 1440px+ (desktop).

## Estrutura de pastas

```
src/
├── app/                    # layout, page, providers, globals.css (tokens + camadas de fundo)
├── components/
│   ├── layout/             # Header (nav + toggle de idioma + footer), Background (camadas ambient)
│   ├── sections/           # Hero, About, Experience, Projects, Repos, ReposClient, Skills
│   └── ui/                 # TypingText, ScrollReveal, ProjectMockup
├── lib/
│   ├── github.ts           # fetch da API + tipos + cores de linguagem
│   └── i18n.tsx            # contexto tipado de idioma (PT/EN)
└── messages/
    ├── pt.ts               # PT-BR (fonte de verdade) + tipo Dict
    └── en.ts               # tradução EN (tipada contra Dict)
public/
├── pedro.png               # retrato do hero
└── projects/               # screenshots dos cases (swap automático por nome)
```

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm start        # serve o build de produção
npm run lint     # ESLint
```

## Personalizando o conteúdo

- **Textos / traduções**: edite `src/messages/pt.ts` (PT-BR) e `src/messages/en.ts` (EN). O arquivo EN é tipado contra o `Dict` exportado pelo PT, garantindo paridade de chaves em tempo de compilação.
- **Fotos dos projetos**: coloque os PNGs em `public/projects/` com os nomes `festo-digital-twin.png`, `robot-arm.png` e `visai.png`. A existência é resolvida no build (`existsSync`); se o arquivo existir, a foto substitui o mockup SVG automaticamente.
- **Retrato do hero**: `public/pedro.png`.
- **Links / CTAs / e-mail**: ajustáveis no bloco de CTAs do `Hero` e nos dicionários de mensagens.
- **Domínio / metadados OG**: `metadataBase` e campos de `metadata` em `src/app/layout.tsx`.

## Deploy

O alvo é a **Vercel** — o ISR da seção de repositórios funciona nativamente. Após conectar o repositório, o deploy é automático por push na `main`.

## Notas técnicas

- O estado inicial de idioma no client é sempre o padrão do servidor; a preferência salva é reconciliada após a montagem, evitando *hydration mismatch* no SSG.
- A seção de repositórios é um Server Component que passa o payload tipado a um Client Component; em falha de rede, exibe um snapshot estático sem quebrar o layout.

## Licença

Projeto pessoal. Todos os direitos reservados a Pedro Nascimento.
