import { profile } from "@/data/profile";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  const [lead, ...rest] = profile.about.paragraphs;

  return (
    <Section id="sobre">
      <Container className="flex flex-col gap-stack-xl">
        <SectionHeading
          eyebrow="01 — Sobre"
          title="Sobre mim"
          description="Trajetória, áreas de atuação e direção profissional."
        />

        <Card variant="glass-panel" className="p-[clamp(1.5rem,4vw,2.75rem)]">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-stack-2xl">
            <div className="flex min-w-0 flex-col gap-stack">
              {lead && (
                <p className="text-lead font-light text-foreground-strong">{lead}</p>
              )}
              {rest.map((paragraph) => (
                <p key={paragraph} className="text-foreground-secondary">
                  {paragraph}
                </p>
              ))}

              <div className="flex flex-wrap gap-stack-xs pt-stack-sm">
                {profile.about.areas.map((area) => (
                  <Badge key={area} variant="accent">
                    {area}
                  </Badge>
                ))}
                {profile.stack.map((tech) => (
                  <Badge key={tech} variant="neutral">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <Card variant="glass-sm" className="glass-soft flex min-w-0 flex-col gap-stack p-stack-lg">
              <p className="micro-label">Princípio</p>
              <blockquote className="border-l-2 border-[var(--ds-teal-border)] pl-4 text-small italic text-foreground-secondary">
                “{profile.about.motto}”
              </blockquote>
            </Card>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
