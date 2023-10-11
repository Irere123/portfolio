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
      <div className="flex flex-col gap-3 mt-6">
        {allBlogs
          .sort((a, b) => {
            if (new Date(a.date) > new Date(b.date)) {
              return -1;
            }
            return 1;
          })
          .map((b) => (
            <Link key={b._id} href={`/blog/${b.slug}`}>
              <p className="text-neutral-900 font-bold">{b.title}</p>
              <p className="text-neutral-600">
                {format(new Date(b.date), "MMMM d, yyyy")}
              </p>
            </Link>
          ))}
      </div>
    </section>
  );
}
