import { CONTENTFUL_CONTENT_TYPES } from "@/lib/constants";
import { contentfulClient } from "@/lib/contentful";

export default async function Home() {
  const entries = await contentfulClient.getEntries({
    content_type: CONTENTFUL_CONTENT_TYPES.PROJECT,
  });

  console.log(JSON.stringify(entries.items, null, 2));

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className=" text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Testing Contentful Integration
          </h1>
          <p className=" text-lg leading-7 text-zinc-600 dark:text-zinc-400">
            Check the console for the fetched entries
          </p>
        </div>
      </main>
    </div>
  );
}
