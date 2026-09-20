import Link from "next/link";
import { profile } from "@/data/profile";
import { NAV_LINKS, siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/container";
import { SocialLink } from "@/components/ui/social-link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { HeaderShell } from "@/components/layout/header-shell";

export function Header() {
  const { linkedin, github } = profile.links;

  return (
    <HeaderShell>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-chip focus:border focus:border-[var(--ds-teal-border)] focus:bg-[var(--ds-bg-1)] focus:px-4 focus:py-2 focus:text-small focus:text-foreground-strong focus:shadow-card"
      >
        Pular para o conteúdo
      </a>
      <Container className="flex h-16 items-center justify-between gap-stack">
        <Link
          href="#inicio"
          aria-label={siteConfig.name}
          className="font-display text-lg font-semibold tracking-tight text-foreground-strong"
        >
          HS<span className="text-teal-bright">.DEV</span>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center md:flex"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link rounded-chip px-3 py-2 text-small text-foreground-secondary transition-colors duration-200 hover:text-foreground-strong active:text-teal-bright"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-stack-sm">
          <ThemeToggle />
          {linkedin && (
            <SocialLink href={linkedin} label="LinkedIn">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </SocialLink>
          )}
          {github && (
            <SocialLink href={github} label="GitHub">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
              </svg>
            </SocialLink>
          )}
          <MobileMenu links={NAV_LINKS} />
        </div>
      </Container>
    </HeaderShell>
  );
}
