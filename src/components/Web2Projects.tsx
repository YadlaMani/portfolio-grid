"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { allProjects } from "@/utils";

const firstTile = {
  name: "Projects",
  desc: "View all projects",
  link: "/projects",
};
const updated = [firstTile, ...allProjects];

export default function Projects() {
  return (
    <Card className="lg:col-span-7 lg:row-span-2 p-0 rounded-xl overflow-hidden h-full min-h-[270px] lg:min-h-[200px] overflow-y-scroll">
      <TooltipProvider>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:grid-cols-5
      border-2 border-gray-300 dark:border-gray-700
      divide-x-2 divide-y-2 divide-gray-300 dark:divide-gray-700
      w-full h-full auto-rows-[minmax(60px,_1fr)]"
        >
          {updated.map((item, idx) => {
            const isLabel = idx === 0;
            return (
              <Tooltip key={idx}>
                <TooltipTrigger asChild>
                  <div
                    className={cn(
                      `flex justify-center items-center p-3 text-center text-xs sm:text-sm font-medium
                      transition-all duration-200 ease-out`,
                      isLabel
                        ? `bg-black text-white dark:bg-white dark:text-black font-semibold shadow-sm`
                        : `bg-white dark:bg-neutral-900 text-black dark:text-white
                          hover:bg-gray-100 dark:hover:bg-neutral-800
                          hover:scale-[1.03] hover:shadow-md`
                    )}
                  >
                    {isLabel ? (
                      item.name
                    ) : (
                      <Link
                        href={item.link}
                        target="_blank"
                        className="w-full h-full flex justify-center items-center"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs p-2 text-xs">
                  {item.desc}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </TooltipProvider>
    </Card>
  );
}
