
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Zap, PartyPopper } from "lucide-react";

const UseCaseExamples = () => {
  const examples = [
    {
      icon: Heart,
      title: "Memorial expenses",
      amount: 3000,
      fee: 72.30,
      color: "kloops-blue"
    },
    {
      icon: Zap,
      title: "Emergency help",
      amount: 1500,
      fee: 36.30,
      color: "kloops-green"
    },
    {
      icon: Users,
      title: "Community project",
      amount: 5000,
      fee: 120.30,
      color: "kloops-orange"
    },
    {
      icon: PartyPopper,
      title: "Party planning",
      amount: 800,
      fee: 19.50,
      color: "kloops-blue"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-kloops-blue border-kloops-blue">
            Real Examples
          </Badge>
          <h2 className="text-3xl font-bold font-poppins mb-4">
            See what you'd actually pay
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real scenarios showing exactly what our fees look like for different types of campaigns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {examples.map((example, index) => {
            const Icon = example.icon;
            return (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className={`mx-auto w-12 h-12 rounded-full bg-${example.color}/10 flex items-center justify-center mb-4`}>
                    <Icon className={`h-6 w-6 text-${example.color}`} />
                  </div>
                  <CardTitle className="text-lg">{example.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Campaign goal:</div>
                    <div className="text-2xl font-bold">${example.amount.toLocaleString()}</div>
                  </div>
                  <div className="border-t pt-3 space-y-2">
                    <div className="text-sm text-muted-foreground">Total fees:</div>
                    <div className="text-lg font-semibold text-kloops-orange">${example.fee}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    You keep ${(example.amount - example.fee).toLocaleString()}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCaseExamples;
