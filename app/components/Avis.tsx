export default function Avis() {
  return (
    <section className="avis animate-on-scroll" id="avis">
      <h2 className="section-title">Avis Clients – Couvreur 92 Noté 4.9/5 sur Google</h2>
      <p className="section-intro">
        Découvrez les retours de nos clients satisfaits à Boulogne-Billancourt et en Île-de-France.
        Plus de 50 avis vérifiés sur Google attestent de notre sérieux et de la qualité de nos travaux.
      </p>

      <div className="google-badge">
        <svg className="google-logo" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
          <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
          <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/>
          <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/>
        </svg>
        <span className="badge-stars">★★★★★</span>
        {/* Remplacer href par l'URL de votre fiche Google Business Profile */}
        <a
          className="badge-text"
          href="https://maps.app.goo.gl/SAwiKyoZ826ShxEX8"
          target="_blank"
          rel="noopener noreferrer"
        >
          4.9/5 sur Google
        </a>
      </div>

      <div className="avis-grid">
        {[
          { nom: "Esteve", date: "novembre 2025", texte: "Entreprise très soigneux, minutieux, de très bons conseils avec un travail excellent. Je suis très content du travail qu'ils ont réalisé, je recommande fortement." },
          { nom: "Cyril", date: "février 2025", texte: "Je remercie cette entreprise qui a intervenu chez moi suite à une fuite sur mon toit. Après avoir fait passer deux autres entreprises, nous avons trouvé cet artisan très conseiller et professionnel, et à l'écoute de nos attentes." },
          { nom: "Florian Fourticq-Lahitolle", date: "mars 2025", texte: "J'ai fait appel à Mr Gremillet pour des travaux de toiture sur ma maison, et je suis absolument ravi du service. Dès le premier contact, le professionnel a été réactif, clair et précis dans ses explications." },
          { nom: "LeaderIntelligent", date: "septembre 2025", texte: "Excellent travail, rapide et soigné. Couvreur professionnel, sérieux et de bon conseil. Je recommande vivement !" },
          { nom: "Alessio", date: "novembre 2024", texte: "Un service impeccable ! Travail sérieux, professionnel et réalisé avec beaucoup de soin. En plus, les prix sont vraiment très compétitifs. Une prestation agréable et à la hauteur de mes attentes." },
          { nom: "Leny Blanchard", date: "novembre 2025", texte: "Je recommande cette entreprise qui a su réparer les fuites que j'avais sur ma toiture" },
        ].map((a, i) => (
          <div key={i} className="avis-card">
            <div className="avis-rating">
              <span className="stars">★★★★★</span>
              <span className="score">5/5</span>
            </div>
            <p className="avis-text">&quot;{a.texte}&quot;</p>
            <p className="avis-author">— {a.nom}</p>
            <p className="avis-date">Travaux réalisés en {a.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
