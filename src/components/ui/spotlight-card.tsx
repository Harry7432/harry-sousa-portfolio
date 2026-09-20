"use client";

import { useRef, type PointerEvent as ReactPointerEvent } from "react";
import { Card, type CardProps } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/**
 * Card com spotlight que segue o cursor. O listener de pointermove só fica
 * ativo enquanto o ponteiro está sobre o próprio card (attach/detach em
 * pointerenter/pointerleave), evitando um listener global de mouse. As
 * coordenadas são escritas direto no estilo do elemento (sem re-render).
 */
export function SpotlightCard({ className, ...rest }: CardProps) {
  const ref = useRef<HTMLElement | null>(null);
  const frame = useRef<number | null>(null);

  function updateSpotlight(clientX: number, clientY: number) {
    const el = ref.current;
    if (!el) return;

    if (frame.current !== null) {
      cancelAnimationFrame(frame.current);
    }

    frame.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--spot-x", `${clientX - rect.left}px`);
      el.style.setProperty("--spot-y", `${clientY - rect.top}px`);
    });
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLElement>) {
    updateSpotlight(event.clientX, event.clientY);
  }

  return (
    <Card
      ref={ref}
      onPointerMove={handlePointerMove}
      className={cn("spotlight", className)}
      {...rest}
    />
  );
}
