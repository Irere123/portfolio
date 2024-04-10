import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getBlogPosts } from "@/db/blog";
import { CustomMDX } from "@/components/mdx";
import { Suspense, cache } from "react";
import ViewCounter from "../view-counter";
import { increment } from "@/db/mutations";
import { getViewCount } from "@/db/queries";
import { BlogList } from "@/components/blog-list";
import { Navbar } from "@/components/navbar";
import { formatDate } from "@/lib/formatDate";

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
    <main className="transition transform-gpu ease-in-out duration-300 grow overflow-hidden relative md:flex">
      <main className="brightness-50 hidden md:block absolute duration-300 ease-in-out h-full max-h-full md:border-r md:brightness-100 md:relative md:transition-none md:w-128 overflow-y-scroll transform-gpu transition w-full">
        <nav className="duration-300 ease-in-out bg-background border-b p-4 sticky top-0 backdrop-blur-md transform-gpu transition w-full z-40 flex">
          <p className="text-lg">All posts</p>
        </nav>
        <BlogList />
      </main>
      <article className="absolute duration-300 ease-in-out h-full max-h-full max-w-none md:relative md:transition-none md:translate-x-0 overflow-y-scroll transform-gpu transition-transform w-full">
        <Navbar title={post.metadata.title} />
        <section className="2xl:pb-36 lg:py-16 md:pb-5 md:pt-5 mx-auto pt-4 pb-12 sm:py-12 px-4">
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
          <article className="prose prose-quoteless prose-neutral dark:prose-invert mb-5">
            <CustomMDX source={post.content} />
          </article>
        </section>
      </article>
    </main>
  );
}

let incrementViews = cache(increment);

async function Views({ slug }: { slug: string }) {
  let views = await getViewCount();
  incrementViews(slug);
  return <ViewCounter allViews={views} slug={slug} />;
}
