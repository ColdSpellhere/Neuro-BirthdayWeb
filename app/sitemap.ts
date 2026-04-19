import type { MetadataRoute } from "next"
import { toAbsoluteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: toAbsoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: toAbsoluteUrl("/participate"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: toAbsoluteUrl("/schedule"),
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: toAbsoluteUrl("/news"),
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ]
}
