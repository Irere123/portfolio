import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";

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
    <div>
      {" "}
      <span dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </div>
  );
}
