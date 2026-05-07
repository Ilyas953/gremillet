import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Couvreur Issy-les-Moulineaux (92130) – Isolation Toiture & Étanchéité | Ent. GREMILLET",
  description: "Couvreur à Issy-les-Moulineaux (92130) : isolation thermique, étanchéité toiture-terrasse, rénovation. Devis gratuit sous 24h. Garantie décennale. ☎ 06 23 85 35 07",
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
  description: "Couvreur professionnel à Issy-les-Moulineaux, spécialisé en isolation thermique, étanchéité de toiture-terrasse et rénovation de couverture.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "73 Rue du Château",
    addressLocality: "Boulogne-Billancourt",
    postalCode: "92100",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "City", name: "Issy-les-Moulineaux" },
    { "@type": "AdministrativeArea", name: "Hauts-de-Seine" },
  ],
  priceRange: "€€",
};

export default function CouvreurIssyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main className="legal-page">
        <div className="legal-container" style={{ maxWidth: "900px" }}>
          <p className="legal-date">
            <a href="/">Accueil</a> › Couvreur Issy-les-Moulineaux
          </p>
          <h1>Couvreur à Issy-les-Moulineaux – Isolation Thermique &amp; Étanchéité</h1>
          <p className="legal-date">
            Ent. GREMILLET | ☎ <a href="tel:0623853507">06 23 85 35 07</a> | Devis gratuit &amp; déplacement offert à Issy-les-Moulineaux
          </p>

          <p>
            Issy-les-Moulineaux est une commune du sud des Hauts-de-Seine en pleine transformation urbaine, limitrophe du 15e arrondissement de Paris. Son tissu bâti mêle immeubles collectifs des années 1970-1990, résidences récentes et quelques maisons individuelles dans les quartiers périphériques. Face aux nouvelles exigences de la réglementation thermique (RE2020) et à la hausse du coût de l&apos;énergie, l&apos;isolation et l&apos;étanchéité des toitures sont devenues des priorités pour de nombreux propriétaires et syndicats de copropriété à Issy-les-Moulineaux. Ent. GREMILLET, couvreur artisan basé à Boulogne-Billancourt (à quelques minutes en voiture), propose des solutions sur mesure adaptées à ce tissu urbain dense, avec une maîtrise des chantiers en milieu occupé et une réactivité reconnue pour les urgences.
          </p>

          <section>
            <h2>Nos Interventions de Couverture à Issy-les-Moulineaux</h2>
            <p>
              Le parc immobilier d&apos;Issy-les-Moulineaux présente une grande diversité : toitures-terrasses sur les immeubles des années 1970-1990, toitures à faible pente sur les constructions récentes, toitures traditionnelles en tuiles ou ardoise sur les bâtiments plus anciens. Nos équipes maîtrisent l&apos;ensemble de ces configurations :
            </p>
            <ul>
              <li><strong>Étanchéité de toiture-terrasse</strong> : membrane bitumineuse ou synthétique, relevés d&apos;étanchéité, évacuations, réfection complète ou partielle</li>
              <li><strong>Isolation thermique des combles</strong> : perdus ou aménageables, laine soufflée, laine de roche ou ouate de cellulose selon votre situation</li>
              <li><strong>Isolation par l&apos;extérieur en toiture (sarking)</strong> : pour les maisons individuelles, performance optimale sans perte de surface habitable</li>
              <li><strong>Rénovation de toiture classique</strong> : tuiles, ardoise, zinc pour les immeubles et maisons anciens du secteur</li>
              <li><strong>Recherche de fuite et urgence</strong> : diagnostic précis, protection provisoire, réparation rapide pour limiter les dégâts</li>
              <li><strong>Zinguerie et évacuations</strong> : gouttières, chéneaux, descentes pluviales, nettoyage des évacuations de terrasse</li>
            </ul>
          </section>

          <section>
            <h2>Isolation Thermique : Un Enjeu Prioritaire à Issy-les-Moulineaux</h2>
            <p>
              Les immeubles des années 1970-1980 à Issy-les-Moulineaux sont souvent classés E ou F au DPE. L&apos;isolation de la toiture représente jusqu&apos;à 30 % des déperditions thermiques d&apos;un logement non isolé. Une isolation performante aux normes actuelles (R ≥ 6 pour les combles aménagés, R ≥ 7 pour les combles perdus) permet de réduire les factures de chauffage de 20 à 30 % et améliore significativement le confort été comme hiver.
            </p>
            <p>
              Ent. GREMILLET vous accompagne de la sélection des matériaux jusqu&apos;à la réalisation des travaux d&apos;isolation à Issy-les-Moulineaux, en vous orientant vers les aides financières disponibles : MaPrimeRénov&apos;, TVA à 5,5 %, Certificats d&apos;Économie d&apos;Énergie (CEE). L&apos;isolation des combles perdus par insufflation se réalise en une journée, sans travaux lourds.
            </p>
          </section>

          <section>
            <h2>Proximité et Réactivité pour Issy-les-Moulineaux</h2>
            <p>
              Notre entreprise est implantée à Boulogne-Billancourt, commune immédiatement voisine d&apos;Issy-les-Moulineaux. Nous intervenons sous 24h pour toute urgence — qu&apos;il s&apos;agisse d&apos;une infiltration sur une toiture-terrasse ou d&apos;une fuite sur un immeuble en copropriété. Nous couvrons également les communes proches : Vanves, Malakoff, Montrouge, Clamart et Paris 15e.
            </p>
          </section>

          <section>
            <h2>Tarifs à Issy-les-Moulineaux et Devis Gratuit</h2>
            <p>
              Le coût de vos travaux de toiture varie selon la nature de l&apos;intervention : entre 40 et 100 €/m² pour une réfection d&apos;étanchéité de terrasse, entre 20 et 55 €/m² pour une isolation des combles perdus avant déduction des aides. Tous nos devis sont établis gratuitement après visite sur site à Issy-les-Moulineaux, sans engagement. Nous intervenons aussi bien pour des particuliers que pour des syndics de copropriété.
            </p>
          </section>

          <div style={{ background: "var(--rouge-accent)", borderRadius: "4px", padding: "2rem", textAlign: "center", marginTop: "2rem" }}>
            <p style={{ color: "#fff", fontSize: "1.15rem", fontWeight: 700, marginBottom: "1rem" }}>
              Devis gratuit pour votre toiture à Issy-les-Moulineaux – Réponse sous 24h
            </p>
            <a href="/#contact" style={{ background: "#fff", color: "var(--rouge-accent)", padding: "0.8rem 2rem", borderRadius: "4px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", display: "inline-block" }}>
              Demander mon devis gratuit
            </a>
          </div>

          <section>
            <h2>Questions Fréquentes – Couvreur Issy-les-Moulineaux</h2>
            <p><strong>Intervenez-vous sur les toitures-terrasses de copropriétés à Issy-les-Moulineaux ?</strong></p>
            <p>
              Oui. Nous travaillons régulièrement avec des syndics de copropriété pour la réfection d&apos;étanchéité et la maintenance de toitures-terrasses à Issy-les-Moulineaux. Nous fournissons tous les justificatifs requis pour les procédures d&apos;appel d&apos;offres (assurance décennale, RC Pro, attestations de qualifications).
            </p>
            <p><strong>Quelles aides pour l&apos;isolation de toiture à Issy-les-Moulineaux en 2025-2026 ?</strong></p>
            <p>
              Selon votre situation (revenus, type de logement, travaux réalisés), vous pouvez bénéficier de MaPrimeRénov&apos;, de la TVA réduite à 5,5 % et des Certificats d&apos;Économie d&apos;Énergie. Nous vous aidons à identifier les dispositifs applicables lors de notre visite diagnostic gratuite à Issy-les-Moulineaux.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
