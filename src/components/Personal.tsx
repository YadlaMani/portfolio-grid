"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ImageUrls } from "@/utils";

function getRandomImage(): string {
  return ImageUrls[Math.floor(Math.random() * ImageUrls.length)];
}

export default function Personal() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setImageUrl(getRandomImage());
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-full bg-neutral-900 rounded-lg animate-pulse" />;
  }

  return (
    <div className="w-full h-full relative overflow-hidden rounded-lg">
      <Image
        src={imageUrl}
        alt="Random"
        fill
        className="object-cover transition-opacity duration-500"
        priority
      />
    </div>
  );
}
