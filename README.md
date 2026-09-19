# Harry Sousa — Portfolio

Portfólio profissional e pessoal de **Harry Sousa** — Software Engineering, Artificial Intelligence, Automation e Data.

## Stack

- **Framework:** Next.js 16 (App Router, SSG)
- **Linguagem:** TypeScript (strict)
- **Estilo:** Tailwind CSS v4
- **Fontes:** Geist Sans + Geist Mono (next/font)

## Estrutura

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, viewport
│   ├── page.tsx            # Home
│   ├── globals.css         # Theme, variáveis CSS, reset
│   ├── sitemap.ts          # Sitemap dinâmico
│   ├── not-found.tsx       # 404
│   └── favicon.ico
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Hero, About, Skills, etc.
│   └── ui/                 # Primitivas reutilizáveis
├── data/
│   ├── profile.ts          # Dados do perfil
│   ├── projects.ts         # Projetos
│   ├── skills.ts           # Skills por categoria
│   ├── experience.ts       # Experiência profissional
│   └── studies.ts          # Estudos e certificações
├── types/
│   └── index.ts            # Interfaces compartilhadas
└── lib/
    └── constants.ts        # Configuração do site, nav links
```

## Desenvolvimento local

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Lint
npm run lint
```

## Scripts

| Script | Descrição |
|---|---|
| `dev` | Servidor de desenvolvimento com hot reload |
| `build` | Build de produção (SSG) |
| `start` | Iniciar servidor de produção |
| `lint` | Verificação de código com ESLint |

## Arquitetura

### Camada de Dados

Todo conteúdo textual do portfólio está centralizado em arquivos TypeScript dentro de `src/data/`. Os componentes consomem esses dados via importação direta. Atualizar o portfólio = alterar arquivos de dados, sem modificar componentes.

### Componentes

- **`layout/`** — Header e Footer (navegação e rodapé)
- **`sections/`** — Seções da página principal (Hero, About, Skills, etc.)
- **`ui/`** — Primitivas reutilizáveis (Card, Badge, Button, etc.)

Componentes seguem o princípio de composição: pequenos, com responsabilidade única, combinados na página principal.

### SEO e Acessibilidade

- Metadata completa via Next.js (`layout.tsx`)
- Open Graph e Twitter Card
- Sitemap gerado dinamicamente
- HTML semântico com `lang="pt-BR"`
- `prefers-reduced-motion` respeitado
- Focus states visíveis

## Decisões principais

- **SSG** em vez de SSR: portfólio não precisa de renderização dinâmica em servidor
- **Sem CMS**: dados em arquivos TypeScript para simplicidade e controle total
- **Sem dependências extras**: zero bibliotecas além de Next.js, React e Tailwind (inicialmente)
- **Dark mode permanente**: identidade visual consistente sem toggle
- **Geist fonts**: tipografia moderna com suporte a sans e mono
- **Tailwind CSS v4**: estilização utility-first com tema via CSS variables

## Roadmap

- [ ] Etapa 1: Fundação técnica
- [ ] Etapa 2: Layout (Header, Footer, Hero)
- [ ] Etapa 3: Seções de conteúdo (About, Skills, Experience, Projects, Studies, Contact)
- [ ] Etapa 4: SEO, sitemap, Open Graph, robots.txt
- [ ] Etapa 5: Responsividade, acessibilidade, performance
- [ ] Etapa 6: Animações e microinterações
- [ ] Etapa 7: Deploy e validação

## Licença

Este projeto é de uso pessoal e profissional de Harry Sousa.