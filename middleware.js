import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Allow only home page and essential assets
  const allowedPaths = [
    '/',
    '/portfolio',
    '/portfolio/',
    '/_next',
    '/favicon.ico',
    '/images',
    '/api'
  ];
  
  // Check if the path is allowed
  const isAllowed = allowedPaths.some(path => 
    pathname === path || pathname.startsWith(path)
  );
  
  // If not allowed, redirect to home
  if (!isAllowed) {
    const homeUrl = new URL('/portfolio', request.url);
    return NextResponse.redirect(homeUrl);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
