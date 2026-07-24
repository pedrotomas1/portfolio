import ProjectCard from "@/components/ProjectCard";
import { CONTENTFUL_CONTENT_TYPES, SITE_URL } from "@/lib/constants";
import { contentfulClient } from "@/lib/contentful";
import { Project } from "@/types/project";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pedro Tomás — Portfolio",
  description:
    "Full-stack developer portfolio showcasing projects built with Next.js, Contentful, and modern web technologies.",
  openGraph: {
    title: "Pedro Tomás — Portfolio",
    description:
      "Full-stack developer portfolio showcasing projects built with Next.js, Contentful, and modern web technologies.",
    url: SITE_URL,
    siteName: "Pedro Tomás Portfolio",
    type: "website",
  },
};

export default async function Home() {
  const entries = await contentfulClient.getEntries({
    content_type: CONTENTFUL_CONTENT_TYPES.PROJECT,
    "fields.featured": true,
    order: ["fields.order"],
  });

  const projects = entries.items.map(
    (item) => item.fields as unknown as Project,
  );

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <p className="text-muted-foreground mb-12">Featured Projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
