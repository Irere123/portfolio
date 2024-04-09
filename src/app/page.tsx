import { ArrowIcon } from "@/components/ArrowIcon";
import { getBlogPosts } from "@/db/blog";
import { Suspense } from "react";
import ViewCounter from "./blog/view-counter";
import { getViewCount } from "@/db/queries";
import { Navbar } from "@/components/navbar";

interface BlogLinkProps {
  slug: string;
  name: string;
  summary: string;
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewCount();
  return <ViewCounter allViews={views} slug={slug} />;
}

export async function BlogLink({ slug, name, summary }: BlogLinkProps) {
  return (
    <a
      href={`/blog/${slug}`}
      className="border bg-neutral-50 dark:bg-background drak:border rounded flex items-center justify-between px-3 py-4 w-full"
    >
      <div className="flex flex-col">
        <p className="font-bold text-neutral-900 dark:text-foreground">
          {name}
        </p>
        <p className="dark:text-muted-foreground">{summary}</p>
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
  return (
    <>
      <Navbar title="About me" />
      <div className="2xl:pb-36 lg:py-16 md:pb-5 md:pt-5 mx-auto pt-4 pb-12  sm:py-12 px-4">
        <h1 className="">About me</h1>
        <p>I am chris</p>
      </div>
    </>
  );
}
