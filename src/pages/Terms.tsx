
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Shield, 
  AlertTriangle, 
  Users, 
  CreditCard,
  Scale,
  Mail
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const Terms = () => {
  const lastUpdated = "January 15, 2024";

  const sections = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "User Accounts",
      content: [
        "You must be at least 18 years old to create an account",
        "You are responsible for maintaining the security of your account",
        "You must provide accurate and complete information",
        "One person may not maintain multiple accounts"
      ]
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payment Terms",
      content: [
        "Platform fee of 1.5% applies to all successful donations",
        "Processing fees are charged separately based on payment method",
        "Refunds are handled according to our refund policy",
        "Chargebacks may result in account suspension"
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Campaign Guidelines",
      content: [
        "Campaigns must be legal and comply with applicable laws",
        "No fraudulent, misleading, or deceptive campaigns",
        "We reserve the right to review and remove campaigns",
        "Campaign creators are responsible for fulfilling their commitments"
      ]
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Prohibited Uses",
      content: [
        "Illegal activities or content",
        "Hate speech, harassment, or discrimination",
        "Campaigns promoting violence or harm",
        "Intellectual property infringement"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-background to-muted/30">
        <div className="container text-center">
          <Badge variant="outline" className="mb-4 text-kloops-blue border-kloops-blue">
            Legal
          </Badge>
          <h1 className="text-4xl font-bold font-poppins mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
            These terms govern your use of kloop.fund and outline the rights and responsibilities of all users.
          </p>
          <p className="text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Key Terms */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="text-center mb-12">
            <Scale className="h-12 w-12 text-kloops-blue mx-auto mb-4" />
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Key Terms & Conditions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understanding your rights and responsibilities when using kloop.fund.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="text-kloops-blue mb-2">
                    {section.icon}
                  </div>
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-2 h-2 bg-kloops-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  By accessing and using kloop.fund, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">2. Platform Fees and Payments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  kloop.fund charges a 1.5% platform fee on all successful donations. Additional processing fees apply based on the payment method chosen by the donor. 
                  These fees are clearly disclosed before any transaction is completed.
                </p>
                <p className="text-muted-foreground">
                  Campaign creators will receive 98.5% of all donations after platform fees. Funds are typically available within 24-48 hours for cryptocurrency donations 
                  and 2-5 business days for traditional payment methods.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">3. User Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Users are responsible for the accuracy of all information provided, including campaign descriptions, financial goals, and personal details. 
                  Campaign creators must use funds for their stated purpose and provide updates to donors as appropriate.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">4. Privacy and Data Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information. 
                  By using kloop.fund, you consent to the collection and use of information as outlined in our Privacy Policy.
                </p>
                <Button asChild variant="outline">
                  <Link to="/privacy">Read Privacy Policy</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">5. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  kloop.fund acts as a platform connecting campaign creators with donors. We are not responsible for the fulfillment of campaign promises 
                  or the use of funds by campaign creators. Our liability is limited to the extent permitted by law.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">6. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. Users will be notified of significant changes via email or platform notification. 
                  Continued use of the platform after changes constitutes acceptance of the new terms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container text-center">
          <Mail className="h-12 w-12 text-kloops-blue mx-auto mb-4" />
          <h2 className="text-3xl font-bold font-poppins mb-4">
            Questions about our terms?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you have any questions about these Terms of Service, please don't hesitate to contact our legal team.
          </p>
          <Button asChild className="bg-kloops-blue hover:bg-kloops-blue/90">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
