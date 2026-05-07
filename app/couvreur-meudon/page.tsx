import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Couvreur Meudon (92190) – Démoussage, Traitement & Rénovation Toiture | Ent. GREMILLET",
  description: "Couvreur à Meudon (92190) : démoussage, traitement hydrofuge, rénovation toiture villa et maison. Secteur forêt. Devis gratuit. ☎ 06 23 85 35 07",
  alternates: { canonical: "/couvreur-meudon" },
  openGraph: {
    title: "Couvreur Meudon (92190) – Ent. GREMILLET",
    description: "Démoussage, traitement et rénovation de toiture à Meudon. Expert en toitures exposées à la forêt. Devis gratuit.",
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
  description: "Couvreur professionnel à Meudon, spécialisé en démoussage, traitement hydrofuge et rénovation de toitures exposées à l'humidité et à la forêt.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "73 Rue du Château",
    addressLocality: "Boulogne-Billancourt",
    postalCode: "92100",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "City", name: "Meudon" },
    { "@type": "AdministrativeArea", name: "Hauts-de-Seine" },
  ],
  priceRange: "€€",
};

export default function CouvreurMeudonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main className="legal-page">
        <div className="legal-container" style={{ maxWidth: "900px" }}>
          <p className="legal-date">
            <a href="/">Accueil</a> › Couvreur Meudon
          </p>
          <h1>Couvreur à Meudon – Démoussage, Traitement &amp; Rénovation Toiture</h1>
          <p className="legal-date">
            Ent. GREMILLET | ☎ <a href="tel:0623853507">06 23 85 35 07</a> | Devis gratuit &amp; déplacement offert à Meudon
          </p>

          <p>
            Meudon est une commune résidentielle des Hauts-de-Seine au cadre de vie exceptionnel : ville haute couverte par la forêt domaniale de Meudon, ville basse bordant la Seine, quartiers résidentiels de Bellevue et du Val Fleury. Ce cadre verdoyant a cependant un revers pour les propriétaires : il crée des conditions idéales au développement des mousses, lichens et champignons sur les toitures. L&apos;ombre permanente des arbres limite le séchage naturel des couvertures après la pluie, l&apos;humidité ambiante s&apos;infiltre dans les joints, et les feuilles mortes obstruent régulièrement les gouttières. Ent. GREMILLET, couvreur artisan basé à Boulogne-Billancourt, est spécialisé dans le traitement de ces problématiques à Meudon et intervient également pour la rénovation complète des toitures vieillissantes dans ce secteur.
          </p>

          <section>
            <h2>Nos Prestations à Meudon</h2>
            <p>
              Les maisons de Meudon présentent une architecture variée : villas bourgeoises de la fin du XIXe siècle à toitures en ardoise, pavillons des années 1920-1950 en tuiles, maisons individuelles plus récentes. Chaque type de bâti a des besoins spécifiques :
            </p>
            <ul>
              <li><strong>Nettoyage haute pression et démoussage complet</strong> : élimination totale des mousses, lichens et dépôts verts sur tuiles ou ardoise</li>
              <li><strong>Traitement hydrofuge et anti-mousse longue durée</strong> : protection efficace de 7 à 10 ans, produits professionnels à base de cuivre</li>
              <li><strong>Débouchage et remplacement de gouttières</strong> : les feuilles de la forêt de Meudon obstruent rapidement les évacuations, causant des débordements</li>
              <li><strong>Réparation de toiture</strong> : tuiles déplacées, ardoises fissurées, noues colmatées, solins décollés</li>
              <li><strong>Zinguerie</strong> : remplacement de gouttières, chéneaux, abergements et descentes pluviales</li>
              <li><strong>Rénovation complète de toiture</strong> : dépose-repose pour les couvertures en fin de vie, avec ou sans isolation thermique</li>
            </ul>
          </section>

          <section>
            <h2>La Forêt de Meudon : Un Environnement Particulièrement Éprouvant pour les Toitures</h2>
            <p>
              Les racines des mousses s&apos;infiltrent sous les tuiles et dans les joints, créant des micro-fissures qui favorisent l&apos;entrée de l&apos;eau. À terme, sans traitement préventif, ces infiltrations fragilisent la sous-toiture et peuvent affecter la charpente, nécessitant des travaux bien plus coûteux qu&apos;un simple traitement hydrofuge. Les lichens, plus difficiles à éliminer que les mousses, nécessitent un nettoyage professionnel haute pression suivi d&apos;une application de produit biocide pour empêcher leur réapparition.
            </p>
            <p>
              À Meudon, nous recommandons systématiquement un contrôle de l&apos;état de la toiture tous les 3 à 5 ans, compte tenu de l&apos;environnement boisé et de l&apos;humidité permanente. Une visite diagnostic gratuite permet d&apos;établir un calendrier d&apos;entretien adapté et d&apos;éviter les mauvaises surprises.
            </p>
          </section>

          <section>
            <h2>Secteur d&apos;Intervention et Délais à Meudon</h2>
            <p>
              Depuis Boulogne-Billancourt, Meudon est accessible en 15 à 20 minutes. Nous intervenons sous 24h pour les urgences (fuite soudaine, gouttière arrachée, ardoise glissée) et planifions les travaux de traitement et de rénovation selon votre agenda. Nous couvrons également les communes voisines : Sèvres, Chaville, Vélizy-Villacoublay, Clamart et Issy-les-Moulineaux.
            </p>
          </section>

          <section>
            <h2>Tarifs à Meudon et Devis Gratuit</h2>
            <p>
              Un traitement anti-mousse complet (nettoyage haute pression + hydrofuge) revient en moyenne entre 15 et 35 €/m² selon la surface et l&apos;état de la toiture — bien moins coûteux que d&apos;attendre que les dégâts nécessitent une rénovation complète. Pour une rénovation en tuiles, comptez entre 60 et 130 €/m² fourniture et pose. Tous nos devis sont établis gratuitement après visite sur site à Meudon, sans engagement et sans acompte demandé avant démarrage.
            </p>
          </section>

          <div style={{ background: "var(--rouge-accent)", borderRadius: "4px", padding: "2rem", textAlign: "center", marginTop: "2rem" }}>
            <p style={{ color: "#fff", fontSize: "1.15rem", fontWeight: 700, marginBottom: "1rem" }}>
              Devis gratuit pour votre toiture à Meudon – Réponse sous 24h
            </p>
            <a href="/#contact" style={{ background: "#fff", color: "var(--rouge-accent)", padding: "0.8rem 2rem", borderRadius: "4px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", display: "inline-block" }}>
              Demander mon devis gratuit
            </a>
          </div>

          <section>
            <h2>Questions Fréquentes – Couvreur Meudon</h2>
            <p><strong>À quelle fréquence faut-il traiter une toiture contre les mousses à Meudon ?</strong></p>
            <p>
              Compte tenu de l&apos;environnement boisé et de l&apos;humidité du secteur de Meudon, nous recommandons un nettoyage et un traitement anti-mousse tous les 4 à 6 ans. Entre deux traitements complets, un contrôle visuel annuel (notamment après l&apos;automne) permet de détecter rapidement une tuile déplacée ou un début de développement de mousse.
            </p>
            <p><strong>Les produits anti-mousse utilisés sont-ils dangereux pour la végétation de mon jardin ?</strong></p>
            <p>
              Non. Nous utilisons exclusivement des produits homologués à base de cuivre ou de composés biocides certifiés, conformes à la réglementation européenne. Ces produits n&apos;ont aucun effet négatif sur la végétation environnante lorsqu&apos;ils sont appliqués correctement. Nous protégeons systématiquement les parterres et massifs lors de nos interventions à Meudon.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
