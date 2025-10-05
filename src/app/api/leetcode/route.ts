import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://leetcode-rating-api.glitch.me/yadla_mani",
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error fetching LeetCode rating:", err);
    return NextResponse.json(
      { error: "Failed to fetch LeetCode rating" },
      { status: 500 }
    );
  }
}
