"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ArrowLeft, ExternalLink, Trophy } from "lucide-react";
import { projectsData } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

type Category = "all" | "web2" | "web3";

const categoryLabels: Record<Category, string> = {
  all: "All",
  web2: "Web2",
  web3: "Web3",
};

export default function ProjectsPage() {
  const [category, setCategory] = useState<Category>("all");

  const filtered = projectsData.filter(
    (p) => category === "all" || p.category === category
  );

  return (
    <div className="min-h-screen p-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-all duration-150 border border-border rounded px-3 py-1.5 shadow-[2px_2px_0_0] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
        >
          <ArrowLeft size={12} />
          Back
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            {projectsData.length} projects &middot; Web2 &amp; Web3
          </p>
        </div>
      </div>

      <div className="flex gap-2 mb-8">
        {(["all", "web2", "web3"] as Category[]).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-1.5 text-sm font-medium rounded border shadow-[2px_2px_0_0] transition-all duration-150 cursor-pointer ${
              category === cat
                ? "bg-foreground text-background border-foreground shadow-none translate-x-0.5 translate-y-0.5"
                : "bg-background text-foreground border-border hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
            }`}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.name}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.18 }}
              className="border border-border rounded-lg p-5 shadow-[4px_4px_0_0] dark:shadow-[4px_4px_0_0_rgba(255,255,255,0.07)] hover:shadow-[2px_2px_0_0] dark:hover:shadow-[2px_2px_0_0_rgba(255,255,255,0.07)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 bg-card flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-base font-bold leading-tight">
                  {project.name}
                </h2>
                <span className="text-[10px] font-mono text-muted-foreground shrink-0 mt-0.5">
                  {project.category.toUpperCase()}
                </span>
              </div>

              {project.award && (
                <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground border border-border rounded px-2 py-0.5 w-fit">
                  <Trophy size={10} />
                  {project.award}
                </div>
              )}

              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {project.longDesc}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-[10px] py-0 h-5"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2 border-t border-border">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FaGithub size={12} />
                  GitHub
                </Link>
                {project.liveLink && (
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={11} />
                    Live Demo
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
