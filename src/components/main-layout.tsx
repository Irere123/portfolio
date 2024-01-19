"use client";
import React from "react";

import { useScreenSize } from "@/hooks/useScreenSize";
import { LeftPanel, RightPanel } from "./panels";
import { MainInnerGrid } from "./main-grid";
import { Navbar } from "./navbar";

interface MainLayoutProps {
  leftPanel?: React.ReactNode;
  rightPanel?: React.ReactNode;
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  leftPanel = <div />,
  rightPanel = <div />,
  children,
}) => {
  let middle = null;
  const screenSize = useScreenSize();

  switch (screenSize) {
    case "3-cols":
      middle = (
        <>
          <LeftPanel>{leftPanel}</LeftPanel>
          {children}
          <RightPanel>{rightPanel}</RightPanel>
        </>
      );
      break;
    case "2-cols":
      middle = (
        <>
          <LeftPanel>{leftPanel}</LeftPanel>
          {children}
          <RightPanel>{rightPanel}</RightPanel>
        </>
      );
      break;
    case "1-cols":
      middle = (
        <>
          <LeftPanel>{leftPanel}</LeftPanel>
          {children}
        </>
      );
      break;
    case "fullscreen":
      middle = <>{children}</>;
  }
  return (
    <div
      className={`flex flex-col items-center w-full scrollbar-thin scrollbar-thumb-primary-700`}
    >
      <MainInnerGrid>{middle}</MainInnerGrid>
    </div>
  );
};
