import { NextResponse } from "next/server"

export function middleware(request) {
    if (!request.cookies.has("userToken") || !request.cookies.has("userId")) {
        return NextResponse.redirect(new URL("/login", request.url))
	}
}

export const config = {
	matcher: "/calendar/:path*"
}