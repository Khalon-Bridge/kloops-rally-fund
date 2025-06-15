
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
            More money for recipients, transparent fees for donors
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compare what recipients actually receive and how fees are handled.
          </p>
        </div>

        <Card className="max-w-5xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Fee Comparison</CardTitle>
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
                  <TableCell className="font-medium">Recipient receives from $1000</TableCell>
                  <TableCell className="text-center bg-kloops-blue/5">
                    <Badge className="bg-kloops-green text-white">$985</Badge>
                  </TableCell>
                  <TableCell className="text-center">$971</TableCell>
                  <TableCell className="text-center">$950</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Platform fee</TableCell>
                  <TableCell className="text-center bg-kloops-blue/5">
                    <Badge variant="outline" className="text-kloops-green border-kloops-green">1.5% (from recipient)</Badge>
                  </TableCell>
                  <TableCell className="text-center">2.9% (from donation)</TableCell>
                  <TableCell className="text-center">5% (from donation)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Processing fee</TableCell>
                  <TableCell className="text-center bg-kloops-blue/5">
                    <Badge className="bg-kloops-blue text-white">Paid by donor</Badge>
                  </TableCell>
                  <TableCell className="text-center">Hidden in platform fee</TableCell>
                  <TableCell className="text-center">Hidden in platform fee</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Fee transparency</TableCell>
                  <TableCell className="text-center bg-kloops-blue/5">
                    <Check className="h-5 w-5 text-kloops-green mx-auto" />
                    <div className="text-xs text-muted-foreground">Complete</div>
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                    <div className="text-xs text-muted-foreground">Hidden</div>
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                    <div className="text-xs text-muted-foreground">Hidden</div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Payment options</TableCell>
                  <TableCell className="text-center bg-kloops-blue/5">
                    <Check className="h-5 w-5 text-kloops-green mx-auto" />
                    <div className="text-xs text-muted-foreground">Cards, Crypto, Bank</div>
                  </TableCell>
                  <TableCell className="text-center">Cards only</TableCell>
                  <TableCell className="text-center">Cards only</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Donor choice</TableCell>
                  <TableCell className="text-center bg-kloops-blue/5">
                    <Check className="h-5 w-5 text-kloops-green mx-auto" />
                    <div className="text-xs text-muted-foreground">Choose method & fees</div>
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                    <div className="text-xs text-muted-foreground">No choice</div>
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                    <div className="text-xs text-muted-foreground">No choice</div>
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
