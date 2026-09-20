import { experience } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TimelineList } from "@/components/sections/timeline-list";

export function Experience() {
  return (
    <Section id="experiencia">
      <Container className="flex flex-col gap-stack-xl">
        <SectionHeading
          eyebrow="04 — Experiência"
          title="Experiência"
          description="Trajetória em análise de dados, integração de sistemas, automações e Inteligência Artificial aplicada."
        />

        <TimelineList className="flex flex-col gap-stack-xl">
          {experience.map((item) => {
            const isActive = item.period?.toLowerCase() === "atual";

            return (
              <li key={item.id} className="relative">
                <span
                  aria-hidden="true"
                  className={
                    isActive
                      ? "timeline-dot timeline-dot--active"
                      : "timeline-dot timeline-dot--inactive"
                  }
                />
                <Card
                  as="article"
                  variant="glass-panel"
                  hover
                  className="overflow-hidden p-0 transition-transform duration-300 ease-out hover:translate-x-1.5"
                >
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
                    <div className="flex min-w-0 flex-col gap-stack border-b border-[var(--ds-glass-border)] p-stack-xl lg:border-b-0 lg:border-r lg:p-stack-2xl">
                      <div className="flex flex-wrap items-center justify-between gap-stack-sm">
                        <p className="eyebrow">{item.company}</p>
                        {item.period && (
                          <p className="text-caption text-foreground-muted">{item.period}</p>
                        )}
                      </div>
                      <h3 className="text-h2 font-semibold text-foreground-strong">
                        {item.role}
                      </h3>
                      <p className="text-foreground-secondary">{item.description}</p>
                    </div>

                    <div className="flex min-w-0 flex-col gap-stack p-stack-xl lg:p-stack-2xl">
                      <div className="flex flex-col gap-stack-sm">
                        <p className="micro-label">Áreas de atuação</p>
                        <ul className="grid gap-stack-sm sm:grid-cols-2">
                          {item.areas.map((area) => (
                            <li
                              key={area}
                              className="flex items-center gap-stack-sm text-small text-foreground"
                            >
                              <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-bright"
                              />
                              {area}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto flex flex-col gap-stack-sm">
                        <p className="micro-label">Tecnologias</p>
                        <div className="flex flex-wrap gap-stack-2xs">
                          {item.technologies.map((tech) => (
                            <Badge key={tech} variant="neutral">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </li>
            );
          })}
        </TimelineList>
      </Container>
    </Section>
  );
}
