"use client";

import React from "react";
import { AppProgressBar } from "next-nprogress-bar";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      {children}
      <AppProgressBar
        color="#000"
        shallowRouting
        options={{ showSpinner: false }}
      />
    </>
  );
};
