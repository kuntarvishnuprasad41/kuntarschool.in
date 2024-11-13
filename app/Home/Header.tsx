/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import Themes from "@/components/Themes";
import Image from "next/image";

import React, { useState } from "react";

import { MenuButton } from "@/components/framer/MenuButton";
import { useTheme } from "next-themes";
import { LanguageToggle } from "@/components/shared/LanguageSelector";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

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
  programs: Programs;
};

export type ProgramContainer = { title: string; description: string };

export type Programs = {
  title: string;
  description: string;
  programs: Program[];
  programsDescriptive: {
    image: string;
    title: string;
    description: string;
    container: ProgramContainer[];
    keypoints: string[];
    button: {
      title: string;
      url: string;
    };
    vidB: {
      title: string;
      url: string;
    };
  };
};

export type Program = {
  color: string;
  title: string;
  subtitle: string;
  image: string;
  button: ProgramButton;
};

export type ProgramButton = {
  title: string;
  url: string;
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
      className="w-full h-[55px] flex justify-between items-center fixed  dark:bg-[#040718] px-4 z-10"
      style={
        theme === "dark"
          ? {
              background: `#000`,
            }
          : { background: `linear-gradient(250deg, #D1F2F0 40%, #FEF8EC 80%)` }
      }
    >
      <div className="relative h-[140%] aspect-[2/1]">
        <Image
          src={"/logo.svg"}
          alt={"A.U.P.S. KUNTAR"}
          width={400}
          height={400}
          className="-mt-4"
          priority
          loading="eager"
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

      <div className="hidden lg:flex items-center gap-2">
        <Themes />
        <LanguageToggle />
        <CallButton SITE_DATA={SITE_DATA} />
      </div>

      {/* <Actions title={SITE_DATA.cta.title} number={SITE_DATA.cta.number} /> */}
    </header>
  );
};

export default Header;
export type CallButton = {
  SITE_DATA: Sitedata;
};

export const CallButton: React.FC<CallButton> = ({ SITE_DATA }) => {
  return (
    <Button
      className="bg-white hover:bg-slate-100 h-[38px] w-[38px] p-0"
      onClick={() => (window.location.href = `tel:${SITE_DATA.call.number}`)}
    >
      <Phone
        className="text-black h-[1.2rem] w-[1.2rem]  rotate-0  transition-all dark:-rotate-90  "
        aria-label="Call us"
      ></Phone>
    </Button>
  );
};

export const Actions = (cta: { number: string; title: string }) => {
  return (
    <a href={`tel:${cta.number}`} className="">
      {cta.title}
    </a>
  );
};

