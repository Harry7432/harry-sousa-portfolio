import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement>;

export function Section({ className, ...rest }: SectionProps) {
  return (
    <section
      className={cn("scroll-mt-20 py-section lg:py-section-lg", className)}
      {...rest}
    />
  );
}