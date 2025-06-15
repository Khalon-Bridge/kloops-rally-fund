
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Heart, Shield, Clock, Users, TrendingUp, Target, Calendar, Code, Zap, Smartphone, Globe, Copy, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
  const navigate = useNavigate();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples = {
    react: `import { FundraiserWidget } from '@kloops/react'

<FundraiserWidget 
  campaignId="camp_123"
  theme="minimal"
  onDonation={(donation) => console.log(donation)}
/>`,
    javascript: `<script src="https://cdn.kloops.fund/widget.js"></script>
<div data-kloops-campaign="camp_123"></div>`,
    api: `fetch('https://api.kloops.fund/campaigns', {
  method: 'POST',
  headers: { 'Authorization': 'Bearer YOUR_API_KEY' },
  body: JSON.stringify({
    title: 'Help Sarah',
    target: 5000,
    type: 'TARGET'
  })
})`
  };

  const personalUseCases = [
    { icon: Heart, title: "Memorial expenses", description: "Honor loved ones with dignity" },
    { icon: Shield, title: "Emergency funds", description: "Quick help when crisis strikes" },
    { icon: Users, title: "Community projects", description: "Rally neighbors for local causes" },
    { icon: Calendar, title: "Event funding", description: "Celebrations and gatherings" }
  ];

  const developerUseCases = [
    { icon: Globe, title: "Memorial websites", description: "Add fundraising to tribute sites" },
    { icon: Users, title: "Charity platforms", description: "White-label fundraising solution" },
    { icon: Smartphone, title: "Mobile apps", description: "In-app donation features" },
    { icon: Code, title: "Community sites", description: "Neighbor-to-neighbor fundraising" }
  ];

  const integrationExamples = [
    {
      title: "Memorial Site Integration",
      description: "Add fundraising to memorial websites in minutes",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop",
      tech: "WordPress Plugin"
    },
    {
      title: "School Portal",
      description: "Parent-teacher fundraising made simple",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
      tech: "React Component"
    },
    {
      title: "Community App",
      description: "Neighborhood fundraising features",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      tech: "Mobile SDK"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Dual Audience */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-background opacity-5" />
        <div className="container relative z-10">
          <div className="text-center space-y-8 max-w-5xl mx-auto">
            <Badge className="bg-kloops-green/10 text-kloops-green border-kloops-green/20">
              <Zap className="w-3 h-3 mr-1" />
              30-second integration
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

      {/* Audience Selector */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container">
          <Tabs defaultValue="personal" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="personal" className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  I need to raise money
                </TabsTrigger>
                <TabsTrigger value="developer" className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  I'm building an app
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="personal" className="space-y-12">
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
            </TabsContent>

            <TabsContent value="developer" className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold font-poppins mb-4">
                  Add fundraising to your app in minutes
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Simple SDK, powerful API, and everything you need to integrate fundraising anywhere.
                </p>
              </div>

              {/* Code Examples */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">React Component</CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(codeExamples.react, 'react')}
                      >
                        {copiedCode === 'react' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
                      <code>{codeExamples.react}</code>
                    </pre>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Vanilla JS</CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(codeExamples.javascript, 'js')}
                      >
                        {copiedCode === 'js' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
                      <code>{codeExamples.javascript}</code>
                    </pre>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">REST API</CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(codeExamples.api, 'api')}
                      >
                        {copiedCode === 'api' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
                      <code>{codeExamples.api}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {developerUseCases.map((useCase, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-all duration-200">
                    <CardHeader>
                      <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-kloops-green to-kloops-orange flex items-center justify-center mb-4">
                        <useCase.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="font-poppins text-lg">{useCase.title}</CardTitle>
                      <CardDescription>{useCase.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <div className="text-center space-y-4">
                <Button size="lg" variant="outline" className="border-kloops-green text-kloops-green hover:bg-kloops-green hover:text-white">
                  View API Docs
                  <Code className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-muted-foreground">
                  Free up to 100 transactions/month • No setup fees • 5-minute integration
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Integration Examples */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              See kloops in action
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real examples of how developers and organizations use kloops to add fundraising to their platforms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {integrationExamples.map((example, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-200 cursor-pointer">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img 
                    src={example.image} 
                    alt={example.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-kloops-blue text-white">
                    {example.tech}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold font-poppins mb-2">{example.title}</h3>
                  <p className="text-sm text-muted-foreground">{example.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold font-poppins">Ready to start fundraising?</h3>
              <p className="text-muted-foreground">
                Join thousands who've raised millions for causes that matter. Setup takes less than a minute.
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

      <Footer />
    </div>
  );
};

export default HomePage;
