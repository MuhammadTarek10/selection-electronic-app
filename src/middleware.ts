import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const userToken = request.cookies.get("token")?.value;

  if (!userToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
};
