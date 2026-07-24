export const CONTENTFUL_CONTENT_TYPES = {
  PROJECT: "project",
} as const;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
