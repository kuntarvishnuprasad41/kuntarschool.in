/* eslint-disable @next/next/no-img-element */
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
 
import { SparklesCore } from "../../components/ui/sparkles";

function Hero() {
  //   const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  //   const placeholderText = [
  //     { type: "heading1", text: " A.U.P.S. Kuntar: Building Future Leaders" },

  //   ];

  //   const container = {
  //     visible: {
  //       transition: {
  //         staggerChildren: 0.025,
  //       },
  //     },
  //   };

  //   // Quick and dirt for the example
  //   const handleReplay = () => {
  //     setReplay(!replay);
  //     setTimeout(() => {
  //       setReplay(true);
  //     }, 600);
  //   };
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-center items-center content-center gap-4 md:grid md:gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]  max-w-sm md:max-w-full md:w-full  ">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2 animate-[typing_2s_ease-in-out_forwards]">
              <div className="w-full absolute inset-0 h-screen md:mt-24 mt-16">
                <SparklesCore
                  id="tsparticlesfullpage"
                  background="transparent"
                  minSize={3.4}
                  maxSize={2.4}
                  particleDensity={5}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />
              </div>
              <h1 className="text-3xl  font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-sm md:max-w-full md:w-full relative z-20">
                A.U.P.S. Kuntar: Building Future Leaders
              </h1>
              <p className=" text-pretty  text-muted-foreground md:text-xl  max-w-sm md:max-w-full md:w-full ">
                Join a community where education, sports, and culture thrive
                together. Celebrating our students&apos; achievements in
                district and state-level competitions
              </p>
              {/* <motion.div
                className="App"
                initial="hidden"
                // animate="visible"
                animate={replay ? "visible" : "hidden"}
                variants={container}
              >
                <div className="container">
                  {placeholderText.map((item, index) => {
                    return (
                      <h1
                        className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-sm md:max-w-full md:w-full  "
                        key={index}
                      >
                        <AnimatedText {...item} />
                      </h1>
                    );
                  })}
                </div>
                <button onClick={handleReplay}>
                  Replay <span>⟲</span>
                </button>
              </motion.div> */}
            </div>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  max-w-sm md:max-w-full md:w-full"
              prefetch={false}
            >
              Apply Now
            </Link>
          </div>
          <Carousel
            opts={{ align: "start" }}
            orientation="horizontal"
            className=" w-[360px] md:w-full h-[320px] md:h-[400px] lg:h-[480px] lg:flex lg:justify-center lg:items-center lg:content-center"
          >
            <CarouselContent className="h-full">
              {Array.from({ length: 5 }).map((_, i) => {
                return (
                  <CarouselItem className="md:basis-1/3" key={i}>
                    <div className="p-1">
                      <Card className="md:w-48 w-full">
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <img
                            src="/placeholder.svg"
                            width="200"
                            height="200"
                            alt="Academic Program 1"
                            className="mx-auto aspect-square overflow-hidden rounded-xl object-contain"
                          />
                        </CardContent>
                        <CardFooter>
                          <div className="text-center">
                            <h3 className="text-lg font-semibold">
                              Academic Program {i + 1}
                            </h3>
                            <p className="text-muted-foreground">Learn more</p>
                          </div>
                        </CardFooter>
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

export default Hero;
