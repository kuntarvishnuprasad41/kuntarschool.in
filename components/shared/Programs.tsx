import { Sitedata } from "@/app/Home/Header";
import { EqualSpacing } from "@/app/HomePage";
import React from "react";

type ProgramData = {
  SITE_DATA: Sitedata;
};

const Programs: React.FC<ProgramData> = ({ SITE_DATA }) => {
  return (
    <div className="flex flex-col items-center  justify-center">
      <ProgramTitleAndDesc SITE_DATA={SITE_DATA} />
      <EqualSpacing />
      <Programcarousel SITE_DATA={SITE_DATA} />
    </div>
  );
};

export default Programs;

export const ProgramTitleAndDesc: React.FC<ProgramData> = ({ SITE_DATA }) => {
  return (
    <div className="flex-col text-center justify-center">
      <div>
        <p className="lg:text-[45px] text-[30px] font-semibold">
          {SITE_DATA.programs.title}
        </p>
      </div>
      <div>
        <p className="lg:text-[24px] text-[18px] font-normal">
          {SITE_DATA.programs.description}
        </p>
      </div>
    </div>
  );
};

export const Programcarousel: React.FC<ProgramData> = ({ SITE_DATA }) => {
  return <div> {SITE_DATA.programs.title}</div>;
};
