/* eslint-disable @next/next/no-img-element */
import React from "react";
 
import { Card, CardContent, CardFooter } from "@/components/ui/card";
 

function NewsAndAnnouncements() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 sm:-mt-0 mt-28">
      <div className="container px-4 md:px-6">
        <div className="space-y-4">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              News & Announcements
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Stay up-to-date with the latest news and announcements from Acme
              School.
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
                    <h3 className="text-lg font-semibold">Open House Event</h3>
                    <p className="text-muted-foreground">
                      Join us for our annual open house event on May 15, 2024.
                      Explore our campus and learn about our academic programs.
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
                      Applications are now open for our new scholarship program.
                      Don&apos;t miss this opportunity to receive ___.
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
                      curriculum for the 2024 . Stay tuned for more details.
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsAndAnnouncements;
