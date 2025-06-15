
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PricingCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-kloops-blue to-kloops-green">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto space-y-8 text-white">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins">
              Ready to start fundraising?
            </h2>
            <p className="text-xl opacity-90">
              Join the next generation of fundraising. Transparent pricing, powerful features, zero risk.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold">$0</div>
              <div className="text-sm opacity-80">to get started</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold">2.4%</div>
              <div className="text-sm opacity-80">only when you succeed</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold">0</div>
              <div className="text-sm opacity-80">hidden fees</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/create')}
              className="bg-white text-kloops-blue hover:bg-white/90"
            >
              Start Fundraising Free
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-kloops-blue"
            >
              View API Documentation
            </Button>
          </div>

          <div className="text-sm opacity-80">
            No credit card required • Set up in under 30 seconds • Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
