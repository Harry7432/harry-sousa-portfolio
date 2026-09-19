# AGENTS.md — Harry Sousa Portfolio

## Contexto do projeto

Este é um portfólio profissional real de Harry Sousa, usado em processos seletivos, LinkedIn e apresentação a empresas.

Não trate este projeto como:
- projeto escolar
- protótipo descartável
- experimento rápido
- código demonstrativo

Desenvolva com qualidade de produção real.

## Comandos de validação

Antes de concluir qualquer alteração relevante:

1. `npm run lint` — ESLint (zero erros)
2. `npx tsc --noEmit` — typecheck (zero erros)
3. `npm run build` — build de produção (deve passar)

Investigue, corrija e re-execute em caso de erro. Nunca ignore erros de build, lint ou TypeScript.

## Arquitetura

Respeite a organização do projeto. Conteúdo profissional e dados do portfólio permanecem separados da camada de apresentação.

- `src/data/` — conteúdo e dados do portfólio (profile, projects, skills, experience, studies)
- `src/types/` — tipos compartilhados, apenas quando realmente necessários
- `src/components/ui/` — componentes reutilizáveis de interface
- `src/components/layout/` — elementos estruturais (Header, Footer)
- `src/components/sections/` — seções da página
- `src/lib/` — utilitários e helpers (constantes, config)
- `src/app/` — roteamento, layout raiz, metadata, SEO

Não crie camadas ou diretórios novos sem necessidade real.

Componentes consomem dados de `src/data/`. Não espalhe conteúdo profissional diretamente nos componentes quando ele puder ser centralizado.

## Padrões de engenharia

- Manter TypeScript strict
- Não usar `any`
- Preferir inferência de tipos quando clara; tipagem explícita quando necessário
- Componentes pequenos e focados, com responsabilidade única
- Evitar duplicação de código
- Evitar arquivos excessivamente grandes
- Nomes claros e consistentes
- Remover código morto e imports não utilizados
- Não deixar `console.log` desnecessário
- Não deixar TODO sem justificativa
- Não criar abstrações prematuras
- Evitar overengineering
- Preferir composição a herança
- Priorizar legibilidade, baixo acoplamento e simplicidade sustentável

## React e Next.js

- Preferir Server Components por padrão
- Usar `"use client"` apenas quando necessário (estado, eventos, hooks)
- Não tornar componentes Client Components sem motivo
- Minimizar JavaScript enviado ao cliente
- Usar recursos nativos do Next.js: `next/image`, `next/link`, `next/font`
- Manter metadata centralizada e consistente
- Preservar geração estática quando possível

## Estilização

- Usar Tailwind CSS seguindo o padrão atual do projeto
- Não duplicar classes desnecessariamente
- Não usar estilos inline
- Evitar valores arbitrários sem justificativa
- Não usar CSS global para componentes específicos
- Reutilizar padrões de design existentes antes de criar novos

## Acessibilidade

Preservar em toda interface:
- HTML semântico
- navegação por teclado
- focus visible
- contraste adequado
- labels apropriados
- aria apenas quando necessário
- alt text adequado
- `prefers-reduced-motion`

Não sacrificar acessibilidade por estética.

## Responsividade

Toda nova interface deve funcionar em mobile, tablet, notebook e desktop. Preferir abordagem mobile-first. Não considerar uma feature pronta se quebrar visualmente em telas menores.

## SEO

Preservar:
- metadata
- Open Graph
- sitemap
- robots
- headings semânticos
- estrutura HTML adequada

Não criar múltiplos H1 sem necessidade.

## Dependências

Não adicionar dependências sem justificativa técnica. Antes de instalar uma biblioteca:
1. verificar se pode ser resolvido com recursos nativos
2. avaliar impacto no bundle
3. avaliar manutenção
4. avaliar necessidade real

Se não houver necessidade clara, não instalar.

## Segurança

Nunca:
- inserir secrets, tokens, senhas ou credenciais no código
- commitar `.env` ou dados sensíveis
- expor informações confidenciais

Não inventar URLs, informações pessoais, empresas, datas, métricas ou experiências profissionais.

## Dados do portfólio

Centralizar dados profissionais em `src/data/`.

Nunca inventar:
- links de GitHub, projetos ou demos
- datas de trabalho
- métricas ou resultados
- certificações ou experiências

Se um dado não estiver disponível, estruturar a interface para lidar com a ausência do dado.

## Processo de alteração

Antes de mudanças relevantes:
1. analisar o requisito
2. identificar os arquivos afetados
3. preservar a arquitetura existente
4. implementar a menor solução adequada
5. validar (lint, typecheck, build)
6. resumir as alterações

Evitar alterações não relacionadas ao escopo atual.

## Commits

Quando solicitado a sugerir commits, usar Conventional Commits:

- `feat:` nova funcionalidade
- `fix:` correção de bug
- `refactor:` mudança de código sem mudança de comportamento
- `chore:` tarefas de manutenção
- `docs:` documentação
- `test:` testes
- `style:` formatação sem mudança de lógica

Commits pequenos, cada um representando uma unidade lógica de mudança.

## Regra principal

Manter equilíbrio entre qualidade profissional, simplicidade, manutenção, performance, acessibilidade e clareza.

Não buscar complexidade para demonstrar conhecimento. A melhor solução é a mais simples que atende corretamente ao requisito com qualidade profissional.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
