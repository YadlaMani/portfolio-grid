"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import PushButton from "./os/pushbutton";
import NotionCard from "./os/card";

export default function CodingProfile() {
  const [ratings, setRatings] = useState({
    codeforces: null as number | null,
    leetcode: null as number | null,
    codechef: null as number | null,
  });

  const fetchRatings = async () => {
    try {
      const cfRes = await axios.get("/api/codeforces");
      const codeforcesRating = cfRes.data?.result?.[0]?.rating || null;
      setRatings((prev) => ({ ...prev, codeforces: codeforcesRating }));
    } catch (error) {
      console.error("Failed to fetch Codeforces rating:", error);
    }

    try {
      const lcRes = await axios.get("/api/leetcode");
      const leetcodeRating =
        lcRes.data?.[lcRes.data.length - 1]?.rating || null;
      setRatings((prev) => ({ ...prev, leetcode: leetcodeRating }));
    } catch (error) {
      console.error("Failed to fetch Leetcode rating:", error);
    }

    try {
      const ccRes = await axios.get("/api/codechef");
      const codechefRating =
        ccRes.data?.data?.rating?.currentRatingNumber || null;
      setRatings((prev) => ({ ...prev, codechef: codechefRating }));
    } catch (error) {
      console.error("Failed to fetch Codechef rating:", error);
    }
  };

  useEffect(() => {
    fetchRatings();
  }, []);

  return (
    <Card className="md:col-span-2 md:row-span-2 md:overflow-hidden rounded-lg shadow-lg bg-red-400">
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 justify-around">
            <Link
              href="https://leetcode.com/yadla_mani/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PushButton>
                <div className="rounded p-1 h-10 w-10 flex items-center justify-center">
                  <Image
                    width={24}
                    height={24}
                    alt="leetcode-logo"
                    src="/leetcode-color.png"
                    className="rounded"
                  />
                </div>
              </PushButton>
            </Link>

            <NotionCard>
              <div className="h-10 w-20 px-3 flex items-center justify-center">
                <h2 className="text-md font-bold">
                  {ratings.leetcode ?? "1945"}
                </h2>
              </div>
            </NotionCard>
          </div>

          <div className="flex items-center gap-4 justify-around">
            <NotionCard>
              <div className="h-10 px-3 w-20 flex justify-center items-center">
                <h2 className="text-md font-bold">
                  {ratings.codechef ?? "1817"}
                </h2>
              </div>
            </NotionCard>
            <Link
              href="https://www.codechef.com/users/mani_yadla"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PushButton>
                <div className="rounded p-1">
                  <Image
                    width={32}
                    height={32}
                    alt="codechef-logo"
                    src="/code-chef.svg"
                    className="rounded"
                  />
                </div>
              </PushButton>
            </Link>
          </div>

          <div className="flex items-center gap-4 justify-around">
            <Link
              href="https://codeforces.com/profile/mani_7_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PushButton>
                <div className="rounded p-1">
                  <Image
                    width={32}
                    height={32}
                    alt="codeforces-logo"
                    src="/codeforces.png"
                    className="rounded"
                  />
                </div>
              </PushButton>
            </Link>

            <NotionCard>
              <div className="h-10 justify-center w-20 px-3 flex items-center">
                <h2 className="text-md font-bold">
                  {ratings.codeforces ?? "..."}
                </h2>
              </div>
            </NotionCard>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
