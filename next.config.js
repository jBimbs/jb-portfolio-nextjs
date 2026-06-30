/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // This allows production builds to successfully complete even if
  // your project has ESLint errors.
  eslint: {
    ignoreDuringBuilds: true,
  },
  // This allows production builds to successfully complete even if
  // your project has TypeScript type errors.
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig