"use client";

import React from "react";
import { AppProgressBar } from "next-nprogress-bar";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
      <AppProgressBar
        color="#000"
        shallowRouting
        options={{ showSpinner: false }}
      />
    </NextThemesProvider>
  );
};
