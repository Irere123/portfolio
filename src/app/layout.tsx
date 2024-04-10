import "./globals.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";

import { Providers } from "@/app/providers";
import Sidebar from "@/components/sidebar";

export const metadata: Metadata = {
  metadataBase: new URL("https://irere.vercel.app"),
  icons: {
    icon: "/favicon.ico",
  },
  title: {
    default: "Irere Emmanuel | About me",
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
              <Sidebar />
              {children}
            </Providers>
          </div>
        </main>
      </body>
    </html>
  );
}
