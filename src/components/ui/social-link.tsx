import type { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  label: string;
  children: ReactNode;
}

export function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground-secondary transition-[color,background-color] duration-200 ease-out hover:bg-[var(--ds-glass-fill)] hover:text-teal-bright"
    >
      {children}
    </a>
  );
}
