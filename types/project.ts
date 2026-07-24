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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  description: any; // rich text document — to be refined later
  coverImage?: ContentfulImageAsset;
  techStack: string[];
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  order: number;
}
