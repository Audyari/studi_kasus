import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: ['localhost', 'example.com'], // Add domains for image optimization
    formats: ['image/avif', 'image/webp'], // Enable modern image formats
    minimumCacheTTL: 60, // Cache images for at least 60 seconds
  },
  // Enable compression
  compress: true,
  // Configure security headers
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application
        source: '/:path*',
        headers: [
          // Prevent MIME-type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Prevent embedding the site in iframes (clickjacking protection)
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          // Enable browser's XSS protection
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Control referrer information
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Content Security Policy - restricts resources that can be loaded
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' blob: data: https:",
              "font-src 'self'",
              "connect-src 'self' https:",
              "frame-src 'none'",
              "object-src 'none'",
              "base-uri 'self'",
            ].join('; '),
          },
          // Strict Transport Security - enforces HTTPS
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // Disable browser features that might be security risks
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
        ],
      },
      {
        // Apply these headers specifically to the api routes
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },
  // Optimize webpack
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Enable tree shaking
      config.optimization.usedExports = true;
      config.optimization.providedExports = true;
    }
    return config;
  },
};

export default nextConfig;
