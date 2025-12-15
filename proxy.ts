import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

/**
 * Domain-based routing
 * - profile.pongpitchit.in.th -> serves routes under /profile
 *
 * Notes:
 * - We avoid rewriting Next internals and static assets.
 * - We use x-forwarded-host first (Vercel/proxies), then host.
 */
export function proxy(req: NextRequest) {
  const host = req.headers.get('x-forwarded-host') ?? req.headers.get('host') ?? ''
  const hostname = host.split(':')[0].toLowerCase()

  // Skip Next internals / APIs
  const pathname = req.nextUrl.pathname
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next()
  }

  // Skip typical “asset file” requests (anything with a file extension)
  // e.g. /icon-light-32x32.png, /robots.txt, /fonts/foo.woff2
  if (pathname.includes('.')) {
    return NextResponse.next()
  }

  // Subdomain -> rewrite to /profile
  if (hostname === 'profile.pongpitchit.in.th') {
    // Already on /profile...
    if (pathname === '/profile' || pathname.startsWith('/profile/')) {
      return NextResponse.next()
    }

    const url = req.nextUrl.clone()
    url.pathname = pathname === '/' ? '/profile' : `/profile${pathname}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
