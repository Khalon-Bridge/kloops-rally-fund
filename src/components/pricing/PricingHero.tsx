
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PricingHero = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-kloops-blue/5 to-kloops-green/5">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins gradient-text">
              Pricing that grows with your success
            </h1>
            <p className="text-xl text-muted-foreground">
              Free setup, free features, free forever. Only pay when donations come in.
            </p>
          </div>

          <Card className="max-w-lg mx-auto border-kloops-green/20 bg-kloops-green/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <Calculator className="h-6 w-6 text-kloops-green mr-2" />
                <span className="font-semibold text-kloops-green">Simple Example</span>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-kloops-blue">2.4% + $0.30 per transaction</div>
                <div className="text-sm text-muted-foreground">That's it - no hidden fees!</div>
                <div className="pt-4 border-t border-kloops-green/20">
                  <div className="text-lg">
                    <span className="text-muted-foreground">Raise $1,000 → </span>
                    <span className="font-bold text-kloops-green">You keep $976</span>
                    <span className="text-muted-foreground">, we take $24</span>
                  </div>
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
              Start Fundraising Free
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
