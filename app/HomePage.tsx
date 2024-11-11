"use client";
import { useEffect, useState } from "react";
import Header from "./Home/Header";
import Footer from "./Home/Footer";

export default function HomePage() {
  // Use this pattern for any client-side only logic
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Optional: Show a skeleton or loading state while client-side code is initializing
  if (!isMounted) {
    return (
      <div className="flex flex-col min-h-[100dvh]">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1 max-w-screen">{/* Main content here */}</main>
      <Footer />
    </div>
  );
}
