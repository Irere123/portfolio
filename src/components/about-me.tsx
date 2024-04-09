import { BlogList } from "./blog-list";

export default function AboutMe() {
  return (
    <main className="transition transform-gpu ease-in-out duration-300 grow overflow-hidden relative md:flex">
      <main className="brightness-50 absolute duration-300 ease-in-out h-full max-h-full md:border-r md:brightness-100 md:relative md:transition-none md:w-128 overflow-y-auto transform-gpu transition w-full">
        <nav className="duration-300 ease-in-out border-b p-4 sticky top-0 backdrop-blur-md transform-gpu transition w-full z-40 flex">
          <p className="text-lg">All posts</p>
        </nav>
        <BlogList />
      </main>
      <article className="translate-x-full absolute duration-300 ease-in-out h-full max-h-full max-w-none md:relative md:transition-none md:translate-x-0 overflow-y-scroll transform-gpu transition-transform w-full">
        <div className="2xl:pb-36 lg:py-16 md:pb-5 md:pt-5 mx-auto pt-4 pb-12  sm:py-12 px-4">
          <h1 className="text-3xl">About me</h1>
          <p>I am chris</p>
        </div>
      </article>
    </main>
  );
}
