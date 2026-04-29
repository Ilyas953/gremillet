"use client";
import { useEffect, useRef } from "react";

const photos = [
  { src: "/efef.JPG", alt: "Rénovation toiture Boulogne-Billancourt – Ent. GREMILLET" },
  { src: "/IMG_5188.PNG", alt: "Couverture tuiles Boulogne-Billancourt – chantier Ent. GREMILLET" },
  { src: "/IMG_5191.PNG", alt: "Travaux zinguerie gouttières Île-de-France – Ent. GREMILLET" },
  { src: "/eee.JPG", alt: "Réparation toiture 92 – chantier Ent. GREMILLET Boulogne" },
  { src: "/lapla.JPG", alt: "Pose tuiles couverture Hauts-de-Seine – Ent. GREMILLET" },
  { src: "/IMG_5196.PNG", alt: "Isolation thermique toiture Île-de-France – Ent. GREMILLET" },
  { src: "/heic1.png", alt: "Chantier couverture neuf Boulogne-Billancourt – Ent. GREMILLET" },
  { src: "/heic2.png", alt: "Rénovation charpente toiture 92 – Ent. GREMILLET" },
  { src: "/heic3.png", alt: "Étanchéité toiture Boulogne-Billancourt – Ent. GREMILLET" },
  { src: "/heic4.png", alt: "Peinture hydrofuge toiture Île-de-France – Ent. GREMILLET" },
  { src: "/heic5.png", alt: "Réparation fuite toiture Hauts-de-Seine – Ent. GREMILLET" },
];

export default function Galerie() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const originals = Array.from(grid.querySelectorAll<HTMLElement>(".galerie-item"));
    const count = originals.length;

    originals.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      grid.prepend(clone);
    });
    originals.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      grid.append(clone);
    });

    const getStride = () => {
      const first = grid.querySelector<HTMLElement>(".galerie-item");
      if (!first) return 416;
      const w = first.getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(grid).gap) || 16;
      return w + gap;
    };

    const setStart = () => { grid.scrollLeft = getStride() * count; };
    setStart();
    window.addEventListener("resize", setStart, { passive: true });

    const scroll = (dir: number) => {
      grid.scrollBy({ left: dir * getStride(), behavior: "smooth" });
      setTimeout(() => {
        const sw = getStride() * count;
        if (grid.scrollLeft >= sw * 2) grid.scrollLeft -= sw;
        else if (grid.scrollLeft <= 0) grid.scrollLeft += sw;
      }, 600);
    };

    const prev = document.getElementById("galerie-prev");
    const next = document.getElementById("galerie-next");
    const onPrev = () => scroll(-1);
    const onNext = () => scroll(1);
    prev?.addEventListener("click", onPrev);
    next?.addEventListener("click", onNext);

    return () => {
      window.removeEventListener("resize", setStart);
      prev?.removeEventListener("click", onPrev);
      next?.removeEventListener("click", onNext);
    };
  }, []);

  return (
    <>
      <div className="filler-galerie-bg" />
      <section className="galerie" id="galerie">
        <h2 className="section-title">Nos Réalisations – Couverture &amp; Toiture en Île-de-France</h2>
        <p className="section-intro">
          Découvrez quelques-uns de nos chantiers réalisés à Boulogne-Billancourt et en Île-de-France.
          Chaque réalisation reflète notre exigence de qualité et notre respect du domicile de nos clients.
        </p>
        <div className="galerie-container">
          <button className="galerie-nav-button galerie-nav-prev" id="galerie-prev" aria-label="Précédent">❮</button>
          <div className="galerie-grid" ref={gridRef}>
            {photos.map((p, i) => (
              <div key={i} className="galerie-item">
                <img
                  src={p.src}
                  alt={p.alt}
                  draggable={false}
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
            ))}
          </div>
          <button className="galerie-nav-button galerie-nav-next" id="galerie-next" aria-label="Suivant">❯</button>
        </div>
      </section>
    </>
  );
}
