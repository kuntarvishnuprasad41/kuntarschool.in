import { SITE_DATA } from "@/app/data/site-data";
import { Actions } from "@/app/Home/Header";
import React from "react";

function Hero() {
  return (
    <div>
      <div className="relative    z-1  h-[523px] w-full max-w-[1100px]   px-10  ">
        <div className=" lg:w-2/3 flex-col justify-between  ">
          <div className="">
            <p className="lg:text-[22px] text-creamy_blue font-semibold mt-24 text-[20px]">
              {SITE_DATA.hero.subtext}
            </p>
            <p className="lg:text-[56px] text-[32px] text-black font-semibold  ">
              {SITE_DATA.hero.text}
            </p>
          </div>
          <br />
          <p className="lg:text-[26px] text-[16px] text-black font-semibold  ">
            {SITE_DATA.hero.context}
          </p>
          <br />
          <br />
          <div className="bg-secondary_orange p-4 max-w-[200px]  rounded-full flex justify-center text-white font-semibold text-[16px] shadow-md text-outline">
            <Actions number={SITE_DATA.call.number} title="Call to know more" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Hero;
