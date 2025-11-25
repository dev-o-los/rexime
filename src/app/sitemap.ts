import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.SITE_URL ?? "https://rexime.vercel.app";

  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },

    // --------------------------------------
    // OG IMAGE (Google Image Search)
    // --------------------------------------
    {
      url: `${siteUrl}/`,
      images: [`${siteUrl}/og-image.png`],
      lastModified: now,
      priority: 1.0,
      changeFrequency: "daily",
    },

    {
      url: `${siteUrl}/donation`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${siteUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    // --------------------------------------
    // YOUTUBE VIDEO (SEO Boost)
    // --------------------------------------
    {
      url: `${siteUrl}/`,
      videos: [
        {
          title: "Rexime – Modern Resume Builder Demo",
          description:
            "Create professional, ATS-friendly resumes instantly with Rexime.",
          thumbnail_loc: `${siteUrl}/og-image.png`,
          content_loc: "https://www.youtube.com/watch?v=i1Hqv9Sh7mo",
        },
      ],
      lastModified: now,
      priority: 0.9,
      changeFrequency: "weekly",
    },
  ];
}
