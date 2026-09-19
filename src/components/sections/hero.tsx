import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function Hero() {
  const { linkedin, github } = profile.links;
  const initials = getInitials(profile.professionalName);

  return (
    <section id="inicio" className="scroll-mt-20">
      <Container className="grid min-h-[calc(100dvh-4rem)] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-stack-2xl py-section-lg">
        <div className="flex flex-col items-start gap-stack">
          <span className="status-pill text-small">
            <span aria-hidden="true" className="status-dot h-2 w-2 shrink-0 rounded-full" />
            {profile.location} — {profile.role}
          </span>

          <h1 className="gradient-text text-display font-bold">
            {profile.professionalName}
          </h1>

          <p className="max-w-xl text-lead font-light text-foreground-secondary">
            {profile.headline}
          </p>

          <p className="max-w-xl text-foreground-secondary">{profile.title}</p>
          <p className="max-w-xl text-foreground-secondary">{profile.description}</p>

          <div className="flex flex-wrap items-center gap-stack pt-stack-sm">
            <Button href="#projetos">Ver Projetos</Button>
            {linkedin && (
              <Button
                variant="secondary"
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
            )}
            {github && (
              <Button
                variant="secondary"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
            )}
            <Button variant="ghost" href="#contato">
              Contato →
            </Button>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[280px] justify-self-center">
          <div aria-hidden="true" className="avatar-glow" />
          <div className="avatar-float avatar-disc h-full w-full">
            <span className="avatar-initials text-[clamp(3rem,8vw,4.5rem)] font-bold">
              {initials}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
