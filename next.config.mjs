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
};

export default nextConfig;
