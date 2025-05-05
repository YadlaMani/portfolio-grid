import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TechStack() {
  return (
    <Card className="col-span-9 row-span-2">
      <CardHeader>
        <CardTitle>Tech Stack</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-4 gap-4">
        <div className="space-y-2">
          <h3 className="font-medium">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">React</Badge>
            <Badge variant="outline">Next.js</Badge>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Backend</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Node.js</Badge>
            <Badge variant="outline">Python</Badge>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Database</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">MongoDB</Badge>
            <Badge variant="outline">PostgreSQL</Badge>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Tools</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Git</Badge>
            <Badge variant="outline">Docker</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}