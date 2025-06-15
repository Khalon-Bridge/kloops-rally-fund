
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Globe } from "lucide-react";

const DeveloperFlow = () => {
  const developerSteps = [
    {
      step: "1",
      title: "Get API Keys",
      description: "Sign up, get your API keys, and access our comprehensive documentation and SDKs.",
      icon: Code
    },
    {
      step: "2",
      title: "Integrate in Minutes",
      description: "Drop in our React component, embed our widget, or use our REST API. Works with any platform.",
      icon: Zap
    },
    {
      step: "3",
      title: "Go Live",
      description: "Your users can start fundraising immediately. Monitor usage and customize the experience.",
      icon: Globe
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-kloops-green border-kloops-green">
            <Code className="h-3 w-3 mr-1" />
            For Developers
          </Badge>
          <h2 className="text-3xl font-bold font-poppins mb-4">Integrate in 3 Simple Steps</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Add powerful fundraising features to any app, website, or platform with our flexible APIs and SDKs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {developerSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-kloops-green/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-kloops-green" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 rounded-full bg-kloops-green text-white flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Button size="lg" className="bg-kloops-green hover:bg-kloops-green/90 text-white">
            View API Docs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DeveloperFlow;
