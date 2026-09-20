import { studies } from "@/data/studies";
import type { StudyGroup } from "@/types";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const groupOrder: StudyGroup[] = ["aplicando", "estudando", "próximos passos"];

const groupLabels: Record<StudyGroup, string> = {
  aplicando: "Aplicando",
  estudando: "Estudando",
  "próximos passos": "Próximos passos",
};

const groupIndicators: Record<StudyGroup, string> = {
  aplicando: "bg-teal",
  estudando: "border border-teal-bright/70",
  "próximos passos": "border border-[var(--ds-glass-border-2)]",
};

export function Studies() {
  return (
    <Section id="estudos">
      <Container className="flex flex-col gap-stack-xl">
        <SectionHeading
          eyebrow="05 — Estudos"
          title="Evolução contínua"
          description="Minha evolução parte de dados e automação e segue rumo à engenharia de software e Inteligência Artificial aplicada — integrando as duas frentes, sem abrir mão da base em dados."
        />

        <Reveal
          as="ol"
          className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-stack"
        >
          {groupOrder.map((group, index) => {
            const items = studies.filter((study) => study.status === group);
            const isActive = group === "aplicando";

            return (
              <li key={group} className="min-w-0">
                <Card
                  variant={isActive ? "cert" : "glass-sm"}
                  className="flex h-full flex-col gap-stack p-stack-lg"
                >
                  <div className="flex items-center justify-between gap-stack-sm">
                    <p className="eyebrow">
                      {String(index + 1).padStart(2, "0")} · {groupLabels[group]}
                    </p>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "h-2.5 w-2.5 shrink-0 rounded-full",
                        groupIndicators[group],
                      )}
                    />
                  </div>

                  <ul className="flex flex-col gap-stack">
                    {items.map((study) => (
                      <li key={study.id} className="flex flex-col gap-stack-2xs">
                        <p className="flex items-center gap-stack-sm text-small font-medium text-foreground-strong">
                          <span
                            aria-hidden="true"
                            className="h-1 w-1 shrink-0 rounded-full bg-teal-bright"
                          />
                          {study.title}
                        </p>
                        <p className="pl-4 text-caption text-foreground-muted">
                          {study.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </Card>
              </li>
            );
          })}
        </Reveal>
      </Container>
    </Section>
  );
}
