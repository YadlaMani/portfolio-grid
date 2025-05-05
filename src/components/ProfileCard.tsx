import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <Card className="col-span-6 row-span-2">
      <CardContent className="p-0 h-full">
        <div className="flex h-full">
          <div className="w-1/3 relative">
            <Image
              src="/placeholder.svg?height=400&width=300"
              alt="Profile"
              width={300}
              height={400}
              className="object-cover h-full"
            />
          </div>
          <div className="w-2/3 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2">John Doe</h2>
            <p className="text-muted-foreground mb-4">Full Stack Developer</p>
            <div className="flex gap-2">
              <Badge>Available</Badge>
              <Badge variant="outline">Remote</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}