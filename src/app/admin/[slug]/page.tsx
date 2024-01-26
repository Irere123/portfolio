import { CustomMDX } from "@/components/mdx";
import { getBlogPosts } from "@/db/blog";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default function EditorPage({ params }: Props) {
  const allBlogs = getBlogPosts();
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="m-auto">
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </main>
  );
}
