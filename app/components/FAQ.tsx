const faqs = [
  {
    question: "Quel est le prix d'une rénovation de toiture ?",
    answer:
      "Le coût d'une rénovation de toiture dépend de la surface, des matériaux choisis (tuiles, ardoise, zinc) et de l'état de la charpente. À titre indicatif, comptez entre 50 et 150 €/m² pour une rénovation partielle. Nous offrons un devis gratuit, détaillé et sans engagement, valable pour tout le département 92 et l'Île-de-France.",
  },
  {
    question: "Intervenez-vous en urgence pour une fuite de toiture ?",
    answer:
      "Oui, nous intervenons sous 24h pour toute urgence fuite de toiture à Boulogne-Billancourt et dans tout le 92. Appelez directement le 06 23 85 35 07 – nous sommes disponibles 6j/7 pour limiter les dégâts des eaux.",
  },
  {
    question: "Le déplacement et le devis sont-ils vraiment gratuits ?",
    answer:
      "Absolument. Le déplacement, le diagnostic complet et le devis détaillé sont entièrement gratuits et sans engagement. Nous nous déplaçons sur toute l'Île-de-France. Vous recevez votre devis sous 48h.",
  },
  {
    question: "Dans quelles villes intervenez-vous ?",
    answer:
      "Nous intervenons principalement dans les Hauts-de-Seine (92) : Boulogne-Billancourt, Issy-les-Moulineaux, Meudon, Clamart, Vanves, Sèvres, Saint-Cloud, Neuilly-sur-Seine, Rueil-Malmaison, Nanterre, Suresnes, Levallois-Perret, Courbevoie, et dans toute l'Île-de-France sur devis.",
  },
  {
    question: "Êtes-vous couverts par une garantie décennale ?",
    answer:
      "Oui. Ent. GREMILLET est couvert par une assurance responsabilité civile professionnelle et une garantie décennale pour tous les travaux de couverture. Vos travaux sont donc protégés pendant 10 ans après réception du chantier.",
  },
  {
    question: "Combien de temps durent les travaux de toiture ?",
    answer:
      "La durée dépend de l'ampleur du chantier. Une réparation ponctuelle (fuite, tuile cassée) peut être réalisée en quelques heures. Une rénovation complète prend généralement 2 à 5 jours. Nous respectons systématiquement les délais convenus et vous tenons informé à chaque étape.",
  },
  {
    question: "Proposez-vous le nettoyage et le traitement de toiture ?",
    answer:
      "Oui. Nous réalisons le nettoyage haute pression, le traitement anti-mousse et imperméabilisant, ainsi que l'application de peinture hydrofuge pour prolonger la durée de vie de votre toiture. Un traitement préventif tous les 5 à 10 ans est recommandé.",
  },
  {
    question: "Faites-vous l'isolation thermique des combles ?",
    answer:
      "Oui, nous réalisons l'isolation thermique des combles perdus et aménageables. Une bonne isolation peut réduire vos factures de chauffage de 20 à 30 %. Nous conseillons les matériaux les mieux adaptés à votre logement et votre budget.",
  },
];

export default function FAQ() {
  return (
    <section className="faq" id="faq">
      <h2 className="section-title">Questions Fréquentes – Couvreur Boulogne-Billancourt</h2>
      <p className="section-intro">
        Toutes les réponses à vos questions sur nos travaux de toiture à Boulogne-Billancourt et en Île-de-France.
      </p>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <details key={i} className="faq-item">
            <summary className="faq-question">{faq.question}</summary>
            <p className="faq-answer">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
