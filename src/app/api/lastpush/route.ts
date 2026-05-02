import { NextResponse } from "next/server";

export async function GET() {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "portfolio-site",
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) headers["Authorization"] = `Bearer ${token}`;

  try {
    // Fetch latest public events for the user
    const res = await fetch(
      "https://api.github.com/users/YadlaMani/events/public?per_page=10",
      { headers, next: { revalidate: 600 } }
    );
    const events = await res.json();
    
    // Find the latest PushEvent or CreateEvent (for new repos/branches)
    const lastActivity = Array.isArray(events) ? events.find(
      (e: any) => e.type === "PushEvent" || e.type === "CreateEvent"
    ) : null;

    if (!lastActivity) {
      // Fallback to the old method if no recent push events are found in events
      const repoRes = await fetch(
        "https://api.github.com/users/YadlaMani/repos?sort=pushed&per_page=1",
        { headers, next: { revalidate: 1800 } }
      );
      const repos = await repoRes.json();
      const repo = repos?.[0];
      if (!repo) return NextResponse.json({ repo: null });

      return NextResponse.json({
        repo: {
          name: repo.name,
          url: repo.html_url,
          pushedAt: repo.pushed_at,
        },
      });
    }

    return NextResponse.json({
      repo: {
        name: lastActivity.repo.name.split("/")[1] || lastActivity.repo.name,
        fullName: lastActivity.repo.name,
        url: `https://github.com/${lastActivity.repo.name}`,
        pushedAt: lastActivity.created_at,
        type: lastActivity.type
      },
    });
  } catch (err) {
    console.error("Error fetching last push:", err);
    return NextResponse.json({ repo: null });
  }
}
