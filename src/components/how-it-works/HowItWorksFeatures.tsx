
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Smartphone, Shield, BarChart3 } from "lucide-react";

const HowItWorksFeatures = () => {
  const features = [
    {
      title: "Instant Setup",
      description: "From idea to live campaign in under 30 seconds",
      icon: Zap
    },
    {
      title: "Mobile Optimized",
      description: "Perfect experience on any device, any screen size",
      icon: Smartphone
    },
    {
      title: "Secure & Trusted",
      description: "Bank-level security with fraud protection built-in",
      icon: Shield
    },
    {
      title: "Real-time Analytics",
      description: "Track donations, engagement, and campaign performance",
      icon: BarChart3
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-poppins mb-4">Built for Everyone</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're a complete beginner or an experienced developer, kloops has the tools you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-kloops-blue to-kloops-green flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksFeatures;
