import { allBlogs } from "contentlayer/generated";
import { format } from "date-fns";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design and more",
};

export default function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-xl">some articles</h1>
      <div className="flex flex-col gap-3 mt-6">
        {allBlogs.map((b) => (
          <Link key={b._id} href={`/blog/${b.url}`}>
            <p>{b.title}</p>
            <p className="text-secondary">
              {format(new Date(b.date), "yyyy MMMM dd")}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
