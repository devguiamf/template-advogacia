import Image from "next/image";
import { firm } from "@/lib/content";

export function HeroSection() {
  return (
    <section
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
        <div className="absolute inset-0 bg-brand-navy/15 mix-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center lg:px-12">
        <div className="hero-content mb-4 inline-block">
          <span className="font-body mb-3 block text-xs font-semibold tracking-[0.35em] text-brand-teal uppercase md:text-sm">
            {firm.tagline}
          </span>
          <h2 className="font-headline text-4xl leading-[0.95] font-semibold tracking-tight text-brand-navy select-none sm:text-6xl md:text-7xl lg:text-8xl">
            {firm.name}
          </h2>
        </div>
        <div className="my-6 h-px w-16 bg-brand-navy/30" />
        <h1 className="font-headline max-w-3xl text-2xl leading-snug font-normal tracking-tight text-brand-charcoal sm:text-3xl md:text-4xl lg:text-5xl">
          {firm.headline}
        </h1>
        <p className="font-body mt-5 mb-10 max-w-2xl text-base leading-relaxed font-normal text-brand-muted sm:text-lg md:text-xl">
          {firm.support}
        </p>
        <div className="flex w-full flex-col items-center justify-center gap-5 sm:w-auto sm:flex-row sm:gap-8">
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
