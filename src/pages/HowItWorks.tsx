import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Code, Users, Zap, Shield, BarChart3, Smartphone, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
const HowItWorks = () => {
  const navigate = useNavigate();
  const personalSteps = [{
    step: "1",
    title: "Choose Your Goal",
    description: "Set a target amount, deadline, or keep it open-ended. Pick from templates or start from scratch.",
    icon: Heart
  }, {
    step: "2",
    title: "Customize & Share",
    description: "Add photos, tell your story, and customize the look. Share via social media, QR codes, or direct links.",
    icon: Users
  }, {
    step: "3",
    title: "Collect & Manage",
    description: "Receive donations instantly. Track progress with real-time analytics and thank your supporters.",
    icon: BarChart3
  }];
  const developerSteps = [{
    step: "1",
    title: "Get API Keys",
    description: "Sign up, get your API keys, and access our comprehensive documentation and SDKs.",
    icon: Code
  }, {
    step: "2",
    title: "Integrate in Minutes",
    description: "Drop in our React component, embed our widget, or use our REST API. Works with any platform.",
    icon: Zap
  }, {
    step: "3",
    title: "Go Live",
    description: "Your users can start fundraising immediately. Monitor usage and customize the experience.",
    icon: Globe
  }];
  const features = [{
    title: "Instant Setup",
    description: "From idea to live campaign in under 30 seconds",
    icon: Zap
  }, {
    title: "Mobile Optimized",
    description: "Perfect experience on any device, any screen size",
    icon: Smartphone
  }, {
    title: "Secure & Trusted",
    description: "Bank-level security with fraud protection built-in",
    icon: Shield
  }, {
    title: "Real-time Analytics",
    description: "Track donations, engagement, and campaign performance",
    icon: BarChart3
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-kloops-blue/10 to-kloops-green/10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins gradient-text">
              How Kloops Works
            </h1>
            <p className="text-xl text-muted-foreground">
              Whether you're raising money for a cause or building an app, kloops makes fundraising simple and powerful.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Users Flow */}
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
            return <Card key={index} className="relative overflow-hidden">
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
                </Card>;
          })}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-kloops-blue hover:bg-kloops-blue/90" onClick={() => navigate('/create')}>
              Start Your Campaign
            </Button>
          </div>
        </div>
      </section>

      {/* Developer Flow */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-kloops-green border-kloops-green">
              <Code className="h-3 w-3 mr-1" />
              For Developers
            </Badge>
            <h2 className="text-3xl font-bold font-poppins mb-4">Integrate in 3 Simple Steps</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Add powerful fundraising features to any app, website, or platform with our flexible APIs and SDKs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {developerSteps.map((step, index) => {
            const Icon = step.icon;
            return <Card key={index} className="relative overflow-hidden">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 rounded-full bg-kloops-green/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-kloops-green" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 rounded-full bg-kloops-green text-white flex items-center justify-center text-sm font-bold">
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
                </Card>;
          })}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-kloops-green hover:bg-kloops-green/90 text-white">
              View API Docs
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
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
            return <Card key={index} className="text-center">
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
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-kloops-blue to-kloops-green">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto space-y-6 text-white">
            <h2 className="text-3xl font-bold font-poppins">Ready to Get Started?</h2>
            <p className="text-xl opacity-90">
              Join thousands who are already using kloops to make fundraising effortless.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={() => navigate('/create')}>
                Start Fundraising
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:text-kloops-blue bg-blue-800 hover:bg-blue-700">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default HowItWorks;