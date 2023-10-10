import { allBlogs } from "contentlayer/generated";

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://irere-blog.vercel.app/blog/${post.slug}`,
    lastModified: post.date,
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: `https://irere-blog.vercel.app${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
