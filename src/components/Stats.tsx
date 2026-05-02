"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Package, Users } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";

type TopRepo = { name: string; stars: number; url: string };
type Org = { login: string; avatar: string; url: string };

type GitHubStats = {
  totalStars: number;
  topRepos: TopRepo[];
  publicRepos: number;
  followers: number;
  orgs: Org[];
};

function StarBar({ pct }: { pct: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.style.width = `${pct}%`;
  }, [pct]);
  return (
    <div
      ref={ref}
      className="h-full bg-foreground rounded-full transition-all duration-700"
    />
  );
}

export default function Stats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);

  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then(setStats)
      .catch(console.error);
  }, []);

  const statItems = [
    { label: "Stars", value: stats?.totalStars ?? "-", icon: Star },
    { label: "Repos", value: stats?.publicRepos ?? "-", icon: Package },
    { label: "Followers", value: stats?.followers ?? "-", icon: Users },
  ];

  const maxStars = stats?.topRepos?.[0]?.stars ?? 1;

  return (
    <Card className="h-full w-full flex flex-col overflow-y-auto scrollbar-notion">
      <CardContent className="flex-1 flex flex-col gap-3 px-4 ">
        {stats?.orgs && stats.orgs.length > 0 && (
          <div className="flex flex-col gap-1">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
              Organizations
            </p>
            <TooltipProvider delayDuration={100}>
              <div className="flex flex-wrap gap-2">
                {stats.orgs.map((org) => (
                  <Tooltip key={org.login}>
                    <TooltipTrigger asChild>
                      <Link
                        href={org.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block border border-border rounded shadow-[2px_2px_0_0] dark:shadow-[2px_2px_0_0_rgba(255,255,255,0.06)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 overflow-hidden"
                      >
                        <Image
                          src={org.avatar}
                          alt={org.login}
                          width={28}
                          height={28}
                          className="rounded"
                        />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="text-xs">
                      {org.login}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </div>
        )}

        <div className="grid grid-cols-3 gap-2">
          {statItems.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-2.5 py-2 border border-border rounded shadow-[2px_2px_0_0] dark:shadow-[2px_2px_0_0_rgba(255,255,255,0.06)]"
            >
              <Icon size={12} className="text-muted-foreground shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold leading-none">{value}</span>
                <span className="text-[10px] text-muted-foreground mt-0.5 leading-none">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2.5">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
            Top Repos
          </p>
          <div className="flex flex-col gap-2">
            {(stats?.topRepos ?? []).map(({ name, stars, url }) => (
              <Link
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group"
              >
                <span className="text-[10px] font-mono text-muted-foreground group-hover:text-foreground transition-colors w-24 shrink-0 truncate">
                  {name}
                </span>
                <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                  <StarBar pct={Math.round((stars / maxStars) * 100)} />
                </div>
                <div className="flex items-center gap-0.5 shrink-0 w-10 justify-end">
                  <Star size={9} className="text-muted-foreground" />
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {stars}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
