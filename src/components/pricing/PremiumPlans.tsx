
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown } from "lucide-react";

const PremiumPlans = () => {
  return (
    <section className="py-16 px-4">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-kloops-blue border-kloops-blue">
            Optional Upgrades
          </Badge>
          <h2 className="text-3xl font-bold font-poppins mb-4">
            Need more? We've got you covered
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upgrade only if you need advanced features. All core functionality remains free forever.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-kloops-blue/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-kloops-blue" />
                  <CardTitle className="text-xl">Advanced Plan</CardTitle>
                </div>
                <Badge className="bg-kloops-blue/10 text-kloops-blue">Popular</Badge>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">$19<span className="text-base font-normal text-muted-foreground">/month</span></div>
                <div className="text-sm text-kloops-green font-medium">Reduced fees: 2.1% + $0.30</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-muted-foreground">Everything free includes PLUS:</div>
              <div className="space-y-3">
                {[
                  "Lower transaction fee (save 0.3% per donation)",
                  "Custom branding and white-label options",
                  "Advanced analytics exports",
                  "Priority support",
                  "Webhook integrations",
                  "API access for developers"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-kloops-green" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full bg-kloops-blue hover:bg-kloops-blue/90">
                Upgrade to Advanced
              </Button>
            </CardContent>
          </Card>

          <Card className="border-kloops-orange/20 bg-kloops-orange/5">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Crown className="h-5 w-5 text-kloops-orange" />
                <CardTitle className="text-xl">Enterprise Plan</CardTitle>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">Custom</div>
                <div className="text-sm text-kloops-green font-medium">Lowest fees: 1.9% + $0.30</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-muted-foreground">Everything in Advanced PLUS:</div>
              <div className="space-y-3">
                {[
                  "Lowest transaction fee (save 0.5% per donation)",
                  "Custom domain (yoursite.com/donate)",
                  "Dedicated account manager",
                  "SLA guarantees",
                  "Custom integrations",
                  "Volume discounts available"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-kloops-green" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full border-kloops-orange text-kloops-orange hover:bg-kloops-orange hover:text-white">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PremiumPlans;
