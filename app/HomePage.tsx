/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sD0MFeiBVTx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Hero from "@/components/shared/Hero";
import HomeContainer from "./containers/HomeContainer";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";
import { HeaderProps } from "./Home/Header";

export const HomePage: React.FC<HeaderProps> = ({ SITE_DATA }) => {
  return (
    <div className="relative   ">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={1.4}
        maxSize={6.4}
        particleDensity={3}
        className="relative inset-0 h-[550px] w-full z-0"
        particleColor="#19C1B6"
      />

      <HomeDevider />

      <HomeContainer>
        {/* {JSON.stringify(data)} */}

        <Hero SITE_DATA={SITE_DATA} />
        <div className="relative ">xyz</div>
      </HomeContainer>
    </div>
  );
};

const HomeDevider = () => {
  return (
    <Image
      src="/curved-border.svg"
      height={200}
      width={200}
      alt="hgello"
      className="relative -mt-[405px] w-screen -mb-[60px]"
    />
  );
};