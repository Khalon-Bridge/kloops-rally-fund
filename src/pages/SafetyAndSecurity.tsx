
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  FileCheck, 
  CreditCard,
  Users,
  Globe,
  Zap,
  CheckCircle,
  XCircle,
  Phone,
  Mail
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const SafetyAndSecurity = () => {
  const securityFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Advanced Fraud Detection",
      description: "AI-powered systems monitor all transactions for suspicious activity and automatically flag potential fraud.",
      details: ["Real-time transaction monitoring", "Machine learning algorithms", "Risk scoring for all donations"]
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Bank-Level Encryption",
      description: "All data is protected with 256-bit SSL encryption, the same standard used by major financial institutions.",
      details: ["End-to-end encryption", "Secure data transmission", "Protected storage systems"]
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Identity Verification",
      description: "Campaign creators undergo identity verification to ensure legitimacy and build donor confidence.",
      details: ["Government ID verification", "Address confirmation", "Phone number validation"]
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Secure Payment Processing",
      description: "Payments are processed by Stripe, a PCI DSS Level 1 certified payment processor trusted by millions.",
      details: ["PCI compliance", "Tokenized payment data", "Multi-layer security"]
    }
  ];

  const safetyGuidelines = [
    {
      category: "For Campaign Creators",
      icon: <Users className="h-5 w-5" />,
      guidelines: [
        "Be honest and transparent about your fundraising purpose",
        "Provide regular updates to your donors",
        "Use real photos and accurate information",
        "Respond promptly to donor questions",
        "Keep accurate records of how funds are used"
      ]
    },
    {
      category: "For Donors",
      icon: <Eye className="h-5 w-5" />,
      guidelines: [
        "Research the campaign and creator before donating",
        "Look for verification badges and detailed descriptions",
        "Be cautious of emotional manipulation tactics",
        "Report suspicious campaigns immediately",
        "Keep records of your donations for tax purposes"
      ]
    }
  ];

  const warningSignsData = [
    {
      type: "Red Flags",
      icon: <XCircle className="h-5 w-5 text-red-500" />,
      signs: [
        "Vague or inconsistent story details",
        "No verification badge on large campaigns",
        "Pressure to donate immediately",
        "No photos or stock images only",
        "Refusing to provide additional information"
      ]
    },
    {
      type: "Green Flags",
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      signs: [
        "Detailed, specific campaign description",
        "Verified identity badge",
        "Regular updates and communication",
        "Clear photos and documentation",
        "Responsive to donor questions"
      ]
    }
  ];

  const reportingProcess = [
    {
      step: "1",
      title: "Identify the Issue",
      description: "Notice something suspicious or against our community guidelines"
    },
    {
      step: "2",
      title: "Report Immediately",
      description: "Use the report button on the campaign or contact our safety team"
    },
    {
      step: "3",
      title: "Investigation",
      description: "Our team reviews the report within 24 hours"
    },
    {
      step: "4",
      title: "Action Taken",
      description: "Appropriate measures are implemented to protect the community"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-background to-muted/30">
        <div className="container text-center">
          <Badge variant="outline" className="mb-4 text-kloops-blue border-kloops-blue">
            <Shield className="h-3 w-3 mr-1" />
            Safety & Security
          </Badge>
          <h1 className="text-4xl font-bold font-poppins mb-4">
            Your Safety is Our Priority
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
            We've built comprehensive security measures and safety protocols to protect both campaign creators and donors on our platform.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-kloops-green mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Fraud prevention rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-kloops-blue mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Security monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-kloops-orange mb-2">256-bit</div>
              <div className="text-sm text-muted-foreground">SSL encryption</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Advanced Security Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Multiple layers of protection keep your money and personal information safe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="text-kloops-blue">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-kloops-green" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Community Safety Guidelines
            </h2>
            <p className="text-muted-foreground">
              Follow these best practices to ensure a safe fundraising experience for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {safetyGuidelines.map((guideline, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="text-kloops-blue">
                      {guideline.icon}
                    </div>
                    <span>{guideline.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {guideline.guidelines.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-kloops-green mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="text-center mb-12">
            <AlertTriangle className="h-12 w-12 text-kloops-orange mx-auto mb-4" />
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Spotting Legitimate Campaigns
            </h2>
            <p className="text-muted-foreground">
              Learn to identify trustworthy campaigns and avoid potential scams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {warningSignsData.map((warning, index) => (
              <Card key={index} className={warning.type === "Green Flags" ? "border-green-200 bg-green-50/50" : "border-red-200 bg-red-50/50"}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    {warning.icon}
                    <span>{warning.type}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {warning.signs.map((sign, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${warning.type === "Green Flags" ? "bg-green-500" : "bg-red-500"}`}></div>
                        <span className="text-sm">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting Process */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              How to Report Suspicious Activity
            </h2>
            <p className="text-muted-foreground">
              Help us maintain a safe platform by reporting concerning campaigns or behavior.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {reportingProcess.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-kloops-blue text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Need Immediate Help?
            </h2>
            <p className="text-muted-foreground">
              Our safety team is available 24/7 to address urgent security concerns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-8 w-8 text-kloops-orange mx-auto mb-4" />
                <CardTitle>Emergency Hotline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-lg font-bold">1-800-KLOOP-911</div>
                  <div className="text-sm text-muted-foreground">Available 24/7 for urgent safety issues</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Mail className="h-8 w-8 text-kloops-blue mx-auto mb-4" />
                <CardTitle>Safety Team</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-lg font-bold">safety@kloop.fund</div>
                  <div className="text-sm text-muted-foreground">Response within 1 hour for safety reports</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Phone className="h-8 w-8 text-kloops-green mx-auto mb-4" />
                <CardTitle>General Support</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-lg font-bold">support@kloop.fund</div>
                  <div className="text-sm text-muted-foreground">For non-urgent questions and assistance</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-kloops-blue hover:bg-kloops-blue/90">
              <Link to="/contact">Contact Our Safety Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SafetyAndSecurity;
