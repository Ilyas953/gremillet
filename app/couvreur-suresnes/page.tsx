import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Couvreur Suresnes (92150) – Entretien & Rénovation Toiture Villas & Cité-Jardin | Ent. GREMILLET",
  description: "Couvreur à Suresnes (92150) : rénovation toiture villas et maisons, entretien Cité-Jardin, traitement anti-mousse. Devis gratuit. ☎ 06 23 85 35 07",
  alternates: { canonical: "/couvreur-suresnes" },
  openGraph: {
    title: "Couvreur Suresnes (92150) – Ent. GREMILLET",
    description: "Rénovation et entretien de toiture à Suresnes : Cité-Jardin, villas, maisons individuelles. Devis gratuit.",
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
  description: "Couvreur professionnel à Suresnes, spécialisé en entretien et rénovation de toitures de villas et maisons individuelles, y compris dans la Cité-Jardin.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "73 Rue du Château",
    addressLocality: "Boulogne-Billancourt",
    postalCode: "92100",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "City", name: "Suresnes" },
    { "@type": "AdministrativeArea", name: "Hauts-de-Seine" },
  ],
  priceRange: "€€",
};

export default function CouvreurSuresnesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main className="legal-page">
        <div className="legal-container" style={{ maxWidth: "900px" }}>
          <p className="legal-date">
            <a href="/">Accueil</a> › Couvreur Suresnes
          </p>
          <h1>Couvreur à Suresnes – Entretien &amp; Rénovation Toiture Villas &amp; Cité-Jardin</h1>
          <p className="legal-date">
            Ent. GREMILLET | ☎ <a href="tel:0623853507">06 23 85 35 07</a> | Devis gratuit &amp; déplacement offert à Suresnes
          </p>

          <p>
            Suresnes est une commune résidentielle des Hauts-de-Seine dont l&apos;identité architecturale est fortement marquée par la célèbre Cité-Jardin, construite entre 1919 et 1939 — un modèle d&apos;urbanisme précurseur regroupant plusieurs centaines de maisons individuelles à toitures en tuiles rouges. Au-delà de ce patrimoine unique, Suresnes compte également de nombreuses villas bourgeoises des années 1920 à 1950, des maisons individuelles des décennies suivantes et des immeubles résidentiels en pied de coteau. Ce parc immobilier varié, exposé à l&apos;humidité de la Seine toute proche et aux vents du mont Valérien, nécessite un entretien régulier des toitures. Ent. GREMILLET, couvreur artisan basé à Boulogne-Billancourt, intervient régulièrement à Suresnes pour des travaux d&apos;entretien préventif, de nettoyage et de rénovation sur ce type de bâti.
          </p>

          <section>
            <h2>Nos Prestations à Suresnes</h2>
            <p>
              Les toitures de Suresnes — majoritairement en tuiles mécaniques sur les maisons individuelles, en ardoise sur certaines villas — demandent un entretien adapté et régulier. Nos interventions incluent :
            </p>
            <ul>
              <li><strong>Nettoyage haute pression et démoussage</strong> : élimination complète des mousses, lichens et dépôts organiques</li>
              <li><strong>Traitement hydrofuge longue durée</strong> : protection durable de 7 à 10 ans contre l&apos;humidité et la végétation</li>
              <li><strong>Réparation et remplacement de tuiles</strong> : mécaniques, plates ou romanes — intervention rapide sur tuiles cassées ou glissées</li>
              <li><strong>Réfection des faîtages et des rives</strong> : dépose du mortier vieilli, remplacement des faîtières descellées</li>
              <li><strong>Zinguerie et gouttières</strong> : remplacement, débouchage, pose de grilles anti-feuilles adaptées aux arbres du secteur</li>
              <li><strong>Rénovation complète de toiture</strong> : pour les couvertures en fin de vie, avec ou sans isolation thermique des combles</li>
            </ul>
          </section>

          <section>
            <h2>La Cité-Jardin de Suresnes : Un Patrimoine à Entretenir avec Soin</h2>
            <p>
              Les maisons de la Cité-Jardin de Suresnes ont été construites selon des principes architecturaux cohérents : toitures à deux pans en tuiles rouges caractéristiques, façades en brique et crépi, jardins privatifs. Ces maisons font partie d&apos;un ensemble protégé dont les travaux doivent respecter les matériaux et teintes d&apos;origine, souvent précisés dans le règlement de lotissement ou le Plan Local d&apos;Urbanisme de Suresnes. Ent. GREMILLET sélectionne des tuiles compatibles avec l&apos;esthétique existante et connaît les contraintes spécifiques de ce secteur, notamment les règles relatives aux couleurs de couverture et à la hauteur des rives.
            </p>
            <p>
              Au-delà de l&apos;aspect réglementaire, ces maisons de 80 à 100 ans d&apos;âge nécessitent une attention particulière : les charpentes en bois ancien doivent être inspectées, les sous-toitures (quand elles existent) vérifiées, et les faîtières reposées avec un mortier adapté aux variations thermiques.
            </p>
          </section>

          <section>
            <h2>Secteur d&apos;Intervention et Délais à Suresnes</h2>
            <p>
              Depuis Boulogne-Billancourt, nous atteignons Suresnes en 15 minutes environ. Nous garantissons une intervention sous 24h en cas d&apos;urgence : tuile envolée par le vent, fuite soudaine après une pluie violente, gouttière arrachée. Nous couvrons également les communes voisines : Puteaux, Rueil-Malmaison, Saint-Cloud, Garches et Nanterre.
            </p>
          </section>

          <section>
            <h2>Conseils d&apos;Entretien et Tarifs à Suresnes</h2>
            <p>
              Un entretien tous les 5 à 7 ans (nettoyage + traitement hydrofuge) prolonge la durée de vie d&apos;une toiture en tuiles de 20 à 30 ans supplémentaires et évite des rénovations coûteuses. À Suresnes, la proximité de la Seine et les arbres du secteur favorisent la prolifération rapide des mousses : un entretien préventif régulier est particulièrement recommandé. Comptez entre 15 et 35 €/m² pour un nettoyage avec traitement, entre 60 et 130 €/m² pour une rénovation complète en tuiles. Devis gratuit et sans engagement après visite sur site.
            </p>
          </section>

          <div style={{ background: "var(--rouge-accent)", borderRadius: "4px", padding: "2rem", textAlign: "center", marginTop: "2rem" }}>
            <p style={{ color: "#fff", fontSize: "1.15rem", fontWeight: 700, marginBottom: "1rem" }}>
              Devis gratuit pour votre toiture à Suresnes – Réponse sous 24h
            </p>
            <a href="/#contact" style={{ background: "#fff", color: "var(--rouge-accent)", padding: "0.8rem 2rem", borderRadius: "4px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", display: "inline-block" }}>
              Demander mon devis gratuit
            </a>
          </div>

          <section>
            <h2>Questions Fréquentes – Couvreur Suresnes</h2>
            <p><strong>Faut-il respecter des règles spécifiques pour rénover une toiture dans la Cité-Jardin de Suresnes ?</strong></p>
            <p>
              Oui. Les matériaux et couleurs doivent correspondre à l&apos;existant ou être validés par la mairie de Suresnes au travers d&apos;une déclaration préalable de travaux. Les tuiles rouges caractéristiques ne peuvent généralement pas être remplacées par des matériaux d&apos;aspect différent. Nous vous accompagnons dans les démarches et sélectionnons des matériaux conformes au règlement applicable.
            </p>
            <p><strong>À quelle fréquence faut-il entretenir une toiture en tuiles à Suresnes ?</strong></p>
            <p>
              Compte tenu de la proximité de la Seine et de la végétation dense dans ce secteur, nous recommandons un nettoyage et un traitement anti-mousse tous les 5 à 7 ans à Suresnes. Entre deux entretiens, un simple contrôle visuel annuel — notamment après les tempêtes d&apos;automne et d&apos;hiver — permet de détecter rapidement toute tuile déplacée ou faîtière descellée.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
