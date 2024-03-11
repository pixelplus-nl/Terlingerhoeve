/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "terlingerhoeve.local",
      },
    ],
  },
};

export default nextConfig;
