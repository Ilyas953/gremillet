import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CityPage, { type CityPageData } from "../components/CityPage";

export const metadata: Metadata = {
  title: "Couvreur Levallois-Perret (92300) – Zinguerie & Toitures Haussmanniennes | Ent. GREMILLET",
  description: "Couvreur à Levallois-Perret (92300) spécialisé en zinguerie, ardoise et rénovation de toitures haussmanniennes. Devis gratuit 24h. ☎ 06 23 85 35 07",
  alternates: { canonical: "/couvreur-levallois-perret" },
  openGraph: {
    title: "Couvreur Levallois-Perret (92300) – Ent. GREMILLET",
    description: "Zinguerie, ardoise et rénovation de toitures haussmanniennes à Levallois-Perret. Devis gratuit.",
    url: "/couvreur-levallois-perret",
    locale: "fr_FR",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Ent. GREMILLET – Couvreur Levallois-Perret",
  url: "https://gremillet-couverture.fr/couvreur-levallois-perret",
  telephone: "+33623853507",
  address: { "@type": "PostalAddress", streetAddress: "73 Rue du Château", addressLocality: "Boulogne-Billancourt", postalCode: "92100", addressCountry: "FR" },
  areaServed: { "@type": "City", name: "Levallois-Perret" },
  priceRange: "€€",
};

const data: CityPageData = {
  city: "Levallois-Perret",
  postalCode: "92300",
  heroImage: "/heic2.png",
  tagline: "Spécialiste en zinguerie traditionnelle, ardoise naturelle et rénovation de toitures d'immeubles haussmanniens. Expertise copropriétés.",
  intro: "Levallois-Perret est l'une des villes les plus denses d'Europe, avec un tissu bâti quasi exclusivement composé d'immeubles collectifs haussmanniens. Ces immeubles en pierre de taille à six étages arborent des toitures mansardées en ardoise naturelle et des ornements en zinc caractéristiques du XIXe siècle. Ces toitures centenaires requièrent une expertise très spécifique en zinguerie traditionnelle et en ardoise. Ent. GREMILLET intervient régulièrement à Levallois-Perret pour des réfections de toiture, des réparations de zinguerie urgentes et des opérations d'entretien sur ce patrimoine architectural exigeant.",
  services: [
    {
      icon: "handyman",
      title: "Zinguerie Haussmannienne",
      desc: "Chéneaux zinc, gouttières zinc ou cuivre, abergements, noues, tabatières et ornements. Maîtrise de la zinguerie traditionnelle pour les immeubles anciens de Levallois-Perret.",
    },
    {
      icon: "roofing",
      title: "Couverture Ardoise Naturelle",
      desc: "Pose à l'ancienne par crochets inox, recouvrement, reprise de noues. Ardoise naturelle ou fiber-ciment selon les exigences du règlement de copropriété ou du PLU.",
    },
    {
      icon: "apartment",
      title: "Entretien Copropriétés",
      desc: "Maintenance régulière pour syndics : nettoyage des chéneaux, inspection de toiture, devis compatibles avec les procédures d'AG. Documents d'assurance fournis.",
    },
  ],
  blocks: [
    {
      title: "Toitures Haussmanniennes : Des Points Faibles bien Identifiés",
      paragraphs: [
        "Les chéneaux cachés sous les corniches sont le point de vulnérabilité n°1 des immeubles haussmanniens de Levallois-Perret. Obstrués par les feuilles et les dépôts, ils génèrent des débordements qui s'infiltrent dans les façades et les parties communes, entraînant des dégâts des eaux coûteux pour les copropriétés.",
        "Ent. GREMILLET connaît ces problématiques et les résout efficacement : nettoyage et réfection des chéneaux, reprise des solins et abergements, remplacement des ardoises défectueuses avec des matériaux assortis à l'existant. Nous fournissons l'assurance décennale, la RC Pro et les attestations requises pour les appels d'offres en copropriété.",
      ],
    },
    {
      title: "Tarifs et Délais à Levallois-Perret",
      paragraphs: [
        "Les travaux sur immeubles haussmanniens sont plus techniques que sur des maisons individuelles : hauteur importante, matériaux nobles, contraintes logistiques en milieu urbain très dense. Depuis Boulogne-Billancourt, nous atteignons Levallois-Perret en moins de 20 minutes. Nous garantissons une réponse sous 24h pour toute urgence.",
      ],
      list: [
        "<strong>Réfection ardoise + zinguerie complète</strong> : 90 à 200 €/m²",
        "<strong>Réparation localisée</strong> (ardoises, noue) : dès 300 €",
        "<strong>Réfection chéneaux zinc</strong> : 120 à 250 €/ml posé",
        "<strong>Nettoyage + traitement ardoise</strong> : 20 à 40 €/m²",
      ],
    },
  ],
  tarif: "Réfection ardoise complète : 90 à 200 €/m². Réparation localisée dès 300 €. Chéneaux zinc : 120 à 250 €/ml. Devis gratuit, détaillé, remis sous 48h — compatible procédures de copropriété.",
  faqs: [
    {
      q: "Comment gérer une rénovation de toiture en copropriété à Levallois-Perret ?",
      a: "La décision doit être votée en AG (article 25 ou 26 selon l'importance des travaux). Nous fournissons un devis détaillé compatible avec les exigences des syndics. Nous pouvons également présenter les travaux lors de l'AG si nécessaire.",
    },
    {
      q: "L'ardoise naturelle est-elle obligatoire sur les immeubles haussmanniens de Levallois ?",
      a: "Pas systématiquement, mais le règlement de copropriété ou le PLU peut l'imposer. L'ardoise fiber-ciment est une alternative souvent acceptée, 30 à 50 % moins chère tout en offrant un rendu visuel très proche.",
    },
    {
      q: "Pouvez-vous intervenir en urgence sur un immeuble en hauteur à Levallois ?",
      a: "Oui. Nous disposons du matériel adapté (nacelles, échafaudages) pour intervenir en sécurité sur les immeubles à forte pente de Levallois-Perret. Nous intervenons sous 24h pour les urgences, même sur des toitures en hauteur.",
    },
  ],
  nearby: [
    { label: "Neuilly-sur-Seine", href: "/couvreur-neuilly-sur-seine" },
    { label: "Nanterre", href: "/couvreur-nanterre" },
    { label: "Rueil-Malmaison", href: "/couvreur-rueil-malmaison" },
    { label: "Clichy" },
    { label: "Puteaux" },
    { label: "Asnières-sur-Seine" },
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
