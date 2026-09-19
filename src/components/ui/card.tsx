import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardElement = "div" | "article" | "section";
type CardVariant = "glass" | "glass-sm" | "glass-panel" | "cert";

interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: CardElement;
  variant?: CardVariant;
  hover?: boolean;
  children: ReactNode;
}

const variantClasses: Record<CardVariant, string> = {
  glass: "glass",
  "glass-sm": "glass glass-sm",
  "glass-panel": "glass glass-panel",
  cert: "glass-cert",
};

export function Card({
  as: Tag = "div",
  variant = "glass",
  hover = false,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <Tag
      className={cn(variantClasses[variant], hover && "glass-hover", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
