import ProjectCard from "@/components/ProjectCard";
import { CONTENTFUL_CONTENT_TYPES } from "@/lib/constants";
import { contentfulClient } from "@/lib/contentful";
import { Project } from "@/types/project";

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
      <h1 className="text-3xl font-bold mb-8">Pedro Tomás</h1>
      <p className="text-gray-600 mb-12">Projetos em destaque</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
