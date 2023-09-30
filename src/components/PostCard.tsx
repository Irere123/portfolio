import React from "react";
import { ArrowIcon } from "./ArrowIcon";

type PostCardProps = {
  title: string;
  url: string;
};

export const PostCard: React.FC<PostCardProps> = ({ title, url }) => {
  return (
    <a
      href={`/blog/${url}`}
      className="border border-neutral-700 bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
    >
      <div className="flex flex-col">
        <p className="font-bold text-neutral-100">{title}</p>
        <p>View public work here</p>
      </div>
      <div className="text-neutral-300">
        <ArrowIcon />
      </div>
    </a>
  );
};
