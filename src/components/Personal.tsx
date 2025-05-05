import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Personal() {
  return (
    <Card className="col-span-3 row-span-2">
      <CardHeader>
        <CardTitle>Personal</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-muted-foreground">
          🌍 Based in San Francisco
        </p>
        <p className="text-sm text-muted-foreground">🎓 Computer Science</p>
        <p className="text-sm text-muted-foreground">🎮 Gaming Enthusiast</p>
      </CardContent>
    </Card>
  );
}