import { CONTENTFUL_CONTENT_TYPES, SITE_URL } from "@/lib/constants";
import { contentfulClient } from "@/lib/contentful";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries = await contentfulClient.getEntries({
    content_type: CONTENTFUL_CONTENT_TYPES.PROJECT,
    select: ["fields.slug"],
  });

  const projectUrls = entries.items.map((item) => ({
    url: `${SITE_URL}/projects/${item.fields.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: SITE_URL, lastModified: new Date() },
    { url: `${SITE_URL}/projects`, lastModified: new Date() },
    ...projectUrls,
  ];
}
