import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
      {
        protocol: "https",
        hostname: "skillicons.dev",
      },
    ],
  },
   experimental: {
     optimizePackageImports: ["lucide-react", "framer-motion"],
   },
   serverExternalPackages: ["google-spreadsheet", "google-auth-library", "net"],
   webpack: (config: any) => {
     config.externals.push({
       net: "commonjs net",
       tls: "commonjs tls",
       os: "commonjs os",
     });
     return config;
   },
};

export default nextConfig;
