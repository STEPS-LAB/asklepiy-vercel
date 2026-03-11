import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Create response and let it pass through without redirects
  const response = NextResponse.next();

  // Set locale cookie based on current preference (if exists)
  const savedLocale = request.cookies.get('locale')?.value;
  if (!savedLocale) {
    // Set default locale cookie
    response.cookies.set('locale', 'ua', {
      path: '/',
      maxAge: 31536000,
      sameSite: 'lax',
    });
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
