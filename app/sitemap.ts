import type { MetadataRoute } from "next";

const SITE_URL = "https://gremillet-couverture.fr";

const cityPages = [
  "couvreur-neuilly-sur-seine",
  "couvreur-rueil-malmaison",
  "couvreur-issy-les-moulineaux",
  "couvreur-nanterre",
  "couvreur-suresnes",
  "couvreur-levallois-perret",
  "couvreur-meudon",
  "couvreur-clamart",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...cityPages.map((slug) => ({
      url: `${SITE_URL}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
