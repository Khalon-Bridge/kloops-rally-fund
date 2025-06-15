
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import CorePricing from "@/components/pricing/CorePricing";
import FreeFeatures from "@/components/pricing/FreeFeatures";
import PremiumPlans from "@/components/pricing/PremiumPlans";
import DeveloperPricing from "@/components/pricing/DeveloperPricing";
import UseCaseExamples from "@/components/pricing/UseCaseExamples";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import TrustIndicators from "@/components/pricing/TrustIndicators";
import PricingCTA from "@/components/pricing/PricingCTA";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PricingHero />
      <CorePricing />
      <FreeFeatures />
      <PremiumPlans />
      <DeveloperPricing />
      <UseCaseExamples />
      <ComparisonTable />
      <TrustIndicators />
      <PricingFAQ />
      <PricingCTA />
      <Footer />
    </div>
  );
};

export default PricingPage;
