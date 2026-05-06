export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Ent. GREMILLET – Couvreur 92</h4>
          <p>Expert en rénovation de toiture, isolation thermique et zinguerie à Boulogne-Billancourt et en Île-de-France.</p>
          <p style={{ marginTop: "1rem" }}>Note Google : ★★★★★ 4.9/5</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>73 Rue du Château</p>
          <p>92100 Boulogne-Billancourt</p>
          <a href="tel:0623853507">06 23 85 35 07</a>
        </div>
        <div className="footer-section">
          <h4>Horaires</h4>
          <p>Lun – Sam : 08:00 – 20:30</p>
          <p>Dimanche : Fermé</p>
          <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", opacity: 0.8 }}>Urgences : disponible 6j/7</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ent. GREMILLET – Couvreur Boulogne-Billancourt (92) – Tous droits réservés</p>
        <p>
          Hébergement : <a href="https://vercel.com" target="_blank" rel="noopener">Vercel</a> |{" "}
          <a href="/mentions-legales">Mentions Légales</a> |{" "}
          <a href="/politique-confidentialite">Politique de Confidentialité</a>
        </p>
      </div>
    </footer>
  );
}
