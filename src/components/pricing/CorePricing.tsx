
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Shield, Zap, Receipt, CreditCard } from "lucide-react";

const CorePricing = () => {
  const [amount, setAmount] = useState([1000]);
  const fee = Math.round((amount[0] * 0.024 + 0.30) * 100) / 100;
  const youKeep = amount[0] - fee;

  const features = [
    { icon: CreditCard, text: "Payment processing" },
    { icon: Shield, text: "Fraud protection" },
    { icon: Zap, text: "Instant transfers" },
    { icon: Receipt, text: "Tax documentation" }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-kloops-blue border-kloops-blue">
            Core Pricing
          </Badge>
          <h2 className="text-3xl font-bold font-poppins mb-4">
            Simple, transparent transaction-based pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No setup fees, no monthly charges, no surprises. You only pay when you successfully receive donations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-kloops-blue/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Transaction Rate</CardTitle>
              <div className="text-4xl font-bold text-kloops-blue">2.4% + $0.30</div>
              <p className="text-muted-foreground">per donation received</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">vs GoFundMe's 2.9% + $0.30</p>
                  <Badge variant="outline" className="text-kloops-green border-kloops-green">
                    Save 0.5% on every donation
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon className="h-4 w-4 text-kloops-green" />
                        <span className="text-sm">{feature.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-kloops-green/20 bg-kloops-green/5">
            <CardHeader>
              <CardTitle className="text-center">Fee Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Donation Amount</label>
                <Slider
                  value={amount}
                  onValueChange={setAmount}
                  max={10000}
                  min={10}
                  step={10}
                  className="mb-4"
                />
                <div className="text-center">
                  <span className="text-2xl font-bold">${amount[0].toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Donation amount:</span>
                  <span className="font-medium">${amount[0].toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Our fee:</span>
                  <span className="font-medium text-kloops-orange">${fee}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">You receive:</span>
                    <span className="text-xl font-bold text-kloops-green">${youKeep.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CorePricing;
