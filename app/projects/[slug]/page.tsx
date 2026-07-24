import { CONTENTFUL_CONTENT_TYPES } from "@/lib/constants";
import { contentfulClient, getImageUrl } from "@/lib/contentful";
import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const entries = await contentfulClient.getEntries({
    content_type: CONTENTFUL_CONTENT_TYPES.PROJECT,
    select: ["fields.slug"],
  });
  return entries.items.map((item) => ({ slug: item.fields.slug as string }));
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const entries = await contentfulClient.getEntries({
    content_type: CONTENTFUL_CONTENT_TYPES.PROJECT,
    "fields.slug": slug,
    limit: 1,
  });

  if (!entries.items.length) {
    notFound();
  }

  const project = entries.items[0]?.fields as unknown as Project;

  console.log("Project:", project);

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      {project.coverImage?.fields.file && (
        <Image
          src={getImageUrl(project.coverImage.fields.file.url)}
          alt={project.coverImage.fields.title}
          className="w-full h-auto mb-4"
          width={project.coverImage.fields.file.details.image?.width || 800}
          height={400}
        />
      )}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p>{project.summary}</p>
      </div>
      <div className="flex flex-wrap gap-1 mt-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      {project.liveUrl && (
        <div className="flex flex-wrap gap-1 mt-2">
          <Link
            href={project.liveUrl}
            className="text-blue-500 hover:underline"
          >
            View Project Live
          </Link>
        </div>
      )}
      {project.repoUrl && (
        <div className="flex flex-wrap gap-1 mt-2">
          <Link
            href={project.repoUrl}
            className="text-blue-500 hover:underline"
          >
            View on GitHub
          </Link>
        </div>
      )}
    </main>
  );
}
