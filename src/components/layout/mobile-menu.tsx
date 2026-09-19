"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { Link as LinkItem } from "@/types";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

interface MobileMenuProps {
  links: LinkItem[];
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isOpen) {
      firstLinkRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (
        menuRef.current &&
        event.target instanceof Node &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className="md:hidden">
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        className="inline-flex h-11 w-11 items-center justify-center rounded-chip border border-[var(--ds-glass-border-2)] bg-[var(--ds-glass-fill)] text-foreground-strong transition-colors duration-200 hover:border-[var(--ds-teal-border-hi)]"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {isOpen ? (
            <>
              <path d="M6 6l12 12" />
              <path d="M18 6l-12 12" />
            </>
          ) : (
            <>
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </>
          )}
        </svg>
      </button>

      <nav
        id={panelId}
        aria-label="Navegação móvel"
        className={cn(
          "absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-[var(--ds-glass-border)] bg-[var(--ds-bg-2)]/95 shadow-panel backdrop-blur-md",
          isOpen ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col py-stack">
          {links.map((item, index) => (
            <Link
              key={item.href}
              ref={index === 0 ? firstLinkRef : undefined}
              href={item.href}
              onClick={() => {
                setIsOpen(false);
                toggleRef.current?.focus();
              }}
              className="flex h-11 items-center text-small text-foreground-secondary transition-colors duration-200 hover:text-teal-bright"
            >
              {item.label}
            </Link>
          ))}
        </Container>
      </nav>
    </div>
  );
}