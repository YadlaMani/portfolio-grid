"use client";

import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { useTheme } from "next-themes";
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

export default function ProfileCard() {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Card className="md:col-span-6 md:row-span-2 rounded-xl border border-muted shadow-sm relative">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Image
            src="https://pbs.twimg.com/profile_images/1982823954227036160/kzyOVeYu_400x400.jpg"
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
              <FaTrophy className="inline-block w-7 h-7 text-yellow-500 hover:text-yellow-600 transition-colors cursor-pointer" />
            </DialogTrigger>

            <DialogContent className="max-w-md bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl shadow-xl border border-gray-200 dark:border-neutral-700">
              <DialogModalHeader>
                <DialogTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Hall of Fame
                </DialogTitle>
                <DialogDescription className="mt-3 space-y-2 max-h-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700 pr-1">
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
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

      <div className="flex flex-col m-4">
        <div className="flex flex-col m-4">
          <h1 className="text-sm text-gray-700 dark:text-gray-300">
            Building cool things. Web2, Web3, and beyond. Member{" "}
            <a
              href="https://x.com/SuperteamIN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              @SuperteamIN
            </a>
            . Ex-Intern{" "}
            <a
              href="https://x.com/SuperteamIN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              @Google
            </a>
            . 9X Hackathons, 2X Grants
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div className="flex items-center gap-2">
            <a
              href="https://drive.google.com/file/d/1my2w0k-U59HFdzQNFq9V_F2b8RL8ItwE/view?usp=sharing"
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
        </div>
      </div>
    </Card>
  );
}
