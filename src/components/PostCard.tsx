import React from "react";
import { ArrowIcon } from "./ArrowIcon";

type PostCardProps = {
  title: string;
  url: string;
  summary: string;
};

export const PostCard: React.FC<PostCardProps> = ({ title, url, summary }) => {
  return (
    <a
      href={`/blog/${url}`}
      className="border border-neutral-200 bg-neutral-50 rounded flex items-center justify-between px-3 py-4 w-full"
    >
      <div className="flex flex-col">
        <p className="font-bold text-neutral-900">{title}</p>
        <p className="text-secondary">{summary}</p>
      </div>
      <div className="text-neutral-600">
        <ArrowIcon />
      </div>
    </a>
  );
};
