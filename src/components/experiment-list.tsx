import { getBlogPosts } from "@/db/blog";
import Link from "next/link";

export const ExperimentsList = () => {
  let allExperiments = getBlogPosts().filter(
    (post) => post.metadata.type === "experiment"
  );

  return (
    <div>
      {allExperiments
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
            href={`/experiments/${post.slug}`}
            className="block cursor-pointer hover:bg-gray-300/20 md:border-b md:px-5 md:py-5 px-4 py-4 select-none"
          >
            <p className="title underline">{post.metadata.title}</p>
            <p className="text-sm text-muted-foreground">
              {post.metadata.summary}
            </p>
            <div className="flex gap-2 mt-2">
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
};
