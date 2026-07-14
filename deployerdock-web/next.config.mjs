/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/sample-deployment",
        destination: "/sample-deployment/index.html",
      },
      {
        source: "/sample-deployment/",
        destination: "/sample-deployment/index.html",
      },
    ];
  },
}

export default nextConfig

