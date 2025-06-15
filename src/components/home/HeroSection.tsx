
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Code, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-background opacity-5" />
      <div className="container relative z-10">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          <Badge className="bg-kloops-green/10 text-kloops-green border-kloops-green/20">
            <Zap className="w-3 h-3 mr-1" />
            Launch in under 60 seconds
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold font-poppins leading-tight">
            <span className="gradient-text">The easiest way</span><br />
            to add fundraising to anything
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From personal campaigns to app integrations - launch fundraising in minutes. 
            Whether you need quick help or you're building the next big platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-kloops-blue hover:bg-kloops-blue/90 text-lg px-8 py-6 font-medium"
              onClick={() => navigate('/create')}
            >
              Start Fundraising
              <Heart className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-kloops-green text-kloops-green hover:bg-kloops-green hover:text-white"
            >
              Add to Your App
              <Code className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
