import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full flex-1">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Page not found</h1>
        <p className="text-muted-foreground mb-8">
          The project you are looking for does not exist or has been removed.
        </p>
        <Link
          href="/projects"
          className="underline text-accent hover:opacity-80"
        >
          View all projects
        </Link>
      </div>
    </main>
  );
}
