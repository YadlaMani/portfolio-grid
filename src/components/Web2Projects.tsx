import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Web2Projects() {
  return (
    <Card className="col-span-7 row-span-2">
      <CardHeader>
        <CardTitle>Web2 Projects</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <h3 className="font-medium">Project 1</h3>
          <p className="text-sm text-muted-foreground">Description here</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Project 2</h3>
          <p className="text-sm text-muted-foreground">Description here</p>
        </div>
      </CardContent>
    </Card>
  );
}