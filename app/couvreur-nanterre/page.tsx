import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CityPage, { type CityPageData } from "../components/CityPage";

export const metadata: Metadata = {
  title: "Couvreur Nanterre (92000) – Urgence Toiture 24h & Rénovation | Ent. GREMILLET",
  description: "Couvreur à Nanterre (92000) : urgence fuite toiture sous 24h, rénovation maison, pavillon et immeuble. Devis gratuit. Garantie décennale. ☎ 06 23 85 35 07",
  alternates: { canonical: "/couvreur-nanterre" },
  openGraph: {
    title: "Couvreur Nanterre (92000) – Ent. GREMILLET",
    description: "Couvreur réactif à Nanterre : urgences toiture 24h, rénovation tous types de bâti. Devis gratuit.",
    url: "/couvreur-nanterre",
    locale: "fr_FR",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Ent. GREMILLET – Couvreur Nanterre",
  url: "https://gremillet-couverture.fr/couvreur-nanterre",
  telephone: "+33623853507",
  address: { "@type": "PostalAddress", streetAddress: "73 Rue du Château", addressLocality: "Boulogne-Billancourt", postalCode: "92100", addressCountry: "FR" },
  areaServed: { "@type": "City", name: "Nanterre" },
  priceRange: "€€",
};

const data: CityPageData = {
  city: "Nanterre",
  postalCode: "92000",
  heroImage: "/eee.JPG",
  tagline: "Couvreur polyvalent pour tous types de bâti : maisons, pavillons, immeubles. Urgence toiture sous 24h. Disponible 6j/7.",
  intro: "Nanterre est la préfecture et la commune la plus peuplée des Hauts-de-Seine avec plus de 90 000 habitants. Son tissu urbain est extrêmement varié : quartiers de maisons individuelles, grands ensembles des années 1960-1980, immeubles récents en périphérie de La Défense. Cette diversité de bâti génère une grande variété de problématiques de couverture : toitures-terrasses, tuiles mécaniques, ardoise, zinc ou bac acier. Ent. GREMILLET intervient à Nanterre pour l'ensemble de ces configurations, avec une équipe polyvalente et la capacité d'agir rapidement sur tout type de chantier.",
  services: [
    {
      icon: "emergency",
      title: "Urgence Toiture 24h",
      desc: "Intervention sous 24h pour toute fuite, tuile arrachée ou dégât après tempête. Bâchage provisoire disponible pour protéger votre bien dans l'attente de la réparation définitive.",
    },
    {
      icon: "roofing",
      title: "Rénovation Tous Types de Bâti",
      desc: "Rénovation de toiture en tuiles, ardoise, zinc, bac acier ou étanchéité terrasse. Adaptation à chaque type de construction, des maisons individuelles aux immeubles collectifs.",
    },
    {
      icon: "home_work",
      title: "Isolation & Zinguerie",
      desc: "Isolation thermique des combles perdus et aménageables, remplacement de gouttières et zinguerie complète. Devis détaillé avec estimation des aides de l'État.",
    },
  ],
  blocks: [
    {
      title: "Nanterre : Une Ville aux Besoins de Couverture Très Diversifiés",
      paragraphs: [
        "La réalité du bâti nanterrien, c'est la coexistence de plusieurs décennies de construction sur un même territoire. Les quartiers anciens concentrent des maisons des années 1930 à 1960 dont les toitures en tuiles mécaniques approchent souvent leur fin de vie. Les grandes résidences des années 1970-1980 présentent fréquemment des problèmes d'étanchéité sur leurs toitures-terrasses. Les constructions récentes en secteur La Défense nécessitent des interventions de maintenance spécialisées.",
        "Ent. GREMILLET dispose de l'expérience et du matériel adapté à chacune de ces situations, quelle que soit la hauteur ou la complexité du bâtiment. Nos prix sont clairs : nous ne facturons jamais plus que le montant du devis signé.",
      ],
    },
    {
      title: "Réactivité et Transparence à Nanterre",
      paragraphs: [
        "Depuis Boulogne-Billancourt, nous rejoignons Nanterre en 20 à 30 minutes. En cas d'urgence toiture, nous garantissons une réponse sous 24h, 6 jours sur 7. Si nécessaire, nous mettons en place un bâchage sécurisé pour limiter immédiatement les dégâts.",
      ],
      list: [
        "<strong>Réparation ponctuelle</strong> : 150 à 500 € (tuiles, ardoises, gouttières)",
        "<strong>Rénovation complète</strong> : 4 000 à 20 000 € selon surface et matériaux",
        "<strong>Isolation combles perdus</strong> : 20 à 50 €/m² avant aides d'État",
        "<strong>Étanchéité terrasse</strong> : 40 à 100 €/m² tout compris",
      ],
    },
  ],
  tarif: "Devis gratuit, transparent et sans engagement. Le montant facturé correspond exactement au devis signé — aucune mauvaise surprise. Contactez-nous au 06 23 85 35 07 ou via le formulaire.",
  faqs: [
    {
      q: "Intervenez-vous en urgence le week-end à Nanterre ?",
      a: "Nous intervenons 6 jours sur 7, du lundi au samedi. En cas de sinistre grave (infiltration massive, toiture endommagée par la grêle), nous priorisons l'intervention et pouvons mettre en place un bâchage provisoire dès le lendemain matin.",
    },
    {
      q: "Comment choisir entre réparation partielle et rénovation complète à Nanterre ?",
      a: "Si moins de 30 % des éléments de couverture sont défectueux et que la charpente est saine, une réparation ciblée est suffisante et plus économique. Au-delà, une rénovation complète est souvent plus rentable sur le long terme. Nous vous conseillons en toute transparence lors du diagnostic gratuit.",
    },
    {
      q: "Travaillez-vous avec des bailleurs sociaux ou gestionnaires d'immeuble à Nanterre ?",
      a: "Oui. Nous intervenons pour des particuliers, des syndicats de copropriété et des gestionnaires immobiliers à Nanterre. Nous fournissons l'ensemble des documents administratifs requis (attestations, assurances, planning) pour faciliter les procédures.",
    },
  ],
  nearby: [
    { label: "Rueil-Malmaison", href: "/couvreur-rueil-malmaison" },
    { label: "Suresnes", href: "/couvreur-suresnes" },
    { label: "Levallois-Perret", href: "/couvreur-levallois-perret" },
    { label: "Courbevoie" },
    { label: "Puteaux" },
    { label: "Colombes" },
    { label: "Asnières-sur-Seine" },
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
