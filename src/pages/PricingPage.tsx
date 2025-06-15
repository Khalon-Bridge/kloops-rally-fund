
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import PricingCalculator from "@/components/pricing/PricingCalculator";
import HybridBenefits from "@/components/pricing/HybridBenefits";
import UseCaseExamples from "@/components/pricing/UseCaseExamples";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import DeveloperPricing from "@/components/pricing/DeveloperPricing";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import TrustIndicators from "@/components/pricing/TrustIndicators";
import PricingCTA from "@/components/pricing/PricingCTA";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PricingHero />
      <PricingCalculator />
      <HybridBenefits />
      <ComparisonTable />
      <UseCaseExamples />
      <DeveloperPricing />
      <TrustIndicators />
      <PricingFAQ />
      <PricingCTA />
      <Footer />
    </div>
  );
};

export default PricingPage;
