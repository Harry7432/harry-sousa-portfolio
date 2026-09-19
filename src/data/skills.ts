import type { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    description: "Interface, interação e componentes de aplicações web.",
    skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Backend",
    description: "Serviços, APIs REST e lógica de negócio.",
    skills: ["Node.js", "TypeScript", "Python", "APIs REST", "Webhooks"],
  },
  {
    category: "Banco de dados",
    description: "Modelagem, consultas e persistência.",
    skills: ["PostgreSQL", "SQL", "Prisma ORM", "Redis", "Milvus"],
  },
  {
    category: "Inteligência Artificial",
    description: "Agentes, LLMs e recuperação de informação.",
    skills: ["LLMs", "AI Agents", "RAG", "LangChain", "Dify"],
  },
  {
    category: "Automação e integrações",
    description: "Fluxos automatizados e integração de plataformas.",
    skills: [
      "n8n",
      "Meta API",
      "WhatsApp Cloud API",
      "Google APIs",
      "Salesforce",
      "Webhooks",
      "APIs REST",
    ],
  },
  {
    category: "Dados",
    description: "Análise, dashboards e modelagem de dados.",
    skills: ["Power BI", "Excel", "Python", "SQL"],
  },
  {
    category: "Dev Tools",
    description: "Ferramentas do meu fluxo de trabalho.",
    skills: ["Git", "GitHub", "Docker", "VS Code", "OpenCode", "Claude Code"],
  },
];