/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    path: '/portfolio',
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  trailingSlash: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: false
  }
};

export default nextConfig;
