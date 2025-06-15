import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  HelpCircle, 
  CreditCard, 
  Shield, 
  MessageCircle, 
  BookOpen, 
  DollarSign,
  Users,
  Zap,
  FileText
} from "lucide-react";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const popularTopics = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "How fees work",
      description: "Understanding our transparent pricing model",
      articles: ["Platform fees explained", "Processing costs by payment method", "Fee calculator guide"]
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payment methods",
      description: "Credit cards, crypto, and bank transfers",
      articles: ["Accepting cryptocurrency", "Credit card processing", "Bank transfer setup"]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Creating campaigns",
      description: "Step-by-step guide to start fundraising",
      articles: ["Setting up your first campaign", "Writing effective descriptions", "Adding photos and videos"]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safety & security",
      description: "Keeping your funds and data safe",
      articles: ["Identity verification", "Fraud prevention", "Data protection"]
    }
  ];

  const quickStart = [
    {
      step: "1",
      title: "Create your campaign",
      description: "Tell your story with photos, videos, and a compelling description"
    },
    {
      step: "2", 
      title: "Share with your network",
      description: "Spread the word through social media, email, and messaging"
    },
    {
      step: "3",
      title: "Receive donations",
      description: "Get 98.5% of every donation with complete transparency"
    },
    {
      step: "4",
      title: "Withdraw funds",
      description: "Access your money quickly and securely"
    }
  ];

  const faqItems = [
    {
      question: "How much does it cost to use kloop.fund?",
      answer: "Recipients keep 98.5% of donations (1.5% platform fee). Donors pay actual processing costs which vary by payment method: crypto (~1.5%), cards (~2.9% + $0.30), bank transfer ($0.50 flat)."
    },
    {
      question: "How long does it take to receive funds?",
      answer: "Cryptocurrency donations are available within 24 hours. Credit card donations take 2-3 business days. Bank transfers take 3-5 business days to process."
    },
    {
      question: "Is there a minimum or maximum donation amount?",
      answer: "Minimum donation is $5. There's no maximum limit, though larger donations may require additional verification for security purposes."
    },
    {
      question: "Can I edit my campaign after publishing?",
      answer: "Yes, you can edit your campaign description, add updates, and upload new photos or videos at any time. Your campaign URL and basic details remain the same."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, 20+ cryptocurrencies (Bitcoin, Ethereum, USDC, etc.), and bank transfers (ACH). Donors can choose their preferred method."
    },
    {
      question: "How do I verify my identity?",
      answer: "For campaigns raising over $1,000, we require identity verification. Upload a government-issued ID and proof of address. Verification typically takes 24-48 hours."
    }
  ];

  const contactOptions = [
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start chat",
      available: "Available 9 AM - 6 PM EST"
    },
    {
      icon: <HelpCircle className="h-5 w-5" />,
      title: "Email Support", 
      description: "Send us a detailed message",
      action: "Send email",
      available: "Response within 24 hours"
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Documentation",
      description: "Browse our comprehensive guides",
      action: "View docs",
      available: "Always available"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-background to-muted/30">
        <div className="container text-center">
          <Badge variant="outline" className="mb-4 text-kloops-blue border-kloops-blue">
            Help Center
          </Badge>
          <h1 className="text-4xl font-bold font-poppins mb-4">
            How can we help you?
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Find answers to common questions, learn how to use kloop.fund, and get the support you need.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Getting started with kloop.fund
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Launch your first campaign in minutes with our simple 4-step process.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {quickStart.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-kloops-blue text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild className="bg-kloops-blue hover:bg-kloops-blue/90">
              <Link to="/create">Start your campaign</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Popular help topics
            </h2>
            <p className="text-muted-foreground">
              Browse our most requested support categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularTopics.map((topic, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="text-kloops-blue mb-2">
                    {topic.icon}
                  </div>
                  <CardTitle className="text-lg">{topic.title}</CardTitle>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {topic.articles.map((article, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">
                        • {article}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Frequently asked questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers to the most common questions about kloop.fund.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg font-medium">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Still need help?
            </h2>
            <p className="text-muted-foreground">
              Our support team is here to help you succeed with your fundraising goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactOptions.map((option, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-kloops-blue mx-auto mb-4">
                    {option.icon}
                  </div>
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{option.available}</p>
                  <Button variant="outline" className="w-full">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HelpCenter;
