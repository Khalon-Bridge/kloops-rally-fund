
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Heart, Shield, Clock, Users, TrendingUp, Target, Calendar } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const successStories = [
    {
      type: "TARGET",
      title: "Help Sarah's medical bills",
      raised: 8500,
      target: 10000,
      contributors: 127,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
    },
    {
      type: "NONE",
      title: "Memorial fund for John",
      raised: 15600,
      contributors: 89,
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop"
    },
    {
      type: "BOTH",
      title: "Community garden project",
      raised: 3200,
      target: 5000,
      daysLeft: 12,
      contributors: 45,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop"
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Create your kloop",
      description: "Choose your fundraising type and set up your campaign in under 30 seconds",
      icon: Target,
      color: "bg-kloops-blue/10 text-kloops-blue"
    },
    {
      step: 2,
      title: "Share with friends",
      description: "Send your unique link via text, social media, or email to rally support",
      icon: Users,
      color: "bg-kloops-green/10 text-kloops-green"
    },
    {
      step: 3,
      title: "Collect donations",
      description: "Watch contributions come in real-time with instant notifications",
      icon: Heart,
      color: "bg-kloops-orange/10 text-kloops-orange"
    }
  ];

  const campaignTypes = [
    {
      icon: TrendingUp,
      title: "Open-Ended",
      description: "Collect donations indefinitely with no target or deadline",
      examples: ["Memorial funds", "Community support", "Ongoing causes"]
    },
    {
      icon: Target,
      title: "Goal-Based",
      description: "Set a target amount to reach with optional deadlines",
      examples: ["Medical bills", "Emergency expenses", "Project funding"]
    },
    {
      icon: Calendar,
      title: "Time-Sensitive",
      description: "Rally support quickly with urgent deadlines",
      examples: ["Crisis situations", "Event funding", "Emergency relief"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-background opacity-5" />
        <div className="container relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge className="bg-kloops-green/10 text-kloops-green border-kloops-green/20">
              <Clock className="w-3 h-3 mr-1" />
              30-second setup
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold font-poppins leading-tight">
              <span className="gradient-text">Quick help</span><br />
              when you need it most
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From ask to thank you in minutes. The fastest way to rally friends and family for any cause, emergency, or celebration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-kloops-blue hover:bg-kloops-blue/90 text-lg px-8 py-6 font-medium"
                onClick={() => navigate('/create')}
              >
                Start a kloop
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                See success stories
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-kloops-green" />
                <span>Bank-level security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-kloops-blue" />
                <span>Instant setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-kloops-orange" />
                <span>Social sharing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Types Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Choose the right approach for your cause
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Different situations need different strategies. Pick the campaign type that fits your goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {campaignTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-200 hover-scale">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-kloops-blue to-kloops-green flex items-center justify-center mb-4">
                    <type.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-poppins">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Perfect for:</p>
                    <ul className="space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-kloops-blue mr-2" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Real stories, real impact
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how people are using kloops to make a difference in their communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-200 cursor-pointer hover-scale">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-white/90 text-gray-900">
                    {story.type === "TARGET" && "Goal-Based"}
                    {story.type === "NONE" && "Open-Ended"}
                    {story.type === "BOTH" && "Time & Goal"}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold font-poppins mb-2">{story.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Raised:</span>
                      <span className="font-medium text-kloops-green">
                        ${story.raised.toLocaleString()}
                      </span>
                    </div>
                    {story.target && (
                      <div className="flex justify-between">
                        <span>Goal:</span>
                        <span className="font-medium">${story.target.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Contributors:</span>
                      <span className="font-medium">{story.contributors}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              How it works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get started in three simple steps. No complicated forms, no lengthy approval process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className={`mx-auto w-16 h-16 rounded-full ${step.color} flex items-center justify-center`}>
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs">
                    Step {step.step}
                  </Badge>
                  <h3 className="text-xl font-semibold font-poppins">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold font-poppins">
              Ready to start your kloop?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands who've raised millions for causes that matter. Setup takes less than a minute.
            </p>
            <Button 
              size="lg" 
              className="bg-kloops-blue hover:bg-kloops-blue/90 text-lg px-8 py-6 font-medium"
              onClick={() => navigate('/create')}
            >
              Start fundraising now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
