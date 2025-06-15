
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { 
  DollarSign, 
  CreditCard, 
  Bitcoin, 
  Building2, 
  TrendingDown,
  Calculator,
  Shield,
  Zap,
  Check
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const FeesAndCosts = () => {
  const [donationAmount, setDonationAmount] = useState([1000]);

  const calculateFees = (amount: number) => {
    const platformFee = amount * 0.015; // 1.5%
    const recipientReceives = amount - platformFee;
    
    return {
      platformFee: Math.round(platformFee * 100) / 100,
      recipientReceives: Math.round(recipientReceives * 100) / 100,
      recipientPercentage: Math.round((recipientReceives / amount) * 10000) / 100
    };
  };

  const fees = calculateFees(donationAmount[0]);

  const paymentMethods = [
    {
      icon: <Bitcoin className="h-6 w-6" />,
      name: "Cryptocurrency",
      processingFee: "~1.5%",
      description: "Bitcoin, Ethereum, USDC, and 20+ cryptocurrencies",
      totalCost: "~3% total",
      benefits: ["Fastest processing", "Lowest total cost", "Most secure"]
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      name: "Credit/Debit Cards",
      processingFee: "2.9% + $0.30",
      description: "Visa, Mastercard, American Express, Discover",
      totalCost: "~4.4% + $0.30 total",
      benefits: ["Most familiar", "Instant donation", "Wide acceptance"]
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      name: "Bank Transfer (ACH)",
      processingFee: "$0.50 flat",
      description: "Direct bank-to-bank transfer",
      totalCost: "1.5% + $0.50 total",
      benefits: ["Lowest fees on large amounts", "Secure", "No percentage fee"]
    }
  ];

  const comparisonData = [
    { platform: "kloop.fund", recipientKeeps: "98.5%", donorFees: "Transparent", setup: "Free" },
    { platform: "GoFundMe", recipientKeeps: "97.1%", donorFees: "Hidden", setup: "Free" },
    { platform: "Kickstarter", recipientKeeps: "95%", donorFees: "Hidden", setup: "Free" },
    { platform: "PayPal", recipientKeeps: "96.8%", donorFees: "Hidden", setup: "Free" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-background to-muted/30">
        <div className="container text-center">
          <Badge variant="outline" className="mb-4 text-kloops-blue border-kloops-blue">
            Transparent Pricing
          </Badge>
          <h1 className="text-4xl font-bold font-poppins mb-4">
            Fees & Costs
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
            Complete transparency on all fees. Recipients keep 98.5% of donations, and donors see exactly what they pay in processing costs.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-kloops-green mb-2">98.5%</div>
              <div className="text-sm text-muted-foreground">Recipients keep</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-kloops-blue mb-2">1.5%</div>
              <div className="text-sm text-muted-foreground">Platform fee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-kloops-orange mb-2">0</div>
              <div className="text-sm text-muted-foreground">Hidden fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Calculator */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="text-center mb-12">
            <Calculator className="h-12 w-12 text-kloops-blue mx-auto mb-4" />
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Fee Calculator
            </h2>
            <p className="text-muted-foreground">
              See exactly how much recipients receive from any donation amount.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Calculate Your Fees</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-4 block">Donation Amount: ${donationAmount[0].toLocaleString()}</label>
                <Slider
                  value={donationAmount}
                  onValueChange={setDonationAmount}
                  max={10000}
                  min={5}
                  step={5}
                  className="mb-6"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-lg">
                  <span>Donation amount:</span>
                  <span className="font-semibold">${donationAmount[0].toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-lg">
                  <span>Platform fee (1.5%):</span>
                  <span className="font-semibold text-kloops-orange">-${fees.platformFee}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-xl">
                    <span className="font-bold">Recipient receives:</span>
                    <span className="font-bold text-kloops-green">${fees.recipientReceives.toLocaleString()}</span>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-2xl font-bold text-kloops-green">{fees.recipientPercentage}%</span>
                    <span className="text-sm text-muted-foreground ml-2">of donation</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Payment Processing Costs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Donors pay actual processing costs based on their chosen payment method. No markup, complete transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-kloops-blue mx-auto mb-4">
                    {method.icon}
                  </div>
                  <CardTitle className="text-lg">{method.name}</CardTitle>
                  <div className="text-2xl font-bold text-kloops-orange">{method.processingFee}</div>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-sm font-medium text-kloops-green mb-2">Total cost to donor:</div>
                    <div className="text-lg font-bold">{method.totalCost}</div>
                  </div>
                  <div className="space-y-2">
                    {method.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <Check className="h-4 w-4 text-kloops-green" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="text-center mb-12">
            <TrendingDown className="h-12 w-12 text-kloops-green mx-auto mb-4" />
            <h2 className="text-3xl font-bold font-poppins mb-4">
              How We Compare
            </h2>
            <p className="text-muted-foreground">
              See how kloop.fund stacks up against other fundraising platforms.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Platform</th>
                      <th className="text-center p-4 font-semibold">Recipients Keep</th>
                      <th className="text-center p-4 font-semibold">Donor Fee Transparency</th>
                      <th className="text-center p-4 font-semibold">Setup Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className={index === 0 ? "bg-kloops-green/5 border-l-4 border-kloops-green" : ""}>
                        <td className="p-4 font-medium">
                          {row.platform}
                          {index === 0 && <Badge className="ml-2 bg-kloops-green">Best</Badge>}
                        </td>
                        <td className="text-center p-4">{row.recipientKeeps}</td>
                        <td className="text-center p-4">{row.donorFees}</td>
                        <td className="text-center p-4">{row.setup}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-kloops-blue to-kloops-green">
        <div className="container text-center text-white">
          <h2 className="text-3xl font-bold font-poppins mb-4">
            Ready to keep more of your donations?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Start fundraising with transparent fees and keep 98.5% of every donation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/create">Start Fundraising Free</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-kloops-blue">
              <Link to="/pricing">View Full Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeesAndCosts;
