import Link from "next/link";
import { BlogList } from "./blog-list";
import { Navbar } from "./navbar";
import { MobileDrawer } from "./MobileDrawer";

export default function AboutMe() {
  return (
    <main className="transition transform-gpu ease-in-out duration-300 grow overflow-hidden relative md:flex">
      <main className="brightness-50 hidden md:block absolute duration-300 ease-in-out h-full max-h-full md:border-r md:brightness-100 md:relative md:transition-none md:w-128 overflow-y-auto transform-gpu transition w-full">
        <nav className="bg-background duration-300 ease-in-out border-b p-5 items-center gap-5 sticky top-0 backdrop-blur-md transform-gpu transition w-full z-40 flex">
          <div className="2xl:invisible cursor-pointer select-none">
            <MobileDrawer>
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
            </MobileDrawer>
          </div>
          <p className="font-bold md:font-normal">All posts</p>
        </nav>
        <BlogList />
      </main>
      <article className="absolute duration-300 ease-in-out h-full max-h-full max-w-none md:relative md:transition-none md:translate-x-0 overflow-y-auto transform-gpu transition-transform w-full">
        <Navbar title="About me" />
        <div className="flex justify-center 2xl:pb-36 lg:py-16 md:pb-5 md:pt-5 mx-auto pt-4 pb-12  sm:py-12 px-4">
          <section className="prose prose-quoteless prose-neutral dark:prose-invert mb-5">
            <h2>About me</h2>
            <div>
              <p>
                I&lsquo;m a software engineer with 5+ years of experience
                developing web applications and services, as well as providing
                technical leadership for small teams of software developers.
              </p>
              <p>
                I&lsquo;m fluent in Go, Typescript, C, SQL, and English.
                I&lsquo;ve also written a good amount of JavaScript, HTML, C++,
                and Elixir. I learn quickly, care about detail, and love
                computer science and astronomy.
              </p>
              <p>
                I live in Rwanda, but I have the right to travel anywhere. I
                lived and worked in Rwanda from birth to present, and I&lsquo;m
                open to remote work and some travel.
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
