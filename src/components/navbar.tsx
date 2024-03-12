"use client";

import { usePathname } from "next/navigation";
import React from "react";

import NavItem from "./nav-item";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "/crafts": {
    name: "crafts",
  },
};

export const Navbar: React.FC = () => {
  let pathname = usePathname() || "/";

  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <aside className="mt-5 mb-14 tracking-tight">
      <div className="flex justify-between lg:sticky lg:top-20">
        <nav className="flex flex-row items-start relative fade pb-0 px-0 md:overflow-auto md:relative">
          <div className="flex  gap-3 flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return <NavItem name={name} path={path} key={path} />;
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
};
