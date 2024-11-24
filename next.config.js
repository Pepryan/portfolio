const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    path: '/portfolio',
  },
  experimental: {
    mdxRs: true,
  },
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  trailingSlash: true,
  transpilePackages: ['next-mdx-remote'],
  pageExtensions: ['js', 'jsx', 'mdx'],
  productionBrowserSourceMaps: false,
  webpack: (config, { dev, isServer }) => {
    // Disable source maps in production
    if (!dev) {
      config.devtool = false;
    }
    return config;
  },
};

module.exports = nextConfig;