import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://api.counterapi.dev/v1/mani-portfolio/visits/up", {
      cache: "no-store",
    });
    const data = await res.json();
    return NextResponse.json({ count: data.count });
  } catch (err) {
    console.error("Error updating counter:", err);
    return NextResponse.json({ count: 2431 }); // Fallback
  }
}
