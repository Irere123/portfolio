import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";
import {
  Fingerprint,
  Github,
  LinkIcon,
  LinkedIn,
  Resume,
  Rss,
  Twitter,
} from "./icons";

export default function Sidebar() {
  return (
    <div className="-translate-x-full 2xl:border-r 2xl:drop-shadow-none 2xl:pt-0 2xl:relative 2xl:transition-none 2xl:translate-x-0 absolute drop-shadow-0 duration-300 ease-in-out h-full transform-gpu transition w-72 z-50">
      <nav className="w-full flex items-center p-4 space-x-4 font-semibold 2xl:justify-center 2xl:border-b">
        <h2 className="text-2xl text-neutral-900 dark:text-white  hover:text-green-300 transition duration-300 cursor-pointer ">
          Irere
        </h2>
      </nav>
      <div className="flex flex-col gap-4 justify-center p-6">
        <Link href={`/`} className="flex gap-2 items-center cursor-pointer">
          <Fingerprint />
          <p>About me</p>
        </Link>
        <Link
          href={`/resume.pdf`}
          className="flex gap-2 items-center cursor-pointer"
        >
          <Resume />
          <p>Resume</p>
        </Link>
        <Link href={`/rss`} className="flex gap-2 items-center cursor-pointer">
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
  );
}
