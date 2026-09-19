import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "content" | "wide";
  children: ReactNode;
}

export function Container({
  size = "content",
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-pad lg:px-pad-lg",
        size === "content" ? "max-w-content" : "max-w-wide",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}