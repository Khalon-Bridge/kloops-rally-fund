
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Users, Calendar, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PersonalUserView = () => {
  const navigate = useNavigate();

  const personalUseCases = [
    { icon: Heart, title: "Memorial expenses", description: "Honor loved ones with dignity" },
    { icon: Shield, title: "Emergency funds", description: "Quick help when crisis strikes" },
    { icon: Users, title: "Community projects", description: "Rally neighbors for local causes" },
    { icon: Calendar, title: "Event funding", description: "Celebrations and gatherings" }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-poppins mb-4">
          Quick help when you need it most
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From ask to thank you in minutes. No complicated forms, no lengthy approval process.
        </p>
      </div>
      
      <div className="grid md:grid-cols-4 gap-6">
        {personalUseCases.map((useCase, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-all duration-200">
            <CardHeader>
              <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-kloops-blue to-kloops-green flex items-center justify-center mb-4">
                <useCase.icon className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="font-poppins text-lg">{useCase.title}</CardTitle>
              <CardDescription>{useCase.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button 
          size="lg" 
          onClick={() => navigate('/create')}
          className="bg-kloops-blue hover:bg-kloops-blue/90"
        >
          Start Your Campaign
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default PersonalUserView;
