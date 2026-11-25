import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://arfedait.no"),
  title: {
    default: "Aracena Fernando | Fullstack Utvikler & AI-arkitekt Oslo",
    template: "%s | arfeda IT",
  },
  description: "Fullstack-utvikler og KI-arkitekt i Oslo. Jeg bygger KI-systemer der modellen foreslår, koden kontrollerer og mennesket bestemmer.",
  keywords: ["Fullstack Utvikler", "AI-arkitekt", "Oslo", "LangGraph", "Forensic Tech", "Norsk politi", "Next.js", "Python", "Maskinlæring"],
  authors: [{ name: "Aracena Fernando" }],
  creator: "Aracena Fernando",
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://arfedait.no",
    title: "Aracena Fernando | Fullstack Utvikler & AI-arkitekt",
    description: "KI-systemer for kriminalteknikk og fagdokumentasjon, der modellen foreslår, koden kontrollerer og mennesket bestemmer.",
    siteName: "arfeda IT",
    images: [
      {
        url: "/images/og-image.png", // Asegúrate de crear esta imagen más adelante
        width: 1200,
        height: 630,
        alt: "Aracena Fernando - AI Architect & Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aracena Fernando | AI Architect & Developer",
    description: "KI-arkitekt i Oslo: modellen foreslår, koden kontrollerer, mennesket bestemmer.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org JSON-LD para GEO y AEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aracena Fernando",
    "jobTitle": "Fullstack Utvikler & AI-arkitekt",
    "url": "https://arfedait.no",
    "sameAs": [
      "https://github.com/FernandoAracena",
      "https://linkedin.com/in/fernandoaracena"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Oslo",
      "addressCountry": "NO"
    },
    "knowsAbout": ["Artificial Intelligence", "Fullstack Development", "Forensic Technology", "LangGraph", "Next.js", "Python"]
  };

  return (
    <html lang="no" suppressHydrationWarning>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* No analytics (removed 25.11.2026). This only clears cookies an earlier Google Analytics may have left. */}
        <Script id="forget-analytics" src="/forget-analytics.js" strategy="afterInteractive" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          inter.className
        )}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
