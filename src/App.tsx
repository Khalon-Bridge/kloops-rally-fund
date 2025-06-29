
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateCampaign from "./pages/CreateCampaign";
import CampaignPage from "./pages/CampaignPage";
import AdminDashboard from "./pages/AdminDashboard";
import HowItWorks from "./pages/HowItWorks";
import PricingPage from "./pages/PricingPage";
import NotFound from "./pages/NotFound";
import Templates from "./pages/Templates";
import HelpCenter from "./pages/HelpCenter";
import ContactUs from "./pages/ContactUs";
import FeesAndCosts from "./pages/FeesAndCosts";
import Privacy from "./pages/Privacy";
import SafetyAndSecurity from "./pages/SafetyAndSecurity";
import Terms from "./pages/Terms";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/create" element={<CreateCampaign />} />
          <Route path="/campaign/:id" element={<CampaignPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/fees" element={<FeesAndCosts />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/safety" element={<SafetyAndSecurity />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
