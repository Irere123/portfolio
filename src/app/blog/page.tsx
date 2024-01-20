import { format } from "date-fns";
import { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/db/blog";
import { DefaltLayout } from "@/components/default-layout";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design and more",
};

export default function BlogPage() {
  let allBlogs = getBlogPosts().filter(
    (post) => post.metadata.published === "true",
  );

  return (
    <DefaltLayout>
      <section>
        <div className="flex flex-col gap-3 mt-6">
          {allBlogs
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <p className="text-neutral-900 font-bold dark:text-foreground">
                  {post.metadata.title}
                </p>
                <p className="text-neutral-600 dark:text-muted-foreground">
                  {format(new Date(post.metadata.publishedAt), "MMMM d, yyyy")}
                </p>
              </Link>
            ))}
        </div>
      </section>
    </DefaltLayout>
  );
}
