import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getBlogPosts } from "@/db/blog";
import { CustomMDX } from "@/components/mdx";
import { Suspense, cache } from "react";
import ViewCounter from "../view-counter";
import { increment } from "@/db/mutations";
import { getViewCount } from "@/db/queries";
import { MainLayout } from "@/components/main-layout";
import { ArtcleLeftPanel } from "@/components/panels";

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata | undefined> {
  const allBlogs = getBlogPosts();
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const { metadata, slug } = post;

  const ogImage = metadata.image
    ? `https://irere.vercel.app${metadata.image}`
    : `https://irere.vercel.app/og?title=${metadata.title}`;

  return {
    title: metadata.title,
    description: metadata.summary,
    openGraph: {
      title: metadata.title,
      description: metadata.summary,
      type: "article",
      publishedTime: metadata.publishedAt,
      url: `https://irere.vercel.app/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.summary,
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
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <MainLayout leftPanel={<ArtcleLeftPanel />}>
      <section className="pt-6">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `https://irere.vercel.app${post.metadata.image}`
                : `https://irere.vercel.app/og?title=${post.metadata.title}`,
              url: `https://irere.vercel.app/blog/${post.slug}`,
              author: {
                "@type": "Person",
                name: "Irere Emmanuel",
              },
            }),
          }}
        />
        <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
          {post.metadata.title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
          <Suspense fallback={<p className="h-5" />}>
            <p className="text-sm text-neutral-600 ">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </Suspense>
          <Suspense fallback={<p className="h-5" />}>
            <Views slug={post.slug} />
          </Suspense>
        </div>
        <article className="prose prose-quoteless prose-neutral dark:prose-invert">
          <CustomMDX source={post.content} />
        </article>
      </section>
    </MainLayout>
  );
}

let incrementViews = cache(increment);

async function Views({ slug }: { slug: string }) {
  let views = await getViewCount();
  incrementViews(slug);
  return <ViewCounter allViews={views} slug={slug} />;
}
