/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.terlingerhoeve.pixelplus.nl",
      },
    ],
  },
};

export default nextConfig;
