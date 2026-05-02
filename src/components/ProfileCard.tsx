"use client";

import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { ShineBorder } from "./ui/shine-border";
import { FaFileDownload, FaMagic } from "react-icons/fa";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader as DialogModalHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Achievements } from "@/utils";
import { useEffect, useState } from "react";
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
  const { theme, setTheme } = useTheme();
  const [lastPush, setLastPush] = useState<LastPush | null>(null);
  const [time, setTime] = useState(new Date());

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

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Card className="h-full w-full rounded-xl border border-muted shadow-sm relative">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Image
            src="https://pbs.twimg.com/profile_images/2009865740640518144/jBg3i7mW_400x400.jpg"
            alt="Profile"
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <div className="flex-1">
            <h2 className="font-semibold text-lg leading-tight">Mani.</h2>
            <p className="text-sm text-muted-foreground">@mani_yadla_</p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <div className="group relative cursor-pointer">
                <ShineBorder shineColor="#D4AF37" />
                <div className="relative m-[2px] border border-yellow-400/20 bg-background p-3 transition-transform duration-300 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-8 w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                    />
                  </svg>
                </div>
              </div>
            </DialogTrigger>

            <DialogContent className="max-w-md bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl shadow-xl border border-gray-200 dark:border-neutral-700">
              <DialogModalHeader>
                <DialogTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Hall of Fame
                </DialogTitle>
                <DialogDescription className="mt-3 space-y-2 max-h-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700 pr-1">
                  <ul className="list-none text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {Achievements.map((achievement, id) => (
                      <li
                        key={id}
                        className="transition-all duration-200 hover:text-gray-800 dark:hover:text-gray-100"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </DialogDescription>
              </DialogModalHeader>
            </DialogContent>
          </Dialog>

          <Button
            onClick={handleToggle}
            className="p-1 rounded bg-white dark:bg-white hover:scale-105 transition-transform cursor-pointer"
          >
            <Image
              src="/toogle.webp"
              alt="Toggle Theme"
              width={32}
              height={32}
              className="rounded"
            />
          </Button>
        </div>
      </CardHeader>

      <div className="flex flex-col px-4 pb-4 pt-1 gap-2">
        <h1 className="text-sm text-gray-700 dark:text-gray-300">
          Building cool things. Web2, Web3, and beyond. Protocol Engineer{" "}
          <a
            href="https://x.com/0xFairblock"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            @Fairblock
          </a>
          . Ex-Intern{" "}
          <a
            href="https://x.com/Google"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            @Google
          </a>
          . 10X Hackathons, 2X Grants
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
