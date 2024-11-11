/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sD0MFeiBVTx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Hero from "@/components/shared/Hero";
import { SparklesCore } from "@/components/ui/sparkles";

export default function HomePage() {
  return (
    <div className="relative   ">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={1.4}
        maxSize={6.4}
        particleDensity={5}
        className="absolute inset-0 h-screen w-full z-0"
        particleColor="#19C1B6"
      />
      <Hero />
    </div>
  );
}
