import { format } from "date-fns";
import { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/db/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design and more",
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
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
              <p className="text-neutral-900 font-bold">
                {post.metadata.title}
              </p>
              <p className="text-neutral-600">
                {format(new Date(post.metadata.publishedAt), "MMMM d, yyyy")}
              </p>
            </Link>
          ))}
      </div>
    </section>
  );
}
