import { ContactForm } from "@/components/ContactForm";
import { firm } from "@/lib/content";

function PinIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
      />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.5 4.5h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A14 14 0 0 1 4.5 6.5a2 2 0 0 1 2-2Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path strokeLinecap="round" d="m4.5 7.5 7.5 5.5 7.5-5.5" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section
      id="contato"
      className="border-t border-brand-lightline bg-brand-sand py-24 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 lg:col-span-5">
            <span className="font-body block text-xs font-semibold tracking-[0.25em] text-brand-teal uppercase">
              Atendimento Reservado
            </span>
            <h2 className="font-headline text-3xl leading-tight font-normal text-brand-navy sm:text-4xl lg:text-5xl">
              Agende uma conversa confidencial com nossos sócios.
            </h2>
            <p className="font-body text-base leading-relaxed text-brand-muted">
              Nossos atendimentos são pautados pela privacidade estrita, discrição
              técnica e análise prévia de viabilidade de mandatos.
            </p>
            <div className="space-y-6 border-t border-brand-lightline pt-6">
              <div className="flex items-start gap-4">
                <PinIcon />
                <div>
                  <span className="font-body block text-xs font-semibold tracking-wider text-brand-navy uppercase">
                    {firm.address.label}
                  </span>
                  <p className="font-body mt-1 text-sm leading-relaxed text-brand-muted">
                    {firm.address.lines[0]}
                    <br />
                    {firm.address.lines[1]}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <PhoneIcon />
                <div>
                  <span className="font-body block text-xs font-semibold tracking-wider text-brand-navy uppercase">
                    {firm.phone.label}
                  </span>
                  <a
                    href={firm.phone.href}
                    className="font-body text-sm text-brand-charcoal transition-colors hover:text-brand-teal"
                  >
                    {firm.phone.display}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MailIcon />
                <div>
                  <span className="font-body block text-xs font-semibold tracking-wider text-brand-navy uppercase">
                    {firm.email.label}
                  </span>
                  <a
                    href={firm.email.href}
                    className="font-body text-sm text-brand-charcoal transition-colors hover:text-brand-teal"
                  >
                    {firm.email.display}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
