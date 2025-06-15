
import { Button } from "@/components/ui/button";
import { Heart, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DualCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold font-poppins">Ready to start fundraising?</h3>
            <p className="text-muted-foreground">
              The modern platform built for success. Setup takes less than a minute, zero upfront costs.
            </p>
            <Button 
              size="lg" 
              className="bg-kloops-blue hover:bg-kloops-blue/90"
              onClick={() => navigate('/create')}
            >
              Start fundraising now
              <Heart className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold font-poppins">Ready to integrate?</h3>
            <p className="text-muted-foreground">
              Add fundraising to your app or website. Free tier includes everything you need to get started.
            </p>
            <Button 
              size="lg" 
              variant="outline"
              className="border-kloops-green text-kloops-green hover:bg-kloops-green hover:text-white"
            >
              Get API access
              <Code className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualCTA;
