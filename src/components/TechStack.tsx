import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const techGroups = [
  {
    title: "Languages & Web Technologies",
    items: [
      "JavaScript",
      "TypeScript",
      "Rust",
      "Solidity",
      "ReactJS",
      "NextJS",
      "Remix",
      "TailwindCSS",
      "Socket.io",
      "Vite",
      "Foundry",
    ],
  },
  {
    title: "Backend & Tools",
    items: [
      "NodeJS",
      "Express.js",
      "JWT",
      "Git",
      "GitHub",
      "Docker",
      "Nginx",
      "Kubernetes",
      "Redis",
      "GitHub Actions",
      "Google Cloud",
      "AWS",
      "AppWrite",
    ],
  },
  {
    title: "Databases & Design",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Prisma ORM", "Figma", "Canva"],
  },
];

export default function TechStack() {
  return (
    <Card className="col-span-9 row-span-2 h-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Tech Stack</CardTitle>
      </CardHeader>
      <CardContent className="grid md:grid-cols-3 gap-6 max-h-[500px] overflow-y-auto pr-2">
        {techGroups.map((group) => (
          <div key={group.title} className="space-y-2 border-r-2">
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
