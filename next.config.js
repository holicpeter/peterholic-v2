/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimalizácia pre SEO
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Compression
  compress: true,
  // Poweredby header removal for security
  poweredByHeader: false,
}

module.exports = nextConfig
