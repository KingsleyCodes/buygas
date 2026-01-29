import { NextResponse } from 'next/server';

export function middleware(request) {
  // 1. Check if the "auth_token" cookie exists
  const token = request.cookies.get('auth_token');
  
  // 2. Get the current path the user is trying to access
  const { pathname } = request.nextUrl;

  // 3. Logic: If there is no token and they aren't already on the login page...
  if (!token && pathname !== '/login') {
    // Redirect them to the login page
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 4. Logic: If they ARE logged in and try to go to /login, send them to the deck
  if (token && pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Otherwise, let them proceed
  return NextResponse.next();
}

// This "matcher" ensures the middleware doesn't block your images or CSS
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