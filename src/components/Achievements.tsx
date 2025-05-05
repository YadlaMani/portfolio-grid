import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Achievements() {
  return (
    <Card className="col-span-3 row-span-2">
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">🏆</Badge>
          <span>Hackathon Winner</span>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">🎯</Badge>
          <span>Open Source Contributor</span>
        </div>
      </CardContent>
    </Card>
  );
}