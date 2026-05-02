import { NextResponse } from "next/server";

const BASE = "https://alfa-leetcode-api.onrender.com";
const USER = "yadla_mani";

// Uses alfa-leetcode-api: https://github.com/alfaarghya/alfa-leetcode-api
export async function GET() {
  try {
    const [contestRes, submissionRes] = await Promise.all([
      fetch(`${BASE}/${USER}/contest`, { next: { revalidate: 3600 } }),
      fetch(`${BASE}/${USER}/acSubmission?limit=1`, {
        next: { revalidate: 3600 },
      }),
    ]);

    const [contestData, submissionData] = await Promise.all([
      contestRes.json(),
      submissionRes.json(),
    ]);

    const rating = contestData?.contestRating
      ? Math.round(contestData.contestRating)
      : null;

    const last = submissionData?.submission?.[0] ?? null;
    const lastSolved = last
      ? {
          title: last.title as string,
          titleSlug: last.titleSlug as string,
          lang: last.lang as string,
        }
      : null;

    return NextResponse.json({ rating: rating ?? 1945, lastSolved });
  } catch (err) {
    console.error("Error fetching LeetCode data:", err);
    return NextResponse.json({ rating: 1945, lastSolved: null });
  }
}
