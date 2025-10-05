"use client";

import { Card } from "@/components/ui/card";
import { projects } from "@/utils";

export default function Projects() {
  const renderProjects = (list: typeof projects.web2) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {list.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center border border-gray-300 dark:border-white p-4 rounded shadow-[4px_4px_0_0] dark:shadow-[4px_4px_0_0] transition-all duration-200 ease-in-out hover:shadow-[2px_2px_0_0] dark:hover:shadow-[2px_2px_0_0] hover:translate-x-[2px] hover:translate-y-[2px]"
        >
          <span className="text-sm font-semibold text-center">{item.name}</span>
        </a>
      ))}
    </div>
  );

  return (
    <Card className="col-span-7 row-span-2 flex flex-col gap-6 p-4 md:overflow-y-auto max-h-full">
      <div>
        <h2 className="text-lg font-semibold tracking-tight mb-3">
          Web2 Projects
        </h2>
        {renderProjects(projects.web2)}
      </div>

      <div>
        <h2 className="text-lg font-semibold tracking-tight mb-3">
          Web3 Projects
        </h2>
        {renderProjects(projects.web3)}
      </div>
    </Card>
  );
}
