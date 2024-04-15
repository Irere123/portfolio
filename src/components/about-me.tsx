import Link from "next/link";
import { BlogList } from "./blog-list";
import { Navbar } from "./navbar";

export default function AboutMe() {
  return (
    <main className="transition transform-gpu ease-in-out duration-300 grow overflow-hidden relative md:flex">
      <main className="brightness-50 hidden md:block absolute duration-300 ease-in-out h-full max-h-full md:border-r md:brightness-100 md:relative md:transition-none md:w-128 overflow-y-auto transform-gpu transition w-full">
        <nav className="bg-background duration-300 ease-in-out border-b p-4 sticky top-0 backdrop-blur-md transform-gpu transition w-full z-40 flex">
          <p className="text-lg">All posts</p>
        </nav>
        <BlogList />
      </main>
      <article className="absolute duration-300 ease-in-out h-full max-h-full max-w-none md:relative md:transition-none md:translate-x-0 overflow-y-auto transform-gpu transition-transform w-full">
        <Navbar title="About me" />
        <div className="2xl:pb-36 lg:py-16 md:pb-5 md:pt-5 mx-auto pt-4 pb-12  sm:py-12 px-4">
          <section className="prose prose-quoteless prose-neutral dark:prose-invert mb-5">
            <h2>About me</h2>
            <div>
              <p>Hi, I'm Emmanuel</p>
              <p>
                I'm a{" "}
                <span className="line-through dark:text-red-300 text-red-400">
                  fullstack software developer
                </span>{" "}
                problem solver based in Rwanda, currently working on{" "}
                <a href="https://github.com/irere123/spek">Spek</a>.
              </p>
              <p>
                I joined in 2023 Rwanda Coding Academy where I specialize in
                Software programming and Embedded systems both hardware and
                software
              </p>
              <p>
                I'm a seriously into Typescript & Elixir, I write about tech and
                stuff on my blog and sometimes post on X(Twitter) about tech and
                general stuff.
              </p>
              <p>
                Professionally, you can find more details in my{" "}
                <Link href="/resume">résumé</Link> if you're interested.
              </p>
            </div>
            <h2>Contact</h2>
            <div>
              <p>
                I'm known as <code>irere123</code>, or{" "}
                <code>irere emmanuel</code> in most places on the internet, such
                as on <a href="https://github.com/irere123">GitHub</a>, or
                <a href="https://twitter.com/irere_emmanuel"> Twitter</a>.
              </p>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
