import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

type ButtonAsLinkProps = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

type ButtonAsButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "href">;

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

const buttonBaseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-small font-medium disabled:pointer-events-none disabled:opacity-50";

const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost bg-transparent",
};

const nonGhostSizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4",
  md: "h-11 px-5",
  lg: "h-12 px-[26px]",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    buttonBaseClasses,
    buttonVariantClasses[variant],
    variant === "ghost" ? "h-auto px-1 py-1" : nonGhostSizeClasses[size],
    className,
  );

  if ("href" in rest) {
    return (
      <Link className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
