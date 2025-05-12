import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { socialLinks } from "@/utils";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <TooltipProvider>
      <Card className="col-span-3 row-span-1 grid grid-cols-5 gap-4 p-4 items-center">
        {socialLinks.map((item) => (
          <Tooltip key={item.name}>
            <TooltipTrigger asChild>
              <div className="flex items-center justify-center w-full h-full cursor-pointer rounded border border-gray-300 shadow-[4px_4px_0_0_rgba(0,0,0,0.8)] transition hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.5)]">
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="rounded p-1 "
                  />
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent side="top" className="text-xs font-medium">
              {item.name}
            </TooltipContent>
          </Tooltip>
        ))}
      </Card>
    </TooltipProvider>
  );
}
