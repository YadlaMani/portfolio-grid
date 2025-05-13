import { Card } from "@/components/ui/card";
import { experience } from "@/utils";

export default function Experience() {
  return (
    <Card className="col-span-3 row-span-3 flex flex-col gap-4 p-4 overflow-y-auto max-h-full">
      {[
        ...experience,
        {
          title: "Your Company's Next Engineer",
          company: "Dream Team Inc.",
          date: "Let's chat and make it official",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col justify-center border border-gray-300 dark:border-white p-4 rounded shadow-[4px_4px_0_0] dark:shadow-[4px_4px_0_0] transition-all duration-200 ease-in-out hover:shadow-[2px_2px_0_0] dark:hover:shadow-[2px_2px_0_0] hover:translate-x-[2px] hover:translate-y-[2px]"
        >
          <h3 className="text-sm font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {item.company}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {item.date}
          </p>
        </div>
      ))}
    </Card>
  );
}
