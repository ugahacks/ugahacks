import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // The repo root has its own lockfiles, so Next infers the wrong workspace
  // root. cadathon-26 is a standalone yarn project - pin it explicitly.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
