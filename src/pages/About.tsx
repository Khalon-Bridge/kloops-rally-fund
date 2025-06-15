
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Users, 
  Target, 
  Zap, 
  Shield, 
  Globe,
  TrendingUp,
  Award
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Transparency",
      description: "Complete visibility into fees, processing costs, and fund distribution. No hidden charges, ever."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Speed",
      description: "From campaign creation to fund delivery, we prioritize getting help to those who need it quickly."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Compassion",
      description: "Every campaign represents someone's story. We treat each fundraiser with care and respect."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "Building connections between those who need help and those willing to give."
    }
  ];

  const stats = [
    { number: "98.5%", label: "of donations reach recipients" },
    { number: "24hrs", label: "average fund delivery time" },
    { number: "$0", label: "platform setup costs" },
    { number: "20+", label: "supported cryptocurrencies" }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      description: "Former fintech executive passionate about democratizing fundraising."
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-founder", 
      description: "Blockchain engineer focused on transparent, secure payment systems."
    },
    {
      name: "Emily Thompson",
      role: "Head of Trust & Safety",
      description: "Dedicated to keeping our platform safe and protecting user funds."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-kloops-blue/10 to-kloops-green/10">
        <div className="container text-center">
          <Badge variant="outline" className="mb-4 text-kloops-blue border-kloops-blue">
            About Us
          </Badge>
          <h1 className="text-5xl font-bold font-poppins mb-6 gradient-text">
            Reimagining fundraising for the digital age
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            kloop.fund was born from a simple belief: when people need help, getting funds to them should be fast, 
            transparent, and cost-effective. We're building the future of fundraising.
          </p>
          <Button asChild size="lg" className="bg-kloops-blue hover:bg-kloops-blue/90">
            <Link to="/create">Start Your Campaign</Link>
          </Button>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-poppins mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In 2023, our founders experienced firsthand the frustrations of traditional fundraising platforms. 
                  High fees, slow payouts, and lack of transparency were creating barriers between people in need and those wanting to help.
                </p>
                <p>
                  We knew there had to be a better way. By leveraging modern payment technologies and cryptocurrency, 
                  we could create a platform that puts recipients first - keeping more money in their pockets and getting it there faster.
                </p>
                <p>
                  Today, kloop.fund serves thousands of campaigns worldwide, from medical emergencies to community projects, 
                  all with the same commitment to transparency and efficiency that started our journey.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-kloops-blue mb-2">{stat.number}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container text-center">
          <Target className="h-12 w-12 text-kloops-blue mx-auto mb-6" />
          <h2 className="text-3xl font-bold font-poppins mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            To create the world's most transparent and efficient fundraising platform, 
            where help reaches those who need it most without unnecessary barriers or costs.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Globe className="h-8 w-8 text-kloops-green mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Global Access</h3>
              <p className="text-sm text-muted-foreground">
                Anyone, anywhere can create a campaign and receive support from a global community.
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-8 w-8 text-kloops-blue mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Maximum Impact</h3>
              <p className="text-sm text-muted-foreground">
                More of every donation reaches its intended recipient through our low-fee structure.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 text-kloops-orange mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Trust & Safety</h3>
              <p className="text-sm text-muted-foreground">
                Advanced security measures and verification processes protect all users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at kloop.fund, from product development to customer support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-kloops-blue mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals working to make fundraising better for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-kloops-blue to-kloops-green mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-kloops-blue font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-kloops-blue to-kloops-green">
        <div className="container text-center text-white">
          <h2 className="text-3xl font-bold font-poppins mb-4">
            Join our mission
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you're raising funds or supporting others, become part of a community that's changing how the world gives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/create">Start Fundraising</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-kloops-blue">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
