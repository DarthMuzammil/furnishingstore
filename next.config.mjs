// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.ikea.com',
          pathname: '/**',
        },
      ],
    },
  };
  

export default nextConfig;
