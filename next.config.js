/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.zigment.ai"], // Allow images from all sources
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.zigment.ai",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
