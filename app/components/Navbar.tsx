"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="/" className="logo" aria-label="Accueil Ent. GREMILLET">
        <Image src="/logo.webp" alt="Couvreur 92 Ent.GREMILLET" width={400} height={100} priority quality={100} style={{ width: "auto", height: "100px" }} />
      </a>

      <button
        className={`hamburger${open ? " open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Ouvrir le menu"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-links${open ? " open" : ""}`} onClick={() => setOpen(false)}>
        <a href="#services">Services</a>
        <a href="#avis">Avis</a>
        <a href="#galerie">Réalisations</a>
        <a href="#contact" className="nav-cta">Devis Gratuit</a>
      </div>
    </nav>
  );
}
