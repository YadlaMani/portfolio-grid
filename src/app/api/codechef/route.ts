import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://www.codechef.com/users/mani_yadla", {
      cache: "no-store",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
      },
    });
    const html = await res.text();
    const match = html.match(/rating-number">\s*(\d+)/);
    if (!match) throw new Error("Rating not found in CodeChef profile page");

    const rating = Number(match[1]);
    return NextResponse.json({ data: { rating: { currentRatingNumber: rating } } });
  } catch (err) {
    console.error("Error fetching CodeChef rating:", err);
    return NextResponse.json(
      { error: "Failed to fetch CodeChef rating" },
      { status: 500 }
    );
  }
}
