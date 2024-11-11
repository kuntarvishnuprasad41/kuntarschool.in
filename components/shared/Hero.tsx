import React from "react";
import { SparklesCore } from "../ui/sparkles";

function Hero() {
  return (
    <div>
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={1.4}
        maxSize={6.4}
        particleDensity={15}
        className="absolute inset-0 h-[683px] w-full z-0"
        particleColor="#19C1B6"
      />
      <div className="absolute mt-20 z-10 flex items-center justify-center h-[400px] w-screen text-black">
        Hello
      </div>
    </div>
  );
}

export default Hero;
