import type { Metadata } from "next";
import Link from "next/link";
import { DirectionalPage } from "@/components/DirectionalPage";

export const metadata: Metadata = {
  title: "Código de Ética OAB",
  description:
    "Compromisso da Costa & Mendes Advocacia com o Código de Ética e Disciplina da OAB.",
};

export default function EticaPage() {
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
          Código de Ética OAB
        </h1>
        <div className="font-body mt-8 space-y-5 text-base leading-relaxed text-brand-muted">
          <p>
            A Costa & Mendes Advocacia conduz sua prática em conformidade com o
            Código de Ética e Disciplina da Ordem dos Advogados do Brasil,
            inclusive quanto a sigilo profissional, independência e lealdade.
          </p>
          <p>
            Atendimentos reservados observam discrição técnica e análise prévia
            de viabilidade de mandatos, com comunicação clara sobre riscos e
            limites da atuação.
          </p>
          <p>
            Para dúvidas sobre conduta profissional, utilize os canais
            institucionais publicados na página de contato.
          </p>
        </div>
      </article>
    </DirectionalPage>
  );
}
