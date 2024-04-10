import { ArrowIcon } from "@/components/ArrowIcon";
import { BlogList } from "@/components/blog-list";
import {
  Fingerprint,
  Github,
  LinkIcon,
  LinkedIn,
  Posts,
  Resume,
  Rss,
  Twitter,
} from "@/components/icons";
import { Navbar } from "@/components/navbar";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design and more",
};

export default function BlogPage() {
  return (
    <main className="transition transform-gpu ease-in-out duration-300 grow overflow-hidden relative md:flex">
      <main className="absolute duration-300 ease-in-out h-full max-h-full md:border-r md:brightness-100 md:relative md:transition-none md:w-128 overflow-y-auto transform-gpu transition w-full">
        <nav className="duration-300 ease-in-out border-b p-4 sticky top-0 backdrop-blur-md transform-gpu transition w-full z-40 flex">
          <div className="2xl:h-10 flex flex-grow items-center justify-between my-1 space-x-4">
            <div className="2xl:invisible cursor-pointer select-none">
              <Drawer>
                <DrawerTrigger>
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </DrawerTrigger>
                <DrawerContent>
                  <div>
                    <div className="flex flex-col gap-4 justify-center p-6">
                      <Link
                        href={`/`}
                        className="flex gap-2 items-center cursor-pointer"
                      >
                        <Fingerprint />
                        <p>About me</p>
                      </Link>
                      <Link
                        href={`/blog`}
                        className="flex gap-2 items-center cursor-pointer"
                      >
                        <Posts />
                        <p>Posts</p>
                      </Link>
                      <Link
                        href={`/resume.pdf`}
                        className="flex gap-2 items-center cursor-pointer"
                      >
                        <Resume />
                        <p>Resume</p>
                      </Link>
                      <Link
                        href={`/sitemap.xml`}
                        className="flex gap-2 items-center cursor-pointer"
                      >
                        <Rss />
                        <p>RSS</p>
                      </Link>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground ">External</p>
                      <div className="flex flex-col gap-3 mt-4">
                        <div className="flex gap-2 items-center justify-between cursor-pointer">
                          <a
                            target="_blank"
                            href="https://github.com/irere123"
                            className="flex gap-2"
                          >
                            <Github width={22} height={22} />
                            <p>Github</p>
                          </a>
                          <ArrowIcon width={10} height={10} />
                        </div>
                        <a
                          target="_blank"
                          href="https:/twitter.com/irere_emmanuel"
                          className="flex gap-2 items-center justify-between cursor-pointer"
                        >
                          <div className="flex gap-2">
                            <Twitter width={20} height={20} />
                            <p>Twitter</p>
                          </div>
                          <ArrowIcon width={10} height={10} />
                        </a>
                        <a
                          target="_blank"
                          href="https://rw.linkedin.com/in/irere-emmanuel"
                          className="flex gap-2 items-center justify-between cursor-pointer"
                        >
                          <div className="flex gap-2">
                            <LinkedIn width={20} height={20} />

                            <p>Linked in</p>
                          </div>
                          <ArrowIcon width={10} height={10} />
                        </a>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground">Projects & Work</p>
                      <div className="flex flex-col gap-3 mt-4">
                        <div className="flex gap-2 items-center justify-between cursor-pointer">
                          <div className="flex gap-2">
                            <LinkIcon width={18} height={18} />
                            <p>Spek</p>
                          </div>
                          <ArrowIcon width={10} height={10} />
                        </div>
                        <div className="flex gap-2 items-center justify-between cursor-pointer">
                          <div className="flex gap-2">
                            <LinkIcon width={18} height={18} />
                            <p>Neox</p>
                          </div>
                          <ArrowIcon width={10} height={10} />
                        </div>
                      </div>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
            <p className="font-bold md:font-normal">All Posts</p>
            <svg
              className="h-4 w-4 shrink-0 invisible"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          </div>
        </nav>
        <BlogList />
      </main>
      <article className="translate-x-full absolute duration-300 ease-in-out h-full max-h-full max-w-none md:relative md:transition-none md:translate-x-0 overflow-y-auto transform-gpu transition-transform w-full">
        <Navbar title="About me" />
        <div className="2xl:pb-36 lg:py-16 md:pb-5 md:pt-5 mx-auto pt-4 pb-12  sm:py-12 px-4">
          <section className="prose prose-quoteless prose-neutral dark:prose-invert mb-5">
            <h2>About me</h2>
            <div>
              <p>Hi&lsquo; I&apos;m Emmanuel</p>
              <p>
                I&apos;m a{" "}
                <span className="line-through dark:text-red-300 text-red-400">
                  fullstack software developer
                </span>{" "}
                problem solver based in Rwanda&lsquo; currently working on{" "}
                <a href="https://github.com/irere123/spek">Spek</a>&rsquo;
              </p>
              <p>
                I joined in 2023 Rwanda Coding Academy where I specialize in
                Software programming and Embedded systems both hardware and
                software
              </p>
              <p>
                I&apos;m a seriously into Typescript & Elixir&lsquo; I write
                about tech and stuff on my blog and sometimes post on X(Twitter)
                about tech and general stuff&rsquo;
              </p>
              <p>
                Professionally&lsquo; you can find more details in my{" "}
                <a href="/resume.pdf">résumé</a> if you&apos;re
                interested&rsquo;
              </p>
            </div>
            <h2>Contact</h2>
            <div>
              <p>
                I&apos;m known as <code>irere123</code>&lsquo; or{" "}
                <code>irere emmanuel</code> in most places on the
                internet&lsquo; such as on{" "}
                <a href="https://github.com/irere123">GitHub</a>
                &lsquo; or
                <a href="https://twitter.com/irere_emmanuel"> Twitter</a>&rsquo;
              </p>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
