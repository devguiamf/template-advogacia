"use client";

import Link from "next/link";
import { ViewTransition } from "react";
import { team } from "@/lib/content";

export function TeamSection() {
  return (
    <section
      id="equipe"
      className="border-t border-brand-lightline bg-brand-cream/40 py-24 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 max-w-3xl">
          <span className="font-body mb-2 block text-xs font-semibold tracking-[0.25em] text-brand-teal uppercase">
            Corpo Jurídico
          </span>
          <h2 className="font-headline mb-4 text-3xl font-normal text-brand-navy sm:text-4xl lg:text-5xl">
            Nossa Equipe
          </h2>
          <p className="font-body text-sm text-brand-muted sm:text-base">
            Liderança experiente e envolvimento pessoal dos sócios em cada caso.
            Formação acadêmica de excelência aliada a décadas de prática forense.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
          {team.map((member) => (
            <ViewTransition key={member.slug}>
              <article className="group space-y-4">
                <div className="border-b border-brand-lightline pb-4">
                  <ViewTransition
                    name={`pessoa-${member.slug}`}
                    share="text-morph"
                    default="none"
                  >
                    <h3 className="font-headline text-2xl font-medium text-brand-navy">
                      <Link
                        href={`/equipe/${member.slug}`}
                        transitionTypes={["nav-forward"]}
                        className="hairline-link transition-colors hover:text-brand-teal"
                      >
                        {member.name}
                      </Link>
                    </h3>
                  </ViewTransition>
                  <span className="font-body mt-1 block text-xs font-semibold tracking-wider text-brand-teal uppercase">
                    {member.role}
                  </span>
                </div>
                <p className="font-body text-sm font-medium text-brand-charcoal">
                  {member.focus}
                </p>
                <p className="font-body text-xs leading-relaxed text-brand-muted sm:text-sm">
                  {member.bio}
                </p>
                <Link
                  href={`/equipe/${member.slug}`}
                  transitionTypes={["nav-forward"]}
                  className="inline-flex items-center gap-2 font-body text-sm font-semibold text-brand-navy transition-editorial hover:text-brand-teal"
                >
                  Perfil completo
                  <span
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </article>
            </ViewTransition>
          ))}
        </div>
      </div>
    </section>
  );
}
