import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  cookies().delete('goa2_tok')
  return NextResponse.redirect(new URL('/', request.url))
}