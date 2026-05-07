import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Couvreur Nanterre (92000) – Urgence Toiture & Rénovation Tous Types de Bâti | Ent. GREMILLET",
  description: "Couvreur à Nanterre (92000) : urgence fuite toiture sous 24h, rénovation maison, pavillon et immeuble. Devis gratuit. Garantie décennale. ☎ 06 23 85 35 07",
  alternates: { canonical: "/couvreur-nanterre" },
  openGraph: {
    title: "Couvreur Nanterre (92000) – Ent. GREMILLET",
    description: "Couvreur réactif à Nanterre : urgences toiture, rénovation, isolation. Tous types de bâti. Devis gratuit.",
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
  description: "Couvreur professionnel à Nanterre, intervention sous 24h pour urgences toiture, rénovation et isolation sur tous types de bâti.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "73 Rue du Château",
    addressLocality: "Boulogne-Billancourt",
    postalCode: "92100",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "City", name: "Nanterre" },
    { "@type": "AdministrativeArea", name: "Hauts-de-Seine" },
  ],
  priceRange: "€€",
};

export default function CouvreurNanterrePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main className="legal-page">
        <div className="legal-container" style={{ maxWidth: "900px" }}>
          <p className="legal-date">
            <a href="/">Accueil</a> › Couvreur Nanterre
          </p>
          <h1>Couvreur à Nanterre – Urgence Toiture &amp; Rénovation Tous Types de Bâti</h1>
          <p className="legal-date">
            Ent. GREMILLET | ☎ <a href="tel:0623853507">06 23 85 35 07</a> | Devis gratuit &amp; intervention sous 24h à Nanterre
          </p>

          <p>
            Nanterre est la préfecture et la commune la plus peuplée des Hauts-de-Seine, avec plus de 90 000 habitants. Son tissu urbain est exceptionnellement varié : quartiers de maisons individuelles dans le secteur Chemin de l&apos;Île, grands ensembles résidentiels des années 1960-1980, immeubles récents en périphérie de La Défense, zones pavillonnaires et habitats mixtes. Cette diversité architecturale implique une grande variété de problématiques de couverture : toitures-terrasses, toitures en tuiles mécaniques, ardoise, bac acier ou zinc. Ent. GREMILLET intervient à Nanterre pour l&apos;ensemble de ces configurations, avec une équipe polyvalente et la capacité d&apos;intervenir rapidement sur tout type de chantier, des urgences aux rénovations planifiées.
          </p>

          <section>
            <h2>Nos Services de Couverture à Nanterre</h2>
            <p>
              Que vous soyez propriétaire d&apos;une maison individuelle dans le quartier Université ou gestionnaire d&apos;un immeuble en copropriété, nous adaptons notre intervention à votre situation :
            </p>
            <ul>
              <li><strong>Réparation urgente de toiture</strong> : fuite après orage, tuile déplacée, ardoise cassée, gouttière arrachée — intervention sous 24h</li>
              <li><strong>Rénovation complète ou partielle de toiture</strong> : tuiles mécaniques, ardoise fiber-ciment, bac acier, zinc selon les besoins</li>
              <li><strong>Étanchéité de toiture-terrasse</strong> : réfection de membrane bitumineuse, relevés, évacuations, isolation</li>
              <li><strong>Zinguerie</strong> : gouttières zinc ou PVC, chéneaux, descentes pluviales, abergements et solins</li>
              <li><strong>Isolation thermique des combles</strong> : perdus ou aménageables, laine soufflée ou sarking, réglementation RE2020</li>
              <li><strong>Traitement anti-mousse et nettoyage haute pression</strong> : pour toitures en tuiles ou ardoise envahies par la végétation</li>
            </ul>
          </section>

          <section>
            <h2>Nanterre : Une Ville aux Besoins de Couverture Très Diversifiés</h2>
            <p>
              La réalité du bâti nanterrien, c&apos;est la coexistence de décennies de construction sur un même territoire. Les quartiers anciens concentrent des maisons individuelles des années 1930 à 1960 dont les toitures en tuiles mécaniques arrivent souvent en fin de vie. Les grandes résidences des années 1970-1980 présentent fréquemment des problèmes d&apos;étanchéité sur leurs toitures-terrasses : joints décollés, relevés insuffisants, évacuations bouchées. Les constructions récentes en secteur La Défense nécessitent des interventions de maintenance spécialisées. Ent. GREMILLET dispose de l&apos;expérience et du matériel adapté à chacune de ces situations, quelle que soit la hauteur ou la complexité du bâtiment.
            </p>
          </section>

          <section>
            <h2>Réactivité et Disponibilité à Nanterre</h2>
            <p>
              En cas d&apos;urgence toiture à Nanterre — infiltration d&apos;eau, dégât des eaux suite à une tempête, tuile envolée — nous garantissons une intervention dans les 24 heures. Si nécessaire, nous mettons en place une protection provisoire (bâchage sécurisé) pour limiter immédiatement les dégâts dans l&apos;attente d&apos;une réparation définitive. Nous sommes disponibles 6 jours sur 7, du lundi au samedi de 8h à 20h30. Depuis Boulogne-Billancourt, nous rejoignons Nanterre en 20 à 30 minutes selon la circulation. Nous couvrons également les communes limitrophes : Rueil-Malmaison, Courbevoie, Suresnes, Puteaux et Colombes.
            </p>
          </section>

          <section>
            <h2>Tarifs Transparents et Devis Gratuit à Nanterre</h2>
            <p>
              Nos prix sont clairs et détaillés : entre 150 et 500 € pour une réparation ponctuelle (remplacement de quelques tuiles ou ardoises), entre 4 000 et 20 000 € pour une rénovation complète de toiture selon la surface et les matériaux. Pour l&apos;isolation des combles perdus, comptez entre 20 et 50 €/m² avant déduction des aides de l&apos;État. Le devis que nous établissons après visite à Nanterre est gratuit, détaillé, sans engagement — et le montant indiqué est celui qui est facturé, sans surprises.
            </p>
          </section>

          <div style={{ background: "var(--rouge-accent)", borderRadius: "4px", padding: "2rem", textAlign: "center", marginTop: "2rem" }}>
            <p style={{ color: "#fff", fontSize: "1.15rem", fontWeight: 700, marginBottom: "1rem" }}>
              Urgence ou devis à Nanterre ? Contactez-nous maintenant
            </p>
            <a href="/#contact" style={{ background: "#fff", color: "var(--rouge-accent)", padding: "0.8rem 2rem", borderRadius: "4px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", display: "inline-block" }}>
              Demander mon devis gratuit
            </a>
          </div>

          <section>
            <h2>Questions Fréquentes – Couvreur Nanterre</h2>
            <p><strong>Intervenez-vous en urgence le week-end à Nanterre ?</strong></p>
            <p>
              Nous intervenons 6 jours sur 7, du lundi au samedi. En cas de sinistre grave (infiltration massive, toiture endommagée par la grêle ou le vent), nous priorisons l&apos;intervention et pouvons mettre en place un bâchage provisoire dès le lendemain matin pour protéger votre bien.
            </p>
            <p><strong>Comment choisir entre réparation partielle et rénovation complète à Nanterre ?</strong></p>
            <p>
              C&apos;est la question centrale de notre diagnostic gratuit. Si moins de 30 % des éléments de couverture sont défectueux et que la charpente est saine, une réparation ciblée est suffisante et bien plus économique. Au-delà, une rénovation complète est souvent plus rentable sur le long terme. Nous vous conseillons en toute transparence, sans chercher à facturer des travaux inutiles.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
