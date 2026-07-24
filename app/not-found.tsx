import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-24 text-center">
      <h1 className="text-3xl font-bold mb-4">Page not found</h1>
      <p className="text-gray-600 mb-8">
        The project you are looking for does not exist or has been removed.
      </p>
      <Link href="/projects" className="underline">
        View all projects
      </Link>
    </main>
  );
}
