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
  _id: string;
  text: string;
  learned: boolean;
};

export default function Personal() {
  const [learningData, setLearningData] = useState<LearningItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("https://wil-amber.vercel.app/api/items")
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
          {learningData.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between border-b py-2"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center space-x-2">
                      <FaYoutube size={20} />
                      <Link
                        href={item.text}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-blue-400 hover:underline">
                          {item.text}
                        </span>
                      </Link>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-xs font-medium">
                    Learning Resource
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <input
                title="Marked as done"
                type="checkbox"
                checked={item.learned}
                readOnly
                className="h-5 w-5"
              />
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
