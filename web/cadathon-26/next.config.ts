import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "standalone",
  // The repo root has its own lockfiles, so Next infers the wrong workspace
  // root. cadathon-26 is a standalone yarn project - pin it explicitly.
  turbopack: {
    root: __dirname,
  },
  images: {
    // Some art (the pit-stop graphic, sponsor/partner logos dropped into
    // public/) is SVG, which next/image refuses to optimize by default since
    // an SVG can carry a script. Every source here is either a build-time
    // asset import or a file the site owner places in public/ themselves --
    // never user-uploaded -- so that risk doesn't apply; the CSP and
    // Content-Disposition below are the standard mitigation Next's own docs
    // recommend when opting back in, in case that ever changes.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
