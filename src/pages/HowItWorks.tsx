
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HowItWorksHero from "@/components/how-it-works/HowItWorksHero";
import PersonalUserFlow from "@/components/how-it-works/PersonalUserFlow";
import DeveloperFlow from "@/components/how-it-works/DeveloperFlow";
import HowItWorksFeatures from "@/components/how-it-works/HowItWorksFeatures";
import HowItWorksCTA from "@/components/how-it-works/HowItWorksCTA";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HowItWorksHero />
      <PersonalUserFlow />
      <DeveloperFlow />
      <HowItWorksFeatures />
      <HowItWorksCTA />
      <Footer />
    </div>
  );
};

export default HowItWorks;
