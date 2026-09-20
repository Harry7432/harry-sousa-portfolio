export interface Link {
  label: string;
  href: string;
}

export interface SocialLinks {
  linkedin?: string;
  github?: string;
  whatsapp?: string;
  email?: string;
  instagram?: string;
}

export interface About {
  paragraphs: string[];
  areas: string[];
  motto: string;
}

export interface Profile {
  name: string;
  professionalName: string;
  role: string;
  headline: string;
  title: string;
  description: string;
  location: string;
  stack: string[];
  about: About;
  links: SocialLinks;
}

export type ProjectStatus =
  | "em desenvolvimento"
  | "projeto funcional"
  | "projeto pessoal";

export interface Project {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: string;
  technologies: string[];
  highlights: string[];
  flow: string[];
  status: ProjectStatus;
  featured?: boolean;
  githubUrl?: string;
  demoUrl?: string;
}

export interface SkillCategory {
  category: string;
  description?: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period?: string;
  description: string;
  areas: string[];
  technologies: string[];
}

export type StudyGroup = "aplicando" | "estudando" | "próximos passos";

export interface StudyItem {
  id: string;
  title: string;
  status: StudyGroup;
  description: string;
}
