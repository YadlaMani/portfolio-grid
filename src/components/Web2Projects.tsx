import { Card, CardContent } from "@/components/ui/card";
import NotionCard from "./os/card";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
const projects = [
  {
    title: "Bob",
    description: "Crowdsourced Intelligence, Blockchain-Powered Rewards",
    image: "/bob.png",
    github: "https://github.com/YadlaMani/bob",
    live: "https://bob-v1.vercel.app/",
  },
  {
    title: "Ussop",
    description: "Enterprise ready video conferencing web app",
    image: "/ussop.png",
    github: "https://github.com/YadlaMani/Ussop",
    live: "https://ussop-nu.vercel.app",
  },
  {
    title: "Sakhi",
    description: "True independence starts with a sense safety",
    image: "/sakhi.png",
    github: "https://github.com/YadlaMani/sakhi",
    live: "https://sakhi-v1.vercel.app/",
  },
  {
    title: "Test.ai",
    description: "Personalized Test & Feedback Platform",
    image: "/test.png",
    github: "https://github.com/YadlaMani/test.ai",
    live: "https://test-ai-two.vercel.app/",
  },
];

export default function Web2Projects() {
  return (
    <Card className="col-span-7 row-span-2 ">
      <CardContent className="flex flex-col gap-4">
        <div className="grid grid-cols-4 gap-4 h-45">
          {projects.map((project, idx) => (
            <NotionCard key={idx}>
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col h-full border-b-white">
                  <div className="p-2 h-[40%] flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <h1 className="text-sm font-bold">{project.title}</h1>
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                      </Link>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200" />

                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="100vw"
                    />
                  </div>
                </div>
              </Link>
            </NotionCard>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
