import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CityPage, { type CityPageData } from "../components/CityPage";

export const metadata: Metadata = {
  title: "Couvreur Suresnes (92150) – Entretien Toiture & Cité-Jardin | Ent. GREMILLET",
  description: "Couvreur à Suresnes (92150) : rénovation et entretien toiture villas et Cité-Jardin, traitement anti-mousse. Devis gratuit. ☎ 06 23 85 35 07",
  alternates: { canonical: "/couvreur-suresnes" },
  openGraph: {
    title: "Couvreur Suresnes (92150) – Ent. GREMILLET",
    description: "Rénovation et entretien de toiture à Suresnes : Cité-Jardin, villas, maisons. Devis gratuit.",
    url: "/couvreur-suresnes",
    locale: "fr_FR",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Ent. GREMILLET – Couvreur Suresnes",
  url: "https://gremillet-couverture.fr/couvreur-suresnes",
  telephone: "+33623853507",
  address: { "@type": "PostalAddress", streetAddress: "73 Rue du Château", addressLocality: "Boulogne-Billancourt", postalCode: "92100", addressCountry: "FR" },
  areaServed: { "@type": "City", name: "Suresnes" },
  priceRange: "€€",
};

const data: CityPageData = {
  city: "Suresnes",
  postalCode: "92150",
  heroImage: "/heic4.png",
  tagline: "Spécialiste de l'entretien et de la rénovation de toiture à Suresnes. Expert Cité-Jardin, villas et maisons de ville. Respect du patrimoine local.",
  intro: "Suresnes est une commune résidentielle des Hauts-de-Seine à l'identité architecturale forte, dominée par la célèbre Cité-Jardin (1919-1939) — plusieurs centaines de maisons à toitures en tuiles rouges caractéristiques. Au-delà de ce patrimoine unique, Suresnes compte de nombreuses villas bourgeoises des années 1920-1950 et des maisons individuelles plus récentes. Exposées à l'humidité de la Seine et aux vents du mont Valérien, ces toitures nécessitent un entretien régulier. Ent. GREMILLET intervient à Suresnes pour des travaux d'entretien préventif, de nettoyage et de rénovation adaptés à chaque type de bâti.",
  services: [
    {
      icon: "cleaning_services",
      title: "Nettoyage & Traitement Anti-mousse",
      desc: "Nettoyage haute pression et application d'hydrofuge longue durée (7 à 10 ans). Élimination complète des mousses, lichens et dépôts organiques qui fragilisent votre toiture.",
    },
    {
      icon: "roofing",
      title: "Rénovation Toiture Tuiles",
      desc: "Remplacement de tuiles cassées ou glissées, réfection des faîtages et rives, dépose-repose complète pour les toitures en fin de vie. Respect des matériaux et couleurs d'origine.",
    },
    {
      icon: "handyman",
      title: "Gouttières & Faîtages",
      desc: "Remplacement de gouttières PVC ou zinc, débouchage, pose de grilles anti-feuilles. Réfection du mortier de faîtage descellé pour éviter les infiltrations par le faîte.",
    },
  ],
  blocks: [
    {
      title: "La Cité-Jardin de Suresnes : Un Patrimoine à Entretenir avec Soin",
      paragraphs: [
        "Les maisons de la Cité-Jardin ont été construites selon des principes architecturaux cohérents : toitures en tuiles rouges caractéristiques, façades en brique et crépi, jardins privatifs. Ces maisons de 80 à 100 ans nécessitent une attention particulière : les charpentes en bois ancien doivent être inspectées, et les rénovations doivent respecter les matériaux d'origine spécifiés dans le règlement de copropriété ou le PLU de Suresnes.",
        "Ent. GREMILLET connaît ces contraintes et sélectionne des tuiles compatibles avec l'esthétique existante. Nous travaillons dans le respect des règles architecturales locales tout en utilisant les techniques modernes d'étanchéité. Nous vous accompagnons également dans les démarches de déclaration préalable de travaux.",
      ],
    },
    {
      title: "Entretien Préventif : Le Bon Calcul à Suresnes",
      paragraphs: [
        "Un entretien tous les 5 à 7 ans (nettoyage + traitement) prolonge la durée de vie d'une toiture de 20 à 30 ans et évite des rénovations coûteuses. À Suresnes, la proximité de la Seine et la végétation dense favorisent la prolifération rapide des mousses. Nous intervenons sous 24h pour les urgences et planifions les travaux d'entretien selon votre agenda.",
      ],
      list: [
        "<strong>Nettoyage + traitement</strong> : 15 à 35 €/m² — rentabilité immédiate",
        "<strong>Rénovation complète tuiles</strong> : 60 à 130 €/m² pose et fourniture",
        "<strong>Remplacement faîtage</strong> : dès 500 € pour un pavillon standard",
        "<strong>Gouttières zinc posées</strong> : 80 à 180 €/ml selon profil",
      ],
    },
  ],
  tarif: "Nettoyage + traitement : 15 à 35 €/m². Rénovation complète : 60 à 130 €/m². Devis gratuit et sans engagement après visite à Suresnes. Aucun acompte avant démarrage des travaux.",
  faqs: [
    {
      q: "Faut-il respecter des règles pour rénover une toiture dans la Cité-Jardin de Suresnes ?",
      a: "Oui. Les matériaux et couleurs doivent être conformes au PLU de Suresnes et au règlement de copropriété. Une déclaration préalable de travaux est généralement requise. Nous vous accompagnons dans ces démarches et sélectionnons des matériaux conformes.",
    },
    {
      q: "À quelle fréquence faut-il entretenir une toiture en tuiles à Suresnes ?",
      a: "Nous recommandons un nettoyage et traitement anti-mousse tous les 5 à 7 ans. La proximité de la Seine et la végétation dense à Suresnes favorisent une prolifération rapide des mousses. Un contrôle visuel annuel après les tempêtes d'automne est également conseillé.",
    },
    {
      q: "Proposez-vous une garantie sur le traitement anti-mousse ?",
      a: "Oui. Nos traitements hydrofuges professionnels offrent une protection de 7 à 10 ans selon les conditions d'exposition. Nous utilisons des produits certifiés conformes à la réglementation européenne, sans danger pour la végétation environnante.",
    },
  ],
  nearby: [
    { label: "Rueil-Malmaison", href: "/couvreur-rueil-malmaison" },
    { label: "Nanterre", href: "/couvreur-nanterre" },
    { label: "Meudon", href: "/couvreur-meudon" },
    { label: "Puteaux" },
    { label: "Saint-Cloud" },
    { label: "Garches" },
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
