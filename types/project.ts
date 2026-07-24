import { Document } from "@contentful/rich-text-types";

export interface ContentfulImageAsset {
  fields: {
    title: string;
    file: {
      url: string;
      details: {
        image?: {
          width: number;
          height: number;
        };
      };
    };
  };
}

export interface Project {
  title: string;
  slug: string;
  summary: string;
  description: Document;
  coverImage?: ContentfulImageAsset;
  techStack: string[];
  role: string;
  liveUrl?: string;
  repoUrl: string;
  featured: boolean;
  order: number;
}
