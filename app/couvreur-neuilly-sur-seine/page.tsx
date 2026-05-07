import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CityPage, { type CityPageData } from "../components/CityPage";

export const metadata: Metadata = {
  title: "Couvreur Neuilly-sur-Seine (92200) – Ardoise, Zinc & Toitures de Prestige | Ent. GREMILLET",
  description: "Couvreur à Neuilly-sur-Seine (92200) spécialisé en toitures haussmanniennes, ardoise naturelle et zinguerie. Devis gratuit sous 24h. Garantie décennale. ☎ 06 23 85 35 07",
  alternates: { canonical: "/couvreur-neuilly-sur-seine" },
  openGraph: {
    title: "Couvreur Neuilly-sur-Seine (92200) – Ent. GREMILLET",
    description: "Artisan couvreur à Neuilly-sur-Seine : toitures en ardoise, zinguerie, réparation urgente. Devis gratuit.",
    url: "/couvreur-neuilly-sur-seine",
    locale: "fr_FR",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Ent. GREMILLET – Couvreur Neuilly-sur-Seine",
  url: "https://gremillet-couverture.fr/couvreur-neuilly-sur-seine",
  telephone: "+33623853507",
  address: { "@type": "PostalAddress", streetAddress: "73 Rue du Château", addressLocality: "Boulogne-Billancourt", postalCode: "92100", addressCountry: "FR" },
  areaServed: { "@type": "City", name: "Neuilly-sur-Seine" },
  priceRange: "€€",
};

const data: CityPageData = {
  city: "Neuilly-sur-Seine",
  postalCode: "92200",
  heroImage: "/heic1.png",
  tagline: "Spécialiste en toitures haussmanniennes, ardoise naturelle et zinguerie de prestige. Intervention sous 24h, 6j/7.",
  intro: "Neuilly-sur-Seine est réputée pour son patrimoine architectural d'exception : hôtels particuliers Belle Époque, immeubles haussmanniens aux toitures en ardoise naturelle, résidences de standing couvertes de zinc. Ces bâtiments centenaires exigent un savoir-faire précis, des matériaux nobles assortis à l'existant et une gestion rigoureuse du chantier en milieu urbain dense. Ent. GREMILLET, couvreur artisan basé à Boulogne-Billancourt à moins de 10 minutes, intervient régulièrement à Neuilly-sur-Seine pour des rénovations de toiture, réfections de zinguerie et réparations d'urgence.",
  services: [
    {
      icon: "roofing",
      title: "Couverture Ardoise & Zinc",
      desc: "Rénovation complète ou partielle en ardoise naturelle et zinc. Matériaux assortis à l'existant pour préserver la valeur patrimoniale de votre immeuble ou hôtel particulier.",
    },
    {
      icon: "handyman",
      title: "Zinguerie de Précision",
      desc: "Chéneaux, gouttières zinc, abergements, noues, tabatières. Maîtrise de la zinguerie traditionnelle pour les immeubles haussmanniens et résidences de prestige de Neuilly.",
    },
    {
      icon: "water_drop",
      title: "Urgence & Réparation 24h",
      desc: "Intervention sous 24h pour toute infiltration, ardoise déplacée ou gouttière arrachée. Disponible 6 jours sur 7 à Neuilly-sur-Seine et dans tout le nord du 92.",
    },
  ],
  blocks: [
    {
      title: "Des Toitures Centenaires qui Exigent une Expertise Particulière",
      paragraphs: [
        "Les immeubles haussmanniens de Neuilly-sur-Seine présentent des spécificités techniques complexes : toitures mansardées à forte pente (40 à 60°), chéneaux cachés sous les corniches, lucarnes ornementales. Les chéneaux obstrués par les feuilles génèrent des débordements qui s'infiltrent dans les façades et les parties communes. Les noues mal entretenues accumulent l'eau et fragilisent silencieusement la charpente.",
        "Ent. GREMILLET évalue systématiquement l'état de la charpente, de la zinguerie et des liaisons façade-toiture avant toute intervention. Nous collaborons régulièrement avec des syndics de copropriété, des gestionnaires de patrimoine et des architectes à Neuilly-sur-Seine, en fournissant l'ensemble des documents requis pour les appels d'offres : assurance décennale, RC Pro, attestations de qualification.",
      ],
    },
    {
      title: "Zone d'Intervention et Délais à Neuilly-sur-Seine",
      paragraphs: [
        "Depuis Boulogne-Billancourt, nous atteignons Neuilly-sur-Seine en moins de 15 minutes. Cette proximité est décisive pour les urgences toiture. Nous garantissons une première intervention sous 24h, 6 jours sur 7. Nous couvrons également les communes voisines :",
      ],
      list: [
        "<strong>Levallois-Perret</strong> – zinguerie et toitures haussmanniennes",
        "<strong>Puteaux / Courbevoie</strong> – immeubles et copropriétés",
        "<strong>Saint-Cloud / Garches</strong> – villas et maisons bourgeoises",
        "<strong>Paris 17e</strong> – interventions urgentes et rénovations",
      ],
    },
  ],
  tarif: "Toiture ardoise naturelle : 80 à 200 €/m² selon surface et complexité. Réparation localisée dès 200 €. Devis gratuit, détaillé, sans engagement — remis sous 48h après visite sur site.",
  faqs: [
    {
      q: "Intervenez-vous pour les copropriétés à Neuilly-sur-Seine ?",
      a: "Oui. Nous travaillons régulièrement avec des syndics et gestionnaires à Neuilly-sur-Seine. Nous fournissons l'assurance décennale, la RC Pro et les devis détaillés requis pour les assemblées générales et les appels d'offres.",
    },
    {
      q: "Peut-on rénover une toiture en ardoise partiellement à Neuilly ?",
      a: "Oui. Si moins de 30 % des ardoises sont défectueuses et que la charpente est saine, une réfection partielle suffit. Cela peut réduire le coût de 40 à 60 % par rapport à une rénovation totale. Nous l'évaluons lors de notre visite diagnostic gratuite.",
    },
    {
      q: "Combien coûte une réfection de zinguerie à Neuilly-sur-Seine ?",
      a: "Le coût varie selon le linéaire à traiter et les matériaux choisis. Comptez entre 80 et 200 €/ml pour des gouttières zinc posées, plus selon la complexité des chéneaux et abergements. Devis gratuit après visite.",
    },
  ],
  nearby: [
    { label: "Levallois-Perret", href: "/couvreur-levallois-perret" },
    { label: "Nanterre", href: "/couvreur-nanterre" },
    { label: "Rueil-Malmaison", href: "/couvreur-rueil-malmaison" },
    { label: "Puteaux" },
    { label: "Courbevoie" },
    { label: "Saint-Cloud" },
    { label: "Paris 17e" },
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
