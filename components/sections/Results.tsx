import { results } from "@/lib/content";

export function ResultsSection() {
  return (
    <section
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
                  className="font-headline text-5xl leading-none text-brand-teal/40 select-none"
                >
                  “
                </span>
                <p className="font-headline -mt-3 mb-6 text-xl leading-relaxed font-normal text-brand-charcoal">
                  {item.quote}
                </p>
              </div>
              <div className="border-t border-brand-lightline/80 pt-6">
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
