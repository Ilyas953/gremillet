import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CityPage, { type CityPageData } from "../components/CityPage";

export const metadata: Metadata = {
  title: "Couvreur Issy-les-Moulineaux (92130) – Isolation Toiture & Étanchéité | Ent. GREMILLET",
  description: "Couvreur à Issy-les-Moulineaux (92130) : isolation thermique, étanchéité toiture-terrasse, rénovation. Devis gratuit 24h. Garantie décennale. ☎ 06 23 85 35 07",
  alternates: { canonical: "/couvreur-issy-les-moulineaux" },
  openGraph: {
    title: "Couvreur Issy-les-Moulineaux (92130) – Ent. GREMILLET",
    description: "Isolation thermique, étanchéité terrasse et rénovation de toiture à Issy-les-Moulineaux. Devis gratuit.",
    url: "/couvreur-issy-les-moulineaux",
    locale: "fr_FR",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Ent. GREMILLET – Couvreur Issy-les-Moulineaux",
  url: "https://gremillet-couverture.fr/couvreur-issy-les-moulineaux",
  telephone: "+33623853507",
  address: { "@type": "PostalAddress", streetAddress: "73 Rue du Château", addressLocality: "Boulogne-Billancourt", postalCode: "92100", addressCountry: "FR" },
  areaServed: { "@type": "City", name: "Issy-les-Moulineaux" },
  priceRange: "€€",
};

const data: CityPageData = {
  city: "Issy-les-Moulineaux",
  postalCode: "92130",
  heroImage: "/IMG_5191.PNG",
  tagline: "Expert en isolation thermique, étanchéité de toiture-terrasse et rénovation de couverture. À 5 minutes de Boulogne-Billancourt.",
  intro: "Issy-les-Moulineaux est une commune du sud des Hauts-de-Seine en pleine transformation urbaine, limitrophe du 15e arrondissement de Paris. Son tissu bâti mêle immeubles des années 1970-1990, résidences récentes et maisons individuelles. Face aux nouvelles exigences de la réglementation thermique RE2020 et à la hausse du coût de l'énergie, l'isolation et l'étanchéité des toitures sont devenues des priorités pour propriétaires et syndicats de copropriété. Ent. GREMILLET, basé à Boulogne-Billancourt à quelques minutes, propose des solutions sur mesure adaptées à ce tissu urbain dense.",
  services: [
    {
      icon: "water_drop",
      title: "Étanchéité Toiture-Terrasse",
      desc: "Réfection de membrane bitumineuse ou synthétique, relevés d'étanchéité, évacuations, isolation. Intervention pour particuliers et syndics de copropriété à Issy.",
    },
    {
      icon: "home_work",
      title: "Isolation Thermique RE2020",
      desc: "Combles perdus ou aménagés, sarking par l'extérieur. Réduction des déperditions de 25 à 30 %. Éligible MaPrimeRénov' et CEE. Bilan thermique offert.",
    },
    {
      icon: "roofing",
      title: "Rénovation & Urgences",
      desc: "Rénovation de toiture classique (tuiles, ardoise, zinc) et interventions d'urgence sous 24h. Diagnostic précis, réparation rapide pour limiter les dégâts.",
    },
  ],
  blocks: [
    {
      title: "L'Isolation Thermique : Priorité Absolue à Issy-les-Moulineaux",
      paragraphs: [
        "Les immeubles des années 1970-1980 à Issy-les-Moulineaux sont souvent classés E ou F au DPE. L'isolation de la toiture représente jusqu'à 30 % des déperditions thermiques d'un logement non isolé. Une isolation performante aux normes actuelles (R ≥ 7 pour les combles perdus) permet de réduire les factures de chauffage de 20 à 30 % et améliore significativement le confort et la valeur vénale du bien.",
        "Les travaux d'isolation des combles perdus par insufflation se réalisent en une seule journée, sans travaux lourds ni déménagement. Ent. GREMILLET vous accompagne de la sélection des matériaux jusqu'à la constitution de votre dossier d'aides : MaPrimeRénov', TVA à 5,5 %, Certificats d'Économie d'Énergie (CEE).",
      ],
    },
    {
      title: "Proximité, Réactivité et Zone Couverte",
      paragraphs: [
        "Notre entreprise est implantée à Boulogne-Billancourt, commune immédiatement voisine d'Issy-les-Moulineaux. Nous intervenons sous 24h pour toute urgence. Nous travaillons aussi bien pour des particuliers que pour des syndics de copropriété, en fournissant tous les documents requis pour les appels d'offres.",
      ],
      list: [
        "<strong>Vanves / Malakoff / Montrouge</strong> – urgences et rénovations",
        "<strong>Clamart</strong> – isolation et rénovation pavillons",
        "<strong>Meudon</strong> – traitement anti-mousse et réfection",
        "<strong>Paris 15e</strong> – interventions copropriétés",
      ],
    },
  ],
  tarif: "Étanchéité terrasse : 40 à 100 €/m². Isolation combles perdus : 20 à 55 €/m² avant aides. Rénovation toiture classique : 60 à 150 €/m². Devis gratuit après visite sur site à Issy-les-Moulineaux.",
  faqs: [
    {
      q: "Intervenez-vous sur les toitures-terrasses de copropriétés à Issy-les-Moulineaux ?",
      a: "Oui. Nous travaillons régulièrement avec des syndics à Issy-les-Moulineaux pour la réfection d'étanchéité de terrasses. Nous fournissons assurance décennale, RC Pro et devis détaillé pour les procédures d'appel d'offres.",
    },
    {
      q: "Quelles aides pour l'isolation de toiture à Issy-les-Moulineaux en 2025-2026 ?",
      a: "Selon votre situation, vous pouvez bénéficier de MaPrimeRénov', de la TVA à 5,5 % et des CEE. Nous vous aidons à identifier les dispositifs applicables lors de notre visite diagnostic gratuite à Issy.",
    },
    {
      q: "L'isolation des combles améliore-t-elle le DPE de mon logement à Issy ?",
      a: "Oui, significativement. Une isolation R ≥ 7 en combles perdus peut faire gagner une à deux lettres DPE, ce qui valorise votre bien à la vente ou à la location et peut le sortir du statut de passoire thermique.",
    },
  ],
  nearby: [
    { label: "Clamart", href: "/couvreur-clamart" },
    { label: "Meudon", href: "/couvreur-meudon" },
    { label: "Suresnes", href: "/couvreur-suresnes" },
    { label: "Vanves" },
    { label: "Malakoff" },
    { label: "Montrouge" },
    { label: "Paris 15e" },
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
