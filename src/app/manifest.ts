import { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TheBlog",
    short_name: "TheBlog",
    description: "Read my thoughts on web design and web development",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff"
  };
}
