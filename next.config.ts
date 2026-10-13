import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

/** Set by the GitHub Pages workflow (e.g. "/ForAChild"); empty for local dev or a custom domain. */
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: {
    root: rootDir,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
