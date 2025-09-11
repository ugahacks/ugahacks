import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Skip middleware for all routes for now - we'll handle auth on the client side
    // This prevents any middleware-related issues
    return NextResponse.next()
}

export const config = {
    matcher: [
        // Disable middleware for now
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
}