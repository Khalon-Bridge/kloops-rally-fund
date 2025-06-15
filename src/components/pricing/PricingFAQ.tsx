
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
      question: "When do I pay fees?",
      answer: "You only pay fees when you successfully receive donations. If your campaign doesn't raise any money, you pay nothing at all."
    },
    {
      question: "Are there any hidden costs?",
      answer: "Absolutely not. Our only fee is 2.4% + $0.30 per donation received. No setup fees, no monthly fees, no cancellation fees, no surprise charges."
    },
    {
      question: "Can I change plans?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and you'll only be charged the prorated difference."
    },
    {
      question: "What if my campaign doesn't raise money?",
      answer: "You pay nothing. Our success-based pricing means you only pay when donations actually come in. No donations = no fees."
    },
    {
      question: "How do developer integrations work?",
      answer: "Developer API access follows the same pricing structure. Transaction fees are the same (2.4%, 2.1%, or 1.9% based on your plan) and are billed to your organization account."
    },
    {
      question: "How does billing work for teams?",
      answer: "Plans are billed per organization, not per user. Your entire team can collaborate on campaigns under one billing account with unlimited users."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, bank transfers, and digital wallets including Apple Pay and Google Pay for both campaigns and plan subscriptions."
    },
    {
      question: "Is there a minimum campaign amount?",
      answer: "No minimum! Whether you're raising $50 or $50,000, our platform works the same way with the same transparent pricing structure."
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
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our pricing and how kloops.fund works.
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
