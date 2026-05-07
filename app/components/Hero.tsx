"use client";
import { useEffect } from "react";
import Image from "next/image";

const heroBgs = [
  { src: "/heic1.png", alt: "Rénovation toiture Boulogne-Billancourt – Ent. GREMILLET couvreur 92" },
  { src: "/efef.JPG", alt: "Chantier couverture tuiles Hauts-de-Seine – Ent. GREMILLET" },
  { src: "/IMG_5188.PNG", alt: "Pose tuiles ardoise Île-de-France – artisan couvreur Ent. GREMILLET" },
  { src: "/lapla.JPG", alt: "Travaux toiture rénovation 92 – couvreur Boulogne-Billancourt" },
  { src: "/heic5.png", alt: "Réparation fuite toiture Hauts-de-Seine – Ent. GREMILLET" },
];

export default function Hero() {
  useEffect(() => {
    const bgs = document.querySelectorAll<HTMLElement>(".hero-bg");
    if (!bgs.length) return;
    let current = 0;
    const interval = setInterval(() => {
      bgs[current].classList.remove("active");
      current = (current + 1) % bgs.length;
      bgs[current].classList.add("active");
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-wrapper">
      <section className="hero">
        {heroBgs.map((bg, i) => (
          <div key={i} className={`hero-bg${i === 0 ? " active" : ""}`}>
            <Image
              src={bg.src}
              alt={bg.alt}
              fill
              sizes="100vw"
              priority={i === 0}
              loading={i === 0 ? undefined : "lazy"}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        ))}
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-tagline">
            Couverture • Charpente • Zinguerie • Peinture de Toiture
          </p>
          <h1>Expert Couvreur 92 : Toiture, Zinguerie &amp; Isolation en Île-de-France</h1>
          <p className="hero-subtitle">
            Spécialiste en <strong>rénovation</strong> et <strong>construction neuve </strong> en Île-de-France.
            Intervention d&apos;urgence pour recherche de fuite, pose de fenêtres de toit, nettoyage et traitement de toiture.
          </p>
          <a href="#contact" className="hero-btn">DEVIS GRATUIT SOUS 24H – SANS ENGAGEMENT</a>
          <p className="hero-free">
            Déplacement, devis et diagnostic gratuits
          </p>
        </div>
      </section>
    </div>
  );
}
