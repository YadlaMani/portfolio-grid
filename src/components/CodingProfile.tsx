"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import PushButton from "./os/pushbutton";
import NotionCard from "./os/card";
export default function CodingProfile() {
  const [ratings, setRatings] = useState({
    codeforces: null,
    leetcode: null,
    codechef: null,
  });

  const fetchRatings = async () => {
    try {
      const cfRes = await axios.get(
        "https://codeforces.com/api/user.info?handles=mani_7_"
      );
      const codeforcesRating = cfRes.data.result[0].rating;

      const lcRes = await axios.get(
        "https://leetcode-rating-api.glitch.me/yadla_mani"
      );
      console.log(lcRes.data);
      const leetcodeRating = lcRes.data[lcRes.data.length - 1].rating;
      console.log(leetcodeRating);

      const ccRes = await axios.get(
        "https://codechef-api.vercel.app/handle/mani_yadla"
      );
      const codechefRating = ccRes.data.currentRating;

      setRatings({
        codeforces: codeforcesRating,
        leetcode: leetcodeRating,
        codechef: codechefRating,
      });
    } catch (error) {
      console.error("Failed to fetch ratings", error);
    }
  };

  useEffect(() => {
    fetchRatings();
  }, []);

  return (
    <Card className="md:col-span-2 md:row-span-2  md:overflow-hidden rounded-lg shadow-lg bg-red-400">
      <CardContent>
        <div className="flex flex-col gap-4 ">
          <div className="flex items-center gap-2 justify-around">
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

            <NotionCard>
              <div className="h-10 w-20 px-3 flex items-center justify-center">
                <h2 className="text-md font-bold">
                  {ratings.leetcode ? ratings.leetcode : "..."}
                </h2>
              </div>
            </NotionCard>
          </div>

          <div className="flex items-center gap-4 justify-around">
            <NotionCard>
              <div className="h-10 px-3 w-20  flex justify-center items-center">
                <h2 className="text-md  font-bold">
                  {ratings.codechef ? ratings.codechef : "..."}
                </h2>
              </div>
            </NotionCard>
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
          </div>

          <div className="flex items-center gap-4  justify-around">
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
            <NotionCard>
              <div className="h-10  justify-center w-20 px-3 flex items-center">
                <h2 className="text-md font-bold">
                  {ratings.codeforces ? ratings.codeforces : "..."}
                </h2>
              </div>
            </NotionCard>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
