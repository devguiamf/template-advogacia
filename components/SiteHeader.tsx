"use client";

import Link from "next/link";
import { useEffect, useState, startTransition, ViewTransition } from "react";
import { BrandMark } from "@/components/BrandMark";
import { firm, navLinks } from "@/lib/content";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function toggleMenu() {
    startTransition(() => setMenuOpen((open) => !open));
  }

  function closeMenu() {
    startTransition(() => setMenuOpen(false));
  }

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled || menuOpen
          ? "border-brand-border/80 bg-brand-sand/95 backdrop-blur-md"
          : "border-outline-variant/15 bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link
          href="/"
          transitionTypes={["nav-back"]}
          className="group flex items-center gap-3 text-primary"
          onClick={closeMenu}
        >
          <BrandMark size={32} />
          <span className="font-headline flex items-center gap-2 text-base font-bold tracking-tight uppercase sm:text-lg md:text-xl">
            <span className="tracking-[0.18em]">{firm.name}</span>
            <span className="hidden border-l border-primary/20 pl-2 text-xs font-semibold tracking-widest text-secondary uppercase sm:inline">
              Advocacia
            </span>
          </span>
        </Link>

        <nav className="font-body hidden items-center space-x-10 text-sm font-medium tracking-wide md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-brand-charcoal transition-colors hover:text-brand-teal"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contato"
            className="rounded-lg bg-brand-navy px-5 py-2.5 text-brand-sand transition-editorial hover:bg-brand-teal"
          >
            Agendar Consulta
          </a>
        </nav>

        <button
          type="button"
          className="font-body flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-brand-lightline text-sm font-medium text-brand-navy md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
        >
          {menuOpen ? "Fechar" : "Menu"}
        </button>
      </div>

      {menuOpen ? (
        <ViewTransition enter="fade-in" exit="fade-out" default="none">
          <div
            id="mobile-menu"
            className="border-t border-brand-lightline bg-brand-sand md:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body min-h-11 py-3 text-base text-brand-charcoal"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#contato"
                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-lg bg-brand-navy px-5 py-3 text-sm font-medium text-brand-sand"
                onClick={closeMenu}
              >
                Agendar Consulta
              </a>
            </nav>
          </div>
        </ViewTransition>
      ) : null}
    </header>
  );
}
