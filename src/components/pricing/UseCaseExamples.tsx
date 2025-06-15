
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Users, Zap, PartyPopper } from "lucide-react";

const UseCaseExamples = () => {
  const examples = [
    {
      icon: Heart,
      title: "Memorial expenses",
      amount: 3000,
      recipientReceives: 2955,
      color: "kloops-blue"
    },
    {
      icon: Zap,
      title: "Emergency help",
      amount: 1500,
      recipientReceives: 1477.50,
      color: "kloops-green"
    },
    {
      icon: Users,
      title: "Community project",
      amount: 5000,
      recipientReceives: 4925,
      color: "kloops-orange"
    },
    {
      icon: PartyPopper,
      title: "Party planning",
      amount: 800,
      recipientReceives: 788,
      color: "kloops-blue"
    }
  ];

  const calculateDonorCosts = (amount: number) => ({
    crypto: amount + (amount * 0.015),
    cards: amount + (amount * 0.029) + 0.30,
    bank: amount + 0.50
  });

  return (
    <section className="py-16 px-4">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-kloops-blue border-kloops-blue">
            Real Examples
          </Badge>
          <h2 className="text-3xl font-bold font-poppins mb-4">
            See what recipients get and donors pay
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real scenarios showing our transparent fee structure for different campaign types.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {examples.map((example, index) => {
            const Icon = example.icon;
            const costs = calculateDonorCosts(example.amount);
            
            return (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className={`mx-auto w-12 h-12 rounded-full bg-${example.color}/10 flex items-center justify-center mb-4`}>
                    <Icon className={`h-6 w-6 text-${example.color}`} />
                  </div>
                  <CardTitle className="text-lg">{example.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Campaign goal:</div>
                    <div className="text-2xl font-bold">${example.amount.toLocaleString()}</div>
                  </div>
                  
                  <div className="border-t pt-4 space-y-2">
                    <div className="text-sm text-muted-foreground">Recipient receives:</div>
                    <div className="text-xl font-bold text-kloops-green">${example.recipientReceives.toLocaleString()}</div>
                    <div className="text-xs text-kloops-green">Always 98.5%</div>
                  </div>

                  <Tabs defaultValue="crypto" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 text-xs">
                      <TabsTrigger value="crypto">Crypto</TabsTrigger>
                      <TabsTrigger value="cards">Cards</TabsTrigger>
                      <TabsTrigger value="bank">Bank</TabsTrigger>
                    </TabsList>
                    <TabsContent value="crypto" className="mt-2">
                      <div className="text-sm">
                        <div className="text-muted-foreground">Donor pays:</div>
                        <div className="font-semibold">${costs.crypto.toFixed(2)}</div>
                      </div>
                    </TabsContent>
                    <TabsContent value="cards" className="mt-2">
                      <div className="text-sm">
                        <div className="text-muted-foreground">Donor pays:</div>
                        <div className="font-semibold">${costs.cards.toFixed(2)}</div>
                      </div>
                    </TabsContent>
                    <TabsContent value="bank" className="mt-2">
                      <div className="text-sm">
                        <div className="text-muted-foreground">Donor pays:</div>
                        <div className="font-semibold">${costs.bank.toFixed(2)}</div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="max-w-4xl mx-auto border-kloops-green/20 bg-kloops-green/5">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-bold text-kloops-green">
                Memorial Expenses - Detailed Breakdown
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Cryptocurrency</div>
                  <div className="text-lg font-bold">Donors pay $3,045</div>
                  <div className="text-sm text-kloops-green">Family receives $2,955</div>
                  <div className="text-xs text-muted-foreground">Total cost: 1.5% + 1.5%</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Credit/Debit Cards</div>
                  <div className="text-lg font-bold">Donors pay $3,087.30</div>
                  <div className="text-sm text-kloops-green">Family receives $2,955</div>
                  <div className="text-xs text-muted-foreground">Total cost: 2.9% + $0.30 + 1.5%</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Bank Transfer</div>
                  <div className="text-lg font-bold">Donors pay $3,000.50</div>
                  <div className="text-sm text-kloops-green">Family receives $2,955</div>
                  <div className="text-xs text-muted-foreground">Total cost: $0.50 + 1.5%</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UseCaseExamples;
