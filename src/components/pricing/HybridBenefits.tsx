
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, DollarSign, BarChart3, RefreshCw, Eye, Zap, CreditCard, Gift } from "lucide-react";

const HybridBenefits = () => {
  const recipientBenefits = [
    {
      icon: Target,
      title: "Predictable income",
      description: "Always keep 98.5% - no matter what payment method donors choose"
    },
    {
      icon: DollarSign,
      title: "More money",
      description: "Higher percentage than any competitor platform"
    },
    {
      icon: BarChart3,
      title: "Clear reporting",
      description: "Know exactly what you'll receive before campaigns start"
    },
    {
      icon: RefreshCw,
      title: "No payment method risk",
      description: "Donors handle processing costs, you get consistent payouts"
    }
  ];

  const donorBenefits = [
    {
      icon: Eye,
      title: "Complete transparency",
      description: "See exactly what you pay and where every penny goes"
    },
    {
      icon: Zap,
      title: "Payment choice",
      description: "Pick your preferred method and fee level"
    },
    {
      icon: CreditCard,
      title: "Crypto option",
      description: "Save money with cryptocurrency payments"
    },
    {
      icon: Gift,
      title: "Direct impact",
      description: "Know that 98.5% reaches the cause you're supporting"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-kloops-green border-kloops-green">
            Why This Model Is Better
          </Badge>
          <h2 className="text-3xl font-bold font-poppins mb-4">
            Benefits for everyone involved
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our hybrid pricing model creates win-win scenarios for both fundraisers and donors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold font-poppins text-kloops-green mb-2">
                For Recipients (Fundraisers)
              </h3>
              <p className="text-muted-foreground">
                Keep more of what you raise with predictable, transparent fees
              </p>
            </div>
            
            <div className="space-y-4">
              {recipientBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="border-kloops-green/20">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full bg-kloops-green/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-kloops-green" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-kloops-green mb-1">{benefit.title}</h4>
                          <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold font-poppins text-kloops-blue mb-2">
                For Donors
              </h3>
              <p className="text-muted-foreground">
                Choose how you pay and see exactly where your money goes
              </p>
            </div>
            
            <div className="space-y-4">
              {donorBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="border-kloops-blue/20">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full bg-kloops-blue/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-kloops-blue" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-kloops-blue mb-1">{benefit.title}</h4>
                          <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridBenefits;
