import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bookwithhunter.com",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
