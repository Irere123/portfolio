import "./globals.css";
import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import clsx from "clsx";

import localFont from "next/font/local";
import { Providers } from "./providers";

const font = localFont({
  src: [
    {
      path: "../../public/fonts/Graphik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Graphik-Medium.ttf",
      weight: "600",
      style: "bold",
    },
  ],
  variable: "--font-local",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://irere-vercel.app"),
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
    url: "https://irere-blog.vercel.app",
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
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-6 lg:mx-auto">
        <main className="flex-auto mt-3 flex flex-col min-w-0 m-w-0">
          <Providers>
            <Sidebar />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
