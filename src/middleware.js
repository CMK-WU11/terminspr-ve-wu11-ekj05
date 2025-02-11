import { NextResponse } from "next/server"

export function middleware(request) {
    if (!request.cookies.has("userToken") || !request.cookies.has("userId")) {
        console.log("middleware failed")
        return NextResponse.redirect(new URL("/login", request.url))
	}
    console.log("middleware passed")
}

export const config = {
	matcher: "/calendar/:path*"
}