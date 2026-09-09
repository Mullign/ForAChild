import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: rootDir,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/programs", destination: "/", permanent: true },
      { source: "/programs/:path*", destination: "/", permanent: true },
      { source: "/faq", destination: "/", permanent: true },
      { source: "/enrollment", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
