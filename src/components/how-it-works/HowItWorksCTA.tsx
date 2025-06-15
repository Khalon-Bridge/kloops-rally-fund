
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HowItWorksCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-kloops-blue to-kloops-green">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto space-y-6 text-white">
          <h2 className="text-3xl font-bold font-poppins">Ready to Get Started?</h2>
          <p className="text-xl opacity-90">
            Join thousands who are already using kloops to make fundraising effortless.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => navigate('/create')}>
              Start Fundraising
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:text-kloops-blue bg-white/10 hover:bg-white">
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksCTA;
