import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'directus-production-2529.up.railway.app',
        pathname: '/assets/**',
      },
    ],
  },
};

export default nextConfig;
