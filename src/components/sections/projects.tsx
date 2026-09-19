import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/sections/project-card";

export function Projects() {
  const featured = projects.filter((project) => project.featured);
  const additional = projects.filter((project) => !project.featured);
  const [headProject, ...otherFeatured] = featured;

  return (
    <Section id="projetos">
      <Container className="flex flex-col gap-stack-xl">
        <SectionHeading
          eyebrow="03 — Projetos"
          title="Projetos"
          description="Cases técnicos de desenvolvimento, automações, integrações, dados e Inteligência Artificial construídos para resolver problemas reais."
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[22px]">
          {headProject && (
            <ProjectCard
              project={headProject}
              featured
              large
              className="[grid-column:1/-1]"
            />
          )}
          {otherFeatured.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>
        <div className="flex flex-col gap-stack">
          <p className="micro-label">Outros projetos</p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[22px]">
            {additional.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
