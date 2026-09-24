import { methodSteps } from "@/lib/content";

export function MethodSection() {
  return (
    <section
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

        <div className="relative space-y-16 border-l border-brand-navy/15 pl-6 sm:pl-12 ml-3 sm:ml-0 lg:col-span-7 lg:space-y-20">
          {methodSteps.map((step) => (
            <div key={step.id} className="method-step relative group">
              <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-brand-teal bg-brand-sand transition-transform duration-200 group-hover:scale-125 sm:-left-[55px]" />
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
