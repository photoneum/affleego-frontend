import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
      {
        hostname: "app.affleego.com",
      },
      {
        hostname: "images.pexels.com",
      },
      {
        hostname: "framerusercontent.com",
      },
    ],
  },
};

export default nextConfig;
