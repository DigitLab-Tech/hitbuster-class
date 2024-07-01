import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  if (
    !request.nextUrl.pathname.startsWith("/login") &&
    !cookies().get("access")
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
