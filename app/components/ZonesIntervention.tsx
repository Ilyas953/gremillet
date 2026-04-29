const zones = {
  principale: ["Boulogne-Billancourt"],
  hautsDeSeineOuest: [
    "Issy-les-Moulineaux",
    "Sèvres",
    "Meudon",
    "Clamart",
    "Vanves",
    "Malakoff",
    "Montrouge",
    "Châtillon",
    "Bagneux",
    "Fontenay-aux-Roses",
    "Antony",
    "Sceaux",
    "Le Plessis-Robinson",
  ],
  hautsDeSeineNord: [
    "Neuilly-sur-Seine",
    "Levallois-Perret",
    "Clichy",
    "Saint-Cloud",
    "Suresnes",
    "Puteaux",
    "Courbevoie",
    "Nanterre",
    "Rueil-Malmaison",
    "Asnières-sur-Seine",
    "Colombes",
    "La Garenne-Colombes",
  ],
  autresSecteurs: [
    "Paris 15e", "Paris 16e", "Paris 17e",
    "Versailles (78)",
    "Vélizy-Villacoublay (78)",
    "Viroflay (78)",
    "Chaville (92)",
    "Châtenay-Malabry (92)",
  ],
};

export default function ZonesIntervention() {
  return (
    <section className="zones" id="zones">
      <h2 className="section-title">Zones d&apos;Intervention – Couvreur 92 &amp; Île-de-France</h2>
      <p className="section-intro">
        Ent. GREMILLET intervient dans tout le département des Hauts-de-Seine (92) et les communes
        limitrophes. Déplacement gratuit dans toute l&apos;Île-de-France sur devis.
      </p>

      <div className="zones-groups">
        <div className="zones-group">
          <h3 className="zones-group-title">Ville principale</h3>
          <div className="zones-grid">
            {zones.principale.map((v) => (
              <span key={v} className="zone-tag primary">{v}</span>
            ))}
          </div>
        </div>

        <div className="zones-group">
          <h3 className="zones-group-title">Hauts-de-Seine Sud (92)</h3>
          <div className="zones-grid">
            {zones.hautsDeSeineOuest.map((v) => (
              <span key={v} className="zone-tag">{v}</span>
            ))}
          </div>
        </div>

        <div className="zones-group">
          <h3 className="zones-group-title">Hauts-de-Seine Nord (92)</h3>
          <div className="zones-grid">
            {zones.hautsDeSeineNord.map((v) => (
              <span key={v} className="zone-tag">{v}</span>
            ))}
          </div>
        </div>

        <div className="zones-group">
          <h3 className="zones-group-title">Autres secteurs</h3>
          <div className="zones-grid">
            {zones.autresSecteurs.map((v) => (
              <span key={v} className="zone-tag secondary">{v}</span>
            ))}
          </div>
        </div>
      </div>

      <p className="zones-footer">
        Vous ne trouvez pas votre commune ? <a href="#contact">Contactez-nous</a> – nous intervenons
        sur tout le bassin parisien sur devis.
      </p>
    </section>
  );
}
