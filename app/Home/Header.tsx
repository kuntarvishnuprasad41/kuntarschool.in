import Themes from "@/components/Themes";
import { SchoolIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <SchoolIcon className="h-6 w-6" />{" "}
        <p className="text-sm font-medium hover:underline underline-offset-4">
          {" "}
          &nbsp;&nbsp;&nbsp;Kuntarschool
        </p>
        <span className="sr-only">A.U.P. School Kuntar</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 justify-center items-center">
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Academics
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contact
        </Link>
        <div className="hidden md:flex">
          <Themes />
        </div>
      </nav>
    </header>
  );
}

export default Header;
