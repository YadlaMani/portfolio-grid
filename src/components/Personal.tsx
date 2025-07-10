"use client";

import Image from "next/image";
import { useState } from "react";

const ImageUrls: string[] = [
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.9alfy0mwQS0Rjp9xxXSNNAHaEK%3Fpid%3DApi&f=1&ipt=c36c4374ec659fab8e1836a5efc60d2c68d8d8d63711c9ccba561e4ad424c9f1&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.2L8GyVPTXVq-2UCZmnZENwHaEK%3Fpid%3DApi&f=1&ipt=b5a832b03dc204391ae3c64e74ae0cbdf8f9b3c1f336441993db9fdb5793bdbd&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.UNj0SqzfJdOh7YZOdUgpsAHaFh%3Fpid%3DApi&f=1&ipt=82fc11291626c2f949f847cee706be79752b2323b9424ee3f760c52de5bc481e&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.Ew7Fr5ctlWOyvUa_HUkL3AHaEK%3Fr%3D0%26pid%3DApi&f=1&ipt=0f3cea29acd6ed8d6fc55cc51a6c6863c5e5a825d0e3e8f61b9c4270c01ec7b8&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.UmRGRhKq4z_bpKfj5JDndAAAAA%3Fr%3D0%26pid%3DApi&f=1&ipt=6d5a50834bbfbf0b7f6e08ba1e9a51918f2f7e5e3c2125369fa0ad55d58a4cb0&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.gHsU_WXtzslxs-c_-97RxgHaEK%3Fr%3D0%26pid%3DApi&f=1&ipt=c707337c33ee59c1b669ed7fe8f75844f5497c49621f3760336334d8b9b4e3a3&ipo=images",
];

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
