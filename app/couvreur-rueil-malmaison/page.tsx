import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CityPage, { type CityPageData } from "../components/CityPage";

export const metadata: Metadata = {
  title: "Couvreur Rueil-Malmaison (92500) – Rénovation Toiture Maison & Pavillon | Ent. GREMILLET",
  description: "Couvreur à Rueil-Malmaison (92500) : rénovation toiture tuiles, ardoise, isolation combles. Devis gratuit sous 48h. Garantie décennale. ☎ 06 23 85 35 07",
  alternates: { canonical: "/couvreur-rueil-malmaison" },
  openGraph: {
    title: "Couvreur Rueil-Malmaison (92500) – Ent. GREMILLET",
    description: "Rénovation toiture maison et pavillon à Rueil-Malmaison. Tuiles, ardoise, isolation. Devis gratuit.",
    url: "/couvreur-rueil-malmaison",
    locale: "fr_FR",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Ent. GREMILLET – Couvreur Rueil-Malmaison",
  url: "https://gremillet-couverture.fr/couvreur-rueil-malmaison",
  telephone: "+33623853507",
  address: { "@type": "PostalAddress", streetAddress: "73 Rue du Château", addressLocality: "Boulogne-Billancourt", postalCode: "92100", addressCountry: "FR" },
  areaServed: { "@type": "City", name: "Rueil-Malmaison" },
  priceRange: "€€",
};

const data: CityPageData = {
  city: "Rueil-Malmaison",
  postalCode: "92500",
  heroImage: "/lapla.JPG",
  tagline: "Expert en rénovation de toiture de maisons individuelles et pavillons. Tuiles, ardoise, isolation thermique. Devis sous 48h.",
  intro: "Rueil-Malmaison est l'une des communes les plus étendues du département 92, avec un tissu résidentiel très diversifié : pavillons des années 1930 à 1980, maisons de ville, villas bourgeoises. Ce parc immobilier vieillissant génère un besoin croissant en travaux de couverture. Les toitures en tuiles mécaniques de cette époque arrivent progressivement en fin de vie : tuiles déplacées, faîtières qui s'effritent, gouttières obstruées. Ent. GREMILLET intervient à Rueil-Malmaison pour accompagner les propriétaires dans la rénovation et l'entretien de leur toiture, avec des solutions adaptées à chaque type de bien et à chaque budget.",
  services: [
    {
      icon: "roofing",
      title: "Rénovation Toiture Tuiles & Ardoise",
      desc: "Remplacement partiel ou total de votre couverture en tuiles mécaniques, tuiles plates ou ardoise fiber-ciment. Matériaux de qualité, garantie décennale sur tous les travaux.",
    },
    {
      icon: "home_work",
      title: "Isolation Thermique des Combles",
      desc: "Isolation des combles perdus ou aménageables pour réduire vos factures de chauffage de 20 à 30 %. Éligible MaPrimeRénov' et TVA à 5,5 %. Bilan énergétique offert.",
    },
    {
      icon: "water_drop",
      title: "Gouttières, Fuite & Urgence",
      desc: "Remplacement de gouttières zinc ou PVC, débouchage, réparation de fuite sous 24h. Bâchage provisoire si nécessaire pour protéger votre bien dans les meilleurs délais.",
    },
  ],
  blocks: [
    {
      title: "Le Bâti de Rueil-Malmaison : Ce Que Nous Constatons Sur le Terrain",
      paragraphs: [
        "Les maisons individuelles de Rueil-Malmaison ont souvent été construites entre 1950 et 1980. À cet âge, les toitures en tuiles mécaniques présentent fréquemment des signes de fatigue : tuiles déplacées sous les cycles gel-dégel, mortier de faîtage qui s'effrite, gouttières en PVC craquelées. La végétation environnante — Rueil est bordée de zones boisées — accélère le développement de mousses et lichens qui s'infiltrent sous les tuiles et fragilisent les joints.",
        "Notre traitement anti-mousse en deux étapes (nettoyage haute pression puis application d'hydrofuge) protège efficacement votre toiture pour 7 à 10 ans, sans nécessiter de rénovation complète si la structure est encore saine.",
      ],
    },
    {
      title: "Aides Financières et Délais d'Intervention",
      paragraphs: [
        "L'isolation des combles perdus peut bénéficier de MaPrimeRénov', de la TVA à 5,5 % et des Certificats d'Économie d'Énergie (CEE), ce qui réduit sensiblement le reste à charge. Nous vous orientons vers les dispositifs applicables lors de notre visite gratuite.",
        "Depuis Boulogne-Billancourt, nous rejoignons Rueil-Malmaison en 20 minutes. En cas d'urgence — tuile envolée, fuite soudaine — nous intervenons sous 24h, 6 jours sur 7.",
      ],
      list: [
        "<strong>Nanterre / Suresnes</strong> – urgences et rénovations",
        "<strong>Puteaux / Vaucresson</strong> – maisons individuelles",
        "<strong>Chatou / Le Pecq (78)</strong> – interventions riverains de Seine",
        "<strong>Versailles (78)</strong> – sur devis, déplacement offert",
      ],
    },
  ],
  tarif: "Rénovation tuiles : 50 à 120 €/m². Ardoise : 80 à 160 €/m². Isolation combles perdus : 20 à 50 €/m² avant aides. Devis gratuit sans engagement — remis sous 48h après visite à Rueil-Malmaison.",
  faqs: [
    {
      q: "Faut-il une autorisation pour changer la toiture d'un pavillon à Rueil-Malmaison ?",
      a: "Si vous remplacez uniquement les matériaux de couverture sans modifier la forme du toit, une déclaration préalable de travaux suffit généralement. Pour un changement de forme ou une surélévation, un permis de construire peut être requis. Nous vous accompagnons dans les démarches.",
    },
    {
      q: "L'isolation des combles est-elle aidée à Rueil-Malmaison en 2025-2026 ?",
      a: "Oui. Sous conditions de ressources, vous pouvez bénéficier de MaPrimeRénov', de la TVA à 5,5 % et des Certificats d'Économie d'Énergie. Nous vous orientons vers les dispositifs applicables lors de notre visite gratuite.",
    },
    {
      q: "Quel est le prix d'un nettoyage de toiture à Rueil-Malmaison ?",
      a: "Un nettoyage haute pression suivi d'un traitement hydrofuge revient entre 15 et 35 €/m² selon la surface et l'état de la toiture. Un investissement bien inférieur à une rénovation complète, et qui prolonge la durée de vie de 10 à 15 ans.",
    },
  ],
  nearby: [
    { label: "Nanterre", href: "/couvreur-nanterre" },
    { label: "Suresnes", href: "/couvreur-suresnes" },
    { label: "Neuilly-sur-Seine", href: "/couvreur-neuilly-sur-seine" },
    { label: "Puteaux" },
    { label: "Vaucresson" },
    { label: "Chatou (78)" },
    { label: "Versailles (78)" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <CityPage data={data} />
      <Footer />
    </>
  );
}
