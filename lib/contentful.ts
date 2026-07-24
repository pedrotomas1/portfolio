import { createClient } from "contentful";

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export function getImageUrl(url: string): string {
  return url.startsWith("//") ? `https:${url}` : url;
}
