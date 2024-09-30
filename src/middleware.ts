import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL('/home', request.url))
}

//на любой странице about или dashboard сработает функция выше
export const config = {
    matcher: ['/about/:path*', '/dashboard/:path*'],
}