"use client";

import React from "react";
import { MainLayout } from "./main-layout";
import { Navbar } from "./navbar";

export const DefaltLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <MainLayout>
        <div className="flex flex-col">
          <Navbar />
          {children}
        </div>
      </MainLayout>
    </>
  );
};
