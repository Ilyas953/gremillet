import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
  description: "Couvreur professionnel à Neuilly-sur-Seine, spécialisé en toitures haussmanniennes, ardoise naturelle et zinguerie. Intervention sous 24h.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "73 Rue du Château",
    addressLocality: "Boulogne-Billancourt",
    postalCode: "92100",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "City", name: "Neuilly-sur-Seine" },
    { "@type": "AdministrativeArea", name: "Hauts-de-Seine" },
  ],
  priceRange: "€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      opens: "08:00",
      closes: "20:30",
    },
  ],
};

export default function CouvreurNeuillyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main className="legal-page">
        <div className="legal-container" style={{ maxWidth: "900px" }}>
          <p className="legal-date">
            <a href="/">Accueil</a> › Couvreur Neuilly-sur-Seine
          </p>
          <h1>Couvreur à Neuilly-sur-Seine – Expert Toitures Ardoise &amp; Zinc</h1>
          <p className="legal-date">
            Ent. GREMILLET | ☎ <a href="tel:0623853507">06 23 85 35 07</a> | Devis gratuit &amp; déplacement offert à Neuilly-sur-Seine
          </p>

          <p>
            Neuilly-sur-Seine est l&apos;une des communes les plus prisées du département 92, réputée pour son patrimoine architectural exceptionnel : hôtels particuliers Belle Époque, immeubles haussmanniens aux toitures en ardoise naturelle, résidences de standing couvertes de zinc. Ces bâtiments centenaires méritent une attention particulière lors des travaux de couverture — ils exigent un savoir-faire précis, des matériaux nobles assortis à l&apos;existant et une gestion rigoureuse du chantier en milieu urbain dense. Ent. GREMILLET, couvreur artisan basé à Boulogne-Billancourt (à moins de 10 minutes de Neuilly-sur-Seine), intervient régulièrement dans cette commune pour des rénovations de toiture, des réfections de zinguerie et des réparations d&apos;urgence sur ce type de patrimoine architectural.
          </p>

          <section>
            <h2>Nos Prestations de Couverture à Neuilly-sur-Seine</h2>
            <p>
              Les toitures des immeubles de Neuilly-sur-Seine sont majoritairement constituées d&apos;ardoise naturelle et de zinc, deux matériaux techniques qui requièrent une expertise spécifique. Nos équipes maîtrisent ces spécificités et interviennent pour :
            </p>
            <ul>
              <li><strong>Rénovation en ardoise naturelle</strong> : remplacement d&apos;ardoises cassées ou déplacées, reprise d&apos;étanchéité, recouvrement à l&apos;ancienne par crochets inox</li>
              <li><strong>Zinguerie de précision</strong> : chéneaux, gouttières zinc, abergements, noues, tabatières et ornements zinc</li>
              <li><strong>Réparation urgente</strong> : infiltration après orage, ardoise manquante, solin décollé, noue obstruée</li>
              <li><strong>Nettoyage et traitement hydrofuge</strong> : démoussage haute pression, application de produit anti-mousse longue durée sur ardoise</li>
              <li><strong>Réfection de charpente</strong> : traitement insecticide et fongicide, remplacement de chevrons dégradés, consolidation des pannes</li>
              <li><strong>Pose de fenêtres de toit et tabatières</strong> : intégration soignée dans des toitures historiques, respect du règlement de copropriété</li>
            </ul>
            <p>
              Chaque intervention est réalisée avec des matériaux assortis à l&apos;existant pour préserver l&apos;esthétique et la valeur patrimoniale des immeubles de Neuilly-sur-Seine.
            </p>
          </section>

          <section>
            <h2>Un Couvreur Qui Comprend l&apos;Architecture Neuilloise</h2>
            <p>
              Les immeubles de Neuilly-sur-Seine ont souvent plus d&apos;un siècle. Leurs toitures mansardées à forte pente, leurs chéneaux cachés sous les corniches et leurs ornements en zinc constituent des points de vulnérabilité complexes à traiter. Les chéneaux bouchés par les feuilles génèrent des débordements qui infiltrent les façades. Les noues mal entretenues accumulent l&apos;eau et fragilisent la charpente. Ent. GREMILLET évalue systématiquement l&apos;état de la charpente, de la zinguerie et des liaisons façade-toiture avant toute intervention.
            </p>
            <p>
              Nous collaborons régulièrement avec des syndics de copropriété, des gestionnaires de patrimoine immobilier et des architectes à Neuilly-sur-Seine. Nous fournissons l&apos;ensemble des documents requis pour les procédures d&apos;appel d&apos;offres : assurance décennale, RC Pro, garanties et certificats de conformité.
            </p>
          </section>

          <section>
            <h2>Intervention Rapide à Neuilly-sur-Seine et Alentours</h2>
            <p>
              Depuis notre base à Boulogne-Billancourt, nous atteignons Neuilly-sur-Seine en moins de 15 minutes, sans embouteillage. Cette proximité est un avantage décisif pour les urgences : fuite de toiture après une tempête, ardoise qui glisse, gouttière arrachée. Nous garantissons une première intervention sous 24h, 6 jours sur 7. Nous intervenons également dans les communes voisines : Levallois-Perret, Puteaux, Courbevoie, Garches, Saint-Cloud et Paris 17e.
            </p>
          </section>

          <section>
            <h2>Tarifs et Devis Gratuit à Neuilly-sur-Seine</h2>
            <p>
              Tous nos devis sont établis gratuitement après visite sur site, sans engagement. Pour une toiture en ardoise naturelle à Neuilly-sur-Seine, comptez entre 80 et 200 €/m² selon la surface, la pente, la complexité de la zinguerie et les éventuels travaux de charpente. Une réparation localisée (quelques ardoises, réfection d&apos;une noue) reste bien inférieure à ces montants. Le devis détaillé que nous remettons sous 48h distingue précisément fourniture, main-d&apos;œuvre et travaux annexes.
            </p>
          </section>

          <div style={{ background: "var(--rouge-accent)", borderRadius: "4px", padding: "2rem", textAlign: "center", marginTop: "2rem" }}>
            <p style={{ color: "#fff", fontSize: "1.15rem", fontWeight: 700, marginBottom: "1rem" }}>
              Obtenez votre devis gratuit pour vos travaux de toiture à Neuilly-sur-Seine
            </p>
            <a href="/#contact" style={{ background: "#fff", color: "var(--rouge-accent)", padding: "0.8rem 2rem", borderRadius: "4px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", display: "inline-block" }}>
              Demander mon devis gratuit
            </a>
          </div>

          <section>
            <h2>Questions Fréquentes – Couvreur Neuilly-sur-Seine</h2>
            <p><strong>Intervenez-vous pour les copropriétés à Neuilly-sur-Seine ?</strong></p>
            <p>
              Oui. Nous travaillons régulièrement avec des syndics et gestionnaires de patrimoine à Neuilly-sur-Seine. Nous fournissons l&apos;assurance décennale, la RC Pro et les devis détaillés requis pour les assemblées générales et appels d&apos;offres de copropriété.
            </p>
            <p><strong>Peut-on rénover une toiture en ardoise sans tout refaire ?</strong></p>
            <p>
              Oui. Si moins de 30 % des ardoises sont défectueuses et que la charpente est saine, une réfection partielle suffit : remplacement des ardoises cassées ou déplacées, reprise des noues et abergements. Nous l&apos;évaluons lors de notre visite diagnostic gratuite. Cette approche ciblée peut réduire le coût des travaux de 40 à 60 % par rapport à une rénovation complète.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
