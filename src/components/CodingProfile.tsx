"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import PushButton from "./os/pushbutton";
import NotionCard from "./os/card";

type LastSolved = {
  title: string;
  titleSlug: string;
  lang: string;
};

export default function CodingProfile() {
  const [leetcode, setLeetcode] = useState<number | null>(null);
  const [codechef, setCodechef] = useState<number | null>(null);
  const [lastSolved, setLastSolved] = useState<LastSolved | null>(null);

  useEffect(() => {
    axios
      .get("/api/leetcode")
      .then((res) => {
        setLeetcode(res.data?.rating ?? null);
        setLastSolved(res.data?.lastSolved ?? null);
      })
      .catch(console.error);

    axios
      .get("/api/codechef")
      .then((res) => {
        const rating = res.data?.data?.rating?.currentRatingNumber ?? null;
        setCodechef(rating);
      })
      .catch(() => setCodechef(1813));
  }, []);

  return (
    <Card className="h-full w-full overflow-hidden rounded-lg shadow-lg bg-red-400">
      <CardContent className="h-full flex flex-col p-3 gap-0">
        {/* Top: LeetCode | CodeChef side by side */}
        <div className="flex-1 flex items-center">
          {/* LeetCode */}
          <Link
            href="https://leetcode.com/yadla_mani/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center gap-3"
          >
            <PushButton>
              <div className="rounded p-1 h-10 w-10 flex items-center justify-center">
                <Image
                  width={24}
                  height={24}
                  alt="leetcode"
                  src="/leetcode-color.png"
                  className="rounded"
                />
              </div>
            </PushButton>
            <NotionCard>
              <div className="h-10 w-16 flex items-center justify-center">
                <h2 className="text-base font-bold leading-none">
                  {leetcode ?? "-"}
                </h2>
              </div>
            </NotionCard>
          </Link>

          {/* Vertical divider */}
          <div className="w-px self-stretch bg-black/40 mx-1" />

          {/* CodeChef */}
          <Link
            href="https://www.codechef.com/users/mani_yadla"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center gap-3"
          >
            <PushButton>
              <div className="rounded p-1 h-10 w-10 flex items-center justify-center">
                <Image
                  width={28}
                  height={28}
                  alt="codechef"
                  src="/code-chef.svg"
                  className="rounded"
                />
              </div>
            </PushButton>
            <NotionCard>
              <div className="h-10 w-16 flex items-center justify-center">
                <h2 className="text-base font-bold leading-none">
                  {codechef ?? "1813"}
                </h2>
              </div>
            </NotionCard>
          </Link>
        </div>

        {/* Bottom: Last Solved */}
        <div className="border-t border-black/40 pt-2.5 pb-1">
          <p className="text-[10px] uppercase tracking-widest text-white text-bold font-semibold mb-1.5">
            Last Solved
          </p>
          {lastSolved ? (
            <Link
              href={`https://leetcode.com/problems/${lastSolved.titleSlug}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-2 group"
            >
              <span className="text-[12px] font-bold text-red-950 leading-tight group-hover:underline line-clamp-2">
                {lastSolved.title}
              </span>
              <ExternalLink size={12} className="text-white/90 shrink-0" />
            </Link>
          ) : (
            <span className="text-[11px] text-red-900/60">-</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
