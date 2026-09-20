import { Fragment } from "react";
import type { Project, ProjectStatus } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconTile, type IconName } from "@/components/ui/icon";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { cn } from "@/lib/utils";

const statusLabels: Record<ProjectStatus, string> = {
  "em desenvolvimento": "Em desenvolvimento",
  "projeto funcional": "Projeto funcional",
  "projeto pessoal": "Projeto pessoal",
};

const statusVariants: Record<ProjectStatus, "warning" | "success" | "neutral"> = {
  "em desenvolvimento": "warning",
  "projeto funcional": "success",
  "projeto pessoal": "neutral",
};

const projectIcons: Record<string, IconName> = {
  "arbrain-sync": "database",
  billingflow: "chart",
  "botnext-ai-integration": "ai",
  "crm-analytics": "server",
  "botnext-executive-analytics": "nodes",
  "hss-finance": "bank",
  "hss-health-tracker": "monitor",
};

function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <Badge variant={statusVariants[status]} pill>
      {statusLabels[status]}
    </Badge>
  );
}

function FlowVisual({ steps, className }: { steps: string[]; className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-stack gap-y-stack-xs text-caption text-foreground-secondary",
        className,
      )}
    >
      {steps.map((step, index) => (
        <Fragment key={step}>
          <span>{step}</span>
          {index < steps.length - 1 && (
            <span aria-hidden="true" className="text-teal-bright">
              →
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
}

function FlowPanel({ project }: { project: Project }) {
  return (
    <div className="rounded-chip border border-[var(--ds-glass-border)] bg-[var(--ds-glass-fill)] px-4 py-3">
      <p className="micro-label">Fluxo</p>
      <FlowVisual steps={project.flow} className="mt-stack-sm" />
    </div>
  );
}

function TechBadges({ technologies }: { technologies: string[] }) {
  return (
    <div className="flex flex-wrap gap-stack-2xs">
      {technologies.map((tech, index) => (
        <Badge
          key={tech}
          variant="neutral"
          className="opacity-80 transition-[opacity,transform] duration-300 ease-out [transform:translateY(2px)] group-hover:translate-y-0 group-hover:opacity-100"
          style={{ transitionDelay: `${Math.min(index, 6) * 35}ms` }}
        >
          {tech}
        </Badge>
      ))}
    </div>
  );
}

function ProjectLinks({ githubUrl, demoUrl }: Pick<Project, "githubUrl" | "demoUrl">) {
  if (!githubUrl && !demoUrl) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-stack-sm">
      {githubUrl && (
        <Button
          variant="secondary"
          size="sm"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-shadow duration-300 group-hover:shadow-hover"
        >
          Ver no GitHub
        </Button>
      )}
      {demoUrl && (
        <Button
          variant="ghost"
          size="sm"
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        >
          Demo →
        </Button>
      )}
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  large?: boolean;
  className?: string;
}

export function ProjectCard({
  project,
  featured = false,
  large = false,
  className,
}: ProjectCardProps) {
  const icon = projectIcons[project.id] ?? "code";

  const cartouches = (
    <>
      <p className="micro-label">{project.category}</p>
      <StatusBadge status={project.status} />
    </>
  );

  const iconClassName =
    "transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3";

  if (featured) {
    return (
      <SpotlightCard
        as="article"
        hover
        className={cn(
          "group flex flex-col gap-stack-lg p-stack-xl transition-transform duration-300 ease-out",
          "hover:-translate-y-2",
          large && "lg:grid lg:grid-cols-2 lg:items-start lg:gap-stack-2xl lg:p-stack-2xl",
          className,
        )}
      >
        <div className="flex flex-col gap-stack">
          <div className="flex flex-wrap items-center justify-between gap-stack-sm">
            {cartouches}
          </div>
          <IconTile name={icon} tone="project" className={iconClassName} />
          <h3 className="text-h2 font-semibold text-foreground-strong">{project.name}</h3>
          <p className="text-foreground-secondary">{project.description}</p>
          <ul className="grid gap-stack-xs sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-stack-xs text-caption text-foreground-secondary"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-bright"
                />
                {highlight}
              </li>
            ))}
          </ul>
          <ProjectLinks githubUrl={project.githubUrl} demoUrl={project.demoUrl} />
        </div>
        <div className="flex flex-col gap-stack">
          <FlowPanel project={project} />
          <TechBadges technologies={project.technologies} />
        </div>
      </SpotlightCard>
    );
  }

  return (
    <SpotlightCard
      as="article"
      hover
      className={cn(
        "group flex h-full flex-col gap-stack p-stack-lg transition-transform duration-300 ease-out hover:-translate-y-2",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-stack-sm">
        {cartouches}
      </div>
      <IconTile name={icon} tone="project" className={iconClassName} />
      <h3 className="text-h3 font-semibold text-foreground-strong">{project.name}</h3>
      <p className="text-small text-foreground-secondary">{project.shortDescription}</p>
      <div className="mt-auto flex flex-col gap-stack">
        <FlowPanel project={project} />
        <TechBadges technologies={project.technologies} />
        <ProjectLinks githubUrl={project.githubUrl} demoUrl={project.demoUrl} />
      </div>
    </SpotlightCard>
  );
}
