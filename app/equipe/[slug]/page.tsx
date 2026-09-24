import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DirectionalPage } from "@/components/DirectionalPage";
import { SharedTitle } from "@/components/SharedTitle";
import { getTeamMember, team } from "@/lib/content";

type Props = PageProps<"/equipe/[slug]">;

export function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return {};
  return {
    title: member.name,
    description: `${member.focus}. ${member.role}`,
  };
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) notFound();

  return (
    <DirectionalPage>
      <article className="mx-auto max-w-3xl px-6 pt-32 pb-24 lg:px-12 lg:pb-36">
        <Link
          href="/#equipe"
          transitionTypes={["nav-back"]}
          className="font-body inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition-editorial hover:text-brand-teal"
        >
          <span aria-hidden>←</span>
          Nossa Equipe
        </Link>

        <span className="font-body mt-10 mb-2 block text-xs font-semibold tracking-[0.25em] text-brand-teal uppercase">
          {member.role}
        </span>

        <SharedTitle
          name={`pessoa-${member.slug}`}
          className="font-headline text-4xl font-medium tracking-tight text-brand-navy sm:text-5xl"
        >
          {member.name}
        </SharedTitle>

        <p className="font-body mt-4 text-base font-medium text-brand-charcoal">
          {member.focus}
        </p>
        <p className="font-body mt-6 text-lg leading-relaxed text-brand-muted">
          {member.bio}
        </p>
        <p className="font-body mt-6 text-base leading-relaxed text-brand-charcoal">
          {member.longBio}
        </p>

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
