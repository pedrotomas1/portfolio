import RichTextRenderer from "@/components/RichTextRenderer";
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

  return (
    <main className="w-full flex-1">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {project.coverImage?.fields.file && (
          <div
            style={{ width: "100%", position: "relative" }}
            className="h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden border border-border mb-8"
          >
            <Image
              src={getImageUrl(project.coverImage.fields.file.url)}
              alt={project.coverImage.fields.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-foreground">
            {project.title}
          </h1>
          <p className="text-muted-foreground">{project.summary}</p>
        </div>

        <div className="flex flex-wrap gap-1 mt-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-background border border-border text-muted-foreground px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-6">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              className="text-sm text-accent hover:opacity-80 underline underline-offset-2"
            >
              View Project Live
            </Link>
          )}
          {project.repoUrl && (
            <Link
              href={project.repoUrl}
              className="text-sm text-accent hover:opacity-80 underline underline-offset-2"
            >
              View on GitHub
            </Link>
          )}
        </div>

        <div className="mt-10 pt-10 border-t border-border">
          <RichTextRenderer content={project.description} />
        </div>
      </div>
    </main>
  );
}
