import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Couvreur Clamart (92140) – Rénovation Toiture Pavillon & Isolation Combles | Ent. GREMILLET",
  description: "Couvreur à Clamart (92140) : diagnostic gratuit, rénovation toiture pavillon, isolation combles perdus et aménagés. Devis sous 48h. ☎ 06 23 85 35 07",
  alternates: { canonical: "/couvreur-clamart" },
  openGraph: {
    title: "Couvreur Clamart (92140) – Ent. GREMILLET",
    description: "Rénovation toiture de pavillons et isolation thermique des combles à Clamart. Diagnostic gratuit. Devis sous 48h.",
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
  description: "Couvreur professionnel à Clamart, spécialisé en rénovation de toitures de pavillons et maisons individuelles, diagnostic et isolation thermique des combles.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "73 Rue du Château",
    addressLocality: "Boulogne-Billancourt",
    postalCode: "92100",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "City", name: "Clamart" },
    { "@type": "AdministrativeArea", name: "Hauts-de-Seine" },
  ],
  priceRange: "€€",
};

export default function CouvreurClamartPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main className="legal-page">
        <div className="legal-container" style={{ maxWidth: "900px" }}>
          <p className="legal-date">
            <a href="/">Accueil</a> › Couvreur Clamart
          </p>
          <h1>Couvreur à Clamart – Rénovation Toiture Pavillon &amp; Isolation Combles</h1>
          <p className="legal-date">
            Ent. GREMILLET | ☎ <a href="tel:0623853507">06 23 85 35 07</a> | Devis gratuit &amp; déplacement offert à Clamart
          </p>

          <p>
            Clamart est une commune résidentielle du sud des Hauts-de-Seine composée en grande majorité de maisons individuelles et de pavillons construits entre les années 1950 et 1980. Ce parc immobilier vieillissant est aujourd&apos;hui au cœur d&apos;un vaste cycle de rénovation : les toitures en tuiles mécaniques de cette époque, après 40 à 70 ans de service, montrent souvent des signes de fatigue avancés — tuiles déplacées, faîtières descellées, sous-toitures saturées. L&apos;isolation thermique, souvent insuffisante ou absente dans ces constructions d&apos;après-guerre, est devenue un enjeu majeur face à la hausse des prix de l&apos;énergie. Ent. GREMILLET intervient régulièrement à Clamart pour diagnostiquer l&apos;état des toitures et proposer les solutions adaptées : réparation ciblée, rénovation complète, isolation des combles avec ou sans aides de l&apos;État.
          </p>

          <section>
            <h2>Nos Services à Clamart</h2>
            <p>
              Nos équipes interviennent à Clamart pour l&apos;ensemble des travaux de couverture, du diagnostic initial à la réception du chantier :
            </p>
            <ul>
              <li><strong>Diagnostic de toiture gratuit</strong> : inspection complète de la couverture, de la charpente, de l&apos;isolation et des gouttières — rapport détaillé remis</li>
              <li><strong>Rénovation partielle ou complète</strong> : tuiles mécaniques, tuiles plates, ardoise fiber-ciment selon votre budget et les caractéristiques de votre maison</li>
              <li><strong>Isolation thermique des combles</strong> : perdus par insufflation de laine soufflée, aménagés par sarking ou laine en rouleau</li>
              <li><strong>Réparation urgente</strong> : fuite détectée, tuile cassée ou déplacée, infiltration soudaine après pluie</li>
              <li><strong>Traitement anti-mousse et nettoyage</strong> : haute pression et hydrofuge pour les toitures encore structurellement saines</li>
              <li><strong>Zinguerie et gouttières</strong> : remplacement de gouttières PVC ou zinc, descentes pluviales, faîtages et arêtiers</li>
            </ul>
          </section>

          <section>
            <h2>Pourquoi les Toitures des Pavillons de Clamart Nécessitent Souvent une Rénovation</h2>
            <p>
              Les pavillons construits à Clamart entre 1955 et 1980 présentent des toitures en tuiles mécaniques dont la durée de vie théorique est de 40 à 60 ans. Au-delà, plusieurs phénomènes deviennent courants : les tuiles se déplacent sous les cycles gel-dégel, le mortier de faîtage s&apos;effrite, les écrans de sous-toiture (quand ils existent) sont saturés d&apos;humidité, et la charpente peut présenter des micro-fissures ou des attaques fongiques. Un diagnostic complet permet d&apos;identifier les zones à traiter en priorité et d&apos;éviter de payer des travaux superflus.
            </p>
            <p>
              Notre visite diagnostic est réalisée gratuitement, sans engagement. Nous inspectons systématiquement la charpente en plus de la couverture, pour détecter d&apos;éventuelles attaques d&apos;insectes xylophages (capricornes, vrillettes) ou de champignons lignivores qui affaiblissent silencieusement la structure.
            </p>
          </section>

          <section>
            <h2>L&apos;Isolation des Combles à Clamart : Rentable et Aidée</h2>
            <p>
              Pour les pavillons de Clamart des années 1960-1975, l&apos;isolation des combles est souvent absente ou réduite à quelques centimètres de laine de verre d&apos;époque. Une isolation performante aux normes 2025 (R ≥ 7 pour les combles perdus) peut réduire les déperditions thermiques du logement de 25 à 30 % et améliorer sensiblement le classement DPE, ce qui valorise votre bien à la revente. Les travaux d&apos;isolation des combles perdus sont rapides (1 à 2 jours pour un pavillon standard) et peuvent bénéficier de MaPrimeRénov&apos;, de la TVA à 5,5 % et des Certificats d&apos;Économie d&apos;Énergie.
            </p>
          </section>

          <section>
            <h2>Intervention Rapide à Clamart et Secteur</h2>
            <p>
              Depuis Boulogne-Billancourt, nous atteignons Clamart en 15 à 20 minutes. Nous intervenons sous 24h en cas d&apos;urgence. Nous couvrons également les communes voisines : Meudon, Bagneux, Châtenay-Malabry, Fontenay-aux-Roses, Le Plessis-Robinson et Issy-les-Moulineaux.
            </p>
          </section>

          <div style={{ background: "var(--rouge-accent)", borderRadius: "4px", padding: "2rem", textAlign: "center", marginTop: "2rem" }}>
            <p style={{ color: "#fff", fontSize: "1.15rem", fontWeight: 700, marginBottom: "1rem" }}>
              Diagnostic gratuit &amp; devis pour votre toiture à Clamart – Réponse sous 48h
            </p>
            <a href="/#contact" style={{ background: "#fff", color: "var(--rouge-accent)", padding: "0.8rem 2rem", borderRadius: "4px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", display: "inline-block" }}>
              Demander mon devis gratuit
            </a>
          </div>

          <section>
            <h2>Questions Fréquentes – Couvreur Clamart</h2>
            <p><strong>Faut-il rénover la charpente en même temps que la toiture à Clamart ?</strong></p>
            <p>
              Pas nécessairement. Si la charpente est saine — bois sec, sans insectes xylophages ni champignons — elle peut être conservée et simplement traitée préventivement. Nous l&apos;inspectons systématiquement lors de notre diagnostic gratuit et ne recommandons que les travaux strictement nécessaires. Si des zones sont fragilisées, nous réparons chirurgicalement plutôt que de préconiser un remplacement complet.
            </p>
            <p><strong>Mon pavillon de Clamart a-t-il droit aux aides pour l&apos;isolation des combles ?</strong></p>
            <p>
              Oui, si votre logement a plus de 2 ans. MaPrimeRénov&apos;, les CEE (Certificats d&apos;Économie d&apos;Énergie) et la TVA à 5,5 % sont accessibles aux propriétaires occupants et bailleurs selon les plafonds de revenus applicables en 2025. Nous vous aidons à identifier les dispositifs auxquels vous avez droit et à constituer votre dossier lors de notre visite à Clamart.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
