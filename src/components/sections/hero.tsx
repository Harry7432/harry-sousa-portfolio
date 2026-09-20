import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  const { linkedin, github } = profile.links;

  return (
    <section id="inicio" className="scroll-mt-20">
      <Container className="flex min-h-[calc(100dvh-4rem)] flex-col items-center justify-center gap-stack py-section-lg text-center">
        <span className="status-pill hero-in text-small">
          <span aria-hidden="true" className="status-dot h-2 w-2 shrink-0 rounded-full" />
          {profile.location} — {profile.role}
        </span>

        <h1
          className="hero-in gradient-text max-w-4xl text-display font-bold"
          style={{ animationDelay: "90ms" }}
        >
          {profile.professionalName}
        </h1>

        <p
          className="hero-in max-w-2xl text-lead font-light text-foreground-secondary"
          style={{ animationDelay: "170ms" }}
        >
          {profile.headline}
        </p>

        <p
          className="hero-in max-w-2xl text-foreground-secondary"
          style={{ animationDelay: "230ms" }}
        >
          {profile.title}
        </p>
        <p
          className="hero-in max-w-2xl text-foreground-secondary"
          style={{ animationDelay: "230ms" }}
        >
          {profile.description}
        </p>

        <div
          className="hero-in flex flex-wrap items-center justify-center gap-stack pt-stack-sm"
          style={{ animationDelay: "310ms" }}
        >
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
      </Container>
    </section>
  );
}
