import Image from "next/image";

export interface CityService {
  icon: string;
  title: string;
  desc: string;
}

export interface CityBlock {
  title: string;
  paragraphs: string[];
  list?: string[];
}

export interface CityFAQ {
  q: string;
  a: string;
}

export interface CityNearby {
  label: string;
  href?: string;
}

export interface CityPageData {
  city: string;
  postalCode: string;
  heroImage: string;
  tagline: string;
  intro: string;
  services: CityService[];
  blocks: CityBlock[];
  tarif: string;
  faqs: CityFAQ[];
  nearby: CityNearby[];
}

export default function CityPage({ data }: { data: CityPageData }) {
  const { city, postalCode, heroImage, tagline, intro, services, blocks, tarif, faqs, nearby } = data;

  return (
    <>
      <div className="city-hero">
        <div className="city-hero-bg">
          <Image
            src={heroImage}
            alt={`Couvreur ${city} – Ent. GREMILLET`}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="city-hero-overlay" />
        <div className="city-hero-content">
          <p className="city-breadcrumb">
            <a href="/">Accueil</a> › Couvreur {city}
          </p>
          <h1>Couvreur à {city} ({postalCode})</h1>
          <p className="city-hero-sub">{tagline}</p>
          <a href="/#contact" className="city-hero-cta">Devis gratuit – Réponse sous 24h</a>
        </div>
      </div>

      <div className="city-phone-bar">
        <span>Urgence toiture à {city} ?</span>
        <a href="tel:0623853507">☎ 06 23 85 35 07</a>
        <span>Disponible 6j/7 · Déplacement gratuit</span>
      </div>

      <section className="city-section" style={{ background: "#fff" }}>
        <div className="city-section-inner">
          <p className="city-intro">{intro}</p>
          <div className="city-services-grid">
            {services.map((s, i) => (
              <div key={i} className="city-service-card">
                <span className="material-symbols-outlined">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {blocks.map((block, i) => (
        <section
          key={i}
          className="city-section"
          style={{ background: i % 2 === 0 ? "var(--gris-clair)" : "#fff" }}
        >
          <div className="city-section-inner">
            <h2>{block.title}</h2>
            {block.paragraphs.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
            {block.list && (
              <ul className="city-check-list">
                {block.list.map((item, j) => (
                  <li key={j}>
                    <span className="material-symbols-outlined">check_circle</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      <div className="city-cta-banner">
        <h2>Devis Gratuit à {city}</h2>
        <p>{tarif}</p>
        <a href="/#contact" className="city-cta-btn">Demander mon devis gratuit</a>
      </div>

      <section className="city-section faq" style={{ background: "var(--gris-clair)" }}>
        <div className="city-section-inner">
          <h2>Questions Fréquentes – Couvreur {city}</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-question">{faq.q}</summary>
                <p className="faq-answer">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="city-section" style={{ background: "#fff", paddingTop: "40px", paddingBottom: "50px" }}>
        <div className="city-section-inner">
          <h2>Nous intervenons aussi à proximité de {city}</h2>
          <div className="city-nearby">
            {nearby.map((n, i) =>
              n.href
                ? <a key={i} href={n.href}>{n.label}</a>
                : <span key={i}>{n.label}</span>
            )}
          </div>
          <a href="/" className="city-back-link">← Retour – Couvreur Boulogne-Billancourt (92)</a>
        </div>
      </section>
    </>
  );
}
