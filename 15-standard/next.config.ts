import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "three-nextjs-express.vercel.app",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
