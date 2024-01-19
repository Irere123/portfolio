"use client";

import { useRouter } from "next/navigation"
import Link from "next/link"
import {Heart, Bookmark, ArrowLeft, MessageSquare } from "lucide-react"

export const LeftPanel: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={`flex pt-5 flex-col flex-1 sticky top-0 h-screen`}>
      {children}
    </div>
  );
};

export const RightPanel: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={`flex pt-5 flex-col flex-1 sticky top-0 h-screen`}>
      {children}
    </div>
  );
};


export const ArtcleLeftPanel: React.FC<{}> = () => {
  const { back } = useRouter();

  return (
    <div className="flex flex-col gap-4 items-end text-">
      <button className="border p-2 rounded-md" onClick={() => back()}>
      <ArrowLeft />
      </button>
      <Heart />
      <Bookmark />
      <MessageSquare />
    </div>
  )
}
