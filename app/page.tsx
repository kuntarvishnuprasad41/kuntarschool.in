// app/page.tsx
"use client";
import { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
import HomePage from "./HomePage";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const minimumLoadTime = 500; // milliseconds

  useEffect(() => {
    const startTime = Date.now();

    const mount = async () => {
      // Calculate remaining time to meet minimum load time
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumLoadTime - elapsedTime);

      // Wait for remaining time if needed
      if (remainingTime > 0) {
        await new Promise((resolve) => setTimeout(resolve, remainingTime));
      }

      setMounted(true);
    };

    mount();
  }, []);

  // Handle loading state
  if (!mounted) {
    return <LoadingPage />;
  }

  return <HomePage />;
}
