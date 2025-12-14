"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageUrls } from "@/utils";

function getRandomImage(): string {
  return ImageUrls[Math.floor(Math.random() * ImageUrls.length)];
}

export default function Personal() {
  const [imageUrl] = useState<string>(getRandomImage());
  // mani the best
  return (
    <div className="lg:col-span-3 lg:row-span-2 w-full h-full min-h-[250px] lg:min-h-[100px] relative overflow-hidden rounded-lg">
      <Image
        src={imageUrl}
        alt="Random"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
