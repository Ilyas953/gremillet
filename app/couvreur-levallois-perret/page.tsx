import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Couvreur Levallois-Perret (92300) – Zinguerie & Toitures Haussmanniennes | Ent. GREMILLET",
  description: "Couvreur à Levallois-Perret (92300) spécialisé en zinguerie, ardoise et toitures d'immeubles haussmanniens. Devis gratuit sous 24h. ☎ 06 23 85 35 07",
  alternates: { canonical: "/couvreur-levallois-perret" },
  openGraph: {
    title: "Couvreur Levallois-Perret (92300) – Ent. GREMILLET",
    description: "Zinguerie, ardoise et rénovation de toitures haussmanniennes à Levallois-Perret. Devis gratuit.",
    url: "/couvreur-levallois-perret",
    locale: "fr_FR",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Ent. GREMILLET – Couvreur Levallois-Perret",
  url: "https://gremillet-couverture.fr/couvreur-levallois-perret",
  telephone: "+33623853507",
  description: "Couvreur professionnel à Levallois-Perret, spécialisé en zinguerie traditionnelle, ardoise naturelle et rénovation de toitures haussmanniennes.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "73 Rue du Château",
    addressLocality: "Boulogne-Billancourt",
    postalCode: "92100",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "City", name: "Levallois-Perret" },
    { "@type": "AdministrativeArea", name: "Hauts-de-Seine" },
  ],
  priceRange: "€€",
};

export default function CouvreurLevalloisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main className="legal-page">
        <div className="legal-container" style={{ maxWidth: "900px" }}>
          <p className="legal-date">
            <a href="/">Accueil</a> › Couvreur Levallois-Perret
          </p>
          <h1>Couvreur à Levallois-Perret – Zinguerie &amp; Toitures Haussmanniennes</h1>
          <p className="legal-date">
            Ent. GREMILLET | ☎ <a href="tel:0623853507">06 23 85 35 07</a> | Devis gratuit &amp; déplacement offert à Levallois-Perret
          </p>

          <p>
            Levallois-Perret est l&apos;une des villes les plus denses d&apos;Europe, avec un tissu bâti quasi exclusivement composé d&apos;immeubles collectifs. Son architecture est homogène et remarquable : immeubles haussmanniens à six étages en pierre de taille, toitures mansardées en ardoise naturelle, chéneaux et ornements en zinc caractéristiques du Paris de la fin du XIXe siècle. Ces toitures, souvent centenaires, requièrent une expertise très spécifique en zinguerie traditionnelle, en ardoise naturelle et en travaux de couverture en milieu urbain dense. Ent. GREMILLET intervient régulièrement à Levallois-Perret pour des réfections de toiture, des réparations de zinguerie urgentes et des opérations d&apos;entretien sur ce patrimoine architectural exigeant, avec toute la discrétion et le savoir-faire que ces chantiers requièrent.
          </p>

          <section>
            <h2>Nos Services à Levallois-Perret</h2>
            <p>
              Les immeubles haussmanniens de Levallois-Perret partagent des caractéristiques techniques communes : toitures à forte pente en ardoise naturelle, chéneaux cachés en zinc sous les corniches, lucarnes et fenêtres de toit ornementales. Nos équipes maîtrisent ces spécificités :
            </p>
            <ul>
              <li><strong>Zinguerie traditionnelle</strong> : chéneaux zinc, gouttières zinc ou cuivre, abergements, noues, tabatières, ornements</li>
              <li><strong>Couverture en ardoise naturelle</strong> : pose à l&apos;ancienne, recouvrement, fixation par crochets inox, reprise de noues</li>
              <li><strong>Remplacement de gouttières</strong> : zinc, cuivre, zinc-titane selon les exigences du règlement de copropriété</li>
              <li><strong>Réparation d&apos;urgence</strong> : infiltration, ardoise déplacée, solin décollé, chéneau bouché, noue obstruée</li>
              <li><strong>Nettoyage et traitement</strong> : démoussage et hydrofuge sur ardoise, rinçage des chéneaux et gouttières</li>
              <li><strong>Réfection de charpente</strong> : diagnostic, traitement insecticide, remplacement de chevrons dégradés</li>
            </ul>
          </section>

          <section>
            <h2>Toitures Haussmanniennes : Une Expertise Que Peu Maîtrisent</h2>
            <p>
              Rénover la toiture d&apos;un immeuble haussmannien à Levallois-Perret ne s&apos;improvise pas. Les contraintes sont multiples : travail en hauteur sur des toitures à forte pente (40° à 60°), respect strict des règles de copropriété, matériaux devant correspondre à l&apos;existant pour éviter les conflits avec les règlements d&apos;urbanisme. Les chéneaux cachés sous les corniches sont souvent le point faible de ces toitures : obstrués par les feuilles et les dépôts, ils génèrent des débordements qui s&apos;infiltrent dans les façades et les parties communes, entraînant des dégâts des eaux coûteux.
            </p>
            <p>
              Ent. GREMILLET intervient sur ces problématiques avec précision : nettoyage et réfection des chéneaux, reprise des solins et abergements, remplacement des ardoises défectueuses. Nous travaillons régulièrement avec les syndics de copropriété de Levallois-Perret pour des chantiers planifiés ou des urgences.
            </p>
          </section>

          <section>
            <h2>Rapidité d&apos;Intervention à Levallois-Perret</h2>
            <p>
              Depuis Boulogne-Billancourt, nous accédons à Levallois-Perret en moins de 20 minutes. Pour les urgences — infiltration après pluie, ardoise manquante, chéneau arraché — nous garantissons une réponse dans les 24h. Nous intervenons aussi dans les communes voisines : Neuilly-sur-Seine, Clichy, Asnières-sur-Seine, Puteaux et Paris 17e.
            </p>
          </section>

          <section>
            <h2>Tarifs de Couverture à Levallois-Perret</h2>
            <p>
              Les travaux de couverture sur immeubles haussmanniens à Levallois-Perret sont plus techniques que sur des maisons individuelles : hauteur importante, matériaux nobles, contraintes logistiques en milieu urbain dense. Comptez entre 90 et 200 €/m² pour une réfection en ardoise naturelle avec zinguerie complète, entre 30 et 80 €/m² pour une réfection partielle ciblée. Pour une réparation localisée (remplacement d&apos;ardoises, réfection d&apos;une noue), les tarifs sont bien inférieurs. Devis gratuit, détaillé et remis sous 48h.
            </p>
          </section>

          <div style={{ background: "var(--rouge-accent)", borderRadius: "4px", padding: "2rem", textAlign: "center", marginTop: "2rem" }}>
            <p style={{ color: "#fff", fontSize: "1.15rem", fontWeight: 700, marginBottom: "1rem" }}>
              Devis gratuit pour votre toiture à Levallois-Perret – Réponse sous 24h
            </p>
            <a href="/#contact" style={{ background: "#fff", color: "var(--rouge-accent)", padding: "0.8rem 2rem", borderRadius: "4px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", display: "inline-block" }}>
              Demander mon devis gratuit
            </a>
          </div>

          <section>
            <h2>Questions Fréquentes – Couvreur Levallois-Perret</h2>
            <p><strong>Comment gérer une rénovation de toiture en copropriété à Levallois-Perret ?</strong></p>
            <p>
              La décision doit être votée en assemblée générale de copropriété (majorité de l&apos;article 25 ou 26 selon l&apos;importance et le montant des travaux). Nous fournissons un devis détaillé compatible avec les exigences des syndics, incluant assurance décennale, RC Pro et planning d&apos;intervention. Nous pouvons également présenter les travaux lors de l&apos;AG si le syndic le souhaite.
            </p>
            <p><strong>L&apos;ardoise naturelle est-elle obligatoire sur les immeubles haussmanniens de Levallois ?</strong></p>
            <p>
              Pas systématiquement, mais le règlement de copropriété ou le PLU de Levallois-Perret peut l&apos;imposer. L&apos;ardoise fiber-ciment est une alternative souvent acceptée et nettement moins coûteuse (30 à 50 % moins cher) tout en offrant un rendu visuel très proche. Nous vous conseillons selon le règlement applicable à votre immeuble.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
