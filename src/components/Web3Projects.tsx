import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Web3Projects() {
  return (
    <Card className="col-span-3 row-span-3">
      <CardHeader>
        <CardTitle>Web3 Projects</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-medium">DeFi Project</h3>
          <p className="text-sm text-muted-foreground">Description here</p>
          <Badge>Solidity</Badge>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">NFT Project</h3>
          <p className="text-sm text-muted-foreground">Description here</p>
          <Badge>Web3.js</Badge>
        </div>
      </CardContent>
    </Card>
  );
}