import { Card, CardContent } from "@/components/ui/card";

export default function Stats() {
  return (
    <Card className="col-span-3 row-span-2">
      <CardContent className="space-y-2">
        <div className="mt-4">
          <img
            src="https://github-readme-stats.vercel.app/api?username=YadlaMani&theme=dark&hide_border=false&include_all_commits=false&count_private=false"
            alt="GitHub Stats"
            className="rounded-lg"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
