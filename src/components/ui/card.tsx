import { forwardRef, type HTMLAttributes, type ReactNode, type Ref } from "react";
import { cn } from "@/lib/utils";

type CardElement = "div" | "article" | "section";
type CardVariant = "glass" | "glass-sm" | "glass-panel" | "cert";

export interface CardProps extends HTMLAttributes<HTMLElement> {
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

export const Card = forwardRef<HTMLElement, CardProps>(function Card(
  { as: Tag = "div", variant = "glass", hover = false, className, children, ...rest },
  ref,
) {
  return (
    <Tag
      // As tags possíveis (div/article/section) mapeiam para tipos de ref
      // diferentes no DOM lib; o ref recebido via forwardRef é HTMLElement,
      // compatível em tempo de execução com qualquer uma delas.
      ref={ref as Ref<HTMLDivElement>}
      className={cn(variantClasses[variant], hover && "glass-hover", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
});
