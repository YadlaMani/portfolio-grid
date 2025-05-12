import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { projects } from "@/utils";
export default function Web2Projects() {
  return (
    <Card className="col-span-7 row-span-2 ">
      <CardContent className="flex flex-col gap-4">
        <div className="grid grid-cols-4 gap-4 h-45">
          {projects.map((project, idx) => (
            <Link
              key={idx}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col h-full border-b-2">
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
                    <p className="text-[10px] font-semibold">
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
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
