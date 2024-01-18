"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { AppProgressBar } from "next-nprogress-bar";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
      <SessionProvider>
        {children}
        <AppProgressBar
          color="#000"
          shallowRouting
          options={{ showSpinner: false }}
        />
      </SessionProvider>
    </NextThemesProvider>
  );
};
