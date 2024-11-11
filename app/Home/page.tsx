/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sD0MFeiBVTx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
 
import Header from "./Header";
import Footer from "./Footer";
import Hero from "@/components/sections/Hero";
import Achievements from "@/components/sections/Achievements";
import NewsAndAnnouncements from "@/components/sections/NewsAndAnnouncements";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <Hero />
        {/* Hero */}
        {/* Achievements */}
        <Achievements />
        {/* Achievements */}
        {/* News And Annoucements */}
        <NewsAndAnnouncements />
        {/* News And Annoucements */}
      </main>

      <Footer />
    </div>
  );
} 