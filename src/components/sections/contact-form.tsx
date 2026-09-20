"use client";

import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FIELD_BASE =
  "w-full rounded-chip border bg-[var(--ds-glass-fill)] px-3 py-2.5 text-small text-foreground placeholder:text-foreground-muted transition-[border-color,box-shadow] duration-200 focus:outline-none focus:ring-2";
const FIELD_NORMAL =
  "border-[var(--ds-glass-border-2)] focus:border-teal-bright focus:ring-teal-bright/30 focus:shadow-[0_0_0_6px_rgb(var(--ds-teal-bright-rgb)/0.08)]";
const FIELD_ERROR = "border-danger focus:border-danger focus:ring-danger/30";

interface ContactValues {
  name: string;
  email: string;
  message: string;
}

type ContactErrors = Partial<Record<keyof ContactValues, string>>;

type FieldElement = HTMLInputElement | HTMLTextAreaElement;

const FIELD_ORDER: Array<keyof ContactValues> = ["name", "email", "message"];

const initialValues: ContactValues = { name: "", email: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(initialValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [showNotice, setShowNotice] = useState(false);
  const fieldRefs = useRef<Record<keyof ContactValues, FieldElement | null>>({
    name: null,
    email: null,
    message: null,
  });

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setShowNotice(false);
  }

  function validate(): ContactErrors {
    const next: ContactErrors = {};

    const name = values.name.trim();
    if (!name) {
      next.name = "Informe seu nome.";
    } else if (name.length < 2) {
      next.name = "O nome deve ter pelo menos 2 caracteres.";
    }

    const email = values.email.trim();
    if (!email) {
      next.email = "Informe seu e-mail.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Informe um e-mail válido.";
    }

    const message = values.message.trim();
    if (!message) {
      next.message = "Escreva sua mensagem.";
    } else if (message.length < 10) {
      next.message = "A mensagem deve ter pelo menos 10 caracteres.";
    }

    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    const firstError = FIELD_ORDER.find((field) => nextErrors[field]);
    if (firstError) {
      fieldRefs.current[firstError]?.focus();
    } else {
      setShowNotice(true);
    }
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="glass glass-sm flex flex-col gap-stack p-stack-lg"
    >
      <div className="flex flex-col gap-stack-2xs">
        <label htmlFor="nome" className="text-small font-medium text-foreground">
          Nome
        </label>
        <input
          id="nome"
          name="name"
          type="text"
          autoComplete="name"
          required
          minLength={2}
          ref={(element) => {
            fieldRefs.current.name = element;
          }}
          value={values.name}
          onChange={handleChange}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "nome-error" : undefined}
          className={cn(FIELD_BASE, errors.name ? FIELD_ERROR : FIELD_NORMAL)}
        />
        {errors.name && (
          <p id="nome-error" className="text-caption text-danger">
            {errors.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-stack-2xs">
        <label htmlFor="email" className="text-small font-medium text-foreground">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          ref={(element) => {
            fieldRefs.current.email = element;
          }}
          value={values.email}
          onChange={handleChange}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={cn(FIELD_BASE, errors.email ? FIELD_ERROR : FIELD_NORMAL)}
        />
        {errors.email && (
          <p id="email-error" className="text-caption text-danger">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-stack-2xs">
        <label htmlFor="mensagem" className="text-small font-medium text-foreground">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="message"
          rows={5}
          required
          minLength={10}
          ref={(element) => {
            fieldRefs.current.message = element;
          }}
          value={values.message}
          onChange={handleChange}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "mensagem-error" : undefined}
          className={cn(
            FIELD_BASE,
            "resize-y",
            errors.message ? FIELD_ERROR : FIELD_NORMAL,
          )}
        />
        {errors.message && (
          <p id="mensagem-error" className="text-caption text-danger">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Enviar mensagem
      </Button>

      {showNotice && (
        <p
          role="status"
          className="rounded-chip border border-[var(--ds-glass-border)] bg-[var(--ds-glass-fill)] px-4 py-3 text-caption text-foreground-secondary"
        >
          O formulário está pronto, mas o envio ainda não está conectado. Se
          preferir, me chame pelo LinkedIn.
        </p>
      )}
    </form>
  );
}