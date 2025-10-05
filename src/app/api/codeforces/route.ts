import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://codeforces.com/api/user.info?handles=mani_7_",
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error fetching Codeforces rating:", err);
    return NextResponse.json(
      { error: "Failed to fetch Codeforces rating" },
      { status: 500 }
    );
  }
}
