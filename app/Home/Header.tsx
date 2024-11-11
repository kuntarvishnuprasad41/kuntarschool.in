import Themes from "@/components/Themes";
import Image from "next/image";

import React from "react";

function Header() {
  return (
    <header className="w-full h-[100px] flex justify-between items-center fixed bg-white px-4">
      <div className="relative h-full aspect-[2/1]">
        <Image
          src={"/logo.svg"}
          alt={""}
          width={400}
          height={400}
          className="-mt-8"
        />
      </div>

      <div className="flex items-center">
        <Themes />
      </div>
    </header>
  );
}

export default Header;
