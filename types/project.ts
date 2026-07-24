export interface Project {
  title: string;
  slug: string;
  summary: string;
  description: string; // rich text document — to be refined later
  coverImage?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  techStack: string;
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  order: number;
}
