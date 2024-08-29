import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'], 
  },
  swcMinify: true,
  experimental: { 
    legacyBrowsers: false, 
  }, 
  webpack(config, { dev }) {
    if (process.env.ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin());
    }
    return config;
  }
};

export default nextConfig;
