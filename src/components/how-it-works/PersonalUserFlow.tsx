
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PersonalUserFlow = () => {
  const navigate = useNavigate();
  
  const personalSteps = [
    {
      step: "1",
      title: "Choose Your Goal",
      description: "Set a target amount, deadline, or keep it open-ended. Pick from templates or start from scratch.",
      icon: Heart
    },
    {
      step: "2",
      title: "Customize & Share",
      description: "Add photos, tell your story, and customize the look. Share via social media, QR codes, or direct links.",
      icon: Users
    },
    {
      step: "3",
      title: "Collect & Manage",
      description: "Receive donations instantly. Track progress with real-time analytics and thank your supporters.",
      icon: BarChart3
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-kloops-blue border-kloops-blue">
            <Heart className="h-3 w-3 mr-1" />
            For Fundraisers
          </Badge>
          <h2 className="text-3xl font-bold font-poppins mb-4">Raise Money in 3 Simple Steps</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Perfect for emergencies, celebrations, community projects, or any cause that matters to you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {personalSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-kloops-blue/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-kloops-blue" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 rounded-full bg-kloops-blue text-white flex items-center justify-center text-sm font-bold">
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
          <Button size="lg" className="bg-kloops-blue hover:bg-kloops-blue/90" onClick={() => navigate('/create')}>
            Start Your Campaign
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PersonalUserFlow;
