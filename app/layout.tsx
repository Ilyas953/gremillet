import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const SITE_URL = "https://www.couvreur92gremillet.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Couvreur Boulogne-Billancourt 92 | Ent. GREMILLET – Devis Gratuit",
  description:
    "Couvreur professionnel à Boulogne-Billancourt (92). Rénovation toiture, isolation thermique, zinguerie, recherche de fuite. Devis gratuit. ☎ 06 23 85 35 07",
  keywords: [
    "couvreur Boulogne-Billancourt",
    "couvreur 92",
    "rénovation toiture 92",
    "réparation toiture Boulogne",
    "isolation thermique toiture",
    "zingueur Boulogne-Billancourt",
    "recherche fuite toiture",
    "étanchéité toiture",
    "peinture toiture",
    "couvreur Île-de-France",
    "couvreur Hauts-de-Seine",
    "devis toiture gratuit",
    "Ent GREMILLET",
  ],
  authors: [{ name: "Ent. GREMILLET" }],
  creator: "Ent. GREMILLET",
  publisher: "Ent. GREMILLET",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Couvreur Boulogne-Billancourt 92 | Ent. GREMILLET",
    description:
      "Couvreur professionnel à Boulogne-Billancourt. Rénovation toiture, zinguerie, isolation thermique. Devis gratuit.",
    type: "website",
    url: "/",
    locale: "fr_FR",
    siteName: "Ent. GREMILLET – Couvreur 92",
    images: [{ url: "/heic1.png", width: 1200, height: 630, alt: "Couvreur Boulogne-Billancourt – Ent. GREMILLET" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Couvreur Boulogne-Billancourt 92 | Ent. GREMILLET",
    description: "Couvreur professionnel à Boulogne-Billancourt. Rénovation toiture, zinguerie, isolation thermique.",
    images: ["/heic1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  other: {
    "geo.region": "FR-92",
    "geo.placename": "Boulogne-Billancourt",
    "geo.position": "48.8415;2.2396",
    ICBM: "48.8415, 2.2396",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${oswald.variable} ${roboto.variable}`}>
      <head>
        <link rel="preload" as="image" href="/heic1.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
        <JsonLd siteUrl={SITE_URL} />
      </head>
      <body>{children}</body>
    </html>
  );
}
