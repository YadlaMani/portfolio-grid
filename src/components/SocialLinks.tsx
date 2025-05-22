import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Card } from "@/components/ui/card";
import Image from "next/image";
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
              <div className="flex items-center justify-center w-full h-full cursor-pointer rounded border border-gray-300 dark:border-white shadow-[4px_4px_0_0] dark:shadow-[4px_4px_0_0] transition-all duration-200 ease-in-out hover:shadow-[2px_2px_0_0] dark:hover:shadow-[2px_2px_0_0] hover:translate-x-[2px] hover:translate-y-[2px]">
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name === "GitHub" && <FaGithub size={24} />}
                  {item.name === "X" && <FaXTwitter size={24} />}
                  {item.name === "Gmail" && <FaEnvelope size={24} />}
                  {item.name === "Hi" && (
                    <Image
                      className="rounded-2xl"
                      src="/hi.jpeg"
                      alt="hi"
                      height={48}
                      width={48}
                    />
                  )}
                  {item.name === "LinkedIn" && <FaLinkedin size={24} />}
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
