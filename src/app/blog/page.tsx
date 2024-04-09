import AboutMe from "@/components/about-me";
import { BlogList } from "@/components/blog-list";
import { Navbar } from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design and more",
};

export default function BlogPage() {
  return (
    <>
      <Navbar title="About me" isMain={true} />
      <AboutMe />
    </>
  );
}
