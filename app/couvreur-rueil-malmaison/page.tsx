import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Couvreur Rueil-Malmaison (92500) – Rénovation Toiture Maison & Pavillon | Ent. GREMILLET",
  description: "Couvreur à Rueil-Malmaison (92500) pour la rénovation de toiture de maisons et pavillons. Tuiles, ardoise, isolation combles. Devis gratuit sous 48h. ☎ 06 23 85 35 07",
  alternates: { canonical: "/couvreur-rueil-malmaison" },
  openGraph: {
    title: "Couvreur Rueil-Malmaison (92500) – Ent. GREMILLET",
    description: "Rénovation toiture maison individuelle et pavillon à Rueil-Malmaison. Tuiles, ardoise, isolation. Devis gratuit.",
    url: "/couvreur-rueil-malmaison",
    locale: "fr_FR",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Ent. GREMILLET – Couvreur Rueil-Malmaison",
  url: "https://gremillet-couverture.fr/couvreur-rueil-malmaison",
  telephone: "+33623853507",
  description: "Couvreur professionnel à Rueil-Malmaison, spécialisé en rénovation de toiture de maisons individuelles et pavillons. Tuiles, ardoise, isolation thermique.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "73 Rue du Château",
    addressLocality: "Boulogne-Billancourt",
    postalCode: "92100",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "City", name: "Rueil-Malmaison" },
    { "@type": "AdministrativeArea", name: "Hauts-de-Seine" },
  ],
  priceRange: "€€",
};

export default function CouvreurRueilPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main className="legal-page">
        <div className="legal-container" style={{ maxWidth: "900px" }}>
          <p className="legal-date">
            <a href="/">Accueil</a> › Couvreur Rueil-Malmaison
          </p>
          <h1>Couvreur à Rueil-Malmaison – Rénovation Toiture Maison &amp; Pavillon</h1>
          <p className="legal-date">
            Ent. GREMILLET | ☎ <a href="tel:0623853507">06 23 85 35 07</a> | Devis gratuit &amp; déplacement offert à Rueil-Malmaison
          </p>

          <p>
            Rueil-Malmaison est l&apos;une des communes les plus étendues du département des Hauts-de-Seine, avec un tissu résidentiel très diversifié : pavillons des années 1930 à 1980, maisons de ville, villas bourgeoises et résidences collectives. Ce parc immobilier vieillissant génère un besoin croissant en travaux de couverture. Les toitures en tuiles mécaniques qui couvrent la majorité des maisons individuelles de Rueil-Malmaison arrivent progressivement en fin de vie : tuiles qui se déplacent sous l&apos;effet du gel, faîtières qui se fissent, gouttières obstruées par les feuilles. Ent. GREMILLET, couvreur artisan basé à Boulogne-Billancourt, intervient à Rueil-Malmaison pour accompagner les propriétaires dans la rénovation, l&apos;entretien et la réparation de leur toiture, avec des solutions adaptées à chaque type de bien.
          </p>

          <section>
            <h2>Nos Services de Couverture à Rueil-Malmaison</h2>
            <p>
              Qu&apos;il s&apos;agisse d&apos;une réparation ponctuelle ou d&apos;une rénovation complète, nous adaptons notre intervention à l&apos;état réel de votre toiture et à votre budget :
            </p>
            <ul>
              <li><strong>Remplacement et réparation de tuiles</strong> : tuiles mécaniques, tuiles plates, tuiles romanes, faîtières et arêtiers</li>
              <li><strong>Rénovation complète de toiture</strong> : dépose totale, remplacement de la sous-toiture, repose ou changement des matériaux de couverture</li>
              <li><strong>Réparation de fuite d&apos;urgence</strong> : diagnostic précis, bâchage provisoire si nécessaire, réparation définitive dans les meilleurs délais</li>
              <li><strong>Gouttières et descentes pluviales</strong> : remplacement zinc ou PVC, nettoyage, pose de grilles anti-feuilles, joints</li>
              <li><strong>Isolation thermique des combles</strong> : perdus ou aménageables, laine soufflée ou roulée, pour réduire vos factures de chauffage</li>
              <li><strong>Traitement anti-mousse et nettoyage</strong> : haute pression et hydrofuge pour les toitures en tuiles envahies par la végétation</li>
            </ul>
          </section>

          <section>
            <h2>Le Bâti de Rueil-Malmaison : Ce Que Nous Observons Sur le Terrain</h2>
            <p>
              Les maisons individuelles de Rueil-Malmaison ont souvent été construites entre 1950 et 1980. À cet âge, les toitures en tuiles mécaniques présentent fréquemment des signes de fatigue : déplacement des tuiles sous l&apos;effet des cycles de gel-dégel, mortier de faîtage qui s&apos;effrite, gouttières en PVC craquelées. La végétation environnante — Rueil est entourée de zones boisées, notamment la forêt de Saint-Germain-en-Laye — accélère le développement de mousses et de lichens sur les surfaces de couverture. Ces organismes s&apos;infiltrent sous les tuiles, fragilisent les joints et peuvent endommager la sous-toiture si l&apos;on n&apos;intervient pas à temps.
            </p>
            <p>
              Notre traitement anti-mousse en deux étapes (nettoyage haute pression puis application d&apos;hydrofuge) protège efficacement votre toit pour 7 à 10 ans, sans nécessiter de rénovation complète si la couverture est encore en bon état structurel.
            </p>
          </section>

          <section>
            <h2>Intervention Rapide à Rueil-Malmaison et Secteur Proche</h2>
            <p>
              Depuis notre base à Boulogne-Billancourt, nous rejoignons Rueil-Malmaison en 20 minutes environ. En cas d&apos;urgence — infiltration d&apos;eau, tuile envolée après tempête, gouttière arrachée — nous garantissons une réponse sous 24h, 6 jours sur 7. Nous intervenons également dans les communes voisines : Nanterre, Suresnes, Puteaux, Vaucresson, Chatou et Versailles (78).
            </p>
          </section>

          <section>
            <h2>Aides et Tarifs pour la Rénovation de Toiture à Rueil-Malmaison</h2>
            <p>
              Le prix d&apos;une rénovation de toiture en tuiles à Rueil-Malmaison varie selon la surface, la pente et les travaux connexes. À titre indicatif : entre 50 et 120 €/m² pour une réfection en tuiles mécaniques, entre 80 et 160 €/m² pour une rénovation en ardoise. L&apos;isolation des combles perdus, quant à elle, peut bénéficier de MaPrimeRénov&apos; et de la TVA à 5,5 %, ce qui réduit sensiblement le reste à charge. Nous vous remettons un devis gratuit, détaillé et sans engagement sous 48h après visite sur site à Rueil-Malmaison.
            </p>
          </section>

          <div style={{ background: "var(--rouge-accent)", borderRadius: "4px", padding: "2rem", textAlign: "center", marginTop: "2rem" }}>
            <p style={{ color: "#fff", fontSize: "1.15rem", fontWeight: 700, marginBottom: "1rem" }}>
              Devis gratuit pour votre toiture à Rueil-Malmaison – Réponse sous 24h
            </p>
            <a href="/#contact" style={{ background: "#fff", color: "var(--rouge-accent)", padding: "0.8rem 2rem", borderRadius: "4px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", display: "inline-block" }}>
              Demander mon devis gratuit
            </a>
          </div>

          <section>
            <h2>Questions Fréquentes – Couvreur Rueil-Malmaison</h2>
            <p><strong>Faut-il une autorisation pour changer la toiture d&apos;un pavillon à Rueil-Malmaison ?</strong></p>
            <p>
              Si vous remplacez uniquement les matériaux de couverture sans modifier la forme du toit ni la pente, une simple déclaration préalable de travaux suffit généralement. Pour un changement de forme ou une surélévation, un permis de construire peut être requis. Nous vous accompagnons dans les démarches administratives.
            </p>
            <p><strong>L&apos;isolation des combles est-elle compatible avec les aides de l&apos;État à Rueil-Malmaison ?</strong></p>
            <p>
              Oui. Sous conditions de ressources et selon les matériaux, l&apos;isolation thermique des combles peut bénéficier de MaPrimeRénov&apos;, de la TVA à 5,5 % et des Certificats d&apos;Économie d&apos;Énergie (CEE). Nous vous orientons vers les dispositifs applicables à votre situation lors de notre visite gratuite à Rueil-Malmaison.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
