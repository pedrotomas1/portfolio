# Pedro Tomás — Portfolio

Personal portfolio built with Next.js (App Router) and Contentful, showcasing selected projects with a fully headless CMS-driven content structure.

🔗 **Live:** [portfolio-ptomas.vercel.app](https://portfolio-ptomas.vercel.app)

---

## Stack

- **Framework:** Next.js 15+ (App Router, Server Components, React Compiler)
- **Content:** Contentful (headless CMS)
- **Styling:** Tailwind CSS (dark mode)
- **Deployment:** Vercel
- **Language:** TypeScript

## Features

- Statically generated project pages (`generateStaticParams`)
- Rich text rendering for project case studies (`@contentful/rich-text-react-renderer`)
- Dynamic SEO metadata per page (`generateMetadata`)
- Auto-generated `sitemap.xml` and `robots.txt`
- Featured vs. full project listing, editorially controlled from Contentful

## Learning basis

This project started from [The Net Ninja's Next.js & Contentful course](https://www.youtube.com/watch?v=A63UxsQsEbU), a great introduction to headless CMS integration with Next.js. The course is a few years old, so a chunk of this project was about identifying what's changed since — and applying it.

### What was updated from the original course

The course used the **Pages Router** (`getStaticProps`, `getStaticPaths`), which was the standard at the time. Since then, the **App Router** has become the recommended approach for new projects. Key changes applied here:

| Then (course)                             | Now (this project)                               |
| ----------------------------------------- | ------------------------------------------------ |
| Pages Router (`pages/`)                   | App Router (`app/`)                              |
| `getStaticProps` / `getStaticPaths`       | `generateStaticParams` + async Server Components |
| `next/head` for SEO                       | `generateMetadata` API                           |
| `domains` config for images               | `remotePatterns` config                          |
| No official cache guidance for App Router | Deliberate cache strategy (see below)            |
| Styled JSX                                | Tailwind CSS                                     |

The Contentful modeling concepts (content types, rich text, asset handling) remained fully valid — headless CMS fundamentals don't really age.

## Content model (Contentful)

**Project**

- `title`, `slug`, `summary`, `description` (rich text)
- `coverImage` (required asset)
- `techStack` (list), `role`
- `liveUrl`, `repoUrl`
- `featured` (boolean), `order` (number)

## Cache & revalidation strategy

Content is served statically at build time. Content updates in Contentful require a manual redeploy on Vercel to go live — a deliberate choice to avoid noisy, unintended rebuilds while both code and content are actively evolving. A Contentful webhook → Vercel Deploy Hook would be the natural next step to automate this once the project stabilizes.

## Running locally

```bash
git clone https://github.com/pedrotomas1/portfolio.git
cd portfolio
npm install
```

Create a `.env.local` file:

```
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

```bash
npm run dev
```

## Roadmap / not yet included

- About me section
- On-demand revalidation via webhook
- Project gallery (multiple images per case study)
