import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { firm } from "@/lib/content";

const legalLinks = [
  { href: "/privacidade", label: "Privacidade" },
  { href: "/termos", label: "Termos de Uso" },
  { href: "/etica", label: "Código de Ética OAB" },
] as const;

export function SiteFooter() {
  return (
    <footer
      className="w-full border-t border-outline-variant/20 bg-surface-lowest"
      style={{ viewTransitionName: "site-footer" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="flex items-center gap-3">
          <BrandMark size={28} />
          <div>
            <p className="font-headline text-base font-semibold text-brand-navy">
              {firm.legalName}
            </p>
            <p className="font-body text-xs text-brand-muted md:text-sm">
              © {new Date().getFullYear()} {firm.legalName}. {firm.oab}. Todos
              os direitos reservados.
            </p>
          </div>
        </div>
        <nav className="font-body flex flex-wrap items-center gap-6 text-xs leading-relaxed text-on-surface-variant md:text-sm">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              transitionTypes={["nav-forward"]}
              className="transition-colors hover:text-brand-teal"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
