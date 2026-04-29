export default function JsonLd({ siteUrl }: { siteUrl: string }) {
  const localBusiness = {
    "@type": "RoofingContractor",
    "@id": `${siteUrl}/#business`,
    name: "Ent. GREMILLET – Couvreur 92",
    url: siteUrl,
    telephone: "+33623853507",
    description:
      "Couvreur professionnel à Boulogne-Billancourt, spécialisé en rénovation de toiture, isolation thermique, zinguerie et recherche de fuite. Devis gratuit sous 24h.",
    image: `${siteUrl}/heic1.png`,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "73 Rue du Château",
      addressLocality: "Boulogne-Billancourt",
      postalCode: "92100",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8415,
      longitude: 2.2396,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "20:30",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Boulogne-Billancourt" },
      { "@type": "City", name: "Issy-les-Moulineaux" },
      { "@type": "City", name: "Meudon" },
      { "@type": "City", name: "Clamart" },
      { "@type": "City", name: "Vanves" },
      { "@type": "City", name: "Sèvres" },
      { "@type": "City", name: "Neuilly-sur-Seine" },
      { "@type": "City", name: "Saint-Cloud" },
      { "@type": "City", name: "Rueil-Malmaison" },
      { "@type": "AdministrativeArea", name: "Hauts-de-Seine" },
      { "@type": "AdministrativeArea", name: "Île-de-France" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "6",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Esteve" },
        datePublished: "2025-11-01",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Entreprise très soigneux, minutieux, de très bons conseils avec un travail excellent. Je suis très content du travail qu'ils ont réalisé, je recommande fortement.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Cyril" },
        datePublished: "2025-02-01",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Je remercie cette entreprise qui a intervenu chez moi suite à une fuite sur mon toit. Après avoir fait passer deux autres entreprises, nous avons trouvé cet artisan très conseiller et professionnel, et à l'écoute de nos attentes.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Florian Fourticq-Lahitolle" },
        datePublished: "2025-03-01",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "J'ai fait appel à Mr Gremillet pour des travaux de toiture sur ma maison, et je suis absolument ravi du service. Dès le premier contact, le professionnel a été réactif, clair et précis dans ses explications.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "LeaderIntelligent" },
        datePublished: "2025-09-01",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Excellent travail, rapide et soigné. Couvreur professionnel, sérieux et de bon conseil. Je recommande vivement !",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Alessio" },
        datePublished: "2024-11-01",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Un service impeccable ! Travail sérieux, professionnel et réalisé avec beaucoup de soin. En plus, les prix sont vraiment très compétitifs.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Leny Blanchard" },
        datePublished: "2025-11-01",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Je recommande cette entreprise qui a su réparer les fuites que j'avais sur ma toiture.",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de couverture",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Rénovation de Toiture",
            description: "Pose de tuiles, ardoise, traitement de charpente et zinguerie à Boulogne-Billancourt et en Île-de-France.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Isolation Thermique des Combles",
            description: "Isolation des combles perdus et aménageables pour un confort thermique durable.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Recherche de Fuite & Étanchéité",
            description: "Intervention sous 24h pour détecter et réparer toute infiltration de toiture.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Peinture Hydrofuge & Nettoyage de Toiture",
            description: "Traitement anti-mousse, peinture hydrofuge et nettoyage haute pression pour prolonger la durée de vie de votre toit.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Zinguerie & Gouttières",
            description: "Pose et remplacement de gouttières, abergements et ouvrages en zinc.",
          },
        },
      ],
    },
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Quel est le prix d'une rénovation de toiture ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le coût dépend de la surface et des matériaux choisis. Comptez entre 50 et 150 €/m² pour une rénovation partielle. Devis gratuit sous 48h sur toute l'Île-de-France.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous en urgence pour une fuite de toiture ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nous intervenons sous 24h pour toute urgence fuite de toiture à Boulogne-Billancourt et dans tout le 92. Disponible 6j/7 au 06 23 85 35 07.",
        },
      },
      {
        "@type": "Question",
        name: "Le déplacement et le devis sont-ils gratuits ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, le déplacement, le diagnostic et le devis détaillé sont entièrement gratuits et sans engagement sur toute l'Île-de-France.",
        },
      },
      {
        "@type": "Question",
        name: "Dans quelles villes intervenez-vous ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous intervenons dans tout le 92 : Boulogne-Billancourt, Issy-les-Moulineaux, Meudon, Clamart, Vanves, Sèvres, Saint-Cloud, Neuilly-sur-Seine, Rueil-Malmaison, Nanterre, et toute l'Île-de-France.",
        },
      },
      {
        "@type": "Question",
        name: "Êtes-vous couverts par une garantie décennale ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, Ent. GREMILLET est couvert par une garantie décennale et une assurance RC Pro pour tous les travaux de couverture.",
        },
      },
      {
        "@type": "Question",
        name: "Proposez-vous le nettoyage et le traitement de toiture ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nous réalisons le nettoyage haute pression, le traitement anti-mousse et la peinture hydrofuge pour prolonger la durée de vie de votre toiture.",
        },
      },
    ],
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [localBusiness, faqPage],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
