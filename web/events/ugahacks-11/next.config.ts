import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    qualities: [75, 100], // Add 100 (and 75 for the default)
  },
  output: "standalone",
};

export default nextConfig;
