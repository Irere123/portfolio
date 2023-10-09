import { Sidebar } from "@/components/Sidebar";
import "../styles/globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://irere-vercel.app"),
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
    <html lang="en" className="text-light-gray bg-background">
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-6 lg:mx-auto">
        <main className="flex-auto mt-3 m-w-0">
          <Sidebar />
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
