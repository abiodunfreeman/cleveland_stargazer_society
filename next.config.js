/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['apod.nasa.gov', 'api.nasa.gov'],
  },
};

module.exports = nextConfig;
