import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const techGroups = [
  {
    title: "Languages & Frameworks",
    items: [
      "TypeScript",
      "Go",
      "Rust",
      "Solidity",
      "Python",
      "JavaScript",
      "ReactJS",
      "NextJS",
      "Remix",
      "TailwindCSS",
    ],
  },
  {
    title: "Web3 & Blockchain",
    items: [
      "Solana",
      "EVM",
      "Stellar",
      "CosmWasm",
      "Anchor",
      "Foundry",
      "Wagmi",
      "MPC/Arcium",
      "ZK Proofs",
    ],
  },
  {
    title: "Backend & Infra",
    items: [
      "NodeJS",
      "Express.js",
      "Docker",
      "Kubernetes",
      "Redis",
      "Google Cloud",
      "AWS",
      "Nginx",
      "RESTful APIs",
      "Git/GitHub",
    ],
  },
  {
    title: "Databases & Services",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Prisma ORM",
      "Supabase",
      "AppWrite",
      "Socket.io",
      "Vite",
    ],
  },
];

export default function TechStack() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Tech Stack</CardTitle>
      </CardHeader>
      <CardContent className="grid md:grid-cols-4 gap-6 overflow-y-auto scrollbar-notion pr-2 h-full">
        {techGroups.map((group) => (
          <div key={group.title} className="space-y-2 border-r-2 last:border-r-0">
            <h3 className="font-bold text-lg">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((tech) => (
                <Badge variant="outline" key={tech}>
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
