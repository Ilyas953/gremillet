import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CityPage, { type CityPageData } from "../components/CityPage";

export const metadata: Metadata = {
  title: "Couvreur Clamart (92140) – Rénovation Toiture Pavillon & Isolation Combles | Ent. GREMILLET",
  description: "Couvreur à Clamart (92140) : diagnostic gratuit, rénovation toiture pavillon, isolation combles. Aides MaPrimeRénov'. Devis 48h. ☎ 06 23 85 35 07",
  alternates: { canonical: "/couvreur-clamart" },
  openGraph: {
    title: "Couvreur Clamart (92140) – Ent. GREMILLET",
    description: "Rénovation toiture pavillons et isolation thermique des combles à Clamart. Diagnostic gratuit. Devis 48h.",
    url: "/couvreur-clamart",
    locale: "fr_FR",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Ent. GREMILLET – Couvreur Clamart",
  url: "https://gremillet-couverture.fr/couvreur-clamart",
  telephone: "+33623853507",
  address: { "@type": "PostalAddress", streetAddress: "73 Rue du Château", addressLocality: "Boulogne-Billancourt", postalCode: "92100", addressCountry: "FR" },
  areaServed: { "@type": "City", name: "Clamart" },
  priceRange: "€€",
};

const data: CityPageData = {
  city: "Clamart",
  postalCode: "92140",
  heroImage: "/IMG_5188.PNG",
  tagline: "Expert en rénovation de toiture de pavillons et isolation thermique des combles. Diagnostic gratuit sur site. Aides de l'État disponibles.",
  intro: "Clamart est une commune résidentielle du sud des Hauts-de-Seine composée majoritairement de maisons individuelles et pavillons construits entre 1950 et 1980. Ce parc immobilier vieillissant est au cœur d'un vaste cycle de rénovation : les toitures en tuiles mécaniques de cette époque, après 40 à 70 ans de service, présentent souvent des signes de fatigue avancés. L'isolation thermique, insuffisante ou absente dans beaucoup de ces constructions d'après-guerre, est devenue un enjeu majeur face à la hausse des prix de l'énergie. Ent. GREMILLET intervient à Clamart pour diagnostiquer gratuitement l'état des toitures et proposer les solutions adaptées, de la réparation ciblée à la rénovation complète avec isolation.",
  services: [
    {
      icon: "search",
      title: "Diagnostic de Toiture Gratuit",
      desc: "Inspection complète de la couverture, de la charpente, de la sous-toiture et des gouttières. Rapport détaillé remis avec les recommandations et les priorités d'intervention.",
    },
    {
      icon: "roofing",
      title: "Rénovation Toiture Pavillon",
      desc: "Rénovation partielle ou complète en tuiles mécaniques, ardoise fiber-ciment ou bac acier. Solution adaptée à votre budget et à l'état réel de votre toiture à Clamart.",
    },
    {
      icon: "home_work",
      title: "Isolation Combles & Aides d'État",
      desc: "Isolation des combles perdus ou aménagés avec estimation des aides : MaPrimeRénov', TVA 5,5 %, CEE. Gain de 20 à 30 % sur vos factures de chauffage. Travaux en 1 à 2 jours.",
    },
  ],
  blocks: [
    {
      title: "Pourquoi les Toitures des Pavillons de Clamart Nécessitent une Attention Particulière",
      paragraphs: [
        "Les pavillons construits à Clamart entre 1955 et 1980 présentent des toitures en tuiles mécaniques dont la durée de vie théorique est de 40 à 60 ans. Au-delà, les phénomènes sont courants : tuiles déplacées sous les cycles gel-dégel, mortier de faîtage qui s'effrite, écrans de sous-toiture saturés d'humidité. La charpente elle-même peut présenter des micro-fissures ou des attaques fongiques silencieuses.",
        "Notre diagnostic gratuit permet d'identifier précisément les zones à traiter en priorité et d'éviter de payer des travaux superflus. Nous inspectons systématiquement la charpente en plus de la couverture pour détecter d'éventuelles attaques d'insectes xylophages (capricornes, vrillettes) ou de champignons lignivores.",
      ],
    },
    {
      title: "L'Isolation des Combles à Clamart : Rentable et Très Aidée",
      paragraphs: [
        "Pour les pavillons de Clamart des années 1960-1975, l'isolation des combles est souvent absente ou réduite à quelques centimètres de laine de verre d'époque. Une isolation aux normes 2025 (R ≥ 7 pour les combles perdus) peut réduire les déperditions de 25 à 30 % et améliorer le classement DPE, valorisant votre bien à la revente.",
      ],
      list: [
        "<strong>MaPrimeRénov'</strong> : jusqu'à 75 % du coût selon revenus",
        "<strong>TVA réduite à 5,5 %</strong> : sur fourniture et main-d'œuvre",
        "<strong>CEE (Certificats d'Économie d'Énergie)</strong> : prime complémentaire",
        "<strong>Durée travaux</strong> : 1 à 2 jours pour un pavillon standard",
      ],
    },
  ],
  tarif: "Rénovation tuiles : 50 à 120 €/m². Isolation combles perdus : 20 à 45 €/m² avant aides. Diagnostic gratuit sur site. Devis détaillé avec estimation des aides de l'État — remis sous 48h.",
  faqs: [
    {
      q: "Faut-il rénover la charpente en même temps que la toiture à Clamart ?",
      a: "Pas nécessairement. Si la charpente est saine (bois sec, sans insectes ni champignons), elle peut être conservée et simplement traitée. Nous l'inspectons lors du diagnostic gratuit et ne recommandons que les travaux strictement nécessaires.",
    },
    {
      q: "Mon pavillon de Clamart a-t-il droit aux aides pour l'isolation des combles ?",
      a: "Oui, si votre logement a plus de 2 ans. MaPrimeRénov', les CEE et la TVA à 5,5 % sont accessibles selon les plafonds de revenus. Nous vous aidons à identifier les dispositifs et à constituer votre dossier lors de notre visite.",
    },
    {
      q: "Combien de temps dure une rénovation de toiture sur un pavillon à Clamart ?",
      a: "Une rénovation complète de toiture sur un pavillon standard (80 à 120 m²) prend généralement 3 à 5 jours. Une réparation ponctuelle (tuiles, faîtage) se réalise en 1 à 2 jours. Nous respectons systématiquement les délais convenus.",
    },
  ],
  nearby: [
    { label: "Issy-les-Moulineaux", href: "/couvreur-issy-les-moulineaux" },
    { label: "Meudon", href: "/couvreur-meudon" },
    { label: "Bagneux" },
    { label: "Châtenay-Malabry" },
    { label: "Fontenay-aux-Roses" },
    { label: "Le Plessis-Robinson" },
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
