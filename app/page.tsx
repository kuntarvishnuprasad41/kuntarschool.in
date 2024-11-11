"use client";
import React, { Suspense, useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
import { useTheme } from "next-themes";

import Image from "next/image";
import { Moon, Pencil, Sun } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import HomePage from "./HomePage";

export default function Home() {
  const { setTheme } = useTheme();
  const [content, setContent] = useState(<LoadingPage />);

  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        setContent(<HomePage />);
      }
    }, 500);
  }, []);

  return <>{content}</>;
}
