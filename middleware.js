import { NextResponse } from 'next/server';

export function middleware(request) {
  const sessionCookie = request.cookies.get('session')?.value;
  const isLoggedIn = Boolean(sessionCookie) && sessionCookie === process.env.SESSION_SECRET;
  const isLoginPage = request.nextUrl.pathname === '/login';

  if (!isLoggedIn && !isLoginPage) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (isLoggedIn && isLoginPage) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
