import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Add security headers to every response
  const response = NextResponse.next();

  // Log the request path for monitoring (this uses the request parameter)
  console.log(`Processing request for: ${request.nextUrl.pathname}`);

  // Prevent MIME-type sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff');

  // Prevent embedding the site in iframes (clickjacking protection)
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');

  // Enable browser's XSS protection
  response.headers.set('X-XSS-Protection', '1; mode=block');

  // Control referrer information
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Set permissions policy
  response.headers.set(
    'Permissions-Policy',
    'geolocation=(), microphone=(), camera=()'
  );

  return response;
}

// Apply middleware to all routes except static assets
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
