import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "neutral" | "accent" | "success" | "warning" | "danger";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  pill?: boolean;
  children: ReactNode;
}

const badgeVariantClasses: Record<BadgeVariant, string> = {
  neutral: "border-[var(--ds-glass-border-2)] bg-[var(--ds-glass-fill)] text-chip",
  accent: "border-[var(--ds-teal-border)] bg-[var(--ds-teal-fill)] text-chip-teal",
  success: "border-[var(--ds-teal-border)] bg-[var(--ds-teal-fill)] text-chip-teal",
  warning: "border-[var(--ds-warning-border)] bg-[var(--ds-warning-bg)] text-warning",
  danger: "border-[var(--ds-danger-border)] bg-[var(--ds-danger-bg)] text-danger",
};

export function Badge({
  variant = "neutral",
  pill = false,
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border px-2.5 py-1 text-caption font-medium",
        pill ? "rounded-badge" : "rounded-chip",
        badgeVariantClasses[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
