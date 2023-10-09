import { Mdx } from "@/components/mdx";
import { allBlogs } from "contentlayer/generated";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";

export default async function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = allBlogs.find((post) => post.url === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="font-bold text-2xl tracking-tighter max-w-[650px]">
          <Balancer>{post.title}</Balancer>
        </h1>
        <p className="text-secondary">
          {format(new Date(post.date), "yyyy MMMM dd")}
        </p>
      </div>
      <Mdx code={post.body.code} />
    </div>
  );
}
