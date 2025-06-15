
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Zap, Globe } from "lucide-react";

const DeveloperPricing = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-kloops-green border-kloops-green">
            <Code className="h-3 w-3 mr-1" />
            For Developers
          </Badge>
          <h2 className="text-3xl font-bold font-poppins mb-4">
            API & Integration Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Same great transaction rates, plus API access to build fundraising into any application.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="border-kloops-green/20">
            <CardHeader className="text-center">
              <Zap className="h-8 w-8 text-kloops-green mx-auto mb-4" />
              <CardTitle>Free Tier</CardTitle>
              <div className="text-2xl font-bold">$0</div>
              <div className="text-sm text-muted-foreground">10,000 API requests/month</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm">✅ Full API access</div>
                <div className="text-sm">✅ Standard transaction rates</div>
                <div className="text-sm">✅ Community support</div>
                <div className="text-sm">✅ Documentation & SDKs</div>
              </div>
              <Button variant="outline" className="w-full border-kloops-green text-kloops-green hover:bg-kloops-green hover:text-white">
                Get Started Free
              </Button>
            </CardContent>
          </Card>

          <Card className="border-kloops-blue/20 bg-kloops-blue/5">
            <CardHeader className="text-center">
              <Code className="h-8 w-8 text-kloops-blue mx-auto mb-4" />
              <CardTitle>Professional</CardTitle>
              <div className="text-2xl font-bold">$99<span className="text-base font-normal">/mo</span></div>
              <div className="text-sm text-muted-foreground">100,000 API requests/month</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm">✅ Everything in Free</div>
                <div className="text-sm">✅ 10x more API requests</div>
                <div className="text-sm">✅ Priority support</div>
                <div className="text-sm">✅ Advanced webhooks</div>
              </div>
              <Button className="w-full bg-kloops-blue hover:bg-kloops-blue/90">
                Upgrade to Pro
              </Button>
            </CardContent>
          </Card>

          <Card className="border-kloops-orange/20">
            <CardHeader className="text-center">
              <Globe className="h-8 w-8 text-kloops-orange mx-auto mb-4" />
              <CardTitle>Enterprise</CardTitle>
              <div className="text-2xl font-bold">Custom</div>
              <div className="text-sm text-muted-foreground">Unlimited requests</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm">✅ Everything in Professional</div>
                <div className="text-sm">✅ Unlimited API requests</div>
                <div className="text-sm">✅ Dedicated support</div>
                <div className="text-sm">✅ Custom integrations</div>
              </div>
              <Button variant="outline" className="w-full border-kloops-orange text-kloops-orange hover:bg-kloops-orange hover:text-white">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8 p-4 bg-white rounded-lg border border-kloops-green/20 max-w-2xl mx-auto">
          <div className="text-sm text-muted-foreground">
            <strong>Note:</strong> Same transaction fees apply (2.4%, 2.1%, or 1.9% based on your plan) for all API-generated donations.
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperPricing;
