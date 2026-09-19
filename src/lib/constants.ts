import type { Link } from "@/types";

// URL base do site. Antes do deploy, definir NEXT_PUBLIC_SITE_URL com o domínio real.
// O valor abaixo é um fallback temporário e NÃO deve ser publicado como domínio definitivo.
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://harry-sousa.dev"
).replace(/\/+$/, "");

export const siteConfig = {
  name: "Harry Sousa",
  title: "Harry Sousa — Software Engineer",
  description:
    "Portfólio de Harry Sousa. Software Engineering, Artificial Intelligence, Automation e Data. Construo sistemas, integrações e automações.",
  url: siteUrl,
  locale: "pt-BR",
  author: "Harry Sousa",
};

export const SITE_NAME = siteConfig.name;
export const SITE_URL = siteConfig.url;

export const NAV_LINKS: Link[] = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Skills", href: "#skills" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Estudos", href: "#estudos" },
  { label: "Contato", href: "#contato" },
];