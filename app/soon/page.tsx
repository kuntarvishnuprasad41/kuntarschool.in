/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sD0MFeiBVTx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

// import Hero from "@/components/shared/Hero";

import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";

export const HomePage = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={1.4}
        maxSize={6.4}
        particleDensity={3}
        className="absolute inset-0 lg:h-[550px] h-[770px] w-full z-0 "
        particleColor="#19C1B6"
      />
      <div>
        <div className="relative z-1 w-full flex justify-between gap-2 mt-24 min-h-[300px]">
          {/* Adjusted min-height */}
          <div className="flex-col sm:w-full justify-center text-center h-screen items-center">
            <div>
              <p className="lg:text-[22px] text-creamy_blue font-semibold text-[20px] min-h-[30px]">
                Coming Soon...
              </p>
            </div>
            <div className="lg:w-[500px]  h-[300px] hidden md:block lg:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
