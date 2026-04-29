export default function PourquoiNous() {
  return (
    <section className="pourquoi">
      <div className="pourquoi-container">
        <div className="pourquoi-content">
          <h2>Pourquoi Choisir Ent. GREMILLET, Couvreur à Boulogne-Billancourt ?</h2>
          <ul className="pourquoi-list">
            <li>
              <span className="material-symbols-outlined">bolt</span>
              <span><strong>Intervention sous 24h</strong> – Disponible 6j/7 pour toute urgence fuite ou dégât</span>
            </li>
            <li>
              <span className="material-symbols-outlined">cleaning_services</span>
              <span><strong>Chantier Propre</strong> – Respect total de votre domicile, nettoyage systématique</span>
            </li>
            <li>
              <span className="material-symbols-outlined">payments</span>
              <span><strong>Devis détaillé gratuit sous 48h</strong> – Tarifs clairs et transparents, sans surprise</span>
            </li>
            <li>
              <span className="material-symbols-outlined">verified</span>
              <span><strong>Artisan Qualifié (92)</strong> – Basé à Boulogne-Billancourt, couvert par une garantie décennale</span>
            </li>
            <li>
              <span className="material-symbols-outlined">public</span>
              <span><strong>Zone d&apos;Intervention</strong> – Tout le département 92 et l&apos;Île-de-France couverts</span>
            </li>
            <li>
              <span className="material-symbols-outlined">schedule</span>
              <span><strong>Respect des Délais</strong> – Chantier livré dans les temps convenus, systématiquement</span>
            </li>
          </ul>
        </div>
        <div className="pourquoi-image">
          <img
            src="/heic2.png"
            alt="Couvreur professionnel à Boulogne-Billancourt – Ent. GREMILLET chantier toiture"
            loading="lazy"
            width={800}
            height={800}
          />
          <img
            src="/heic4.png"
            alt="Rénovation toiture 92 – travaux zinguerie Ent. GREMILLET"
            loading="lazy"
            width={800}
            height={800}
          />
          <img
            src="/IMG_5196.PNG"
            alt="Pose de tuiles couverture Île-de-France – Ent. GREMILLET"
            loading="lazy"
            width={800}
            height={800}
          />
        </div>
      </div>
    </section>
  );
}
