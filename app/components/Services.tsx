"use client";
import { useEffect } from "react";

const servicesBgs = ["/heic3.png", "/eee.JPG", "/IMG_5191.PNG", "/heic4.png", "/lapla.JPG"];

export default function Services() {
  useEffect(() => {
    const bgs = document.querySelectorAll<HTMLElement>(".services-bg");
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
    <section className="services" id="services">
      {servicesBgs.map((src, i) => (
        <div
          key={i}
          className={`services-bg${i === 0 ? " active" : ""}`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}
      <div className="services-overlay" />
      <div className="services-content">
        <h2 className="section-title">Nos Services de Couverture à Boulogne-Billancourt</h2>
        <p className="section-intro">
          Artisan couvreur qualifié, Ent. GREMILLET intervient pour tous vos travaux de toiture
          en Île-de-France : rénovation, urgences, isolation et traitement. Devis gratuit sous 24h.
        </p>
        <div className="services-grid">
          <div className="service-card">
            <span className="material-symbols-outlined service-icon">roofing</span>
            <h3>Couverture, Charpente &amp; Zinguerie</h3>
            <p>Rénovation complète ou construction neuve en Île-de-France. Pose de tuiles, ardoise, traitement de charpente et zinguerie (gouttières, abergements, noues). Matériaux de qualité, travaux garantis décennalement.</p>
          </div>
          <div className="service-card">
            <span className="material-symbols-outlined service-icon">format_paint</span>
            <h3>Peinture Hydrofuge, Isolation &amp; Nettoyage</h3>
            <p>Protection et rénovation de votre toiture grâce à nos peintures hydrofuges anti-mousse. Isolation thermique des combles et nettoyage haute pression inclus pour un résultat professionnel et durable.</p>
          </div>
          <div className="service-card">
            <span className="material-symbols-outlined service-icon">water_drop</span>
            <h3>Recherche de Fuite &amp; Intervention d&apos;Urgence</h3>
            <p>Intervention sous 24h pour détecter et stopper toute infiltration. Diagnostic précis, réparation d&apos;étanchéité et suivi garanti pour protéger votre bien des dégâts des eaux. Disponible 6j/7.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
