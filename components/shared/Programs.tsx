import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Drum, LucideIcon, Palette, Volleyball } from "lucide-react";
import { Sitedata } from "@/app/Home/Header";
import { EqualSpacing } from "@/app/HomePage";
import Image from "next/image";

type ProgramData = {
  SITE_DATA: Sitedata;
};

const Programs: React.FC<ProgramData> = ({ SITE_DATA }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <ProgramTitleAndDesc SITE_DATA={SITE_DATA} />
        <EqualSpacing />
        <Programcarousel SITE_DATA={SITE_DATA} />
      </div>
    </div>
  );
};

export default Programs;

export const ProgramSection: React.FC<ProgramData> = ({ SITE_DATA }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="relative w-full max-w-xl    ">
        <Image
          src="/ppl.jpg"
          alt="Clipped Image"
          width={200}
          height={300}
          priority
          loading="eager"
          className="object-cover h-[299px] w-full relative z-[1] hidden lg:block"
          style={{
            clipPath:
              "path('M195.99 59.7475C252.32 33.9834 308.084 -30.6363 354.349 17.1651C406.67 71.224 398.776 167.235 362.178 229.283C328.947 285.624 259.15 303.278 195.99 285.651C133.335 268.166 79.356 217.288 77.229 149.545C75.428 92.2095 147.423 81.9605 195.99 59.7475Z')",
          }}
        />
        <Image
          src="/ppl.jpg"
          alt="Clipped Image"
          width={200}
          height={300}
          priority
          loading="eager"
          className="object-cover h-[299px] w-full relative z-[1] lg:hidden block rounded-2xl"
        />
        {/* Orange border overlay */}
        <div
          className="absolute inset-0 z-0 hidden lg:block"
          style={{
            background: "#FF9B50",
            clipPath:
              "path('M195.99 64.7475C252.32 38.9834 308.084 -25.6363 354.349 22.1651C406.67 76.224 398.776 172.235 362.178 234.283C328.947 290.624 259.15 308.278 195.99 290.651C133.335 273.166 79.356 222.288 77.229 154.545C75.428 97.2095 147.423 86.9605 195.99 64.7475Z')",
          }}
        />

        <div
          className="absolute inset-0 z-0 lg:hidden block"
          style={{
            background: "#FF9B50",
            clipPath:
              "path('M130.66 53.17C168.21 35.99 205.39 -12.09 236.23 14.78C271.11 50.82 265.85 114.82 241.45 156.19C219.29 193.75 172.77 205.52 130.66 193.77C88.89 182.11 52.90 148.19 51.49 103.03C50.29 64.81 98.28 57.97 130.66 43.17Z')",
          }}
        />
        {/* Teal accent lines */}
        <div className="absolute lg:bottom-[-10px] bottom-[40px] right-20 -rotate-12  ">
          <div className="-rotate-6">
            <div className="-rotate-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="118"
                height="84"
                viewBox="0 0 118 84"
                fill="none"
              >
                <path
                  d="M2.79735 80.73C20.3876 79.4655 66.0145 69.5179 107.8 39.8439"
                  stroke="#19C1B6"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M10.2312 60.2871C27.8214 59.0226 73.4484 49.075 115.234 19.401"
                  stroke="#19C1B6"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M65.0558 26.8347C73.4617 26.0875 95.2657 20.2094 115.234 2.67475"
                  stroke="#19C1B6"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center">
        <h2 className="lg:text-[45px] text-[30px] font-semibold">
          {SITE_DATA.programs.programsDescriptive.title}
        </h2>
        <p>{SITE_DATA.programs.programsDescriptive.description}</p>
        <div className="bg-teal-500 mt-2 lg:h-[110px] h-[300px] lg:w-[85%] w-[250px] rounded-3xl flex flex-col  lg:flex-row justify-around sm:justify-between lg:justify-around p-0 lg:pl-4 items-center text-white">
          {SITE_DATA.programs.programsDescriptive.container.map(
            (content, idx) => {
              return (
                <div className="flex lg:flex-row flex-col gap-10">
                  <div key={idx}>
                    <h2 className="font-medium text-xl">{content.title}</h2>
                    <p>{content.description}</p>
                  </div>
                  <div className="hidden lg:flex">
                    {idx + 1 !=
                    SITE_DATA.programs.programsDescriptive.container.length ? (
                      <div className="h-[50px] bg-white w-[2px] rounded-full"></div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

const ProgramTitleAndDesc: React.FC<ProgramData> = ({ SITE_DATA }) => {
  return (
    <div className="flex-col text-center justify-center z-[1]">
      <h2 className="lg:text-[45px] text-[30px] font-semibold">
        {SITE_DATA.programs.title}
      </h2>
      <p className="lg:text-[24px] text-[18px] font-normal">
        {SITE_DATA.programs.description}
      </p>
    </div>
  );
};

type ProgramIconProps = {
  programType: keyof typeof ProgramIcons;
  className?: string;
};

const ProgramIcons: Record<string, LucideIcon> = {
  sports: Volleyball,
  music: Drum,
  drawing: Palette,
};

const ProgramIcon: React.FC<ProgramIconProps> = ({
  programType,
  className,
}) => {
  const IconComponent = ProgramIcons[programType];
  return <IconComponent className={className} />;
};

const Programcarousel: React.FC<ProgramData> = ({ SITE_DATA }) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-5xl"
    >
      <CarouselContent>
        {SITE_DATA.programs.programs.map((classItem, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
            <Card className={`border ${classItem.color} h-full text-black`}>
              <CardContent className="flex flex-col items-center text-center gap-4 p-6">
                <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center">
                  <ProgramIcon
                    programType={
                      classItem.title.toLowerCase() as keyof typeof ProgramIcons
                    }
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-xl font-semibold">{classItem.title}</h3>
                <p className="text-sm">{classItem.subtitle}</p>
                <Button
                  variant="outline"
                  className={
                    index === 1
                      ? "border-white dark:text-white hover:bg-white hover:text-black"
                      : "dark:text-white hover:text-black"
                  }
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
