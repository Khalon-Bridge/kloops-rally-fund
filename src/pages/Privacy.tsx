
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Lock, 
  Eye, 
  Users, 
  Database, 
  Globe,
  FileText,
  AlertCircle,
  Clock,
  Mail
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
  const dataTypes = [
    {
      icon: <Users className="h-5 w-5" />,
      title: "Personal Information",
      description: "Name, email, phone number, and profile details you provide",
      usage: "Account creation, communication, and identity verification"
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: "Financial Information",
      description: "Payment details, donation history, and transaction records",
      usage: "Processing payments and maintaining transaction records"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Technical Information",
      description: "IP address, device information, and usage analytics",
      usage: "Security, fraud prevention, and platform improvement"
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Campaign Information",
      description: "Campaign details, updates, and public content you create",
      usage: "Displaying your campaigns and facilitating donations"
    }
  ];

  const privacyPrinciples = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Data Minimization",
      description: "We only collect data that's necessary for platform functionality and legal compliance."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Secure Storage",
      description: "All data is encrypted in transit and at rest using industry-standard security measures."
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Transparency",
      description: "Clear information about what data we collect, why we collect it, and how it's used."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "User Control",
      description: "You maintain control over your personal information and can request changes or deletion."
    }
  ];

  const rights = [
    "Access your personal data and receive a copy",
    "Correct inaccurate or incomplete information",
    "Delete your personal data (subject to legal requirements)",
    "Restrict processing of your data in certain circumstances",
    "Object to processing based on legitimate interests",
    "Data portability to transfer your data to another service"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-background to-muted/30">
        <div className="container text-center">
          <Badge variant="outline" className="mb-4 text-kloops-blue border-kloops-blue">
            <Shield className="h-3 w-3 mr-1" />
            Privacy Policy
          </Badge>
          <h1 className="text-4xl font-bold font-poppins mb-4">
            Your Privacy Matters
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
            We're committed to protecting your privacy and being transparent about how we collect, use, and protect your personal information.
          </p>
          
          <div className="text-sm text-muted-foreground">
            <Clock className="h-4 w-4 inline mr-2" />
            Last updated: December 15, 2024
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Our Privacy Principles
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide how we handle your personal information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {privacyPrinciples.map((principle, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-kloops-blue mx-auto mb-4">
                    {principle.icon}
                  </div>
                  <CardTitle className="text-lg">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              What Information We Collect
            </h2>
            <p className="text-muted-foreground">
              We collect only the information necessary to provide our services effectively and securely.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {dataTypes.map((type, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="text-kloops-blue">
                      {type.icon}
                    </div>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="text-sm font-medium mb-1">What we collect:</div>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-1">How we use it:</div>
                    <p className="text-sm text-muted-foreground">{type.usage}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sharing */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              How We Share Your Information
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We never sell your personal information. We only share data in limited circumstances to provide our services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-kloops-green">Service Providers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  We share data with trusted partners who help us provide our services:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Payment processors (Stripe)</li>
                  <li>• Email service providers</li>
                  <li>• Cloud hosting services</li>
                  <li>• Analytics providers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-kloops-blue">Legal Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  We may share information when required by law:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Legal proceedings</li>
                  <li>• Government requests</li>
                  <li>• Fraud prevention</li>
                  <li>• Safety protection</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-kloops-orange">Public Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Some information is public by design:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Campaign details</li>
                  <li>• Public updates</li>
                  <li>• Campaign creator profiles</li>
                  <li>• Donation amounts (optional)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Your Privacy Rights
            </h2>
            <p className="text-muted-foreground">
              You have important rights regarding your personal information.
            </p>
          </div>

          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-kloops-blue" />
                <span>Your Rights Include:</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {rights.map((right, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-kloops-green mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{right}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-kloops-blue/5 rounded-lg border border-kloops-blue/20">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-kloops-blue mt-0.5" />
                  <div>
                    <div className="font-medium text-sm mb-1">Exercise Your Rights</div>
                    <p className="text-sm text-muted-foreground">
                      To exercise any of these rights, contact us at privacy@kloop.fund. 
                      We'll respond within 30 days of receiving your request.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security & Contact */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lock className="h-5 w-5 text-kloops-green" />
                  <span>Data Security</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  We implement comprehensive security measures to protect your personal information:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• End-to-end encryption for all data transmission</li>
                  <li>• Advanced firewall and intrusion detection</li>
                  <li>• Regular security audits and penetration testing</li>
                  <li>• Secure data centers with 24/7 monitoring</li>
                  <li>• Employee background checks and training</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-kloops-orange" />
                  <span>Contact Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Have questions about our privacy practices? We're here to help:
                </p>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium">Privacy Officer</div>
                    <div className="text-sm text-muted-foreground">privacy@kloop.fund</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">General Support</div>
                    <div className="text-sm text-muted-foreground">support@kloop.fund</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Response Time</div>
                    <div className="text-sm text-muted-foreground">Within 30 days for privacy requests</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
