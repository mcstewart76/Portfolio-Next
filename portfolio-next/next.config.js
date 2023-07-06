/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};
module.exports = {
  env: {
    SERVER: process.env.SERVER,
  },
};

module.exports = nextConfig
