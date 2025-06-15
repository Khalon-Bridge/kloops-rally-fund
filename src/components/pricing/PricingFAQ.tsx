
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const PricingFAQ = () => {
  const faqs = [
    {
      question: "Why do donors pay processing fees?",
      answer: "Complete transparency and recipient benefit. This ensures recipients get the maximum amount (98.5%) while donors have full visibility into what they're paying and why. Traditional platforms hide these costs, reducing what recipients receive."
    },
    {
      question: "Is 1.5% the total fee?",
      answer: "No, 1.5% is just our platform fee taken from the recipient's amount. Processing fees are separate, transparent, and paid by donors. This way recipients know exactly what they'll receive (98.5%) while donors can choose their payment method and associated fees."
    },
    {
      question: "Can donors choose to pay the platform fee too?",
      answer: "We're working on an optional tip feature that will allow donors to cover the platform fee as well, meaning recipients would receive 100% of the intended donation amount."
    },
    {
      question: "What if donors don't want to pay processing fees?",
      answer: "Donors can choose bank transfer (ACH) for minimal fees (just $0.50 flat fee) on larger donations. This is often the most economical option for donations over $100."
    },
    {
      question: "How does this compare to other platforms?",
      answer: "Recipients keep more money with us (98.5% vs ~97.1% with GoFundMe), and donors have complete fee transparency and payment method choice. Other platforms hide processing costs in their platform fees."
    },
    {
      question: "Are there any hidden costs?",
      answer: "Absolutely not. Our platform fee is always 1.5% from the recipient. Processing fees are clearly displayed to donors before they complete their donation. No setup fees, no monthly fees, no surprises."
    },
    {
      question: "How do cryptocurrency payments work?",
      answer: "We support Bitcoin, Ethereum, USDC, and 20+ cryptocurrencies. Crypto payments have the lowest total cost (~3% combined) and are the fastest, most secure option for both donors and recipients."
    },
    {
      question: "What happens if my campaign doesn't raise money?",
      answer: "You pay nothing. Our fees only apply when you successfully receive donations. No donations = no fees."
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-kloops-blue border-kloops-blue">
            Common Questions
          </Badge>
          <h2 className="text-3xl font-bold font-poppins mb-4">
            Understanding our hybrid pricing model
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about transparent fees and how kloops.fund works.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
