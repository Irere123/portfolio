import { MobileDrawer } from "@/components/MobileDrawer";
import { ExperimentsList } from "@/components/experiment-list";

import { Navbar } from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiments",
  description:
    "Exploring to know more. If can't create it you don't understand it well enough.",
};

export default function ExperimentsPage() {
  return (
    <main className="transition transform-gpu ease-in-out duration-300 grow overflow-hidden relative md:flex">
      <main className="absolute duration-300 ease-in-out h-full max-h-full md:border-r md:brightness-100 md:relative md:transition-none md:w-128 overflow-y-auto transform-gpu transition w-full">
        <nav className="bg-background duration-300 ease-in-out border-b p-2 sticky top-0 backdrop-blur-md transform-gpu transition w-full z-40 flex">
          <div className="2xl:h-10 flex flex-grow items-center justify-between my-1 space-x-4">
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
            <p className="font-bold md:font-normal">Experiments</p>
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
        <ExperimentsList />
      </main>
      <article className="translate-x-full absolute duration-300 ease-in-out h-full max-h-full max-w-none md:relative md:transition-none md:translate-x-0 overflow-y-auto transform-gpu transition-transform w-full">
        <Navbar title="About me" />
        <div className="flex justify-center 2xl:pb-36 lg:py-16 md:pb-5 md:pt-5 mx-auto pt-4 pb-12  sm:py-12 px-4">
          <section className="prose prose-quoteless prose-neutral dark:prose-invert mb-5">
            <h2>Experimental mind</h2>
            <div>
              <p className="font-meddon">
                <strong>
                  &ldquo; What I cannot create, I do not understand. Know how to
                  solve every problem that has been solved &rdquo;
                </strong>{" "}
                - Richard Feynman
              </p>
              <p>
                I want to explore things that have been created it order to
                become an expert in what I do which is sofware programming.
                That's why I opt-in to experimenting with the technologies
              </p>
              <p>
                Experiments is a showcase of work done to push boundaries of web
                technology, creating beautiful, unique web experiences.
              </p>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
