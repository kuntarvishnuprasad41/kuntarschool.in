import { Sitedata } from "@/app/Home/Header";
import Image from "next/image";
import React from "react";

type SD = {
  SITE_DATA: Sitedata;
};

export const TheStory: React.FC<SD> = ({ SITE_DATA }) => {
  return (
    <div className="w-full   pt-7 pb-7 md:pt-20 md:pb-24">
      <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
        <div className="rounded-lg box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
          <Image
            src="/gummy-calculator.svg"
            className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 overflow-hidden"
            alt={"qwe"}
            height={400}
            width={400}
          />
        </div>

        <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
          <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
            {SITE_DATA.story.story1.title}
          </h2>
          <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
            {SITE_DATA.story.story1.description}
          </p>
          <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
            {SITE_DATA.story.story1.points.map((point, idx) => {
              return (
                <li
                  className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"
                  key={idx}
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-secondary_orange rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>
                  {point}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
        <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
          <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
            {SITE_DATA.story.story2.title}
          </h2>
          <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
            {SITE_DATA.story.story2.description}
          </p>
          <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
            {SITE_DATA.story.story2.points.map((point, idx) => {
              return (
                <li
                  className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"
                  key={idx}
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-secondary_orange rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>
                  {point}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
          <Image
            src="/gummy-stationary-set-1.svg"
            className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
            height={400}
            width={400}
            alt={"qwe"}
          />
        </div>
      </div>
    </div>
  );
};

export default TheStory;
