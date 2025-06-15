
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Calculator, Zap, CreditCard, Banknote } from "lucide-react";

const PricingCalculator = () => {
  const [donationAmount, setDonationAmount] = useState([1000]);
  
  const amount = donationAmount[0];
  const recipientReceives = amount * 0.985; // Always 98.5%
  
  const paymentMethods = [
    {
      name: "Cryptocurrency",
      icon: Zap,
      processingFee: amount * 0.015,
      donorPays: amount + (amount * 0.015),
      badge: "Lowest Total Cost",
      recommended: true,
      description: "Bitcoin, Ethereum, USDC, and 20+ cryptocurrencies"
    },
    {
      name: "Credit/Debit Cards",
      icon: CreditCard,
      processingFee: (amount * 0.029) + 0.30,
      donorPays: amount + (amount * 0.029) + 0.30,
      badge: "Most Popular",
      recommended: false,
      description: "Visa, Mastercard, American Express, Apple Pay, Google Pay"
    },
    {
      name: "Bank Transfer (ACH)",
      icon: Banknote,
      processingFee: 0.50,
      donorPays: amount + 0.50,
      badge: "Best for Large Donations ($100+)",
      recommended: false,
      description: "Direct bank transfer with minimal fees"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-kloops-blue border-kloops-blue">
            <Calculator className="h-3 w-3 mr-1" />
            Interactive Calculator
          </Badge>
          <h2 className="text-3xl font-bold font-poppins mb-4">
            Choose your payment method, see exact fees
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Complete transparency means you know exactly what everyone pays and receives.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-kloops-blue/20">
            <CardHeader>
              <CardTitle className="text-center">Donation Amount</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-kloops-blue mb-2">
                  ${amount.toLocaleString()}
                </div>
                <Slider
                  value={donationAmount}
                  onValueChange={setDonationAmount}
                  max={5000}
                  min={10}
                  step={10}
                  className="max-w-md mx-auto"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-2 max-w-md mx-auto">
                  <span>$10</span>
                  <span>$5,000</span>
                </div>
              </div>
              
              <div className="text-center p-4 bg-kloops-green/10 rounded-lg border border-kloops-green/20">
                <div className="text-lg font-semibold text-kloops-green">
                  Recipient Always Receives: ${recipientReceives.toFixed(2)}
                </div>
                <div className="text-sm text-muted-foreground">
                  That's 98.5% - guaranteed, regardless of payment method
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {paymentMethods.map((method, index) => {
              const Icon = method.icon;
              const totalCostPercent = ((method.donorPays - amount) / amount * 100);
              
              return (
                <Card key={index} className={`relative ${method.recommended ? 'border-kloops-green ring-2 ring-kloops-green/20' : 'border-border'}`}>
                  {method.recommended && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-kloops-green text-white">🚀 Recommended</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-12 h-12 rounded-full bg-kloops-blue/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-kloops-blue" />
                    </div>
                    <CardTitle className="text-lg">{method.name}</CardTitle>
                    <Badge variant="outline" className="mx-auto">
                      {method.badge}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center space-y-2">
                      <div className="text-sm text-muted-foreground">Donor pays:</div>
                      <div className="text-2xl font-bold text-kloops-blue">
                        ${method.donorPays.toFixed(2)}
                      </div>
                      <div className="text-sm text-kloops-orange">
                        Total cost: {totalCostPercent.toFixed(1)}%
                      </div>
                    </div>
                    
                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Donation amount:</span>
                        <span>${amount.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Processing fee:</span>
                        <span>${method.processingFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm font-semibold border-t pt-2">
                        <span>Platform fee (1.5%):</span>
                        <span>${(amount * 0.015).toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <div className="text-xs text-muted-foreground">
                      {method.description}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
