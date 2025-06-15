
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const FreeFeatures = () => {
  const freeFeatures = [
    "Unlimited fundraisers",
    "All campaign types (goal-based, open-ended, date targets)",
    "Real-time collaboration (multiple people managing campaigns)",
    "Advanced dashboard and analytics",
    "Social media sharing tools",
    "Mobile-optimized donation forms",
    "Email notifications",
    "24/7 support",
    "No monthly fees ever",
    "Instant bank transfers",
    "Donor receipt automation",
    "Campaign customization"
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-kloops-green border-kloops-green">
            Always Free
          </Badge>
          <h2 className="text-3xl font-bold font-poppins mb-4">
            Everything you need is included
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No hidden costs, no feature restrictions. Get access to our full platform at no upfront cost.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-kloops-green/20 bg-kloops-green/5">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-kloops-green">Free Forever Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {freeFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-kloops-green flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-white rounded-lg border border-kloops-green/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-kloops-green mb-2">$0</div>
                <div className="text-sm text-muted-foreground">
                  Setup fee • Monthly fee • Platform fee • Hidden costs
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FreeFeatures;
