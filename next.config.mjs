/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.terlingerhoeve.pixelplus.nl",
      },
      {
        protocol: "http",
        hostname: "www.booking-plus.nl",
      },
    ],
  },
};

export default nextConfig;
