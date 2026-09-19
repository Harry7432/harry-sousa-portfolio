# Portfólio Harry Sousa — Especificação Técnica

Documento de referência para reimplementar o portfólio em HTML/CSS/React no VSCode.

---

## 1. Design tokens

### Cores

```css
:root {
  /* Fundo */
  --bg-1:            #1a1a2e;  /* topo do gradiente */
  --bg-2:            #16213e;  /* meio */
  --bg-3:            #101a30;  /* base */
  --bg-body:         #14142a;  /* body fallback */

  /* Destaque */
  --teal:            #1D9E75;  /* teal principal */
  --teal-bright:     #35D6C4;  /* cyan de destaque / links */
  --teal-soft:       #7FE9D6;  /* ícones, datas, gradient text */
  --teal-pale:       #8BF3E4;  /* link hover */
  --teal-ink:        #07231B;  /* texto sobre botão teal */
  --blue-glow:       #3F56C9;  /* orb de fundo azul */

  /* Texto */
  --text:            #EAF0F5;  /* corpo */
  --text-strong:     #FFFFFF;  /* títulos / hover */
  --text-muted:      #A9BACB;  /* parágrafos secundários */
  --text-dim:        #9FB3C8;  /* labels */
  --text-faint:      #7D91A4;  /* rodapé */
  --text-chip:       #D7E3EE;  /* texto de badge */
  --text-chip-teal:  #D9F5EE;  /* badge teal */
  --label:           #8FA4B6;  /* micro-labels (EMAIL, GITHUB) */

  /* Superfícies de vidro */
  --glass-top:       rgba(255,255,255,0.09);
  --glass-bottom:    rgba(255,255,255,0.03);
  --glass-border:    rgba(255,255,255,0.16);  /* cards */
  --glass-border-2:  rgba(255,255,255,0.20);  /* pills / botão ghost */
  --glass-fill:      rgba(255,255,255,0.07);  /* chips, botão ghost */
  --glass-inner:     rgba(255,255,255,0.12);  /* inset highlight */
  --teal-border:     rgba(53,214,196,0.35);
  --teal-border-hi:  rgba(53,214,196,0.55);   /* hover de card */
  --teal-fill:       rgba(29,158,117,0.16);
}
```

Gradiente de fundo da página:

```css
background: linear-gradient(160deg, #1a1a2e 0%, #16213e 55%, #101a30 100%);
```

### Contraste (WCAG)

| Combinação | Ratio aprox. | Uso |
|---|---|---|
| `#EAF0F5` sobre `#16213e` | ~13.5:1 | corpo — AAA |
| `#A9BACB` sobre `#16213e` | ~7.6:1 | secundário — AAA |
| `#7D91A4` sobre `#101a30` | ~4.9:1 | rodapé — AA |
| `#35D6C4` sobre `#16213e` | ~9.8:1 | links — AAA |
| `#07231B` sobre `#35D6C4` | ~9.4:1 | botão primário — AAA |

Regra usada: nada de texto com `opacity` — sempre cor sólida sobre o vidro, porque o backdrop-blur já reduz o contraste percebido.

### Tipografia

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
```

- **Space Grotesk** — display: nome do hero, títulos de seção, headings de card, labels de numeração. Pesos 600/700.
- **IBM Plex Sans** — corpo: parágrafos, badges, navegação, links. Pesos 300/400/500/600.

Escala:

| Elemento | Tamanho | Peso | Tracking |
|---|---|---|---|
| Hero H1 | `clamp(48px, 8vw, 92px)` | 700 | `-0.03em`, `line-height: .96` |
| Hero subtitle | `clamp(16px, 2vw, 20px)` | 300 | `.01em` |
| Section eyebrow | `13px` | 400 | `.22em` uppercase |
| H2 (contato) | `clamp(28px, 4vw, 42px)` | 700 | `-0.02em` |
| H3 (card projeto) | `21px` | 600 | `-0.01em` |
| H4 (skill) | `16px` | 600 | — |
| Parágrafo lead | `clamp(18px, 2.2vw, 23px)` | 300 | `line-height: 1.5` |
| Corpo | `15–16px` | 400 | `line-height: 1.6–1.7` |
| Badge / chip | `12–13px` | 400 | — |
| Rodapé | `13px` | 400 | — |

### Raio, sombra, espaçamento

```css
--r-chip: 8px;  --r-badge: 999px;  --r-btn: 14px;
--r-icon: 14px; --r-card: 20px;    --r-card-lg: 22px;
--r-panel: 24px; --r-panel-lg: 26px;

--shadow-card:  0 18px 40px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.12);
--shadow-hover: 0 28px 60px rgba(0,0,0,.45), 0 0 0 1px rgba(53,214,196,.25), inset 0 1px 0 rgba(255,255,255,.20);
--shadow-panel: 0 24px 54px rgba(0,0,0,.40), inset 0 1px 0 rgba(255,255,255,.16);
```

Ritmo vertical: seções com `padding-bottom: 88px`, container `max-width: 1120px`, gutter lateral `24px`, padding interno de painel `clamp(24px, 4vw, 44px)`.

---

## 2. Receita do glassmorphism

Card padrão:

```css
.glass {
  border: 1px solid rgba(255,255,255,0.16);
  border-radius: 22px;
  background: linear-gradient(150deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03));
  backdrop-filter: blur(13px);
  -webkit-backdrop-filter: blur(13px);
  box-shadow: 0 18px 40px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.12);
}
```

Quatro detalhes que fazem o efeito funcionar:

1. **Blur entre 12–15px.** Cards de skill 12px, cards de projeto 13px, painéis grandes 14–15px. Menos que 10px não lê como vidro; mais que 18px vira leitoso.
2. **Fundo em gradiente, não cor chapada.** `150deg` de `0.09` → `0.03` simula a luz batendo no topo da placa.
3. **`inset 0 1px 0 rgba(255,255,255,.12)`** — a linha de luz na borda superior. É isso que dá espessura ao vidro.
4. **Precisa haver algo atrás para borrar.** Os três orbs radiais de fundo existem por isso; sem eles o blur não tem o que processar.

Card de certificação (variante "inner glow"):

```css
border: 1px solid rgba(53,214,196,.4);
background: linear-gradient(135deg, rgba(29,158,117,.2), rgba(255,255,255,0.04));
box-shadow: 0 18px 42px rgba(0,0,0,.35),
            inset 0 0 26px rgba(53,214,196,.16),
            inset 0 1px 0 rgba(255,255,255,.16);
```

### Orbs de fundo

Três círculos borrados, `position:absolute`, `pointer-events:none`, no container raiz que tem `overflow:hidden`:

| # | Posição | Tamanho | Cor | Blur |
|---|---|---|---|---|
| 1 | `top:-180px; left:-120px` | 520px | `rgba(29,158,117,.55)` | 40px |
| 2 | `top:320px; right:-160px` | 560px | `rgba(53,214,196,.35)` | 50px |
| 3 | `bottom:-200px; left:30%` | 600px | `rgba(63,86,201,.35)` | 60px |

```css
background: radial-gradient(circle, <cor>, transparent 65%);
filter: blur(40px);
border-radius: 50%;
```

---

## 3. Efeitos

### Gradient text

```css
background: linear-gradient(100deg, #FFFFFF 20%, #7FE9D6 70%, #1D9E75 100%);
-webkit-background-clip: text;
background-clip: text;
color: transparent;
```

Usado no H1 do hero e no H2 do contato (versão de 2 paradas: `#FFFFFF → #7FE9D6`).

### Hover dos cards

```css
.card { transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease; }
.card:hover {
  transform: translateY(-8px);            /* projetos */
  border-color: rgba(53,214,196,.55);
  box-shadow: var(--shadow-hover);
}
```

- Cards de projeto: `translateY(-8px)`
- Cards de skill: `translateY(-5px)`
- Cards de timeline: `translateX(6px)` (movem lateralmente, acompanhando o eixo da linha)
- Botões / links de contato: `translateY(-3px)` e `translateY(-4px)`

Todas as transições em `.25s`–`.3s ease`. Nunca `transition: all`.

### Botão primário

```css
color: #07231B;
background: linear-gradient(135deg, #35D6C4, #1D9E75);
box-shadow: 0 14px 30px rgba(29,158,117,.35), inset 0 1px 0 rgba(255,255,255,.45);
/* hover */
box-shadow: 0 20px 40px rgba(29,158,117,.5), inset 0 1px 0 rgba(255,255,255,.6);
transform: translateY(-3px);
```

### Avatar flutuante

```css
@keyframes floatY {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-14px); }
}
.avatar { animation: floatY 7s ease-in-out infinite; }
```

Estrutura em duas camadas: um `radial-gradient` borrado atrás (`inset:0`) e o disco de vidro por cima (`inset:14px`) com `inset 0 2px 12px rgba(255,255,255,.28)` e `text-shadow: 0 0 26px rgba(53,214,196,.6)` nas iniciais.

### Ponto ativo (status / timeline)

```css
background: #1D9E75;
box-shadow: 0 0 10px 2px rgba(29,158,117,.9);          /* pill de status */
box-shadow: 0 0 0 4px rgba(53,214,196,.18),
            0 0 14px 2px rgba(53,214,196,.7);           /* nó da timeline */
```

### Smooth scroll

```css
html { scroll-behavior: smooth; }
```

Navegação por âncoras `#sobre`, `#projetos`, `#skills`, `#experiencia`, `#contato`.

---

## 4. Layout e responsividade

Zero media queries. Tudo intrínseco:

```css
/* Hero e bloco "Sobre" */
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 48px;

/* Grid de projetos */
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 22px;

/* Grid de skills */
grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
gap: 18px;

/* Cards de contato */
grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
gap: 14px;
```

Regras de apoio:

- Todo filho de grid/flex que contém texto recebe `min-width: 0` para poder encolher.
- Tipografia fluida via `clamp()` — sem breakpoints para texto.
- Grupos de badges e nav usam `display:flex; gap; flex-wrap:wrap` — nunca margens individuais.
- Card de projeto é `flex-direction: column` com o bloco de tech tags em `margin-top: auto`, para o link "Ver no GitHub" alinhar na base independente do tamanho do título.
- `text-wrap: balance` no H1, `text-wrap: pretty` nos parágrafos.

### Timeline

```css
.timeline { position: relative; padding-left: 34px; display:flex; flex-direction:column; gap:20px; }
.timeline::before {  /* a linha */
  content:''; position:absolute; left:9px; top:8px; bottom:8px; width:2px;
  background: linear-gradient(180deg, #35D6C4, rgba(53,214,196,.08));
}
.timeline-dot { position:absolute; left:-33px; top:26px; width:12px; height:12px; border-radius:50%; }
```

O gradiente vertical da linha (sólido no topo → quase transparente embaixo) indica cronologia sem precisar de rótulo.

---

## 5. Ícones

SVG inline, sem biblioteca. Padrão comum a todos:

```html
<svg width="26" height="26" viewBox="0 0 24 24" fill="none"
     stroke="#7FE9D6" stroke-width="1.6">…</svg>
```

- `stroke-width`: 1.6 (ícones de projeto 26px), 1.7 (ícones de skill/contato 20–22px)
- Cor: `#7FE9D6` dentro de containers de projeto, `#35D6C4` nos demais
- Container do ícone: 52×52px, `border-radius:14px`, `background: rgba(29,158,117,.18)`, `border: 1px solid rgba(53,214,196,.35)`, `box-shadow: inset 0 0 18px rgba(53,214,196,.3)`

Paths usados:

```
database  ellipse(12,6,rx7,ry3) + M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6 + M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6
chart     M4 20V4 / M4 20h16 + rect(7,12,3,5) rect(12,8,3,9) rect(17,5,3,12)
bank      M3 9l9-5 9 5 / M4 20h16 / M6 20v-8 M10 20v-8 M14 20v-8 M18 20v-8
check     M5 13l4 4 10-10   (stroke-width 2.6, linecap/linejoin round)
mail      rect(3,5,18,14,r2) + M3 7l9 6 9-6
github    circle(12,12,9) + M9 20v-3c-3 0-4-2-4-4.5C5 8 7 6 12 6s7 2 7 6.5c0 2.5-1 4.5-4 4.5v3
linkedin  rect(3,3,18,18,r3) + M7.5 10v7 M7.5 7.2v.1 M12 17v-4a2 2 0 014 0v4
monitor   rect(3,4,18,14,r2) + M3 18h18
server    rect(3,4,18,7,r2) + rect(3,13,18,7,r2)
ai        circle(12,12,3) + circle(12,12,9) + M12 3v3 M12 18v3 M3 12h3 M18 12h3
nodes     circle(6,12,2.5) circle(18,6,2.5) circle(18,18,2.5) + M8.5 11l7-4 M8.5 13l7 4
code      M9 18l-5-6 5-6 / M15 6l5 6-5 6
```

---

## 6. Estrutura do documento

```
<div>                      posição relativa, overflow hidden, gradiente de fundo
├── 3 orbs                 absolutos, pointer-events none
├── header                 logo "HS.DEV" + nav de âncoras
├── section (hero)         pill de status · H1 · subtitle · 2 CTAs · avatar
├── section#sobre          01 — painel de vidro, lead + parágrafo + badges
├── section#projetos       02 — 3 cards <a> para o GitHub
├── section#skills         03 — 6 cards de categoria
├── section#experiencia    04 — timeline, 2 entradas
├── section (certificação) 05 — card com inner glow teal
└── section#contato        06 — painel + 3 cards de link + rodapé
```

Cabeçalho de seção (repetido 6×):

```html
<div style="display:flex;align-items:center;gap:16px;margin-bottom:26px">
  <span style="font-family:'Space Grotesk';font-size:13px;letter-spacing:.22em;color:#35D6C4">01 — SOBRE</span>
  <span style="flex:1;height:1px;background:linear-gradient(90deg,rgba(53,214,196,.5),transparent)"></span>
</div>
```

---

## 7. Conteúdo

**Hero** — `HARRY SOUSA` / "Full Stack Developer | TypeScript • Node.js • React" / pill "Curitiba — PR · Disponível para novos projetos" / avatar `HS`.

**Sobre** — lead: "Profissional em transição para Full Stack com experiência em automações, integrações e soluções com IA." Badges: TypeScript, Node.js, React (teal); Prisma, PostgreSQL, SQL, APIs REST, Automações & IA (neutros).

**Projetos**

| Projeto | Descrição | Stack | Ícone |
|---|---|---|---|
| Integração ERP / Sincronização de Dados | Serviço de replicação e reconciliação de dados. | Node.js, TypeScript, Prisma, PostgreSQL | database |
| Billingflow | Monorepo multi-cliente para substituir fluxos n8n. | Node.js, TypeScript, Prisma, PostgreSQL, React | chart |
| DioBank — Full Stack TypeScript | Projeto educacional evoluído para full stack. | React, TypeScript, Node.js, APIs REST | bank |

**Skills** — Frontend (React, TypeScript, HTML/CSS) · Backend (Node.js, TypeScript, APIs REST) · Database (PostgreSQL, Prisma, SQL) · IA & Automação (Soluções com IA, n8n, Scripts) · Integrações (ERP, Webhooks, Sincronização de dados) · DevOps (Git/GitHub, Monorepo, Linux).

**Experiência** — Falavinha Next · Analista de Banco de Dados · 04/2025 — Atual (nó aceso). OMEGA Informática · Auxiliar de Suporte Técnico · 09/2023 — 03/2025 (nó apagado).

**Certificação** — Formação TypeScript Fullstack Developer · DIO.me · 44 horas · Concluído 11/09/2026.

**Contato** — harrysousasilva@gmail.com · github.com/Harry7432 · linkedin.com/in/harry-sousa-a81554266/

---

## 8. Notas de implementação

**Performance**

- `backdrop-filter` é caro. Este layout tem ~15 superfícies borradas; é o teto confortável. Em telas fracas, `@media (prefers-reduced-transparency)` pode trocar o blur por `background: rgba(22,33,62,.9)`.
- Anime só `transform`, `opacity` e `box-shadow`. Nunca `width`, `height`, `top`, `left`.
- Os orbs têm `pointer-events:none` para não interceptar clique.
- `display=swap` no Google Fonts evita FOIT.
- `@media (prefers-reduced-motion: reduce)` deve zerar a animação `floatY` e as transições.

**Se for para React**

Componentes que valem extrair: `SectionHeader({num, title})`, `GlassCard`, `ProjectCard({icon, title, desc, tech, href})`, `SkillCard({icon, title, items})`, `TimelineItem({role, company, period, active})`, `ContactLink({icon, label, value, href})`, `Badge({children, accent})`.

Dois parâmetros já tratados como configuráveis no arquivo atual: `glowIntensity` (0–1, opacidade dos orbs) e `showCertification` (boolean).

**Acessibilidade**

- Links externos com `target="_blank" rel="noopener"`.
- Ordem de headings: um `h1`, `h2` em contato, `h3` em cards, `h4` em skills.
- `color-scheme: dark` no `:root`.
- Alvos de toque ≥ 44px: botões têm `padding: 15px 26px`, cards de contato `padding: 18px`.
- Falta no arquivo atual e vale adicionar no seu código: `:focus-visible { outline: 2px solid #35D6C4; outline-offset: 3px }` e um skip-link.
