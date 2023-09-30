import React from "react";
import Link from "next/link";

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex gap-4 bg-foreground p-4 rounded border-2 border-border text-light-gray">
        <Link href={`/`}>home</Link>
        <Link href={`/blog`}>blog</Link>
        <Link href={`/thebook`}>thebook</Link>
      </div>
      {children}
    </div>
  );
};
