"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export default function ProfileCard() {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Card className="col-span-6 row-span-2 rounded-xl border border-muted shadow-sm">
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
      <CardContent>
        <h1>
          Building cool things on Web2, Web3, and beyond. Member @SuperteamIN
        </h1>
      </CardContent>
    </Card>
  );
}
