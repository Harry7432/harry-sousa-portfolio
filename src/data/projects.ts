import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "hss-finance",
    slug: "hss-finance",
    name: "HSS Finance",
    shortDescription:
      "Aplicação financeira full stack em monorepo, com backend Node.js/TypeScript, PostgreSQL e frontend em React.",
    description:
      "Aplicação financeira full stack construída em monorepo, com backend Node.js/TypeScript, PostgreSQL e React. Possui autenticação JWT com Argon2id, validação com Zod, migrations, testes E2E e infraestrutura Docker, seguindo uma arquitetura preparada para evolução futura com Open Finance.",
    category: "Full Stack / Backend",
    technologies: ["TypeScript", "Node.js", "PostgreSQL", "React", "Docker", "TypeORM"],
    highlights: [
      "monorepo npm workspaces",
      "autenticação JWT e Argon2id",
      "validação com Zod",
      "PostgreSQL via Docker Compose",
      "migrations",
      "testes de integração/E2E",
      "CI com GitHub Actions",
      "readiness endpoint",
    ],
    flow: ["Frontend", "Backend", "PostgreSQL"],
    status: "em desenvolvimento",
    githubUrl: "https://github.com/Harry7432/hss-finance",
    featured: true,
  },
  {
    id: "arbrain-sync",
    slug: "arbrain-sync",
    name: "ArBrain Sync",
    shortDescription:
      "Serviço backend de replicação e reconciliação de dados de uma API ERP em PostgreSQL.",
    description:
      "Serviço backend para replicação e reconciliação de dados de uma API ERP em PostgreSQL, com sincronização incremental, controle de execução, concorrência, hashes de payload, scheduler e testes automatizados.",
    category: "Backend / Integration",
    technologies: ["TypeScript", "Node.js", "Prisma", "PostgreSQL", "APIs REST", "CI"],
    highlights: [
      "sincronização incremental",
      "sem escrita no banco do cliente",
      "reconciliação de dados",
      "payload_hash e last_seen_at",
      "sync_runs e sync_cursors",
      "controle de execução",
      "jobs diários",
      "testes automatizados",
    ],
    flow: ["API ERP", "Serviços", "PostgreSQL"],
    status: "em desenvolvimento",
    featured: true,
  },
  {
    id: "billingflow",
    slug: "billingflow",
    name: "Billingflow",
    shortDescription:
      "Aplicação full stack multi-cliente para substituir automações isoladas por um sistema centralizado.",
    description:
      "Aplicação full stack multi-cliente criada para substituir fluxos de automação isolados por um sistema centralizado, com autenticação, credenciais por cliente, execução manual de fluxos e dashboard.",
    category: "Full Stack / SaaS",
    technologies: ["TypeScript", "Node.js", "React", "PostgreSQL", "Prisma"],
    highlights: [
      "monorepo com backend e frontend",
      "multi-cliente",
      "autenticação",
      "credenciais por cliente",
      "disparo manual de fluxos",
      "dashboard",
    ],
    flow: ["Frontend", "Backend", "PostgreSQL"],
    status: "em desenvolvimento",
    featured: true,
  },
  {
    id: "botnext-ai-integration",
    slug: "botnext-ai-integration",
    name: "BotNext — Integrações & IA",
    shortDescription:
      "Integração de atendimento com WhatsApp Cloud API, webhooks e agentes de IA.",
    description:
      "Integração entre plataforma de atendimento, WhatsApp Cloud API e agentes de IA: recebimento e processamento de webhooks, disparo de templates e automação de interações, com tratamento de eventos e idempotência.",
    category: "AI / Integration",
    technologies: ["TypeScript", "APIs", "Webhooks", "Meta", "n8n", "IA"],
    highlights: [
      "recebimento e processamento de webhooks",
      "disparo de templates",
      "integração com WhatsApp Cloud API",
      "automação de interações",
      "processamento de eventos",
      "idempotência",
    ],
    flow: ["Webhook", "Integração", "WhatsApp"],
    status: "projeto funcional",
    featured: true,
  },
  {
    id: "crm-analytics",
    slug: "crm-analytics",
    name: "CRM Analytics",
    shortDescription:
      "Coleta, consolidação e análise de informações de CRM em banco de dados próprio.",
    description:
      "Sistema para coleta, consolidação e análise de informações de CRM, centralizando cards, usuários e anotações em banco de dados próprio.",
    category: "Data / Backend",
    technologies: ["Node.js", "PostgreSQL", "Prisma", "REST APIs"],
    highlights: [
      "integração com CRM",
      "banco próprio",
      "consolidação de dados",
      "relatórios",
      "acompanhamento de usuários",
      "estruturação de informações",
    ],
    flow: ["CRM", "API", "PostgreSQL"],
    status: "projeto funcional",
  },
  {
    id: "botnext-executive-analytics",
    slug: "botnext-executive-analytics",
    name: "BotNext Executive Analytics",
    shortDescription:
      "Extração e consolidação de conversas de atendimento para geração de informações executivas.",
    description:
      "Sistema desenvolvido para extrair conversas de uma plataforma de atendimento, identificar responsáveis, consolidar mensagens em banco próprio e gerar informações executivas para gestão.",
    category: "Data / Automation",
    technologies: ["Python", "PostgreSQL", "REST APIs", "Data Processing"],
    highlights: [
      "integração com APIs",
      "processamento de milhares de sessões",
      "identificação de responsáveis",
      "consolidação de mensagens",
      "banco de dados próprio",
      "relatórios executivos",
    ],
    flow: ["Conversas", "API", "PostgreSQL"],
    status: "projeto funcional",
  },
  {
    id: "hss-health-tracker",
    slug: "hss-health-tracker",
    name: "HSS Health Tracker",
    shortDescription:
      "Registro periódico de informações com automação de dados e visualização em dashboards.",
    description:
      "Aplicação pessoal criada para registrar informações periódicas e acompanhar evolução através de automações e dashboards. Aqui é apresentado apenas o aspecto técnico do projeto.",
    category: "Automation / Personal Project",
    technologies: ["HTML", "JavaScript", "n8n", "Google Sheets", "APIs"],
    highlights: [
      "autenticação",
      "cadastro",
      "registros periódicos",
      "dashboards",
      "gráficos",
      "automação de dados",
    ],
    flow: ["n8n", "APIs", "Dashboard"],
    status: "projeto pessoal",
  },
];