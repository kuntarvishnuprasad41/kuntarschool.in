"use client";

import * as React from "react";
import { Languages } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export function LanguageToggle() {
  const router = useRouter();
  //   const [language, setLanguage] = React.useState<string>();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Languages className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => {
            router.replace("/kan-in");
            // setLanguage("Kannada");
          }}
        >
          Kannada
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            router.replace("/en-in");
            // setLanguage("English");
          }}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            router.replace("/ml-in");
            // setLanguage("Hindi");
          }}
        >
          Malayalam
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
