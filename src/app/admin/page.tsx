import { auth } from "@/auth";
import { getBlogPosts } from "@/db/blog";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await auth();

  if (session?.user!.email !== "irere2020@outlook.com" && session?.user) {
    redirect("/");
  }

  const allPosts = getBlogPosts();

  return (
    <div className="flex flex-col gap-4 m-auto">
      <h3 className="text-3xl">Hello, {session?.user.name}</h3>
      <div className="flex flex-col gap-3">
        {allPosts
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
            <Link key={post.slug} href={`/admin/${post.slug}`}>
              {post.metadata.title}
            </Link>
          ))}
      </div>
    </div>
  );
}
