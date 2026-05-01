"use client";
import { useState, useEffect } from "react";

export default function Contact() {
  const [showAutre, setShowAutre] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const phone = document.getElementById("phone") as HTMLInputElement | null;
    if (!phone) return;
    const handler = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const digits = target.value.replace(/\D/g, "");
      target.value = digits.match(/.{1,2}/g)?.join(" ") ?? "";
    };
    phone.addEventListener("input", handler);
    return () => phone.removeEventListener("input", handler);
  }, [sent]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const form = e.currentTarget;
    const data = {
      firstname: (form.elements.namedItem("firstname") as HTMLInputElement).value,
      lastname: (form.elements.namedItem("lastname") as HTMLInputElement).value,
      countryCode: (form.elements.namedItem("country-code") as HTMLSelectElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      travaux: (form.elements.namedItem("travaux") as HTMLSelectElement).value,
      autreDetail: (form.elements.namedItem("autre-detail") as HTMLTextAreaElement | null)?.value ?? "",
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSent(true);
      else setError(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Devis Gratuit – Couvreur à Boulogne-Billancourt</h2>
      <p className="section-intro">
        Réponse garantie sous 24h. Déplacement et diagnostic gratuits sur tout le département 92 et l&apos;Île-de-France.
      </p>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Nos Coordonnées</h3>
          <address style={{ fontStyle: "normal" }}>
            <div className="contact-item">
              <span className="material-symbols-outlined">location_on</span>
              <div>
                <strong>Adresse</strong><br />
                73 Rue du Château<br />
                92100 Boulogne-Billancourt
              </div>
            </div>
            <div className="contact-item">
              <span className="material-symbols-outlined">call</span>
              <div>
                <strong>Téléphone</strong><br />
                <a href="tel:0623853507" style={{ color: "var(--rouge-accent)", textDecoration: "none" }}>06 23 85 35 07</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="material-symbols-outlined">schedule</span>
              <div>
                <strong>Horaires</strong><br />
                Lun-Sam : 8h00–20h30<br />
                Dimanche : Fermé
              </div>
            </div>
          </address>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.836109315694!2d2.2396!3d48.8415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67adc9a42f883%3A0x6b4c10a30149021c!2s73+Rue+du+Ch%C3%A2teau%2C+92100+Boulogne-Billancourt!5e0!3m2!1sfr!2sfr!4v1647870000000!5m2!1sfr!2sfr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Ent. GREMILLET – Couvreur Boulogne-Billancourt"
            />
          </div>
        </div>

        <div className="contact-form">
          <h3>Demande de Devis Gratuit</h3>
          {sent ? (
            <div className="form-message" style={{ background: "#d4edda", color: "#155724" }}>
              ✅ Demande envoyée ! Nous vous recontacterons dans les plus brefs délais.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group half-width">
                  <label htmlFor="firstname">Prénom *</label>
                  <input type="text" id="firstname" name="firstname" required placeholder="Jean" autoComplete="given-name" />
                </div>
                <div className="form-group half-width">
                  <label htmlFor="lastname">Nom *</label>
                  <input type="text" id="lastname" name="lastname" required placeholder="Dupont" autoComplete="family-name" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Téléphone *</label>
                <div className="phone-input-group">
                  <select id="country-code" name="country-code">
                    <option value="+33">France (+33)</option>
                    <option value="+32">Belgique (+32)</option>
                    <option value="+41">Suisse (+41)</option>
                    <option value="+377">Monaco (+377)</option>
                  </select>
                  <input type="tel" id="phone" name="phone" required placeholder="06 12 34 56 78" autoComplete="tel-national" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="jean.dupont@exemple.com" autoComplete="email" />
              </div>
              <div className="form-group">
                <label htmlFor="travaux">Type de travaux *</label>
                <select
                  id="travaux"
                  name="travaux"
                  required
                  onChange={(e) => setShowAutre(e.target.value === "Autre")}
                >
                  <option value="">Sélectionnez...</option>
                  <option value="Rénovation Toiture">Rénovation Toiture</option>
                  <option value="Isolation Thermique">Isolation Thermique</option>
                  <option value="Recherche de Fuite">Recherche de Fuite / Urgence</option>
                  <option value="Zinguerie Gouttières">Zinguerie / Gouttières</option>
                  <option value="Peinture Nettoyage">Peinture & Nettoyage de Toiture</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              {showAutre && (
                <div className="form-group">
                  <label htmlFor="autre-detail">Précisez vos travaux *</label>
                  <textarea id="autre-detail" name="autre-detail" placeholder="Décrivez vos travaux en détail..." required />
                </div>
              )}
              <div className="form-group">
                <label htmlFor="message">Votre demande *</label>
                <textarea id="message" name="message" required placeholder="Décrivez votre projet : type de travaux, surface approximative, urgence..." />
              </div>
              {error && (
                <div className="form-message" style={{ background: "#f8d7da", color: "#721c24", marginBottom: "1rem" }}>
                  ❌ Une erreur est survenue. Appelez-nous directement au <a href="tel:0623853507">06 23 85 35 07</a>.
                </div>
              )}
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Envoi en cours..." : "Envoyer ma Demande de Devis"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
