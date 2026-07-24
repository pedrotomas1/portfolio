import { getImageUrl } from "@/lib/contentful";
import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  const image = project.coverImage?.fields.file;
  const imageDimensions = image?.details.image;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block rounded-lg border border-border bg-muted overflow-hidden hover:border-accent/50 transition-colors"
    >
      {image && imageDimensions && (
        <Image
          src={getImageUrl(image.url)}
          alt={project.coverImage?.fields.title || project.title}
          width={imageDimensions.width}
          height={imageDimensions.height}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{project.summary}</p>
        <div className="flex flex-wrap gap-1 mt-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-background border border-border text-muted-foreground px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
