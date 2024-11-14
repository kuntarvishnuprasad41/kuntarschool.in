import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // This will allow the build to continue even if there are TypeScript errors
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["aceternity.com"],
  },
  /* config options here */
};

export default nextConfig;
