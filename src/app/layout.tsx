import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const GA_MEASUREMENT_ID = "G-ZMWY04D5Y7";

export const metadata: Metadata = {
  metadataBase: new URL("https://arfedait.no"),
  title: {
    default: "Aracena Fernando | Fullstack Utvikler & AI-arkitekt Oslo",
    template: "%s | arfedaIT.no",
  },
  description: "Spesialist innen Forensic Tech, avansert AI-orkestrering med LangGraph og samfunnskritiske IT-løsninger i Oslo.",
  keywords: ["Fullstack Utvikler", "AI-arkitekt", "Oslo", "LangGraph", "Forensic Tech", "Norsk politi", "Next.js", "Python", "Maskinlæring"],
  authors: [{ name: "Aracena Fernando" }],
  creator: "Aracena Fernando",
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://arfedait.no",
    title: "Aracena Fernando | Fullstack Utvikler & AI-arkitekt",
    description: "Utvikler fremtidens AI-løsninger og robuste systemer for rettsmedisin og etterforskning.",
    siteName: "arfedaIT.no",
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
    description: "Spesialist på AI-agenter og Forensic Tech i Oslo.",
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
      "https://github.com/arfeda",
      "https://linkedin.com/in/fernandoaracena" // Reemplaza con tus links reales
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
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
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
