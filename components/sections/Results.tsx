"use client";

import { useRef } from "react";
import { results } from "@/lib/content";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

export function ResultsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = sectionRef.current;
      if (!root || prefersReducedMotion()) return;

      const quotes = gsap.utils.toArray<HTMLElement>(".result-quote-mark", root);
      const rules = gsap.utils.toArray<HTMLElement>(".result-rule", root);

      gsap.set(quotes, { autoAlpha: 0, y: 12 });
      gsap.set(rules, { scaleX: 0, transformOrigin: "left center" });

      quotes.forEach((mark, i) => {
        const card = mark.closest("article");
        const rule = rules[i];
        if (!card) return;

        gsap
          .timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          })
          .to(mark, {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            delay: i * 0.08,
          })
          .to(
            rule,
            {
              scaleX: 1,
              duration: 0.4,
            },
            "-=0.2",
          );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="resultados"
      className="border-t border-brand-lightline bg-brand-sand py-24 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 max-w-3xl">
          <span className="font-body mb-2 block text-xs font-semibold tracking-[0.25em] text-brand-teal uppercase">
            Jurisprudência & Precedentes
          </span>
          <h2 className="font-headline mb-4 text-3xl font-normal text-brand-navy sm:text-4xl lg:text-5xl">
            Resultados Relevantes
          </h2>
          <p className="font-body text-sm text-brand-muted sm:text-base">
            A eficácia técnica expressa na preservação de patrimônio, resolução
            pacífica e segurança jurídica para nossos constituintes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          {results.map((item) => (
            <article
              key={item.title}
              className="flex flex-col justify-between rounded-lg border border-brand-lightline bg-brand-cream/30 p-8"
            >
              <div>
                <span
                  aria-hidden
                  className="result-quote-mark font-headline text-5xl leading-none text-brand-teal/40 select-none"
                >
                  “
                </span>
                <p className="font-headline -mt-3 mb-6 text-xl leading-relaxed font-normal text-brand-charcoal">
                  {item.quote}
                </p>
              </div>
              <div className="pt-6">
                <div
                  aria-hidden
                  className="result-rule mb-6 h-px w-full bg-brand-lightline/80"
                />
                <span className="font-body block text-xs font-semibold tracking-wider text-brand-navy uppercase">
                  {item.title}
                </span>
                <span className="font-body text-xs text-brand-muted">
                  {item.meta}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
