import type { ReactNode, SVGAttributes } from "react";
import { cn } from "@/lib/utils";

export type IconName =
  | "database"
  | "chart"
  | "bank"
  | "check"
  | "mail"
  | "github"
  | "linkedin"
  | "monitor"
  | "server"
  | "ai"
  | "nodes"
  | "code";

interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, "name"> {
  name: IconName;
  strokeWidth?: number;
}

export function Icon({ name, strokeWidth = 1.6, className, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
      {...rest}
    >
      {iconPaths[name]}
    </svg>
  );
}

const iconPaths: Record<IconName, ReactNode> = {
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V4" />
      <path d="M4 20h16" />
      <rect x="7" y="12" width="3" height="5" />
      <rect x="12" y="8" width="3" height="9" />
      <rect x="17" y="5" width="3" height="12" />
    </>
  ),
  bank: (
    <>
      <path d="M3 9l9-5 9 5" />
      <path d="M4 20h16" />
      <path d="M6 20v-8" />
      <path d="M10 20v-8" />
      <path d="M14 20v-8" />
      <path d="M18 20v-8" />
    </>
  ),
  check: <path d="M5 13l4 4 10-10" strokeWidth={2.6} />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  github: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 20v-3c-3 0-4-2-4-4.5C5 8 7 6 12 6s7 2 7 6.5c0 2.5-1 4.5-4 4.5v3" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10v7" />
      <path d="M7.5 7.2v.1" />
      <path d="M12 17v-4a2 2 0 014 0v4" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 18h18" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
    </>
  ),
  ai: (
    <>
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v3" />
      <path d="M12 18v3" />
      <path d="M3 12h3" />
      <path d="M18 12h3" />
    </>
  ),
  nodes: (
    <>
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.5 11l7-4" />
      <path d="M8.5 13l7 4" />
    </>
  ),
  code: (
    <>
      <path d="M9 18l-5-6 5-6" />
      <path d="M15 6l5 6-5 6" />
    </>
  ),
};

interface IconTileProps {
  name: IconName;
  className?: string;
  tone?: "project" | "default";
  size?: "md" | "sm";
}

const sizeClasses: Record<NonNullable<IconTileProps["size"]>, string> = {
  md: "h-[52px] w-[52px] p-[13px]",
  sm: "h-11 w-11 p-[11px]",
};

export function IconTile({ name, className, tone = "default", size = "md" }: IconTileProps) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-icon border",
        sizeClasses[size],
        "border-[var(--ds-teal-border)] bg-[var(--ds-teal-fill)] shadow-[inset_0_0_18px_rgba(53,214,196,0.3)]",
        tone === "project" ? "text-teal-soft" : "text-teal-bright",
        className,
      )}
    >
      <Icon name={name} strokeWidth={tone === "project" ? 1.6 : 1.7} />
    </div>
  );
}
