
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from "lucide-react";

const ComparisonTable = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-kloops-green border-kloops-green">
            Platform Comparison
          </Badge>
          <h2 className="text-3xl font-bold font-poppins mb-4">
            How we compare to the competition
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See why thousands choose kloops.fund over other fundraising platforms.
          </p>
        </div>

        <Card className="max-w-5xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Feature Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Feature</TableHead>
                  <TableHead className="text-center bg-kloops-blue/10">
                    <div className="font-bold text-kloops-blue">kloops.fund</div>
                  </TableHead>
                  <TableHead className="text-center">GoFundMe</TableHead>
                  <TableHead className="text-center">JustGiving</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Setup fee</TableCell>
                  <TableCell className="text-center bg-kloops-blue/5">
                    <Badge variant="outline" className="text-kloops-green border-kloops-green">FREE</Badge>
                  </TableCell>
                  <TableCell className="text-center">FREE</TableCell>
                  <TableCell className="text-center">FREE</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Monthly fee</TableCell>
                  <TableCell className="text-center bg-kloops-blue/5">
                    <Badge variant="outline" className="text-kloops-green border-kloops-green">FREE</Badge>
                  </TableCell>
                  <TableCell className="text-center">FREE</TableCell>
                  <TableCell className="text-center">5% platform fee</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Transaction fee</TableCell>
                  <TableCell className="text-center bg-kloops-blue/5">
                    <Badge className="bg-kloops-green text-white">2.4% + $0.30</Badge>
                  </TableCell>
                  <TableCell className="text-center">2.9% + $0.30</TableCell>
                  <TableCell className="text-center">5% + processing</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Real-time collaboration</TableCell>
                  <TableCell className="text-center bg-kloops-blue/5">
                    <Check className="h-5 w-5 text-kloops-green mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Developer API</TableCell>
                  <TableCell className="text-center bg-kloops-blue/5">
                    <Check className="h-5 w-5 text-kloops-green mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">Limited</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Custom branding</TableCell>
                  <TableCell className="text-center bg-kloops-blue/5">
                    <div className="text-sm">✅ (Premium)</div>
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-kloops-green mx-auto" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ComparisonTable;
