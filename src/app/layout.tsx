import "./globals.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";

import { Providers } from "@/app/providers";
import { Navbar } from "@/components/navbar";
import {
  Fingerprint,
  Github,
  LinkIcon,
  LinkedIn,
  Resume,
  Rss,
  Twitter,
} from "@/components/icons";
import { ArrowIcon } from "@/components/ArrowIcon";
import { BlogLink } from "./page";

export const metadata: Metadata = {
  metadataBase: new URL("https://irere.vercel.app"),
  icons: {
    icon: "/favicon.ico",
  },
  title: {
    default: "Irere Emmanuel",
    template: "%s | Irere Emmanuel",
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Irere Emmanuel",
    description: "Developer, writer, and creator.",
    url: "https://irere.vercel.app",
    siteName: "Irere Emmanuel",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Irere Blog",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "text-light-gray bg-background",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body>
        <main className="h-screen">
          <div className="flex flex-col max-h-full h-full 2xl:flex-row">
            <Analytics />
            <Providers>
              <div className="-translate-x-full 2xl:border-r 2xl:drop-shadow-none 2xl:pt-0 2xl:relative 2xl:transition-none 2xl:translate-x-0 absolute drop-shadow-0 duration-300 ease-in-out h-full transform-gpu transition w-72 z-50">
                <nav className="w-full flex items-center p-4 space-x-4 font-semibold 2xl:justify-center 2xl:border-b">
                  <h2 className="text-3xl text-white hover:text-green-300 transition duration-300 cursor-pointer ">
                    Irere
                  </h2>
                </nav>
                <div className="flex flex-col gap-4 justify-center p-6">
                  <div className="flex gap-2 items-center">
                    <Fingerprint />
                    <p>About me</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Resume />
                    <p>Resume</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Rss />
                    <p>RSS</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300">External</p>
                  <div className="flex flex-col gap-3 mt-4">
                    <div className="flex gap-2 items-center justify-between cursor-pointer">
                      <div className="flex gap-2">
                        <Github width={22} height={22} />
                        <p>Github</p>
                      </div>
                      <ArrowIcon width={10} height={10} />
                    </div>
                    <div className="flex gap-2 items-center justify-between cursor-pointer">
                      <div className="flex gap-2">
                        <Twitter width={20} height={20} />
                        <p>Twitter</p>
                      </div>
                      <ArrowIcon width={10} height={10} />
                    </div>
                    <div className="flex gap-2 items-center justify-between cursor-pointer">
                      <div className="flex gap-2">
                        <LinkedIn width={20} height={20} />
                        <p>Linked in</p>
                      </div>
                      <ArrowIcon width={10} height={10} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300">Projects & Work</p>
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
              <main className="transition transform-gpu ease-in-out duration-300 grow overflow-hidden relative md:flex">
                <main className="brightness-50 absolute duration-300 ease-in-out h-full max-h-full md:border-r md:brightness-100 md:relative md:transition-none md:w-128 overflow-y-auto transform-gpu transition w-full">
                  <nav className="duration-300 ease-in-out border-b p-4 sticky top-0 backdrop-blur-md transform-gpu transition w-full z-40 flex">
                    <p className="text-lg">All posts</p>
                  </nav>
                  <div className="sm:w-128 md:w-auto w-full mx-auto">
                    <div className="block cursor-pointer hover:bg-gray-300/20 md:border-b md:px-5 md:py-5 px-4 py-4 select-none">
                      <p>Hello this is the new site</p>
                    </div>
                  </div>
                </main>
                <article className="absolute  duration-300 ease-in-out h-full max-h-full max-w-none md:relative md:transition-none md:translate-x-0 overflow-y-scroll transform-gpu transition-transform w-full">
                  {children}
                </article>
              </main>
            </Providers>
          </div>
        </main>
      </body>
    </html>
  );
}
