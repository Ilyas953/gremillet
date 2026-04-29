import type { MetadataRoute } from "next";

const SITE_URL = "https://www.couvreur92gremillet.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${SITE_URL}/heic1.png`,
        `${SITE_URL}/heic2.png`,
        `${SITE_URL}/heic3.png`,
        `${SITE_URL}/heic4.png`,
        `${SITE_URL}/heic5.png`,
        `${SITE_URL}/efef.JPG`,
        `${SITE_URL}/IMG_5188.PNG`,
        `${SITE_URL}/IMG_5191.PNG`,
        `${SITE_URL}/IMG_5196.PNG`,
        `${SITE_URL}/eee.JPG`,
        `${SITE_URL}/lapla.JPG`,
      ],
    },
  ];
}
