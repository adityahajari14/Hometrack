/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.propertyfinder.ae',
        pathname: '/property/**',
      },
      {
        protocol: 'https',
        hostname: 'pf-graph-images-production.s3.ap-southeast-1.amazonaws.com',
        pathname: '/ae/**',
      },
    ],
  },
};

export default nextConfig;
