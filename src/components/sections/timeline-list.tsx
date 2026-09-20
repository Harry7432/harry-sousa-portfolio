"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TimelineListProps {
  children: ReactNode;
  className?: string;
}

/**
 * Envolve o <ol> da timeline para acionar o efeito de progressão da linha
 * (::after em globals.css) quando ela entra na viewport. Os itens da lista
 * permanecem sempre visíveis — só a linha decorativa depende do JS.
 */
export function TimelineList({ children, className }: TimelineListProps) {
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      el.dataset.visible = "true";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.visible = "true";
            observer.unobserve(el);
          }
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <ol ref={ref} className={cn("timeline", className)}>
      {children}
    </ol>
  );
}
