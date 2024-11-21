/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.zigment.ai",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.worldometers.info",
        port: "",
      }
    ],
  },
};

module.exports = nextConfig;
