"use client";

import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Spotify } from "react-spotify-embed";
import { FaFileDownload, FaMagic } from "react-icons/fa";

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
            src="https://pbs.twimg.com/profile_images/1905303184111009793/MqSsO-dO_400x400.jpg"
            alt="Profile"
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <div className="flex-1">
            <h2 className="font-semibold text-lg leading-tight">Mani.</h2>
            <p className="text-sm text-muted-foreground">@mani_yadla_</p>
          </div>

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
      <div className="flex flex-col m-4 ">
        <div>
          <h1>
            Building cool things on Web2, Web3, and beyond. Member{" "}
            <a
              href="https://x.com/SuperteamIN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              @SuperteamIN
            </a>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between ">
          <div className="flex items-center gap-2">
            <a
              href="https://drive.google.com/uc?export=download&id=1dmVV_zeU_XnA6Oev8IQDeTJihdjABtyE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="flex items-center gap-2">
                <FaFileDownload className="w-4 h-4" />
                Resume
              </Button>
            </a>
            <a
              href="https://profuse-name-f33.notion.site/Mani-Yadla-proof-of-work-1a127f6bc69a8024b804e85ddbe1cf10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="flex items-center gap-2">
                <FaMagic className="w-4 h-4" />
                {`I'm Feeling Lucky`}
              </Button>
            </a>
          </div>

          <div className="backdrop:blur-sm ">
            <Spotify
              wide
              width={300}
              link="https://open.spotify.com/track/0fLGrGCrbziOu3dnjQMCWS?si=4472348a63dd4f83"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
