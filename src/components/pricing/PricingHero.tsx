
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PricingHero = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-kloops-blue/5 to-kloops-green/5">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <Badge className="bg-kloops-green/10 text-kloops-green border-kloops-green/20">
              <TrendingUp className="w-3 h-3 mr-1" />
              Recipients keep 98.5%
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-poppins gradient-text">
              Recipients keep 98.5%. Donors pay only processing costs.
            </h1>
            <p className="text-xl text-muted-foreground">
              The most transparent fundraising platform. No hidden fees, no surprises.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto border-kloops-green/20 bg-kloops-green/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <Calculator className="h-6 w-6 text-kloops-green mr-2" />
                <span className="font-semibold text-kloops-green">Transparent Comparison</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-lg font-semibold text-kloops-blue">kloop.fund</div>
                  <div className="text-2xl font-bold text-kloops-green">$1,000 → $985</div>
                  <div className="text-sm text-muted-foreground">Recipient keeps 98.5%</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-lg font-semibold text-muted-foreground">Competitors</div>
                  <div className="text-2xl font-bold text-red-600">$1,000 → $971</div>
                  <div className="text-sm text-muted-foreground">Hidden fees reduce payout</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-kloops-green/20 text-center">
                <div className="text-sm font-medium text-kloops-blue">
                  Choose your payment method, choose your fees
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-kloops-blue hover:bg-kloops-blue/90"
              onClick={() => navigate('/create')}
            >
              Start Fundraising - Keep 98.5%
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-kloops-green text-kloops-green hover:bg-kloops-green hover:text-white"
            >
              Calculate Your Fees
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
