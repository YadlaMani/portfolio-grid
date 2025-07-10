"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageUrls } from "@/utils";

function getRandomImage(): string {
  return ImageUrls[Math.floor(Math.random() * ImageUrls.length)];
}

export default function Personal() {
  const [imageUrl] = useState<string>(getRandomImage());

  return (
    <div className="md:col-span-3 md:row-span-2 w-full h-full relative overflow-hidden rounded-lg">
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
