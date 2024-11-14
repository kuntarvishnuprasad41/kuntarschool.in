import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // This will allow the build to continue even if there are TypeScript errors
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["scontent.fccj3-1.fna.fbcdn.net"],
  },
  /* config options here */
};

export default nextConfig;
