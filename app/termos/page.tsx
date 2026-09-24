import type { Metadata } from "next";
import Link from "next/link";
import { DirectionalPage } from "@/components/DirectionalPage";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do site institucional da Costa & Mendes Advocacia.",
};

export default function TermosPage() {
  return (
    <DirectionalPage>
      <article className="mx-auto max-w-3xl px-6 pt-32 pb-24 lg:px-12 lg:pb-36">
        <Link
          href="/"
          transitionTypes={["nav-back"]}
          className="font-body inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition-editorial hover:text-brand-teal"
        >
          <span aria-hidden>←</span>
          Início
        </Link>
        <h1 className="font-headline mt-10 text-4xl font-medium tracking-tight text-brand-navy sm:text-5xl">
          Termos de Uso
        </h1>
        <div className="font-body mt-8 space-y-5 text-base leading-relaxed text-brand-muted">
          <p>
            Este site tem caráter institucional e informativo. O conteúdo não
            constitui consulta jurídica, parecer ou vinculação contratual.
          </p>
          <p>
            O envio de mensagens pelo formulário não cria relação advogado-cliente
            até confirmação expressa do escritório e eventual contratação.
          </p>
          <p>
            É vedada a reprodução integral de textos, marcas e materiais sem
            autorização prévia por escrito.
          </p>
        </div>
      </article>
    </DirectionalPage>
  );
}
