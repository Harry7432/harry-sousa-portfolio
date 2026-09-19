import { skills } from "@/data/skills";
import type { SkillCategory } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconTile, type IconName } from "@/components/ui/icon";

const categoryIcons: Record<string, IconName> = {
  Frontend: "code",
  Backend: "server",
  "Banco de dados": "database",
  "Inteligência Artificial": "ai",
  "Automação e integrações": "nodes",
  Dados: "chart",
  "Dev Tools": "monitor",
};

export function Skills() {
  return (
    <Section id="skills">
      <Container className="flex flex-col gap-stack-xl">
        <SectionHeading
          eyebrow="02 — Skills"
          title="Skills"
          description="Tecnologias e áreas que utilizo para construir sistemas, integrações, automações e soluções orientadas a dados."
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[18px]">
          {skills.map((category: SkillCategory) => (
            <Card
              key={category.category}
              variant="glass-sm"
              hover
              className="flex flex-col gap-stack-sm p-stack-lg hover:-translate-y-[5px]"
            >
              <IconTile name={categoryIcons[category.category] ?? "code"} />
              <h4 className="text-h4 font-semibold text-foreground-strong">
                {category.category}
              </h4>
              {category.description && (
                <p className="text-caption text-foreground-muted">
                  {category.description}
                </p>
              )}
              <div className="mt-auto flex flex-wrap gap-stack-2xs">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="neutral">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
