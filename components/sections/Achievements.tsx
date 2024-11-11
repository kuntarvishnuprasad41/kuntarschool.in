import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { AwardIcon, MedalIcon, TrophyIcon } from "lucide-react";

function Achievements() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 sm:-mt-36 mt-28">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 flex flex-col justify-center items-center content-center">
          <div className="space-y-2 text-center mb-36">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Achievements
            </h2>
            <p className="max-w-screen text-muted-foreground md:text-xl">
              Kuntar School has a long history of academic excellence and
              student achievements.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            orientation="horizontal"
            className="w-[360px] md:w-full h-[200px] md:h-[250px] lg:h-[300px] flex justify-center items-center  "
          >
            <CarouselContent className="h-full">
              {Array.from({ length: 5 }).map((_, i) => {
                return (
                  <CarouselItem className="md:basis-1/3" key={i}>
                    <div className="p-1">
                      <Card className="">
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <div className="flex flex-col items-center justify-center">
                            <TrophyIcon className="h-12 w-12 text-primary" />
                            <h3 className="mt-4 text-lg font-semibold">
                              National Science Fair Winner
                            </h3>
                            <p className="text-muted-foreground">
                              2023 Competition
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="ml-10" />
            <CarouselNext className="mr-10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
