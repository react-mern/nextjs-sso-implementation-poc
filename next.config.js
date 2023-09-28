/** @type {import('next').NextConfig} */
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
  reactStrictMode: true,
  experimental: {
    serverActions: false,
  },
};

module.exports = nextConfig;
