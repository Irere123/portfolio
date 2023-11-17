import { Mdx } from "@/components/mdx";
import { allBlogs } from "contentlayer/generated";
import { format } from "date-fns";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";
import { SignIn } from "./buttons";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const { title, slug, image, summary: description, date } = post;

  const ogImage = image
    ? `https://irere-blog.vercel.app${image}`
    : `https://irere-blog.vercel.app/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: date,
      url: `https://irere-blog.vercel.app/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "Irere Emmy",
      images: [ogImage],
    },
  };
}

function formatDate(date: string) {
  const currentDate = new Date();
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `${fullDate} (${formattedDate})`;
}

export default async function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="font-bold text-2xl tracking-tighter max-w-[650px]">
          <Balancer>{post.title}</Balancer>
        </h1>
        <p className="text-secondary">{formatDate(post.date)}</p>
      </div>
      <Mdx code={post.body.code} />
    </div>
  );
}
