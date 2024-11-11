import Themes from "@/components/Themes";
import Link from "next/link";

import React from "react";

function Footer() {
  return (
    <div>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 AUP School Kuntar. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6 content-center items-center">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Student Handbook
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
      <div className=" bottom-5 ml-1  fixed">
        <Themes />
      </div>
    </div>
  );
}

export default Footer;
