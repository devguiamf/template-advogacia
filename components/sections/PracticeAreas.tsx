"use client";

import Link from "next/link";
import { ViewTransition } from "react";
import { practiceAreas } from "@/lib/content";

export function PracticeAreasSection() {
  return (
    <section
      id="atuacao"
      className="border-t border-outline-variant/30 bg-brand-sand py-24 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="relative mb-16 flex flex-col justify-between pb-6 md:flex-row md:items-end">
          <div>
            <span className="font-body mb-2 block text-xs font-semibold tracking-[0.25em] text-brand-teal uppercase">
              Prática & Especialização
            </span>
            <h2 className="font-headline text-3xl font-normal text-brand-navy sm:text-4xl lg:text-5xl">
              Áreas de Atuação
            </h2>
          </div>
          <p className="font-body mt-4 max-w-md text-sm leading-relaxed text-brand-muted md:mt-0">
            Atuação verticalizada em matérias de alta complexidade onde o
            aconselhamento discreto e o domínio doutrinário definem o desfecho.
          </p>
          <div
            aria-hidden
            className="section-border-grow absolute inset-x-0 bottom-0 h-px bg-brand-lightline"
          />
        </div>

        <div className="divide-y divide-brand-lightline">
          {practiceAreas.map((area, index) => (
            <ViewTransition key={area.slug}>
              <div className="group -mx-4 rounded-lg px-4 py-12 transition-editorial hover:bg-brand-cream/40 lg:py-16">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
                  <div className="lg:col-span-4">
                    <span className="font-body text-xs font-medium tracking-widest text-brand-muted transition-colors duration-300 group-hover:text-brand-teal">
                      0{index + 1}
                    </span>
                    <ViewTransition
                      name={`atuacao-${area.slug}`}
                      share="text-morph"
                      default="none"
                    >
                      <h3 className="font-headline mt-2 text-2xl font-medium text-brand-navy sm:text-3xl">
                        <Link
                          href={`/atuacao/${area.slug}`}
                          transitionTypes={["nav-forward"]}
                          className="hairline-link transition-colors hover:text-brand-teal"
                        >
                          {area.title}
                        </Link>
                      </h3>
                    </ViewTransition>
                    <span className="font-body mt-2 block text-xs font-semibold tracking-wider text-brand-teal uppercase">
                      {area.eyebrow}
                    </span>
                  </div>
                  <div className="lg:col-span-7 lg:col-start-6">
                    <p className="font-body text-base leading-relaxed text-brand-muted">
                      {area.summary}
                    </p>
                    <Link
                      href={`/atuacao/${area.slug}`}
                      transitionTypes={["nav-forward"]}
                      className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-brand-navy transition-editorial hover:text-brand-teal"
                    >
                      Ver atuação
                      <span
                        aria-hidden
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </ViewTransition>
          ))}
        </div>
      </div>
    </section>
  );
}
