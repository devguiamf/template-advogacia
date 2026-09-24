import type { Metadata } from "next";
import Link from "next/link";
import { DirectionalPage } from "@/components/DirectionalPage";

export const metadata: Metadata = {
  title: "Privacidade",
  description:
    "Política de privacidade e tratamento de dados da Costa & Mendes Advocacia.",
};

export default function PrivacidadePage() {
  return (
    <DirectionalPage>
      <LegalShell title="Privacidade">
        <p>
          A Costa & Mendes Advocacia trata dados pessoais com finalidade
          exclusivamente profissional, limitada ao atendimento de consultas, à
          condução de mandatos e às obrigações legais aplicáveis.
        </p>
        <p>
          Informações enviadas pelo formulário de contato são utilizadas para
          retorno confidencial da recepção e não são compartilhadas com
          terceiros sem base legal ou autorização.
        </p>
        <p>
          Para exercer direitos previstos na LGPD, escreva para{" "}
          <a
            href="mailto:contato@costamendes.adv.br"
            className="text-brand-navy underline decoration-brand-lightline underline-offset-4 hover:text-brand-teal"
          >
            contato@costamendes.adv.br
          </a>
          .
        </p>
      </LegalShell>
    </DirectionalPage>
  );
}

function LegalShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
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
        {title}
      </h1>
      <div className="font-body mt-8 space-y-5 text-base leading-relaxed text-brand-muted">
        {children}
      </div>
    </article>
  );
}
