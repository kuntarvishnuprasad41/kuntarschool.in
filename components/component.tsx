/* eslint-disable @next/next/no-img-element */
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/sD0MFeiBVTx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { IBM_Plex_Sans } from 'next/font/google'
import { Gabarito } from 'next/font/google'

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

gabarito({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <SchoolIcon className="h-6 w-6" />
          <span className="sr-only">Acme School</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Academics
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2 animate-[typing_2s_ease-in-out_forwards]">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover the Best Education at Acme School
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Explore our wide range of academic programs and resources
                    designed to help you succeed.
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Apply Now
                </Link>
              </div>
              <Carousel
                opts={{ align: "start" }}
                orientation="horizontal"
                className="w-full h-[320px] md:h-[400px] lg:h-[480px]"
              >
                <CarouselContent className="h-full">
                  <CarouselItem className="md:basis-1/3">
                    <div className="p-1">
                      <Card>
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
                              Academic Program 1
                            </h3>
                            <p className="text-muted-foreground">Learn more</p>
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <img
                            src="/placeholder.svg"
                            width="200"
                            height="200"
                            alt="Academic Program 2"
                            className="mx-auto aspect-square overflow-hidden rounded-xl object-contain"
                          />
                        </CardContent>
                        <CardFooter>
                          <div className="text-center">
                            <h3 className="text-lg font-semibold">
                              Academic Program 2
                            </h3>
                            <p className="text-muted-foreground">Learn more</p>
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <img
                            src="/placeholder.svg"
                            width="200"
                            height="200"
                            alt="Academic Program 3"
                            className="mx-auto aspect-square overflow-hidden rounded-xl object-contain"
                          />
                        </CardContent>
                        <CardFooter>
                          <div className="text-center">
                            <h3 className="text-lg font-semibold">
                              Academic Program 3
                            </h3>
                            <p className="text-muted-foreground">Learn more</p>
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Achievements
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Acme School has a long history of academic excellence and
                  student achievements.
                </p>
              </div>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                orientation="horizontal"
                className="w-full h-[200px] md:h-[250px] lg:h-[300px]"
              >
                <CarouselContent className="h-full">
                  <CarouselItem className="md:basis-1/3">
                    <div className="p-1">
                      <Card>
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
                  <CarouselItem className="md:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <div className="flex flex-col items-center justify-center">
                            <AwardIcon className="h-12 w-12 text-primary" />
                            <h3 className="mt-4 text-lg font-semibold">
                              Best Robotics Team
                            </h3>
                            <p className="text-muted-foreground">
                              Regional Competition
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <div className="flex flex-col items-center justify-center">
                            <MedalIcon className="h-12 w-12 text-primary" />
                            <h3 className="mt-4 text-lg font-semibold">
                              State Math Olympiad Champion
                            </h3>
                            <p className="text-muted-foreground">
                              2022 Competition
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  News & Announcements
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Stay up-to-date with the latest news and announcements from
                  Acme School.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-[4/3] items-center justify-center">
                      <img
                        src="/placeholder.svg"
                        width="300"
                        height="200"
                        alt="News Image 1"
                        className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
                      />
                    </CardContent>
                    <CardFooter>
                      <div>
                        <h3 className="text-lg font-semibold">
                          Open House Event
                        </h3>
                        <p className="text-muted-foreground">
                          Join us for our annual open house event on May 15,
                          2024. Explore our campus and learn about our academic
                          programs.
                        </p>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-[4/3] items-center justify-center">
                      <img
                        src="/placeholder.svg"
                        width="300"
                        height="200"
                        alt="News Image 2"
                        className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
                      />
                    </CardContent>
                    <CardFooter>
                      <div>
                        <h3 className="text-lg font-semibold">
                          New Scholarship Program
                        </h3>
                        <p className="text-muted-foreground">
                          Applications are now open for our new scholarship
                          program. Don&apos;t miss this opportunity to receive
                          financial aid.
                        </p>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-[4/3] items-center justify-center">
                      <img
                        src="/placeholder.svg"
                        width="300"
                        height="200"
                        alt="News Image 3"
                        className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
                      />
                    </CardContent>
                    <CardFooter>
                      <div>
                        <h3 className="text-lg font-semibold">
                          New Curriculum Launch
                        </h3>
                        <p className="text-muted-foreground">
                          We&apos;re excited to announce the launch of our new
                          curriculum for the Fall 2024 semester. Stay tuned for
                          more details.
                        </p>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Acme School. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Student Handbook
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function AwardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  );
}

function MedalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <path d="M11 12 5.12 2.2" />
      <path d="m13 12 5.88-9.8" />
      <path d="M8 7h8" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 18v-2h-.5" />
    </svg>
  );
}

function SchoolIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  );
}

function TrophyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
