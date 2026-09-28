"use client";

import Image from "next/image";
import { useRef } from "react";
import { firm } from "@/lib/content";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = sectionRef.current;
      if (!root) return;

      const image = root.querySelector(".hero-parallax");
      const rule = root.querySelector(".hero-rule");
      const brand = root.querySelector(".hero-brand");
      const headline = root.querySelector(".hero-headline");
      const support = root.querySelector(".hero-support");
      const ctas = root.querySelector(".hero-ctas");
      const overlay = root.querySelector(".hero-overlay");

      if (!rule || !brand || !headline || !support || !ctas) return;

      if (prefersReducedMotion()) {
        gsap.set([brand, rule, headline, support, ctas], {
          autoAlpha: 1,
          y: 0,
          scaleX: 1,
        });
        return;
      }

      gsap.set([brand, headline, support, ctas], { autoAlpha: 0, y: 16 });
      gsap.set(rule, { scaleX: 0, transformOrigin: "center center" });
      if (image) gsap.set(image, { scale: 1.12 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      if (image) {
        tl.to(image, { scale: 1.08, duration: 0.7 }, 0);
      }
      tl.to(rule, { scaleX: 1, duration: 0.5 }, 0.15)
        .to(brand, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.2)
        .to(headline, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.35)
        .to(support, { autoAlpha: 1, y: 0, duration: 0.45 }, 0.45)
        .to(ctas, { autoAlpha: 1, y: 0, duration: 0.4 }, 0.55);

      if (overlay) {
        gsap.to(overlay, {
          opacity: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: 0.4,
          },
        });
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden pt-24 pb-16"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="hero-parallax absolute inset-[-12%] will-change-transform">
          <Image
            src="/hero.webp"
            alt="Salão de reuniões nobre e iluminado da Costa & Mendes Advocacia em São Paulo com vista para jardim interno"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-sand via-brand-sand/75 to-brand-navy/35" />
        <div className="hero-overlay absolute inset-0 bg-brand-navy/15 mix-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center lg:px-12">
        <div className="hero-brand mb-4 inline-block">
          <span className="font-body mb-3 block text-xs font-semibold tracking-[0.35em] text-brand-teal uppercase md:text-sm">
            {firm.tagline}
          </span>
          <h2 className="font-headline text-4xl leading-[0.95] font-semibold tracking-tight text-brand-navy select-none sm:text-6xl md:text-7xl lg:text-8xl">
            {firm.name}
          </h2>
        </div>
        <div className="hero-rule my-6 h-px w-16 bg-brand-navy/30" />
        <h1 className="hero-headline font-headline max-w-3xl text-2xl leading-snug font-normal tracking-tight text-brand-charcoal sm:text-3xl md:text-4xl lg:text-5xl">
          {firm.headline}
        </h1>
        <p className="hero-support font-body mt-5 mb-10 max-w-2xl text-base leading-relaxed font-normal text-brand-muted sm:text-lg md:text-xl">
          {firm.support}
        </p>
        <div className="hero-ctas flex w-full flex-col items-center justify-center gap-5 sm:w-auto sm:flex-row sm:gap-8">
          <a
            href="#contato"
            className="inline-flex w-full items-center justify-center rounded-lg bg-brand-navy px-8 py-4 font-body text-sm font-medium tracking-wide text-brand-sand shadow-none transition-editorial hover:bg-brand-teal sm:w-auto"
          >
            Agendar consulta
          </a>
          <a
            href="#atuacao"
            className="group inline-flex items-center gap-2 py-2 font-body text-sm font-semibold text-brand-navy transition-editorial hover:text-brand-teal"
          >
            <span>Conhecer o escritório</span>
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
