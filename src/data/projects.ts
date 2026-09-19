import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "arbrain-sync",
    slug: "arbrain-sync",
    name: "ArBrain Sync",
    shortDescription:
      "Sincronização automatizada de dados de uma API externa para PostgreSQL, com controle de execuções e reconciliação.",
    description:
      "Sistema desenvolvido para sincronizar dados de uma API externa com um banco PostgreSQL próprio, permitindo controle, reconciliação e persistência estruturada de múltiplas entidades.",
    category: "Backend / Integration",
    technologies: ["Node.js", "TypeScript", "Prisma", "PostgreSQL", "REST APIs", "Scheduler"],
    highlights: [
      "sincronização automática",
      "arquitetura baseada em serviços",
      "controle de execuções",
      "reconciliação de dados",
      "payload hashing",
      "processamento concorrente",
      "persistência estruturada",
      "múltiplas entidades",
    ],
    flow: ["API externa", "Serviços", "PostgreSQL"],
    status: "em desenvolvimento",
    featured: true,
  },
  {
    id: "billingflow",
    slug: "billingflow",
    name: "Billingflow",
    shortDescription:
      "Plataforma escalável e multi-cliente para centralizar automações, credenciais e execuções de processos.",
    description:
      "Plataforma criada para substituir fluxos isolados de automação por uma aplicação escalável e multi-cliente, centralizando processos, credenciais, execuções e informações.",
    category: "Full Stack / SaaS",
    technologies: ["Node.js", "TypeScript", "React", "Prisma", "PostgreSQL"],
    highlights: [
      "arquitetura multi-tenant",
      "frontend e backend separados",
      "gerenciamento de credenciais",
      "dashboard",
      "execução de processos",
      "estrutura preparada para múltiplos clientes",
    ],
    flow: ["Frontend", "Backend", "PostgreSQL"],
    status: "em desenvolvimento",
    featured: true,
  },
  {
    id: "botnext-ai-integration",
    slug: "botnext-ai-integration",
    name: "BotNext AI Integration",
    shortDescription:
      "Integração de atendimento com Meta API e agentes de Inteligência Artificial para automatizar interações.",
    description:
      "Integração entre plataforma de atendimento, Meta API e agentes de Inteligência Artificial para automatizar interações, interpretar intenção e trabalhar com mensagens e webhooks.",
    category: "AI / Automation / Integration",
    technologies: ["Node.js", "REST APIs", "Webhooks", "Meta API", "WhatsApp", "LLMs", "AI Agents"],
    highlights: [
      "recebimento via webhook",
      "envio de templates",
      "interpretação de intenção",
      "integração com agentes de IA",
      "automação de atendimento",
      "comunicação com Meta API",
    ],
    flow: ["Webhook", "AI Agent", "WhatsApp"],
    status: "em desenvolvimento",
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