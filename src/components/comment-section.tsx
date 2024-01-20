"use client";

import React from "react";
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer";

export const CommentSection: React.FC<{}> = () => {
  return (
    <DrawerContent>
      <div className="mx-auto w-full">
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <button>Submit</button>
          <DrawerClose>
            <button> Cancel</button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  );
};
