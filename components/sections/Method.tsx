"use client";

import { useRef } from "react";
import { methodSteps } from "@/lib/content";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

export function MethodSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = sectionRef.current;
      if (!root) return;

      const track = root.querySelector(".method-track");
      const progress = root.querySelector(".method-progress");
      const steps = gsap.utils.toArray<HTMLElement>(".method-step", root);
      const dots = gsap.utils.toArray<HTMLElement>(".method-dot", root);

      if (prefersReducedMotion()) {
        gsap.set(progress, { scaleY: 1 });
        steps.forEach((step, i) => {
          gsap.set(step, { opacity: i === 0 ? 1 : 0.55 });
          if (i === 0) dots[i]?.classList.add("method-dot--active");
        });
        return;
      }

      gsap.set(progress, { scaleY: 0, transformOrigin: "top center" });
      gsap.set(steps, { opacity: 0.45 });

      gsap.to(progress, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: track,
          start: "top 70%",
          end: "bottom 40%",
          scrub: 0.6,
          onUpdate: (self) => {
            const index = Math.min(
              steps.length - 1,
              Math.floor(self.progress * steps.length),
            );
            steps.forEach((step, i) => {
              const active = i <= index;
              const current = i === index;
              gsap.to(step, {
                opacity: active ? 1 : 0.45,
                duration: 0.25,
                overwrite: "auto",
              });
              dots[i]?.classList.toggle("method-dot--active", current);
              dots[i]?.classList.toggle("method-dot--done", active && !current);
            });
          },
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="metodo"
      className="border-t border-brand-lightline bg-brand-cream/50 py-24 lg:py-36"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-12 lg:px-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <span className="font-body mb-2 block text-xs font-semibold tracking-[0.25em] text-brand-teal uppercase">
              Rigor & Conduta
            </span>
            <h2 className="font-headline mb-6 text-3xl font-normal text-brand-navy sm:text-4xl lg:text-5xl">
              Como Trabalhamos
            </h2>
            <p className="font-body text-base leading-relaxed text-brand-muted sm:text-lg">
              Nossa metodologia prescinde de soluções padronizadas. Cada mandato
              é conduzido por sócios a partir de um ciclo analítico de quatro
              etapas contínuas.
            </p>
          </div>
        </div>

        <div className="method-track relative space-y-16 border-l border-brand-navy/15 pl-6 sm:pl-12 ml-3 sm:ml-0 lg:col-span-7 lg:space-y-20">
          <div
            aria-hidden
            className="method-progress absolute top-0 left-[-1px] h-full w-0.5 origin-top scale-y-0 bg-brand-teal"
          />
          {methodSteps.map((step) => (
            <div key={step.id} className="method-step relative group">
              <div className="method-dot absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-brand-teal bg-brand-sand transition-transform duration-200 sm:-left-[55px]" />
              <div className="max-w-3xl">
                <span className="font-headline mb-1 block text-xs font-semibold tracking-widest text-brand-teal uppercase sm:text-sm">
                  Etapa {step.id}
                </span>
                <h3 className="font-headline mb-3 text-2xl font-medium text-brand-navy sm:text-3xl">
                  {step.title}
                </h3>
                <p className="font-body text-base leading-relaxed text-brand-muted">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
