import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DirectionalPage } from "@/components/DirectionalPage";
import { SharedTitle } from "@/components/SharedTitle";
import { getPracticeArea, practiceAreas } from "@/lib/content";

type Props = PageProps<"/atuacao/[slug]">;

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return {};
  return {
    title: area.title,
    description: area.summary,
  };
}

export default async function PracticeAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  return (
    <DirectionalPage>
      <article className="mx-auto max-w-3xl px-6 pt-32 pb-24 lg:px-12 lg:pb-36">
        <Link
          href="/#atuacao"
          transitionTypes={["nav-back"]}
          className="font-body inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition-editorial hover:text-brand-teal"
        >
          <span aria-hidden>←</span>
          Áreas de Atuação
        </Link>

        <span className="font-body mt-10 mb-2 block text-xs font-semibold tracking-[0.25em] text-brand-teal uppercase">
          {area.eyebrow}
        </span>

        <SharedTitle
          name={`atuacao-${area.slug}`}
          className="font-headline text-4xl font-medium tracking-tight text-brand-navy sm:text-5xl"
        >
          {area.title}
        </SharedTitle>

        <p className="font-body mt-6 text-lg leading-relaxed text-brand-muted">
          {area.summary}
        </p>

        <ul className="mt-12 space-y-5 border-t border-brand-lightline pt-10">
          {area.detail.map((item) => (
            <li
              key={item}
              className="font-body flex gap-4 text-base leading-relaxed text-brand-charcoal"
            >
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal"
              />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-14">
          <Link
            href="/#contato"
            transitionTypes={["nav-back"]}
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-brand-navy px-8 py-3.5 text-sm font-medium tracking-wide text-brand-sand transition-editorial hover:bg-brand-teal"
          >
            Agendar consulta
          </Link>
        </div>
      </article>
    </DirectionalPage>
  );
}
