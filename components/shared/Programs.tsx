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

type ProgramData = {
  SITE_DATA: Sitedata;
};

const Programs: React.FC<ProgramData> = ({ SITE_DATA }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <ProgramTitleAndDesc SITE_DATA={SITE_DATA} />
      <EqualSpacing />
      <Programcarousel SITE_DATA={SITE_DATA} />
    </div>
  );
};

export default Programs;

const ProgramTitleAndDesc: React.FC<ProgramData> = ({ SITE_DATA }) => {
  return (
    <div className="flex-col text-center justify-center">
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
            <Card className={`border ${classItem.color} h-full`}>
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
                      ? "border-white text-black hover:bg-white hover:text-teal-500"
                      : ""
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
