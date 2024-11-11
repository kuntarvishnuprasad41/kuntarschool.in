import Image from "next/image";

import React from "react";

function Header() {
  return (
    <header className=" ">
      <Image src={"/logo.svg"} alt={""} width={200} height={200} />
    </header>
  );
}

export default Header;
