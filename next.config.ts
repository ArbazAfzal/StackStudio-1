import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
   experimental: {
     optimizePackageImports: ["lucide-react", "framer-motion"],
     serverComponentsExternalPackages: ["google-spreadsheet", "google-auth-library", "net"],
   },
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
