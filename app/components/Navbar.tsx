import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="logo" aria-label="Accueil Ent. GREMILLET">
        <Image src="/logo.webp" alt="Couvreur 92 Ent.GREMILLET" width={400} height={100} priority quality={100} style={{ width: "auto", height: "70px" }} />
      </a>

      <div className="nav-links">
        <a href="#services">Services</a>
        <a href="#avis">Avis</a>
        <a href="#galerie">Réalisations</a>
        <a href="#contact" className="nav-cta">Devis Gratuit</a>
      </div>
    </nav>
  );
}
