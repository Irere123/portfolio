"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { useSession } from "next-auth/react";
import { LogOut, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import NavItem from "./nav-item";
import { ThemeToggle } from "@/components/theme-toggle";

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
  const { data } = useSession();
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
        <div className="flex gap-4">
          {data?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Image
                  alt={data.user.name!}
                  src={data.user.image!}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuSeparator />
                <Link href={`https://github.com/Irere123/portfolio`}>
                  <DropdownMenuItem>Github</DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut width={16} height={16} className="mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : data?.user ? (
            <button className="bg-neutral-300 border-neutral-100 px-3 py-2">
              Sign In
            </button>
          ) : null}
          <div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </aside>
  );
};
