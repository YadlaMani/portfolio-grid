import { NextResponse } from "next/server";

type Repo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  stargazers_count?: number;
  language?: string;
  owner?: { login: string };
};

export async function GET() {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "portfolio-site",
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) headers["Authorization"] = `Bearer ${token}`;

  try {
    const [reposRes, userRes, orgsRes] = await Promise.all([
      fetch(
        "https://api.github.com/users/YadlaMani/repos?per_page=100&sort=updated",
        { headers, next: { revalidate: 3600 } }
      ),
      fetch("https://api.github.com/users/YadlaMani", {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(
        token
          ? "https://api.github.com/user/orgs?per_page=100"
          : "https://api.github.com/users/YadlaMani/orgs?per_page=100",
        { headers, next: { revalidate: 3600 } }
      ),
    ]);

    const [userRepos, user, orgs]: [
      Repo[],
      { public_repos: number; followers: number },
      { login: string; avatar_url: string }[],
    ] = await Promise.all([reposRes.json(), userRes.json(), orgsRes.json()]);

    const orgRepoArrays = await Promise.all(
      orgs.map((org) =>
        fetch(
          `https://api.github.com/orgs/${org.login}/repos?per_page=100&type=public`,
          { headers, next: { revalidate: 3600 } }
        ).then((r) => r.json() as Promise<Repo[]>)
      )
    );

    // Deduplicate all repos by id
    const allReposMap = new Map<number, Repo>();
    for (const repo of [...userRepos, ...orgRepoArrays.flat()]) {
      if (!allReposMap.has(repo.id)) allReposMap.set(repo.id, repo);
    }
    const allRepos = Array.from(allReposMap.values());

    // Start with personal repos as "my repos"
    const myRepos: Repo[] = allRepos.filter(
      (r) => r.owner?.login === "YadlaMani"
    );

    // For org repos with stars, check if YadlaMani contributed
    const orgStarredRepos = allRepos.filter(
      (r) => r.owner?.login !== "YadlaMani" && (r.stargazers_count ?? 0) > 0
    );

    const orgChecks = await Promise.all(
      orgStarredRepos.map(async (repo) => {
        try {
          const res = await fetch(
            `https://api.github.com/repos/${repo.full_name}/contributors?per_page=20`,
            { headers, next: { revalidate: 3600 } }
          );
          const contributors: { login: string }[] = await res.json();
          return Array.isArray(contributors) &&
            contributors.some((c) => c.login === "YadlaMani")
            ? repo
            : null;
        } catch {
          return null;
        }
      })
    );

    for (const repo of orgChecks) {
      if (repo) myRepos.push(repo);
    }

    const totalStars = myRepos.reduce(
      (sum, r) => sum + (r.stargazers_count ?? 0),
      0
    );

    const topRepos = [...myRepos]
      .filter((r) => (r.stargazers_count ?? 0) > 0)
      .sort((a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0))
      .slice(0, 4)
      .map((r) => ({
        name: r.name,
        stars: r.stargazers_count ?? 0,
        url: r.html_url,
      }));

    const langCounts: Record<string, number> = {};
    for (const repo of allRepos) {
      if (repo.language) {
        langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
      }
    }

    const orgList = orgs.map((org) => ({
      login: org.login,
      avatar: org.avatar_url,
      url: `https://github.com/${org.login}`,
    }));

    return NextResponse.json({
      totalStars,
      topRepos,
      publicRepos: user.public_repos,
      followers: user.followers,
      orgs: orgList,
    });
  } catch (err) {
    console.error("Error fetching GitHub stats:", err);
    return NextResponse.json(
      { error: "Failed to fetch GitHub stats" },
      { status: 500 }
    );
  }
}
