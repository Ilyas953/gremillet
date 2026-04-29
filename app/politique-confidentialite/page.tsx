import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Politique de Confidentialité – Ent. GREMILLET Couvreur 92",
  description: "Politique de confidentialité et protection des données personnelles – Ent. GREMILLET, couvreur à Boulogne-Billancourt.",
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Navbar />
      <main className="legal-page">
        <div className="legal-container">
          <h1>Politique de Confidentialité</h1>
          <p className="legal-date">Dernière mise à jour : avril 2026</p>

          <section>
            <h2>1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données est Entreprise GREMILLET, dont le siège est situé
              73 Rue du Château, 92100 Boulogne-Billancourt. Contact : <a href="tel:0623853507">06 23 85 35 07</a>.
            </p>
          </section>

          <section>
            <h2>2. Données collectées</h2>
            <p>Nous collectons les données suivantes via le formulaire de contact :</p>
            <ul>
              <li>Prénom et nom</li>
              <li>Numéro de téléphone</li>
              <li>Adresse email (optionnelle)</li>
              <li>Type de travaux demandés</li>
              <li>Description du projet</li>
            </ul>
          </section>

          <section>
            <h2>3. Finalité du traitement</h2>
            <p>Ces données sont collectées uniquement pour :</p>
            <ul>
              <li>Répondre à votre demande de devis</li>
              <li>Vous recontacter concernant vos travaux</li>
              <li>Établir un devis personnalisé</li>
            </ul>
            <p>Vos données ne sont jamais vendues ni transmises à des tiers à des fins commerciales.</p>
          </section>

          <section>
            <h2>4. Durée de conservation</h2>
            <p>
              Vos données sont conservées pendant une durée maximale de 3 ans à compter de votre dernière
              prise de contact, conformément aux recommandations de la CNIL.
            </p>
          </section>

          <section>
            <h2>5. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul>
              <li><strong>Droit d&apos;accès</strong> : connaître les données nous concernant que nous détenons</li>
              <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
              <li><strong>Droit à l&apos;effacement</strong> : demander la suppression de vos données</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement de vos données</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous au <a href="tel:0623853507">06 23 85 35 07</a> ou
              par courrier à notre adresse. Vous pouvez également adresser une réclamation à la
              <a href="https://www.cnil.fr" target="_blank" rel="noopener"> CNIL</a>.
            </p>
          </section>

          <section>
            <h2>6. Cookies</h2>
            <p>
              Ce site n&apos;utilise pas de cookies publicitaires ou de suivi. La carte Google Maps intégrée
              dans la page de contact peut déposer des cookies tiers de Google. Vous pouvez les refuser
              en désactivant JavaScript ou en configurant votre navigateur.
            </p>
          </section>

          <section>
            <h2>7. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger
              vos données contre tout accès non autorisé, perte ou divulgation.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
