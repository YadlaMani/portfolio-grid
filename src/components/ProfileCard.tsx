"use client";

import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaFileDownload, FaMagic, FaTrophy } from "react-icons/fa";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader as DialogModalHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Achievements } from "@/utils";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { GitCommitHorizontal } from "lucide-react";

type LastPush = {
  name: string;
  fullName?: string;
  url: string;
  pushedAt: string;
};

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

export default function ProfileCard() {
  const [lastPush, setLastPush] = useState<LastPush | null>(null);
  const [time, setTime] = useState(new Date());
  const [visitCount, setVisitCount] = useState<string>("...");
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    fetch("/api/visits")
      .then((r) => r.json())
      .then((d) => setVisitCount(d.count.toLocaleString()))
      .catch(() => setVisitCount("2,431"));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = time.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  useEffect(() => {
    fetch("/api/lastpush")
      .then((r) => r.json())
      .then((d) => setLastPush(d.repo ?? null))
      .catch(console.error);
  }, []);

  return (
    <Card className="h-full w-full rounded-xl border border-muted shadow-sm relative">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Image
            src="/dp.jpg"
            alt="Profile"
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <div className="flex-1">
            <h2 className="font-semibold text-lg leading-tight">Mani Yadla</h2>
            <p className="text-sm text-muted-foreground">@mani_yadla_</p>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 mr-1">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-tight whitespace-nowrap">
              {visitCount} visits
            </span>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <div className="flex items-center gap-2 px-3 py-2 cursor-pointer rounded border border-red-400 shadow-[4px_4px_0_0_white] transition-all duration-200 ease-in-out hover:shadow-[2px_2px_0_0_white] hover:translate-x-0.5 hover:translate-y-0.5 text-red-400 text-sm font-medium">
                <FaTrophy className="w-4 h-4" />
                Achievements
              </div>
            </DialogTrigger>

            <DialogContent className="max-w-md bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl shadow-xl border border-gray-200 dark:border-neutral-700">
              <DialogModalHeader>
                <DialogTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Hall of Fame
                </DialogTitle>
                <DialogDescription className="mt-3 space-y-2 max-h-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700 pr-1">
                  <ul className="list-none text-sm text-gray-600 dark:text-gray-300 space-y-2.5">
                    {Achievements.map((achievement, id) => (
                      <li
                        key={id}
                        className="flex flex-col leading-snug border-l-2 border-red-400/60 pl-2.5"
                      >
                        <span className="font-semibold text-gray-800 dark:text-gray-100">
                          {achievement.award}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {achievement.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </DialogDescription>
              </DialogModalHeader>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>

      <div className="flex flex-col px-4 pb-4 pt-1 gap-2">
        <h1 className="text-sm text-gray-700 dark:text-gray-300">
          I do a bit of everything protocols, full-stack, and the occasional fun
          weekend hack. Worked on confidential transfers{" "}
          <a
            href="https://x.com/0xFairblock"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            @Fairblock
          </a>
          , Go + infra{" "}
          <a
            href="https://x.com/Google"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            @Google
          </a>
          . 10X hackathon wins, 2 grants.
        </h1>

        <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
          <div className="flex items-center gap-2">
            <a
              href="https://drive.google.com/file/d/1G6c9s82-CO73UAbHGYioDNcqr5m_8BWe/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="flex items-center gap-2 cursor-pointer">
                <FaFileDownload className="w-4 h-4" />
                Resume
              </Button>
            </a>

            <a
              href="https://profuse-name-f33.notion.site/Mani-Yadla-proof-of-work-1a127f6bc69a8024b804e85ddbe1cf10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="flex items-center gap-2 cursor-pointer">
                <FaMagic className="w-4 h-4" />
                {`I'm Feeling Lucky`}
              </Button>
            </a>
          </div>

          {lastPush && (
            <Link
              href={lastPush.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 group min-w-0"
            >
              <GitCommitHorizontal
                size={12}
                className="text-muted-foreground shrink-0"
              />
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground leading-none">
                  latest activity
                </span>
                <span className="text-[11px] font-mono font-medium truncate group-hover:underline leading-tight">
                  {lastPush.fullName || lastPush.name}
                  <span className="text-muted-foreground font-normal ml-1">
                    · {timeAgo(lastPush.pushedAt)}
                  </span>
                </span>
              </div>
            </Link>
          )}
        </div>

        {/* Separator */}
        <div className="h-px bg-muted/50 my-1" />

        {/* Interactive Status Footer */}
        <div className="flex items-end justify-between pt-2">
          <div className="flex flex-col">
            <span className="text-[11px] italic text-muted-foreground/60 leading-tight">
              &quot;Life imitating art&quot;
            </span>
          </div>

          <div className="flex flex-col items-end gap-0.5">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-tight">
                Building stuff for now
              </span>
            </div>
            <span className="text-[9px] font-mono text-muted-foreground/80 tracking-tighter">
              {formattedDate}, {formattedTime}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
