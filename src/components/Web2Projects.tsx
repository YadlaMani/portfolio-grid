"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const allProjects = [
  {
    name: "Nekoma",
    link: "https://github.com/YadlaMani/Nekoma",
    desc: "AI agent platform on Base. Smart wallet w/ programmable flows & gasless txs. Base Hackathon 2025 winner.",
  },
  {
    name: "Wakey-Wakey",
    link: "https://github.com/YadlaMani/wakey-wakey",
    desc: "Decentralized uptime monitoring network w/ real-time analytics. Superteam grant winner.",
  },
  {
    name: "Wisk",
    link: "https://github.com/YadlaMani/wisk",
    desc: "Private Information Retrieval w/ homomorphic encryption. Grant from Acricum.",
  },
  {
    name: "Bob",
    link: "https://github.com/YadlaMani/bob",
    desc: "Solana data labeling marketplace connecting global contributors.",
  },
  {
    name: "Yokai",
    link: "https://github.com/YadlaMani/yokai",
    desc: "DeFi protocol with lending and yield farming",
  },
  {
    name: "Gible",
    link: "https://github.com/YadlaMani/gible",
    desc: "Token swap DEX on Solana using Jupiter",
  },
  {
    name: "Stablecoin Contract",
    link: "https://github.com/YadlaMani/stablecoin-contract",
    desc: "Algorithmic stablecoin implementation",
  },
  {
    name: "Opto",
    link: "https://github.com/YadlaMani/Opto",
    desc: "Decentralized options trading platform",
  },
  {
    name: "ZK-Mixer",
    link: "https://github.com/YadlaMani/zk-mixer",
    desc: "Privacy protocol using zero-knowledge proofs",
  },

  {
    name: "Avax50",
    link: "https://github.com/YadlaMani/avax50",
    desc: "Custom Avalanche subnet implementation",
  },

  {
    name: "Test.ai",
    link: "https://github.com/YadlaMani/test.ai",
    desc: "AI-powered gamified learning platform with analytics.",
  },
  {
    name: "Sakhi",
    link: "https://github.com/YadlaMani/sakhi",
    desc: "Women safety app with SOS alerts & safe routes. Google Solution Challenge winner.",
  },

  {
    name: "Hades",
    link: "https://github.com/YadlaMani/hades",
    desc: "Full-stack application",
  },
  {
    name: "Ussop",
    link: "https://github.com/YadlaMani/Ussop",
    desc: "Web application",
  },
  {
    name: "CM",
    link: "https://github.com/YadlaMani/CM",
    desc: "Community management platform",
  },
  { name: "Show More", link: "/projects", desc: "See full portfolio" },
];

export default function Projects() {
  return (
    <Card className="col-span-7 row-span-2 flex flex-col p-4 md:overflow-y-auto max-h-full">
      <h2 className="text-lg font-semibold tracking-tight mb-3">Projects</h2>
      <TooltipProvider>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 border border-gray-300 dark:border-gray-600 divide-x divide-y divide-gray-300 dark:divide-gray-600">
          {allProjects.map((item, idx) => (
            <Tooltip key={idx}>
              <TooltipTrigger asChild>
                <Link
                  href={item.link}
                  target={item.name === "Show More" ? "_self" : "_blank"}
                  className="flex justify-center items-center p-4 text-center text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {item.name}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs p-2 text-xs">
                {item.desc}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </Card>
  );
}
