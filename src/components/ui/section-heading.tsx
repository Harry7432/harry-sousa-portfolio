import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h2" | "h3";
  gradient?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Heading = "h2",
  gradient = false,
  className,
  ...rest
}: SectionHeadingProps) {
  const headingClasses = Heading === "h2" ? "text-h2" : "text-h3";

  return (
    <div className={cn("flex flex-col gap-stack-sm", className)} {...rest}>
      {eyebrow && (
        <div className="flex items-center gap-4">
          <span className="eyebrow">{eyebrow}</span>
          <span
            aria-hidden="true"
            className="h-px flex-1 bg-gradient-to-r from-[var(--ds-teal-border-hi)] to-transparent"
          />
        </div>
      )}
      <Heading
        className={cn(
          headingClasses,
          "font-semibold text-foreground-strong",
          gradient && "gradient-text-2",
        )}
      >
        {title}
      </Heading>
      {description && (
        <p className="max-w-2xl text-foreground-secondary">{description}</p>
      )}
    </div>
  );
}
