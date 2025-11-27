"use client";

import { useEffect, useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export const Alert = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <AlertDialog onOpenChange={setOpen} open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Welcome to my time capsule.</AlertDialogTitle>
          <AlertDialogDescription>
            This portfolio showcases work from 2022 and <u>earlier</u>. If
            you&apos;re here for nostalgia, enjoy! If you want to see what I’m
            building today — e-commerce frontend solutions and Expo apps at
            Fitness24Seven — connect with me on{" "}
            <a
              className="text-blue-600"
              href="https://www.linkedin.com/in/adrian-petersson-65b746216/"
            >
              LinkedIn
            </a>
            .
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Close</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
