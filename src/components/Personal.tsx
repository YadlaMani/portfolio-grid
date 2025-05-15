"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";
import { FaYoutube } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

type LearningItem = {
  title: string;
  done: boolean;
};

export default function Personal() {
  const [learningData, setLearningData] = useState<LearningItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/YadlaMani/what-am-i-learning/main/learning.json"
      )
      .then((response) => {
        setLearningData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching learning data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Card className="md:col-span-3 md:row-span-2 p-4 md:overflow-y-auto max-h-full">
      <h2 className="text-xl font-bold mb-4">📚 What Am I Learning</h2>
      {loading ? (
        <p className="text-muted-foreground">Loading...</p>
      ) : (
        <div className="grid gap-4">
          {learningData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b py-2"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center space-x-2">
                      <FaYoutube size={20} />
                      <Link
                        href={item.title}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-blue-400 hover:underline">
                          {item.title}
                        </span>
                      </Link>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-xs font-medium">
                    YouTube Video
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <input
                title="Mark as done"
                type="checkbox"
                checked={item.done}
                onChange={() => {
                  const updatedData = [...learningData];
                  updatedData[index].done = !updatedData[index].done;
                  setLearningData(updatedData);
                }}
                className="h-5 w-5"
                disabled
              />
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
