/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sD0MFeiBVTx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

// import Hero from "@/components/shared/Hero";
import HomeContainer from "./containers/HomeContainer";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";
import { HeaderProps } from "./Home/Header";
// import Programs from "@/components/shared/Programs";
import dynamic from "next/dynamic";
import { ProgramSection } from "@/components/shared/Programs";
const Hero = dynamic(() => import("@/components/shared/Hero"));

const Programs = dynamic(() => import("@/components/shared/Programs"));

export const HomePage: React.FC<HeaderProps> = ({ SITE_DATA }) => {
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
      <CurlyDevider />
      <HomeContainer>
        <Hero SITE_DATA={SITE_DATA} />
        <EqualSpacing />
        <Programs SITE_DATA={SITE_DATA} />
        <EqualSpacing />
        <EqualSpacing />
      </HomeContainer>
      <div
        className="bg-secondary_orange_light"
        style={{
          background: `linear-gradient(50deg, #D1F2F0 40%, #FEF8EC 70%)`,
        }}
      >
        <HomeContainer>
          <div>
            <EqualSpacing />
            <EqualSpacing />

            <ProgramSection SITE_DATA={SITE_DATA} />
            <EqualSpacing />
            <EqualSpacing />
          </div>
        </HomeContainer>
      </div>
    </div>
  );
};

const CurlyDevider = () => {
  return (
    <div className="relative w-screen z-1">
      <Image
        src="/curved-border.svg"
        height={200}
        width={200}
        alt="Curved Divider"
        className=" mt-28 w-full  "
        priority
      />
    </div>
  );
};

export const EqualSpacing = () => {
  return <div className="w-screen h-[20px]  "></div>;
};

// const HomeDevider = () => {
//   return <div>hello</div>;
// };