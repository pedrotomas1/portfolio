import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-border">
      <div className="max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-lg font-bold text-foreground">
          Pedro Tomás
        </Link>
        <nav className="flex gap-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Link
            href="/projects"
            className="hover:text-foreground transition-colors"
          >
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}
