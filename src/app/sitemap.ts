import { getBlogPosts } from "@/db/blog";

export default async function sitemap() {
  const blogs = getBlogPosts()
    .filter((post) => post.metadata.published == "true")
    .map((post) => ({
      url: `https://irere.vercel.app/blog/${post.slug}`,
      lastModified: post.metadata.publishedAt,
      description: post.content,
      title: post.metadata.title,
      summary: post.metadata.summary,
    }));

  const routes = ["", "/blog"].map((route) => ({
    url: `https://irere.vercel.app${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
