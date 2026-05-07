import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CityPage, { type CityPageData } from "../components/CityPage";

export const metadata: Metadata = {
  title: "Couvreur Meudon (92190) – Démoussage, Traitement & Rénovation Toiture | Ent. GREMILLET",
  description: "Couvreur à Meudon (92190) : démoussage, traitement hydrofuge longue durée, rénovation toiture villa et maison. Devis gratuit. ☎ 06 23 85 35 07",
  alternates: { canonical: "/couvreur-meudon" },
  openGraph: {
    title: "Couvreur Meudon (92190) – Ent. GREMILLET",
    description: "Démoussage, traitement et rénovation de toiture à Meudon. Expert toitures exposées forêt et humidité. Devis gratuit.",
    url: "/couvreur-meudon",
    locale: "fr_FR",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Ent. GREMILLET – Couvreur Meudon",
  url: "https://gremillet-couverture.fr/couvreur-meudon",
  telephone: "+33623853507",
  address: { "@type": "PostalAddress", streetAddress: "73 Rue du Château", addressLocality: "Boulogne-Billancourt", postalCode: "92100", addressCountry: "FR" },
  areaServed: { "@type": "City", name: "Meudon" },
  priceRange: "€€",
};

const data: CityPageData = {
  city: "Meudon",
  postalCode: "92190",
  heroImage: "/heic3.png",
  tagline: "Spécialiste du démoussage et du traitement de toiture en secteur boisé. Villas, maisons et pavillons. Intervention sous 24h.",
  intro: "Meudon est une commune résidentielle des Hauts-de-Seine au cadre verdoyant exceptionnel : ville haute couverte par la forêt domaniale, ville basse bordant la Seine, quartiers résidentiels de Bellevue et du Val Fleury. Ce cadre boisé crée des conditions idéales au développement des mousses, lichens et champignons sur les toitures. L'ombre permanente des arbres limite le séchage naturel des couvertures, les feuilles obstruent rapidement les gouttières, et les lichens s'infiltrent dans les joints. Ent. GREMILLET, basé à Boulogne-Billancourt à 15 minutes, est spécialisé dans le traitement et la rénovation de ces toitures exposées à l'humidité permanente du secteur de Meudon.",
  services: [
    {
      icon: "cleaning_services",
      title: "Démoussage & Traitement Hydrofuge",
      desc: "Nettoyage haute pression et application d'hydrofuge longue durée (7 à 10 ans). Élimination totale des mousses, lichens et dépôts organiques. Produits certifiés, sans danger pour la végétation.",
    },
    {
      icon: "roofing",
      title: "Réparation & Rénovation Toiture",
      desc: "Remplacement de tuiles déplacées ou cassées, réfection de noues et faîtages, rénovation complète pour les toitures en fin de vie. Ardoise, tuiles ou zinc selon votre bien.",
    },
    {
      icon: "handyman",
      title: "Gouttières & Évacuations",
      desc: "Débouchage, remplacement et pose de grilles anti-feuilles adaptées à l'environnement boisé de Meudon. Les feuilles de la forêt obstruent rapidement les gouttières non protégées.",
    },
  ],
  blocks: [
    {
      title: "La Forêt de Meudon : Pourquoi vos Toitures Vieillissent Plus Vite",
      paragraphs: [
        "Les racines des mousses s'infiltrent sous les tuiles et dans les joints, créant des micro-fissures qui favorisent l'entrée de l'eau. À terme, sans traitement, ces infiltrations fragilisent la sous-toiture et peuvent affecter la charpente — des travaux bien plus coûteux qu'un simple traitement préventif.",
        "Les lichens, plus difficiles à éliminer que les mousses, nécessitent un nettoyage professionnel haute pression suivi d'une application de produit biocide pour empêcher leur réapparition. À Meudon, nous recommandons un contrôle de toiture tous les 3 à 5 ans compte tenu de l'environnement boisé et de l'humidité permanente.",
      ],
    },
    {
      title: "Secteur d'Intervention et Tarifs à Meudon",
      paragraphs: [
        "Depuis Boulogne-Billancourt, Meudon est accessible en 15 à 20 minutes. Nous intervenons sous 24h pour les urgences. Nos produits anti-mousse sont homologués et sans danger pour la végétation de votre jardin.",
      ],
      list: [
        "<strong>Nettoyage + traitement hydrofuge</strong> : 15 à 35 €/m² selon état",
        "<strong>Rénovation complète tuiles</strong> : 60 à 130 €/m² pose et fourniture",
        "<strong>Débouchage + grilles anti-feuilles</strong> : dès 150 € pour un pavillon",
        "<strong>Remplacement gouttières zinc</strong> : 80 à 180 €/ml posé",
      ],
    },
  ],
  tarif: "Traitement anti-mousse : 15 à 35 €/m². Rénovation tuiles : 60 à 130 €/m². Devis gratuit après visite sur site à Meudon. Aucun acompte avant démarrage. Produits certifiés, respectueux de la faune et flore.",
  faqs: [
    {
      q: "À quelle fréquence faut-il traiter une toiture contre les mousses à Meudon ?",
      a: "Compte tenu de la forêt et de l'humidité du secteur, nous recommandons un nettoyage et traitement tous les 4 à 6 ans à Meudon. Un contrôle visuel annuel après l'automne permet de détecter rapidement une tuile déplacée ou un début de mousse.",
    },
    {
      q: "Les produits anti-mousse utilisés sont-ils dangereux pour mon jardin à Meudon ?",
      a: "Non. Nous utilisons des produits homologués à base de cuivre ou de biocides certifiés conformes à la réglementation européenne. Ces produits n'ont aucun effet négatif sur la végétation lorsqu'ils sont appliqués correctement. Nous protégeons systématiquement les parterres et massifs.",
    },
    {
      q: "Les mousses peuvent-elles vraiment abîmer une toiture en tuiles à Meudon ?",
      a: "Oui. Les racines des mousses s'infiltrent sous les tuiles et dans les joints, créant des micro-fissures qui favorisent l'infiltration d'eau. À terme, cela peut fragiliser la charpente. Un traitement préventif coûte 10 à 20 fois moins cher qu'une rénovation complète.",
    },
  ],
  nearby: [
    { label: "Issy-les-Moulineaux", href: "/couvreur-issy-les-moulineaux" },
    { label: "Clamart", href: "/couvreur-clamart" },
    { label: "Suresnes", href: "/couvreur-suresnes" },
    { label: "Sèvres" },
    { label: "Chaville" },
    { label: "Vélizy-Villacoublay (78)" },
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
