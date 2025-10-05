import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://hades.strawhats.tech/api/codechef/mani_yadla",
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error fetching CodeChef rating:", err);
    return NextResponse.json(
      { error: "Failed to fetch CodeChef rating" },
      { status: 500 }
    );
  }
}
