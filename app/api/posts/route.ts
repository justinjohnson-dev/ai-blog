import { NextRequest, NextResponse } from "next/server";
import { getPostsMeta } from "@/lib/post";

export async function GET(request: NextRequest) {
  // get params from request
  const pageParam = request.nextUrl.searchParams.get("page");
  const limitParam = request.nextUrl.searchParams.get("limit");

  // convert string parameters to numbers
  const page = pageParam !== null ? parseInt(pageParam) : undefined;
  const limit = limitParam !== null ? parseInt(limitParam) : undefined;

  // get posts meta
  const postsMeta = await getPostsMeta(page, limit);
  return NextResponse.json(postsMeta);
}
