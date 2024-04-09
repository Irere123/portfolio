import { getBlogPosts } from "@/db/blog";
import Link from "next/link";

export function BlogList() {
  let allBlogs = getBlogPosts().filter(
    (post) => post.metadata.published === "true"
  );

  return (
    <div className="sm:w-128 md:w-auto w-full mx-auto">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block cursor-pointer hover:bg-gray-300/20 md:border-b md:px-5 md:py-5 px-4 py-4 select-none"
          >
            <p className="title">{post.metadata.title}</p>
          </Link>
        ))}
    </div>
  );
}
