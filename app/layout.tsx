import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000",
  ),
  title: {
    default: "Costa & Mendes Advocacia",
    template: "%s · Costa & Mendes Advocacia",
  },
  description:
    "Aconselhamento atencioso, rigor técnico e condução estratégica em direito trabalhista, família e empresarial em São Paulo.",
  openGraph: {
    title: "Costa & Mendes Advocacia",
    description:
      "Clareza jurídica para decisões que importam. Escritório em São Paulo com atuação em trabalhista, família e empresarial.",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/hero.webp", width: 1280, height: 720 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-brand-sand text-brand-charcoal font-body">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
