import { getBlogPosts } from "@/db/blog";
import { format } from "date-fns";
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
            <p className="title underline">{post.metadata.title}</p>
            <p className="text-sm text-muted-foreground">
              <span className="mr-3">
                {format(new Date(post.metadata.publishedAt), "MMM dd, yyyy")}
              </span>
              {post.metadata.reading_time_minutes} min. read
            </p>
            <div className="flex gap-2">
              {post.metadata.tags.split(" ").map((tag) => (
                <p key={tag} className="text-xs text-muted-foreground">
                  #{tag}
                </p>
              ))}
            </div>
          </Link>
        ))}
    </div>
  );
}
