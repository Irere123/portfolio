"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "/newsletter": {
    name: "newsletter",
  },
};

export const Sidebar: React.FC = () => {
  let pathname = usePathname() || "/";

  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className="flex flex-row items-start relative fade pb-0 px-0 md:overflow-auto md:relative">
          <div className="flex  gap-3 flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathname === path;

              return (
                <Link
                  key={path}
                  className={`
                  transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle
                  ${!isActive ? "text-neutral-500" : ""}
                )`}
                  href={`${path}`}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
};
