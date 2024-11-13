import { Actions, HeaderProps } from "@/app/Home/Header";
import Image from "next/image";
import React from "react";

export const Hero: React.FC<HeaderProps> = ({ SITE_DATA }) => {
  return (
    <div>
      <div className="relative z-1 w-full flex justify-between gap-2 mt-24 min-h-[300px]">
        {/* Adjusted min-height */}
        <div className="flex-col sm:w-full justify-center items-center">
          <div>
            <p className="lg:text-[22px] text-creamy_blue font-semibold text-[20px] min-h-[30px]">
              {" "}
              {/* Set min-height for stability */}
              {SITE_DATA.hero.subtext}
            </p>
            <p className="lg:text-[56px] text-[32px] text-black font-semibold min-h-[70px]">
              {" "}
              {/* Set min-height for stability */}
              {SITE_DATA.hero.text}
            </p>
            <div className="lg:hidden md:hidden sm:block">
              <Image
                src="/ppl.jpg"
                alt="Clipped Image"
                width={400}
                height={300}
                className="object-cover h-[299px]"
                style={{
                  clipPath:
                    "path('M195.99 59.7475C139.66 33.9834 83.896 -30.6363 37.6313 17.1651C-14.6902 71.224 -6.79595 167.235 29.8017 229.283C63.033 285.624 132.83 303.278 195.99 285.651C258.645 268.166 312.624 217.288 314.751 149.545C316.552 92.2095 244.557 81.9605 195.99 59.7475Z')",
                }}
                priority
                loading="lazy"
              />
            </div>
          </div>

          <p className="lg:text-[26px] text-[16px] text-black font-semibold min-h-[30px]">
            {" "}
            {/* Set min-height */}
            {SITE_DATA.hero.context}
          </p>

          <div className="bg-secondary_orange mt-10 p-4 max-w-[200px] rounded-full flex justify-center text-white font-semibold text-[16px] shadow-md">
            <Actions number={SITE_DATA.call.number} title="Call to know more" />
          </div>
        </div>
        <div className="lg:w-[500px]  h-[300px] hidden md:block lg:block">
          <Image
            src="/ppl.jpg"
            alt="Clipped Image"
            width={400}
            height={300}
            className="object-cover h-[299px] floating-image-container"
            style={{
              clipPath:
                "path('M195.99 59.7475C139.66 33.9834 83.896 -30.6363 37.6313 17.1651C-14.6902 71.224 -6.79595 167.235 29.8017 229.283C63.033 285.624 132.83 303.278 195.99 285.651C258.645 268.166 312.624 217.288 314.751 149.545C316.552 92.2095 244.557 81.9605 195.99 59.7475Z')",
            }}
            priority
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
