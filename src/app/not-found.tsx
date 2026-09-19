import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex flex-1 flex-col items-center justify-center px-6 py-24">
      <div className="glass glass-panel flex flex-col items-center p-[clamp(1.5rem,4vw,2.75rem)] text-center">
        <p className="eyebrow">404</p>
        <h1 className="gradient-text-2 mt-4 text-h1 font-semibold tracking-tight">
          Página não encontrada
        </h1>
        <p className="mt-4 text-foreground-secondary">
          O recurso solicitado não existe.
        </p>
        <Link href="/" className="btn-secondary mt-8 inline-flex h-11 items-center px-5 text-small font-medium">
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}