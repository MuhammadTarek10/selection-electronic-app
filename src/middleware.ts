import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const userToken = request.cookies.get("userToken")?.value;

  if (!userToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/"],
};
