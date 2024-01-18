import { ArrowIcon } from "@/components/ArrowIcon";
import { getBlogPosts } from "@/db/blog";
import { Suspense } from "react";
import ViewCounter from "./blog/view-counter";
import { getBlogViews } from "@/db/queries";

interface BlogLinkProps {
  slug: string;
  name: string;
  summary: string;
}

async function Views({ slug }: { slug: string }) {
  let views = await getBlogViews();
  return <ViewCounter allViews={views as any} slug={slug} />;
}

async function BlogLink({ slug, name, summary }: BlogLinkProps) {
  return (
    <a
      href={`/blog/${slug}`}
      className="border border-neutral-200 bg-neutral-50 rounded flex items-center justify-between px-3 py-4 w-full"
    >
      <div className="flex flex-col">
        <p className="font-bold text-neutral-900 ">{name}</p>
        <p>{summary}</p>
        <Suspense fallback={<p className="h-6" />}>
          <Views slug={slug} />
        </Suspense>
      </div>
      <div className="text-neutral-700 ">
        <ArrowIcon />
      </div>
    </a>
  );
}

export default function Home() {
  const allBlogs = getBlogPosts();

  return (
    <section>
      <div className="space-y-2 mt-3">
        <p className="text-xl">hey, I am irere 🖐!</p>
        <p>
          I try to keep things simple. You will find writing about technologies
          I am interested in at the time, or how I am learning and growing in my
          career, sharing knowledge along the way.
        </p>
        <div className="flex flex-col gap-4 pt-7">
          {allBlogs.slice(0, 2).map((post) => (
            <Suspense key={post.slug}>
              <BlogLink
                name={post.metadata.title}
                slug={post.slug}
                summary={post.metadata.summary}
              />
            </Suspense>
          ))}
        </div>
      </div>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/irere_emmanuel"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">follow me</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:irere2050@gmail.com"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">talk to me</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
