import { profile } from "@/data/profile";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconTile } from "@/components/ui/icon";
import { ContactForm } from "@/components/sections/contact-form";

export function Contact() {
  const { linkedin, github, whatsapp, email } = profile.links;

  const channels = [
    linkedin && {
      label: "LinkedIn",
      value: linkedin.replace(/^https?:\/\//, "").replace(/\/$/, ""),
      href: linkedin,
      icon: "linkedin" as const,
    },
    github && {
      label: "GitHub",
      value: github.replace(/^https?:\/\//, "").replace(/\/$/, ""),
      href: github,
      icon: "github" as const,
    },
    whatsapp && {
      label: "WhatsApp",
      value: "41 98738-9960",
      href: whatsapp,
      icon: "whatsapp" as const,
    },
    email && { label: "E-mail", value: email, href: `mailto:${email}`, icon: "mail" as const },
  ].filter(Boolean) as {
    label: string;
    value: string;
    href: string;
    icon: "linkedin" | "github" | "whatsapp" | "mail";
  }[];

  return (
    <Section id="contato">
      <Container>
        <Reveal>
          <Card variant="glass-panel" className="p-[clamp(1.5rem,4vw,2.75rem)]">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-stack-2xl">
              <div className="flex min-w-0 flex-col gap-stack">
                <SectionHeading
                  eyebrow="06 — Contato"
                  title="Vamos conversar"
                  description="Tem um projeto, uma oportunidade ou quer trocar ideias sobre tecnologia? Vamos conversar."
                  gradient
                />

                <div className="flex flex-col gap-stack-sm pt-stack-sm">
                  {channels.map((channel) => (
                    <a
                      key={channel.label}
                      href={channel.href}
                      target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={channel.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      className="group glass glass-sm glass-hover flex min-w-0 items-center gap-stack p-[18px] transition-transform duration-300 ease-out hover:-translate-y-1"
                    >
                      <IconTile
                        name={channel.icon}
                        size="sm"
                        className="transition-transform duration-300 ease-out group-hover:scale-110"
                      />
                      <span className="flex min-w-0 flex-col">
                        <span className="micro-label">{channel.label}</span>
                        <span className="truncate text-small font-medium text-foreground-strong">
                          {channel.value}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="min-w-0">
                <ContactForm />
              </div>
            </div>
          </Card>
        </Reveal>
      </Container>
    </Section>
  );
}
