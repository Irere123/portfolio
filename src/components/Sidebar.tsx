"use client";

import { usePathname } from "next/navigation";
import React from "react";
import NavItem from "./navItem";
import { useSession } from "next-auth/react";
import Image from "next/image";

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

export const Sidebar: React.FC = () => {
  const { data } = useSession();
  let pathname = usePathname() || "/";

  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="flex justify-between lg:sticky lg:top-20">
        <nav className="flex flex-row items-start relative fade pb-0 px-0 md:overflow-auto md:relative">
          <div className="flex  gap-3 flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return <NavItem name={name} path={path} key={path} />;
            })}
          </div>
        </nav>
        {data?.user ? (
          <Image
            alt={data.user.name!}
            src={data.user.image!}
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : data?.user ? (
          <button className="bg-neutral-300 border-neutral-100 px-3 py-2">
            Sign In
          </button>
        ) : null}
      </div>
    </aside>
  );
};
