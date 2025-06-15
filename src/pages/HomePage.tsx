
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AudienceSelector from "@/components/home/AudienceSelector";
import IntegrationExamples from "@/components/home/IntegrationExamples";
import DualCTA from "@/components/home/DualCTA";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AudienceSelector />
      <IntegrationExamples />
      <DualCTA />
      <Footer />
    </div>
  );
};

export default HomePage;
