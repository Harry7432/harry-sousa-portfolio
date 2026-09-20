"use client";

import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeaderShellProps {
  children: ReactNode;
}

/**
 * Só esta casca é client component: liga um listener de scroll passivo,
 * agrupado em requestAnimationFrame, para dar ao Header uma transição sutil
 * quando a página rola. O conteúdo do Header continua sendo renderizado no
 * servidor.
 */
export function HeaderShell({ children }: HeaderShellProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    function measure() {
      frame = 0;
      setScrolled(window.scrollY > 8);
    }

    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    }

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 ease-out",
        scrolled
          ? "border-[var(--ds-glass-border)] bg-[var(--ds-bg-2)]/90 shadow-surface"
          : "border-transparent bg-[var(--ds-bg-2)]/70",
      )}
    >
      {children}
    </header>
  );
}
