import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Mentions Légales – Ent. GREMILLET Couvreur 92",
  description: "Mentions légales du site Ent. GREMILLET, couvreur professionnel à Boulogne-Billancourt (92).",
};

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main className="legal-page">
        <div className="legal-container">
          <h1>Mentions Légales</h1>

          <section>
            <h2>1. Éditeur du site</h2>
            <p><strong>Dénomination :</strong> Entreprise GREMILLET</p>
            <p><strong>Forme juridique :</strong> Entreprise individuelle</p>
            <p><strong>Adresse :</strong> 73 Rue du Château, 92100 Boulogne-Billancourt</p>
            <p><strong>Téléphone :</strong> <a href="tel:0623853507">06 23 85 35 07</a></p>
            <p><strong>SIRET :</strong> [À compléter]</p>
            <p><strong>N° TVA intracommunautaire :</strong> [À compléter]</p>
            <p><strong>Directeur de publication :</strong> M. GREMILLET</p>
          </section>

          <section>
            <h2>2. Hébergement</h2>
            <p><strong>Hébergeur :</strong> Cloudflare, Inc.</p>
            <p><strong>Adresse :</strong> 101 Townsend St, San Francisco, CA 94107, États-Unis</p>
            <p><strong>Site web :</strong> <a href="https://www.cloudflare.com" target="_blank" rel="noopener">cloudflare.com</a></p>
          </section>

          <section>
            <h2>3. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo) est la propriété exclusive
              d&apos;Ent. GREMILLET. Toute reproduction, distribution ou modification, même partielle, est
              interdite sans autorisation préalable écrite.
            </p>
          </section>

          <section>
            <h2>4. Responsabilité</h2>
            <p>
              Ent. GREMILLET s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations publiées.
              Cependant, nous ne pouvons garantir l&apos;exactitude, la précision ou l&apos;exhaustivité de ces informations.
              En conséquence, nous déclinons toute responsabilité pour toute imprécision ou omission portant sur
              les informations disponibles sur ce site.
            </p>
          </section>

          <section>
            <h2>5. Protection des données personnelles</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique
              et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression des données
              vous concernant. Pour exercer ces droits, contactez-nous à l&apos;adresse indiquée ci-dessus ou
              consultez notre <a href="/politique-confidentialite">Politique de Confidentialité</a>.
            </p>
          </section>

          <section>
            <h2>6. Cookies</h2>
            <p>
              Ce site n&apos;utilise pas de cookies publicitaires. La carte Google Maps intégrée peut déposer
              des cookies tiers. Vous pouvez les désactiver dans les paramètres de votre navigateur.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
