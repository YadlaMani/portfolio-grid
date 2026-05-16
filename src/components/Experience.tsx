"use client";

import { Card } from "@/components/ui/card";
import { experience } from "@/utils";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <Card className="flex flex-col gap-3 p-4 overflow-y-auto scrollbar-notion h-full w-full">
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
        Experience
      </p>
      {experience.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.25 }}
          className="flex flex-col border border-gray-200 dark:border-neutral-700 p-3 rounded shadow-[3px_3px_0_0] dark:shadow-[3px_3px_0_0_rgba(255,255,255,0.07)] transition-all duration-200 ease-in-out hover:shadow-[1px_1px_0_0] hover:translate-x-0.5 hover:translate-y-0.5 cursor-default"
        >
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-sm font-bold leading-tight">
                {item.company}
              </h3>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                {item.title}
              </p>
            </div>
            <span className="text-[9px] text-muted-foreground whitespace-nowrap shrink-0 mt-0.5 font-mono border border-border rounded px-1.5 py-0.5">
              {item.date}
            </span>
          </div>
          <ul className="mt-2 space-y-1.5">
            {item.bullets.map((bullet, i) => (
              <li
                key={i}
                className="text-[10px] text-gray-500 dark:text-gray-400 flex gap-1.5 leading-relaxed"
              >
                <span className="text-gray-400 dark:text-gray-600 shrink-0 mt-0.5">
                  —
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </Card>
  );
}
