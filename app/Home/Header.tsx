/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import Themes from "@/components/Themes";
import Image from "next/image";

import React, { useState } from "react";

import { MenuButton } from "@/components/framer/MenuButton";
import { useTheme } from "next-themes";

export type Sitedata = {
  menu: Menu[];
  call: { number: string };
  cta: {
    title: string;
    number: string;
  };
  hero: {
    subtext: string;
    text: string;
    context: string;
  };
};

export type Menu = {
  title: string;
  url: string;
};

export type HeaderProps = {
  SITE_DATA: Sitedata;
};

export const Header: React.FC<HeaderProps> = ({ SITE_DATA }) => {
  const { theme } = useTheme();
  const [isOpen, setOpen] = useState(false);

  return (
    <header
      className="w-full h-[100px] flex justify-between items-center fixed  dark:bg-[#040718] px-4 z-10"
      style={
        theme === "dark"
          ? {
              background: `#000`,
            }
          : { background: `linear-gradient(250deg, #D1F2F0 40%, #FEF8EC 80%)` }
      }
    >
      <div className="relative h-full aspect-[2/1]">
        <Image
          src={"/logo.svg"}
          alt={"A.U.P.S. KUNTAR"}
          width={400}
          height={400}
          className="-mt-8"
        />
      </div>

      <div>
        <div className="hidden lg:flex justify-between w-[500px]">
          {SITE_DATA.menu.map((menu, idx) => {
            return (
              <a href={menu.url} key={idx} className="font-medium">
                {menu.title}
              </a>
            );
          })}
        </div>

        <div className="lg:hidden sm:block">
          <MenuButton
            isOpen={isOpen}
            // @ts-expect-error
            onClick={() => setOpen((s) => !s)}
            strokeWidth="8"
            color="#00609E"
            lineProps={{ strokeLinecap: "round" }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            width="34"
            height="24"
          />
        </div>
      </div>

      <div className="hidden lg:flex items-center">
        <Themes />
      </div>

      {/* <Actions title={SITE_DATA.cta.title} number={SITE_DATA.cta.number} /> */}
    </header>
  );
};

export default Header;

export const Actions = (cta: { number: string; title: string }) => {
  return (
    <a href={`tel:${cta.number}`} className="">
      {cta.title}
    </a>
  );
};

