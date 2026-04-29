export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* Remplacer par <img src="/logo.png" alt="Couvreur 92 Ent.GREMILLET" /> quand le logo est prêt */}
        <span className="logo-text">
          <span className="logo-ent">Ent.</span>
          <span className="logo-name">GREMILLET</span>
          <span className="logo-sub">Couvreur 92</span>
        </span>
      </div>
      <div className="nav-links">
        <a href="#services">Services</a>
        <a href="#avis">Avis</a>
        <a href="#galerie">Réalisations</a>
        <a href="#contact" className="nav-cta">Devis Gratuit</a>
      </div>
    </nav>
  );
}
